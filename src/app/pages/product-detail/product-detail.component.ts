import { Component, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { electronicProducts } from '../../localData/products';
import { ProductItem } from '../../models/product-item.model';
import { CartService } from '../../services/cart.service';
import { MaterialModule } from '../../material/material.module';

import { ProductCardComponent } from '../../components/product/product-card/product-card.component';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-product-detail',
	imports: [ProductCardComponent, MaterialModule],
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnDestroy {
	productId!: number;
	product: ProductItem | null = null;
	cartService = inject(CartService);

	similarProducts: ProductItem[] = [];
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

		this.similarProducts = electronicProducts
			.filter((similarProduct) => similarProduct.id !== this.productId)
			.slice(0, 3);
	}

	ngOnDestroy(): void {
		if (this.routeSubscription) {
			this.routeSubscription.unsubscribe();
		}
	}
}
