import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './toggle';
import uiSlice from './ui-slice';

//pass configureStore a configuration object where we set a reducer property
//we can also create a map of reducers
const store = configureStore({
    reducer: { ui: uiSlice , toggle: toggleReducer}
});

export default store;