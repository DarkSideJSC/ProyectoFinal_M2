import { Injectable , inject} from "@angular/core";
import { HttpClient } from "@angular/common/http"; 
import { Observable } from "rxjs";


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

  filterProducts(termino: string, products: any[]): any[] {
    const lowerTerm = termino.toLowerCase();
    return products.filter(product =>
      product.title.toLowerCase().includes(lowerTerm) ||
      product.category.toLowerCase().includes(lowerTerm)
    );
  }
}