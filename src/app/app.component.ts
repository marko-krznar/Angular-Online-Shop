import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { ProductsListComponent } from './components/products-list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductsListComponent],
  template: `<app-header /> <app-products-list />`,
  styles: [],
})
export class AppComponent {}
