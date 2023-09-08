import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { api } from '../services/api';
import authReducer from '../features/authSlice';
import tabReducer from '../features/tabSlice';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [api.reducerPath],
};

const rootReducer = combineReducers({
	auth: authReducer,
	tab: tabReducer,
	[api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(api.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
