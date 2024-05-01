import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/helpers/navbar/navbar.component";
import { FooterComponent } from "./components/helpers/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent, FooterComponent]
})
export class AppComponent {
  title = 'AS-PROJECT-FRONT-01924';
}
