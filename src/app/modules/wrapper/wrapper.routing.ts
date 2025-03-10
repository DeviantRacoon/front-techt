import { Routes, RouterModule } from '@angular/router';

// Component
import { WrapperComponent } from './wrapper.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdministrationComponent } from '../administration/administration.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'admin', component: AdministrationComponent },
    ],
  },
];

export const WrapperRoutes = RouterModule.forChild(routes);
