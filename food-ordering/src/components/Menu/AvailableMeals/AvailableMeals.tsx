import React from "react";

import classes from './AvailableMeals.module.css';
import Card from "../../ui/Card/Card";
import MealItem from "../MealIem/MealItem";

const AvailableMeals = (props: any) => {
    return (
        <div className={classes.meals}>
            <Card>
                <ul>
                   {
                       props.mealList.map((currentMeal: any) => {
                            return ( 
                                <MealItem meal={currentMeal}/>
                            );
                       })
                   }
                </ul>
            </Card>
        </div>
    );
};

export default AvailableMeals;