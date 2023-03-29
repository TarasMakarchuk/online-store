import { FC, useState } from 'react';
import ProductInformation from '@/screens/product-details/product-card/ProductInformation';
import ProductImage from '@/screens/product-details/product-card/ProductImage';
import ProductVariations from '@/screens/product-details/product-card/ProductVariations';
import styles from './ProductCard.module.scss';
import { IProductDetails } from '@/types/product.interface';

const ProductCard: FC<IProductDetails> = ({ product }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	return (
		<div className={styles.card}>
			<ProductInformation
				product={product}
				currentImageIndex={currentImageIndex}
				setCurrentImageIndex={setCurrentImageIndex}
			/>
			<ProductImage product={product} currentImageIndex={currentImageIndex} />
			<ProductVariations product={product} />
		</div>
	);
};

export default ProductCard;
