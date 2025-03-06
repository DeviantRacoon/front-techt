// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

// Component
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing';

// Standard
import { InputComponent, ButtonComponent } from 'src/shared/components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutes,
    InputComponent,
    ButtonComponent
  ],
  declarations: [AuthComponent],
  exports: [AuthComponent]
})
export class AuthModule { }
