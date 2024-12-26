import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { electronicProducts } from '../../localData/products';
import { ProductItem } from '../../models/product-item.model';
import { CartService } from '../../services/cart.service';
import { MaterialModule } from '../../material/material.module';

import { ProductCardComponent } from '../../components/product/product-card/product-card.component';

@Component({
	selector: 'app-product-detail',
	imports: [ProductCardComponent, MaterialModule],
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
	productId!: number;
	product: ProductItem | null = null;
	cartService = inject(CartService);

	similarProducts: ProductItem[] = [];

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.productId = Number(this.route.snapshot.params['id']);

		this.product =
			electronicProducts.find(
				(product) => product.id === this.productId,
			) || null;

		this.similarProducts = electronicProducts
			.filter((similarProduct) => similarProduct.id !== this.productId)
			.slice(0, 3);
	}
}
