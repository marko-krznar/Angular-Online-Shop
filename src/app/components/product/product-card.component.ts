import { Component, inject, input, OnInit } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button.component';
import { CartService } from '../../services/cart.service';
import { ProductItem } from '../../models/product-item.model';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div
      class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative"
    >
      <h2>{{ product().title }}</h2>
      <span>{{ product().price }} €</span>
      <app-primary-button
        label="Add to cart"
        (btnClicked)="cartService.addToCart(product())"
      />
      <app-primary-button
        label="View Details"
        [routerLink]="['/product/', product().id]"
      />
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent implements OnInit {
  product = input.required<ProductItem>();
  cartService = inject(CartService);
  route: ActivatedRoute = inject(ActivatedRoute);

  productLocationId = 0;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productLocationId = Number(params['id']);
    });
  }
}
