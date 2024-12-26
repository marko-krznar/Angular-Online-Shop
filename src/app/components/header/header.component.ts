import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MaterialModule } from '../../material/material.module';

import { CartService } from '../../services/cart.service';

@Component({
	selector: 'app-header',
	imports: [RouterLink, MaterialModule],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	cartService = inject(CartService);
}
