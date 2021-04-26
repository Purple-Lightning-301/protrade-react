import React from "react";
import "../BottomLeft/BottomLeft.css";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const styles = {
  activeLinkStyle: {
    color: "#F7941D",
  },
};

function BottomLeft(props) {
  return (
    <Tabs
      className="dealing-data grid"
      activeLinkStyle={styles.activeLinkStyle}
    >
      <div className="dealing-data-content">
        <TabContent for="tab1">
          {/* <!-- TradingView Widget BEGIN --> */}
          <div className="tradingview-widget-container" id="intraday1">
            <TradingViewWidget
              symbol="NASDAQ:AAPL"
              theme={Themes.DARK}
              locale="fr"
              autosize
            />
          </div>
        </TabContent>
        <TabContent for="tab2">
          <div className="tradingview-widget-container">
            <TradingViewWidget
              symbol="NASDAQ:AAPL"
              theme={Themes.LIGHT}
              locale="fr"
              autosize
            />
          </div>
        </TabContent>
        <TabContent for="tab3">
          <div className="tradingview-widget-container" id="vn30">
            <TradingViewWidget
              symbol="NASDAQ:AAPL"
              theme={Themes.DARK}
              locale="fr"
              autosize
            />
          </div>
        </TabContent>
        <TabContent for="tab4">
          <div className="tradingview-widget-container" id="column-chart">
            <TradingViewWidget
              symbol="NASDAQ:AAPL"
              theme={Themes.LIGHT}
              locale="fr"
              autosize
            />
          </div>
        </TabContent>
      </div>
      <div className="dealing-menu flex tab-links">
        <p className="copy-right">Bản quyền thuộc về VNDIRECT © 2021. v2.2.2</p>
        <ul className="flex chart-list">
          <li className="dealing-button">
            <a href="#">
              <TabLink to="tab1" id="VN30intraday" default>
                VN30 INTRADAY
              </TabLink>
            </a>
          </li>

          <li className="dealing-button">
            <a href="#">
              <TabLink to="tab2" id="VN30">
                VN30
              </TabLink>
            </a>
          </li>

          <li className="dealing-button">
            <a href="#">
              <TabLink id="fa-bar" to="tab3">
                <i className="fa fa-bar-chart" aria-hidden="true"></i>
              </TabLink>
            </a>
          </li>

          <li className="dealing-button">
            <a href="#">
              <TabLink  id="fa-pie" to="tab4">
                <i className="fa fa-pie-chart" aria-hidden="true"></i>
              </TabLink>
            </a>
          </li>
        </ul>
      </div>
    </Tabs>
  );
}

export default BottomLeft;
