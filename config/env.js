/*
 * @Author: wangzhongjie
 * @Date: 2019-10-09 16:23:07
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-06-19 10:33:44
 * @Description:url
 * @Email: UvDream@163.com
 */
import { version } from '../package.json';
let baseUrl = "",adminUrl="";
let iconfontVersion = ["1753589_lp9rqr3u89"];
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
if (process.env.NODE_ENV == "development") {
  // baseUrl = `http://127.0.0.1:8000`; //开发环境地址
   baseUrl = `https://www.uvdream.cn/api/`; //开发环境地址
} else if (process.env.NODE_ENV == "production") {
  baseUrl = `https://www.uvdream.cn/api/`; //生产环境地址
  adminUrl=`https://www.uvdream.cn:4200`
}

export { iconfontUrl, iconfontVersion,baseUrl, version,adminUrl};
