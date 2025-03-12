// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { WrapperComponent } from './wrapper.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';

// Standalone
import { SidebarComponent } from 'src/app/shared/modules/sidebar/sidebar.component';
import { NavbarComponent } from 'src/app/shared/modules/navbar/navbar.component';
import { TableComponent, FilterComponent, HeadComponent, ModalComponent, ToastComponent } from 'src/app/shared/components';

// Routing
import { WrapperRoutes } from './wrapper.routing';

@NgModule({
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    TableComponent,
    FilterComponent,
    HeadComponent,
    ModalComponent,
    ToastComponent,
    WrapperRoutes
  ],
  declarations: [
    WrapperComponent,
    DashboardComponent,
  ]
})
export class WrapperModule { }
