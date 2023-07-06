import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isDisabled: false,
	activeShop: 0,
};

const shopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		setDisbaled: (state, action) => {
			state.isDisabled = action.payload;
		},
		setActiveShop: (state, action) => {
			state.activeShop = action.payload;
		},
	},
});

export const { setDisbaled, setActiveShop } = shopSlice.actions;
export default shopSlice.reducer;
export const selectDisabled = (state) => state.shop.isDisabled;
export const selectActiveShop = (state) => state.shop.activeShop;
