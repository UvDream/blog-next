import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Author from "../components/Author";
import Head from "next/head";
import { Row, Col } from "antd";
import ReactWordcloud from "react-wordcloud";
import Footer from "../components/Footer";
import Article from "../api/article/index";
import "../static/style/pages/article-types.less";
const ArticleTypes = () => {
  useEffect(() => {
    getWords();
  }, []);
  const [words, setWords] = useState([]);
  // 获取标签云
  const getWords = () => {
    Article.words().then(res => {
      if (res.code === 200) {
        setWords(res.data);
      }
    });
  };
  return (
    <div className="types" style={{ marginTop: "4.5rem" }}>
      <Head>
        <title>汪中杰的博客-文章分类</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="首页 | 汪中杰的技术博客,让技术产生价值!"
        />
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
