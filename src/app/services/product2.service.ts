import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Product2Service {
  private apiUrl = 'https://fakestoreapi.com/products';
  private http = inject(HttpClient);

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error al recuperar el error', error);
        return of({ error: true, message: 'Error al recuperar productos' });
      })
    );
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error(`Error al recuperar el product CON ID ${id}:`, error);
        return of({
          error: true,
          message: `Error al recuperar el product con ID ${id}`,
        });
      })
    );
  }

  filterProducts(termino: string, products: any[]): any[] {
    const lowerTerm = termino.toLowerCase();
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerTerm) ||
        product.category.toLowerCase().includes(lowerTerm)
    );
  }
}
