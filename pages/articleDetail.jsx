import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { Row, Col, Icon, Affix, BackTop } from "antd";
import Author from "../components/Author";
import Article from "../api/article/index";
import Tocify from "../components/tocify.tsx";
import Footer from "../components/Footer";
import marked from "marked";
import hljs from "highlight.js";
import dayjs from "dayjs";

import "../static/style/pages/theme.less";
import "../static/style/pages/article-detail.less";

const ArticleDetail = props => {
  const tocify = new Tocify();
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
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

  // renderer.code = (code, language, isEscaped) => {
  //   let hled = hljs.highlightAuto(code).value;
  //   return `<pre class="hljs" ><code class="${language}">${hled}</code></pre>`;
  // };

  let html = marked(props.article_content);

  return (
    <div className="detail">
      <BackTop />
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      <Row className="common-main" type="flex" justify="center">
        <Col className=" common-left" xs={24} sm={24} md={16} lg={18} xl={14}>
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
          {/* 内容 */}
          <div
            className="detail-content"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </Col>
        <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Affix offsetTop={60}>
            <div className="detail-nav common-box">
              <div className="detail-nav-title">文章目录</div>
              {/* <MarkNav className="article-menu" source={html} ordered={false} /> */}
              {tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
ArticleDetail.getInitialProps = async context => {
  let id = context.query.id;
  const promise = new Promise(resolve => {
    Article.detail({ id: id }).then(res => {
      console.log("获取文章");
      console.log(res);
      resolve(res.data);
    });
  });
  return await promise;
};
export default ArticleDetail;
