import { FC, useRef, useState } from 'react';
import styles from './Cart.module.scss';
import { CartItem } from '@/layout/header/cart/cart-item/CartItem';
import { cart } from '@/data/cart.data';
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

//TODO add redux
const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const btnRef = useRef<HTMLButtonElement>(null)

	const handleClick = (): void => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles['wrapper-cart']}>

			<button className={styles.basket} onClick={handleClick} ref={btnRef}>
				<span className={styles.badge}>2</span>
				<span>
						MY BASKET
				</span>
			</button>

				<Drawer
					isOpen={isOpen}
					placement='right'
					onClose={() => setIsOpen(false)}
					finalFocusRef={btnRef}
				>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader>My cart</DrawerHeader>

						<DrawerBody>
							<div className={styles.cart}>
								{ cart.map(item => (
									<CartItem item={item} key={item.id} />
								)) }
							</div>
						</DrawerBody>

						<DrawerFooter justifyContent='space-between'>
							<div className={styles.footer}>
								<div>Total:</div>
								<div>$10.99</div>
							</div>
							<Button colorScheme='green'>Checkout</Button>
						</DrawerFooter>
					</DrawerContent>

				</Drawer>
		</div>
	);
};

export default Cart;
