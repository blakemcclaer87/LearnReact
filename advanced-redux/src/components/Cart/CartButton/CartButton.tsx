import React from 'react';
import classes from './CartButton.module.css';
import { uiActions } from '../../../atore/ui-slice';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootStoreState } from '../../../atore/redux-store';

const CartButton = () => {

  const dispatch = useDispatch();

  const totalItems = useSelector((state: RootStoreState) => state.cart.totalQuantity);
 
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
      <button className={classes.button} onClick={toggleCartHandler}>
        <span>My Cart</span>
        <span className={classes.badge}>{totalItems}</span>
      </button>
    );
};

export default CartButton;