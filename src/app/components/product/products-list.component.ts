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
      name: 'ProductItem 1',
      price: 100,
    },
    {
      id: 'two',
      name: 'ProductItem 2',
      price: 200,
    },
    {
      id: 'three',
      name: 'ProductItem 3',
      price: 300,
    },
  ]);
}
