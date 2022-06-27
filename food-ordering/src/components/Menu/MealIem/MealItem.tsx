import React, { Fragment, useContext } from "react";
import { ICartItem } from "../../../interfaces/ICartItem";
import CartContet from "../../../store/CartContext/CartContext";
import AddMealForm from "../AddMealForm/AddMealForm";
import classes from './MealItem.module.css';

const MealItem = (props: any) => {

    const formattedPrice =  `$${props.meal.price.toFixed(2)}`;
    const cartContext    = useContext(CartContet);

    const AddItemToCart = (enteredAmount: Number) => {
        const newItem = {
            id         : props.meal.id,
            name       : props.meal.name,
            description: props.meal.description,
            price      : props.meal.price,
            amount     : enteredAmount
        } as ICartItem;

        cartContext.onAddItem(newItem);
    };

    return (
        <Fragment>
            <li  className={classes.meal}>
                <div>
                    <h3>{props.meal.name}</h3>
                    <div className={classes.description}>{props.meal.description}</div>
                    <div className={classes.price}>{formattedPrice}</div>
                </div>
                <div>
                    <AddMealForm AddToCart={AddItemToCart} id={props.meal.id}></AddMealForm>
                </div>
            </li>
        </Fragment>
    );
};

export default MealItem;