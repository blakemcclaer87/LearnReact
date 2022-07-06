import React, { Fragment, useContext, useEffect, useState } from "react";
import CartContet from "../../../store/CartContext/CartContext";
import CartIcon from '../CartIcon/CartIcon';
import CartModal from "../CartModal/CartModal";

import classes from './CartButton.module.css';

const CartButton = (props: any) => {

    const cartContext        = useContext(CartContet);
    const {CartItems: items} = cartContext;

    const [showCart, setShowCart]                 = useState(false);
    const [buttonHighightd, setButtonHighlighted] = useState(false);

    const toggleCartModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        setShowCart(currentValue => !currentValue);
    };

    const dismissModal = () => {
        setShowCart(false);
    }

    const buttonClasses = `${classes.button} ${buttonHighightd ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length > 0){
            setButtonHighlighted(true);

            const timer = setTimeout(() => {
                setButtonHighlighted(false);
            }, 300);

            return () => {
                clearTimeout(timer);
            };
        }else{
            return;
        }
    }, [items]);

    return (
        <Fragment>
            <button className={buttonClasses} onClick={toggleCartModal}>
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
