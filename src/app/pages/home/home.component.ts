import { Component, signal } from '@angular/core';

import { MaterialModule } from 'src/app/material/material.module';
import { electronicProducts } from 'src/app/localData/products';

import { ProductsComponent } from 'src/app/components/product/products/products.component';
import { CategoriesComponent } from '../../components/categories/categories.component';

@Component({
	selector: 'app-home',
	imports: [MaterialModule, ProductsComponent, CategoriesComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
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
