import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['User', 'Shop', 'Cart', 'Order'],
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
	endpoints: () => ({}),
});
