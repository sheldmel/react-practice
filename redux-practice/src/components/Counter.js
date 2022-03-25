import { useSelector, useDispatch } from "react-redux";

//-------REDUX TOOLKIT -------
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  //------- DEFAULT REDUX ------- 
  // const counter = useSelector((state) => state.counter);
  // const toggle = useSelector((state) => state.visibility);

  //-------REDUX TOOLKIT -------
  const counter = useSelector((state) => state.counter.counter); 
  const toggle = useSelector((state) => state.counter.visibility);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    //------- DEFAULT REDUX -------
    // dispatch({ type: "TOGGLE" });

    //-------REDUX TOOLKIT -------
    dispatch(counterActions.toggle())
  };

  const incrementCounterHandler = () => {
    //------- DEFAULT REDUX -------
    // dispatch({ type: "ADD" });

    //-------REDUX TOOLKIT -------
    dispatch(counterActions.add())
  };

  const decrementCounterHandler = () => {
    //------- DEFAULT REDUX -------
    // dispatch({ type: "SUB" });

    //-------REDUX TOOLKIT -------
    dispatch(counterActions.sub())
  };

  const incrementBy5CounterHandler = () => {
    //------- DEFAULT REDUX -------
    // dispatch({ type: "ADD-BY", amount: 5 });

    //-------REDUX TOOLKIT -------
    dispatch(counterActions.addBy(5)) // { type: CONSTANT, payload: 5}
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
