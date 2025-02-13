import { Routes } from '@angular/router';
import { ProductDetailComponent } from './detail-product/detail-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BuscaProductoComponent } from './busca-producto/busca-producto.component';

export const routes: Routes = [
    {   path: '', redirectTo: '/productos', pathMatch: 'full' },
    {   path: 'productos', component: ProductListComponent},
    {   path: 'detalles/:id', component: ProductDetailComponent},
    { path: 'buscar', component: BuscaProductoComponent }, 
    {   path: '**', redirectTo: '/productos' }
];

