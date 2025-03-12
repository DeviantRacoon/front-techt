// Angular
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = 'Modal';
  @Input() description = '';
  @Input() action: { label: string; cta: () => void } = { label: 'Aceptar', cta: () => {} };
  @Input() caption = '';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'md'; 
  @Input() loading = false;
  @Output() close = new EventEmitter<void>();

  isClosing = false; 

  closeModal() {
    this.isClosing = true;
    setTimeout(() => {
      this.isOpen = false;
      this.isClosing = false;
      this.close.emit();
    }, 400);
  }
}
