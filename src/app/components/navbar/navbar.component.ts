import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class NavbarComponent implements OnInit  {

  navbarCollapsed = true;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router) {}



  routesCalling(path: string){
    if(path === "home")  {
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/temple/'+path]);
    console.log("routesCalling")
    }
    
  }
}
