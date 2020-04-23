import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { Row, Col, Icon, Affix, message } from "antd";
import Author from "../components/Author";
import Article from "../api/article/index";
import Footer from "../components/Footer";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import ChangeTheme from "../components/changeTheme";

const Vditor = dynamic(import("../components/vditor"), {
  ssr: false,
});
import "../static/style/pages/article-detail.less";

const ArticleDetail = (props) => {
  return (
    <div className="detail">
      <Head>
        <title>汪中杰的博客-{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="首页 | 汪中杰的技术博客,让技术产生价值!"
        />
      </Head>
      <Header></Header>
      <Row className="detail-content" type="flex" justify="center">
        <Col
          className=" detail-content-left"
          xs={24}
          sm={24}
          md={16}
          lg={18}
          xl={14}
        >
          <ChangeTheme />
          {/* 标题 */}
          <div className="detail-title">{props.title}</div>
          {/* tag */}
          <div className="detail-tag">
            <span>
              <Icon type="calendar" />{" "}
              {dayjs(props.add_time).format("YYYY-MM-DD HH:mm:ss")}
            </span>
            <span>
              <Icon type="folder" /> {props.type_name}
            </span>
            <span>
              <Icon type="fire" /> {props.view_count}
            </span>
            <span>
              <Icon type="user" />
              {props.user_name}
            </span>
          </div>
          <Vditor mdContent={props.article_content} />
        </Col>
        <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
ArticleDetail.getInitialProps = async (context) => {
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    Article.detail({ id: id }).then((res) => {
      resolve(res.data);
    });
  });
  return await promise;
};
export default ArticleDetail;
