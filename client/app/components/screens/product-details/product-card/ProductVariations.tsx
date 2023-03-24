import { FC, useState } from 'react';
import ProductRating from '@/screens/product-details/product-card/product-variations/ProductRating';
import { SizeVariations } from '@/ui/catalog/carousel/carousel-item/SizeVariations';
import { TypeSize } from '@/store/cart/cart.types';
import { IProductDetails } from '@/types/product.interface';
import styles from './ProductCard.module.scss';
import { AddToCartButton } from '@/ui/catalog/button/AddToCartButton';


const ProductVariations: FC<IProductDetails> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT');

	return (
		<div className={styles.variations}>
			<ProductRating />
			<SizeVariations
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
			/>
			<AddToCartButton product={product} selectedSize={selectedSize} />
		</div>
	);
};

export default ProductVariations;
