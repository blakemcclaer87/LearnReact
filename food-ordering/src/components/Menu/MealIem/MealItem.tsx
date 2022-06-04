import React, { Fragment } from "react";
import classes from './MealItem.module.css';

const MealItem = (props: any) => {

    const formattedPrice = '$' + props.meal.price.toFixed(2);

    return (
        <Fragment>
            <li key={props.meal.id} className={classes.meal}>
                <div>
                    <h3>{props.meal.name}</h3>
                    <div className={classes.description}>{props.meal.description}</div>
                    <div className={classes.price}>{formattedPrice}</div>
                </div>
                <div>

                </div>
            </li>
        </Fragment>
    );
};

export default MealItem;