import { FC } from 'react';
import Layout from '@/layout/Layout';
import { Heading } from '@/ui/hading/Heading';
import { IProductDetails } from '../../../../pages/product/[slug]';
import Breadcrumbs from '@/screens/product-details/product-breadcrumbs/Breadcrumbs';
import ProductNavigation from '@/screens/product-details/product-navigation/ProductNavigation';
import ProductCard from '@/screens/product-details/product-card/ProductCard';

const ProductDetails: FC<IProductDetails> = ({ product }) => {

	return (
		<>
			<Layout
				title={ product.name }
				description={`${ product.description }`}
			>
				<Heading> { product.name } </Heading>
				<div>
					<Breadcrumbs product={ product } />
					<ProductNavigation productId={product.id } />
				</div>
				<ProductCard />
			</Layout>
		</>
	);
};

export default ProductDetails;
