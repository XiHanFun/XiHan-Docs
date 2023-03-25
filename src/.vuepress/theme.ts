import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar.js";

export default hopeTheme(
  {
    hostname: "https://docs.xihan.fun",

    author: {
      name: "ZhaiFanhua",
      url: "https://www.zhaifamhua.com",
    },

    favicon: "favicon.ico",

    iconAssets: "iconfont",

    logo: "/logo.svg",

    repo: "XiHanFun/XiHan.Docs",
    docsRepo: "XiHanFun/XiHan.Docs",
    docsDir: "src",

    copyright: "MIT Licensed | Copyright ©2022 ZhaiFanhua All Rights Reserved.",
    displayFooter: true,

    pageInfo: ["ReadingTime", "Category", "Tag"],

    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },

    fullscreen: true,

    locales: {
      "/": {
        navbar: Navbar,
        footer:
          "碧落降恩承淑颜，共挚崎缘挽曦寒。迁般故事终成忆，谨此葳蕤换思短。",
        displayFooter: true,
        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      },
    },

    plugins: {
      comment: {
        provider: "Giscus",
        repo: "XiHanFun/XiHan.Docs.Discussions",
        repoId: "R_kgDOIpVHrA",
        category: "Announcements",
        categoryId: "DIC_kwDOIpVHrM4CTKQR",
        mapping: "pathname",
        lazyLoading: true,
      },

      feed: {
        atom: true,
        json: true,
        rss: true,
      },

      copyright: true,

      mdEnhance: {
        align: true,
        attrs: true,
        chart: true,
        codetabs: true,
        demo: true,
        echarts: true,
        figure: true,
        flowchart: true,
        gfm: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        katex: true,
        mark: true,
        mermaid: true,
        playground: {
          presets: ["ts", "vue"],
        },
        presentation: {
          plugins: ["highlight", "math", "search", "notes", "zoom"],
        },
        stylize: [
          {
            matcher: "Recommended",
            replacer: ({ tag }) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommended",
                };
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
        vuePlayground: true,
      },

      pwa: {
        favicon: "/favicon.ico",
        cacheHTML: true,
        cachePic: true,
        appendBase: true,
        apple: {
          icon: "/logo.png",
          statusBarColor: "black",
        },
        msTile: {
          image: "/logo.png",
          color: "#ffffff",
        },
        manifest: {
          icons: [
            {
              src: "/logo.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/logo.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/logo.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/logo.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "docs",
              short_name: "docs",
              url: "/docs/",
              icons: [
                {
                  src: "/logo.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
            },
          ],
        },
      },
    },
  },
  false
);
