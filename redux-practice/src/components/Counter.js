import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.visibility);
  const dispatch = useDispatch();
  
  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  const incrementCounterHandler = () => {
    dispatch({ type: "ADD" });
  };

  const decrementCounterHandler = () => {
    dispatch({ type: "SUB" });
  };

  const incrementBy5CounterHandler = () => {
    dispatch({ type: "ADD-BY", amount: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{toggle ? counter : "HIDDEN"}</div>
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={incrementBy5CounterHandler}>Increment by 5</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
