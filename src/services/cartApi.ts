import { api } from './api';
import { CartProduct } from '../types';

interface UpdateProductParemeters {
    cartItemId: number;
    quantity: number;
}

export const cartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCart: builder.query<CartProduct[], number>({
            query: (userId) => `/cart?userId=${userId}`,
            providesTags: ['Cart'],
        }),
        addToCart: builder.mutation<CartProduct, number>({
            query: (productId) => ({
                url: `/cart/add?cartId=${1}&productId=${productId}&quantity=${1}`,
                method: 'POST',
            }),
            invalidatesTags: ['Cart'],
        }),
        updateProductQuantity: builder.mutation<CartProduct, UpdateProductParemeters>({
            query: ({ cartItemId, quantity }) => ({
                url: `/cart/update?cartItemId=${cartItemId}&quantity=${quantity}`,
                method: 'PUT',
            }),
            invalidatesTags: ['Cart'],
        }),
        removeProductFromCart: builder.mutation<boolean, number>({
            query: (cartItemId) => ({
                url: `/cart/remove?cartItemId=${cartItemId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Cart'],
        }),
    }),
});

export const {
    useGetCartQuery,
    useAddToCartMutation,
    useRemoveProductFromCartMutation,
    useUpdateProductQuantityMutation,
} = cartApi;
