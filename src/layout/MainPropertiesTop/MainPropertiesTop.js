import React from "react";
import "../MainPropertiesTop/MainPropertiesTop.css";
import Warning from "../../pages/ProtradeProperties/components/Warning/Warning";
import PropertiesContent from "../../pages/ProtradeProperties/components/PropertiesContent/PropertiesContent";

function MainPropertiesTop(props) {
  return (
    <div className="main-properties-top flex">
      {/* WARNING component */}
      <Warning />
      {/* PROPERTIES CONTENTS component */}
      <PropertiesContent />
    </div>
  );
}

export default MainPropertiesTop;
