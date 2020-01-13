import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Head from "next/head";
import dayjs from "dayjs";
import Author from "../components/Author";
import Link from "next/link";
import { Row, Col, List, Icon, Skeleton } from "antd";
import Article from "../api/article/index";
import marked from "marked";
import hljs from "highlight.js";
import CountUp from "react-countup";
import Footer from "../components/Footer";

import "../static/style/pages/theme.less";
import "../static/style/pages/index.less";
const Home = () => {
  // 解析markdown
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  });
  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getList();
  }, []);
  // 获取列表
  const getList = () => {
    setLoading(true);

    Article.list({ page: "1", page_size: "10" }).then(res => {
      if (res.code === 200) {
        console.log("获取列表数据");
        console.log(res);
        setLoading(false);
        setArticleList(res.data.article_list);
      }
    });
  };

  return (
    <div className="home">
      <Head>
        <title>文章列表</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header status={"0"}></Header>
      <Row className="home-main common-main" type="flex" justify="center">
        <Col
          className="home-main-left common-left"
          xs={24}
          sm={24}
          md={16}
          lg={18}
          xl={14}
        >
          {loading ? (
            <div style={{ padding: "0 20px" }}>
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
            </div>
          ) : (
            <div>
              <List
                header={<div className="home-main-left-header">最新文章</div>}
                itemLayout="vertical"
                dataSource={articleList}
                renderItem={item => (
                  <List.Item>
                    {/* 标题 */}
                    <div className="home-main-left-title">
                      <Link
                        href={{
                          pathname: "/articleDetail",
                          query: { id: item.ID }
                        }}
                      >
                        <a>{item.title}</a>
                      </Link>
                    </div>
                    {/* tag */}
                    <div className="home-main-left-tag">
                      <span>
                        <Icon type="calendar" />
                        {dayjs(item.add_time).format("YYYY-MM-DD HH:mm:ss")}
                      </span>
                      <span>
                        <Icon type="tags" />
                        {item.type_name}
                      </span>
                      <span>
                        <Icon type="fire" />
                        <CountUp end={item.view_count} />
                        /人
                      </span>
                    </div>
                    {/* 内容 */}
                    <div
                      className="home-main-left-content"
                      dangerouslySetInnerHTML={{
                        __html: marked(item.article_content)
                      }}
                    ></div>
                    {/* 查看全文 */}
                    <div className="home-main-left-btn">
                      <Link
                        href={{
                          pathname: "/articleDetail",
                          query: { id: item.ID }
                        }}
                      >
                        <a>阅读全文</a>
                      </Link>
                    </div>
                  </List.Item>
                )}
              />
            </div>
          )}
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

export default Home;
