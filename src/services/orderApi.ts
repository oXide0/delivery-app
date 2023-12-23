import { Order } from '../types';
import { getUserId } from '../utils';
import { api } from './api';

const userId = getUserId();

export const orderApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query<Order[], number>({
            query: () => `/orders?userId=${userId}`,
            providesTags: ['Order'],
        }),
        createOrder: builder.mutation<void, number>({
            query: (totalPrice) => ({
                url: `/orders/create`,
                method: 'POST',
                body: {
                    userId,
                    totalPrice,
                    status: 'new',
                    date: new Date(),
                },
            }),
            invalidatesTags: ['Order'],
        }),
    }),
});

export const { useGetOrdersQuery, useCreateOrderMutation } = orderApi;
