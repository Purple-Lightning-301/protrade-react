import React from 'react';
import "../PropertiesStaticItem/PropertiesStaticItem.css"

function PropertiesStaticItem(props) {
    return (
        <div className="properties-static-item flex">   
            <i className={`far fa-money-bill-alt static-title flex ${props.textColor} ${props.textBold}`}></i>
            <p className={`static-type static-title ${props.textColor} ${props.textBold}`}>{props.staticType}</p>
            <p className="static-value">{props.staticValue}</p>
        </div>
    );
}

export default PropertiesStaticItem;