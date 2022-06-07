import React, { Fragment } from "react";
import { ICartItem } from "../../../interfaces/ICartItem";
import classes from './Cart.module.css';

const Cart = (props: any) => {

    const CART_ITEMS: ICartItem[] = [
        {
            id: 1,
            name: 'sushi',
            description: 'super nice sushi',
            price: 10.00,
            amount: 2
        }
    ]

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

    return (
        <div>
            <h1>
                Your Cart
            </h1>
            <hr/>
            <ul className={classes['cart-items']}>
                {CART_ITEMS.map((item : ICartItem) => {
                    return (
                        <li>
                            {item.name}
                        </li>
                    );
                })}
            </ul>
            <div className={classes.total}>
                <span>Total Amunt:</span>
                <span>$35</span>
            </div>
            <hr/>
            <div className={classes.actions}>
                <button onClick={cancelCart} className={classes['classes--alt']}>
                    Cancel
                </button>
                <button onClick={orderCart} className={classes.button}>
                    Order
                </button>
            </div>
        </div>
    );
};

export default Cart;