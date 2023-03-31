import { FC } from 'react';
import Layout from '@/layout/Layout';
import { Catalog } from '@/ui/catalog/Catalog';
import { Heading } from '@/ui/hading/Heading';
import { IProductsPage } from '../../../../pages';

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<>
			<Layout
				title='Home'
				description='More than just great coffee. Explore the menu, sign up for Starbucks®
				Rewards, manage your gift card and more.'
			>
				<Heading className='text-center'>
					The happiest hour of the year
				</Heading>
				<Catalog products={products}/>
			</Layout>
		</>
	);
};

export default Home;
