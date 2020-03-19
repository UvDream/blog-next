/*
 * @Author: wangzhongjie
 * @Date: 2019-10-09 16:23:07
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-03-19 20:27:24
 * @Description:url
 * @Email: UvDream@163.com
 */

let baseUrl = "";
let imgUrl = "";
if (process.env.NODE_ENV == "development") {
   baseUrl = `http://118.25.110.93:8000`; //开发环境地址
  //baseUrl = `http://localhost:8000`; //开发环境地址
  imgUrl=`http://localhost:3001`
} else if (process.env.NODE_ENV == "production") {
  baseUrl = `http://118.25.110.93:8000`; //生产环境地址
  imgUrl=`http://118.25.110.93`
}
// 版本
let version = "0.7.1";
export { baseUrl, version,imgUrl };
