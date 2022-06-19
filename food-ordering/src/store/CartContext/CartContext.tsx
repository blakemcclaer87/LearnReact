import React, { useEffect, useState } from "react";
import { ICartItem } from "../../interfaces/ICartItem";

const CartContet = React.createContext({
    CartItems: [] as ICartItem[],
    CartTotalItems: 0,
    getCartTotalItems: () => {},
    onAddItem: (item: ICartItem) => {},
    onRemoveItem: (item: ICartItem) => {},
    onClearCart: () => {}
});

export const CartContextProvider = (props: any) => {

    const [cartItems, setCartItems] = useState([] as ICartItem[]);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        if(cartItems && cartItems.length > 0){
            let numberOfItems = 0;

            numberOfItems = cartItems.reduce((currentNumber, item) => {
                return currentNumber + item.amount;
            }, 0);

            setTotalItems(numberOfItems);
        }else{
            setTotalItems(0);
        }
    },
    [cartItems]);

    const addItemHandler = (item: ICartItem) => {
        setCartItems((previousState: ICartItem[]) => {
            return [...previousState, item];
        })
    };

    const getTotalItemsInCart = () => {
        let numberOfItems = 0;

        if(cartItems && cartItems.length > 0){
            numberOfItems = cartItems.reduce((currentNumber, item) => {
                return currentNumber + item.amount;
            }, 0);
        }

        return numberOfItems;
    }

    const removeItemHandler = (item: ICartItem) => {
        setCartItems((previousState: ICartItem[]) => {
            
            let itemIndex = previousState.findIndex(arrayItem => arrayItem.id === item.id);

            if(itemIndex){
                 previousState.splice(itemIndex, 1);
            }

            return previousState;
        });
    };

    const clearCart = () => {
        if(cartItems){
            setCartItems([] as ICartItem[]);        
        }
    };

    return (<CartContet.Provider value={{
        CartItems          : cartItems,
        CartTotalItems     : totalItems,
        onAddItem          : addItemHandler,
        onRemoveItem       : removeItemHandler,
        onClearCart        : clearCart,
        getCartTotalItems  : getTotalItemsInCart
      }}>{props.children}</CartContet.Provider>);
};

export default CartContet;