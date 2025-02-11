import { Injectable , inject} from "@angular/core";
import { HttpClient } from "@angular/common/http"; 
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Product2Service {
  private apiUrl = 'https://fakestoreapi.com/products';
  private http = inject(HttpClient);

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  filterProducts(termino: string): Observable<any> {
    const lowerTerm = termino.toLowerCase();
    return this.getProducts().pipe(
      map((products: any[]) => products.filter(product =>
        product.title.toLowerCase().includes(lowerTerm) ||
        product.category.toLowerCase().includes(lowerTerm)
      ))
    );
  }
}