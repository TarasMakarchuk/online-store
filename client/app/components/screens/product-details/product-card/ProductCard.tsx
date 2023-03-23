import { FC } from 'react';
import ProductInformation from '@/screens/product-details/product-card/ProductInformation';
import ProductImage from '@/screens/product-details/product-card/ProductImage';
import ProductVariations from '@/screens/product-details/product-card/ProductVariations';
import styles from './ProductCard.module.scss';

const ProductCard: FC = () => {
	return (
		<div className={styles.card}>
			<ProductInformation />
			<ProductImage />
			<ProductVariations />
		</div>
	);
};

export default ProductCard;
