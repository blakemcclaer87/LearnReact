import React, { useContext } from "react";
import classes from './Checkout.module.css';
import ICheckoutProps from "./ICheckoutProps";
import classnames from 'classnames';
import useInput from "../../hooks/useInput/use-input";
import IUseInputPropModel from "../../hooks/useInput/useInputPropModel";
import useOrdersHttp from "../../hooks/useOrdersHttp/useOrdersHttp";
import IRequestConfig from "../../interfaces/IHttpRequest";
import IOrder from "../../interfaces/IOrder";
import IOrderContact from "../../interfaces/IOrderContact";
import CartContet from "../../store/CartContext/CartContext";

const Checkout = (props: ICheckoutProps) => {

    const validateRequiredTetField = (newValue: string) => {
        return newValue && newValue.trim() !== '';
    };

    const validateEmailField = (newValue: string) => {
        return newValue && newValue.trim() !== '' && newValue.includes('@');
    };

    const {isLoading: isSavingOrder, error: orderError, sendOrderRequest} = useOrdersHttp();

    const cartContext = useContext(CartContet);

    const { value: enteredFirstName, 
        hasError: hasFirstNameError, 
        valueBlueHandler: firstNameValueBlurHandler, 
        valueChangedHandler: firstNameValueChangedHandler, 
        updateValue: setFirstNameUpdate} = useInput({validateFunction: validateRequiredTetField} as IUseInputPropModel);

    const { value: enteredLastName, 
        hasError: hasLastNameError, 
        valueBlueHandler: lastNameValueBlurHandler, 
        valueChangedHandler: lastNameValueChangedHandler, 
        updateValue: setLastNameUpdate} = useInput({validateFunction: validateRequiredTetField} as IUseInputPropModel);

    const { value: enteredEmail, 
        hasError: hasEmailEror, 
        valueBlueHandler: emailValueBlurHandler, 
        valueChangedHandler: emailValueChangedHandler, 
        updateValue: setEmailUpdate} = useInput({validateFunction: validateEmailField} as IUseInputPropModel);

    const { value: enteredAddress, 
        hasError: hasAddressError, 
        valueBlueHandler: addressValueBlurHandler, 
        valueChangedHandler: addressValueChangedHandler, 
        updateValue: setAddressUpdate} = useInput({validateFunction: validateRequiredTetField} as IUseInputPropModel);

    const { value: enteredPostcode, 
        hasError: hasPostcodeError, 
        valueBlueHandler: postcodeValueBlurHandler, 
        valueChangedHandler: postcodeValueChangedHandler, 
        updateValue: setPostcodeUpdate} = useInput({validateFunction: validateRequiredTetField} as IUseInputPropModel);

    const { value: enteredCountry, 
        hasError: hasCountryError, 
        valueBlueHandler: countryValueBlurHandler, 
        valueChangedHandler: countryValueChangedHandler, 
        updateValue: setCountryUpdate} = useInput({validateFunction: validateRequiredTetField} as IUseInputPropModel);

    const formIsValid = !hasFirstNameError &&
                        !hasLastNameError &&
                        !hasEmailEror && 
                        !hasAddressError &&
                        !hasPostcodeError &&
                        !hasCountryError;

    const processOrderSubmit = async () => {
        if(formIsValid){

            const orderToSave = {
                totalPrice: cartContext.CartTotalAmount,
                totlItems: cartContext.CartTotalItems,
                contactDetails: {
                    firstName: enteredFirstName,
                    lastName : enteredLastName,
                    email    : enteredEmail,
                    address  : enteredAddress,
                    postcode : enteredPostcode,
                    country  : enteredCountry
                } as IOrderContact,
                cartItems: cartContext.CartItems
            } as IOrder;

            await sendOrderRequest({
                        url   : 'https://react-http-2092a-default-rtdb.firebaseio.com/orders.json',
                        method: 'POST',
                        body  : orderToSave
                    } as IRequestConfig);

            cartContext.onClearCart();
            
            props.onDismiss();
        }
    };

    return (
        <div>
            <div className={classes.headertext}>
                <h2>
                    Checkout
                </h2>
                <p>
                    Enter enter your details below to finalise your fantastic food order!
                </p>
                <hr></hr>
                <form className={classes['form-grid-container']}>
                    <div className={classnames('grid-child', classes['form-row-mid-split-container'])}>
                        <div className={classnames('grid-child', classes.control)}>
                            <label htmlFor="first-name">First Name</label>
                            <input title="First Name" 
                                   type="text" 
                                   name="first-name" 
                                   value={enteredFirstName} 
                                   onChange={firstNameValueChangedHandler} 
                                   onBlur={firstNameValueBlurHandler}/>
                        </div>
                        <div className={classnames('grid-child', classes.control)}>
                            <label htmlFor="last-name">Last Name</label>
                            <input title="Last Name" 
                                   type="text" 
                                   name="last-name"
                                   value={enteredLastName} 
                                   onChange={lastNameValueChangedHandler} 
                                   onBlur={lastNameValueBlurHandler} />
                        </div>
                    </div>
                    <div className={classnames('grid-child',classes.control)}>
                        <label htmlFor="email">Email</label>
                        <input title="Email" 
                               type="email" 
                               name="email"
                               value={enteredEmail} 
                               onChange={emailValueChangedHandler} 
                               onBlur={emailValueBlurHandler} />
                    </div>
                    <div className={classnames('grid-child',classes.control)}>
                        <label htmlFor="address">Address</label>
                        <input title="Address" 
                               type="text" 
                               name="address"
                               value={enteredAddress} 
                               onChange={addressValueChangedHandler} 
                               onBlur={addressValueBlurHandler} />
                    </div>
                    <div className={classnames('grid-child', classes['form-row-mid-split-container'])}>
                        <div className={classnames('grid-child', classes.control)}>
                            <label htmlFor="postcode">Postcode</label>
                            <input title="Postcode" 
                                   type="text" 
                                   name="postcode"
                                   value={enteredPostcode} 
                                   onChange={postcodeValueChangedHandler} 
                                   onBlur={postcodeValueBlurHandler} />
                        </div>
                        <div className={classnames('grid-child', classes.control)}>
                            <label htmlFor="country">Country</label>
                            <input title="Country" 
                                   type="text" 
                                   name="country"
                                   value={enteredCountry} 
                                   onChange={countryValueChangedHandler} 
                                   onBlur={countryValueBlurHandler} />
                        </div>
                    </div>
                </form>
                {isSavingOrder && <div className='headertext'>
                    <p>
                        Saving your order now...
                    </p>
                </div>}
                {!isSavingOrder && orderError && <div className='headertext'>
                    <p className="invalid label">
                        {orderError}
                    </p>
                </div>}
                <hr></hr>
                <div className={classes.actions}>
                    <button onClick={props.onDismiss} className={classes['classes--alt']}>
                        Cancel
                    </button>
                    {<button  className={classes.submit} disabled={!formIsValid || isSavingOrder} onClick={processOrderSubmit}>
                        Order
                    </button>}
                </div>
            </div>
        </div>
    );
};

export default Checkout;
