import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { api } from '../services/api';
import shopReducer from '../features/shop/shopSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		shop: shopReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
