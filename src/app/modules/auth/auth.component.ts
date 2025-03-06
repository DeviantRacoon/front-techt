import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  credentials: { email: string, password: string } = { email: '', password: '' };

  constructor() { }

  login(credentials: { email: string, password: string }) {
    console.log(credentials);
  }

}
