import React, { Component } from "react";
import Vditor from "vditor";
import "vditor/dist/index.css";
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
    return (
      <div>
        <div id="htmlView"></div>
      </div>
    );
  }
}

export default vditor;
