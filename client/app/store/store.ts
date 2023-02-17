import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '@/store/slice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
});

const persistConfig = {
	key: 'cart',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export type TypeRootState = ReturnType<typeof rootReducer>;
