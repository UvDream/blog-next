/*
 * @Author: wangzhongjie
 * @Date: 2019-10-09 16:23:07
 * @LastEditors  : wangzhongjie
 * @LastEditTime : 2020-01-11 10:16:37
 * @Description:url
 * @Email: UvDream@163.com
 */

let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = `http://118.25.110.93:8000`; //开发环境地址
} else if (process.env.NODE_ENV == "production") {
  baseUrl = `http://118.25.110.93:8000`; //生产环境地址
}
// 版本
let version = "0.1.0";
export { baseUrl, version };
