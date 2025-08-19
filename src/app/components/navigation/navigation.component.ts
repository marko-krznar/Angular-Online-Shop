import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { CategoriesService } from 'src/app/services/categories.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-navigation',
	imports: [MaterialModule, CommonModule, RouterLink],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {
	categories: string[] = [];

	constructor(private categoriesService: CategoriesService) {}

	ngOnInit(): void {
		this.categoriesService.getCategories().subscribe({
			next: (categories) => (this.categories = categories),
			error: (err) => console.error(err),
		});
	}
}
