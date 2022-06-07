import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Modal from "../../ui/Modal/Modal";
import Cart from "../Cart/Cart";
import classes from './CartModal.module.css';

const CartModal = (props: any) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
               <Modal onDismiss={props.onDismiss}>
                   <Cart onDismiss={props.onDismiss}></Cart>
               </Modal>,
               document.getElementById('modal-item') as HTMLElement
            )}
        </Fragment>
    );
};

export default CartModal;