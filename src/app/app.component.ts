import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  template: `<app-header />`,
  styles: [],
})
export class AppComponent {}
