import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    increaseBy: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increase, decrease, increaseBy } = counterSlice.actions;

export default counterSlice.reducer;
