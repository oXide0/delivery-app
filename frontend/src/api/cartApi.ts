import { CartProduct } from '../types';
import $api from './api';

interface UpdateProductParameters {
    cartItemId: number;
    quantity: number;
}

export const getCart = async (userId: number): Promise<CartProduct[]> => {
    const response = await $api.get(`/cart?userId=${userId}`);
    return response.data;
};

export const addToCart = async (productId: number, userId: number): Promise<CartProduct> => {
    const response = await $api.post(
        `/cart/add?cartId=${userId}&productId=${productId}&quantity=1`
    );
    return response.data;
};

export const updateProductQuantity = async ({
    cartItemId,
    quantity,
}: UpdateProductParameters): Promise<CartProduct> => {
    const response = await $api.put(`/cart/update?cartItemId=${cartItemId}&quantity=${quantity}`);
    return response.data;
};

export const removeProductFromCart = async (cartItemId: number): Promise<boolean> => {
    const response = await $api.delete(`/cart/remove?cartItemId=${cartItemId}`);
    return response.data;
};
