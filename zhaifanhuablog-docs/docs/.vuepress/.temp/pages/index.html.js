export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"首页\",\"description\":\"一款基于 DotNet7 的博客项目，高效、快速、开源、免费。\",\"home\":true,\"heroText\":\"ZhaiFanhuaBlog\",\"heroHeight\":150,\"heroImage\":\"/images/logo.png\",\"heroAlt\":\"LOGO\",\"tagline\":\"高效快速 拥抱开源 用心创作 探索未知\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"/zh/guide/getting-started.html\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/guide/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"代码开源\",\"details\":\"所有代码开源在 GitHub 和 Gitee 上且处于积极维护状态，您也可以在上面提交您的问题或者参与代码贡献。\"},{\"title\":\"强力驱动\",\"details\":\"后端由 .NET7 驱动，前端由 Vue3 驱动，容器化、跨平台、云原生带来了持续的性能改进。\"},{\"title\":\"简洁至上\",\"details\":\"以 Markdown 为中心的项目结构，以最少的配置帮助你自定义站点和专注写作。\"}],\"footer\":\"Copyright ©2022 ZhaiFanhua All Rights Reserved.\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1670299768000,\"contributors\":[{\"name\":\"ZhaiFanhua\",\"email\":\"zhaifanhua@foxmail.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
