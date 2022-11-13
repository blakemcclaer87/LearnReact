import {ICartItem} from './ICartItem';

export interface ICartReducerState {
    cartItems: ICartItem[];
    totalAmount: number;
    totalItems: number;
}