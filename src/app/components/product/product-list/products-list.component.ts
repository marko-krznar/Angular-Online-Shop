import { Component, effect, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MaterialModule } from '../../../material/material.module';
import { electronicProducts } from '../../../localData/products';

import { ProductsComponent } from '../products/products.component';

@Component({
	selector: 'app-products-list',
	imports: [MaterialModule, RouterLink, ProductsComponent],
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
	products = signal(electronicProducts);
	categories = signal<string[]>([]);

	async ngOnInit() {
		const response = await fetch(
			'https://fakestoreapi.com/products?limit=3',
		);
		const data = await response.json();
		this.products.set(data);

		const categoriesResponse = await fetch(
			'https://fakestoreapi.com/products/categories',
		);
		const categoriesData = await categoriesResponse.json();
		this.categories.set(categoriesData);
	}
}
