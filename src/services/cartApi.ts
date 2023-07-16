import { api } from './api';
import { IProduct } from '../types/types';

export const cartApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getCart: builder.query<IProduct[], void>({
			query: () => '/cart',
			providesTags: () => [{ type: 'Cart' }],
		}),
		addToCart: builder.mutation({
			query: (item: IProduct) => ({
				url: '/cart',
				method: 'POST',
				body: item,
			}),
			invalidatesTags: [{ type: 'Cart' }],
		}),
		updateGoods: builder.mutation({
			query: (item: IProduct) => ({
				url: `/cart/${item.id} `,
				method: 'PUT',
				body: item,
			}),
			invalidatesTags: [{ type: 'Cart' }],
		}),
		removeGoods: builder.mutation({
			query: (item: IProduct) => ({
				url: `/cart/${item.id} `,
				method: 'DELETE',
				body: item,
			}),
			invalidatesTags: [{ type: 'Cart' }],
		}),
	}),
});

export const { useGetCartQuery, useAddToCartMutation, useRemoveGoodsMutation, useUpdateGoodsMutation } = cartApi;
