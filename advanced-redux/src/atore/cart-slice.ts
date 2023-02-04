import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import ICartItem from '../components/./Cart/CartItem/ICartItem';
import { uiActions } from "./ui-slice";

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

export const sendCartData = (cart: any) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        dispatch(uiActions.showNotification({
            status : 'pending',
            title  : 'Sending Cart Data',
            message: 'Now sending your cart data.'
          }));

        const sendRequest = async () => {
            const response = await fetch('https://react-http-2092a-default-rtdb.firebaseio.com/carts.json', {
                method: 'PUT',
                body  : JSON.stringify(cart)
                });
        
            if(!response.ok){
            
                dispatch(uiActions.showNotification({
                    status : 'error',
                    title  : 'Error',
                    message: 'Send cart data failed.'
                }));
    
                throw new Error('Sending cart data failed.');
            }
        };

        try{
            await sendRequest();

            dispatch(uiActions.showNotification({
                status : 'success',
                title  : 'Success',
                message: 'Sent cart data successfully.'
            }));
        }
        catch(e){
            dispatch(uiActions.showNotification({
                status : 'error',
                title  : 'Error',
                message: 'Send cart data failed.'
            }));
        }
    }
};

export const cartActions = cartSlice.actions;

export default cartSlice;
