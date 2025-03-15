import { Routes, RouterModule } from '@angular/router';

// Component
import { ListUserComponent } from './list-users/list-user.component';
import { UserComponent } from './list-users/user/user.component';

const routes: Routes = [
  {
    path: 'list-users',
    component: ListUserComponent
  },
  {
    path: 'list-users/:id',
    component: UserComponent
  },
];

export const AdministrationRoutes = RouterModule.forChild(routes);
