import React from "react";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import "../MainRightTop/MainRightTop.css";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import DayCommand from "../DayCommand/DayCommand"

const styles = {
  activeLinkStyle: {
    color: "#F7941D",
  },
};
const containerStyles = {
  activeLinkStyle: {
    color: "#F7941D",
    backgroundColor: "#2F3240",
  },
};

function MainRightTop(props) {
  const [userAccount, setUserAccount] = useCookies("access_token");
  const [useracc, setUseracc] = useState("");
  const [checkDayCommand, setCheckDayCommand] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [trigger, setTrigger] = useState(0);


  useEffect(() => {
    getOrders();
  }, []);

  

  useEffect(()=>{getOrders(); setTrigger(!props.triggerGet)}, [props.triggerGet])
  const getOrders = async () => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
    let url = `https://dertrial-api.vndirect.com.vn/demotrade/orders?username=${userAccount.access_token.username}`;

    try {
      return axios(url, {
        method: "GET",
        config,
      }).then((res) => {
        if(res.status == 200){
          console.log(res.data);
          if(res.data.length > 0){
            setCheckDayCommand(true)
            setOrderData(res.data)
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
    console.log(useracc);
  };
  return (
    <Tabs activeLinkStyle={containerStyles.activeLinkStyle}>
      <TabContent for="tab1">
        <Tabs
          activeLinkStyle={styles.activeLinkStyle}
          className="command"
          id="commands"
        >
          <div className="command-header">
            <ul className="flex">
              <li className="tablinks1">
                <a href="#">
                  <TabLink to="tab1" id="date-command" default>
                    Lệnh trong ngày
                  </TabLink>
                </a>
              </li>
              <li className="tablinks1">
                <a href="#">
                  <TabLink to="tab2" id="conditional-command">
                    Lệnh điều kiện
                  </TabLink>
                </a>
              </li>
              <li className="flex" id="topright-icons">
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
          <TabContent for="tab1" id="cm-tab1">
            <table
              className="text-white"
              style={{ width: "100%", fontWeight: 700 }}
            >
              <tbody>
                <tr>
                  <td>Lệnh</td>
                  <td>Mã</td>
                  <td>KL Khớp</td>
                  <td>Giá</td>
                  <td>TT</td>
                  <td colSpan={2}><p style={{color: "#2F3240"}}>"</p></td>
                </tr>
              </tbody>
            </table>
            <div className="cm-tab1-data" style={{overflow: "auto"}}>
            {checkDayCommand && <DayCommand triggerGet={props.triggerGet} setTriggerGet={props.setTriggerGet} orderData={orderData}/>}
            {!checkDayCommand && <div style={{color: "#777", textAlign: "center", marginTop: "20px"}}>Chưa có lệnh nào trong sổ lệnh</div>}
            </div>
          </TabContent>
          <TabContent for="tab2">
            <div className="" id="cm-tab2">
              <table
                className="text-white"
                style={{ width: "100%", fontWeight: 700 }}
              >
                <tbody>
                  <tr>
                    <td>Lệnh</td>
                    <td>Mã</td>
                    <td>Giá kích hoạt</td>
                    <td>KL</td>
                    <td>Giá</td>
                    <td>Ngày hết hạn</td>
                    <td>TT</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabContent>
        </Tabs>
      </TabContent>
      <TabContent className="" id="vi-the" for="tab2">
        <Tabs activeLinkStyle={styles.activeLinkStyle}>
          <div className="command-header flex">
            <ul className="flex space-evenly" style={{ width: "335px" }}>
              <li style={{ marginLeft: "20px" }} className="tablinks2">
                <a href="#">
                  <TabLink id="open" to="tab1">
                    Vị thế mở
                  </TabLink>
                </a>
              </li>
              <li
                className="tablinks2 flex space-between"
                style={{ marginLeft: "auto" }}
              >
                <a href="#">
                  <TabLink to="tab2" id="close">
                    Vị thế đóng
                  </TabLink>
                </a>
              </li>
            </ul>
            <ul className="flex" id="topright-icon2">
              <li>
                <a href="#" className="text-orange">
                  <i className="fa fa-refresh" aria-hidden="true" />
                </a>
              </li>
              <li onclick="closeButton('tablinks')">
                <a
                  href="#"
                  className="text-orange minus"
                  style={{ display: "block" }}
                >
                  <i className="fa fa-minus" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <TabContent className="" for="tab1" id="cm-tab3">
            <table
              className="text-white"
              style={{ width: "100%", fontWeight: 700 }}
            >
              <tbody>
                <tr>
                  <td>Mã</td>
                  <td>KL</td>
                  <td>Giá vốn</td>
                  <td>Gía hiện tại</td>
                  <td>+/-</td>
                </tr>
              </tbody>
            </table>
          </TabContent>
          <TabContent for="tab2" className="" id="cm-tab4">
            <table
              className="text-white"
              style={{ width: "100%", fontWeight: 700 }}
            >
              <tbody>
                <tr>
                  <td>Mã</td>
                  <td>KL</td>
                  <td>Giá mua</td>
                  <td>Gía bán</td>
                  <td>Lãi/lỗ đã thực hiện</td>
                </tr>
              </tbody>
            </table>
          </TabContent>
        </Tabs>
      </TabContent>
      <TabContent for="tab3" id="tai-san">
        <div className="command-header">
          <ul id="properties-information" className="flex">
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
      </TabContent>
      <div class="command-menu double">
        <ul class="flex">
          <li class="tablinks" id="actionDefault">
            <a href="#">
              <TabLink default to="tab1">
                Sổ lệnh
              </TabLink>
            </a>
          </li>
          <li class="tablinks">
            <a href="#">
              <TabLink to="tab2">Danh mục</TabLink>
            </a>
          </li>
          <li class="tablinks">
            <a href="#">
              <TabLink to="tab3">Tài sản</TabLink>
            </a>
          </li>
        </ul>
      </div>
    </Tabs>
  );
}

export default MainRightTop;
