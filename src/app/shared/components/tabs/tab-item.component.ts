import { Component, Input, TemplateRef, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  template: ``
})
export class TabItemComponent {
  @Input() label = '';
  @ContentChild(TemplateRef) content!: TemplateRef<any>; 
}
