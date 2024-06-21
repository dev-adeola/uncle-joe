import { availableEWallets, paymentOptions } from "@/utils/data";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchOfferQueries: {
    offerIndex: 0,
    queryMode: 'sell',
    queryEWallet: availableEWallets[0],
    queryPaymentOption: paymentOptions[0],
    queryTags: []
  }
};

export const searcOfferSlice = createSlice({
  name: "searchOffer",
  initialState,
  reducers: {
    setOfferIndex: (state, action) => {
      state.searchOfferQueries.offerIndex = action.payload
    },
    setQueryMode: (state, action) => {
      state.searchOfferQueries.queryMode = action.payload
    },
    setQueryEWallet: (state, action) => {
      state.searchOfferQueries.queryEWallet = action.payload
    },
    setQueryPaymentOption: (state, action) => {
      state.searchOfferQueries.queryPaymentOption = action.payload
    },
    setQueryTags: (state, action) => {
      const payload = action.payload
      const selectedTags = state.searchOfferQueries.queryTags

      if (selectedTags.length === 0 || !isTagSelected(selectedTags, payload?.id)) {
        state.searchOfferQueries.queryTags.push({ id: payload.id, label: payload.label })
      }
      else {
        const newTags = selectedTags?.filter(tag => tag.id !== payload.id)
        state.searchOfferQueries.queryTags = newTags
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOfferIndex, setQueryMode, setQueryEWallet, setQueryPaymentOption, setQueryTags } = searcOfferSlice.actions;
export default searcOfferSlice.reducer;


// Check if tag is selected
const isTagSelected = (tags, newTagId) => {
  const isSelected = tags?.some((tag) => tag.id === newTagId);
  return isSelected
};
