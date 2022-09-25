import { useCallback, useState } from "react";
import IRequestConfig from "../types/IRequestConfig";
import ITask from "../types/ITask";

const useHttp = (taskUpdateHandler: (foundTasks: ITask[]) => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const sendRequest = useCallback(async (requyestDetals: IRequestConfig) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          requyestDetals.url,
          {
            method: requyestDetals.method,
            body: requyestDetals.body ? JSON.stringify(requyestDetals.body) : null,
            headers: {
                'Content-Type': 'application/json',
            }
          }
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
  
        const loadedTasks: ITask[] = [];
        
        switch(requyestDetals.method.toLocaleUpperCase()){
            case 'GET':
                for (const taskKey in data) {
                    loadedTasks.push({ id: taskKey, text: data[taskKey].text });
                }
                break;
            case 'POST':
                loadedTasks.push({ id: data.name, text: requyestDetals.body['text']} as ITask);
                break;                
        }


        taskUpdateHandler(loadedTasks);
  
      } catch (err: any) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    }, [
        taskUpdateHandler
    ]);

    return {
        isLoading,
        error,
        sendRequest
    }
};

export default useHttp;