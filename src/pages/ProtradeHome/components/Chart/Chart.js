import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

function Chart(props) {
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

export default Chart;
