import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    { title: 'Total Sales', value: '$84,254', icon: 'bi bi-arrow-up-circle', change: '+8.4%', color: 'text-success' },
    { title: 'Revenue', value: '$32,698', icon: 'bi bi-arrow-up-circle', change: '+5.2%', color: 'text-success' },
    { title: 'Customers', value: '2,856', icon: 'bi bi-arrow-down-circle', change: '-2.4%', color: 'text-danger' },
    { title: 'Inventory', value: '1,259', icon: 'bi bi-arrow-up-circle', change: '+3.1%', color: 'text-success' }
  ];
}
