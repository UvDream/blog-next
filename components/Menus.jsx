import React, { useState, useEffect } from "react";
import { Menu, Icon } from "antd";
import Link from "next/link";
import { adminUrl } from "../config/env";
const MenusItem = props => {
  const [status, setStatus] = useState(0);
  useEffect(() => {
    setStatus(props.status);
  }, []);
  return (
    <Menu mode={props.mode} selectedKeys={status}>
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
      <Menu.Item key="4">
        <a href={adminUrl}>
          <Icon type="edit" />
          后台管理
        </a>
      </Menu.Item>
    </Menu>
  );
};
export default MenusItem;
