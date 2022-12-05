import { useCallback, useState } from "react";
import { ICartItem } from "../../interfaces/ICartItem";
import IRequestConfig from "../../interfaces/IHttpRequest";
import IOrder from "../../interfaces/IOrder";
import IOrderContact from "../../interfaces/IOrderContact";

const useOrdersHttp = (updateOrdersHandler?: (foundMeals: IOrder[]) => void) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]         = useState<string | null>(null);
    
    const sendOrderRequest = useCallback(async (requestDetails: IRequestConfig) => {

        setIsLoading(true);
        setError(null);
            
        try{

            const ordersResponse = await fetch(requestDetails.url,{
                method: requestDetails.method,
                body: requestDetails.body ? JSON.stringify(requestDetails.body) : null,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(!ordersResponse.ok){
                ordersResponse.text()
                    .then(responseText => {throw new Error(responseText)});
            }else{
                const orderData = await ordersResponse.json();

                const loadedOrders: IOrder[] = [];

                switch(requestDetails.method.toUpperCase()){
                    case 'GET':
                        for (const orderKey in orderData) {
                            loadedOrders.push({ 
                                orderID       : orderKey,
                                totalPrice    : Number.parseFloat(orderData[orderKey].totalPrice),
                                totlItems     : Number.parseInt(orderData[orderKey].totalItems),
                                cartItems     : orderData[orderKey].cartItems as ICartItem[],
                                contactDetails: orderData[orderKey].contactDetails as IOrderContact
                            });
                        }
                        break;
                    case 'POST':
                        loadedOrders.push({ 
                            orderID       : orderData,
                            totalPrice    : Number.parseFloat(orderData['totalPrice']),
                            totlItems     : Number.parseInt(orderData['totalItems']),
                            cartItems     : orderData['cartItems'] as ICartItem[],
                            contactDetails: orderData['contactDetails'] as IOrderContact
                        });
                        break;
                    default:
                        throw new Error('Unsupported HTTP method passed to orders hook.');
                        break;
                }

                if(updateOrdersHandler){
                    updateOrdersHandler(loadedOrders);
                }
            }
        }catch (error){
            if(error instanceof Error){
                setError(error.message || 'Something went wrong!');
            }else{
                setError('Something went wrong!');
            }
            setIsLoading(false);
        }

        setIsLoading(false);
    }, [
        updateOrdersHandler
    ]);

    return {
        isLoading,
        error,
        sendOrderRequest
    }
};

export default useOrdersHttp;;
