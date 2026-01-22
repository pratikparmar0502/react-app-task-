import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    incre: (state) => {
      state.value += 1;
    },
    decre: (state) => {
      state.value -= 1;
    },
  },
});

export const { incre, decre } = counterSlice.actions;

export default counterSlice.reducer;
