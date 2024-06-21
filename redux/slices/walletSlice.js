import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  walletModel: {
    isOpen: false,
    data: {},
  },
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    openWalletModel: (state, action) => {
      state.walletModel = {
        isOpen: true,
        data: action.payload,
      };
    },
    closeWalletModel: (state) => {
      state.walletModel = { isOpen: false, data: {} };
    },
  },
});

// Action creators are generated for each case reducer function
export const { openWalletModel, closeWalletModel } = walletSlice.actions;

// export const getTransactionRequest = (state) => {
//   return state.transaction.transactionModal;
// };

export default walletSlice.reducer;
