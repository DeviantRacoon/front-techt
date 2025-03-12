// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { ListUserComponent } from './list-users/list-user.component';

// Standalone
import { TableComponent, HeadComponent, ModalComponent, ToastComponent } from 'src/app/shared/components';

// Routing
import { AdministrationRoutes } from './administration.routing';

@NgModule({
  imports: [
    CommonModule,
    TableComponent,
    HeadComponent,
    ModalComponent,
    ToastComponent,
    AdministrationRoutes,
  ],
  declarations: [
    ListUserComponent
  ]
})
export class AdministrationModule { }
