/*
 * @Author: wangzhongjie
 * @Date: 2019-10-09 16:23:07
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-23 15:04:10
 * @Description:url
 * @Email: UvDream@163.com
 */
import dayjs from "dayjs";
import { version } from '../package.json';
let baseUrl = "",adminUrl="",Color={
  bgColor:"#000",textColor:"#fff",otherColor:"#000"
};
if (process.env.NODE_ENV == "development") {
   baseUrl = `http://127.0.0.1:8000`; //开发环境地址
  // baseUrl = `https://www.uvdream.cn/api/`; //开发环境地址
} else if (process.env.NODE_ENV == "production") {
  baseUrl = `https://www.uvdream.cn/api/`; //生产环境地址
  adminUrl=`https://www.uvdream.cn:4200`
}
// 暗黑主题
if(dayjs().hour()<18 ){
  Color.bgColor="#fff" ,Color.textColor="#000",Color.otherColor="#F5F5F5"
}else{
  Color.bgColor="#000" ,Color.textColor="#fff",Color.otherColor="#000"
}

export { baseUrl, version,adminUrl,Color};
