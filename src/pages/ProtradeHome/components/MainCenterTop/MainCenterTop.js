import React from "react";
import "../MainCenterTop/MainCenterTop.css"

function MainCenterTop(props) {
  return (
    <div className="main-center-top">
      <div className="VN30tableHeader flex text-white">
        <p style={{ fontSize: "16px", fontWeight: 700 }}>VN30F2104</p>
        <div className="floor flex flex-column space-evenly">
          <p>Sàn:</p>
          <p className="text-gem">1108.5</p>
        </div>
        <div className="ave flex flex-column space-evenly">
          <p>TC:</p>
          <p className="text-yellow">1191.9</p>
        </div>
        <div className="cell flex flex-column space-evenly">
          <p>Trần:</p>
          <p className="text-purple">1275.3</p>
        </div>
      </div>
      <table className="VN30 text-white">
        <tbody>
          <tr>
            <td colSpan={2} className="tabActive">
              Bước giá
            </td>
            <td colSpan={2}>Lịch sử khớp lệnh</td>
          </tr>
        </tbody>
      </table>
      <table className="VN301 text-white">
        <tbody>
          <tr>
            <td className="text-gray">KL Mua</td>
            <td className="text-gray">Giá Mua</td>
            <td className="text-gray">Giá Bán</td>
            <td className="text-gray">KL Bán</td>
          </tr>
        </tbody>
      </table>
      <div className="VN30-data">
        <div className="data-row grid text-white">
          <div className="data-left grid">
            <div className="buy-KT">6</div>
            <div className="buy-price text-green">1192.2</div>
          </div>
          <div className="data-right grid">
            <div className="sell-price text-green">1192.5</div>
            <div className="sell-KT">14</div>
          </div>
        </div>
        <div className="data-row grid text-white">
          <div className="data-left grid">
            <div className="buy-KT">6</div>
            <div className="buy-price text-green">1192.2</div>
          </div>
          <div className="data-right grid">
            <div className="sell-price text-green">1192.5</div>
            <div className="sell-KT">14</div>
          </div>
        </div>
        <div className="data-row grid text-white">
          <div className="data-left grid">
            <div className="buy-KT">6</div>
            <div className="buy-price text-green">1192.2</div>
          </div>
          <div className="data-right grid">
            <div className="sell-price text-green">1192.5</div>
            <div className="sell-KT">14</div>
          </div>
        </div>
        <div className="data-row grid text-white">
          <div className="data-left grid">
            <div className="buy-KT">6</div>
            <div className="buy-price text-green">1192.2</div>
          </div>
          <div className="data-right grid">
            <div className="sell-price text-green">1192.5</div>
            <div className="sell-KT">14</div>
          </div>
        </div>
        <div className="data-row grid text-white">
          <div className="data-left grid">
            <div className="buy-KT">6</div>
            <div className="buy-price text-green">1192.2</div>
          </div>
          <div className="data-right grid">
            <div className="sell-price text-green">1192.5</div>
            <div className="sell-KT">14</div>
          </div>
        </div>
        <div className="data-row grid text-white">
          <div className="data-left grid">
            <div className="buy-KT">6</div>
            <div className="buy-price text-green">1192.2</div>
          </div>
          <div className="data-right grid">
            <div className="sell-price text-green">1192.5</div>
            <div className="sell-KT">14</div>
          </div>
        </div>
        <div className="data-row grid text-white">
          <div className="data-left grid">
            <div className="buy-KT">6</div>
            <div className="buy-price text-green">1192.2</div>
          </div>
          <div className="data-right grid">
            <div className="sell-price text-green">1192.5</div>
            <div className="sell-KT">14</div>
          </div>
        </div>
        <div className="data-row grid text-white">
          <div className="data-left grid">
            <div className="buy-KT">6</div>
            <div className="buy-price text-green">1192.2</div>
          </div>
          <div className="data-right grid">
            <div className="sell-price text-green">1192.5</div>
            <div className="sell-KT">14</div>
          </div>
        </div>
        <div className="data-row grid text-white">
          <div className="data-left grid">
            <div className="buy-KT">6</div>
            <div className="buy-price text-green">1192.2</div>
          </div>
          <div className="data-right grid">
            <div className="sell-price text-green">1192.5</div>
            <div className="sell-KT">14</div>
          </div>
        </div>
        <div className="data-row grid text-white">
          <div className="data-left grid">
            <div className="buy-KT">6</div>
            <div className="buy-price text-green">1192.2</div>
          </div>
          <div className="data-right grid">
            <div className="sell-price text-green">1192.5</div>
            <div className="sell-KT">14</div>
          </div>
        </div>
        <div className="data-row grid text-white">
          <div className="data-left grid">
            <div className="buy-KT">6</div>
            <div className="buy-price text-green">1192.2</div>
          </div>
          <div className="data-right grid">
            <div className="sell-price text-green">1192.5</div>
            <div className="sell-KT">14</div>
          </div>
        </div>
        <div className="data-row grid text-white">
          <div className="data-left grid">
            <div className="buy-KT">6</div>
            <div className="buy-price text-green">1192.2</div>
          </div>
          <div className="data-right grid">
            <div className="sell-price text-green">1192.5</div>
            <div className="sell-KT">14</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCenterTop;
