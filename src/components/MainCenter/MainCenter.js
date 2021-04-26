import React from "react";
import "../MainCenter/MainCenter.css";
import MainCenterTop from "../MainCenterTop/MainCenterTop";
import MainCenterBottom from "../MainCenterBottom/MainCenterBottom";

function MainCenter(props) {
  return (
    <div className="main-center grid">
      <MainCenterTop/>
      <MainCenterBottom/>
    </div>
  );
}

export default MainCenter;
