import { Component, inject, input } from '@angular/core';
import { PrimaryButtonComponent } from './primary-button.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div
      class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative"
    >
      <h2>{{ product().name }}</h2>
      <app-primary-button
        label="Add to cart"
        (btnClciked)="cartService.addToCart(product)"
      />
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  // TODO add interface for product
  product = input.required<any>();
  cartService = inject(CartService);
}
