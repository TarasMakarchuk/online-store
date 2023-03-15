import { FC, useState } from 'react';
import { CarouselBtn } from '@/ui/catalog/carousel/carousel-item/CarouselBtn';
import { CarouselVariations } from '@/ui/catalog/carousel/carousel-item/CarouselVariations';
import { TypeSize } from '@/store/cart/cart.types';
import { ICarouselItem } from '@/ui/catalog/carousel/carousel-item/carousel.interface';
import { CarouselNavigation } from '@/ui/catalog/carousel/carousel-item/carousel-navigation/CarouselNavigation';
import cn from 'clsx';
import { useCarousel } from '@/ui/catalog/carousel/carousel-item/useCarouse';
import { useActions } from '@/hooks/useActions';
import styles from '../Carousel.module.scss';

export const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT');

	const { selectedItemIndex } = useCarousel();
	const { selectSlide } = useActions();
	const isActive: boolean = index === selectedItemIndex;

	return (
		<div className={cn(styles.item, {
			[styles.active]: isActive
		})}
			aria-label='Select-item'
			role='button'
		>

			<div>
				<CarouselNavigation onSelectedSlide={() => selectSlide(index)} product={product} isActive={isActive} />
				<div
					className={styles.heading}
					onClick={() => selectSlide(index)}
				>

					<span>
						{product.name}
					</span>
				</div>

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

		</div>
	);
};
