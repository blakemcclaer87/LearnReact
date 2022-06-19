import React, { Fragment } from "react";
import AddMealForm from "../AddMealForm/AddMealForm";
import classes from './MealItem.module.css';

const MealItem = (props: any) => {

    const formattedPrice = '$' + props.meal.price.toFixed(2);

    return (
        <Fragment>
            <li  className={classes.meal}>
                <div>
                    <h3>{props.meal.name}</h3>
                    <div className={classes.description}>{props.meal.description}</div>
                    <div className={classes.price}>{formattedPrice}</div>
                </div>
                <div>
                    <AddMealForm id={props.meal.id}></AddMealForm>
                </div>
            </li>
        </Fragment>
    );
};

export default MealItem;