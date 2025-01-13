import { Component, computed, inject } from '@angular/core';

import { MaterialModule } from 'src/app/material/material.module';
import { CartService } from 'src/app/services/cart.service';
import { displayPrice } from 'src/app/utils/helpers';

@Component({
	selector: 'app-cart-item',
	imports: [MaterialModule],
	templateUrl: './cart-item.component.html',
	styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
	cartService = inject(CartService);
	displayPrice = displayPrice;

	cartItems = computed(() => this.cartService.cart());

	displayedColumns = ['product', 'price', 'quantity', 'total', 'remove'];

	removeItem(id: number) {
		this.cartService.removeFromCart(id);
	}
}
