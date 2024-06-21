"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import layoutSlice from "./slices/layoutSlice";
import userSlice from "./slices/userSlice";
import walletSlice from "./slices/walletSlice";
import transactionSlice from "./slices/transactionSlice";
import searchOfferSlice from './slices/searchOfferSlice'
import createOfferSlice from "./slices/createOfferSlice";
import marketSlice from "./slices/marketSlice";
import { apiSlice } from "@/services/apiSlice";

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    user: userSlice,
    wallet: walletSlice,
    transaction: transactionSlice,
    searchOffer: searchOfferSlice,
    createOffer: createOfferSlice,
    market: marketSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
