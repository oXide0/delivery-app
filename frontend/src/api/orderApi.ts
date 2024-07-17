import { Order, OrderItem } from '../types';
import $api from './api';

export const ordersQuery = async (): Promise<Order[]> => {
    const userId = Number(localStorage.getItem('userId'));
    const response = await $api.get(`/orders?userId=${userId}`);
    return response.data;
};

export const activeOrderQuery = async (): Promise<Order> => {
    const userId = Number(localStorage.getItem('userId'));
    const response = await $api.get(`/orders?userId=${userId}`);
    return response.data;
};

export const createOrderMutation = async (): Promise<void> => {
    const userId = Number(localStorage.getItem('userId'));
    await $api.post(`/orders/create`, {
        userId,
    });
};

export const orderItemsQuery = async (orderId: string): Promise<OrderItem[]> => {
    const response = await $api.get(`/orders/items?orderId=${orderId}`);
    return response.data;
};

export const createOrderItemMutation = async (
    productId: string,
    orderId: string
): Promise<void> => {
    await $api.post(`/orders/items`, {
        productId,
        orderId,
    });
};

export const updateOrderItemMutation = async (id: string, quantity: number): Promise<void> => {
    await $api.put(`/orders/items/${id}`, {
        quantity,
    });
};

export const removeOrderItemMutation = async (id: string): Promise<void> => {
    await $api.delete(`/orders/items/${id}`);
};
