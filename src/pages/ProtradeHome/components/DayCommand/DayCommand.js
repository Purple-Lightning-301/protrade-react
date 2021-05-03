import React, { useEffect } from "react";
import { useState } from "react";
import CommandRow from "./CommandRow";
import { connect, useDispatch, useSelector } from "react-redux";
import {useCookies} from 'react-cookie';
import * as API from "../../../../utils/API";
import {FetchOrderBooks} from "../../../../redux/actions/index"


function DayCommand(props) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [accessToken] = useCookies('access_token');
  const username = accessToken.access_token.username;
  const dispatch = useDispatch();
  const handlerCancelOrder = () => {
    setConfirmDelete(true);
  };

  const orderBooks = useSelector( state => state.orderBooks);

  useEffect(() => {
    dispatch(FetchOrderBooks(username));
  }, [dispatch])  

  console.log(orderBooks)
  
  if(orderBooks.loading === true){
    return (
      <h2>Loading</h2>
    )
  }else{
    return (
      <table className="text-white" style={{ width: "100%" }}>
        <tbody>
          {orderBooks.orders.map((order) => (
            <CommandRow
              side={order.side}
              symbol={order.symbol}
              matchedQuantity={order.matchedQuantity}
              quantity={order.quantity}
              orderType={order.orderType}
              cancelable={order.cancelable}
              orderID={order.orderID}
              setTriggerGet={props.setTriggerGet}
              triggerGet={props.triggerGet}
              orderData = {props.orderData}
              status = {order.status}
              key = {order.orderID}
            />
          ))}
        </tbody>
      </table>
  )
  }
}

const mapStateToProps = state => {
  return {
    orderBooks: state.orderBooks
  }
}

const mapDispatchToProps = dispatch => {
  return{
    FetchOrderBooks: () => dispatch(FetchOrderBooks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayCommand);
