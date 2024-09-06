## 简介

基于 VitePress 搭建的个人博客，用于记录前端开发中的问题和笔记。

[我的博客](https://kaizhou-chen.github.io/vitepress-blog/)



## 创建项目

初始化项目

```bash
npx vitepress init
```

添加依赖

```bash
npm add -D vitepress
```

安装依赖

```bash
npm install
```

启动项目

```bash
npm run docs:dev
```



## 目录结构

- 首页 `index.md` 

- 配置文件 `config.mts` 

```
docs
├── .vitepress
│   └── config.mts
├── index.md
└── notes
    ├── 开发工具.md
```

## 代码块默认使用深色主题

### 修改配置

config.mts

```js
export default defineConfig({
  markdown: {
    theme: {
      light: 'github-dark',
      dark: 'github-dark'
    }
  },
})
```

### 自定义CSS

新建目录 .vitepress/theme，参考如下文档，配置 CSS 变量

[自定义CSS](https://vitepress.dev/zh/guide/extending-default-theme#customizing-css)


## 工具方法

- 侧边栏

docs / . vitepress / utils / `sidebar.js`

为指定文件夹，生成侧边栏

- 图片路径

test / `index.js`

将图片路径，调整为相对路径