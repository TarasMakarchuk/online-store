import { Product } from '@prisma/client';

export interface IProductPart extends Pick<Product, 'name' | 'images'> {}

export const products: IProductPart[] = [
	{
		name: 'Set 2 Berry morse & Capuccino-Midnight Mint',
		images: [
			'/uploads/images/products/berry-morse.png',
			'/uploads/images/products/capuccino.png',
		],
	},
	{
		name: 'Green tea',
		images: [
			'/uploads/images/products/green-tea.png',
		],
	},
	{
		name: 'Lemonade',
		images: [
			'/uploads/images/products/lemonade.png',
		],
	},
	{
		name: 'Mochito',
		images: [
			'/uploads/images/products/mochito.png',
		],
	},
	{
		name: 'Mokachino',
		images: [
			'/uploads/images/products/mokachino.png',
		],
	},
	{
		name: 'Caramelle',
		images: [
			'/uploads/images/products/caramelle.png',
		],
	},
	{
		name: 'Capuccino',
		images: [
			'/uploads/images/products/capuccino.png',
		],
	},
];
