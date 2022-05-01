import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';

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
    authContext.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
