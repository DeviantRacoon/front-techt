import { Routes, RouterModule } from '@angular/router';

// Component
import { WrapperComponent } from './wrapper.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'administration',
        loadChildren: () => import('../modules/administration/administration.module').then(m => m.AdministrationModule)
      },
    ],
  },
];

export const WrapperRoutes = RouterModule.forChild(routes);

