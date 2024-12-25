import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { electronicProducts } from '../localData/products';
import { ProductItem } from '../models/product-item.model';
import { PrimaryButtonComponent } from '../components/primary-button.component';
import { CartService } from '../services/cart.service';
import { ProductCardComponent } from '../components/product/product-card.component';

@Component({
	selector: 'app-product-detail',
	imports: [PrimaryButtonComponent, ProductCardComponent],
	template: `
		@if (product !== null) {
			<div class="product-detail-wrapper">
				<div class="product-detail-image-wrapper">
					<img [src]="product.image" [alt]="product.title" />
				</div>
				<div class="product-detail-content-wrapper">
					<h2 class="product-title">{{ product.title }}</h2>
					<p class="product-price">€{{ product.price }}</p>
					<p class="product-description">{{ product.description }}</p>
					<app-primary-button
						label="Add to cart"
						(btnClicked)="cartService.addToCart(product)"
					/>
				</div>
			</div>
		} @else {
			<p>Product not found.</p>
		}
		<div class="product-detail-similar-products-wrapper">
			<h3 class="product-title">Similar Products</h3>
			<div class="products-wrapper">
				@for (product of similarProducts; track product.id) {
					<app-product-card
						[product]="product"
						class="product-wrapper"
					/>
				}
			</div>
		</div>
	`,
	styles: ``,
})
export class ProductDetailComponent implements OnInit {
	productId!: number;
	product: ProductItem | null = null;
	cartService = inject(CartService);

	similarProducts: ProductItem[] = [];

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.productId = Number(this.route.snapshot.params['id']);

		this.product =
			electronicProducts.find(
				(product) => product.id === this.productId,
			) || null;

		this.similarProducts = electronicProducts
			.filter((similarProduct) => similarProduct.id !== this.productId)
			.slice(0, 3);
	}
}
