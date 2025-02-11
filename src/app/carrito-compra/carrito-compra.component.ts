import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprasService } from '../services/compras.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrl: './carrito-compra.component.css',
  
  imports: [CommonModule,MatButtonModule],
})
export class CarritoCompraComponent implements OnInit {
  productos: any[] = [];
  cantidadProductos: number=0;

  constructor(private comprasService: ComprasService) {}

  ngOnInit() {
    this.comprasService.carrito$.subscribe(productos => {
      this.productos = productos;
      this.cantidadProductos = productos.length;
    });
  }
  vaciarCarrito() {
    this.comprasService.limpiarCarrito(); // Llamada a un método en tu servicio que limpia el carrito
    this.productos = []; // Limpia la lista de productos en el componente
    this.cantidadProductos = 0; // Resetea la cantidad
  }
  totalCarrito() {
    return this.productos.reduce((acc, producto) => acc + producto.price, 0);
  }
}