import React, {  FormEvent } from "react";

import './SimpleInput.module.css';

import useInput from "../../hooks/use-input";
import IUseInputPropModel from "../../hooks/useInputPropModel";

const SimpleInput = () => {

  const isEnteredNameValid =  (value: string) => {
    return value.trim() !== '';
  }

  const isEnteredEmailValid = (value: string) => {
    return  value.trim() !== '' && 
    value.indexOf('@') > -1;
  }

  const { value: enteredName, hasError: hasNameError, valueBlueHandler: nameValueBlurHandler, valueChangedHandler: onNameChangedHandler, updateValue: setNameUpdate} = useInput({validateFunction: isEnteredNameValid} as IUseInputPropModel);
  const { value: enteredEmail, hasError: hasEmailError, valueBlueHandler: emailValueBlurHandler, valueChangedHandler: onEmailChangedHandler, updateValue: setEmailUpdate} = useInput({validateFunction: isEnteredEmailValid} as IUseInputPropModel);

  let formIsalid = false;

  if(!hasNameError && !hasEmailError){
    formIsalid = true;
  }

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    if(formIsalid){
      setEmailUpdate('');
      setNameUpdate('');
    }
  };

  const nameInputIsValid = !hasNameError ? 'form-control' : 'form-control invalid';
  const emailInputIsValid = !hasEmailError ? 'form-control' : 'form-control invalid';

  return (
      <form onSubmit={formSubmitHandler}>
        <div className={nameInputIsValid}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' value={enteredName} onBlur={nameValueBlurHandler} onChange={onNameChangedHandler} />
        </div>
        {hasNameError &&<p>Invalid name entered.</p>}
        <div className={emailInputIsValid}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' value={enteredEmail} onBlur={emailValueBlurHandler} onChange={onEmailChangedHandler} />
        </div>
        {hasEmailError &&<p>Invalid email entered.</p>}
        <div className="form-actions">
          <button disabled={!formIsalid}>Submit</button>
        </div>
      </form>
    );
};

export default SimpleInput;