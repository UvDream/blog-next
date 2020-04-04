import { Avatar, Divider, Tooltip } from "antd";
import Link from "next/link";
import { Color } from "../config/env";
import "../static/style/components/author.less";
const Author = () => {
  return (
    <div
      className="author common-box"
      style={{ backgroundColor: Color.bgColor, color: Color.textColor }}
    >
      <div className="author-avatar">
        <Avatar
          size={100}
          src="http://118.25.110.93:81/images/avatar.jpeg"
          alt="头像"
        />
      </div>
      <div className="author-introduction">
        让技术产生价值!
        <Divider
          style={{ backgroundColor: Color.bgColor, color: Color.textColor }}
        >
          社交账号
        </Divider>
        <Link href="https://github.com/UvDream">
          <a>
            <Tooltip title="github:UvDream">
              <Avatar size={28} icon="github" />
            </Tooltip>
          </a>
        </Link>
        &#x3000;
        <Tooltip title="qq:913906565">
          <Avatar size={28} icon="qq" />
        </Tooltip>
        &#x3000;
        <Tooltip title="wx:wzj913906565">
          <Avatar size={28} icon="wechat" />
        </Tooltip>
      </div>
    </div>
  );
};
export default Author;
