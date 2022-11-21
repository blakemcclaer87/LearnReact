import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Checkout from "../../Checkout/Checkout";
import Modal from "../../ui/Modal/Modal";
import Cart from "../Cart/Cart";
import classes from './CartModal.module.css';

const CartModal = (props: any) => {

    const [showCheckout, setShowCheckout] = useState(false);

    const toggleCheckout = (event: React.MouseEvent<HTMLButtonElement>) => {
        setShowCheckout(currentValue => !currentValue);
    };
    

    return (
        <Fragment>
            {ReactDOM.createPortal(
               <Modal onDismiss={props.onDismiss}>
                   {!showCheckout && <Cart onDismiss={props.onDismiss} toggleCheckout={toggleCheckout}></Cart>}
                   {showCheckout && <Checkout onDismiss={props.onDismiss} ></Checkout>}
               </Modal>,
               document.getElementById('modal-item') as HTMLElement
            )}
        </Fragment>
    );
};

export default CartModal;