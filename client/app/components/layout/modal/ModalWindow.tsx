import {
	Button, HStack, Input, Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent, ModalFooter,
	ModalHeader,
	ModalOverlay, useNumberInput
} from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (event: any) => any;
}

export const ModalWindow: FC<Props> = ({isOpen, onClose, onSubmit}) => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 2,
			min: 1,
			max: 30,
			precision: 0,
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Order list</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
							<span>Coffee, quantity</span>
							<HStack maxW='200px'>
								<Button {...dec}>-</Button>
								<Input {...input} />
								<Button {...inc}>+</Button>
							</HStack>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='green' mr={10} onClick={onSubmit}>Confirm order</Button>
						<Button colorScheme='red' onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
