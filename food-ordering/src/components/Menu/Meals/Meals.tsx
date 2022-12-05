import React, { Fragment, useCallback, useEffect, useState } from "react";
import AvailableMeals from "../AvailableMeals/AvailableMeals";
import MenuOverview from "../MenuOverview/MenuOverview";
import { IMeal } from '../../../interfaces/IMeal';
import useMealsHttp from "../../../hooks/useMealsHttp/useMealsHttp";
import Loading from "../../ui/Loading/Loading";
import ErrorNotification from "../../ui/ErrorNotification/ErrorNotification";
import IRequestConfig from "../../../interfaces/IHttpRequest";

const Meals = (props: any) => {

    const addMealHandler = useCallback((foundMeals: IMeal[]) => {
      setAvailableMealItems(foundMeals);
    }, []);

    const baseMealArray: IMeal[] = [];
    const [availableMealItems, setAvailableMealItems] = useState(baseMealArray);
    const {isLoading: mealsLoading, error:mealsError, sendMealRequest} = useMealsHttp(addMealHandler);
    
    useEffect(() => {
      sendMealRequest({
        url   : 'https://react-http-2092a-default-rtdb.firebaseio.com/meals.json',
        method: 'GET',
        body  : null
      } as IRequestConfig);
    }, [
      sendMealRequest
    ]);

    return (
        <Fragment>
            <MenuOverview></MenuOverview>
            {!mealsLoading && mealsError&& <ErrorNotification errorMessage={mealsError}></ErrorNotification>}
            {mealsLoading && !mealsError && <Loading></Loading>}
            {!mealsLoading && !mealsError && <AvailableMeals mealList={availableMealItems}></AvailableMeals>}
        </Fragment>
    );
};

export default Meals;