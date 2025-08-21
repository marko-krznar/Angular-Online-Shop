import { Component, inject, Input, input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CartService } from '../../../services/cart.service';
import { ProductItem } from '../../../models/product-item.model';
import { displayPrice } from '../../../utils/helpers';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';
import { ProductImagePipe } from 'src/app/pipes/product-image.pipe';

@Component({
	selector: 'app-product-card',
	imports: [RouterLink, MaterialModule, CommonModule, ProductImagePipe],
	templateUrl: './product-card.component.html',
	styleUrls: ['product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
	product = input.required<ProductItem>();
	cartService = inject(CartService);
	route: ActivatedRoute = inject(ActivatedRoute);
	categoryProductImage: string | null = null;

	@Input() showDescription: boolean = true;

	@Input() transferOriginalImage: boolean = false;

	displayPrice = displayPrice;

	productLocationId = 0;

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.productLocationId = Number(params['id']);
		});
	}
}
