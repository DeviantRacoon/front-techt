// Angular
import { Component, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Output() toggleSidebarEvent = new EventEmitter<Boolean>();
  sidebarOpen = true;

  menuItems = [
    { label: 'Dashboard', icon: 'home-outline', link: '/' },
    {
      label: 'Administración',
      icon: 'people-circle-outline',
      submenu: [
        { label: 'Usuarios', link: '/administration/list-users' },
        { label: 'Finanzas', link: '/reports/finance' },
      ],
    },
    {
      label: 'Reportes',
      icon: 'file-tray-full-outline',
      submenu: [
        { label: 'Ventas', link: '/reports/sales' },
        { label: 'Finanzas', link: '/reports/finance' },
      ],
    },
    { label: 'Cuentas', icon: 'wallet-outline', link: '/administration/users' },
    { label: 'Clientes', icon: 'people-outline', link: '/customers' },
    {
      label: 'Configuración',
      icon: 'construct-outline',
      submenu: [
        { label: 'Perfil', link: '/settings/profile' },
        { label: 'Seguridad', link: '/settings/security' },
      ],
    },
  ];

  filteredMenuItems = [...this.menuItems];

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.toggleSidebarEvent.emit(this.sidebarOpen);
}


  filterMenu(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredMenuItems = this.menuItems.filter(item => {
      const hasMatchingLabel = item.label.toLowerCase().includes(searchTerm);
      const hasMatchingSubmenu = item.submenu?.some(subItem =>
        subItem.label.toLowerCase().includes(searchTerm)
      );
      return hasMatchingLabel || hasMatchingSubmenu;
    });
  }
}

