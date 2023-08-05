import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface ShopState {
	isDisabled: boolean;
	activeShop: number;
}

const initialState: ShopState = {
	isDisabled: false,
	activeShop: 0,
};

const shopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		setDisbaled: (state, action: PayloadAction<boolean>) => {
			state.isDisabled = action.payload;
		},
		setActiveShop: (state, action: PayloadAction<number>) => {
			state.activeShop = action.payload;
		},
	},
});

export const { setDisbaled, setActiveShop } = shopSlice.actions;
export default shopSlice.reducer;
export const selectDisabled = (state: RootState) => state.shop.isDisabled;
export const selectActiveShop = (state: RootState) => state.shop.activeShop;
