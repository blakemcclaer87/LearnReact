import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import IAuthStateModel from "./IAuthStateModel";
import ICounterStoreStateModel from "./ICounterStoreStateModel";

const initialCountState = {
    counter    : 0,
    showCounter: true
} as ICounterStoreStateModel;

const initiAuthState = {
    isLoggedIn:false
} as IAuthStateModel;

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCountState,
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

const authSlice = createSlice({
    name: 'auth',
    initialState: initiAuthState,
    reducers: {
        login:(state: IAuthStateModel) => {
            state.isLoggedIn = true;
        },
        logout:(state: IAuthStateModel) => {
            state.isLoggedIn = false;
        }
    }
});

const counterStore = configureStore({ 
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions    = authSlice.actions;

export type RootStoreState = ReturnType<typeof counterStore.getState>

export default counterStore;