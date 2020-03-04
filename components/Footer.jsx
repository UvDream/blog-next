import { Avatar } from "antd";
import Link from "next/link";

import "../static/style/components/footer.less";

const Footer = () => {
  return (
    <div className="footer">
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
