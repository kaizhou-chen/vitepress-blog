# VitePress 笔记


## 代码高亮


### 代码行高亮

开启行号

> 直接在代码块类型的后面添加 `:line-numbers` 即表示开启行号

代码行高亮

> 语法格式 ： 在 :line-numbers 之后添加 {xxx} 即可
>
> 指定单行 ： `{5}` : 表示底行高亮
>
> 指定多行：`{2-5}` : 表示 第2到第5行 高亮
>
> 指定多个单行 ：`{2,3,8}` : 表示 第2第3第8行 高亮
>
> 单行与多行混合 ：`{2,3,6-8}` : 表示 第2第3 第6到第8行 高亮


`js:line-numbers {7,9-11}`


```js:line-numbers {7,9-11}
import { ref, onMounted } from 'vue'

const props = defineProps<{
  msg: string
}>()

const count = ref(0)

onMounted(() => {
  console.log('mounted')
})
```

### 代码删除/新增标记


> 基本语法 ：
>
> 删除标注 ：`// [!code --]`
>
> 新增标注 ：`// [!code ++]`


`console.log('mounted') // [!code --]`


```js:line-numbers
import { ref, onMounted } from 'vue'

const props = defineProps<{
  msg: string
}>()

const count = ref(0)

onMounted(() => {
  console.log('mounted') // [!code --]
  console.log(props.msg) // [!code ++]
})
```


### 代码错误/警告标记

> 基本语法 ：
>
> 错误标注 ：`// [!code error]`
>
> 警告标注 ：`// [!code warning]`


`console.log('mounted') // [!code error]`


```js:line-numbers
import { ref, onMounted } from 'vue'

const props = defineProps<{
  msg: string
}>()

const count = ref(0)

onMounted(() => {
  console.log('mounted') // [!code error]
  console.log(props.msg) // [!code warning]
})
```


## 代码组

用页签的形式将不同的代码块分开展示。

### 代码组的语法格式

`::: code-group`

```markdown
::: code-group

```js [页签名称]
  function test() {
    console.log('test')
  }
``

```html [页签名称]
  <div>test</div>
``

:::
```

### 代码组示例

::: code-group

```js [JavaScript]
  function test() {
    console.log('test')
  }
```

```html [HTML]
  <div class="wrap">test</div>
```

```css [CSS]
  .wrap {
    background-color: #ccc;
  }
```

:::


