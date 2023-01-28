import {configureStore} from '@reduxjs/toolkit'
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: {ui: uiSlice.reducer }
});

export type RootStoreState = ReturnType<typeof store.getState>

export default store; 