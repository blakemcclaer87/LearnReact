import React, { Fragment, useEffect, useState } from "react";
import AvailableMeals from "../AvailableMeals/AvailableMeals";
import MenuOverview from "../MenuOverview/MenuOverview";
import { IMeal } from '../../../interfaces/IMeal';
import DUMMY_MEALS from '../../../data/AvailableMeals';

const Meals = (props: any) => {

    const baseMealArray: IMeal[] = [];
    const [availableMealItems, setAvailableMealItems] = useState(baseMealArray);
  
    useEffect(() => {
      setAvailableMealItems(DUMMY_MEALS);
      console.log(availableMealItems);
    },
    [
      availableMealItems
    ]);
    
    return (
        <Fragment>
            <MenuOverview></MenuOverview>
            <AvailableMeals mealList={availableMealItems}></AvailableMeals>
        </Fragment>
    );
};

export default Meals;