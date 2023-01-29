import { createSlice } from "@reduxjs/toolkit";
import ICartItem from '../components/./Cart/CartItem/ICartItem';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [] as ICartItem[],
        totalQuantity: 0
    },
    reducers: {
        addItem(state, action){
            const item = action.payload;

            const existingItem = state.items.find((arrayItem: ICartItem) => arrayItem.id === item.id);

            if(!existingItem){
                state.items.push({
                    ...item,
                    quantity: 1,
                    total   : item.price
                } as ICartItem);
                state.totalQuantity++;
            }else{
                existingItem.quantity++;
                existingItem.total = existingItem.total + existingItem.price
            }
        },
        removeItem(state, action){
            const id = action.payload;

            const existingItem = state.items.find((arrayItem: ICartItem) => arrayItem.id === id);

            if(existingItem){
                if(existingItem.quantity === 1){
                    state.items = state.items.filter((arrayItem: ICartItem) => arrayItem.id !== id);
                    state.totalQuantity--;
                }else{
                    existingItem.quantity--;
                    existingItem.total= existingItem.total - existingItem.price;
                }
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
