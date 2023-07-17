import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  count: 0
} 

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    
  },
});

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} = counter.actions;
export default counter.reducer;
