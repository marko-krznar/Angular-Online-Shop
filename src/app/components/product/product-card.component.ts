import { Component, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CartService } from '../../services/cart.service';
import { ProductItem } from '../../models/product-item.model';
import { displayPrice } from '../../utils/helpers';

import { PrimaryButtonComponent } from '../primary-button.component';
import { SecundaryButtonWithIconComponent } from '../secundary-button-with-icon.component';
import { MaterialModule } from '../../material/material.module';

@Component({
	selector: 'app-product-card',
	imports: [
		PrimaryButtonComponent,
		RouterLink,
		SecundaryButtonWithIconComponent,
		MaterialModule,
	],
	template: `
		<div class="product-image-wrapper">
			<img mat-card-image />
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
				<mat-card-actions>
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
				</mat-card-actions>
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
