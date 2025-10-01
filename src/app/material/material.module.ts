import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
	exports: [
		MatToolbarModule,
		MatButtonModule,
		MatBadgeModule,
		MatIconModule,
		MatCardModule,
		MatTableModule,
		MatProgressSpinnerModule,
		MatMenuModule,
		MatSnackBarModule,
	],
})
export class MaterialModule {}
