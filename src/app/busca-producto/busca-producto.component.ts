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

@Component({
  selector: 'app-busca-producto',
  templateUrl: './busca-producto.component.html',
  styleUrls: ['./busca-producto.component.css'],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, CommonModule,ReactiveFormsModule,ProductCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Product2Service], 
})
export class BuscaProductoComponent {
  
  @Output() buscarEstado = new EventEmitter<boolean>();

  formularioBusqueda: FormGroup;
  productosFiltrados: Product[] = [];
  buscarRealizado = false;
  
  constructor(private fb: FormBuilder, private productService: Product2Service) {
    this.formularioBusqueda = this.fb.group({
      termino: ['', [Validators.required]]
    });
  }
   
      buscarProducto() {
        const termino = this.formularioBusqueda.get('termino')?.value;
        if (this.formularioBusqueda.valid) {
          this.productService.filterProducts(termino).subscribe(products => {
            this.productosFiltrados = products;
          });
        } else {
          this.productosFiltrados = [];
        }
        this.buscarEstado.emit(termino.trim().length > 0);
      }
  }