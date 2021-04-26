import React from 'react';
import "../PropertiesStatics/PropertiesStatics.css";
import PropertiesStaticItems from "../PropertiesStaticItem/PropertiesStaticItem";

function PropertiesStatics(props) {
    return (
        <div className="properties-statics grid">
            <PropertiesStaticItems staticType="Tài sản ròng" staticValue="40.000.000" textColor="text-orange" textBold="text-bold"/>
            <PropertiesStaticItems staticType="Số dư kí quỹ có thể sử dụng" staticValue="24.000.000" textColor="text-gray" textBold=""/>
            <PropertiesStaticItems staticType="Số tiền gửi kí quỹ cần bổ sung" staticValue="0" textColor="text-gray" textBold=""/>
            <PropertiesStaticItems staticType="Nghĩa vụ kí quỹ" staticValue="0" textColor="text-orange" textBold="text-bold"/>
            <PropertiesStaticItems staticType="Kí quỹ ban đầu" staticValue="0" textColor="text-gray" textBold=""/>
            <PropertiesStaticItems staticType="Kí quỹ biến đổi" staticValue="0" textColor="text-gray" textBold=""/>
        </div>
    );
}

export default PropertiesStatics;