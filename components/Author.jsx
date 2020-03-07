import { Avatar, Divider, Tooltip } from "antd";
import Link from "next/link";

import "../static/style/components/author.less";
const Author = () => {
  return (
    <div className="author common-box">
      <div className="author-avatar">
        <Avatar size={100} src="http://118.25.110.93/images/avatar" />
      </div>
      <div className="author-introduction">
        一个不专情前端的前端工程师
        <Divider>社交账号</Divider>
        <Link href="https://github.com/UvDream">
          <a>
            <Tooltip title="github:UvDream">
              <Avatar size={28} icon="github" className="account" />
            </Tooltip>
          </a>
        </Link>
        <Tooltip title="qq:913906565">
          <Avatar size={28} icon="qq" className="account" />
        </Tooltip>
        <Tooltip title="wx:wzj913906565">
          <Avatar size={28} icon="wechat" className="account" />
        </Tooltip>
      </div>
    </div>
  );
};
export default Author;
