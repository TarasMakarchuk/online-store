import { FC } from 'react';
import { IProduct } from '@/types/product.interface';
import { CarouselItem } from '@/ui/catalog/carousel/carousel-item/CarouselItem';
import styles from './Carousel.module.scss';

export const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {

	return (
		<section className={styles.carousel}>
			{ products.map((product, index) =>
				<CarouselItem
					product={product}
					index={index}
					key={index}
				/>)
			}
		</section>
	);
};
