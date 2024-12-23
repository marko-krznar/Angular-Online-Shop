import { Component, signal } from '@angular/core';
import { ProductCardComponent } from './product-card.component';
import { electronicProducts } from '../../localData/products';

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
  products = signal(electronicProducts);
}
