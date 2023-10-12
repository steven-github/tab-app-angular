import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  selectedTab: number = 1;

  tabs = [
    { label: 'Tab 1', content: 'Tab 1 content' },
    { label: 'Tab 2', content: 'Tab 2 content' },
  ];

  selectTab(tab: number): void {
    this.selectedTab = tab;
  }
}
