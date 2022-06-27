import React, { useContext } from "react";
import { ICartItem } from "../../../interfaces/ICartItem";
import CartContet from "../../../store/CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import classes from './Cart.module.css';

const Cart = (props: any) => {

    const cartContext = useContext(CartContet);
    const totalAMount = `$${cartContext.CartTotalAmount.toFixed(2)}`;
    const hasItems    = cartContext.CartTotalItems > 0;

    const cancelCart = () => {
        if(props.onDismiss){
            props.onDismiss();
        }
    };

    const orderCart = () => {
        if(props.onDismiss){
            props.onDismiss();
        }
    };

    const cartRemoveItemHandler = () => {

    };

    const cartAddItemHandler = () => {

    };

    return (
        <div>
            <h1>
                Your Cart
            </h1>
            <hr/>
            <ul className={classes['cart-items']}>
                {cartContext.CartItems.map((item : ICartItem) => {
                    return (
                        <CartItem cartItem={item} 
                        key={item.id}
                        onAddItem={cartAddItemHandler.bind(null, item)}
                        onRemoveItem={cartRemoveItemHandler.bind(null, item.id)}>
                        </CartItem>
                    );
                })}
            </ul>
            <div className={classes.total}>
                <span>Total Amunt:</span>
                <span>{totalAMount}</span>
            </div>
            <hr/>
            <div className={classes.actions}>
                <button onClick={cancelCart} className={classes['classes--alt']}>
                    Cancel
                </button>
                {hasItems && <button onClick={orderCart} className={classes.button}>
                    Order
                </button>}
            </div>
        </div>
    );
};

export default Cart;