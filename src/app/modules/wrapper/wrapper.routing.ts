import { Routes, RouterModule } from '@angular/router';

// Component
import { WrapperComponent } from './wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
  },
];

export const WrapperRoutes = RouterModule.forChild(routes);
