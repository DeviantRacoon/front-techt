// Angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Shared
import { TActionTableHeaders } from 'src/app/shared/models';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class HeadComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() headerActions: TActionTableHeaders[] = [];
 @Input() segments: { primary: string; secondary?: string } = { primary: '' };

  constructor(private route: ActivatedRoute) { }
}

