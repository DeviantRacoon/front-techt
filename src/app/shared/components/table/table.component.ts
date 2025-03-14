// Angular
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

// Shared
import { StatusChipDirective } from '../../directive';
import { TColumn, TActionTable, TRow, TFilter } from '../../models';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [CommonModule, StatusChipDirective, FilterComponent]
})
export class TableComponent implements OnInit {
  @Input() columns: TColumn[] = [];
  @Input() actions: TActionTable[] = [];
  @Input() row: TRow[] = [];
  @Input() total = 0;
  @Input() selectedActions: TActionTable[] = [];
  @Input() selectRow?: (item: any) => void;
  @Input() filters: TFilter[] = [];
  @Input() order: 'asc' | 'desc' | 'none' = 'none';
  @Input() searchQuery: { placeholder: string; value: string } = { placeholder: 'Buscar...', value: '' };
  @Input() loading = false;

  @Output() pageChange = new EventEmitter<number>();
  @Output() rowsPerPageChange = new EventEmitter<number>();

  currentPage = 1;
  rowsPerPage = 5;

  selectedItems: Set<number> = new Set();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
      this.rowsPerPage = +params['rowsPerPage'] || 5;
      this.emitPaginationChange();
    });
  }

  totalPages(): number {
    return Math.ceil(this.total / this.rowsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.updateQueryParams({ page });
    }
  }

  changeRowsPerPage(event: Event): void {
    const newRowsPerPage = +(event.target as HTMLSelectElement).value;
    this.updateQueryParams({ rowsPerPage: newRowsPerPage, page: 1 }); // Reinicia a la primera página
  }

  updateQueryParams(params: any): void {
    this.router.navigate([], {
      queryParams: { ...this.route.snapshot.queryParams, ...params },
      queryParamsHandling: 'merge',
    });
  }

  emitPaginationChange(): void {
    this.pageChange.emit(this.currentPage);
    this.rowsPerPageChange.emit(this.rowsPerPage);
  }

  toggleSelection(id: number): void {
    this.selectedItems.has(id) ? this.selectedItems.delete(id) : this.selectedItems.add(id);
  }

  toggleSelectAll(): void {
    if (this.selectedItems.size === this.row.length) {
      this.row.forEach(item => this.selectedItems.delete(item.id));
    } else {
      this.row.forEach(item => this.selectedItems.add(item.id));
    }
  }

  getColumnSize(size: string | undefined): string {
    const sizes: { [key: string]: string } = {
      xs: '5%',
      sm: '10%',
      md: '15%',
      lg: '20%',
      xl: '25%'
    };
    return sizes[size || 'md'];
  }
}
