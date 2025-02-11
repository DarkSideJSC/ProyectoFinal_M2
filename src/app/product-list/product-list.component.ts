import { Component, OnInit, Inject, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Product2Service } from '../services/product2.service';
import { RouterModule } from '@angular/router';
import { BuscaProductoComponent } from '../busca-producto/busca-producto.component';
import { CarritoCompraComponent } from '../carrito-compra/carrito-compra.component';
import { Product } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  styleUrl: './product-list.component.css',
  templateUrl: './product-list.component.html',
  imports: [ProductCardComponent, CommonModule, RouterModule, BuscaProductoComponent, CarritoCompraComponent],
})
export class ProductListComponent  implements OnInit{
  products: any[] = [];
  
  constructor(@Inject(Product2Service) private product2Service: Product2Service) {}
 
 
  ngOnInit(): void {
    this.product2Service.getProducts().subscribe((products: Product[]) => {
      this.products = products; 
      console.log(this.products);
    }, error => {
      console.error("Error al obtener los productos:", error);
    });
  }

  actualizarEstadoBusqueda(event: any): void {
    // Add your logic here
    console.log(event);
  }
}






