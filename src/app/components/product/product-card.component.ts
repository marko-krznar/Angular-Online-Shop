import { Component, inject, input, OnInit } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button.component';
import { CartService } from '../../services/cart.service';
import { ProductItem } from '../../models/product-item.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SecundaryButtonWithIconComponent } from '../secundary-button-with-icon.component';
import { displayPrice } from '../../utils/helpers';

@Component({
	selector: 'app-product-card',
	imports: [
		PrimaryButtonComponent,
		RouterLink,
		SecundaryButtonWithIconComponent,
	],
	template: `
		<div class="product-image-wrapper">
			<img
				[src]="product().image"
				[alt]="product().title"
				class="product-image"
			/>
		</div>
		<h2 class="product-title">{{ product().title }}</h2>
		<span class="product-description">{{ product().description }}</span>
		<div class="product-card-footer-wrapper">
			<div class="product-card-footer-inner">
				<span class="product-price">{{
					displayPrice(product().price)
				}}</span>
				<div class="product-button-group">
					<app-primary-button
						label="Add to cart"
						(btnClicked)="cartService.addToCart(product())"
					/>
					<app-secundary-button-with-icon
						label="View Details"
						[routerLink]="['/product/', product().id]"
					/>
				</div>
			</div>
		</div>
	`,
	styles: ``,
})
export class ProductCardComponent implements OnInit {
	product = input.required<ProductItem>();
	cartService = inject(CartService);
	route: ActivatedRoute = inject(ActivatedRoute);

	displayPrice = displayPrice;

	productLocationId = 0;

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.productLocationId = Number(params['id']);
		});
	}
}
