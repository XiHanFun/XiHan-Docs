import { defineConfig } from "vitepress";

export default defineConfig({
  srcDir: "src",
  lang: "zh-CN",
  title: "曦寒官方文档",
  description: "打造个人知识产权的新型全场景应用软件",
  head: [
    ["meta", { name: "author", content: "ZhaiFanhua" }],
    [
      "meta",
      {
        name: "keywords",
        content: "xihan, xihan docs",
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.png" }],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/XiHanFun" }],
    search: {
      provider: "local",
    },
    nav: [
      { text: "项目简介", link: "/guide/", activeMatch: "/guide/" },
      {
        text: "探索未知",
        items: [
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
        items: [
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
        items: [
          {
            text: "Github",
            items: [
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
            items: [
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
    ],
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern: "https://github.com/XiHanFun/XiHan.Docs/tree/main/:path",
    },
    footer: {
      message:
        "碧落降恩承淑颜，共挚崎缘挽曦寒。迁般故事终成忆，谨此葳蕤换思短。",
      copyright:
        "MIT Licensed | Copyright ©2023 ZhaiFanhua All Rights Reserved.",
    },
  },
});
