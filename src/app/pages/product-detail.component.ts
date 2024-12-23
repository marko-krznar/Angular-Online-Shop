import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { electronicProducts } from '../localData/products';
import { ProductItem } from '../models/product-item.model';
import { PrimaryButtonComponent } from '../components/primary-button.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [PrimaryButtonComponent],
  template: `
    @if (product !== null) {
    <h2>{{ product.title }}</h2>
    <p><strong>Price:</strong> {{ product.price }} €</p>
    <p><strong>Description:</strong> {{ product.description }}</p>
    <app-primary-button
      label="Add to cart"
      (btnClicked)="cartService.addToCart(product)"
    />
    } @else {
    <p>Product not found.</p>
    }
  `,
  styles: ``,
})
export class ProductDetailComponent implements OnInit {
  productId!: number;
  product: ProductItem | null = null;
  cartService = inject(CartService);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.params['id']);

    this.product =
      electronicProducts.find((product) => product.id === this.productId) ||
      null;
  }
}
