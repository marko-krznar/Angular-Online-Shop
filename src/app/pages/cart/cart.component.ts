import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CartService } from 'src/app/services/cart.service';
import { displayPrice } from 'src/app/utils/helpers';
import { MaterialModule } from 'src/app/material/material.module';

import { CartItemComponent } from 'src/app/components/cart/cart-item/cart-item.component';

@Component({
	selector: 'app-cart',
	imports: [RouterLink, CartItemComponent, CommonModule, MaterialModule],
	templateUrl: './cart.component.html',
	styleUrl: './cart.component.scss',
})
export class CartComponent {
	cartService = inject(CartService);
	displayPrice = displayPrice;
	cartDiscount = 0;
	cartDelivery = 20;

	cartSubtotal = computed(() =>
		this.cartService.cart().reduce((total, item) => {
			const itemTotal = item.price * item.quantity;

			return total + itemTotal;
		}, 0),
	);

	cartGrandTotal = computed(
		() => this.cartSubtotal() - this.cartDiscount + this.cartDelivery,
	);

	constructor() {
		console.log(this.cartService.cart());
	}
}
