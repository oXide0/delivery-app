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
        createUser: builder.mutation({
            query: (body: CreateUser) => ({
                url: `/users/create`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
        }),
        loginUser: builder.mutation({
            query: (body: LoginUser) => ({
                url: `/users/login`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useCreateUserMutation, useLoginUserMutation } = userApi;
