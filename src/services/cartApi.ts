import { CartProduct } from '../types';
import { getUserId } from '../utils';
import { api } from './api';

interface UpdateProductParameters {
    cartItemId: number;
    quantity: number;
}

const userId = getUserId();

export const cartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCart: builder.query<CartProduct[], void>({
            query: () => `/cart?userId=${userId}`,
            providesTags: ['Cart'],
        }),
        addToCart: builder.mutation<CartProduct, number>({
            query: (productId) => ({
                url: `/cart/add?cartId=${userId}&productId=${productId}&quantity=${1}`,
                method: 'POST',
            }),
            invalidatesTags: ['Cart'],
        }),
        updateProductQuantity: builder.mutation<CartProduct, UpdateProductParameters>({
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
