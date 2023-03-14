import { Button } from '@chakra-ui/react';
import styles from '@/ui/catalog/carousel/Carousel.module.scss';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { FC } from 'react';
import { ICarouselNavigation } from '@/ui/catalog/carousel/carousel-item/carousel.interface';

export const CarouselNavigation: FC<ICarouselNavigation> = ({ isActive, previousHandler, product, nextHandler }) => {
	return (
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
	);
};