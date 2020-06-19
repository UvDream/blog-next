/*
 * @Author: wangzhongjie
 * @Date: 2020-05-14 09:27:49
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-14 09:47:12
 * @Description:初始化主题
 * @Email: UvDream@163.com
 */
import { lightTheme, darkTheme } from "./variable";
import cssVars from "css-vars-ponyfill";
export const initTheme = theme => {
  document.documentElement.setAttribute("data-theme", theme ? "light" : "dark");
  cssVars({
    watch: true, // 当添加，删除或修改其<link>或<style>元素的禁用或href属性时，ponyfill将自行调用
    variables: theme ? lightTheme : darkTheme, // variables 自定义属性名/值对的集合
    onlyLegacy: false // false  默认将css变量编译为浏览器识别的css样式  true 当浏览器不支持css变量的时候将css变量编译为识别的css
  });
};
