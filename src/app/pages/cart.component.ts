import { Component, computed, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../components/primary-button.component';
import { CartItemComponent } from '../components/cart/cart-item.component';
import { CommonModule } from '@angular/common';
import { displayPrice } from '../utils/helpers';

@Component({
	selector: 'app-cart',
	imports: [
		PrimaryButtonComponent,
		RouterLink,
		CartItemComponent,
		CommonModule,
	],
	template: `
		<div
			class="cart-wrapper"
			[ngClass]="[
				cartService.cart().length > 0 ? 'products-cart-wrapper' : '',
			]"
		>
			@if (cartService.cart().length > 0) {
				<div class="cart-content-wrapper">
					<app-cart-item class="cart-items-wrapper" />
					<div class="cart-summary-wrapper">
						<span class="title-heading">Your order</span>
						<div class="cart-summary-items">
							<div class="cart-summary-item">
								<span>Subtotal</span
								><span>{{ displayPrice(cartSubtotal()) }}</span>
							</div>
							<div class="cart-summary-item">
								<span>Discount</span
								><span>-{{ displayPrice(cartDiscount) }}</span>
							</div>
							<div class="cart-summary-item">
								<span>Delivery</span
								><span>{{ displayPrice(cartDelivery) }}</span>
							</div>
						</div>
						<div class="cart-summary-item cart-summary-grand-total">
							<span>Grand total</span
							><span>{{ displayPrice(cartGrandTotal()) }}</span>
						</div>
					</div>
				</div>
			} @else {
				<div class="empty-cart-wrapper">
					<div class="empty-cart-content">
						<span class="title-heading">Empty Cart</span>
						<p>There are no products added in the cart.</p>
					</div>
					<app-primary-button
						label="Add Products to the Cart"
						routerLink="/"
					/>
				</div>
			}
		</div>
	`,
	styles: ``,
})
export class CartComponent {
	cartService = inject(CartService);
	displayPrice = displayPrice;
	cartDiscount = 10;
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
}
