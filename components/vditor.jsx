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
    console.log("xxxxxxxxx");
    console.log(this.props);
    console.log(this.state.content);
    Vditor.preview(document.getElementById("htmlView"), this.props.mdContent, {
      speech: {
        enable: true,
      },
      anchor: true,
      hljs: {
        lineNumber: true,
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
