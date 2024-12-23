import { Component, inject, input } from '@angular/core';
import { PrimaryButtonComponent } from './primary-button.component';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

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
        (btnClicked)="cartService.addToCart(product())"
      />
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  product = input.required<Product>();
  cartService = inject(CartService);
}
