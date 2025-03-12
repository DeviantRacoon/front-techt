// Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Shared
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ToastComponent {
  constructor(public toastService: ToastService) {} 
}
