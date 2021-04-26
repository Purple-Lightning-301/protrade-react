import React from "react";
import "./CommandHeader.css";

function CommandHeader(props) {
  return (
    <div className="command-header">
      <ul className="flex">
        <li
          className="tablinks1"
          id="actionDefault2"
          onclick="openDiv2(event, 'cm-tab1', 'tablinks1', 'command-close-tab')"
        >
          <a href="#">Lệnh trong ngày</a>
        </li>
        <li
          className="tablinks1"
          onclick="openDiv2(event, 'cm-tab2', 'tablinks1', 'command-close-tab')"
        >
          <a href="#">Lệnh điều kiện</a>
        </li>
        <li className="flex">
          <a href="#" className="text-orange">
            <i className="fa fa-refresh " aria-hidden="true" />
          </a>
          <a
            href="#"
            className="text-orange minus"
            onclick="closeButton('tablinks')"
          >
            <i className="fa fa-minus" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CommandHeader;
