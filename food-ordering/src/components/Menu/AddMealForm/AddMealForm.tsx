import React, { FormEvent, useReducer, useRef } from "react";
import classes from './AddMealForm.module.css';
import Input from "../../ui/Input/Input";

const quantityReducer = (state: any, action: any) => {

    if(action.type === 'QUANTITY_CHANGED'){
      return {
        value:   +action.value,
        isValid: +action.value > 0
      }
    }
  
    return {
      value:   '0',
      isValid: false
    }
};

const AddMealForm = (props: any) => {

    const quantityRef = useRef<HTMLInputElement>(null);

    const [quantityState, dispatchQuantity]  = useReducer(quantityReducer, {value: '0', isValid: false});

    const submitNewMealHandler = (event: FormEvent) => {
        console.log('in submit habndler.');
        console.log(quantityState);
        event.preventDefault();
        if(quantityState.isValid){
            props.AddToCart(+quantityState.value);
        }else{
            return;
        }
    };

    const quantityChangedHandler = (event: FormEvent<HTMLInputElement>) => {
        console.log('in quantity changed handler');
        dispatchQuantity({
            type: 'QUANTITY_CHANGED',
            value: event.currentTarget.value
        });
    };

    return (
        <form className={classes.form} onSubmit={submitNewMealHandler}>
            <Input label='Quantity' input={{
                        id: props.id,
                        key: props.id,
                        type: 'number',           
                        ref: quantityRef,
                        onChange: quantityChangedHandler,
                        value: quantityState.value
                    }}>
            </Input>
            <button>+ ADD</button>
            {!quantityState.isValid && <p>Please enter an amount</p>}
        </form>
    );
};


export default AddMealForm;