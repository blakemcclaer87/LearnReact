import React from "react";

import classes from './AvailableMeals.module.css';
import Card from "../../ui/Card/Card";
import MealItem from "../MealIem/MealItem";

const AvailableMeals = (props: any) => {
    return (
        <div className={classes.meals}>
            <Card>
                {props.mealList && props.mealList.length > 0
                  &&<ul>
                   {
                       props.mealList.map((currentMeal: any) => {
                            return ( 
                                <MealItem key={currentMeal.id} meal={currentMeal}/>
                            );
                       })
                   }
                </ul>}
                {(!props.mealList || props.mealList.length === 0) &&
                <h3 style={{textAlign: 'center'}}>
                    No Meals Found!
                </h3>}
            </Card>
        </div>
    );
};

export default AvailableMeals;