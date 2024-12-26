import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import { CartService } from '../services/cart.service';

@Component({
	selector: 'app-header',
	imports: [
		RouterLink,
		MatToolbarModule,
		MatButtonModule,
		MatBadgeModule,
		MatIconModule,
	],
	template: `
		<mat-toolbar class="header">
			<button mat-button routerLink="/">Online Shop</button>
			<button
				matBadge="{{ cartService.cart().length }}"
				mat-icon-button
				routerLink="/cart"
			>
				<mat-icon
					aria-hidden="false"
					aria-label="shopping-cart-icon"
					fontIcon="shopping_cart"
				/>
			</button>
		</mat-toolbar>
	`,
	styles: `
		.header {
			max-width: 1440px;
			padding: 1rem 2rem;
			margin: auto;
			display: flex;
			justify-content: space-between;
			// border-bottom: 1px solid $gray-light;
		}
	`,
})
export class HeaderComponent {
	cartService = inject(CartService);
}
