import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // TODO add type/interface
  cart = signal<any>([]);

  addToCart(product: any) {
    this.cart.set([...this.cart(), product]);
  }
}
