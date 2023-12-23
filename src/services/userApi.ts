import { User } from '../types';
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

interface LoginUserResponse {
    userId: number;
}

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation<User, CreateUser>({
            query: (body) => ({
                url: `/users/create`,
                method: 'POST',
                body: {
                    roles: 'USER',
                    ...body,
                },
            }),
            invalidatesTags: ['User'],
        }),
        loginUser: builder.mutation<LoginUserResponse, LoginUser>({
            query: (body) => ({
                url: `/users/authenticate`,
                method: 'POST',
                body: {
                    username: body.email,
                    password: body.password,
                },
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useCreateUserMutation, useLoginUserMutation } = userApi;
