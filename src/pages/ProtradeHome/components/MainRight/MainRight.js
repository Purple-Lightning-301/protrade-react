import React, { useState } from "react";
import "../MainRight/MainRight.css";
import CommandHeader from "../CommandHeader/CommandHeader";
import MainRightTop from "../MainRightTop/MainRightTop";
import axios from "axios";
import { useCookies } from "react-cookie";

function MainRight(props) {
  const [buyCode, setBuyCode] = useState("");
  const [orderPrice, setOrderPrice] = useState();
  const [orderQuantity, setOrderQuantity] = useState();
  const [triggerGet, setTriggerGet] = useState(false);
  const [accessToken, setAccessToken, removeAccessToken] = useCookies([
    "access_token",
  ]);

  const [showNormal, setShowNormal] = useState(true);
  const [showStop, setShowStop] = useState(false);

  const handlerBuy = async () => {
    console.log("clicked")
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
    let url = "https://dertrial-api.vndirect.com.vn/demotrade/orders";
    const data = {
      side: "NB",
      symbol: buyCode,
      priceType: orderPrice,
      quantity: orderQuantity,
      price: 0,
      userName: accessToken.access_token.username,
    };
    console.log(orderQuantity)
    try {
      return axios(url, {
        method: "POST",
        data: data,
        config,
      }).then((res) => {
        if(res.status == 200){
          console.log("Send order: OK")
          setTriggerGet(!triggerGet)
        }
        if(res.status == 400){
          console.log("still work")
          setTriggerGet(!triggerGet)
        }
      }).catch((err) => {console.log(err); setTriggerGet(!triggerGet)});
    } catch (err) {
      console.log(err);
    }
  };

  
  const handlerSell = async () => {
    console.log("clicked")
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
    let url = "https://dertrial-api.vndirect.com.vn/demotrade/orders";
    const data = {
      side: "NS",
      symbol: buyCode,
      priceType: orderPrice,
      quantity: orderQuantity,
      price: 0,
      userName: accessToken.access_token.username,
    };
    console.log(orderQuantity)
    try {
      return axios(url, {
        method: "POST",
        data: data,
        config,
      }).then((res) => {
        if(res.status == 200){
          console.log("Send order: OK")
          setTriggerGet(!triggerGet)
        }
        if(res.status == 400){
          console.log("still work")
          setTriggerGet(!triggerGet)
        }
      }).catch((err) => {console.log(err); setTriggerGet(!triggerGet)});
    } catch (err) {
      console.log(err);
    }
  };
  console.log(accessToken.access_token.username);
  return (
    <div className="main-right grid">
      <MainRightTop triggerGet = {triggerGet} setTriggerGet={setTriggerGet} />
      <div className="command-option">
        { showNormal === true ? <div className="command-filter text-white">
          <div className="radius-command">
            <input
              type="radio"
              id="normal"
              name="rad-cmd"
              defaultValue="command-choice"
              defaultChecked
            />
            <label htmlFor="normal">Lệnh thường</label>
            <input
              type="radio"
              id="stop"
              name="rad-cmd"
              defaultValue="command-choice"
              onChange={(e) => {setShowStop(true); setShowNormal(false)}}
            />
            <label
              htmlFor="stop"
            >
              Lệnh Stop
            </label>
            <input
              type="radio"
              id="trailing"
              name="rad-cmd"
              disabled="true"
              defaultValue="command-choice"
            />
            <label htmlFor="trailing">Lệnh trailing</label>
            <input
              type="radio"
              id="OSO"
              name="rad-cmd"
              disabled="true"
              defaultValue="command-choice"
            />
            <label htmlFor="OSO">Lệnh OSO</label>
          </div>
          <div className="input-command flex">
            <div className="row grid">
              <label htmlFor="HDTL">Mã HĐTL:</label>
              <input
                type="text"
                placeholder="Mã"
                onChange={(e) => {
                  setBuyCode(e.target.value);
                }}
                required
              />
              <br />
            </div>
            <div className="row grid">
              <label htmlFor="HDTL">Giá đặt:</label>
              <input
                type="text"
                placeholder="GIá"
                onChange={(e) => {
                  setOrderPrice(e.target.value);
                }}
                required
              />
              <br />
            </div>
            <div className="row grid">
              <label htmlFor="HDTL">Khối lượng:</label>
              <input
                type="text"
                placeholder="KL"
                onChange={(e) => {
                  setOrderQuantity(e.target.value);
                }}
                required
              />
              <br />
            </div>
            <div className="confirm-command">
              <button className="buy-btn" onClick={handlerBuy}>MUA</button>
              <button className="sell-btn" onClick={handlerSell}>BÁN</button>
              <input
                type="checkbox"
                id="save"
                name="save"
                defaultValue="save"
              />
              <label htmlFor="save">Lưu lệnh</label>
            </div>
          </div>
        </div> : null}
        { showStop ? <div className=" text-white flex flex-column space-around">
          <div className="radius-command">
            <input
              type="radio"
              id="normal"
              name="rad-cmd"
              defaultValue="command-choice"
              onChange={(e)=>{setShowNormal(true); setShowStop(!showStop)}}
            />
            <label
              htmlFor="normal"
            >
              Lệnh thường
            </label>
            <input
              type="radio"
              id="stop"
              name="rad-cmd"
              defaultValue="command-choice"
              defaultChecked
            />
            {/* Radio button display command choice */}
            <label htmlFor="stop">Lệnh Stop</label>
            <input
              type="radio"
              id="trailing"
              name="rad-cmd"
              disabled="true"
              defaultValue="command-choice"
            />
            <label htmlFor="trailing">Lệnh trailing</label>
            <input
              type="radio"
              id="OSO"
              name="rad-cmd"
              disabled="true"
              defaultValue="command-choice"
            />
            <label htmlFor="OSO">Lệnh OSO</label>
          </div>
          {/* Tab when radio checked */}
          <div className="input-command flex">
            <div className="row grid">
              <label htmlFor="HDTL">Mã HĐTL:</label>
              <input id="HDTL" type="text" placeholder="Mã" />
              <br />
            </div>
            <div className="row grid">
              <label htmlFor="booking-price">Giá đặt:</label>
              <input id="booking-price" type="text" placeholder="GIá" />
              <br />
            </div>
            <div className="row grid">
              <label htmlFor="quantity">Khối lượng:</label>
              <input id="quantity" type="text" placeholder="KL" />
              <br />
            </div>
            <div className="row grid">
              <label htmlFor="expDate">Ngày hết hạn:</label>
              <input id="expDate" type="text" placeholder="02/04/2021" />
              <br />
            </div>
            <div className="confirm-command">
              <button className="buy-btn">MUA</button>
              <button className="sell-btn">BÁN</button>
              <input
                type="checkbox"
                id="save"
                name="save"
                defaultValue="save"
              />
              <label htmlFor="save">Lưu lệnh</label>
            </div>
          </div>
        </div>: null}
      </div>
    </div>
  );
}

export default MainRight;
