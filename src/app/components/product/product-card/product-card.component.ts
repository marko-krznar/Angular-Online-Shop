import { Component, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CartService } from '../../../services/cart.service';
import { ProductItem } from '../../../models/product-item.model';
import { displayPrice } from '../../../utils/helpers';
import { MaterialModule } from '../../../material/material.module';

import { PrimaryButtonComponent } from '../../primary-button.component';
import { SecundaryButtonWithIconComponent } from '../../secundary-button-with-icon.component';

@Component({
	selector: 'app-product-card',
	imports: [
		PrimaryButtonComponent,
		RouterLink,
		SecundaryButtonWithIconComponent,
		MaterialModule,
	],
	templateUrl: './product-card.component.html',
	styleUrls: ['product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
	product = input.required<ProductItem>();
	cartService = inject(CartService);
	route: ActivatedRoute = inject(ActivatedRoute);

	displayPrice = displayPrice;

	productLocationId = 0;

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.productLocationId = Number(params['id']);
		});
	}
}
