interface PaymentItem {
	name: string
	price: number;
	quantity: number;
	description?: string;
}

export type Cart = PaymentItem[];
