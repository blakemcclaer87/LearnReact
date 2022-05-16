import React from "react";

import classes from './AvailableMeals.module.css';
import Card from "../../ui/Card/Card";

const AvailableMeals = (props: any) => {
    return (
        <div className={classes.meals}>
            <Card>
                <ul>
                    <li>
                        Meal 1
                    </li>
                    <li>
                        Meal 2
                    </li>
                    <li>
                        Meal 3
                    </li>
                </ul>
            </Card>
        </div>
    );
};

export default AvailableMeals;