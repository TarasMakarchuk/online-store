import { FC, useState } from 'react';
import { AddToCartButton } from '@/ui/catalog/button/AddToCartButton';
import { SizeVariations } from '@/ui/catalog/carousel/carousel-item/SizeVariations';
import { TypeSize } from '@/store/cart/cart.types';
import { ICarouselItem } from '@/ui/catalog/carousel/carousel-item/carousel.interface';
import { CarouselNavigation } from '@/ui/catalog/carousel/carousel-item/carousel-navigation/CarouselNavigation';
import cn from 'clsx';
import { useCarousel } from '@/ui/catalog/carousel/carousel-item/useCarouse';
import { useActions } from '@/hooks/useActions';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../Carousel.module.scss';

export const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT');

	const { selectedItemIndex } = useCarousel();
	const { selectSlide } = useActions();
	const isActive: boolean = index === selectedItemIndex;

	return (
		<motion.div className={cn(styles.item, {
			[styles.active]: isActive
		})}
	    initial={{ scale: 1 }}
			animate={isActive ? { scale: 1.15 } : {}}
			transition={{ duration: 0.5, type: 'tween' }}
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
						<SizeVariations
							selectedSize={selectedSize}
							setSelectedSize={setSelectedSize}
						/>
						<AddToCartButton
							product={product}
							selectedSize={selectedSize}
						/>
						<Link href={`/product/${product.slug}`} className={styles.link}>More information</Link>
					</> :
					<div className={styles.description}>
						{product.description}
					</div>
				}
			</div>

		</motion.div>
	);
};
