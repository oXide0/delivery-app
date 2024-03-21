import { api } from './api';
import { Product } from '../types';

export const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => `/products`,
            providesTags: ['Product'],
        }),
    }),
});

export const { useGetProductsQuery } = productApi;
