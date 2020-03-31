import React, { useState, useEffect } from "react";
import { Row, Col, List, Icon, Button, Tag } from "antd";

import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";
import Author from "../components/Author";
import randomColor from "randomcolor";
import Others from "../api/other/index";
import { Color } from "../config/env";

import "../static/style/pages/github.less";
const Github = () => {
  const [tableData, setTableData] = useState();
  useEffect(() => {
    getList();
  }, []);
  // 获取列表
  const getList = () => {
    Others.list().then(res => {
      if (res.code === 200) {
        setTableData(res.data);
      }
    });
  };
  return (
    <div className="github" style={{ marginTop: "4.5rem" }}>
      <Head>
        <title>汪中杰的博客-我的开源</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="首页 | 汪中杰的技术博客,让技术产生价值!"
        />
      </Head>
      <Header status={"2"}></Header>
      <Row className="home-main common-main" type="flex" justify="center">
        <Col
          className="home-main-left common-left"
          xs={24}
          sm={24}
          md={16}
          lg={18}
          xl={14}
          style={{
            padding: "1rem",
            backgroundColor: Color.bgColor,
            color: Color.textColor
          }}
        >
          <List
            style={{ color: Color.textColor }}
            header={<div className="github-title">我在github上的开源项目</div>}
            itemLayout="vertical"
            dataSource={tableData}
            renderItem={item => (
              <List.Item>
                <Row style={{ width: "100%" }}>
                  <Col
                    span={20}
                    style={{ fontSize: "1.2rem" }}
                    className="github-header-title"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      style={{ color: Color.textColor }}
                    >
                      {item.name}
                    </a>
                  </Col>
                  <Col span={4} style={{ textAlign: "right" }}>
                    <a href={item.url} target="_blank">
                      <Button shape="round">
                        <Icon type="star" theme="filled" />
                        star
                      </Button>
                    </a>
                  </Col>
                </Row>
                <div style={{ color: "#ccc", margin: ".5rem 0" }}>
                  {item.desc === "" ? "暂无描述~" : item.desc}
                </div>
                <div>
                  <Icon
                    type="tag"
                    theme="filled"
                    style={{ color: randomColor() }}
                  />
                  <span className="github-span">{item.language}</span>
                  <Icon type="star" theme="filled" />
                  <span className="github-span">
                    {item.star == "" ? 0 : item.star}
                  </span>
                  <Icon type="heart" theme="filled" style={{ color: "red" }} />
                  <span className="github-span">
                    {(() => {
                      switch (item.status) {
                        case "0":
                          return <span style={{ color: "orange" }}>维护</span>;
                        case "1":
                          return <span style={{ color: "green" }}>进行中</span>;
                        case "2":
                          return <span style={{ color: "#52c41a" }}>完结</span>;
                        case "3":
                          return <span style={{ color: "red" }}>暂停</span>;
                      }
                    })()}
                  </span>
                </div>
              </List.Item>
            )}
          />
        </Col>
        <Col
          className="home-main-right common-right"
          xs={0}
          sm={0}
          md={7}
          lg={5}
          xl={4}
        >
          <Author />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Github;
