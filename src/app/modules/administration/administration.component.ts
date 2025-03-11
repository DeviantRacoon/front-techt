// Angular
import { Component, OnInit } from '@angular/core';

// Shared
import { TColumn, TActionTable, TFilter, TRow } from 'src/app/shared/models';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
})
export class AdministrationComponent implements OnInit {
  filters: TFilter[] = [
    {
      label: 'Estado',
      options: [
        { label: 'Activo', value: 'Activo' },
        { label: 'Inactivo', value: 'Inactivo' },
      ]
    },
    {
      label: 'Tipo',
      options: [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'C', value: 'C' },
      ]
    }
  ];

  order: 'asc' | 'desc' = 'desc';

  loading: boolean = false;
  columns: TColumn[] = [
    { textAlign: 'left', type: 'text', key: 'nombre', name: 'Nombre' },
    { textAlign: 'left', type: 'text', key: 'email', name: 'Email' },
    { textAlign: 'center', type: 'money', key: 'money', name: 'Dinero' },
    { textAlign: 'center', type: 'status', key: 'status', name: 'Estado' },
    { textAlign: 'center', type: 'date', key: 'date', name: 'Fecha Creación' }
  ];

  data: TRow[] = [];

  actions = [
    { icon: 'fa fa-eye', label: 'Ver', cta: (item: any) => console.log('Ver', item), color: 'primary' }
  ];

  headerActions = [
    { icon: 'fa fa-plus', label: 'Agregar', cta: () => console.log('Agregar nuevo'), variant: 'primary' }
  ];

  selectedActions: TActionTable[] = [
    { icon: 'fa fa-edit', label: 'Editar', cta: (item) => console.log('Editar', item), color: 'primary' },
    { icon: 'fa fa-trash', label: 'Eliminar', cta: (item) => console.log('Eliminar', item), color: 'danger' }
  ];

  total = 15;
  currentPage = 1;
  rowsPerPage = 10;

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.data = [
        { id: 1, nombre: 'John Doe', email: 'o7yOg@example.com', money: 100000 , status: 'Activo', date: new Date() },
        { id: 2, nombre: 'John Doe', email: 'o7yOg@example.com', money: 100000 , status: 'Activo', date: new Date() },
        { id: 3, nombre: 'John Doe', email: 'o7yOg@example.com', money: 100000 , status: 'Activo', date: new Date() },
        { id: 4, nombre: 'John Doe', email: 'o7yOg@example.com', money: 100000 , status: 'Activo', date: new Date() },
        { id: 5, nombre: 'John Doe', email: 'o7yOg@example.com', money: 100000 , status: 'Activo', date: new Date() },
        { id: 6, nombre: 'John Doe', email: 'o7yOg@example.com', money: 100000 , status: 'Activo', date: new Date() },
        { id: 7, nombre: 'John Doe', email: 'o7yOg@example.com', money: 100000 , status: 'Activo', date: new Date() },
        { id: 8, nombre: 'John Doe', email: 'o7yOg@example.com', money: 100000 , status: 'Activo', date: new Date() },
        { id: 9, nombre: 'John Doe', email: 'o7yOg@example.com', money: 100000 , status: 'Activo', date: new Date() },
        { id: 10, nombre: 'John Doe', email: 'o7yOg@example.com', money: 100000 , status: 'Activo', date: new Date() }
      ];
      this.loading = false;
    }, 2000)
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  onRowsPerPageChange(rows: number) {
    this.rowsPerPage = rows;
  }
}
