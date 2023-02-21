import { IProduct } from '@/types/product.interface';
import { FC } from 'react';
import Image from 'next/image';
import styles from '../Carousel.module.scss';
import cn from 'clsx';
import { CarouselBtn } from '@/ui/catalog/carousel/carousel-item/CarouselBtn';
import { background } from '@chakra-ui/react';
import { auto } from '@popperjs/core';

export const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	const isActive = product.id === 2;

	return (
		<div className={cn(styles.item, {
			[styles.active]: isActive
		})}>

			<div>
				<Image
					className={styles.image}
					alt={product.name}
					src={product.images[0]} width={315}
					height={315}
				/>

				<div className={styles.heading}>
					<div>
						{product.name}
					</div>
				</div>

				{isActive ?
					<>
						{/* Variations */}
						<CarouselBtn product={product}/>
					</> :
					<div className={styles.description}>
						{product.description}
					</div>
				}
			</div>

		</div>
	);
};
