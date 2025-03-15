// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { ListUserComponent } from './list-users/list-user.component';
import { UserComponent } from './list-users/user/user.component';

// Standalone
import {
  TableComponent,
  HeadComponent,
  ModalComponent,
  ToastComponent,
  PersonDetailComponent,
  TabsComponent,
  TabItemComponent
} from 'src/app/shared/components';

// Routing
import { AdministrationRoutes } from './administration.routing';

@NgModule({
  imports: [
    CommonModule,
    TableComponent,
    HeadComponent,
    ModalComponent,
    ToastComponent,
    PersonDetailComponent,
    TabsComponent,
    TabItemComponent,
    AdministrationRoutes,
  ],
  declarations: [ListUserComponent, UserComponent],
})
export class AdministrationModule {}
