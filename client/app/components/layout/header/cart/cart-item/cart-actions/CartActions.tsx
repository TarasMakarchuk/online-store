import { FC } from 'react';
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';
import styles from '../../Cart.module.scss';
import { ICartItem } from '@/types/cart-item.interface';
import { useActions } from '@/hooks/useActions';

export const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 1,
			precision: 0
		});

	const { removeFromCart, changeQuantity } = useActions();

	const inc = getIncrementButtonProps();
	const dec = getDecrementButtonProps();
	const input = getInputProps();

	return (
		<div className={styles.options}>
			<HStack>
				<Button
					{...dec}
					onClick={ () => changeQuantity({ id: item.id, type: 'decrease' }) }
				>
					<MinusIcon boxSize={4} />
				</Button>

				<Input
					{...input}
					width={55}
					focusBorderColor='green.400'
					readOnly
					_hover={{ cursor: 'default' }}
					value={ item.quantity }
				/>

				<Button
					{...inc}
					onClick={ () => changeQuantity({ id: item.id, type: 'increase' }) }
				>
					<AddIcon boxSize={4} />
				</Button>
			</HStack>

			<Button
				className={styles['delete-button']}
				color='#F23C3D'
				marginLeft={115}
				onClick={	() => removeFromCart({ id: item.id }) }
			>
				<DeleteIcon />
			</Button>
		</div>
	);
};
