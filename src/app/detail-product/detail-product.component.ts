import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Product2Service } from '../services/product2.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { Product } from '../services/product.service';
import {
  MatDialogContent,
} from '@angular/material/dialog';


@Component({
  selector: 'app-product-detail',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
  imports: [CommonModule,MatButtonModule, MatDialogContent,],
  providers: [Product2Service] 
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private product2Service: Product2Service,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product2Service.getProductById(productId).subscribe((product: Product) => {
      this.product = product;
    });
  }
  goBack(): void {
    this.router.navigate(['/productos']);
  }

}