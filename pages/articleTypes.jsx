import React from "react";
import Header from "../components/Header";
import Author from "../components/Author";
import Head from "next/head";
import { Row, Col } from "antd";
import ReactWordcloud from "react-wordcloud";
import Footer from "../components/Footer";
import "../static/style/pages/article-types.less";
const ArticleTypes = () => {
  const words = [
    {
      text: "前端",
      value: 6
    },
    {
      text: "go语言",
      value: 11
    },
    {
      text: "flutter",
      value: 20
    }
  ];
  return (
    <div className="types">
      <Head>
        <title>文章分类</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header status={"1"}></Header>
      <Row className="home-main common-main" type="flex" justify="center">
        <Col
          className="home-main-left common-left"
          xs={24}
          sm={24}
          md={16}
          lg={18}
          xl={14}
        >
          <ReactWordcloud words={words} />
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
export default ArticleTypes;
