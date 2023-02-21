import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { COLORS } from '@/config/color.config';
import { useActions } from '@/hooks/useActions';
import { IProduct } from '@/types/product.interface';

export const CarouselBtn: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart } = useActions();
//TODO Change button to remove from cart

	return (
		<div style={{ textAlign: 'center'}}>
			<Button onClick={() => addToCart({
				product,
				quantity: 1
			})}
							color={COLORS.green}
							className='tracking-widest font-normal'
							marginTop={10}
							borderRadius={20}
							fontWeight={500}
							textTransform='uppercase'
							fontSize={12}
			>
				Add to basket
			</Button>
		</div>
	);

};