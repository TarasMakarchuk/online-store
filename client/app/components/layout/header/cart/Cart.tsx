import { FC, useRef, useState } from 'react';
import styles from './Cart.module.scss';
import { CartItem } from '@/layout/header/cart/cart-item/CartItem';
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/modal';
import { Button } from '@chakra-ui/react';
import { useTypedSelector } from '@/hooks/useTypedSelector';

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const btnRef = useRef<HTMLButtonElement>(null)
	const cart = useTypedSelector(state => state.cart.items);

	const handleClick = (): void => {
		setIsOpen(!isOpen);
	};

	const countTotalPrice = (): number => {
		let total: number = 0;
		cart.forEach(item => {
			total += item.product.price * item.quantity;
		});
		return Number((total * 100 / 100).toFixed(2));
	};

	return (
		<div className={styles['wrapper-cart']}>

			<button className={styles.basket} onClick={handleClick} ref={btnRef}>
				<span className={styles.badge}>{cart.length}</span>
				<span>
						MY BASKET
				</span>
			</button>

				<Drawer
					size='sm'
					isOpen={isOpen}
					placement='right'
					onClose={() => setIsOpen(false)}
					finalFocusRef={btnRef}
				>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader
							fontSize={32}
							textAlign='center'
						>
							My basket
						</DrawerHeader>

						<DrawerBody>
							<div className={styles.cart}>
								{ cart.map(item => (
									<CartItem item={item} key={item.id} />
								)) }
							</div>
						</DrawerBody>

						<DrawerFooter
							justifyContent='space-between'
							borderTopColor='light-green'
							borderTopWidth={1}
						>
							<div className={styles.footer}>
								<div>Total:</div>
								<div>${countTotalPrice()}</div>
							</div>
							<Button colorScheme='green'>Checkout</Button>
						</DrawerFooter>
					</DrawerContent>

				</Drawer>
		</div>
	);
};

export default Cart;
