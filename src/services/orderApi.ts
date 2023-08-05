import { api } from './api';
import { IProduct, IUserData } from '../types/types';

interface IOrderResponse {
	id: string;
	food: IProduct[];
	user: IUserData;
}

export const orderApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getOrders: builder.query<IOrderResponse[], void>({
			query: () => '/orders',
			providesTags: () => [{ type: 'Order' }],
		}),
		addOrder: builder.mutation({
			query: (item: IOrderResponse) => ({
				url: '/orders',
				method: 'POST',
				body: item,
			}),
			invalidatesTags: [{ type: 'Order' }],
		}),
	}),
});

export const { useGetOrdersQuery, useAddOrderMutation } = orderApi;
