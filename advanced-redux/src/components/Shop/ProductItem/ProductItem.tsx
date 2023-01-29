import React from 'react';
import Card from '../../UI/Card/Card';
import IProductItemModel from './IProductItemModel';
import classes from './ProductItem.module.css';
import { cartActions } from '../../../atore/cart-slice';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import ICartItem from '../../Cart/CartItem/ICartItem';

const ProductItem = (props: IProductItemModel) => {
    const { productID, title, price, description } = props;
    const dispatch = useDispatch();

    const addItemHandler = () => {
      dispatch(cartActions.addItem({
        id      : productID,
        title   : title,
        price   : price,
        quantity: 1,
        total   : price
      } as ICartItem));
    }

    return (
      <li className={classes.item}>
        <Card>
          <header>
            <h3>{title}</h3>
            <div className={classes.price}>${price.toFixed(2)}</div>
          </header>
          <p>{description}</p>
          <div className={classes.actions}>
            <button onClick={addItemHandler}>Add to Cart</button>
          </div>
        </Card>
      </li>
    );
};

export default ProductItem;