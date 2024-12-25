import { Injectable, signal } from '@angular/core';
import { ProductItem } from '../models/product-item.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	cart = signal<CartItem[]>([]);

	addToCart(product: ProductItem) {
		const cartItems = this.cart();

		const cartItem = { ...product, quantity: 1 };

		const existingCartItem = cartItems.findIndex(
			(cart) => cart.id === cartItem.id,
		);

		if (existingCartItem !== -1) {
			cartItems[existingCartItem].quantity += cartItem.quantity;
		} else {
			cartItems.push(cartItem);
		}
	}

	removeFromCart(id: number) {
		this.cart.set(
			this.cart().filter((cartItem: CartItem) => cartItem.id !== id),
		);
	}
}
