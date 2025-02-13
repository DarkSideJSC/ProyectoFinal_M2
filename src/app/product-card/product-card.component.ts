import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, Inject, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ComprasService } from '../services/compras.service';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../detail-product/detail-product.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  imports: [MatCardModule, MatButtonModule, RouterModule,],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
      producto_id: any;

      @Input() id: number = 0;
      @Input() title: string = '';
      @Input() price: number = 0;
      @Input() description: string = '';
      @Input() image: string = '';
      @Input() category: string = '';
      @Output() productoAgregado = new EventEmitter<any>();

      constructor(@Inject(ComprasService) private comprasService: ComprasService) {}

     agregarCarrito() {
    const producto = {
      id: this.id,
      name: this.title,
      price: this.price,
      description: this.description,
      picture: this.image,
      category: this.category,
    };

    console.log('Producto agregado al carrito:', producto);
    this.comprasService.agregarProducto(producto);
    this.productoAgregado.emit(producto);
  }
  
  
}
