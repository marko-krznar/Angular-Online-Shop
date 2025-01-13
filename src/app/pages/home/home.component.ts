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
	isLoading = signal(true);
	categories = signal<string[]>([]);
	popularProducts = signal(electronicProducts);
	newProducts = signal(electronicProducts);

	async ngOnInit() {
		const apiBaseUrl = 'https://fakestoreapi.com/products';

		try {
			const [productsResponse, categoriesResponse] = await Promise.all([
				fetch(`${apiBaseUrl}/categories`),
				fetch(`${apiBaseUrl}?limit=6`),
			]);

			const [productsData, categoriesData] = await Promise.all([
				categoriesResponse.json(),
				productsResponse.json(),
			]);

			console.log('productsData', productsData);
			const popularProductsData = productsData.slice(0, 3);
			const newProductsData = productsData.slice(3, 6);

			this.categories.set(categoriesData);
			this.popularProducts.set(popularProductsData);
			this.newProducts.set(newProductsData);
		} finally {
			this.isLoading.set(false);
		}
	}
}
