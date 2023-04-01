import { FC, useState } from 'react';
import { Carousel } from '@/ui/catalog/carousel/Carousel';
import { IProduct } from '@/types/product.interface';
import { Sorting } from '@/ui/catalog/sorting/Sorting';
import styles from './Catalog.module.scss';
import { EnumSorting } from '@/ui/catalog/sorting/sorting.interface';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/../services/product-service';
import Loader from '@/ui/loader/Loader';

export const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	const[sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST);
	const { data, isLoading } = useQuery({
		queryKey: ['products', sortType],
		queryFn: () => ProductService.getProducts(sortType),
		initialData: products,
	});

	return (
		<div className='relative'>
			<div className={styles.sorting}>
				<Sorting sortType={ sortType } setSortType={setSortType}/>
			</div>
			{ isLoading ? <Loader /> : <Carousel products={data} /> }
		</div>
	);
};
