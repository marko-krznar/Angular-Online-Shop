import { Component, Input, Signal } from '@angular/core';
import { NgClass } from '@angular/common';

import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
	selector: 'app-products',
	imports: [ProductCardComponent, NgClass],
	templateUrl: './products.component.html',
	styleUrl: './products.component.scss',
})
export class ProductsComponent {
	@Input() headline?: string;

	@Input() description?: string;

	@Input() products!: Signal<any>;

	@Input() transparentBcg: boolean = false;

	@Input() transferOriginalImage: boolean = false;
}
