import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list.component';
import { CartComponent } from './components/cart.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
