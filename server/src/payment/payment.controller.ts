import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Cart } from './dto/payment.interface';

@Controller('payment')
export class PaymentController {
	constructor(private paymentService: PaymentService) {
	}

	@Post()
	async checkout(@Body() dto: { cart: Cart }) {
		return this.paymentService.createPayment(dto.cart);
	}
}


