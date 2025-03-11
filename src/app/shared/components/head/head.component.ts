// Angular
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Shared
import { TActionTableHeaders } from 'src/app/shared/models';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class HeadComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() headerActions: TActionTableHeaders[] = [];

  constructor() { }

  ngOnInit() {
  }

}
