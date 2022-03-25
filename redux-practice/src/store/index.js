import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter";
import authReducer from "./auth";


// -------DEFAULT REDUX-------
// const counterReducer = (state = { counter: 0, visibility: true }, action) => {
//   switch (action.type) {
//     case "ADD": {
//       return {
//         counter: state.counter + 1,
//         visibility: state.visibility
//       };
//     }
//     case "ADD-BY": {
//       return {
//         counter: state.counter + action.amount,
//         visibility: state.visibility
//       };
//     }
//     case "SUB": {
//       return {
//         counter: state.counter - 1,
//         visibility: state.visibility
//       };
//     }
//     case "TOGGLE": {
//       return {
//         counter: state.counter,
//         visibility: !state.visibility
//       };
//     }
//     default:
//       return state;
//   }
// };



// -------DEFAULT REDUX---------
// const store = createStore(counterReducer);


// --------REDUX TOOLKIT---------
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }
});


export default store;