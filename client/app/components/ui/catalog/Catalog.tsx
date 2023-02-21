import { FC } from 'react';
import { Carousel } from '@/ui/catalog/carousel/Carousel';
import { IProduct } from '@/types/product.interface';

export const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div>
			<Carousel products={ products } />
		</div>
	);
};
