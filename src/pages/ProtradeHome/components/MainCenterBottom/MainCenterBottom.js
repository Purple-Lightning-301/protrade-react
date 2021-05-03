import React, { useEffect } from "react";
import "../MainCenterBottom/MainCenterBottom.css";
import axios from "axios";
import { useState } from "react";
import CodePrice from "../CodePrices/CodePrice";
import * as API from "../../../../utils/API";

function MainCenterBottom(props) {
  const [priceArray, setPriceArray] = useState([]);

  const getCodePrices =  async () => {
    const response = await API.getCodePrice();
    console.log(response);
    if (response.status === 200){
      console.log("GET PRICES: OK");
      setPriceArray(response.data.data);
    }
  }

  useEffect(() => {
    getCodePrices();
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
