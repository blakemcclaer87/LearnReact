import React from 'react';
import { useSelector } from 'react-redux';
import { RootStoreState } from '../../../atore/redux-store';
import Card from '../../UI/Card/Card';
import CartItem from '../CartItem/CartItem';
import ICartItem from '../CartItem/ICartItem';
import classes from './Cart.module.css';

const Cart = () => {

  const cartItems = useSelector((state: RootStoreState) => state.cart.items);

  return (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((currentItem: ICartItem) => {
            return (
              <CartItem key={currentItem.id} 
              item={{ 
                id      : currentItem.id,
                title   : currentItem.title,
                quantity: currentItem.quantity,
                total   : currentItem.total,
                price   : currentItem.price }}
              />)
          })
          }
        </ul>
      </Card>
    );
};

export default Cart;