import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";

export const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const getCookie = (cookieName) => {
  const cookieArray = document.cookie.split(";");
  console.log({ cookieArray });
  for (const cookie of cookieArray) {
    let cookieString = cookie.trim();

    if (cookieString.indexOf(cookieName + "=") === 0) {
      console.log({ cookieString });
      return cookieString.substring(cookieName.length + 1);
    }
  }
  return undefined;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: async (headers, { getState }) => {
      const session = await getSession();
      // console.log({ session });
      headers.set("User-Agents", "Ratefy");
      if (session) {
        headers.set("Authorization", `Bearer ${session?.token?.tokens}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "wallet",
    "user_profile",
    "auth",
    "add-bank",
    "buyer_offer",
    "search_offer",
    "seller_offer",
  ],
  endpoints: (builder) => ({
    createWallet: builder.mutation({
      query: (data) => ({
        url: "/api/create-wallet",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wallet"],
    }),
    getUsers: builder.mutation({
      query: (data) => ({
        url: "api/get-user",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["wallet"],
    }),
    getCSRFToken: builder.query({
      query() {
        return {
          url: "sanctum/csrf-cookie",
          credentials: "include",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        };
      },
    }),
    getCountriesAndState: builder.query({
      query() {
        return {
          url: "https://countriesnow.space/api/v0.1/countries/states",
        };
      },
    }),
    initCsrf: builder.mutation({
      query() {
        return {
          url: "sanctum/csrf-cookie",
          credentials: "include",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        };
      },
    }),

    getCities: builder.mutation({
      query: (data) => ({
        url: "https://countriesnow.space/api/v0.1/countries/state/cities",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: [""],
    }),
    createProfile: builder.mutation({
      query: (data) => ({
        url: "api/create-profile",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user_profile"],
    }),
    getUserId: builder.query({
      query: () => `api/user`,
      // providesTags: ["training"],
    }),
    getBankName: builder.query({
      query: () => `api/fetch-banklist`,
      // providesTags: ["training"],
    }),
    getUserProfile: builder.mutation({
      query: (data) => ({
        url: "api/get-full-profile",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user_profile"],
    }),
    getWallet: builder.mutation({
      query: (data) => ({
        url: "api/fetch-wallet",
        method: "POST",

        body: data,
      }),
      // invalidatesTags: ["user_profile"],
    }),
    getAccount: builder.mutation({
      query: (data) => ({
        url: "api/fetch-exposition-account ",
        method: "POST",

        body: data,
      }),
      // invalidatesTags: ["user_profile"],
    }),

    createUserKYC: builder.mutation({
      query: (data) => ({
        url: "api/create-wallet-and-validate-kyc",
        method: "POST",
        body: data,
      }),
    }),
    addBank: builder.mutation({
      query: (data) => ({
        url: "api/add-bank",
        method: "POST",

        body: data,
      }),
      invalidatesTags: ["add-bank"],
    }),
    deleteBank: builder.mutation({
      query: (data) => ({
        url: "api/delete-bank-accounts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["add-bank"],
    }),
    withdrawalRequest: builder.mutation({
      query: (data) => ({
        url: "api/withdraw-balance",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["add-bank"],
    }),

    //get-bank-accounts
    getBankAccounts: builder.query({
      query: () => `api/get-bank-accounts`,
      providesTags: ["add-bank"],
    }),
    getBalance: builder.query({
      query: () => `api/get-balance`,
      // providesTags: ["add-bank"],
    }),
    getEwalletOptions: builder.query({
      query: () => `api/fetch-ewallet`,
      // providesTags: ["add-bank"],
    }),

    filterEwallets: builder.query({
      query: () => `api/filter-ewallet`,
      // providesTags: ["add-bank"],
    }),
    filterSellerOffer: builder.query({
      query: (data) =>
        data?.ewallet_id &&
        data?.payment_option_id &&
        `api/search-seller-ewallet/${data?.ewallet_id}/${data?.payment_option_id}`,
      // providesTags: ["add-bank"],
    }),
    filterBuyerOffer: builder.query({
      query: (data) =>
        data?.ewallet_id &&
        data?.payment_option_id &&
        `api/search-buyer-ewallet/${data?.ewallet_id}/${data?.payment_option_id}`,
      // providesTags: ["add-bank"],
    }),
    filterRateOffer: builder.query({
      query: (data) => `api/fetch-rate`,
      // providesTags: ["add-bank"],
    }),
    fetchUserDetails: builder.query({
      query: (data) => `api/get-user-details/${data}`,
      // providesTags: ["add-bank"],
    }),
    ///fetch my offer
    fetchSellerOffers: builder.query({
      query: (data) => `api/fetch-seller-offer`,
      providesTags: ["seller_offer"],
    }),
    fetchBuyerOffers: builder.query({
      query: (data) => `api/fetch-buyer-offer`,
      providesTags: ["buyer_offer"],
    }),

    //pause-buyer-offer

    pausesBuyerOffer: builder.mutation({
      query: (data) => ({
        url: "api/pause-buyer-offer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["buyer_offer", "seller_offer"],
    }),
    activateBuyerOffer: builder.mutation({
      query: (data) => ({
        url: "api/reactivate-buyer-offer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["buyer_offer"],
    }),
    pausesSellerOffer: builder.mutation({
      query: (data) => ({
        url: "api/pause-seller-offer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["seller_offer"],
    }),
    activateSellerOffer: builder.mutation({
      query: (data) => ({
        url: "api/reactivate-seller-offer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["seller_offer"],
    }),

    fetchTermsAndConditionsOffers: builder.query({
      query: (data) => `api/single-seller-term/${data}`,
      // providesTags: ["buyer_offer"],
    }),
    fetchTermsAndConditionsBuyerOffers: builder.query({
      query: (data) => `api/single-buyer-term/${data}`,
      // providesTags: ["buyer_offer"],
    }),

    //api/seller-initiate-request
    sellerInitiateRequest: builder.mutation({
      query: (data) => ({
        url: "api/seller-initiate-request",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["seller_offer"],
    }),
    buyerInitiateRequest: builder.mutation({
      query: (data) => ({
        url: "api/buyer-initiate-request",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["seller_offer"],
    }),
    buyerAndSellerOfferItem: builder.mutation({
      query: ({ data, endpoints }) => ({
        url: endpoints ? endpoints : "api/buyer-offer-item",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["seller_offer"],
    }),
    //accept offer
    acceptBuyerAndSellerOffer: builder.mutation({
      query: ({ data, endpoints }) => ({
        url: endpoints ? endpoints : "api/buyer-accept-request",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["seller_offer"],
    }),
    rejectBuyerAndSellerOffer: builder.mutation({
      query: (data) => ({
        url: "api/reject-request",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["seller_offer"],
    }),

    //api/fetch-order
    fetchOrders: builder.query({
      query: (data) => `api/fetch-order`,
      // providesTags: ["buyer_offer"],
    }),
    // EXTRA AUTH
    // Forget Password Request
    sendForgetPassword: builder.mutation({
      query: (data) => ({
        url: "forgot-password",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user_profile"],
    }),
    // Reset Password Request
    sendResetPassword: builder.mutation({
      query: (data) => ({
        url: "reset-password",
        method: "POST",
        body: data,
      }),
      // providesTags: ["user_profile"],
    }),
    //seller profile
    createFreelancer: builder.mutation({
      query: (data) => ({
        url: "api/create-freelance-profile",
        method: "POST",
        body: data,
      }),
      // providesTags: ["user_profile"],
    }),
    createBuyerProfile: builder.mutation({
      query: (data) => ({
        url: "api/create-diaspora-profile",
        method: "POST",
        body: data,
      }),
      // providesTags: ["user_profile"],
    }),
    // Search Buyer / Seller Offers
    queryEWallets: builder.mutation({
      query: (data) => ({
        url: data?.isSeller
          ? "api/search-seller-ewallet"
          : "api/search-buyer-ewallet",
        method: "POST",
        body: { ...data, isSeller: undefined },
      }),
      // providesTags: ["user_profile"],
    }),
    // Search Buyer Payment Methods
    queryPaymentOption: builder.mutation({
      query: (data) => ({
        url: data?.isSeller
          ? "api/search-seller-payment-option"
          : "api/search-buyer-payment-option",
        method: "POST",
        body: { ...data, isSeller: undefined },
      }),
      // providesTags: ["user_profile"],
    }),
    // Search Buyer Requirement
    queryRequirements: builder.mutation({
      query: (data) => ({
        url: data?.isSeller
          ? "api/search-seller-requirement"
          : "api/search-buyer-requirement",
        method: "POST",
        body: { ...data, isSeller: undefined },
      }),
      // providesTags: ["user_profile"],
    }),
    // Create New Offer
    createNewOffer: builder.mutation({
      query: ({ data, buyer }) => ({
        url: buyer ? buyer : "api/create-seller-offer",
        method: "POST",
        body: data,
      }),
    }),
    // Fetch current USD --> NGN Rate
    fetchMarketRate: builder.query({
      query: () => "api/fetch-rate",
    }),
    // fetch-transactions
    fetchTransactions: builder.query({
      query: () => "api/fetch-transactions",
    }),
  }),
});

export const {
  useCreateWalletMutation,
  useGetUsersMutation,
  useGetUserIdQuery,
  useGetCSRFTokenQuery,
  useInitCsrfMutation,
  useGetCountriesAndStateQuery,
  useGetCitiesMutation,
  useCreateProfileMutation,
  useGetUserProfileMutation,
  useSendForgetPasswordMutation,
  useSendResetPasswordMutation,
  useQueryEWalletsMutation,
  useQueryPaymentOptionMutation,
  useQueryRequirementsMutation,
  useCreateNewOfferMutation,
  useCreateFreelancerMutation,
  useCreateBuyerProfileMutation,
  useCreateUserKYCMutation,
  useGetWalletMutation,
  useGetAccountMutation,
  useAddBankMutation,
  useGetBankNameQuery,
  useGetBankAccountsQuery,
  useGetBalanceQuery,
  useDeleteBankMutation,
  useWithdrawalRequestMutation,
  useFetchMarketRateQuery,
  useGetEwalletOptionsQuery,
  useFilterEwalletsQuery,
  useFilterBuyerOfferQuery,
  useFilterSellerOfferQuery,
  useFilterRateOfferQuery,
  useFetchUserDetailsQuery,
  useFetchBuyerOffersQuery,
  useFetchSellerOffersQuery,
  usePausesBuyerOfferMutation,
  useActivateBuyerOfferMutation,
  useActivateSellerOfferMutation,
  usePausesSellerOfferMutation,
  useSellerInitiateRequestMutation,
  useFetchTermsAndConditionsOffersQuery,
  useFetchTermsAndConditionsBuyerOffersQuery,
  useBuyerInitiateRequestMutation,
  useFetchOrdersQuery,
  useBuyerAndSellerOfferItemMutation,
  useAcceptBuyerAndSellerOfferMutation,
  useRejectBuyerAndSellerOfferMutation,
  useFetchTransactionsQuery,
} = apiSlice;
