import { IProduct } from "@/types/product.interface";
import { reviews } from '@/data/reviews.data';

export const products: IProduct[] = [
	{
		id: 1,
		description: 'Calories total Fat 19g milk 6%',
		name: 'Set 2 Berry morse & Capuccino - Midnight Mint',
		slug: 'berry-morse-&-capuccino-midnight-mint',
		images: [
			'/images/products/berry-morse.png',
			'/images/products/capuccino.png',
		],
		price: 7.29,
		reviews: [reviews[0], reviews[1], reviews[2]],
	},
	{
		id: 2,
		description: 'Calories total Fat 29g milk 5%',
		name: 'Green tea ',
		slug: 'green-tea',
		images: [
			'/images/products/green-tea.png',
		],
		price: 4.99,
		reviews: [],
	},
	{
		id: 3,
		description: 'Calories total Fat 10g milk 0%',
		name: 'Lemonade',
		slug: 'lemonade',
		images: [
			'/images/products/lemonade.png',
		],
		price: 4.99,
		reviews: [],
	},
	{
		id: 4,
		description: 'Calories total Fat 14g milk 0%',
		name: 'Mochito',
		slug: 'mochito',
		images: [
			'/images/products/mochito.png',
		],
		price: 4.99,
		reviews: [],
	},
	{
		id: 5,
		description: 'Calories total Fat 14g milk 0%',
		name: 'Mokachino',
		slug: 'mokachino',
		images: [
			'/images/products/mokachino.png',
		],
		price: 3.49,
		reviews: [],
	},
	{
		id: 6,
		description: 'Calories total Fat 14g milk 0%',
		name: 'Caramelle',
		slug: 'caramelle',
		images: [
			'/images/products/caramelle.png',
		],
		price: 2.99,
		reviews: [],
	},
	{
		id: 7,
		description: 'Calories total Fat 12g milk 10%',
		name: 'Capuccino',
		slug: 'capuccino',
		images: [
			'/images/products/capuccino.png',
		],
		price: 2.79,
		reviews: [],
	},
];