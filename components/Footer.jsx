import { Avatar } from "antd";
import Link from "next/link";
import { Color } from "../config/env";

import "../static/style/components/footer.less";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{ backgroundColor: Color.otherColor, color: Color.textColor }}
    >
      {/* <div>By wangzhongjie</div> */}
      <div style={{ marginTop: "1rem" }}>
        <Link href="https://github.com/UvDream">
          <a>
            <Avatar size={28} icon="github" />
          </a>
        </Link>
      </div>
      <div>系统由Golang+React+Ant Design驱动 By wangzhongjie</div>
    </div>
  );
};
export default Footer;
