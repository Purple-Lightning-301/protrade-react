import React from "react";
import Header from "../../layout/Header/Header";
import MainPropertiesTop from "../../layout/MainPropertiesTop/MainPropertiesTop";
import {Cookies, useCookies} from "react-cookie";

function ProtradeProperties(props) {
  const [userName, setUserName] = useCookies(['username']);
  const username = userName.username;

  return (
    <div className="protrade-properties-page grid">
      <Header />
      <MainPropertiesTop />
    </div>
  );
}

export default ProtradeProperties;
