import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  private productosEnCarrito: any[] = [];
  private carritoSubject = new BehaviorSubject<any[]>([]);

  carrito$ = this.carritoSubject.asObservable();

  agregarProducto(producto: any) {
    this.productosEnCarrito.push(producto);
    this.carritoSubject.next(this.productosEnCarrito);
  }

  obtenerCantidadProductos(): number {
    return this.productosEnCarrito.length;
  }

  limpiarCarrito() {
    this.productosEnCarrito = [];
    this.carritoSubject.next(this.productosEnCarrito);
  }

  obtenerProductos() {
    return this.productosEnCarrito;
  }
}