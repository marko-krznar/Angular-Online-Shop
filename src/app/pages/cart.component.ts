import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../components/primary-button.component';
import { CartItemComponent } from '../components/cart/cart-item.component';

@Component({
  selector: 'app-cart',
  imports: [PrimaryButtonComponent, RouterLink, CartItemComponent],
  template: `
    <div class="flex flex-col items-center justify-center gap-4 p-6">
      @if (cartService.cart().length > 0) {
      <app-cart-item
        class="flex flex-col items-center justify-center rounded gap-4 w-full"
      />
      } @else {
      <h2 class="text-xl font-bold">Empty Cart</h2>
      <p>There are no products added in the cart.</p>
      <app-primary-button label="Add Products to the Cart" routerLink="/" />
      }
      <!-- <div>
        <span>Summary: {{}}</span>
      </div> -->
    </div>
  `,
  styles: ``,
})
export class CartComponent {
  cartService = inject(CartService);
}
