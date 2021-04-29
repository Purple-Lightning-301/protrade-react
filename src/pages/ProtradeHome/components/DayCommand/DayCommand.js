import React, { useEffect } from "react";
import { useState } from "react";
import CommandRow from "./CommandRow";

function DayCommand(props) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handlerCancelOrder = () => {
    setConfirmDelete(true);
  };
  return (
    <table className="text-white" style={{ width: "100%" }}>
      <tbody>
        {props.orderData.map((order) => (
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
  );
}

export default DayCommand;
