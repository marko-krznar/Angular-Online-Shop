import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { displayPrice } from '../../utils/helpers';

@Component({
	selector: 'app-cart-item',
	imports: [],
	template: `
		<h2 class="title-heading">Shopping bag</h2>
		<div class="cart-items-list">
			<span class="cart-items-list-item product-cart-items-list-item"
				>Product</span
			>
			<span class="cart-items-list-item">Price</span>
			<span class="cart-items-list-item">Quantity</span>
			<span class="cart-items-list-item total-cart-items-list-item"
				>Total</span
			>
		</div>
		@for (cartItem of cartService.cart(); track cartItem.id) {
			<div class="cart-item-wrapper">
				<div class="cart-image-wrapper">
					<img
						[src]="cartItem.image"
						[alt]="cartItem.title"
						class="product-image"
					/>
				</div>
				<h2 class="cart-title">{{ cartItem.title }}</h2>
				<span class="cart-price">{{
					displayPrice(cartItem.price)
				}}</span>
				<span class="cart-quantity">{{ cartItem.quantity }}</span>
				<span class="cart-price-total">{{
					displayPrice(cartItem.quantity * cartItem.price)
				}}</span>
				<button
					(click)="cartService.removeFromCart(cartItem.id)"
					class="cart-remove-button"
				>
					<i class="fa-solid fa-trash"></i>
				</button>
			</div>
		}
	`,
	styles: ``,
})
export class CartItemComponent {
	cartService = inject(CartService);
	displayPrice = displayPrice;
}
