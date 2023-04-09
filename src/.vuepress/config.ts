import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "曦寒官方文档",
      description: "曦寒，元宇宙，个人知识产权，新型全场景应用软件",
    },
  },
  theme,
});
