import {
	Button, HStack, Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent, ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';
import { FC } from 'react';
import PaymentGateway from '@/layout/header/cart/payment/Payment';
import styles from './ModalWindow.module.scss';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	onSubmit?: (event: any) => any;
	title: string;
}

export const ModalWindow: FC<Props> = ({isOpen, onClose, onSubmit, title}) => {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent maxW='600px' maxH='400'>
					<ModalHeader fontSize='28px' textAlign='center' color='gray'>{ title }</ModalHeader>

					<ModalCloseButton />

					<ModalBody >
							<HStack maxW='400px' margin='0 auto'>
								<PaymentGateway />
							</HStack>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='red' onClick={onClose} className={styles.closeBtn}>
							Close
						</Button>
					</ModalFooter>

				</ModalContent>
			</Modal>
		</>
	);
};
