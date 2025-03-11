// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { WrapperComponent } from './wrapper.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdministrationComponent } from '../administration/administration.component';

// Standalone
import { SidebarComponent } from 'src/app/shared/module/sidebar/sidebar.component';
import { NavbarComponent } from 'src/app/shared/module/navbar/navbar.component';
import { TableComponent, FilterComponent, HeadComponent } from 'src/app/shared/components';


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
    WrapperRoutes
  ],
  declarations: [
    WrapperComponent,
    DashboardComponent,
    AdministrationComponent
  ]
})
export class WrapperModule { }
