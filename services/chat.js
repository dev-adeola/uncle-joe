import axios from "axios";

let token;

const baseUrl = "https://transactionbased.ratefy.co/api";

if (typeof window !== "undefined") {
  // Perform localStorage action
  token = localStorage.getItem("accessToken");
}

const TansAxios = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

if (typeof window !== "undefined") {
  // Perform localStorage action
  const toks = localStorage.getItem("accessToken");
  if (toks) {
    TansAxios.interceptors.request.use(async (req) => {
      // @ts-ignore
      req.headers.Authorization = `Bearer ${toks}`;
      return req;
    });
  }
}

export default TansAxios;
