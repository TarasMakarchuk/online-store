import { Dispatch, FC, SetStateAction } from 'react';
import styles from '../Carousel.module.scss';
import { TypeSize } from '@/store/cart/cart.types';
import cn from 'clsx';

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI'];

interface ICarouselVariations {
	selectedSize: TypeSize;
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>;
	variant?: 'small' | 'medium';
}

export const SizeVariations: FC<ICarouselVariations> = ({
	selectedSize,
	setSelectedSize,
	variant ='small',
}) => {

	return (
		<div className={cn(styles.variations, {
			[styles.medium]: variant === 'medium',
		})}>
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
