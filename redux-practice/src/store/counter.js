import { createSlice } from "@reduxjs/toolkit";

// -------REDUX TOOLKIT--------
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
    visibility: true,
  },
  reducers: {
    add(state) {
      state.counter++;
    },
    sub(state) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.visibility = !state.visibility;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
