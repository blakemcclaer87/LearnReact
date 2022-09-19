import Card from "../Card/Card";
import classes from './BackwardCounter.module.css';
import useCounter from "../../custom-hooks/use-counter";

const BackwardCounter = () => {

  const counter = useCounter(false);

  return (    
      <Card>{counter}</Card>
  );
}

export default BackwardCounter;