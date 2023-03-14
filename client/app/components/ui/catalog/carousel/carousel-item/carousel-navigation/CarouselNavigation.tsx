import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { FC } from 'react';
import { ICarouselNavigation } from '@/ui/catalog/carousel/carousel-item/carousel.interface';
import styles from './CarouselNavigation.module.scss';

export const CarouselNavigation: FC<ICarouselNavigation> = ({ isActive, previousHandler, product, nextHandler }) => {
	return (
			<div
				className={styles.navigation}
				style={{ display: 'flex', flexDirection: 'row' }}
			>
				{isActive && (
					<div className={styles.arrows}>
						<button
							className={styles.arrow}
							onClick={previousHandler}
						>
							<ChevronLeftIcon boxSize={65} />
						</button>
						<button
							className={styles.arrow}
							onClick={nextHandler}
						>
							<ChevronRightIcon boxSize={65} />
						</button>
					</div>
				)}

				<Image
					className={styles.image}
					alt={product.name}
					src={product.images[0]} width={315}
					height={315}
					draggable={false}
				/>
			</div>
	);
};