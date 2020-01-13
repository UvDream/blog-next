import React from "react";
import { Row, Col, List, Icon, Button } from "antd";

import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";
import Author from "../components/Author";
import randomColor from "randomcolor";

import "../static/style/pages/github.less";

const Github = () => {
  const myList = [
    {
      title: "这是标题",
      url: "https://github.com",
      desc: "这是描述",
      star: "12",
      lang: "js"
    },
    {
      title: "这是标题",
      url: "https://github.com",
      desc: "这是描述",
      star: "12",
      lang: "js"
    }
  ];
  return (
    <div className="github">
      <Head>
        <title>我的开源</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
            padding: "1rem"
          }}
        >
          <List
            header={<div className="github-title">我在github上的开源项目</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item => (
              <List.Item>
                <Row style={{ width: "100%" }}>
                  <Col span={20} style={{ fontSize: "1.2rem" }}>
                    {item.title}
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
                  {item.desc}
                </div>
                <div>
                  <Icon
                    type="tag"
                    theme="filled"
                    style={{ color: randomColor() }}
                  />
                  <span className="github-span">{item.lang}</span>
                  <Icon type="star" theme="filled" />
                  <span className="github-span">{item.star}</span>
                  <Icon type="heart" theme="filled" style={{ color: "red" }} />
                  <span className="github-span">维护</span>
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
