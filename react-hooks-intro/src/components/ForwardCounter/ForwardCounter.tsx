import Card from "../Card/Card";
import classes from './ForwardCounter.module.css';
import useCounter from "../../custom-hooks/use-counter";

const ForwardCounter = () => {

  const counter = useCounter(true);

  return (
      <Card>{counter}</Card>
  );
}

export default ForwardCounter;