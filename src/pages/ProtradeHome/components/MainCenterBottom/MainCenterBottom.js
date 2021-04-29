import React, { useEffect } from "react";
import "../MainCenterBottom/MainCenterBottom.css";
import axios from "axios";
import { useState } from "react";
import CodePrice from "../CodePrices/CodePrice";

function MainCenterBottom(props) {
  const [priceArray, setPriceArray] = useState([]);

  const getCodePrice = async () => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
    let url = "https://finfo-api.vndirect.com.vn//v4/derivative_prices";

    try {
      return axios(url, {
        method: "GET",
        config,
      })
        .then((res) => {
          if (res.status == 200) {
            console.log("Get price codes: OK");
            console.log(res.data.data);
            setPriceArray(res.data.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCodePrice();
  }, []);

  return (
    <div className="main-center-bottom">
      <div className="bottom-table grid text-white">
        <div className="1">Mã</div>
        <div className="2">Giá</div>
        <div className="3">+/-</div>
        <div className="4">Lệch</div>
        <div className="5">Tổng KL</div>
      </div>
      {priceArray.map((price) => (
        <CodePrice
          code={price.code}
          open={price.open}
          change={price.change}
          pctChange={price.pctChange}
          nmVolume={price.nmVolume}
          key={price.accumulatedVal}
        />
      ))}
      {/* <div className="bottom-row grid text-white">
        <div className="1 text-green">VN30F2104</div>
        <div className="2 text-green">1,192</div>
        <div className="3 text-green">9.0</div>
        <div className="4 text-red">-9.0</div>
        <div className="5">122,443</div>
      </div>
      <div className="bottom-row grid text-white">
        <div className="1 text-green">VN30F2104</div>
        <div className="2 text-green">1,192</div>
        <div className="3 text-red">-19.0</div>
        <div className="4 text-green">9.0</div>
        <div className={5}>122,443</div>
      </div>
      <div className="bottom-row grid text-white">
        <div className="1 text-green">VN30F2104</div>
        <div className="2 text-green">1,192</div>
        <div className="3 text-green">9.0</div>
        <div className="4 text-green">9.0</div>
        <div className={5}>122,443</div>
      </div>
      <div className="bottom-row grid text-white">
        <div className="1 text-red">VN30F2104</div>
        <div className="2 text-red">1,192</div>
        <div className="3 text-green">9.0</div>
        <div className="4 text-green">9.0</div>
        <div className={5}>122,443</div>
      </div> */}
    </div>
  );
}

export default MainCenterBottom;
