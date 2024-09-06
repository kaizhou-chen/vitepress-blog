import { defineConfig } from 'vitepress'
import { getSidebar } from './utils/sidebar'

const getDefaultSidebar = () => {
  return [
    {
      text: '笔记',
      items: [
        { text: '开发工具', link: '/notes/' },
        { text: 'CSS 概览', link: '/notes/CSS概览' },
        ...getSidebar('JavaScript 基础', 'docs/javascript/JavaScript基础'),
        ...getSidebar('JavaScript 笔记', 'docs/javascript/JavaScript笔记'),
      ]
    },
    {
      text: 'React',
      items: [
        { text: '概览', link: '/react/' },
        ...getSidebar('React', 'docs/react/React'),
      ]
    },
    {
      text: 'Vue',
      items: [
        { text: '概览', link: '/vue/' },
        ...getSidebar('Vue 2', 'docs/vue/Vue2'),
        ...getSidebar('Vue 3 基础', 'docs/vue/Vue3基础'),
        ...getSidebar('Vue 3 组件', 'docs/vue/Vue3高级'),
        ...getSidebar('Vite', 'docs/vue/Vite'),
      ]
    },
    {
      text: '移动端',
      items: [
        { text: '概览', link: '/mobile/' },
        ...getSidebar('uni-app', 'docs/mobile/uni-app'),
      ]
    },
    {
      text: '其他',
      items: [
        { text: '部署到 github', link: '/notes/部署到github' },
        { text: 'VitePress 笔记', link: '/notes/VitePress' }
      ]
    }
  ]
}

const defaultSidebar = getDefaultSidebar()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kaizhou Chen 前端笔记",
  description: "Kaizhou Chen 的个人博客",

  base: '/vitepress-blog/',
  ignoreDeadLinks: true,

  markdown: {
    theme: {
      light: 'github-dark',
      dark: 'github-dark'
    }
  },
  
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    outline: [2, 4], // 大纲中显示的标题级别
    
    // 顶部导航栏
    nav: [
      {
        text: '笔记',
        items: [
          {
            text: '基础',
            items: [
              { text: '开发工具', link: '/notes' },
              { text: 'JavaScript', link: '/javascript/JavaScript基础/01.内置对象/03.Promise' },
              { text: 'CSS 笔记', link: 'https://kaizhou-chen.github.io/vue3-example/#/notes/css' },
            ]
          },
          {
            text: '核心',
            items: [
              { text: 'Vue 笔记', link: '/vue/' },
              { text: 'React 笔记', link: '/react/React/2.React_基础/01.React_Hooks' },
              { text: '移动端 笔记', link: '/mobile/' },
            ]
          },
        ]
      },
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
      '/javascript/': [ ...defaultSidebar ],
      '/vue/': [ ...defaultSidebar ],
      '/react/': [ ...defaultSidebar ],
      '/mobile/': [ ...defaultSidebar ],
      '/notes/': [ ...defaultSidebar ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kaizhou-chen/vitepress-blog' }
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
