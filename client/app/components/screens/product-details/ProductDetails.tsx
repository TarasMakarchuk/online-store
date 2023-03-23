import { FC } from 'react';
import Layout from '@/layout/Layout';
import { Heading } from '@/ui/hading/Heading';
import { IProductDetails } from '../../../../pages/product/[slug]';

const ProductDetails: FC<IProductDetails> = ({ product }) => {

	return (
		<>
			<Layout
				title={ product.name }
				description={`${ product.description }`}
			>
				<Heading className='text-center'>
					{ product.name }
				</Heading>
			</Layout>
		</>
	);
};

export default ProductDetails;
