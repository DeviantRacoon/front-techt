// Angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FilterComponent {
  @Input() filters: { label: string; options: { label: string; value: string }[] }[] = [
    { label: 'Filtro 1', options: [{ label: 'Opción 1', value: 'opcion1' }] },
  ];
  @Input() order: 'asc' | 'desc' = 'desc';
  @Input() searchQuery: { placeholder: string; value: string } = { placeholder: 'Buscar...', value: '' };

  constructor() { }

  toggleOrder() {
    this.order = this.order === 'asc' ? 'desc' : 'asc';
  }

}
