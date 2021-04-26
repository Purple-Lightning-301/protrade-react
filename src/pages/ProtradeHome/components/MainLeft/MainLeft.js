import React, { useEffect, useState } from "react";
import "./MainLeft.css";
import TopLeftChart from "../TopLeft/TopLeft";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import BottomLeft from "../../components/BottomLeft/BottomLeft"

function MainLeft(props) {
  return (
    <div className="main-left grid">
      <TopLeftChart />
      <BottomLeft/>
    </div>
  );
}

export default MainLeft;
