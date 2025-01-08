import { Routes } from '@angular/router';

import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomeComponent,
	},
	{
		path: 'cart',
		component: CartComponent,
	},
	{
		path: 'product/:id',
		component: ProductDetailComponent,
	},
	{
		path: 'category/:id',
		component: CategoryComponent,
	},
];
