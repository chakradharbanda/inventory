import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private productsUrl = 'http://localhost:8080/api/products'; // URL to web api
  token = localStorage.getItem('token');

  // Create the HttpHeaders object with the Authorization header
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    }),
  };

  constructor(private http: HttpClient) {}

  /** GET products from the server */
  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.productsUrl, this.httpOptions)
      .pipe(catchError(this.handleError<Product[]>('getProducts', [])));
  }

  /** GET product by id. Will 404 if id not found */
  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http
      .get<Product>(url)
      .pipe(catchError(this.handleError<Product>(`getProduct id=${id}`)));
  }

  /** PUT: update the product on the server */
  updateProduct(product: Product): Observable<any> {
    return this.http
      .put(this.productsUrl, product, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateProduct')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
