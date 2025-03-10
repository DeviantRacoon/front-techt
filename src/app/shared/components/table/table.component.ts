// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// Shared
import { StatusChipDirective } from '../../directive';
import { TColumn, TActionTable, TActionTableHeaders, TRow } from '../../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [CommonModule, StatusChipDirective]
})
export class TableComponent {
  @Input() columns: TColumn[] = [];
  @Input() actions: TActionTable[] = [];
  @Input() headerActions: TActionTableHeaders[] = [];
  @Input() row: TRow[] = [];
  @Input() currentPage = 1;
  @Input() rowsPerPage = 5;
  @Input() total = 0;
  @Input() selectedActions: TActionTable[] = [];
  @Input() loading = false;


  @Output() pageChange = new EventEmitter<number>();
  @Output() rowsPerPageChange = new EventEmitter<number>();

  selectedItems: Set<number> = new Set();
  skeletonLoader = Array(this.rowsPerPage).fill(0).map((_, i) => i);

  totalPages() {
    return Math.ceil(this.total / this.rowsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.pageChange.emit(page);
    }
  }

  toggleSelection(id: number) {
    this.selectedItems.has(id) ? this.selectedItems.delete(id) : this.selectedItems.add(id);
  }

  toggleSelectAll() {
    if (this.selectedItems.size === this.row.length) {
      this.row.forEach(item => this.selectedItems.delete(item.id));
    } else {
      this.row.forEach(item => this.selectedItems.add(item.id));
    }
  }

  changeRowsPerPage(event: Event) {
    this.rowsPerPageChange.emit(+(event.target as HTMLSelectElement).value);
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
