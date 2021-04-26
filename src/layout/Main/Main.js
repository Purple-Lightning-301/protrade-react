import React from 'react';
import "../Main/Main.css"
import MainLeft from "../../pages/ProtradeHome/components/MainLeft/MainLeft"
import MainCenter from "../../pages/ProtradeHome/components/MainCenter/MainCenter"
import MainRight from "../../pages/ProtradeHome/components/MainRight/MainRight"

function Main(props) {
    return (
        <div className="main-content grid">
            <MainLeft/>
            <MainCenter/>
            <MainRight/>
        </div>
    );
}

export default Main;