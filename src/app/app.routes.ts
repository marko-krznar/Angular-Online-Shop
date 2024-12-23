import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/product/products-list.component';
import { CartComponent } from './pages/cart.component';

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
