import { Component, input, output } from '@angular/core';

@Component({
	selector: 'app-primary-button',
	imports: [],
	template: `
		<button class="button primary-button" (click)="btnClicked.emit()">
			{{ label() }}
		</button>
	`,
	styles: ``,
})
export class PrimaryButtonComponent {
	label = input<string>();

	btnClicked = output();
}
