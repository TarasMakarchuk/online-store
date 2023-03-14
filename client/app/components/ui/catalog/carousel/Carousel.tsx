import { FC, useState } from 'react';
import { IProduct } from '@/types/product.interface';
import { CarouselItem } from '@/ui/catalog/carousel/carousel-item/CarouselItem';
import styles from './Carousel.module.scss';

export const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	let [selectedItemIndex, setSelectedItemIndex] = useState(1);

	const nextHandler = () => {
		(selectedItemIndex !== products.length) && setSelectedItemIndex(selectedItemIndex++);
	};
	const previousHandler = () => {
		(selectedItemIndex > 0) && setSelectedItemIndex( selectedItemIndex--);
	};

	return (
		<section className={styles.carousel}>
			{ products.map((product, index) =>
				<CarouselItem
					product={product}
					key={product.id}
					isActive={index === selectedItemIndex}
					selectItem={() => setSelectedItemIndex(index)}
					nextHandler={nextHandler}
					previousHandler={previousHandler}
				/>)
			}
		</section>
	);
};
