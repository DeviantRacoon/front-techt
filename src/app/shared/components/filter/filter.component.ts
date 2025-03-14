// Angular
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Animation
import { trigger, state, style, transition, animate } from '@angular/animations';

// Shared
import { TFilter } from '../../models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  animations: [
    trigger('dropdownAnimation', [
      state('closed', style({ opacity: 0, transform: 'translateY(-10px)' })),
      state('open', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('closed => open', [
        style({ opacity: 0 }),
        animate('200ms ease-out')
      ]),
      transition('open => closed', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class FilterComponent implements OnInit {
  @Input() filters: TFilter[] = [];
  @Input() order: 'asc' | 'desc' | 'none' = 'none';
  @Input() searchQuery: { placeholder: string; value: string } = { placeholder: 'Buscar...', value: '' };
  @Output() filtersChanged = new EventEmitter<any>();
  isDropdownOpen = false;
  selectedDefault = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.stateFiltersURL();
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

  stateFiltersURL() {
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

  clearFilters() {
    this.filters.forEach(filter => 
      filter.options.forEach((option: any) => option.selected = false)
    );

    this.router.navigate([], { queryParams: {} });
    this.emitFilterChange();
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

