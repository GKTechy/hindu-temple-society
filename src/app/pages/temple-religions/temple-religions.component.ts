import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temple-religions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temple-religions.component.html',
  styleUrl: './temple-religions.component.css'
})
export class TempleReligionsComponent {

  activeTab = 'Hindu';

  constructor() { }

  currentactiveTab(selectedTab: string){
    this.activeTab = selectedTab;
  }
  
}
