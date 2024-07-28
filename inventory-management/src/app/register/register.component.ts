import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

interface RegisterData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    RouterModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerData: RegisterData = { username: '', password: '' };
  confirmPassword: string = '';
  passwordMismatch: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (this.registerData.password !== this.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    this.passwordMismatch = false;
    this.http
      .post('http://localhost:8080/api/auth/register', this.registerData)
      .subscribe(
        (response) => {
          console.log('User registered successfully', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Registration error', error);
        }
      );
  }
}
