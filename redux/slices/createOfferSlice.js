import { availableEWallets, paymentOptions } from "@/utils/data";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createOfferActiveSection: 0,
  offerPaymentInfo: {
    offerIndex: 0,
    offerType: 'sell',
    eWallet: availableEWallets[0],
    paymentOption: paymentOptions[0],
    offerTags: []
  },
  exchangeRateInfo: {
    rateType: 'market',
    rateInPercentage: -2.5,
    fixedRate: null,
    minAmount: 100,
    maxAmount: 10000000
  },
  offerTermsAndConditions: [
    { id: 1, title: "Offer Expiration", content: "Use the details below to send money to your Ratefy wallet from any of your bank’s app or through internet banking" },
  ],
  offerInstructionAndDuration: {
    durationInMins: 60,
    tradeInstruction: null
  }
};

// 
export const createOfferSlice = createSlice({
  name: "createOffer",
  initialState,
  reducers: {
    setOfferActiveSection: (state, action) => {
      state.createOfferActiveSection = action.payload
    },
    setOfferPaymentIndex: (state, action) => {
      state.offerPaymentInfo.offerIndex = action.payload
    },
    setOfferType: (state, action) => {
      state.offerPaymentInfo.offerType = action.payload
    },
    selectEWallet: (state, action) => {
      console.log(action.payload, 'E Wallet')
      state.offerPaymentInfo.eWallet = action.payload
    },
    selectPaymentOption: (state, action) => {
      state.offerPaymentInfo.paymentOption = action.payload
    },
    selectTag: (state, action) => {
      const payload = action.payload
      const selectedTags = state.offerPaymentInfo.offerTags

      if (selectedTags.length === 0 || !isTagSelected(selectedTags, payload?.id)) {
        state.offerPaymentInfo.offerTags.push({ id: payload.id, label: payload.label })
      }
      else {
        const newTags = selectedTags?.filter(tag => tag.id !== payload.id)
        state.offerPaymentInfo.offerTags = newTags
      }
    },
    selectRateType: (state, action) => {
      state.exchangeRateInfo.rateType = action.payload
    },
    setRate: (state, action) => {
      state.exchangeRateInfo.rateInPercentage = action.payload
    },
    setFixedRate: (state, action) => {
      state.exchangeRateInfo.fixedRate = action.payload
    },
    setMinAmount: (state, action) => {
      state.exchangeRateInfo.minAmount = action.payload
    },
    setMaxAmount: (state, action) => {
      state.exchangeRateInfo.maxAmount = action.payload
    },
    setOfferTaC: (state, action) => {
      state.offerTermsAndConditions = [...state.offerTermsAndConditions, { ...action.payload }]
    },
    setDuration: (state, action) => {
      state.offerInstructionAndDuration.durationInMins = action.payload
    },
    setTradeInstruction: (state, action) => {
      state.offerInstructionAndDuration.tradeInstruction = action.payload
    },

    resetOfferStore: (state, _) => {
      state = {
        createOfferActiveSection: 0,
        offerPaymentInfo: {
          offerIndex: 0,
          offerType: 'sell',
          eWallet: availableEWallets[0],
          paymentOption: paymentOptions[0],
          offerTags: []
        },
        exchangeRateInfo: {
          rateType: 'market',
          rateInPercentage: -2.5,
          minAmount: 100,
          maxAmount: 10000000
        },
        offerTermsAndConditions: [
          { id: 1, title: "Offer Expiration", content: "Use the details below to send money to your Ratefy wallet from any of your bank’s app or through internet banking" },
        ],
        offerInstructionAndDuration: {
          durationInMins: 60,
          tradeInstruction: null
        }
      }
    }

  },
});

// Action creators are generated for each case reducer function
export const {
  selectEWallet,
  setOfferPaymentIndex,
  selectPaymentOption,
  selectRateType,
  selectTag,
  setDuration,
  setMinAmount,
  setMaxAmount,
  setOfferActiveSection,
  setOfferTaC,
  setOfferType,
  setRate,
  setTradeInstruction,
  resetOfferStore,
  setFixedRate
} = createOfferSlice.actions;
export default createOfferSlice.reducer;


// Check if tag is selected
const isTagSelected = (tags, newTagId) => {
  const isSelected = tags?.some((tag) => tag.id === newTagId);
  return isSelected
};
