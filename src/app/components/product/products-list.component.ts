import { Component, signal } from '@angular/core';

import { MaterialModule } from '../../material/material.module';

import { ProductCardComponent } from './product-card.component';
import { electronicProducts } from '../../localData/products';

@Component({
	selector: 'app-products-list',
	imports: [ProductCardComponent, MaterialModule],
	template: `
		<div class="products-wrapper">
			@for (product of products(); track product.id) {
				<mat-card class="product-wrapper">
					<app-product-card [product]="product" />
				</mat-card>
			}
		</div>
	`,
	styles: ``,
})
export class ProductsListComponent {
	products = signal(electronicProducts);
}
