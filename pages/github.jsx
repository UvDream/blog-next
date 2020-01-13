import React from "react";
import { Row, Col, List, Icon, Skeleton, Pagination } from "antd";

import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";
import Author from "../components/Author";

import "../static/style/pages/github.less";

const Github = () => {
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
        >
          开源项目
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
