import { FC, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import styles from '../ProductCard.module.scss';
import { IProductDetails } from '@/types/product.interface';

const ProductRating: FC<IProductDetails> = ({ product }) => {
	const averageRating = Math.round(
		product.reviews.reduce((acc, review) =>
			acc + review.rating, 0) / product.reviews.length
	) || 0;
	const [rating, setRating] = useState(averageRating);

	return (
		<div className={styles.rating}>
			<span>
				Review:
			</span>
			<Rating
				readonly
				initialValue={rating}
				SVGstyle={{
					display: 'inline-block',
				}}
				size={32}
				allowFraction
			/>
		</div>
	)
};

export default ProductRating;
