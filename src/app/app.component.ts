import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { SiteListComponent } from "./site-list/site-list.component";
import { PasswordListComponent } from './password-list/password-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, SiteListComponent, PasswordListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';
}
