import { Injectable, signal } from '@angular/core';
import { ProductItem } from '../models/product-item.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	cart = signal<CartItem[]>([]);

	addToCart(product: ProductItem) {
		this.cart.update((cartItems) => {
			const existingItemIndex = cartItems.findIndex(
				(cart) => cart.id === product.id,
			);

			if (existingItemIndex !== -1) {
				return cartItems.map((item, index) =>
					index === existingItemIndex
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			} else {
				return [...cartItems, { ...product, quantity: 1 }];
			}
		});
	}

	removeFromCart(id: number) {
		this.cart.update((cartItems) => {
			return cartItems.filter((item) => item.id !== id);
		});
	}
}
