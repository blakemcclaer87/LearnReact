import { ChangeEvent, useState, FocusEvent } from "react";
import IUseInputPropModel from "./useInputPropModel";

const useInput = (propsMoel: IUseInputPropModel) =>{
    const [enteredValue, setEnteredValue] = useState('');
    const [enteredValueControlTouched, setEnteredValueCOntrolTouched] = useState(false);

    const enteredValueValid = propsMoel.validateFunction(enteredValue);

    const hasError = !enteredValueValid && enteredValueControlTouched;

    const onValueInputBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
        setEnteredValueCOntrolTouched(true);
    };
    
    const onValueChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if(!enteredValueControlTouched){
            setEnteredValueCOntrolTouched(true);
        }

        setEnteredValue(event.target.value);
    }

    const updateValue = (value: string) => {
        setEnteredValue(value);
    }

    return {
        value: enteredValue,
        hasError,
        valueBlueHandler: onValueInputBlurHandler,
        valueChangedHandler: onValueChangedHandler,
        updateValue
    }
};

export default useInput;