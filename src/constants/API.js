import {useCookies} from "react-cookie";

export const AuthURL = "https://auth-api.vndirect.com.vn/v2/auth";
export const PriceURL = "https://finfo-api.vndirect.com.vn//v4/derivative_prices?q=type:FU";
export const OrderURL = "https://dertrial-api.vndirect.com.vn/demotrade/orders?username=";
export const BuyOrderURL = "https://dertrial-api.vndirect.com.vn/demotrade/orders";

export const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  };

  