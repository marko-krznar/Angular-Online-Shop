import { Component, signal } from '@angular/core';
import { ProductCardComponent } from './product-card.component';
import { electronicProducts } from '../../localData/products';

@Component({
	selector: 'app-products-list',
	imports: [ProductCardComponent],
	template: `
		<div class="products-wrapper">
			@for (product of products(); track product.id) {
				<app-product-card [product]="product" class="product-wrapper" />
			}
		</div>
	`,
	styles: ``,
})
export class ProductsListComponent {
	products = signal(electronicProducts);
}
