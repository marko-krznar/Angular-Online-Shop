import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
	selector: 'app-root',
	imports: [HeaderComponent, RouterOutlet, FooterComponent],
	template: `
		<app-header class="header-component" />
		<div class="app-content-container">
			<router-outlet />
		</div>
		<app-footer />
	`,
	styleUrls: [],
})
export class AppComponent {}
