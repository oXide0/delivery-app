import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/index';

export interface TabState {
	activeTab: number;
}

const initialState: TabState = {
	activeTab: 0,
};

const tabSlice = createSlice({
	name: 'tab',
	initialState,
	reducers: {
		setActiveTab: (state, action: PayloadAction<number>) => {
			state.activeTab = action.payload;
		},
	},
});

export const { setActiveTab } = tabSlice.actions;
export default tabSlice.reducer;
export const selectActiveTab = (state: RootState) => state.tab.activeTab;
