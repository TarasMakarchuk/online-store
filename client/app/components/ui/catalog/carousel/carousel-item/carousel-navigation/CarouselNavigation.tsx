import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { FC } from 'react';
import { ICarouselNavigation } from '@/ui/catalog/carousel/carousel-item/carousel.interface';
import styles from './CarouselNavigation.module.scss';
import { useActions } from '@/hooks/useActions';
import { products } from '@/data/product.data';

export const CarouselNavigation: FC<ICarouselNavigation> = ({ product, isActive, onSelectedSlide }) => {
	const { prevSlide, nextSlide } = useActions();

	return (
			<div
				className={styles.navigation}
				style={{ display: 'flex', flexDirection: 'row' }}
			>
				{isActive && (
					<div className={styles.arrows}>
						<button
							className={styles.arrow}
							onClick={() => prevSlide()}
						>
							<ChevronLeftIcon boxSize={65} />
						</button>
						<button
							className={styles.arrow}
							onClick={() => nextSlide( { carouselLength: products.length })}
						>
							<ChevronRightIcon boxSize={65} />
						</button>
					</div>
				)}

				<button
					className={styles.image}
					onClick={() => onSelectedSlide()}
				>
					<Image
						alt={product.name}
						src={product.images[0]} width={315}
						height={315}
						draggable={false}
					/>
				</button>

			</div>
	);
};