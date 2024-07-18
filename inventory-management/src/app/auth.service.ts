import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: any): Observable<boolean> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/login`, credentials)
      .pipe(
        map(response => {
          localStorage.setItem('access_token', response.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
