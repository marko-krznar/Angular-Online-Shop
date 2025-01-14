import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { MaterialModule } from '../../material/material.module';
import { ProductItem } from '../../models/product-item.model';
import { CartService } from '../../services/cart.service';
import { displayPrice } from 'src/app/utils/helpers';

import { ProductsComponent } from '../../components/product/products/products.component';

@Component({
	selector: 'app-product-detail',
	standalone: true,
	imports: [MaterialModule, ProductsComponent, RouterLink],
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
	cartService = inject(CartService);

	isLoading = signal(true);
	productId = signal(0);
	product = signal<ProductItem | null>(null);

	isLoadingProductsInSameCategory = signal(true);
	sameCategoryProducts = signal<ProductItem[]>([]);

	displayPrice = displayPrice;

	private routeSubscription!: Subscription;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.routeSubscription = this.route.params.subscribe((params) => {
			this.productId.set(Number(params['id']));
			this.loadProductDetails();
		});
	}

	private async loadProductDetails(): Promise<void> {
		this.isLoading.set(true);

		try {
			const response = await fetch(
				`https://fakestoreapi.com/products/${this.productId()}`,
			);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data: ProductItem = await response.json();
			this.product.set(data);
		} catch (error) {
			console.error('Error fetching product:', error);
			this.product.set(null);
		} finally {
			this.isLoading.set(false);
			if (this.product()) {
				this.loadProductsInSameCategory();
			}
		}
	}

	private async loadProductsInSameCategory(): Promise<void> {
		const category = this.product()!.category;
		this.isLoadingProductsInSameCategory.set(true);

		if (category) {
			try {
				const response = await fetch(
					`https://fakestoreapi.com/products/category/${category}`,
				);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data: ProductItem[] = await response.json();
				const otherCategoryProducts = data.filter(
					(product) => product.id !== this.productId(),
				);
				this.sameCategoryProducts.set(
					otherCategoryProducts.slice(0, 3),
				);
			} catch (error) {
				console.error('Error fetching category products:', error);
				this.sameCategoryProducts.set([]);
			} finally {
				this.isLoadingProductsInSameCategory.set(false);
			}
		}
	}

	ngOnDestroy(): void {
		this.routeSubscription?.unsubscribe();
	}
}
