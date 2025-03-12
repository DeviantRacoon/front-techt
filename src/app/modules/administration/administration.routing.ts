import { Routes, RouterModule } from '@angular/router';

// Component
import { ListUserComponent } from './list-users/list-user.component';

const routes: Routes = [
  {
    path: 'list-users',
    component: ListUserComponent
  },
];

export const AdministrationRoutes = RouterModule.forChild(routes);
