import React, { useReducer } from "react";
import { ICartItem } from "../../interfaces/ICartItem";
import { IReducerAction } from "../../interfaces/IReducerAction";
import { ICartReducerState } from '../../interfaces/ICartReducerState';

const defaultCartState: ICartReducerState = {
    cartItems:[] as ICartItem[],
    totalAmount: 0,
    totalItems: 0
};

const cartReducer = (state: ICartReducerState, action: IReducerAction) => {

    if(action.type === 'ADD_TYPE_ITEM'){

        const updatedItems = state.cartItems.concat(action.value as ICartItem);
        const newAmount    = state.totalAmount + (action.value.amount * action.value.price);
        const newTotal     = state.totalItems++; 

        return {
            cartItems:   updatedItems,
            totalAmount: newAmount,
            totalItems:  newTotal
        } as ICartReducerState
    }

    return defaultCartState;
};

const CartContet = React.createContext({
    CartItems: [] as ICartItem[],
    CartTotalAmount: 0,
    CartTotalItems:  0,
    onAddItem: (item: ICartItem) => {},
    onRemoveItem: (item: ICartItem) => {},
    onClearCart: () => {}
});

export const CartContextProvider = (props: any) => {

   const [cartState, dispatchCartAction] =  useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item: ICartItem) => {
        dispatchCartAction({type: 'ADD_TYPE_ITEM', value: item});
    };

    const removeItemHandler = (item: ICartItem) => {
    };

    const clearCart = () => {

    };

    return (<CartContet.Provider value={{
        CartItems          : cartState.cartItems,
        CartTotalAmount    : cartState.totalAmount,
        CartTotalItems     : cartState.totalItems,
        onAddItem          : addItemHandler,
        onRemoveItem       : removeItemHandler,
        onClearCart        : clearCart
      }}>{props.children}</CartContet.Provider>);
};

export default CartContet;