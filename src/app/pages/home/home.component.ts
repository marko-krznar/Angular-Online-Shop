import { Component, signal } from '@angular/core';

import { MaterialModule } from 'src/app/material/material.module';
import { ProductItem } from 'src/app/models/product-item.model';

import { ProductsComponent } from 'src/app/components/product/products/products.component';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
	selector: 'app-home',
	imports: [MaterialModule, ProductsComponent, CategoriesComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	isLoading = signal(true);
	categories = signal<string[]>([]);
	popularProducts = signal<ProductItem[]>([]);
	newProducts = signal<ProductItem[]>([]);

	constructor(private categoriesService: CategoriesService) {}

	async ngOnInit() {
		const apiBaseUrl = 'https://fakestoreapi.com/products';

		this.categoriesService.getCategories().subscribe({
			next: (categories) => this.categories.set(categories),
			error: (err) => console.error(err),
		});

		try {
			const [productsResponse] = await Promise.all([
				fetch(`${apiBaseUrl}?limit=6`),
			]);

			const [productsData] = await Promise.all([productsResponse.json()]);

			const popularProductsData = productsData.slice(0, 3);
			const newProductsData = productsData.slice(3, 6);

			this.popularProducts.set(popularProductsData);
			this.newProducts.set(newProductsData);
		} finally {
			this.isLoading.set(false);
		}
	}
}
