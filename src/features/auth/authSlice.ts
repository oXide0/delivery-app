import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { TypeCredentials } from '../../types/types';

export interface AuthState {
	isAuth: boolean;
	credentials: TypeCredentials;
}

const initialState: AuthState = {
	isAuth: false,
	credentials: { username: '', password: '' },
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload;
			localStorage.setItem('isAuth', JSON.stringify(action.payload));
		},
		setCredentials: (state, action: PayloadAction<TypeCredentials>) => {
			const { username, password } = action.payload;
			state.credentials.username = username;
			state.credentials.password = password;
			localStorage.setItem('username', username);
			localStorage.setItem('password', password);
		},
		logOut: (state) => {
			state.isAuth = false;
			state.credentials.username = '';
			state.credentials.password = '';
			localStorage.removeItem('isAuth');
			localStorage.removeItem('username');
			localStorage.removeItem('password');
		},
	},
});

export const { setAuth, setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectAuth = (state: RootState) => state.auth.isAuth;
export const selectCredentials = (state: RootState) => state.auth.credentials;
