import { IProduct } from '@/types/product.interface';

export interface ICarouselItem {
	product: IProduct;
	selectItem: () => void;
	isActive: boolean;
	nextHandler: () => void;
	previousHandler: () => void;
}

export interface ICarouselNavigation extends Omit<ICarouselItem, 'selectItem'> {}