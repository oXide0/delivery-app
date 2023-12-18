import { api } from './api';

interface LoginUser {
    email: string;
    password: string;
}

interface CreateUser {
    name: string;
    email: string;
    password: string;
}

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation<void, CreateUser>({
            query: (body) => ({
                url: `/users/create`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
        }),
        loginUser: builder.mutation<void, LoginUser>({
            query: (body) => ({
                url: `/users/login`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useCreateUserMutation, useLoginUserMutation } = userApi;
