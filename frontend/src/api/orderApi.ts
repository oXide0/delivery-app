import { Order } from '../types';
import $api from './api';

export const getOrders = async (): Promise<Order[]> => {
    const userId = Number(localStorage.getItem('userId'));
    const response = await $api.get(`/orders?userId=${userId}`);
    return response.data;
};

export const createOrder = async (totalPrice: number): Promise<void> => {
    const userId = Number(localStorage.getItem('userId'));
    await $api.post(`/orders/create`, {
        userId,
        totalPrice,
        status: 'new',
        date: new Date().toISOString(),
    });
};
