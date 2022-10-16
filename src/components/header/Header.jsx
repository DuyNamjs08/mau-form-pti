import React from "react";
import './header.scss'



function Header(props) {
  return (
    <div className='header-container'>
     <ul>
        <li><img src="https://www.pti.com.vn/images/shared/1/logo_pti_15082018_fix.png" alt="" /></li>
        <li>Kế toán <i className="fa-sharp fa-solid fa-caret-down"></i></li>
        <li>Bảo hiểm</li>
        <li>Tai nạn bảo hiểm</li>
        <li>Báo cáo riêng <i className="fa-sharp fa-solid fa-caret-down"></i></li>  
        <li>Hệ thống mã <i className="fa-sharp fa-solid fa-caret-down"></i></li>
        <li>Tra cứu <i className="fa-sharp fa-solid fa-caret-down"></i></li>
        <li><i className="fa-solid fa-gear"></i></li>
     </ul>
    </div>
  );  
} 

export default Header;
