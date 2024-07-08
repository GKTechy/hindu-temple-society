import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive,  HeaderComponent, NavbarComponent, MainComponent, FooterComponent]
})
export class AppComponent {
  title = 'hindu-temple-society';

  constructor(private router: Router) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     console.log('Navigation started to:', event.url);
    //   } else if (event instanceof NavigationEnd) {
    //     console.log('Navigation ended:', event.url);
    //   } else if (event instanceof NavigationError) {
    //     console.log('Navigation error:', event.error);
    //   }
    // });
  }
}
