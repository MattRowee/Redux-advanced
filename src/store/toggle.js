import {createSlice} from '@reduxjs/toolkit';

const initialHiddenState = {
    isHidden: false,
};

const toggleSlice = createSlice({
    name: "toggle",
    initialState: initialHiddenState,
    reducers: {
        toggleCart(state){
            state.isHidden = !state.isHidden;
        }
    }
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice.reducer;