import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../UI/Input/Input';

const passwordReducer = (state, action) => {

  if(action.type === 'PASSWORD_CHANGED'){
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

const emailReducer = (state, action) => {

  if(action.type === 'EMAIL_CHANGED'){
    return {
      value:   action.value,
      isValid: action.value.includes('@') > 0
    }
  }

  if(action.type === 'INPUT_BLUR'){
    return {
      value:   state.value,
      isValid: state.value.includes('@') > 0
    }
  }

  return {
    value:'',
    isValid: false
  }
};

const Login = (props) => {

  const emailRef    = useRef();
  const passwordRef = useRef();

  const authContext = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  //reducers
  //
  const [emailState, dispatchEmail]       = useReducer(emailReducer, {value: '', isValid: null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

  //object destructuring - means use effect is only called if the isvalid property changes 
  //
  const {isValid: emailIsValid}    = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {

    const timer = setTimeout(() => {
      console.log('Checing Form.');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      console.log('Cleanup.');
      clearTimeout(timer);
    }
  },
  [
    //dontneed to put set state pointers as they are confirmed to be the same across re-renders
    //
    emailIsValid,
    passwordIsValid
  ]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'EMAIL_CHANGED',
      value: event.target.value
    });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: 'PASSWORD_CHANGED',
      value: event.target.value
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_BLUR'
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'INPUT_BLUR'
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authContext.onLogin(emailState.value, passwordState.value);
    }
    else if (!emailIsValid){
      emailRef.current.focus();
    } else{
      passwordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id='email' 
               type='email' 
               label='Email Address'
               ref={emailRef}
               value={emailState.value} 
               isValid={emailIsValid} 
               onChange={emailChangeHandler} 
               onBlur={validateEmailHandler}>
        </Input>
        <Input id='password' 
               type='password' 
               label='Password'
               ref={passwordRef}
               value={passwordState.value} 
               isValid={passwordIsValid} 
               onChange={passwordChangeHandler} 
               onBlur={validatePasswordHandler}>
        </Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
