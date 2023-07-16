import { api } from './api';
import { IOrder } from '../types/types';

export const orderApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getOrders: builder.query<IOrder[], void>({
			query: () => '/orders',
			providesTags: () => [{ type: 'Order' }],
		}),
		addOrder: builder.mutation({
			query: (item: IOrder) => ({
				url: '/orders',
				method: 'POST',
				body: item,
			}),
			invalidatesTags: [{ type: 'Order' }],
		}),
	}),
});

export const { useGetOrdersQuery, useAddOrderMutation } = orderApi;
