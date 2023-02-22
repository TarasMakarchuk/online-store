import { ICartItem } from '@/types/cart-item.interface';

export interface IInitialState {
	items: ICartItem[];
}

export interface IAddCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityCardPayload extends Pick<ICartItem, 'id'> {
	type: 'increase' | 'decrease';
}

export type TypeSize = 'SHORT' | 'TALL' | 'GRANDE' | 'VENTI';

export interface IChangeSizePayload extends Pick<ICartItem, 'id'> {
	size: TypeSize;
}
