import React, { Component } from "react";
import { Button } from "antd";
import "../static/style/pages/common.less";
const ChangeTheme = () => {
  const themeChange = () => {
    console.log("切换主题");
    document.body.style.setProperty("--bgColor", "red");
  };
  return (
    <div>
      <Button type="primary" onClick={themeChange}>
        切换主题
      </Button>
    </div>
  );
};
export default ChangeTheme;
