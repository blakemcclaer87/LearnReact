import React, { FormEvent, useReducer, useRef } from "react";
import classes from './AddMealForm.module.css';
import Input from "../../ui/Input/Input";

const quantityReducer = (state: any, action: any) => {

    if(action.type === 'QUANTITY_CHANGED'){
      return {
        value:   action.value,
        isValid: action.value ? action.value.trim().length> 6 : false
      }
    }
  
    return {
      value:   '',
      isValid: false
    }
};

const AddMealForm = (props: any) => {

    const quantityRef = useRef<HTMLInputElement>(null);

    //reducers
    //
    const [quantityState, dispatchQuantity]  = useReducer(quantityReducer, {value: '0', isValid: false});

    const quantityChangedHandler = (event: FormEvent<HTMLInputElement>) => {
        dispatchQuantity({
            type: 'QUANTITY_CHANGED',
            value: event.currentTarget.value
        });
    };

    return (
        <form className={classes.form}>
            <Input id='quantity' 
                type='number' 
                label='Quantity'
                ref={quantityRef}
                onChange={quantityChangedHandler}
                value={quantityState.value}>
            </Input>
            <button>+ ADD</button>
        </form>
    );
};

export default AddMealForm;