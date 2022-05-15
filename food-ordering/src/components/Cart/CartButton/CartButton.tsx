import React, { Fragment } from "react";
import CartIcon from '../CartIcon/CartIcon';

import classes from './CartButton.module.css';

const CartButton = (props: any) => {
    return (
        <Fragment>
            <button className={classes.button}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>
                    Your Cart
                </span>
                <span className={classes.badge}>
                    0
                </span>
            </button>
        </Fragment>
    );
};

export default CartButton;
