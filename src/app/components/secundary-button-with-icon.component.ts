import { Component, input } from '@angular/core';

@Component({
	selector: 'app-secundary-button-with-icon',
	imports: [],
	template: `
		<button class="button secundary-button-with-icon">
			{{ label() }}
		</button>
	`,
	styles: ``,
})
export class SecundaryButtonWithIconComponent {
	label = input<string>();
}
