import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const excludedUrls = [
      '/api/auth/register', // Registration endpoint
      '/api/auth/login', // Login endpoint
    ];

    // Check if the request URL matches any of the excluded URLs
    const isExcluded = excludedUrls.some((url) => req.url.includes(url));

    if (isExcluded) {
      // If the URL is excluded, proceed without adding the Authorization header
      return next.handle(req);
    }
    const token = localStorage.getItem('token');
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
