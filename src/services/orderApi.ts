import { api } from './api';
import { Order } from '../types';

export const orderApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query<Order[], number>({
            query: (id: number) => `orders?userId=${id}`,
            providesTags: ['Order'],
        }),
        createOrder: builder.mutation<void, number>({
            query: (totalPrice) => ({
                url: `/orders/create`,
                method: 'POST',
                body: {
                    userId: 1,
                    totalPrice,
                    status: 'new',
                    date: new Date().toLocaleDateString(),
                },
            }),
            invalidatesTags: ['Order'],
        }),
    }),
});

export const { useGetOrdersQuery, useCreateOrderMutation } = orderApi;
