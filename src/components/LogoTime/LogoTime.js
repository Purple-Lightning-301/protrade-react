import React from "react";
import logo from "../../assets/logo.svg";
import "../LogoTime/LogoTime.css";
import {NavLink} from "react-router-dom";

function LogoTime(props) {
  return (
    <div>
      <div className="header-left">
        <div className="logo-time">
          <div className="logo">
            <img className="logo-img" src={logo} />
          </div>
          <div className="time flex">
            <p id="hours">{props.hour}</p> &nbsp;
            <p id="days">{props.day}</p>
          </div>
        </div>
        <div className="menu flex">
        <ul className="flex menu-list">
          <li className="navbar">
            <NavLink exact to="/trang-chu">
              Trang chủ
            </NavLink>
          </li>
          <li className="navbar">
            <NavLink exact to="/tai-san">Tài sản</NavLink>
          </li>
          <li className="navbar">
            <NavLink exact to="/huong-dan">Hướng dẫn</NavLink>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default LogoTime;