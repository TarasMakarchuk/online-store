import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { COLORS } from '@/config/color.config';
import { useActions } from '@/hooks/useActions';
import { IProduct } from '@/types/product.interface';
import { TypeSize } from '@/store/cart/cart.types';
import { useCart } from '@/hooks/useCart';

interface IAddToCartButton {
	product: IProduct;
	selectedSize: TypeSize;
}

export const AddToCartButton: FC<IAddToCartButton> = ({ product, selectedSize }) => {
	const { addToCart, removeFromCart } = useActions();
	const { cart } = useCart();

	const currentElement = cart.find(
		cartItem => cartItem.product.id === product.id && cartItem.size === selectedSize
	);

	return (
		<div style={{ textAlign: 'center'}}>
			<Button onClick={() =>
				currentElement? removeFromCart({ id: currentElement.id }) : addToCart({
				product,
				quantity: 1,
				size: selectedSize,
			})}
							color={COLORS.green}
							className='tracking-widest font-normal'
							marginTop={8}
							borderRadius={20}
							fontWeight={500}
							textTransform='uppercase'
							fontSize={12}
			>
				{ currentElement ? '🧺 Remove from basket' : 'Add to basket' }
			</Button>
		</div>
	);

};
