import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/index';
import { TypeCredentials } from '../types';

export interface AuthState {
	credentials: TypeCredentials;
}

const initialState: AuthState = {
	credentials: { username: '', password: '' },
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action: PayloadAction<TypeCredentials>) => {
			const { username, password } = action.payload;
			state.credentials.username = username;
			state.credentials.password = password;
		},
		logOut: (state) => {
			state.credentials.username = '';
			state.credentials.password = '';
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCredentials = (state: RootState) => state.auth.credentials;
