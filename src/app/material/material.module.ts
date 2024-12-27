import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
	exports: [
		MatToolbarModule,
		MatButtonModule,
		MatBadgeModule,
		MatIconModule,
		MatCardModule,
		MatTableModule,
	],
})
export class MaterialModule {}
