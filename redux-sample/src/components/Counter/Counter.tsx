import { useSelector, useDispatch } from "react-redux"; //can select arts of the store
import classes from  './Counter.module.css';
import { counterActions, RootStoreState } from "../../store/AppStore";

const Counter = () => {

  //auto creates subscription to reddux
  const counter = useSelector((state: RootStoreState) => {
    return state.counter.counter;
  });

  const showCounter = useSelector((state: RootStoreState) => {
    return state.counter.showCounter;
  });

  const dispatch = useDispatch();

  const incementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && 
      <div>
        <div className={classes.value}>{counter}</div>
        <div>
          <button onClick={incementHandler}>Increment</button>
          <button onClick={increaseHandler}>Incrase by 5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

