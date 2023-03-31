import { IReview } from './reviews.interfase';

export interface IProduct {
	id: number;
	name: string;
	slug: string;
	description: string;
	price: number;
	reviews: IReview[];
	images: string[];
}

export interface IProductDetails {
	product: IProduct;
}

export type sortType = 'newest' | 'oldest'| 'low-to-high' | 'high-to-low';
