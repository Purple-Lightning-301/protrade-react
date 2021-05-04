import axios from "axios";
import * as Setting from "../constants/API";

export async function handlerLogin(event, username, password) {
  event.preventDefault();
  console.log("login clicked");
  const data = {
    username: username,
    password: password,
  };
  const config = Setting.config;
  let url = Setting.AuthURL;

  const response = await axios(url, {
    method: "POST",
    data: data,
    config,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
    return await response;
}


export async function getCodePrice() {
  const config = Setting.config;
  let url = Setting.PriceURL;

  const response = await axios(url, {
    method: "GET",
    config,
  }).then((res) => {
    return res;
  }).catch((err) => {
    return err;
  })

  return await response;
}

export async function getOrderBook(username){
  const config = Setting.config;
  let url = Setting.OrderURL + username;

  const response = await axios(url, {
    method: "GET",
    config,
  }).then((res) => {
    return res;
  }).catch((err) => {
    return err;
  })

  return await response;
}

export async function handlerOrder(username, order, buyCode, orderPrice, orderQuantity){
  const config = Setting.config;
  const url = Setting.BuyOrderURL;
  const data = {
    side: order,
    symbol: buyCode,
    priceType: orderPrice,
    quantity: orderQuantity,
    price: 0,
    userName: username,
  }

  const response = await axios(url, {
    method: "POST",
    data: data,
    config,
  }).then((res) => {
    return res;
  }).catch((err) => {
    return err;
  })

  return await response;
}

export const handlerCancelOrder = async (orderID, userName) => {
  const config = Setting.config;
  const url = Setting.BuyOrderURL;

  const data = {
    orderID: orderID,
    userName: userName
  }

  const response = await axios(url, {
    method: "DELETE",
    data: data,
    config
  }).then((res) => {
    return res;
  }).catch((err) => {
    return err;
  })

  return await response;
}
