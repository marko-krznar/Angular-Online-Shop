import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CategoriesService {
	private apiBaseUrl = 'https://fakestoreapi.com/products';

	private categories$?: Observable<string[]>;

	constructor(private http: HttpClient) {}

	getCategories(): Observable<string[]> {
		if (!this.categories$) {
			this.categories$ = this.http
				.get<string[]>(`${this.apiBaseUrl}/categories`)
				.pipe(shareReplay(1));
		}
		return this.categories$;
	}
}
