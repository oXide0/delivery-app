import { Order } from '../types';
import $api from './api';

export const activeOrderQuery = async (): Promise<Order> => {
    const userId = localStorage.getItem('userId');
    const response = await $api.get(`/orders/active?userId=${userId}`);
    return response.data;
};

export const createOrderItemMutation = async ({
    orderId,
    productId,
}: {
    productId: string;
    orderId: string;
}): Promise<void> => {
    await $api.post(`/orders/items`, {
        productId,
        orderId,
    });
};

export const updateOrderItemMutation = async ({
    id,
    quantity,
}: {
    id: string;
    quantity: number;
}): Promise<void> => {
    await $api.put(`/orders/items/${id}`, {
        quantity,
    });
};

export const removeOrderItemMutation = async (id: string): Promise<void> => {
    await $api.delete(`/orders/items/${id}`);
};
