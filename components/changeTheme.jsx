import React, { useState } from "react";
import { BackTop, Popover } from "antd";
import { changeTheme } from "../util/util";
import "../static/style/pages/common.less";
const ChangeTheme = () => {
  const themeChange = () => {
    changeTheme(2);
  };

  return (
    <div className="theme">
      <BackTop>
        <div className="theme-top">
          <span className="icon iconfont huidaodingbu"></span>
        </div>
      </BackTop>
      <div className="theme-change" onClick={themeChange}>
        <span className="icon iconfont zhuti"></span>
      </div>
    </div>
  );
};
export default ChangeTheme;
