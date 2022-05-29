import React from "react";

import classes from './AvailableMeals.module.css';
import Card from "../../ui/Card/Card";

const AvailableMeals = (props: any) => {
    return (
        <div className={classes.meals}>
            <Card>
                <ul>
                   {
                       props.mealList.map((meal: any) => {
                            return ( 
                                <li key={meal.id}>
                                    <h2>{meal.name}</h2>
                                    <p>{meal.description}</p>
                                    <p>{meal.price}</p>
                                </li>
                            );
                       })
                   }
                </ul>
            </Card>
        </div>
    );
};

export default AvailableMeals;