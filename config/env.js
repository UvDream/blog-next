/*
 * @Author: wangzhongjie
 * @Date: 2019-10-09 16:23:07
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-03-31 18:54:41
 * @Description:url
 * @Email: UvDream@163.com
 */
import dayjs from "dayjs";
let baseUrl = "",adminUrl="", imgUrl = "",Color={
  bgColor:"#000",textColor:"#fff",otherColor:"#000"
};
if (process.env.NODE_ENV == "development") {
   //baseUrl = `http://118.25.110.93:8000`; //开发环境地址
  baseUrl = `http://localhost:8000`; //开发环境地址
  imgUrl=`http://localhost:3001`
} else if (process.env.NODE_ENV == "production") {
  baseUrl = `http://118.25.110.93:8000`; //生产环境地址
  imgUrl=`http://118.25.110.93`
  adminUrl=`http://118.25.110.93:4200`
}
// 暗黑主题
if(dayjs().hour()>18 ){
  Color.bgColor="#fff" ,Color.textColor="#000",Color.otherColor="#F5F5F5"
}else{
  Color.bgColor="#000" ,Color.textColor="#fff",Color.otherColor="#000"
}
// 版本
let version = "0.8.0";
export { baseUrl, version,imgUrl,adminUrl,Color};
