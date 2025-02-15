import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    ProductCardComponent,
    NgxPaginationModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Product2Service],
})
export class BuscaProductoComponent {
  @Output() buscarEstado = new EventEmitter<boolean>();

  formularioBusqueda: FormGroup;
  productosFiltrados: Product[] = [];
  resultadosDeBusqueda = false;
  page: number = 1;

  constructor(
    private fb: FormBuilder,
    private productService: Product2Service,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {
    this.formularioBusqueda = this.fb.group({
      termino: ['', [Validators.required]],
    });
  }
  buscarProducto() {
    const termino = this.formularioBusqueda.get('termino')?.value;
    if (this.formularioBusqueda.valid && termino.trim().length > 0) {
      this.productService.getProducts().subscribe((allProducts) => {
        this.productosFiltrados = this.productService.filterProducts(
          termino,
          allProducts
        );
        this.buscarEstado.emit(this.productosFiltrados.length > 0);
        this.cdRef.markForCheck();
      });
    }
  }
  borrar() {
    this.formularioBusqueda.reset();
    this.productosFiltrados = [];
    this.buscarEstado.emit(false);
    this.cdRef.markForCheck();
  }

  realizarBusqueda(query: string) {
    this.resultadosDeBusqueda = true;
    this.buscarEstado.emit(this.resultadosDeBusqueda);
  }
}
