import React, { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from "react";

import './SimpleInput.module.css';

const SimpleInput = () => {

  const [enteredName, setEnterdName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsalid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '' && enteredNameTouched;

  useEffect(()=> {
    setFormIsValid(enteredNameIsValid);
  }, [enteredNameIsValid])
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

  const nameInputIsValid = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
      <form onSubmit={formSubmitHandler}>
        <div className={nameInputIsValid}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' value={enteredName} onBlur={onNameInputBlurHandler} onChange={nameInputChangedHandler} />
        </div>
        {!enteredNameIsValid &&<p>Invalid name entered.</p>}
        <div className="form-actions">
          <button disabled={!formIsalid}>Submit</button>
        </div>
      </form>
    );
};

export default SimpleInput;