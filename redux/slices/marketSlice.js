import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentMarketRate: {}
};

// 
export const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    setCurrentMarketRate: (state, action) => {
      state.currentMarketRate = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrentMarketRate
} = marketSlice.actions;
export default marketSlice.reducer;