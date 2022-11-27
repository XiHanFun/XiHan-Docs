import { defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: '摘繁华博客官方文档',
    description: '摘繁华博客官方文档',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }]
    ],
    plugins: [
        docsearchPlugin({
            // 配置项
        }),
    ],
})