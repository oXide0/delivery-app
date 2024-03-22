import { Product } from '../types';
import $api from './api';

export const getProducts = async (): Promise<Product[]> => {
    const response = await $api.get(`/products`);
    return response.data;
};
