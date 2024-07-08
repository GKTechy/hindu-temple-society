import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute

@Component({
  selector: 'app-temple-religions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temple-religions.component.html',
  styleUrl: './temple-religions.component.css'
})
export class TempleReligionsComponent implements OnInit{

  activeTab = 'Hindu';
  constructor(private activatedRoute: ActivatedRoute) { } // Fix typo in constructor parameter
  ngOnInit(): void {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        this.activeTab = params['title'];
      });
  }

  currentactiveTab(selectedTab: string){
    this.activeTab = selectedTab;
  }
  
}
