import { api } from './api';

export const orderApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getOrders: builder.query({
			query: () => '/orders',
			providesTags: () => [{ type: 'Order' }],
		}),
		addOrder: builder.mutation({
			query: (item) => ({
				url: '/orders',
				method: 'POST',
				body: item,
			}),
			invalidatesTags: [{ type: 'Order' }],
		}),
	}),
});

export const { useGetOrdersQuery, useAddOrderMutation } = orderApi;
