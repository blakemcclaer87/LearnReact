import React from "react";
import classes from './Checkout.module.css';
import ICheckoutProps from "./ICheckoutProps";

const Checkout = (props: ICheckoutProps) => {
    return (
        <div>
            <div className={classes.headertext}>
                <h2>
                    Checkout
                </h2>
                <p>
                    Enter enter your details below to finalise your fantastic food ordr!
                </p>
                <hr></hr>
                <div className={classes.actions}>
                    <button onClick={props.onDismiss} className={classes['classes--alt']}>
                        Cancel
                    </button>
                    {<button  className={classes.button}>
                        Order
                    </button>}
                </div>
            </div>
        </div>
    );
};

export default Checkout;