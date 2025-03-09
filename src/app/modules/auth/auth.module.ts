// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

// Component
import { AuthComponent } from './login/auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { AuthRoutes } from './auth.routing';

// Standard
import { InputComponent, ButtonComponent } from 'src/app/shared/components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutes,
    InputComponent,
    ButtonComponent
  ],
  declarations: [AuthComponent, ForgotPasswordComponent],
  exports: []
})
export class AuthModule { }
