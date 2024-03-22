import { Order } from '../types';
import $api from './api';

export const getOrders = async (userId: number): Promise<Order[]> => {
    const response = await $api.get(`/orders?userId=${userId}`);
    return response.data;
};

export const createOrder = async (totalPrice: number, userId: number): Promise<void> => {
    await $api.post(`/orders/create`, {
        userId,
        totalPrice,
        status: 'new',
        date: new Date().toISOString(),
    });
};
