import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	credentials: { username: '', password: '' },
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action) => {
			state.isAuth = action.payload;
			localStorage.setItem('isAuth', action.payload);
		},
		setCredentials: (state, action) => {
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
export const selectAuth = (state) => state.auth.isAuth;
export const selectCredentials = (state) => state.auth.credentials;
