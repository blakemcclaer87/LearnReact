import { ICartItem } from "./ICartItem";
import IOrderContact from "./IOrderContact";

export default interface IOrder {
    orderID:        string;
    contactDetails: IOrderContact
    totlItems:      number;
    totalPrice:     number;
    cartItems:      ICartItem[];
};