import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatButton, MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatDivider, MatDividerModule} from '@angular/material/divider';
import { AssignmentsComponent} from "./assignments/assignments.component";
import { CommonModule} from "@angular/common";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule} from "@angular/forms";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {Router} from "@angular/router";
import {AuthService} from "./shared/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, MatDivider, MatIcon, MatIconButton, AssignmentsComponent, MatToolbarModule, CommonModule, MatSidenavModule,
    FormsModule, RouterLink, MatSlideToggle, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router, protected authService: AuthService) {
  }

  onLogin() {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/login]'])
    }
    else {
      this.authService.logOut();
      this.router.navigate(['/home']);
    }
  }

  title = 'Application de devoirs à rendre (Assignments)';
  opened = false;
}
