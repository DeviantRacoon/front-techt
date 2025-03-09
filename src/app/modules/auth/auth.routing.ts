import { Routes, RouterModule } from '@angular/router';

// Component
import { AuthComponent } from './login/auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
];

export const AuthRoutes = RouterModule.forChild(routes);
