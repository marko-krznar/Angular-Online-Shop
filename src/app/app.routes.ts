import { Routes } from '@angular/router';

import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsListComponent } from './components/product/product-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';

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
	{
		path: 'product/:id',
		component: ProductDetailComponent,
	},
];
