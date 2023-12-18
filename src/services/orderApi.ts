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
            providesTags: ['Order'],
        }),
        createOrder: builder.mutation<void, CreateOrderBody>({
            query: (body) => ({
                url: `/orders/create`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Order'],
        }),
    }),
});

export const { useGetOrderQuery, useCreateOrderMutation } = orderApi;
