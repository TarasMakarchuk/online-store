import { FC, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import styles from '../ProductCard.module.scss';

const ProductRating: FC = () => {
	const [rating, setRating] = useState(0)

	const handleRating = (rate: number) => {
		setRating(rate)
	}
	const onPointerEnter = () => console.log('Enter')
	const onPointerLeave = () => console.log('Leave')
	const onPointerMove = (value: number, index: number) => console.log(value, index)

	return (
		<div className={styles.rating}>
			<span>
				Review:
			</span>
			<Rating
				onClick={handleRating}
				onPointerEnter={onPointerEnter}
				onPointerLeave={onPointerLeave}
				onPointerMove={onPointerMove}
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
