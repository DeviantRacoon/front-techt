// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { WrapperComponent } from './wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Standalone
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';

// Routing
import { WrapperRoutes } from './wrapper.routing';

@NgModule({
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    WrapperRoutes
  ],
  declarations: [
    WrapperComponent,
    DashboardComponent
  ]
})
export class WrapperModule { }
