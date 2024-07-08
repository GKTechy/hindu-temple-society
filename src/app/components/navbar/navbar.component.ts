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
    
  }
  constructor(private router: Router) {}



  routesCalling(path: string){
    if(path === "home")  {
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/temple/'+path]);
      window.scroll(0,0);
    }
    
    this.navbarCollapsed = true;
  }

  

  routesEventsCalling(path: string){
      this.router.navigate(['/events/'+path]);
      window.scroll(0,0);
      this.navbarCollapsed = true;
  }


}
