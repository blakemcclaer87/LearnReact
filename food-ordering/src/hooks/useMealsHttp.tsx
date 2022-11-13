import { useCallback, useState } from "react";
import IRequestConfig from "../interfaces/IHttpRequest";
import { IMeal } from "../interfaces/IMeal";

const useMealsHttp = (updateMealsHndler: (foundMeals: IMeal[]) => void)=> {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]         = useState(null);

    /**
     * Name:        sendMealRequest
     * Description: processesboth GET & POST requests to the meals array in firebase.
     */
    const sendMealRequest = useCallback(async (requestDetails: IRequestConfig) => {
        setIsLoading(true);
        setError(null);

        try{
            const mealsResponse = await fetch(requestDetails.url,{
                method: requestDetails.method,
                body: requestDetails.body ? JSON.stringify(requestDetails.body) : null,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(!mealsResponse.ok){
                mealsResponse.text().then(text => { throw new Error(text) })
            }else{
                const mealData = await mealsResponse.json();

                console.log(mealData);

                const loadedMeals: IMeal[] = [];

                switch(requestDetails.method.toUpperCase()){
                    case 'GET':
                        for (const mealKey in mealData) {
                            loadedMeals.push({ 
                                id         : Number.parseInt(mealKey),
                                name       : mealData[mealKey].name,
                                description: mealData[mealKey].description,
                                price      : Number.parseFloat(mealData[mealKey].price)
                            });
                        }
                        break;
                    case 'POST':
                        loadedMeals.push({ 
                            id         : Number.parseInt(mealData),
                            name       : mealData['name'],
                            description: mealData['descriptiobn'],
                            price      : Number.parseFloat(mealData['price'])
                        });
                        break;
                    default:
                        throw new Error('Unsuported HTTP method type.');
                        break;
                }

                updateMealsHndler(loadedMeals);
            }
        }catch(error: any){
            setError(error.message || 'Something went wrong!');
            setIsLoading(false);
        }

        setIsLoading(false);
    }, [
        updateMealsHndler
    ]);

    return{
        isLoading,
        error,
        sendMealRequest
    }
};

export default useMealsHttp;