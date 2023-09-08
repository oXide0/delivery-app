import { api } from './api';
import { IShop } from '../types';

export const shopApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getShops: builder.query<IShop[], void>({
			query: () => '/shops',
			providesTags: () => [{ type: 'Shop' }],
		}),
	}),
});

export const { useGetShopsQuery } = shopApi;
