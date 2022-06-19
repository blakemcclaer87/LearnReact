import React, { Fragment, useContext, useState } from "react";
import CartContet from "../../../store/CartContext/CartContext";
import CartIcon from '../CartIcon/CartIcon';
import CartModal from "../CartModal/CartModal";

import classes from './CartButton.module.css';

const CartButton = (props: any) => {

    const cartContext = useContext(CartContet);

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
                    {cartContext.CartTotalItems}
                </span>
            </button>
            {showCart && <CartModal onDismiss={dismissModal}></CartModal>}
        </Fragment>
    );
};

export default CartButton;
