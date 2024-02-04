import { Component } from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.logIn(this.username, this.password);
    if (this.authService.isAdmin()) {
      this.router.navigate(['/home']);
    } else {
      alert('wrong password')
    }
  }

}
