import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      title: 'Chompa',
      price: 1000,
      description: 'Chompa de Mujer',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VzfAwKlFuWtAou1-ikkVBIt5Y4W90ooCqQ&s',
      category: 'Mujer',
    },
    {
      id: 2,
      title: 'Jean',
      price: 2000,
      description: 'Jean de Mujer',
      image: 'https://m.media-amazon.com/images/I/81br8qC0rlL._AC_UY1000_.jpg',
      category: 'Mujer',
    },
    {
      id: 3,
      title: 'Polera',
      price: 1000,
      description: 'Polera Roja de Hombre',
      image:
        'https://catlifestyle.com.bo/wp-content/uploads/2023/04/4010011-13041.jpg',
      category: 'Hombre',
    },
    {
      id: 4,
      title: 'Jean',
      price: 2000,
      description: 'Jean de Hombre',
      image:
        'https://topitop.vteximg.com.br/arquivos/ids/366499-1000-1248/1636540_1.jpg?v=638630743770270000',
      category: 'Hombre',
    },
    {
      id: 5,
      title: 'Zapatilla',
      price: 5000,
      description: 'Zapatillas para mujer',
      image: 'https://zapateriasdemexico.com/cdn/shop/products/112887.jpg',
      category: 'Mujer',
    },
    {
      id: 6,
      title: 'Zapatilla',
      price: 5000,
      description: 'Zapatillas de hombre',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfejFT5IrAS045XfvEKCNonuuGyFkk43Sbw&s',
      category: 'Hombre',
    },
    {
      id: 7,
      title: 'Reloj',
      price: 50,
      description: 'Reloj inteligente',
      image:
        'https://www.heavenimagenes.com/heavencommerce/68ac9d04-8767-4aca-9951-49f2fea1383b/images/v2/HI%20WATCH%20PLUS/31880_medium.jpg',
      category: 'Unisex',
    },
  ];

  constructor() {}
  /*------------------------------------------------------------*/
  getProducts(): Product[] {
    return this.products;
  }
  /*------------------------------------------------------------*/
  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
  /*------------------------------------------------------------*/
  filterProducts(termino: string): Product[] {
    const lowerTerm = termino.toLowerCase();
    return this.products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerTerm) ||
        product.category.toLowerCase().includes(lowerTerm)
    );
  }
}
