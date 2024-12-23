import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  template: `
    @for (cartItem of cartService.cart(); track cartItem.id) {
    <div class="flex justify-between w-full">
      <h2>{{ cartItem.title }}</h2>
      <span>{{ cartItem.price }}</span>
      <span>{{ cartItem.quantity }}</span>
      <span>{{ cartItem.quantity * cartItem.price }}</span>
      <button (click)="cartService.removeFromCart(cartItem.id)">Remove</button>
    </div>
    }
  `,
  styles: ``,
})
export class CartItemComponent {
  cartService = inject(CartService);
}
