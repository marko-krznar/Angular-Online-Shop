import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

@Component({
	selector: 'app-root',
	imports: [HomeComponent, RouterOutlet],
	template: ` <app-home /> `,
	styleUrls: [],
})
export class AppComponent {}
