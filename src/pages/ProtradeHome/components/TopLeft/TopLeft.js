import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

function TopLeft(props) {
  return (
      <div className="chart">
        <TradingViewWidget
          symbol="NASDAQ:AAPL"
          theme={Themes.DARK}
          locale="fr"
          autosize
        />
      </div>
  );
}

export default TopLeft;
