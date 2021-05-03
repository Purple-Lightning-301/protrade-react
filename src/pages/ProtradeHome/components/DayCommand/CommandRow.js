import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import * as API from "../../../../utils/API"; 
import {useDispatch} from "react-redux";
import {FetchOrderBooks} from "../../../../redux/actions/index";

function CommandRow(props) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [accessToken] = useCookies("access_token");
  const dispatch = useDispatch();

  const handlerCancelOrder = () => {
    setConfirmDelete(true);
  };

  const handlerCancel = () => {
    setConfirmDelete(false);
  };

  const cancelOrder = async () => {
    const response = await API.handlerCancelOrder(props.orderID, accessToken.access_token.username);
    if(response.status === 200){
      console.log("DELETE: OK");
      dispatch(FetchOrderBooks(accessToken.access_token.username))
    }
    if(response.status === 400){
      console.log("DELETE: OK");
      dispatch(FetchOrderBooks(accessToken.access_token.username))
    }
  }

  return (
    <tr className="command-row" style={{ height: "32px" }}>
      <td className="text-green">
        <span>{props.side === "NB" ? <p style={{color: "#1FE71F"}}>Mua</p> : <p style={{color: "red"}}>Bán</p>}</span>
      </td>
      <td>{props.symbol}</td>
      <td>
        <span style={{ color: "orange" }}>{props.matchedQuantity}/</span>
        {props.quantity}
      </td>
      <td>{props.orderType}</td>
      <td className="text-orange flex space-between">
        <div className="hourglass">
          {props.status === "Filled" ? (
            <i
              className="fa fa-check-circle"
              style={{ color: "green" }}
              aria-hidden="true"
            ></i>
          ) : null}
          {props.status === "PendingNew" ? (
            <i
              className="fa fa-hourglass"
              style={{ color: "orange" }}
              aria-hidden="true"
            ></i>
          ) : null}
          {props.status === "Rejected" && confirmDelete === false ? (
            <i
              className="fa fa-minus-circle"
              style={{ color: "red" }}
              aria-hidden="true"
            ></i>
          ) : null}
          {props.status === "Cancelled" ? (
            <i className="fa fa-trash" style={{color: "purple"}} aria-hidden="true"></i>
          ) : null}
        </div>
      </td>
      <td>
        {props.cancelable === true && confirmDelete === false ? (
          <i
            className="fa fa-times-circle"
            onClick={handlerCancelOrder}
            style={{ color: "red" }}
            aria-hidden="true"
          />
        ) : null}
        {confirmDelete === true ? (
          <span>
            <button
              onClick={cancelOrder}
              style={{
                width: "40px",
                backgroundColor: "orange",
                height: "15px",
              }}
            >
              Huỷ
            </button>
            <button
              onClick={handlerCancel}
              style={{
                width: "50px",
                backgroundColor: "gray",
                height: "15px",
              }}
            >
              Không
            </button>
          </span>
        ) : null}
      </td>
    </tr>
  );
}

export default CommandRow;
