import { api } from './api';

export const cartApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getCart: builder.query({
			query: () => '/cart',
			providesTags: () => [{ type: 'Cart' }],
		}),
		addToCart: builder.mutation({
			query: (item) => ({
				url: '/cart',
				method: 'POST',
				body: item,
			}),
			invalidatesTags: [{ type: 'Cart' }],
		}),
		updateGoods: builder.mutation({
			query: (item) => ({
				url: `/cart/${item.id} `,
				method: 'PUT',
				body: item,
			}),
			invalidatesTags: [{ type: 'Cart' }],
		}),
		removeGoods: builder.mutation({
			query: (item) => ({
				url: `/cart/${item.id} `,
				method: 'DELETE',
				body: item,
			}),
			invalidatesTags: [{ type: 'Cart' }],
		}),
	}),
});

export const { useGetCartQuery, useAddToCartMutation, useRemoveGoodsMutation, useUpdateGoodsMutation } = cartApi;
