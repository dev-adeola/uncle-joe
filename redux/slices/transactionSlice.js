import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionModel: {
    isOpen: false,
    data: {},
  },
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    openTransactionRequest: (state, action) => {
      console.log(action.payload);
      state.transactionModel = {
        isOpen: true,
        data: action.payload,
      };
    },
    closeTransactionRequest: (state) => {
      state.transactionModel = { isOpen: false, data: {} };
    },
  },
});

// Action creators are generated for each case reducer function
export const { openTransactionRequest, closeTransactionRequest } =
  transactionSlice.actions;

export const getTransactionRequest = (state) => {
  return state.transaction.transactionModal;
};

export default transactionSlice.reducer;
