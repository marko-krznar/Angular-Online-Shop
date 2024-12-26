import { Component, signal } from '@angular/core';

import { MaterialModule } from '../../../material/material.module';
import { electronicProducts } from '../../../localData/products';

import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
	selector: 'app-products-list',
	imports: [ProductCardComponent, MaterialModule],
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
	products = signal(electronicProducts);
}
