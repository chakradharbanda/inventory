import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService
      .login({ username: this.username, password: this.password })
      .subscribe({
        next: (success) => {
          if (success) {
            this.router.navigate(['']);
          } else {
            alert('Login failed');
          }
        },
        error: (error) => {
          alert('Login failed');
        },
      });
  }
}
