import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { Row, Col, Icon, Affix, message } from "antd";
import Author from "../components/Author";
import Article from "../api/article/index";
import Tocify from "../components/tocify.tsx";
import Footer from "../components/Footer";
import marked from "marked";
import hljs from "highlight.js";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import ChangeTheme from "../components/changeTheme";

const Vditor = dynamic(import("../components/vditor"), {
  ssr: false,
});
// import "../static/style/pages/theme.less";
import "../static/style/pages/article-detail.less";

const ArticleDetail = (props) => {
  useEffect(() => {
    let copyText = document.getElementsByClassName("copy");
    for (let i = 0; i < copyText.length; i++) {
      copyText[i].onclick = (e) => {
        //console.log(e.target);
        var oInput = document.createElement("textarea");
        oInput.value = e.target.children[0].innerHTML;
        document.body.appendChild(oInput);
        oInput.select();
        document.execCommand("Copy");
        oInput.className = "oInput";
        oInput.style.display = "none";
        message.success("复制代码成功!");
      };
    }
  }, []);

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
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  // 重写代码块
  renderer.code = (code, language, isEscaped) => {
    return (
      '<pre class="hljs" ><span  id="copy" class="copy">复制代码<span style="display: none;">' +
      code +
      '</span></span><code  class="${language}"  >' +
      hljs.highlightAuto(code).value +
      "</code></pre>"
    );
  };

  let html = marked(props.article_content);

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
          {/* 内容 */}
          {/* <div
            className="detail-content"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div> */}
          <Vditor mdContent={props.article_content} />
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
ArticleDetail.getInitialProps = async (context) => {
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    Article.detail({ id: id }).then((res) => {
      //console.log("获取文章");
      //console.log(res);
      resolve(res.data);
    });
  });
  return await promise;
};
export default ArticleDetail;
