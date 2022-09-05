import React, { Fragment, useEffect, useState } from "react";
import Card from "../Card/Card";
import classes from './ForwardCounter.module.css';

const ForwardCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
    
    return (
        <Card>{counter}</Card>
    );
}

export default ForwardCounter;