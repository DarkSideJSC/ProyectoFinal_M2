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
  sumaProductosTotal: number = 0;


  constructor(private comprasService: ComprasService) {}
  vVisible: boolean= false; 
  ngOnInit() {
    this.comprasService.carrito$.subscribe(productos => {
      this.productos = productos;
      this.cantidadProductos = productos.length;

    });
  }
  vaciarCarrito() {
    this.comprasService.limpiarCarrito();
    this.productos = []; 
    this.cantidadProductos = 0; 
  }
  
}