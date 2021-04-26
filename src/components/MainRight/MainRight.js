import React from "react";
import "../MainRight/MainRight.css";
import CommandHeader from "../CommandHeader/CommandHeader";
import MainRightTop from "../MainRightTop/MainRightTop";

function MainRight(props) {
  return (
    <div className="main-right grid">
      <MainRightTop/>
      <div className="command-close" id="tai-san">
        <div className="command-header">
          <ul className="flex">
            <li>
              <a href="#">Thông tin tài sản</a>
            </li>
            <li className="flex">
              <a href="#" className="text-orange">
                <i className="fa fa-external-link" aria-hidden="true" />
              </a>
              <a href="#" className="text-orange">
                <i className="fa fa-refresh" aria-hidden="true" />
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
        <div className="Money text-white" id="tien">
          <div className="Money-row flex">
            <p>Tài sản ròng</p>
            <p>40.000.000</p>
          </div>
          <div className="Money-row flex">
            <p>Số dư kí quỹ</p>
            <p>24.000.000</p>
          </div>
          <div className="Money-row flex">
            <p>Thuế và phí</p>
            <p>0</p>
          </div>
        </div>
      </div>
      <div className="command-option">
        <div className="command-filter text-white">
          <div className="radius-command">
            <input
              type="radio"
              id="normal"
              name="rad-cmd"
              defaultValue="command-choice"
              defaultChecked
            />
            <label htmlFor="normal">Lệnh thường</label>
            <input
              type="radio"
              id="stop"
              name="rad-cmd"
              defaultValue="command-choice"
              onclick="showCommandFilter('command-filter','command-filter-close', 'stop')"
            />
            <label
              htmlFor="stop"
              onclick="showCommandFilter('command-filter','command-filter-close', 'stop')"
            >
              Lệnh Stop
            </label>
            <input
              type="radio"
              id="trailing"
              name="rad-cmd"
              disabled="true"
              defaultValue="command-choice"
            />
            <label htmlFor="trailing">Lệnh trailing</label>
            <input
              type="radio"
              id="OSO"
              name="rad-cmd"
              disabled="true"
              defaultValue="command-choice"
            />
            <label htmlFor="OSO">Lệnh OSO</label>
          </div>
          <div className="input-command flex">
            <div className="row grid">
              <label htmlFor="HDTL">Mã HĐTL:</label>
              <input type="text" placeholder="Mã" />
              <br />
            </div>
            <div className="row grid">
              <label htmlFor="HDTL">Giá đặt:</label>
              <input type="text" placeholder="GIá" />
              <br />
            </div>
            <div className="row grid">
              <label htmlFor="HDTL">Khối lượng:</label>
              <input type="text" placeholder="KL" />
              <br />
            </div>
            <div className="confirm-command">
              <button className="buy-btn">MUA</button>
              <button className="sell-btn">BÁN</button>
              <input
                type="checkbox"
                id="save"
                name="save"
                defaultValue="save"
              />
              <label htmlFor="save">Lưu lệnh</label>
            </div>
          </div>
        </div>
        <div className="command-filter-close text-white flex flex-column space-around">
          <div className="radius-command">
            <input
              type="radio"
              id="normal"
              name="rad-cmd"
              defaultValue="command-choice"
              onclick="showCommandFilter('command-filter-close','command-filter', 'normal')"
            />
            <label
              htmlFor="normal"
              onclick="showCommandFilter('command-filter-close','command-filter', 'normal')"
            >
              Lệnh thường
            </label>
            <input
              type="radio"
              id="stop"
              name="rad-cmd"
              defaultValue="command-choice"
              defaultChecked
            />
            <label htmlFor="stop">Lệnh Stop</label>
            <input
              type="radio"
              id="trailing"
              name="rad-cmd"
              disabled="true"
              defaultValue="command-choice"
            />
            <label htmlFor="trailing">Lệnh trailing</label>
            <input
              type="radio"
              id="OSO"
              name="rad-cmd"
              disabled="true"
              defaultValue="command-choice"
            />
            <label htmlFor="OSO">Lệnh OSO</label>
          </div>
          <div className="input-command flex">
            <div className="row grid">
              <label htmlFor="HDTL">Mã HĐTL:</label>
              <input id="HDTL" type="text" placeholder="Mã" />
              <br />
            </div>
            <div className="row grid">
              <label htmlFor="booking-price">Giá đặt:</label>
              <input id="booking-price" type="text" placeholder="GIá" />
              <br />
            </div>
            <div className="row grid">
              <label htmlFor="quantity">Khối lượng:</label>
              <input id="quantity" type="text" placeholder="KL" />
              <br />
            </div>
            <div className="row grid">
              <label htmlFor="expDate">Ngày hết hạn:</label>
              <input id="expDate" type="text" placeholder="02/04/2021" />
              <br />
            </div>
            <div className="confirm-command">
              <button className="buy-btn">MUA</button>
              <button className="sell-btn">BÁN</button>
              <input
                type="checkbox"
                id="save"
                name="save"
                defaultValue="save"
              />
              <label htmlFor="save">Lưu lệnh</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRight;
