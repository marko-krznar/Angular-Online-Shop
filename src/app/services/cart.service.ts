import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // TODO add type/interface
  cart = signal<any>([]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id: string) {
    this.cart.set(this.cart().filter((product: Product) => product.id !== id));
  }
}
