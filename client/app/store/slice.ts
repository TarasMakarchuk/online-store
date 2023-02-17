import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddCartPayload, IInitialState } from '@/store/types';
import { cart } from '@/data/cart.data';

const initialState: IInitialState = {
	items: cart,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddCartPayload>) => {
			const id = state.items.length;
			state.items.push({ ...action.payload, id });
		},

		removeFromCart: (state, action: PayloadAction<{ id: number }> ) => {
			state.items = state.items.filter(
				item => item.product.id !== action.payload.id
			);
		},

		increaseItemsInCart: (state, action: PayloadAction<{ id: number }> ) => {
			state.items.map(item => {
					if (item.product.id === action.payload.id && item.quantity) {
						return item.quantity = item.quantity + 1;
					}
				}
			);
		},

		decreaseItemsInCart: (state, action: PayloadAction<{ id: number }> ) => {
			state.items.map(item => {
					if (item.product.id === action.payload.id) {
						return item.quantity > 1 ? item.quantity = item.quantity - 1 : 1;
					}
				}
			);
		},

	}
});
