import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from './primary-button.component';

@Component({
  selector: 'app-cart',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="flex flex-col items-center justify-center gap-4 p-6">
      @if (cartService.cart().length > 0) {
      <div
        class="flex flex-col items-center justify-center rounded gap-4 w-full"
      >
        @for (product of cartService.cart(); track product.id) {
        <div class="flex justify-between w-full">
          <h2>{{ product.name }}</h2>
          <span>{{ product.price }}</span>
          <button (click)="cartService.removeFromCart(product.id)">
            Remove
          </button>
        </div>
        }
      </div>
      } @else {
      <h2 class="text-xl font-bold">Empty Cart</h2>
      <p>There are no products added in the cart.</p>
      <app-primary-button label="Add Products to the Cart" routerLink="/" />
      }
    </div>
  `,
  styles: ``,
})
export class CartComponent {
  cartService = inject(CartService);
}
