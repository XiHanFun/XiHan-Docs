import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  "/",
  {
    text: "探索未知",
    children: [
      {
        text: "官方网站",
        link: "https://www.xihan.fun",
      },
      {
        text: "官方文档",
        link: "https://docs.xihan.fun",
      },
    ],
  },
  {
    text: "在线体验",
    children: [
      {
        text: "案例-所有功能",
        link: "https://demo.xihan.fun",
      },
      {
        text: "后端-接口文档",
        link: "https://api.xihan.fun",
      },
      {
        text: "前端-后台管理",
        link: "https://manage.xihan.fun",
      },
      {
        text: "前端-前台展示",
        link: "https://display.xihan.fun",
      },
    ],
  },
  {
    text: "代码仓库",
    children: [
      {
        text: "Github",
        children: [
          {
            text: "社区",
            link: "https://github.com/XiHanFun",
          },
          {
            text: "文档-官方文档",
            link: "https://github.com/XiHanFun/XiHan.Docs",
          },
          {
            text: "后端-应用接口",
            link: "https://github.com/XiHanFun/XiHan.Framework",
          },
          {
            text: "前端-后台管理",
            link: "https://github.com/XiHanFun/XiHan.Manage",
          },
          {
            text: "前端-前台展示",
            link: "https://github.com/XiHanFun/XiHan.Display",
          },
        ],
      },
      {
        text: "Gitee",
        children: [
          {
            text: "社区",
            link: "https://gitee.com/XiHanFun",
          },
          {
            text: "文档-官方文档",
            link: "https://gitee.com/XiHanFun/XiHan.Docs",
          },
          {
            text: "后端-应用接口",
            link: "https://gitee.com/XiHanFun/XiHan.Framework",
          },
          {
            text: "前端-后台管理",
            link: "https://gitee.com/XiHanFun/XiHan.Manage",
          },
          {
            text: "前端-前台展示",
            link: "https://gitee.com/XiHanFun/XiHan.Display",
          },
        ],
      },
    ],
  },
]);
