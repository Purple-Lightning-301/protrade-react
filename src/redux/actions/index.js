import * as Types from "../../constants/ActionTypes";
import { useCookies } from "react-cookie";
import * as API from "../../utils/API";

export const OrderBookFetchRequest = () => {
  return {
    type: Types.FETCH_ORDERS_REQUEST,
  };
};

export const OrderBookFetchSuccess = (orders) => {
  return {
    type: Types.FETCH_ORDERS_SUCCESS,
    payload: orders,
  };
};

export const OrderBookFetchError = (error) => {
  return {
    type: Types.FETCH_ORDERS_FAILURE,
    payload: error,
  };
};

export const FetchOrderBooks = (username) => {
  return async (dispatch) => {
    const response = await API.getOrderBook(username);
    dispatch(OrderBookFetchRequest());
    if (response.status === 200) {
      const orderBooks = response.data;
      dispatch(OrderBookFetchSuccess(orderBooks));
    } else {
      console.log(response);
      const errorMsg = response;
      dispatch(OrderBookFetchError(errorMsg));
    }
  };
};
