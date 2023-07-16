import { api } from './api';
import { IUser } from '../types/types';
import { TypeCredentials } from '../types/types';

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query<IUser[], void>({
			query: () => '/users',
			providesTags: () => [{ type: 'User' }],
		}),
		login: builder.mutation({
			query: (credentials: TypeCredentials) => ({
				url: '/users',
				method: 'POST',
				body: credentials,
			}),
			invalidatesTags: [{ type: 'User' }],
		}),
	}),
});

export const { useGetUsersQuery, useLoginMutation } = authApi;
