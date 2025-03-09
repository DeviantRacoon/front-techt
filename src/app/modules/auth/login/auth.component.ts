import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  credentials: { email: string, password: string } = { email: '', password: '' };
  loading: 'idle' | 'pending' | 'success' | 'error' = 'idle';

  constructor() { }

  login(credentials: { email: string, password: string }) {
    this.loading = 'pending';

    setTimeout(() => {
      console.log(credentials);
      this.loading = 'error';
    }, 2000);
  };

}
