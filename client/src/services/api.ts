import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3000';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['User', 'Shop', 'Cart', 'Order'],
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
	endpoints: () => ({}),
});
