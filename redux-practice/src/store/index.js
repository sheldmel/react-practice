import { createStore } from "redux";

const counterReducer = (state = { counter: 0, visibility: true }, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        counter: state.counter + 1,
        visibility: state.visibility
      };
    }
    case "ADD-BY": {
      return {
        counter: state.counter + action.amount,
        visibility: state.visibility
      };
    }
    case "SUB": {
      return {
        counter: state.counter - 1,
        visibility: state.visibility
      };
    }
    case "TOGGLE": {
      return {
        counter: state.counter,
        visibility: !state.visibility
      };
    }
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;