import { FC, useState } from 'react';
import { CarouselBtn } from '@/ui/catalog/carousel/carousel-item/CarouselBtn';
import { CarouselVariations } from '@/ui/catalog/carousel/carousel-item/CarouselVariations';
import { TypeSize } from '@/store/cart/cart.types';
import { ICarouselItem } from '@/ui/catalog/carousel/carousel-item/carousel.interface';
import { CarouselNavigation } from '@/ui/catalog/carousel/carousel-item/carousel-navigation/CarouselNavigation';
import cn from 'clsx';
import styles from '../Carousel.module.scss';
import { useCarousel } from '@/ui/catalog/carousel/carousel-item/useCarouse';
import { useActions } from '@/hooks/useActions';

export const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT');

	const { selectedItemIndex } = useCarousel();
	const { selectSlide } = useActions();
	const isActive: boolean = index === selectedItemIndex;

	return (
		<button className={cn(styles.item, {
			[styles.active]: isActive,
		})}
		aria-label='Select-item'
		role='button'
		>

			<div>
				<CarouselNavigation onSelectedSlide={() => selectSlide(index)} product={product} isActive={isActive}/>
				<button
					className={styles.heading}
					onClick={() => selectSlide(index)}
				>

					<span>
						{product.name}
					</span>
				</button>

				{isActive ?
					<>
						<CarouselVariations
							selectedSize={selectedSize}
							setSelectedSize={setSelectedSize}
						/>
						<CarouselBtn
							product={product}
							selectedSize={selectedSize}
						/>
					</> :
					<div className={styles.description}>
						{product.description}
					</div>
				}
			</div>

		</button>
	);
};
