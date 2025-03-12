import { Injectable } from '@angular/core';

interface Toast {
  id: number;
  title: string;
  message: string;
  variant: 'success' | 'danger' | 'warning' | 'info' | 'primary' | 'secondary';
  timestamp: string;
  duration: number;
  isFadingOut?: boolean; // Nueva propiedad para manejar la animación de salida
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: Toast[] = [];
  private idCounter = 0;

  constructor() {}

  showToast(title: string, message: string, variant: Toast['variant'], duration: number = 5000) {
    const toast: Toast = {
      id: ++this.idCounter,
      title,
      message,
      variant,
      timestamp: 'Just now',
      duration
    };

    this.toasts.push(toast);

    setTimeout(() => this.fadeOutToast(toast.id), duration - 400); 
  }

  fadeOutToast(id: number) {
    const toast = this.toasts.find(t => t.id === id);
    if (toast) {
      toast.isFadingOut = true; 

      setTimeout(() => this.removeToast(id), 400);
    }
  }

  removeToast(id: number) {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
  }
}
