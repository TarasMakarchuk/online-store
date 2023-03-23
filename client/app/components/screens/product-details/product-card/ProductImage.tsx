import { FC } from 'react';
import { IProductDetails } from '@/types/product.interface';
import Image from 'next/image';
import { formatToCurrency } from '@/utils/format-to-currency';
import styles from './ProductCard.module.scss';

const ProductImage: FC<IProductDetails> = ({ product }) => {
	return (
		<div className={styles.image}>
			<Image src={product.images[0]} alt={product.name} width={250} height={250} />
			<div>{ formatToCurrency(product.price) }</div>
		</div>
	);
};

export default ProductImage;
