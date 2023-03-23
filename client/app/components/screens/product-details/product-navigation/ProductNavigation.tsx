import { FC } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import styles from './ProductNavigation.module.scss';
import { useProductNavigation } from '@/screens/product-details/product-navigation/UseProductNavigation';
import cn from 'clsx';

const ProductNavigation: FC<{ productId: number }> = ({ productId }) => {
	const { nextProductSlug, prevProductSlug } = useProductNavigation(productId);

	return (
		<div className={styles.nav}>
			<Link
				href={`/product/${prevProductSlug}`}
				className={cn({
					disabled: !prevProductSlug
				})}
			>
				<ChevronLeftIcon boxSize={46} color='#333' />
			</Link>
			<Link
				href={`/product/${nextProductSlug}`}
				className={cn({
					disabled: !nextProductSlug
				})}
			>
				<ChevronRightIcon boxSize={46} color='#333' />
			</Link>
		</div>
	);
};

export default ProductNavigation;
