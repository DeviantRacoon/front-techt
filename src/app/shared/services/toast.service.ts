import { Injectable } from '@angular/core';
import { TToast } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: TToast[] = [];
  private idCounter = 0;

  constructor() {}

  showToast(title: string, message: string, variant: TToast['variant'], duration: number = 5000) {
    const toast: TToast = {
      id: ++this.idCounter,
      title,
      message,
      variant,
      timestamp: this.formatTimeAgo(new Date()),
      duration
    };

    this.toasts.push(toast);

    setTimeout(() => this.removeToast(toast.id), duration);
  }

  private removeToast(id: number) {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
  }

  private formatTimeAgo(date: Date): string {
    const diff = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (diff < 5) return 'Just now';
    if (diff < 60) return `${diff} seconds ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return `${Math.floor(diff / 86400)} days ago`;
  }
}
