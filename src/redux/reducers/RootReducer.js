import { combineReducers } from "redux";
import OrderBookReducers from "./OrderBookReducers";

const RootReducer = combineReducers({
    orderBooks: OrderBookReducers
});

export default RootReducer;