import React from 'react';
import PropertiesStatics from "../PropertiesStatics/PropertiesStatics";
import "../PropertiesContent/PropertiesContent.css"

function PropertiesContent(props) {
    return (
        <div className="properties-contents flex">
           <PropertiesStatics/>
        </div>
    );
}

export default PropertiesContent;