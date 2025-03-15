import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        animate('800ms ease-in-out')
      ])
    ])
  ]
})
export class PersonDetailComponent {
  @Input() user = {
    name: 'Sarah Johnson',
    location: 'New York, NY',
    avatar: 'https://bootdey.com/img/Content/avatar/avatar7.png'
  }

  @Input() chips: { label: string; icon: string }[] = [
    { label: 'Senior Level', icon: 'fa fa-star text-warning' },
    { label: 'Full-time', icon: 'fa fa-briefcase' },
    { label: 'New York, NY', icon: 'fa fa-map' }
  ];

  @Input() indicators: { label: string; icon: string }[] = [
    { label: '67 Connections', icon: 'fa fa-users' },
    { label: '2 Projects', icon: 'fa fa-chart-line' },
    { label: '8 Years Experience', icon: 'fa fa-award' }
  ]

  @Input() actions: { label: string; icon: string }[] = [
    { label: 'Message', icon: 'fa fa-envelope' },
    { label: 'View Portfolio', icon: 'fa fa-briefcase' }
  ]
}
