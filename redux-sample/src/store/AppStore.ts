import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICounterStoreStateModel from "./ICounterStoreStateModel";

const initialState = {
    counter    : 0,
    showCounter: true
} as ICounterStoreStateModel;

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state: ICounterStoreStateModel) => {
            //this is actually immutable - tooliti does it in the background
            state.counter++;
        },
        decrement: (state: ICounterStoreStateModel) => {
            state.counter--;
        },
        toggleCounter: (state: ICounterStoreStateModel) => {
            state.showCounter = !state.showCounter;
        },
        increase: (state: ICounterStoreStateModel, action: PayloadAction<number>) => {
            state.counter = state.counter + action.payload;
        }
    }
});

const counterStore = configureStore({ 
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default counterStore;