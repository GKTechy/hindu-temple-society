import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-religionsin-temple',
  standalone: true,
  imports: [],
  templateUrl: './religionsin-temple.component.html',
  styleUrl: './religionsin-temple.component.css'
})
export class ReligionsinTempleComponent {
  constructor(private router: Router) { }
  
  templePages(path: string){
    this.router.navigate(['temple/pages/templeReligions/'],{ queryParams: { title: path} });
  }

}
