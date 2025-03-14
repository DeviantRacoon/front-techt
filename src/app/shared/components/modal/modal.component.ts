import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' }))
      ])
    ]),
    trigger('backdropAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
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

  closeModal() {
    this.isOpen = false;
    setTimeout(() => this.close.emit(), 150);
  }
}
