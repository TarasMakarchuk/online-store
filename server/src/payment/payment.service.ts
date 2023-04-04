import { BadRequestException, Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { Cart } from './dto/payment.interface';

@Injectable()
export class PaymentService {
	private stripe;
	constructor() {
		this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
			apiVersion: '2022-11-15',
		});
	}

	async createPayment(cart: Cart): Promise<any> {
		try {
			const totalPrice = cart.reduce(
				(acc, item) => acc + item.product.price * item.quantity, 0
			);
			return this.stripe.paymentIntents.create({
				amount: +totalPrice.toFixed(2) * 100,
				currency: 'usd',
				payment_method_types: ['card'],
			});
		} catch (error) {
			throw new BadRequestException('message', error.message);
		}
	}
}
