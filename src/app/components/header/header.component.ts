import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MaterialModule } from '../../material/material.module';

import { CartService } from '../../services/cart.service';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
	selector: 'app-header',
	imports: [RouterLink, MaterialModule, NavigationComponent],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	cartService = inject(CartService);
}
