export interface IProduct {
	id: number;
	name: string;
	slug: string;
	description: string;
	price: number;
	//TODO add review interface
	reviews: [];
	images: string[];
}

export interface IProductDetails {
	product: IProduct;
}
