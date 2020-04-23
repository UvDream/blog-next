import React from "react";
import { Button, BackTop } from "antd";
import { changeTheme } from "../util/util";
import "../static/style/pages/common.less";
const ChangeTheme = () => {
  const themeChange = () => {
    console.log("切换主题");
    changeTheme(2);
  };
  return (
    <div className="theme">
      <BackTop />
      <Button type="primary" onClick={themeChange}>
        切换主题
      </Button>
    </div>
  );
};
export default ChangeTheme;
