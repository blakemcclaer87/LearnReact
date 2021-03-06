import React from "react";
import classes from './CartItem.module.css';

const CartItem = (props: any) => {

    const formattedPrice = `$${props.cartItem.price.toFixed(2)}`;

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>
                    {props.cartItem.name}
                </h2>
                <div className={classes.summary}>
                    <span className={classes.price}>
                        {formattedPrice}
                    </span>
                    <span className={classes.amount}>
                        {props.cartItem.amount}
                    </span>
                </div>
            </div>
            <div className={classes.actons}>
                <button className={classes['cart-item-button']} onClick={props.onAddItem}>
                    +
                </button>
                <button className={classes['cart-item-button']} onClick={props.onRemoveItem}>
                    X
                </button>
            </div>

        </li>
    );
};

export default CartItem;