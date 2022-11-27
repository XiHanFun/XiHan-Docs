<template><div><p><img src="https://img.shields.io/badge/license-MIT-blue.svg?longCache=true&amp;style=flat-square" alt="license-MIT"> <a href="https://www.codacy.com/gh/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework&amp;utm_campaign=Badge_Grade" target="_blank" rel="noopener noreferrer"><img src="https://app.codacy.com/project/badge/Grade/5045beecc88149cf8c52432086aeb06c" alt="Codacy Badge"><ExternalLinkIcon/></a></p>
<p><img src="https://img.shields.io/github/last-commit/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework.svg?style=flat-square" alt="last commit"> <img src="https://img.shields.io/github/downloads/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework/total?style=flat-square" alt="downloads"> <img src="https://img.shields.io/github/v/release/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework?style=flat-square" alt="release"> <img src="https://img.shields.io/github/commit-activity/y/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework?style=flat-square" alt="commit activity"> <img src="https://img.shields.io/github/issues/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework?style=flat-square" alt="issues"> <img src="https://img.shields.io/github/issues-closed-raw/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework?style=flat-square" alt="issues closed raw"> <img src="https://img.shields.io/github/forks/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework?style=flat-square" alt="forks"> <img src="https://img.shields.io/github/stars/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework?style=flat-square" alt="stars"> <img src="https://img.shields.io/github/watchers/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework?style=flat-square" alt="watchers"></p>
<p>这是基于 DotNet7 的博客项目，高效、快速、开源、免费。</p>
<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2>
<p>请参考部署文档： <a href="https://docs.blog.zhaifanhua.com" target="_blank" rel="noopener noreferrer">https://docs.blog.zhaifanhua.com<ExternalLinkIcon/></a></p>
<h2 id="所用框架" tabindex="-1"><a class="header-anchor" href="#所用框架" aria-hidden="true">#</a> 所用框架</h2>
<ul>
<li>DotNet7(CSharp);</li>
<li>WebApi;</li>
</ul>
<h3 id="框架模块" tabindex="-1"><a class="header-anchor" href="#框架模块" aria-hidden="true">#</a> 框架模块：</h3>
<ul>
<li>
<p>[x] 采用<code v-pre>仓储+服务+接口</code>的形式封装框架；</p>
</li>
<li>
<p>[x] 全面异步 async/await 开发；</p>
</li>
<li>
<p>[x] 国产数据库 ORM 组件 SqlSugar ；</p>
</li>
<li>
<p>[x] 支持自由切换多种数据库，MySql/SqlServer/Sqlite/Oracle/Postgresql/达梦/人大金仓；</p>
</li>
<li>
<p>[x] 项目启动，支持自动生成种子数据；</p>
</li>
<li>
<p>[ ] 五种日志记录，审计/异常/请求响应/服务操作/Sql 记录等；</p>
</li>
<li>
<p>[x] 搭配全套前端项目：</p>
<ul>
<li>
<p>后端：ZhaiFanhuaBlog.Framework；</p>
</li>
<li>
<p>前端：ZhaiFanhuaBlog.Manage（后台管理）、ZhaiFanhuaBlog.Display（前台展示）；</p>
</li>
<li>
<p>文档：ZhaiFanhuaBlog.Docs</p>
</li>
</ul>
</li>
<li>
<p>[ ] 统一集成 IdentityServer4 认证 ✨;</p>
</li>
</ul>
<h3 id="组件模块" tabindex="-1"><a class="header-anchor" href="#组件模块" aria-hidden="true">#</a> 组件模块：</h3>
<ul>
<li>[x] 提供 Redis 做缓存处理；</li>
<li>[x] 使用 Swagger 做 API 文档；</li>
<li>[x] 使用 MiniProfiler 做接口性能分析 ✨；</li>
<li>[x] 使用 Automapper 处理对象映射；</li>
<li>[x] 使用自带高性能依赖注入容器，并提供批量服务注入 ✨；</li>
<li>[x] 支持 CORS 跨域；</li>
<li>[x] 封装 JWT 自定义策略授权；</li>
<li>[x] 使用 Serilog 日志框架，高性能日志记录；</li>
<li>[ ] 使用 SignalR 双工通讯 ✨；</li>
<li>[ ] 添加 IpRateLimiting 做 API 限流处理;</li>
<li>[ ] 使用 Quartz 做任务调度;</li>
<li>[x] 支持 数据库<code v-pre>读写分离</code>和多库操作 ✨;</li>
<li>[ ] 新增 Redis 消息队列 ✨;</li>
<li>[ ] 新增 RabbitMQ 消息队列 ✨;</li>
<li>[ ] 新增 EventBus 事件总线 ✨;</li>
<li>[ ] 新增 ES 搜索配置;</li>
</ul>
<h3 id="微服务模块" tabindex="-1"><a class="header-anchor" href="#微服务模块" aria-hidden="true">#</a> 微服务模块：</h3>
<ul>
<li>[x] 可配合 Docker 实现容器化；</li>
<li>[x] 可配合 Nginx 实现负载均衡；</li>
<li>[ ] 可配合 Ids4 实现认证中心；</li>
</ul>
<h2 id="项目相关" tabindex="-1"><a class="header-anchor" href="#项目相关" aria-hidden="true">#</a> 项目相关</h2>
<p>贡献代码：<RouterLink to="/CONTRIBUTING.html">贡献代码</RouterLink></p>
<p>更新沿程：<RouterLink to="/CHANGELOG.html">更新沿程</RouterLink></p>
<p>启动：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>dotnet /home/web/zhaifanhua.com/blog/ZhaiFanhuaBlog.WebApi.dll --environment=Production --urls=http://*:9708 --ip=127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="status" tabindex="-1"><a class="header-anchor" href="#status" aria-hidden="true">#</a> Status</h2>
<p><img src="https://repobeats.axiom.co/api/embed/6e6dcd83875e06131527cf7e55007e5f72fd1860.svg" alt="Status"></p>
<h2 id="star-history" tabindex="-1"><a class="header-anchor" href="#star-history" aria-hidden="true">#</a> Star History</h2>
<p><img src="https://api.star-history.com/svg?repos=ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework&amp;type=Date" alt="Star History"></p>
</div></template>


