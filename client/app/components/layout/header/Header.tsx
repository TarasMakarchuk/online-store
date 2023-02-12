import { FC } from 'react';
import styles from './Header.module.scss'

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			HEADER
			<div className='flex h-screen w-full items-center justify-center'>
				<h1 className='text-center text-7x1 font-bold text-red'>
					Online store
				</h1>
			</div>
		</header>
	);
};
