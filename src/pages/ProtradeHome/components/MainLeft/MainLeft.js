import React, { useEffect, useState } from "react";
import "./MainLeft.css";
import Chart from "../Chart/Chart";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import Market from "../../components/Market/Market";

function MainLeft(props) {
  return (
    <div className="main-left grid">
      <Chart />
      <Market/>
    </div>
  );
}

export default MainLeft;
