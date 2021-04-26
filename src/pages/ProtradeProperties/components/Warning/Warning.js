import React from 'react';
import "../Warning/Warning.css"
function Warning(props) {
    return (
<div className="warning flex">
        <i class="fas fa-exclamation-triangle"></i>&nbsp;
        <p className="warning-text">
          Danh mục và Tài sản của Quý khách sẽ trở về mặc định sau ngày đáo hạn
          hợp đồng tương lai của tháng.
        </p>
      </div>
    );
}

export default Warning;