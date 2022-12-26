import { configureStore } from "@reduxjs/toolkit";
import ICounterStoreAction from "./ICounterStoreAction";
import ICounterStoreStateModel from "./ICounterStoreStateModel";

const counterReducer = (state: ICounterStoreStateModel | undefined, action: ICounterStoreAction): ICounterStoreStateModel => {

    if(state !== undefined){
        switch(action.type.toUpperCase()){
            case 'INCREMENT':
                return {
                    counter: state.counter + 1
                } as ICounterStoreStateModel
            case 'DECREMENT':
                return {
                    counter: state.counter - 1
                } as ICounterStoreStateModel
        }
    
        return state;
    }else{
        return {
            counter: 0
        } as ICounterStoreStateModel;
    }
};

const counterStore = configureStore({ reducer: counterReducer });

export default counterStore;