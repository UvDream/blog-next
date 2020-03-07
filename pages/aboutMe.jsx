import React from "react";
import { Row, Col, List, Icon, Skeleton, Pagination } from "antd";

import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";
import Author from "../components/Author";
import AboutMeDetail from "../components/AboutMe";

import "../static/style/pages/about-me.less";

const AboutMe = () => {
  return (
    <div className="about" style={{ marginTop: "4.5rem" }}>
      <Head>
        <title>汪中杰的博客-关于我</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="首页 | 汪中杰的技术博客,让技术产生价值!"
        />
      </Head>
      <Row className="home-main common-main" type="flex" justify="center">
        <Col
          className="home-main-left common-left"
          xs={24}
          sm={24}
          md={16}
          lg={18}
          xl={14}
        >
          <AboutMeDetail />
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
      <Header status={"3"}></Header>
      <Footer />
    </div>
  );
};

export default AboutMe;
