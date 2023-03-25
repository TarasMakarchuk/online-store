import { FC } from 'react';
import { IProductDetails } from '@/types/product.interface';
import Image from 'next/image';
import { formatToCurrency } from '@/utils/format-to-currency';
import styles from './ProductCard.module.scss';

const ProductImage: FC<IProductDetails> = ({ product }) => {
	return (
		<div className={styles.image}>
			<div className={styles.main}>
				<Image
					src={product.images[0]}
					alt={product.name}
					width={260} height={260}
				/>
			</div>
			<div className={styles.price}>{ formatToCurrency(product.price) }</div>
		</div>
	);
};

export default ProductImage;
