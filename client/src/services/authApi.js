import { api } from './api';

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => '/users',
			providesTags: () => [{ type: 'User' }],
		}),
		login: builder.mutation({
			query: (credentials) => ({
				url: '/users',
				method: 'POST',
				body: credentials,
			}),
			invalidatesTags: [{ type: 'User' }],
		}),
	}),
});

export const { useGetUsersQuery, useLoginMutation } = authApi;
