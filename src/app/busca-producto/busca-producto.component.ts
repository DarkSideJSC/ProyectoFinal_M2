import {ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product2Service } from '../services/product2.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../services/product.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca-producto',
  templateUrl: './busca-producto.component.html',
  styleUrls: ['./busca-producto.component.css'],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, CommonModule,ReactiveFormsModule,ProductCardComponent, NgxPaginationModule,], 
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Product2Service], 
})
export class BuscaProductoComponent {
  
  @Output() buscarEstado = new EventEmitter<boolean>();

  formularioBusqueda: FormGroup;
  productosFiltrados: Product[] = [];
  resultadosDeBusqueda = false;
  page: number = 1;

  
  constructor(private fb: FormBuilder, private productService: Product2Service, private router: Router ) {
    this.formularioBusqueda = this.fb.group({
      termino: ['', [Validators.required]]
    });
  }
       buscarProducto() {
        const termino = this.formularioBusqueda.get('termino')?.value;
        if (this.formularioBusqueda.valid) {
          this.productService.getProducts().subscribe(allProducts => {
            this.productosFiltrados = this.productService.filterProducts(termino, allProducts);
          });
        } 
        else {
          this.productosFiltrados = [];
        }
        this.buscarEstado.emit(termino.trim().length > 0);
        console.log('Valor del término de búsqueda:', termino);
      }
      borrar(){
        this.formularioBusqueda.reset();
        this.productosFiltrados = [];
        this.router.navigate(['']);
      }
  
  
  realizarBusqueda(query: string) {
    // Aquí iría la lógica para realizar la búsqueda
    // Si se encuentran resultados, se emite el evento con false
    this.resultadosDeBusqueda = true; // Simulando que hay resultados
    this.buscarEstado.emit(this.resultadosDeBusqueda);
  }
}