import { Component, OnInit, Inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Product2Service } from '../services/product2.service';
import { RouterModule } from '@angular/router';
import { BuscaProductoComponent } from '../busca-producto/busca-producto.component';
import { CarritoCompraComponent } from '../carrito-compra/carrito-compra.component';
import { Product } from '../services/product.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-product-list',
  styleUrl: './product-list.component.css',
  templateUrl: './product-list.component.html',
  imports: [ProductCardComponent, CommonModule, RouterModule, BuscaProductoComponent, CarritoCompraComponent, NgxPaginationModule],
})
export class ProductListComponent  implements OnInit {
  vProducts: any[] = [];
  buscarRealizado = false;
  page: number = 1;
  error: any = null;  // Nueva propiedad para manejar errores

  constructor(@Inject(Product2Service) private product2Service: Product2Service) {}

  ngOnInit(): void {
    this.product2Service.getProducts().subscribe(
      (products: Product[]) => {
        this.vProducts = products;
        console.log(this.vProducts);
      },
      error => {
        console.error("Error al obtener los productos:", error);
        this.error = error;  // Almacenar el error en la propiedad error
      }
    );
  }

  actualizarEstadoBusqueda(event: any): void {
    this.buscarRealizado = event;
    console.log("Estado de la búsqueda:", this.buscarRealizado);
  }
}
