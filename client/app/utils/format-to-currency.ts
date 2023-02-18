export const formatToCurrency = (price: number): string =>
	new Intl.NumberFormat('en-IN', {
			style: 'currency',
			currency: 'USD'
		}
	).format(price);
