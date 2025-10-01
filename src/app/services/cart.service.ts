import { Injectable, signal } from '@angular/core';
import { ProductItem } from '../models/product-item.model';
import { CartItem } from '../models/cart-item.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	cart = signal<CartItem[]>([]);
	private lastAddedProductId: number | null = null;
	private productAdditions = 0;
	private additionTimeout: ReturnType<typeof setTimeout> | undefined;

	constructor(private snackBar: MatSnackBar) {}

	addToCart(product: ProductItem) {
		const now = Date.now();
		clearTimeout(this.additionTimeout);

		if (this.lastAddedProductId === product.id) {
			this.productAdditions++;
		} else {
			this.productAdditions = 1;
			this.lastAddedProductId = product.id;
		}

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

		const message =
			this.productAdditions > 1
				? `${product.title} (${this.productAdditions}) added to cart`
				: `${product.title} added to cart`;

		this.snackBar.open(message, 'Close', {
			duration: 3000,
			verticalPosition: 'top',
			horizontalPosition: 'right',
		});

		this.additionTimeout = setTimeout(() => {
			this.productAdditions = 0;
			this.lastAddedProductId = null;
		}, 2000);
	}

	removeFromCart(id: number) {
		this.cart.update((cartItems) => {
			return cartItems.filter((item) => item.id !== id);
		});
	}
}
