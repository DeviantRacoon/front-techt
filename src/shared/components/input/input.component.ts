import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  imports: [CommonModule]
})
export class InputComponent {
  @Input() type: string = 'text'; 
  @Input() id: string = ''; 
  @Input() label: string = ''; 
  @Input() placeholder: string = ''; 
  @Input() class: string = '';
  @Input() required: boolean = false; 
  @Input() feedback: string = ''; 
  constructor() { }

}
