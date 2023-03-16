import { FC, PropsWithChildren } from 'react';
import styles from './Heading.module.scss';
import cn from 'clsx';

export const Heading: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
	return (
		<h1 className={cn(styles.heading, className)}>
			{children}
		</h1>
	);
};
