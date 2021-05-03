import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import LogoTime from "../LogoTime/LogoTime";
import {NavLink} from "react-router-dom";
import {Cookies, useCookies} from "react-cookie";
import useSWR from 'swr';
import axios from "axios"

function Header(props) {

  const [hour, setHour] = useState("")
  const [day, setDay] = useState("")
  const [userName, setUserName, removeUserName] = useCookies(['username']);
  const [accessToken, setAccessToken, removeAccessToken] = useCookies(['access_token']);
  const username = userName.username;
  
  function setTime() {
    setInterval(() => {
      let date = new Date();
      let hour = formatTime(date.getHours());
      let min = formatTime(date.getMinutes());
      let sec = formatTime(date.getSeconds());
      let year = date.getFullYear();
      let month = formatTime(date.getMonth() + 1);
      let day = formatTime(date.getDate());

      let time = `${hour}:${min}:${sec}`;
      let today = `${year}/${month}/${day}`;

      setHour(time);
      setDay(today);

    }, 1000);
  }

  useEffect(() => {
    setTime();
  },[])

  function formatTime(x) {
    if (x < 10) {
      x = "0" + x;
    }
    return x;
  }

  const handlerLogout = () => {
    console.log(username);
    removeUserName("username");
    removeAccessToken("access_token")
  }

  return (
    <div className="header">
      <LogoTime hour={hour} day={day}/>
      <div className="header-center flex">
        <div className="profit flex">
          <p>Lãi/Lỗ:</p> &nbsp; 
          <p className="profit-value">1.000.000</p>
        </div>
        <div className="pro">
          <button className="pro-link">
            <span className="pro-icon">
              <i className="fa fa-trophy" aria-hidden="true" />
            </span>
            <a href="#">Top cao thủ phái sinh</a>
          </button>
        </div>
      </div>
      <div className="header-right flex">
        <div className="version">BẢN TRIAL</div>
        <a
          href="https://id.vndirect.com.vn/login?httpReferer=https%3A%2F%2Fmyaccount.vndirect.com.vn%2Fauth?response=%2Faccount-info%3Ftab%3Daccount-register"
          target="_blank"
          className="upgrade"
        >
          Nâng cấp tài khoản
        </a>
        <div className="user flex">
          <div className="user-button flex">
            <i className="fa fa-user" aria-hidden="true" />
            &nbsp; {username} &nbsp;
            <i className="fa fa-caret-down" aria-hidden="true" />
          </div>
          <div className="dropdown-content">
            <NavLink to="/login" onClick={handlerLogout} id="logout">
              <span>
                <i className="fa fa-sign-out" aria-hidden="true" />
              </span>
              &nbsp;
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
