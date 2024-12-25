import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-header',
	imports: [RouterLink],
	template: `
		<button routerLink="/">Online Shop</button>
		<a routerLink="/cart">
			<i class="fas fa-shopping-cart"></i>
			{{ cartService.cart().length }}
		</a>
	`,
	styles: ``,
})
export class HeaderComponent {
	cartService = inject(CartService);
}
