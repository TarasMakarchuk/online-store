import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '@/store/slice';

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type TypeRootState = ReturnType<typeof rootReducer>;
