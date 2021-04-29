import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

function CommandRow(props) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [accessToken] = useCookies("access_token");

  const handlerCancelOrder = () => {
    setConfirmDelete(true);
    console.log(accessToken.access_token.username);
    console.log(props.orderID);
  };

  const handlerCancel = () => {
    setConfirmDelete(false);
  };

  const handlerConfirm = async () => {
    console.log(props.orderData);
    let data = {
      orderID: props.orderID,
      userName: accessToken.access_token.username,
    };
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
    let url = "https://dertrial-api.vndirect.com.vn/demotrade/orders";
    try {
      return axios(url, {
        method: "DELETE",
        data: data,
        config,
      })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            console.log("DELETE: OK");
            props.setTriggerGet(!props.triggerGet)
            setConfirmDelete(false)
          }
          if (res.status == 400) {
            console.log("DELETE: OK");
            props.setTriggerGet(!props.triggerGet)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
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
              onClick={handlerConfirm}
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
