import React, { Component } from "react";
import dynamic from "next/dynamic";
const Vditor = dynamic(import("../components/vditor"), {
  ssr: false,
});

// const Vditor = () => import(/* webpackChunkName: "index" */ "vditor");

class MdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "# 标题1",
    };
  }

  componentDidMount() {
    console.log(this.state.content);
  }
  componentDidUpdate(prevProps) {
    console.log("测试111");
    console.log(prevProps);
    if (prevProps.mdContent !== this.state.content) {
      this.setState({
        content: prevProps.mdContent,
      });
    }
    console.log(this.state.content);
    // Vditor.preview(document.getElementById("htmlView"), this.state.content, {
    //   speech: {
    //     enable: true,
    //   },
    //   anchor: true,
    //   hljs: {
    //     lineNumber: true,
    //   },
    //   markdown: {
    //     // toc: true
    //   },
    //   parse: function (element) {
    //     console.log(element);
    //   },
    // });
  }
  render() {
    return (
      <div>
        11
        <div id="htmlView"></div>
        <Vditor />
        22
      </div>
    );
  }
}

export default MdPage;
