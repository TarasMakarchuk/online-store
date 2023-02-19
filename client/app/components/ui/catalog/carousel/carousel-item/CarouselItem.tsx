import { IProduct } from '@/types/product.interface';
import { FC } from 'react';

export const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div>
			<h1>CarouselItem</h1>
		</div>
	);
};
