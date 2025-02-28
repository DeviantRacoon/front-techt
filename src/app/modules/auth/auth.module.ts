// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

// Component
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing';

// Standard
import { InputComponent } from 'src/shared/components/input/input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutes,
    InputComponent
  ],
  declarations: [AuthComponent],
  exports: [AuthComponent]
})
export class AuthModule { }
