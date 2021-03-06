import React, { useState, useEffect } from "react";
import "../static/style/components/header.less";
import { Row, Col, Button, Drawer } from "antd";
import randomColor from "randomcolor";
import MenusItem from "./Menus";
import { iconfontUrl, iconfontVersion } from "../config/env";
import { loadStyle } from "../util/util";
import Link from "next/link";

const Header = (props) => {
  const [draw, setDraw] = useState(false);
  useEffect(() => {
    iconfontVersion.forEach((ele) => {
      loadStyle(iconfontUrl.replace("$key", ele));
    });
    console.log(`
    ██╗   ██╗██╗   ██╗██████╗ ██████╗ ███████╗ █████╗ ███╗   ███╗
    ██║   ██║██║   ██║██╔══██╗██╔══██╗██╔════╝██╔══██╗████╗ ████║
    ██║   ██║██║   ██║██║  ██║██████╔╝█████╗  ███████║██╔████╔██║
    ██║   ██║╚██╗ ██╔╝██║  ██║██╔══██╗██╔══╝  ██╔══██║██║╚██╔╝██║
    ╚██████╔╝ ╚████╔╝ ██████╔╝██║  ██║███████╗██║  ██║██║ ╚═╝ ██║
     ╚═════╝   ╚═══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝
 `);
  }, []);
  const onClose = () => {
    setDraw(false);
  };
  const drawShow = () => {
    setDraw(true);
  };
  return (
    <div className="header">
      <Row type="flex" justify="center" align="middle">
        <Col xs={21} sm={21} md={10} lg={15} xl={12} className="header-title">
          <Link
            href={{
              pathname: "/",
            }}
          >
            <a>
              <span className="header-logo" style={{ color: randomColor() }}>
                U世界的V梦想
              </span>
            </a>
          </Link>
        </Col>
        <Col xs={3} sm={3} md={0} lg={0} xl={0} style={{ textAlign: "center" }}>
          <Button
            icon="unordered-list"
            className="header-icon"
            onClick={drawShow}
          />
        </Col>
        <Col className="header-menus" xs={0} sm={0} md={14} lg={8} xl={6}>
          <MenusItem mode={"horizontal"} status={props.status} />
        </Col>
      </Row>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={draw}
      >
        <MenusItem mode={"inline"} status={props.status} />
      </Drawer>
    </div>
  );
};
export default Header;
