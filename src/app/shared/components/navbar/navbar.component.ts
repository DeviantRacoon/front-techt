import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>();

  emitToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
