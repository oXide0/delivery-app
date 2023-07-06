import { api } from './api';

export const shopApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getShops: builder.query({
			query: () => '/shops',
			providesTags: () => [{ type: 'Shop' }],
		}),
	}),
});

export const { useGetShopsQuery } = shopApi;
