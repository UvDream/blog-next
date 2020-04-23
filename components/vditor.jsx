import React, { Component } from "react";
import Vditor from "vditor";
import "../static/style/components/vditor.css";
import "../static/style/components/vditor.less";
class vditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "#  11",
    };
  }
  componentDidMount() {
    Vditor.preview(document.getElementById("htmlView"), this.props.mdContent, {
      speech: {
        enable: true,
      },
      anchor: true,
      hljs: {
        enable: true,
        lineNumber: true,
        style: "native",
      },
      markdown: {
        // toc: true
      },
      parse: function (element) {
        console.log(element);
      },
    });
  }
  render() {
    return <div id="htmlView" className="htmlView"></div>;
  }
}

export default vditor;
