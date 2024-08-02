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
  private catergoriesUrl = 'http://localhost:8080/api/categories';
  token = localStorage.getItem('token');

  // Create the HttpHeaders object with the Authorization header
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
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

  /** POST: add a new product to the server */
  addProduct(product: Product): Observable<Product> {
    return this.http
      .post<Product>(this.productsUrl, product, this.httpOptions)
      .pipe(catchError(this.handleError<Product>('addProduct')));
  }

  /** PUT: update the product on the server */
  updateProduct(product: Product): Observable<any> {
    return this.http
      .put(this.productsUrl + `/${product?.id}`, product, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateProduct')));
  }

  deleteProduct(id: number): Observable<any> {
    return this.http
      .delete(this.productsUrl + `/${id}`)
      .pipe(catchError(this.handleError<any>('deleteProduct')));
  }

  getCategories(): Observable<any[]> {
    return this.http
      .get<any[]>(this.catergoriesUrl, this.httpOptions)
      .pipe(catchError(this.handleError<Product[]>('getCategories', [])));
  }

  /** GET product by id. Will 404 if id not found */
  getCategory(id: number): Observable<Product> {
    const url = `${this.catergoriesUrl}/${id}`;
    return this.http
      .get<Product>(url)
      .pipe(catchError(this.handleError<Product>(`getCategory id=${id}`)));
  }

  addCategory(category: any): Observable<any> {
    return this.http
      .post<any>(this.catergoriesUrl, category, this.httpOptions)
      .pipe(catchError(this.handleError<Product>('addCategory')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
