import React from 'react';
import "../Main/Main.css"
import MainLeft from "../../components/MainLeft/MainLeft"
import MainCenter from "../../components/MainCenter/MainCenter"
import MainRight from "../../components/MainRight/MainRight"

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