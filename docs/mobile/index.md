## 我的项目

| 微信小程序                                                   | uni-app + Vue | taro + React |
| ------------------------------------------------------------ | ------------- | ------------ |
| 日历 + 备忘录                                                | 商城          | 商城         |
| <img src="../assets/images/微信小程序/小程序码.jpg" alt="小程序码" width="120px" /> |               |              |



## 1、通过CSS变量实现动态高度

### 获取元素高度

使用微信提供的 `createSelectorQuery` 函数

```js
const query = uni.createSelectorQuery()
query.select('.navbar').boundingClientRect()
query.exec((res) => {
  const queryHeight = res[0].height // 获取元素的高度
})
```

### 使用CSS变量

- 父组件

计算实际高度，并将高度赋值给CSS变量

```html
<view :style="{ '--height': height }"></view>

<script setup lang="ts">
  import { ref } from 'vue'
  
  const height = ref('0px')
</script>
```

- 子组件

在样式里使用CSS变量，从而实现动态高度

```css
.container {
  height: var(--height);
}
```



## 2、图片懒加载

### 浏览器

#### img 标签 loading="lazy"

现代浏览器本身就支持图片懒加载，可以设置 img 标签的 loading 属性为 lazy

```html
<img src="" loading="lazy"/>
```

#### IntersectionObserver

::: code-group

```js [js]
let img = document.getElementsByTagName("img");
 
const observer = new IntersectionObserver(changes => {
  //changes 是被观察的元素集合
  for(let i = 0, len = changes.length; i < len; i++) {
    let change = changes[i];
    // 通过这个属性判断是否在视口中
    if(change.intersectionRatio > 0 || change.isIntersecting) {
      const imgElement = change.target;
      imgElement.src = imgElement.getAttribute("data-src");
      observer.unobserve(imgElement);
    }
  }
})

Array.from(img).forEach(item => {
  observer.observe(item)
});
```

```html [html]
<img src="default.jpg" data-src="http://www.xxx.com/target.jpg" />
```

:::

### 微信小程序

#### wx.createIntersectionObserver

```js
const instance = getCurrentInstance()

const observer = uni.createIntersectionObserver(instance).relativeToViewport()
observer.observe('.music-img', (res) => {
  if (res.intersectionRatio > 0) {
    imageSrc.value = src.value
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
```

