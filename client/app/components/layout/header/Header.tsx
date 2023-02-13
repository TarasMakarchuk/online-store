import { FC } from 'react';
import Cart from './cart/Cart';
import styles from './Header.module.scss'
import Menu from './menu/Menu';
import Search from './search/Search';

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Menu />
			<Search />
			<Cart />
		</header>
	);
};
