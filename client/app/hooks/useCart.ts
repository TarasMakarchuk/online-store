import { useTypedSelector } from '@/hooks/useTypedSelector';

export const useCart = () => {
	const cart = useTypedSelector(state => state.cart.items);

	const total: number = cart.reduce(
		(total, item) => total + (item.product.price * item.quantity), 0,
	);

	return { cart, total };
};
