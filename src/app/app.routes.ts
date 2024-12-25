import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/product/products-list.component';
import { CartComponent } from './pages/cart.component';
import { ProductDetailComponent } from './pages/product-detail.component';

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
