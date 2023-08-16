import { defineConfig } from "vitepress";

export default defineConfig({
  srcDir: "src",
  lang: "zh-CN",
  title: "曦寒官方文档",
  description: "新型全场景应用软件",
  head: [
    ["meta", { name: "author", content: "ZhaiFanhua" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "曦寒,曦寒懿,官方文档,全场景,应用软件,摘繁华,xihan, xihan docs",
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    socialLinks: [{ icon: "github", link: "https://github.com/XiHanFun" }],
    search: {
      provider: "local",
    },
    nav: [
      { text: "项目简介", link: "/guide/", activeMatch: "/guide/" },
      {
        text: "变更日志",
        link: "/guide/ChangeLog.md",
        activeMatch: "/guide/ChangeLog.md",
      },
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
            text: "后端",
            link: "https://api.xihan.fun",
          },
          {
            text: "前端",
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
                text: "曦寒懿社区",
                link: "https://github.com/XiHanFun",
              },
              {
                text: "官方文档",
                link: "https://github.com/XiHanFun/XiHan.Docs",
              },
              {
                text: "后端",
                link: "https://github.com/XiHanFun/XiHan.Framework",
              },
              {
                text: "前端",
                link: "https://github.com/XiHanFun/XiHan.Display",
              },
            ],
          },
          {
            text: "Gitee",
            items: [
              {
                text: "曦寒懿社区",
                link: "https://gitee.com/XiHanFun",
              },
              {
                text: "官方文档",
                link: "https://gitee.com/XiHanFun/XiHan.Docs",
              },
              {
                text: "后端",
                link: "https://gitee.com/XiHanFun/XiHan.Framework",
              },
              {
                text: "前端",
                link: "https://gitee.com/XiHanFun/XiHan.Display",
              },
            ],
          },
        ],
      },
    ],
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern: "https://github.com/XiHanFun/XiHan.Docs/tree/main/src/:path",
    },
    footer: {
      message:
        "Released under the <a href='http://license.coscl.org.cn/MulanPSL2' target='_blank'>MulanPSL2</a> License.",
      copyright:
        "Copyright ©2023 <a href='https://www.zhaifanhua.com' target='_blank'>ZhaiFanhua</a> All Rights Reserved.",
    },
  },
});
