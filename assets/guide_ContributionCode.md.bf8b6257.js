import{_ as a,o as e,c as l,V as s}from"./chunks/framework.98960eec.js";const _=JSON.parse('{"title":"贡献代码","description":"","frontmatter":{"title":"贡献代码","icon":"creative"},"headers":[],"relativePath":"guide/ContributionCode.md","filePath":"guide/ContributionCode.md"}'),n={name:"guide/ContributionCode.md"},t=s(`<h2 id="一、准备工作" tabindex="-1">一、准备工作 <a class="header-anchor" href="#一、准备工作" aria-label="Permalink to &quot;一、准备工作&quot;">​</a></h2><ul><li><p>安装 Git；</p></li><li><p>安装 Sourcetree，这个工具是 git 的一种图形化界面；</p></li><li><p>注意安装 git 的时候记得勾选将 git 所在目录添加到系统环境变量；</p></li><li><p>安装 Visual Studio 2022；</p></li><li><p>安装 Visual Studio 2022 的 CodeMaid 扩展插件，这个插件可以自动格式化代码；</p></li><li><p><code>若有新功能开发</code>，请添加文件头，如下为我的示例：</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#region &lt;&lt;版权版本注释&gt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// ----------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">// Copyright ©2022 ZhaiFanhua All Rights Reserved.</span></span>
<span class="line"><span style="color:#A6ACCD;">// Licensed under the MulanPSL2 License. See LICENSE in the project root for license information.</span></span>
<span class="line"><span style="color:#A6ACCD;">// FileName:SystemInfoHelper</span></span>
<span class="line"><span style="color:#A6ACCD;">// Guid:78a183f7-8c40-40af-a3f0-7e9bff93392b</span></span>
<span class="line"><span style="color:#A6ACCD;">// Author:zhaifanhua</span></span>
<span class="line"><span style="color:#A6ACCD;">// Email:me@zhaifanhua.com</span></span>
<span class="line"><span style="color:#A6ACCD;">// CreatedTime:2022-05-08 下午 03:53:15</span></span>
<span class="line"><span style="color:#A6ACCD;">// ----------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#endregion &lt;&lt;版权版本注释&gt;&gt;</span></span></code></pre></div><h2 id="二、贡献代码" tabindex="-1">二、贡献代码 <a class="header-anchor" href="#二、贡献代码" aria-label="Permalink to &quot;二、贡献代码&quot;">​</a></h2><h3 id="_1-新建自己的分支-fork" tabindex="-1">1. 新建自己的分支（Fork） <a class="header-anchor" href="#_1-新建自己的分支-fork" aria-label="Permalink to &quot;1. 新建自己的分支（Fork）&quot;">​</a></h3><p>将本项目仓库 fork 到自己的 git 仓库中。</p><h3 id="_2-克隆-clone" tabindex="-1">2. 克隆（Clone） <a class="header-anchor" href="#_2-克隆-clone" aria-label="Permalink to &quot;2. 克隆（Clone）&quot;">​</a></h3><p>将已经 fork 的仓库 clone 到自己的本地 PC。</p><h3 id="_3-创建本地分支" tabindex="-1">3. 创建本地分支 <a class="header-anchor" href="#_3-创建本地分支" aria-label="Permalink to &quot;3. 创建本地分支&quot;">​</a></h3><p>如果想要在本项目上做自己的开发，最好创建属于自己的项目分支，如果是直接贡献代码，那么可以直接在 dev 分支上进行操作。</p><h3 id="_4-开发" tabindex="-1">4. 开发 <a class="header-anchor" href="#_4-开发" aria-label="Permalink to &quot;4. 开发&quot;">​</a></h3><ol><li>发现了一个小 Bug 并进行修改。</li><li>在打开的 Issues 中选择功能并进行开发。</li></ol><h3 id="_5-提交-commit" tabindex="-1">5. 提交（Commit） <a class="header-anchor" href="#_5-提交-commit" aria-label="Permalink to &quot;5. 提交（Commit）&quot;">​</a></h3><p>向本地仓库提交 Bug。</p><h3 id="_6-保持本地仓库最新" tabindex="-1">6. 保持本地仓库最新 <a class="header-anchor" href="#_6-保持本地仓库最新" aria-label="Permalink to &quot;6. 保持本地仓库最新&quot;">​</a></h3><p>在准备发起 Pull Request 之前，需要同步原仓库最新的代码，记得检查目前的项目是否是最新的版本。</p><h3 id="_7-推送到远程仓库-ppush" tabindex="-1">7. 推送到远程仓库（Ppush） <a class="header-anchor" href="#_7-推送到远程仓库-ppush" aria-label="Permalink to &quot;7. 推送到远程仓库（Ppush）&quot;">​</a></h3><p>push 到开发者自己的远程仓库中。</p><h3 id="_8-发起并完成合并请求-pull-request" tabindex="-1">8. 发起并完成合并请求（Pull Request） <a class="header-anchor" href="#_8-发起并完成合并请求-pull-request" aria-label="Permalink to &quot;8. 发起并完成合并请求（Pull Request）&quot;">​</a></h3><p>在 git 仓库中选择自己修改了的分支，点击 create pull request 按钮发起 pull request。</p><h2 id="三、提交代码的一些约定" tabindex="-1">三、提交代码的一些约定 <a class="header-anchor" href="#三、提交代码的一些约定" aria-label="Permalink to &quot;三、提交代码的一些约定&quot;">​</a></h2><p>发起请求成功后，本项目维护人就可以看到你提交的代码。pull request 如果被同意，你的代码就会被合并到仓库中。这样一次 pull request 就成功了。</p><p>至此，我们就完成了一次代码贡献的过程。</p>`,23),o=[t];function i(r,p,c,h,u,d){return e(),l("div",null,o)}const m=a(n,[["render",i]]);export{_ as __pageData,m as default};
