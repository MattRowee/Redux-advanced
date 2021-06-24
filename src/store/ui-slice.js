import {createSlice} from '@reduxjs/toolkit';

const initialHiddenState = {
    cartIsVisible: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialHiddenState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
            
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;