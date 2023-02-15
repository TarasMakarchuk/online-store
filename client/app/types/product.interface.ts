export interface IProduct {
	id: number;
	name: string;
	description: string;
	price: number;
	//TODO add reviews
	reviews: [];
	images: string[];
}