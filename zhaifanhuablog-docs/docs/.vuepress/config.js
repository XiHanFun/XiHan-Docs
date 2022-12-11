import { defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: '摘繁华博客官方文档',
    description: '摘繁华博客官方文档',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }]
    ],
    theme: defaultTheme({
        // 首页的路径
        home: '/',
        // 导航栏配置
        // NavbarItem 对象应该有一个 text 字段和一个 link 字段，还有一个可选的 activeMatch 字段。
        // NavbarGroup 对象应该有一个 text 字段和一个 children 字段。 children 字段同样是一个导航栏数组 。
        // 字符串应为目标页面文件的路径。它将会被转换为 NavbarItem 对象，将页面标题作为 text ，将页面路由路径作为 link 。
        navbar: [{
            text: '官方网站',
            link: 'https://www.blog.zhaifanhua.com',
        },
        {
            text: '官方文档',
            link: 'https://docs.blog.zhaifanhua.com',
        },
        {
            text: '更新日志',
            link: 'https://github.com/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework/blob/main/CHANGELOG.md',
        },
        {
            text: '在线体验',
            children: [{
                text: '所有功能',
                link: 'https://demo.blog.zhaifanhua.com',
            },
            {
                text: '后端-接口文档（仅只）',
                link: 'https://api.blog.zhaifanhua.com',
            },
            {
                text: '前端-后台管理（仅只）',
                link: 'https://manage.blog.zhaifanhua.com',
            },
            {
                text: '前端-前台展示（仅只）',
                link: 'https://display.blog.zhaifanhua.com',
            }]
        },
        {
            text: '代码仓库',
            children: [{
                text: 'Github',
                children: [{
                    text: '社区',
                    link: 'https://github.com/ZhaiFanhuaBlog',
                },
                {
                    text: '文档-官方文档',
                    link: 'https://github.com/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Docs',
                },
                {
                    text: '后端-应用接口',
                    link: 'https://github.com/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework',
                },
                {
                    text: '前端-后台管理',
                    link: 'https://github.com/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Manage',
                },
                {
                    text: '前端-前台展示',
                    link: 'https://github.com/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Display',
                }]
            },
            {
                text: 'Gitee',
                children: [{
                    text: '社区',
                    link: 'https://gitee.com/ZhaiFanhuaBlog',
                },
                {
                    text: '文档-官方文档',
                    link: 'https://gitee.com/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Docs',
                },
                {
                    text: '后端-应用接口',
                    link: 'https://gitee.com/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Framework',
                },
                {
                    text: '前端-后台管理',
                    link: 'https://gitee.com/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Manage',
                },
                {
                    text: '前端-前台展示',
                    link: 'https://gitee.com/ZhaiFanhuaBlog/ZhaiFanhuaBlog.Display',
                }]
            }],
        }]
    }),
    plugins: [
        docsearchPlugin({
            // 配置项
        }),
    ],
})