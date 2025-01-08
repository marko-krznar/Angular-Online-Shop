import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-footer',
	imports: [MatIconModule],
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	currentYear: number = new Date().getFullYear();
}
