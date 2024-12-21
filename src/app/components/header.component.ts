import { Component } from '@angular/core';
import { PrimaryButtonComponent } from './primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: ` <div
    class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"
  >
    <span>Online Shop</span>
    <app-primary-button label="cart" (btnClciked)="showButtonClicked()" />
  </div>`,
  styles: ``,
})
export class HeaderComponent {
  showButtonClicked() {
    console.log('Button clicked');
  }
}
