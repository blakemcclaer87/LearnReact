import { configureStore } from "@reduxjs/toolkit";
import ICounterStoreAction from "./ICounterStoreAction";
import ICounterStoreStateModel from "./ICounterStoreStateModel";

const counterReducer = (state: ICounterStoreStateModel | undefined, action: ICounterStoreAction): ICounterStoreStateModel => {

    if(state !== undefined){
        switch(action.type.toUpperCase()){
            case 'INCREMENT':
                return {
                    ...state,
                    counter: state.counter + 1
                } as ICounterStoreStateModel
            case 'DECREMENT':
                return {
                    ...state,
                    counter: state.counter - 1
                } as ICounterStoreStateModel
            case 'INCREASE':
                return {
                    ...state,
                    counter: state.counter + action.jumpNumber
                } as ICounterStoreStateModel
            case 'TOGGLE_COUNTER':
                return {
                    ...state,
                    showCounter: !state.showCounter
                } as ICounterStoreStateModel
        }
    
        return state;
    }else{
        return {
            counter    : 0,
            showCounter: true
        } as ICounterStoreStateModel;
    }
};

const counterStore = configureStore({ reducer: counterReducer });

export default counterStore;