// Angular
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Shared
import { TFilter } from '../../models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class FilterComponent implements OnInit {
  @Input() filters: TFilter[] = [];
  @Input() order: 'asc' | 'desc' | 'none' = 'none';
  @Input() searchQuery: { placeholder: string; value: string } = { placeholder: 'Buscar...', value: '' };

  @Output() filtersChanged = new EventEmitter<any>();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.order = params['order'] || 'none';
      this.searchQuery.value = params['search'] || '';
      
      this.filters.forEach(filter => {
        const paramValue = params[filter.label];
        if (paramValue) {
          filter.options.forEach((option: any) => {
            option.selected = option.value === paramValue;
          });
        }
      });

      this.emitFilterChange();
    });
  };

  updateFilter(label: string, event: any) {
    const value = event.target.value;
    
    const queryParams = { ...this.route.snapshot.queryParams, [label]: value };
    this.router.navigate([], { queryParams, queryParamsHandling: 'merge' });
  };

  updateSearch(value: string) {
    this.router.navigate([], {
      queryParams: { search: value },
      queryParamsHandling: 'merge',
    });
  };

  toggleOrder() {
    this.order = this.order === 'asc' ? 'desc' : 'asc';
    this.router.navigate([], { queryParams: { order: this.order }, queryParamsHandling: 'merge' });
  };

  clearFilters() {
    this.router.navigate([], { queryParams: {} });
  };

  emitFilterChange() {
    const activeFilters = this.filters.reduce((acc, filter) => {
      const selectedOption = filter.options.find((opt: any) => opt.selected);
      if (selectedOption) {
        acc[filter.label] = selectedOption.value;
      }
      return acc;
    }, {} as any);
    
    this.filtersChanged.emit({
      search: this.searchQuery.value,
      order: this.order,
      ...activeFilters,
    });
  };
}

