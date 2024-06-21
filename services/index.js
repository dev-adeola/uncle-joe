import axios from "axios";

export const BASE_URL = "https://inlet.ratefy.co/";
export const IP_BASEURL = "https://freeipapi.com/api/json";

// Get User IP Address using external API
export const getUserOnlineAddress = async () => {
  const res = await axios.get(IP_BASEURL)
  return res.data
}

// Create new server request to be used in sending the api call
export const newRequest = (apiUrl, method, data = undefined, userToken = undefined) => {
  return new Request(apiUrl, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': 'Ratefy',
      "Authorization": !userToken ?? `Bearer ${userToken}`
    },
    credentials: 'omit',
    body: !data ?? JSON.stringify({ ...data })
  })
}


// All Ratefy Endpoint & Methods
export const RatefyEndpoints = {
  'auth': {
    'login': { endpoint: 'login', method: 'POST' },
    'register': { endpoint: 'register', method: 'POST' },
    'forgetPassword': { endpoint: 'forgot-password', method: 'POST' },
    'resetPassword': { endpoint: 'reset-password', method: 'POST' },
  },
  'profile': {
    'createUserProfile': { endpoint: BASE_URL + 'api/create-profile', method: 'POST' },
    'createFreelancerProfile': { endpoint: BASE_URL + 'api/create-freelance-profile', method: 'POST' },
    'createDiasporaProfile': { endpoint: BASE_URL + 'api/create-diaspora-profile', method: 'POST' },
    'retrieveUserProfile': { endpoint: BASE_URL + 'api/user', method: 'GET' },
    'retrieveUserProfileDetails': { endpoint: BASE_URL + 'api/get-user', method: 'POST' },
    'updateMultiProfile': { endpoint: BASE_URL + 'api/multiple-update-profile', method: 'POST' },
    'updateMultiFreelance': { endpoint: BASE_URL + 'api/multiple-update-freelance', method: 'POST' },
    'updateMultiShopperMigrant': { endpoint: BASE_URL + 'api/multiple-update-shopper-migrant', method: 'POST' },
  },
  'searchOffer': {
    'searchBuyerOffer': { endpoint: BASE_URL + 'api/search-buyer-ewallet', method: 'POST' },
    'searchBuyerPaymentOptions': { endpoint: BASE_URL + 'api/search-buyer-payment-option', method: 'POST' },
    'searchBuyerRequirements': { endpoint: BASE_URL + 'api/search-buyer-requirement', method: 'POST' },
    'searchSellerOffer': { endpoint: BASE_URL + 'api/search-seller-ewallet', method: 'POST' },
    'searchSellerPaymentOptions': { endpoint: BASE_URL + 'api/search-seller-payment-option', method: 'POST' },
    'searchSellerRequirements': { endpoint: BASE_URL + 'api/search-seller-requirement', method: 'POST' },
  },

}
