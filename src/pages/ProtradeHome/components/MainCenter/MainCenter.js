import React from "react";
import "../MainCenter/MainCenter.css";
import History from "../History/History";
import WatchList from "../WatchList/WatchList";

function MainCenter(props) {
  return (
    <div className="main-center grid">
      <History/>
      <WatchList/>
    </div>
  );
}

export default MainCenter;
