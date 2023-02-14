import { FC, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import styles from './Cart.module.scss';
import { ModalWindow } from '@/layout/modal/ModalWindow';

const Cart: FC = () => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = (): void => {
		setShowModal(!showModal);
	};

	const onSubmit = (event: any): any => {
		event.preventDefault();
		setShowModal(!showModal);
	};

	return (
		<>
			<ModalWindow isOpen={showModal} onClose={handleClick} onSubmit={onSubmit} />
			<div className={styles.cart}>
				<div className={styles.basket} onClick={handleClick}>
					<div className={styles.badge}>2</div>
					<div>
						MY BASKET
					</div>
				</div>
				<div>
					<Menu>
						<MenuButton
							as={IconButton}
							aria-label='Options'
							icon={<HamburgerIcon />}
							variant='outline'
						/>
						<MenuList>
							<MenuItem icon={<AddIcon />} command='⌘T'>
								Menu 1
							</MenuItem>
							<MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
								Menu 1
							</MenuItem>
							<MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
								Menu 1
							</MenuItem>
							<MenuItem icon={<EditIcon />} command='⌘O'>
								Menu 1
							</MenuItem>
						</MenuList>
					</Menu>
				</div>
			</div>
		</>
	);
};

export default Cart;
