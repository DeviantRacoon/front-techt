import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {
  sidebarActive: boolean = true;

  constructor() { }

  toggleSidebar(event: any) {
    this.sidebarActive = event;
  }
}
