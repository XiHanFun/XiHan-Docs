import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "曦寒",
      description: "曦寒官方文档",
    },
  },
  theme,
});
