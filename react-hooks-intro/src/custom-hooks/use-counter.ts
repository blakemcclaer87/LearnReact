import { useEffect, useState } from "react";

const useCounter = (moveForard: boolean = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if(moveForard){
            setCounter((prevCounter) => prevCounter + 1);
        }else{
            setCounter((prevCounter) => prevCounter - 1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [moveForard]);

    return counter;
};

export default useCounter;
