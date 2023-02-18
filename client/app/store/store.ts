import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '@/store/slice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
	persistReducer,
	persistStore,
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
	key: 'online-shop',
	storage,
	whitelist: ['cart']
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

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;
