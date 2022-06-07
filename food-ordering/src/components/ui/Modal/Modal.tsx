import React, { Fragment } from "react";
import Card from "../Card/Card";
import classes from './Modal.module.css';

const Modal = (props: any) => {
    return (
        <Fragment>
            <div className={classes.backdrop} onClick={props.onDismiss}>
            </div>
            <Card className={classes.modal}>
                {props.children}
            </Card>
        </Fragment>
    );
};

export default Modal;