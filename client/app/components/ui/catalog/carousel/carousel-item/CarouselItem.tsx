import { IProduct } from '@/types/product.interface';
import { FC, useState } from 'react';
import Image from 'next/image';
import styles from '../Carousel.module.scss';
import cn from 'clsx';
import { CarouselBtn } from '@/ui/catalog/carousel/carousel-item/CarouselBtn';
import { CarouselVariations } from '@/ui/catalog/carousel/carousel-item/CarouselVariations';
import { TypeSize } from '@/store/types';

export const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT');
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
