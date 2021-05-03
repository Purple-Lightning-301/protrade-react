import * as Types from '../../constants/ActionTypes';

var initialState = {
    loading: false,
    orders: [],
    error: '',
};

const OrderBookReducers = (state = initialState, action) => {
    switch(action.type){
       case Types.FETCH_ORDERS_REQUEST:
           return{
               ...state,
               loading: true
           }
        case Types.FETCH_ORDERS_SUCCESS:
            return{
                loading: false,
                orders: action.payload,
                error: '',
            }
        case Types.FETCH_ORDERS_FAILURE:
            return{
                loading: false,
                orders: [],
                error: action.payload
            }
        default: return state;
    }
};

export default OrderBookReducers;