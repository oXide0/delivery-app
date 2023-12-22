import type { BaseQueryFn, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut } from '../features/authSlice';
import { RootState } from '../store/store';

interface CustomError {
    data: string;
    error: string;
    originalStatus: number;
    status: string;
}

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
    responseHandler: async (response) => {
        const contentType = response.headers.get('Content-Type');
        if (contentType?.includes('application/json')) {
            return response.json();
        } else if (contentType?.includes('text/plain')) {
            return response.text();
        } else {
            return response.text();
        }
    },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error) {
        const customError = result.error as CustomError;
        const originalStatus = customError.originalStatus;
        if (originalStatus === 403) {
            api.dispatch(logOut());
        }
    }

    return result;
};

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
    tagTypes: ['User', 'Order', 'Product', 'Cart'],
});
