import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  getProductos() {
    throw new Error('Method not implemented.');
  }
  map(arg0: (t: any) => any) {
    throw new Error('Method not implemented.');
  }
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
