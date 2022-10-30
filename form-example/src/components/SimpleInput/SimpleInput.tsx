import React, { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from "react";

import './SimpleInput.module.css';

const SimpleInput = () => {

  const [enteredName, setEnterdName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');

  const enteredNameIsValid = enteredName.trim() !== '' && 
    enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.trim() !== '' && 
    enteredEmail.indexOf('@') > -1 && 
    enteredEmailTouched;

  let formIsalid = false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsalid = true;
  }

  const onNameInputBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    setEnteredNameTouched(true);
  };

  const nameInputChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if(!enteredNameTouched){
      setEnteredNameTouched(true);
    }

    setEnterdName(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    if(!enteredNameIsValid){
      return;
    }

    setEnterdName('');
    setEnteredNameTouched(false);
  };

  const onEmailInputBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    setEnteredEmailTouched(true);
  };

  const emailInputChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if(!enteredEmailTouched){
      setEnteredEmailTouched(true);
    }

    setEnteredEmail(event.target.value);
  };

  const nameInputIsValid = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
      <form onSubmit={formSubmitHandler}>
        <div className={nameInputIsValid}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' value={enteredName} onBlur={onNameInputBlurHandler} onChange={nameInputChangedHandler} />
        </div>
        {!enteredNameIsValid &&<p>Invalid name entered.</p>}
        <div className={nameInputIsValid}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' value={enteredEmail} onBlur={onEmailInputBlurHandler} onChange={emailInputChangedHandler} />
        </div>
        {!enteredEmailIsValid &&<p>Invalid email entered.</p>}
        <div className="form-actions">
          <button disabled={!formIsalid}>Submit</button>
        </div>
      </form>
    );
};

export default SimpleInput;