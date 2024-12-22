import { Component, inject, effect } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  template: `
    <div class="flex flex-col items-center justify-center p-4 rounded gap-4">
      @for (product of cartService.cart(); track product.id) {
      <div class="flex justify-between w-full">
        <h1>{{ product.name }}</h1>
        <span>{{ product.price }}</span>
      </div>
      }
    </div>
  `,
  styles: ``,
})
export class CartComponent {
  cartService = inject(CartService);
}
