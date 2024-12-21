import { Component, signal } from '@angular/core';
import { ProductCardComponent } from './product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  products = signal([
    {
      id: 'one',
      name: 'Product 1',
      price: 100,
    },
    {
      id: 'two',
      name: 'Product 2',
      price: 200,
    },
    {
      id: 'three',
      name: 'Product 3',
      price: 300,
    },
  ]);
}
