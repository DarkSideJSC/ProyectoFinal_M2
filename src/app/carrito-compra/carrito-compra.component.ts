import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprasService } from '../services/compras.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrl: './carrito-compra.component.css',

  imports: [CommonModule, MatButtonModule],
})
export class CarritoCompraComponent implements OnInit {
  productos: any[] = [];
  cantidadProductos: number = 0;
  sumaProductosTotal: number = 0;

  constructor(private comprasService: ComprasService) {}
  vVisible: boolean = false;
  ngOnInit() {
    this.comprasService.carrito$.subscribe((productos) => {
      this.productos = productos;
      this.cantidadProductos = productos.length;
      this.sumaProductosTotal = this.productos.reduce(
        (total, item) => total + item.price * (item.cantidad || 1),
        0
      );
    });
  }
  vaciarCarrito() {
    this.comprasService.limpiarCarrito();
    this.productos = [];
    this.cantidadProductos = 0;
    this.sumaProductosTotal = 0;
  }
  calcularTotal() {
    this.sumaProductosTotal = this.productos.reduce(
      (total, producto) => total + producto.precio * (producto.cantidad || 1),
      0
    );
  }
}
