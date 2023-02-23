import { IProduct } from '@/types/product.interface';
import { FC, useState } from 'react';
import Image from 'next/image';
import styles from '../Carousel.module.scss';
import cn from 'clsx';
import { CarouselBtn } from '@/ui/catalog/carousel/carousel-item/CarouselBtn';
import { CarouselVariations } from '@/ui/catalog/carousel/carousel-item/CarouselVariations';
import { TypeSize } from '@/store/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

interface ICarouselItem {
	product: IProduct;
	selectItem: () => void;
	isActive: boolean;
	nextHandler: () => void;
	previousHandler: () => void;
}

export const CarouselItem: FC<ICarouselItem> = ({ product, isActive, selectItem, nextHandler, previousHandler }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT');

	return (
		<button className={cn(styles.item, {
			[styles.active]: isActive
		})}
		onClick={selectItem}
		>

			<div>
				<div
					className='flex items-center'
					style={{ display: 'flex', flexDirection: 'row' }}
				>
					{isActive && (
						<Button
							className={styles['previous-button']}
							onClick={previousHandler}
						>
							<ChevronLeftIcon boxSize={13} />
						</Button>
					)}
					<Image
						className={styles.image}
						alt={product.name}
						src={product.images[0]} width={315}
						height={315}
					/>
					{isActive && (
						<Button
							className={styles['next-button']}
							onClick={nextHandler}
						>
							<ChevronRightIcon boxSize={13} />
						</Button>
					)}
				</div>

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
