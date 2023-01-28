import React from 'react';
import classes from './CartButton.module.css';
import { uiActions } from '../../../atore/ui-slice';
import { useDispatch } from 'react-redux/es/exports';

const CartButton = () => {

  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
      <button className={classes.button} onClick={toggleCartHandler}>
        <span>My Cart</span>
        <span className={classes.badge}>1</span>
      </button>
    );
};

export default CartButton;