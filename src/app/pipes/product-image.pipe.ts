import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'productImage',
	standalone: true,
})
export class ProductImagePipe implements PipeTransform {
	transform(url: string | null): string {
		if (!url) return '';
		const transformed = url.replace('.jpg', 't.png');
		return transformed;
	}
}
