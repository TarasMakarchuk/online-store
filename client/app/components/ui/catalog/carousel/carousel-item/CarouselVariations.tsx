import { Dispatch, FC, SetStateAction } from 'react';
import styles from '../Carousel.module.scss';
import { TypeSize } from '@/store/types';
import cn from 'clsx';

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI'];

interface ICarouselVariations {
	selectedSize: TypeSize;
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>;
}

export const CarouselVariations: FC<ICarouselVariations> = ({ selectedSize, setSelectedSize }) => {

	return (
		<div className={styles.variations}>
			{SIZES.map(size =>(
				<button
					key={size}
					className={cn({
						[styles.active]: selectedSize === size
					})}
					onClick={ () => setSelectedSize(size) }
				>{ size }</button>
			))}
		</div>
	);
};
