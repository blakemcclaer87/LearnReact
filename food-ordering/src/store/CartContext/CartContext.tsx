import React, { useReducer } from "react";
import { ICartItem } from "../../interfaces/ICartItem";
import { IReducerAction } from "../../interfaces/IReducerAction";
import { ICartReducerState } from '../../interfaces/ICartReducerState';
import { totalmem } from "os";

const defaultCartState: ICartReducerState = {
    cartItems:[] as ICartItem[],
    totalAmount: 0,
    totalItems: 0
};

const cartReducer = (state: ICartReducerState, action: IReducerAction) => {

    if(action.type === 'ADD_TYPE_ITEM'){

        const existingCartItemIndex = state.cartItems.findIndex(item => item.id === action.value.id);
        const existingItem          = state.cartItems[existingCartItemIndex];

        let updatedItem : ICartItem;
        let updatedItems: ICartItem[];
        let newTotal    : number = 0;

        if(existingItem){
            updatedItem = {
                ...existingItem,
                amount: (existingItem.amount + 1)
            };

            updatedItems = [...state.cartItems];
            updatedItems[existingCartItemIndex] = updatedItem;

        }else{
            updatedItems = state.cartItems.concat(action.value as ICartItem);
        }

        let newAmount: number = 0;

        updatedItems.forEach((item: ICartItem) => {
            newAmount = newAmount + (item.amount * item.price);
            newTotal  = newTotal + item.amount;
        });
       
        return {
            cartItems:   updatedItems,
            totalAmount: newAmount,
            totalItems:  newTotal
        } as ICartReducerState
    }

    if(action.type === 'CLEAR_CART'){
        return {
            cartItems  : [] as ICartItem[],
            totalAmount: 0,
            totalItems : 0
        } as ICartReducerState
    }

    if(action.type === 'REMOVE_CART_ITEM'){

        const itemID: number            = +action.value;
        const itemIndex                 = state.cartItems.findIndex(cartItem => cartItem.id === itemID);
        const updatedItems: ICartItem[] = [...state.cartItems];

        if(itemIndex > -1){
            updatedItems.splice(itemIndex,1);
        }

        let newTotal = 0;
        let newAmount: number = 0;

        updatedItems.forEach((item: ICartItem) => {
            newAmount = newAmount + (item.amount * item.price);
            newTotal  = newTotal + item.amount;
        });

        return {
            cartItems  : updatedItems,
            totalItems : newTotal,
            totalAmount: newAmount
        } as ICartReducerState
    }

    return defaultCartState;
};

const CartContet = React.createContext({
    CartItems      : [] as ICartItem[],
    CartTotalAmount: 0,
    CartTotalItems : 0,
    onAddItem      : (item: ICartItem) => {},
    onRemoveItem   : (id: number) => {},
    onClearCart    : () => {}
});

export const CartContextProvider = (props: any) => {

   const [cartState, dispatchCartAction] =  useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item: ICartItem) => {
        dispatchCartAction({
            type: 'ADD_TYPE_ITEM', 
            value: item
        });
    };

    const removeItemHandler = (id: number) => {
        dispatchCartAction({
            type:  'REMOVE_CART_ITEM',
            value: id
        })
    };

    const clearCart = () => {
        dispatchCartAction({
            type: 'CLEAR_CART',
            value: null
        });
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