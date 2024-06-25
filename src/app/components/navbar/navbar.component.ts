import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';


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


  constructor() { }

  ngOnInit(): void {
   
  }

}
