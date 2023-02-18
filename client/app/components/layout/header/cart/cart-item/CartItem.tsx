import { FC } from 'react';
import Image from 'next/image';
import { ICartItem } from '@/types/cart-item.interface';
import styles from './../Cart.module.scss';
import { CartActions } from '@/layout/header/cart/cart-item/cart-actions/CartActions';
import { formatToCurrency } from '@/utils/format-to-currency';

export const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	const { name, description, price, reviews, images } = item.product;

	return (
		<div className={styles.item}>
			<Image
				src={images[0]}
				width={100}
				height={100}
				alt={name}
			/>
			<div>
				<div className={styles.name}>{name}</div>
				<div className={styles.price}>
					{ formatToCurrency(price) }
				</div>
				<CartActions item={item} />
			</div>
		</div>
	);
};
