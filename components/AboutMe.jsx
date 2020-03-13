import React from "react";
import { Divider, Collapse } from "antd";
const { Panel } = Collapse;
const AboutMeDetail = () => {
  const text = "wenzi1";
  return (
    <div className="me">
      <Divider>个人介绍</Divider>
      <div style={{ paddingLeft: "2rem" }}>
        <div>姓名:汪中杰</div>
        <div>职业:前端工程师</div>
        <div>爱好:写代码,写前端代码,写后端代码,写app代码</div>
        <div>公司:中科曙光南京研究院(现)</div>
        <div>
          github:
          <a href="https://github.com/UvDream">UvDream</a>
        </div>
      </div>
      <Divider>个人经历</Divider>
      <div style={{ padding: "2rem 2rem" }}>
        <Collapse defaultActiveKey={["5"]}>
          <Panel header="2016.7-2016.10" key="1">
            <p>公司:上汽通用有限公司</p>
            <p>职位:前端工程师</p>
          </Panel>
          <Panel header="2016.11-2017.12" key="2">
            <p>公司:上海挺之军有限公司</p>
            <p>职位:前端工程师</p>
            <p>重大项目:上海市绿色账户...</p>
          </Panel>
          <Panel header="2017.12-2019.6" key="3">
            <p>公司:太平洋保险</p>
            <p>职位:前端leader</p>
            <p>重大项目:车险核心业务系统...</p>
          </Panel>
          <Panel header="2019.6-至今" key="4">
            <p>公司:中科曙光</p>
            <p>职位:前端leader</p>
            <p>重大项目:前后端分离新解决方案....</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};
export default AboutMeDetail;
