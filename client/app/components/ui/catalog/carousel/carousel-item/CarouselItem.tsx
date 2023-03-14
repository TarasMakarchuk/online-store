import { FC, useState } from 'react';
import { CarouselBtn } from '@/ui/catalog/carousel/carousel-item/CarouselBtn';
import { CarouselVariations } from '@/ui/catalog/carousel/carousel-item/CarouselVariations';
import { TypeSize } from '@/store/types';
import { ICarouselItem } from '@/ui/catalog/carousel/carousel-item/carousel.interface';
import { CarouselNavigation } from '@/ui/catalog/carousel/carousel-item/carousel-navigation/CarouselNavigation';
import cn from 'clsx';
import styles from '../Carousel.module.scss';

export const CarouselItem: FC<ICarouselItem> = ({ product, isActive, selectItem, nextHandler, previousHandler }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT');

	return (
		<button className={cn(styles.item, {
			[styles.active]: isActive
		})}
		onClick={selectItem}
		aria-label='Select-item'
		role='button'
		>

			<div>
				<CarouselNavigation product={product} isActive={isActive} nextHandler={nextHandler} previousHandler={previousHandler}/>
				<div className={styles.heading}>
					<div>
						{product.name}
					</div>
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

		</button>
	);
};
