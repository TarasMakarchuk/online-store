import { FC, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';
import styles from './Payment.module.scss';

const PUBLIC_KEY = 'pk_test_51MsoWpBflU0dm2pRAl95WtqpstmwqksyZW4LZJ4O2UyM1ZTv2pMrUBkvW8D7L8LEwVA9UXt0r3vzSbUx6v55BU8P00kVUhUcTg'

const Payment: FC = () => {
	const { cart, total } = useCart();
	const { resetCart } = useActions();
	const [ isProcessing, setIsProcessing ] = useState<boolean>(false);
	const [ paymentStatus, setPaymentStatus ] = useState<string>('');

	const stripe = useStripe();
	const elements = useElements();

	const success = paymentStatus === 'succeeded';

	useEffect(() => {
		if (total === 0) return;
		if (!success) return;

		if (success) {
			setPaymentStatus('');
			resetCart();
		}

	}, [success]);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (total === 0) return;
		if (!stripe || !elements) return;

		const cardElement = elements.getElement(CardElement);
		setIsProcessing(true);

		try {
			const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/payment`, {
				cart,
			});

			const { client_secret: clientSecret } = res.data;

			const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: cardElement!,
				}
			});

			if (!paymentIntent) {
				setPaymentStatus('Payment failed');
			} else {
				setPaymentStatus(paymentIntent.status);
			}

		} catch (error) {
			console.error(error);
			setPaymentStatus('Payment failed');
		}

		setIsProcessing(false);
	};

	return (
		<div className={styles.payment}>
			<form
			  onSubmit={handleSubmit}
				id='payment-form'
			>
				<label htmlFor='card-element'>Place order</label>
				<CardElement id='card-element' />
				{
					!isProcessing && (
						<button
							className={styles['pay-button']}
							disabled={total === 0}
							style={total === 0 ? {backgroundColor: 'lightGray'} : {backgroundColor: 'green'}}
						>
							Pay
						</button>
					)
				}
				{ isProcessing && <div> Processing... </div> }
				{ !isProcessing && paymentStatus && <div> Status: { paymentStatus } </div> }
			</form>
		</div>
	);
};

const PaymentGateway = () => {
	const [paymentPromise] = useState(() => loadStripe(PUBLIC_KEY))

	return (
		<Elements stripe={paymentPromise}>
			<Payment />
		</Elements>
	);
};

export default PaymentGateway;
