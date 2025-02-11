import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from './services/product.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,    CommonModule,    ReactiveFormsModule, ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Diplomado Modulo2';
  productos: Product[] = [];
  carrito: Product[] = [];
  buscarRealizado = false;

  actualizarEstadoBusqueda(estado: boolean) {
    this.buscarRealizado = estado;
  }    
}
