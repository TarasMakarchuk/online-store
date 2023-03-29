import { Dispatch, FC, SetStateAction } from 'react';
import Image from 'next/image';
import { IProductDetails } from '@/types/product.interface';
import styles from './ProductCard.module.scss';
import cn from 'clsx';

interface IProductInformation extends IProductDetails {
	currentImageIndex: number;
	setCurrentImageIndex: Dispatch<SetStateAction<number>>;
}

const ProductInformation: FC<IProductInformation> = ({ product, currentImageIndex, setCurrentImageIndex }) => {
	return (
		<div className={styles.information}>
			<h2>{ product.name }</h2>
			<div>
				<p>
					{ product.description }
				</p>
			</div>
			{ product.images.map((image, index) => (
				<button key={image} onClick={() => setCurrentImageIndex(index)} className={cn({
					[styles.active]: index === currentImageIndex
				})}>
					<Image src={image} alt='' width={70} height={70} />
				</button>
			)) }
		</div>
	);
};

export default ProductInformation;
