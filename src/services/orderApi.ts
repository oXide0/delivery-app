import { api } from './api';
import { Order } from '../types';

interface CreateOrderBody {
    userId: number;
    totalPrice: number;
    status: string;
    date: string;
}

export const orderApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getOrder: builder.query<Order, number>({
            query: (id: number) => `/orders/${id}`,
        }),
        createOrder: builder.mutation({
            query: (body: CreateOrderBody) => ({
                url: `/orders/create`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Order'],
        }),
    }),
});

export const { useGetOrderQuery, useCreateOrderMutation } = orderApi;
