import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() icon: string = '';
  @Input() variant: string = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() loading: boolean = false;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() class: string = '';

  constructor() { }
}
