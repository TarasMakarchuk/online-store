import { FC, useState } from 'react';
import { Carousel } from '@/ui/catalog/carousel/Carousel';
import { IProduct } from '@/types/product.interface';
import { Sorting } from '@/ui/catalog/sorting/Sorting';
import styles from './Catalog.module.scss';
import { EnumSorting } from '@/ui/catalog/sorting/sorting.interface';

export const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	const[sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST);

	return (
		<div>
			<div className={styles.sorting}>
				<Sorting sortType={ sortType } setSortType={ setSortType}/>
			</div>
			<Carousel products={ products } />
		</div>
	);
};
