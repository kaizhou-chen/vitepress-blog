import { defineConfig } from 'vitepress'
import { getSidebar } from './utils/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-blog/',
  ignoreDeadLinks: true,

  title: "Kaizhou Chen 前端笔记",
  description: "Kaizhou Chen 的个人博客",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 顶部导航栏
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '我的项目',
        items: [
          { text: 'Vue 3 + Element Plus', link: 'https://kaizhou-chen.github.io/vue3-example/' },
          { text: 'React + Ant Design', link: 'https://kaizhou-chen.github.io/react-example/' },
          { text: 'uni-app h5', link: 'https://kaizhou-chen.github.io/uniapp-example/' },
        ]
      }
    ],

    // 侧边栏
    sidebar: {
      '/notes/': [
        ...getSidebar('JavaScript 基础', 'docs/notes/JavaScript基础'),
        ...getSidebar('JavaScript 高级', 'docs/notes/JavaScript高级'),
        ...getSidebar('Vue 2', 'docs/notes/Vue2'),
        ...getSidebar('Vue 3 基础', 'docs/notes/Vue3基础'),
        ...getSidebar('Vue 3 高级', 'docs/notes/Vue3高级'),
        ...getSidebar('uni-app', 'docs/notes/uni-app'),
        ...getSidebar('React', 'docs/notes/React'),
        ...getSidebar('Vite', 'docs/notes/Vite'),

        // 其他菜单项
        { text: 'CSS 笔记', link: 'https://kaizhou-chen.github.io/vue3-example/#/notes/css' },
        { text: '部署到github', link: '/notes/部署到github' },
        { text: '开发工具', link: '/notes/开发工具' },
        { text: '面试问题', link: '/notes/面试问题' },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 支持搜索
    search: {
      provider: 'local'
    },

    // 中文内容
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outlineTitle: "当前页面",
    lastUpdatedText: "最近更新时间",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "目录",
    darkModeSwitchLabel: "深色模式",
  }
})
