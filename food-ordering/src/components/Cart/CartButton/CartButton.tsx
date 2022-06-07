import React, { Fragment, useState } from "react";
import CartIcon from '../CartIcon/CartIcon';
import CartModal from "../CartModal/CartModal";

import classes from './CartButton.module.css';

const CartButton = (props: any) => {

    const [showCart, setShowCart] = useState(false);

    const toggleCartModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        setShowCart(currentValue => !currentValue);
    };

    const dismissModal = () => {
        setShowCart(false);
    }

    return (
        <Fragment>
            <button className={classes.button} onClick={toggleCartModal}>
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
            {showCart && <CartModal onDismiss={dismissModal}></CartModal>}
        </Fragment>
    );
};

export default CartButton;
