import React, { useState } from "react";
import { BackTop, Popover } from "antd";
import { changeTheme } from "../util/util";
import "../static/style/pages/common.less";
import "../static/style/components/change-theme.less";
const ChangeTheme = () => {
  const [visible, setVisible] = useState(false);
  const [stateShow, setStateShow] = useState(1);
  const themeChange = (id) => {
    changeTheme(id);
    setStateShow(id);
    setVisible(!visible);
  };
  const showDialog = () => {
    setVisible(!visible);
  };
  const content = (
    <div className="change">
      <div
        className={stateShow == 1 ? "active" : ""}
        onClick={() => {
          themeChange(1);
        }}
      >
        默认主题
      </div>
      <div
        className={stateShow == 2 ? "active" : ""}
        onClick={() => {
          themeChange(2);
        }}
      >
        暗黑主题
      </div>
    </div>
  );

  return (
    <div className="theme">
      <BackTop>
        <div className="theme-top">
          <span className="icon iconfont huidaodingbu"></span>
        </div>
      </BackTop>
      <Popover content={content} trigger="click" visible={visible}>
        <div className="theme-change" onClick={showDialog}>
          <span className="icon iconfont zhuti"></span>
        </div>
      </Popover>
    </div>
  );
};
export default ChangeTheme;
