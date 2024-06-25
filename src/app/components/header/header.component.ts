import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [NavbarComponent],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class HeaderComponent {

}
