import { FC } from 'react';
import Image from 'next/image';
import { IProductDetails } from '@/types/product.interface';
import styles from './ProductCard.module.scss';

const ProductInformation: FC<IProductDetails> = ({ product }) => {
	return (
		<div className={styles.information}>
			<h2>{ product.name }</h2>
			<div>
				<p>
					{ product.description }
				</p>
			</div>
			{ product.images.map(image => <button key={image}>
					<Image src={image} alt='' width={70} height={70} />
				</button>
			) }
		</div>
	);
};

export default ProductInformation;
