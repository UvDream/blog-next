import React, { useState, useEffect } from "react";
import "../static/style/components/header.less";
import { Row, Col, Menu, Icon } from "antd";

import Link from "next/link";

const Header = props => {
  const [status, setState] = useState(0);
  useEffect(() => {
    setState(props.status);
  }, []);
  return (
    <div className="header">
      <Row type="flex" justify="center" align="middle">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <Link
            href={{
              pathname: "/"
            }}
          >
            <a>
              <span className="header-logo">U世界的V梦想</span>
              <span className="header-text">不专情前端开发的前端工程师</span>
            </a>
          </Link>
        </Col>
        <Col className="header-menus" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" selectedKeys={status}>
            <Menu.Item key="0">
              <Link
                href={{
                  pathname: "/"
                }}
              >
                <a>
                  <Icon type="home" />
                  首页
                </a>
              </Link>
            </Menu.Item>

            <Menu.Item key="1">
              <Link
                href={{
                  pathname: "/articleTypes"
                }}
              >
                <a>
                  <Icon type="tags" />
                  归档
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link
                href={{
                  pathname: "/github"
                }}
              >
                <a>
                  <Icon type="github" />
                  我的开源
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link
                href={{
                  pathname: "/aboutMe"
                }}
              >
                <a>
                  <Icon type="user" />
                  关于我
                </a>
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
