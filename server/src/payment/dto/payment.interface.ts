interface Product {
	id: number;
	name: string;
	description?: string;
	images: [string];
	price: number;
	createdAt: string;
	updatedAt: string;
	slug: string;
}

interface ProductItem {
	id: number;
	product: Product;
	quantity: number;
	size: string;
}

export type Cart = ProductItem[];
