import React, { useState } from "react";
import { ICartItem } from "../../interfaces/ICartItem";

const CartContet = React.createContext({
    CartItems: [] as ICartItem[],
    onAddItem: (item: ICartItem) => {},
    onRemoveItem: (item: ICartItem) => {}
});

export const CartContextProvider = (props: any) => {

   const [cartItems, setCartItems] = useState([] as ICartItem[]);

    const addItemHandler = (item: ICartItem) => {
        setCartItems((previousState: ICartItem[]) => {
            return [...previousState, item];
        })
    };

    const removeItemHandler = (item: ICartItem) => {
        setCartItems((previousState: ICartItem[]) => {
            
            let itemIndex = previousState.findIndex(arrayItem => arrayItem.id === item.id);

            if(itemIndex){
                 previousState.splice(itemIndex, 1);
            }

            return previousState;
        });
    };

    return (<CartContet.Provider value={{
        CartItems       : cartItems,
        onAddItem       : addItemHandler,
        onRemoveItem    : removeItemHandler
      }}>{props.children}</CartContet.Provider>);
};

export default CartContet;