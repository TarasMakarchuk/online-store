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
import { formatToCurrency } from '@/utils/format-to-currency';
import { useCart } from '@/hooks/useCart';
import { ModalWindow } from '@/layout/modal/ModalWindow';

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isShowModal, setIsShowModal] = useState<boolean>(false);
	const btnRef = useRef<HTMLButtonElement>(null)

	const { cart, total } = useCart();

	const handleClick = (): void => {
		setIsOpen(!isOpen);
	};

	const showModalWindow = () => {
		setIsShowModal(!isShowModal);
	};

	return (
		<div className={styles['wrapper-cart']}>

			<button className={styles.basket} onClick={handleClick} ref={btnRef}>
				<span className={cart.length >= 10 ? styles.badgeMoreTen : styles.badge}>{cart.length}</span>
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
								{
									cart.length ?
										cart.map(item => (
											<CartItem item={item} key={item.id} />
										)) :
										<div>Basket is empty!</div>
								}
							</div>
						</DrawerBody>

						<DrawerFooter
							justifyContent='space-between'
							borderTopColor='light-green'
							borderTopWidth={1}
						>
							<div className={styles.footer}>
								<div>Total:</div>
								<div>{ formatToCurrency(total) }</div>
							</div>

							<Button
								onClick={showModalWindow}
								colorScheme='whatsapp'
								hidden={total === 0}
							>
								Checkout
							</Button>
							{ isShowModal && <ModalWindow isOpen={isShowModal} onClose={showModalWindow} title={ 'Payment' }/> }
						</DrawerFooter>
					</DrawerContent>

				</Drawer>
		</div>
	);
};

export default Cart;
