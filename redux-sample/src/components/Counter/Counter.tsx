import React from "react";
import { useSelector, useDispatch } from "react-redux"; //can select arts of the store
import ICounterStoreAction from "../../store/ICounterStoreAction";
import ICounterStoreStateModel from "../../store/ICounterStoreStateModel";
import classes from  './Counter.module.css';


const Counter = () => {

  //auto creates subscription to reddux
  const counter = useSelector((state: ICounterStoreStateModel) => {
    return state.counter;
  });

  const dispatch = useDispatch();

  const incementHandler = () => {
    dispatch({
      type: 'INCREMENT'
    } as ICounterStoreAction);
  };

  const decrementHandler = () => {
    dispatch({
      type: 'DECREMENT'
    } as ICounterStoreAction);
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

