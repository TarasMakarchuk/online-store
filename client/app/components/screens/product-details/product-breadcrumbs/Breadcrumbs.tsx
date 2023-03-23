import  { FC } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';
import { IProductDetails } from '../../../../../pages/product/[slug]';

const Breadcrumbs: FC<IProductDetails> = ({ product }) => {
	return (
		<Breadcrumb
			display='flex'
			marginTop={8}
			justifyContent='end'
			color='#444444'
		>
			<BreadcrumbItem>
				<BreadcrumbLink as={Link} href='/'>Catalog</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink
					_hover={{ textDecoration: 'none' }}
					cursor='default'
					color='#666666'

				>
					{ product.name }
				</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};

export default Breadcrumbs;
