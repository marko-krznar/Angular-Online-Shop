export function displayPrice(price: number) {
	return `€${price.toFixed(2)}`;
}

export function formatTextToUrl(text: string): string {
	return text
		.replace(/'/g, '')
		.trim()
		.split(' ')
		.filter((word) => word)
		.join('-')
		.toLowerCase();
}
