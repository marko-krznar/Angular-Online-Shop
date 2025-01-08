import { Component, Input, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
	selector: 'app-categories',
	imports: [MaterialModule, RouterLink],
	templateUrl: './categories.component.html',
	styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
	@Input() categories!: Signal<any>;
}
