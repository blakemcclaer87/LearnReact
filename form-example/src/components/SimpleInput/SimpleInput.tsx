import React, { ChangeEvent, FocusEvent, FormEvent, useRef, useState } from "react";

const SimpleInput = () => {

  const [enteredName, setEnterdName] = useState('');
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const onNameInputBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    setEnteredNameTouched(true);

    if(enteredName.trim() === ''){
      setError('No name has been supplied.');
      return;
    }
  };

  const nameInputChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if(!enteredNameTouched){
      setEnteredNameTouched(true);
    }

    setEnterdName(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setEnteredNameTouched(true);

    if(enteredName.trim() === ''){
      setError('No name has been supplied.');
      return;
    }

    console.log('State Value');
    console.log(enteredName);

    if(nameInputRef && nameInputRef.current){
      console.log('Ref Value');
      console.log(nameInputRef.current.value);
    }
  };

  const nameInputIsValid = error.trim() === '' ? 'form-control' : 'form-control invalid';

  return (
      <form onSubmit={formSubmitHandler}>
        <div className={nameInputIsValid}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' ref={nameInputRef} value={enteredName} onBlur={onNameInputBlurHandler} onChange={nameInputChangedHandler} />
        </div>
        {(error !== '' && enteredNameTouched) &&<p>{error}</p>}
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    );
};

export default SimpleInput;