# Taro 基础



## 项目初始化

```bash
npx @tarojs/cli init 项目名称
```



### 目录结构

```
├── config                项目编译配置目录
|   └── index.ts          配置路径别名@ alias 【相当于 vite.config.ts】
├── src
|   ├── pages
|   |   └── index
|   ├── app.ts            项目入口文件
|   ├── app.scss      
|   └── app.config.ts      项目入口配置  【相当于 pages.json】
├── package.json
├── project.config.json   微信小程序项目配置 project.config.json ，配置 appid
└── tsconfig.json          
```



#### 配置路径别名@

config / index.ts

```js
alias: {
  '@': path.resolve('./src'),
  '@/types': path.resolve('./types')
},
```



tsconfig.json

```js
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/types/*": ["./types/*"]
    }
  }
}
```



### 快速创建新页面

使用如下命令，快速创建新页面

```
taro create --name [页面名称] 
```



## 核心功能

### 生命周期

|              | 生命周期                               | Taro       |
| ------------ | -------------------------------------- | ---------- |
| 应用生命周期 | onLaunch: 在应用程序第一次启动时触发   | useLaunch  |
|              | onError: 应用程序发生错误时触发        | useError   |
| 页面生命周期 | onLoad: 页面被加载，可以进行数据初始化 | useLoad    |
|              | onReady: 页面加载完毕，可以访问DOM     | useReady   |
|              | onShow: 页面被展示时触发 | useDidShow |
|              | onHide: 页面被隐藏时触发 | useDidHide           |
|              | onUnload: 页面被销毁时触发 | useUnload  |

### 自定义导航栏

#### 安全区域

```js
const { safeArea } = Taro.getSystemInfoSync()

return (
  <View style={{ paddingTop: safeArea?.top + 'px'}}>
  </View>
)
```

### 
