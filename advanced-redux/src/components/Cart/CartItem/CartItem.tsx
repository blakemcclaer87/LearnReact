import React from 'react';
import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../atore/cart-slice';
import ICartItem from './ICartItem';

const CartItem = (props: any) => {
    const { id, title, quantity, total, price } = props.item;
    const dispatch = useDispatch();

    const addQuantityHandler = () => {
      dispatch(cartActions.addItem({
        id      : id,
        title   : title,
        quantity: quantity,
        total   : total,
        price   : price
      } as ICartItem));
    };

    const dereaseQuantityHandler = () => {
      dispatch(cartActions.removeItem(id));
    };

    return (
      <li className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            ${total.toFixed(2)}{' '}
            <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={dereaseQuantityHandler}>-</button>
            <button onClick={addQuantityHandler}>+</button>
          </div>
        </div>
      </li>
    );
};

export default CartItem;