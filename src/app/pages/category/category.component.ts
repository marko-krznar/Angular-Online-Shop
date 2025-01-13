import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductItem } from 'src/app/models/product-item.model';
import { ProductsComponent } from '../../components/product/products/products.component';

@Component({
	selector: 'app-category',
	imports: [ProductsComponent],
	templateUrl: './category.component.html',
	styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
	categoryId: string | null = '';
	products = signal<ProductItem[]>([]);

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe(async (params) => {
			this.categoryId = params.get('id');

			if (this.categoryId) {
				const response = await fetch(
					`https://fakestoreapi.com/products/category/${this.categoryId}`,
				);
				const data = await response.json();
				this.products.set(data);
			}
		});
	}
}
