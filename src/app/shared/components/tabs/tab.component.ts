import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { TabItemComponent } from './tab-item.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  animations: [
    trigger('tabAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(10px)' }))
      ])
    ])
  ]
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabItemComponent) tabs!: QueryList<TabItemComponent>;
  selectedIndex = 0;

  get selectedTab(): TabItemComponent | undefined {
    return this.tabs?.toArray()[this.selectedIndex];
  }

  ngAfterContentInit() {
    if (this.tabs.length > 0) {
      this.selectTab(0);
    }
  }

  selectTab(index: number) {
    this.selectedIndex = index;
  }
}
