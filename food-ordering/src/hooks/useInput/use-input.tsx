import { ChangeEvent, useState, FocusEvent } from "react";
import IUseInputPropModel from "./useInputPropModel";

const useInput = (propsModel: IUseInputPropModel) =>{
    const [enteredValue, setEnteredValue] = useState('');
    const [enteredValueControlTouched, setEnteredValueControlTouched] = useState(false);

    const enteredValueValid = propsModel.validateFunction(enteredValue);

    const hasError = propsModel.onlyValidateOnTouch ? (!enteredValueValid && enteredValueControlTouched)
                        : !enteredValueValid

    const onValueInputBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
        setEnteredValueControlTouched(true);
    };
    
    const onValueChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if(!enteredValueControlTouched){
            setEnteredValueControlTouched(true);
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