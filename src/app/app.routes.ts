import { Routes } from '@angular/router';

import { CartComponent } from './pages/cart.component';
import { ProductDetailComponent } from './pages/product-detail.component';
import { ProductsListComponent } from './components/product/product-list/products-list.component';

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
