import { Component, inject, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { electronicProducts } from '../../localData/products';
import { ProductItem } from '../../models/product-item.model';
import { CartService } from '../../services/cart.service';
import { MaterialModule } from '../../material/material.module';
import { displayPrice } from 'src/app/utils/helpers';

import { Subscription } from 'rxjs';
import { ProductsComponent } from '../../components/product/products/products.component';

@Component({
	selector: 'app-product-detail',
	imports: [MaterialModule, ProductsComponent],
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnDestroy {
	productId!: number;
	product: ProductItem | null = null;
	cartService = inject(CartService);
	displayPrice = displayPrice;

	products: any = signal<any[]>(electronicProducts.slice(0, 3));
	private routeSubscription: Subscription;

	constructor(private route: ActivatedRoute) {
		this.routeSubscription = this.route.params.subscribe((params) => {
			this.productId = Number(params['id']);
			this.loadProductDetails();
		});
	}

	private loadProductDetails(): void {
		this.product =
			electronicProducts.find(
				(product) => product.id === this.productId,
			) || null;
	}

	ngOnDestroy(): void {
		if (this.routeSubscription) {
			this.routeSubscription.unsubscribe();
		}
	}
}
