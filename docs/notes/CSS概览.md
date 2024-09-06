# CSS 概览



## 1、响应式布局

响应式布局的核心思想是适应性，即网页内容可以根据用户所使用设备的屏幕大小、分辨率自动调整展示效果。

### 基本原理

- ‌**适应性**‌：网页内容可以根据用户所使用的设备屏幕大小和分辨率自动调整展示效果。
- ‌**‌流式布局**‌：使用相对长度单位（如百分比）代替绝对长度单位（如像素），使页面元素能根据屏幕宽度自由调整。
- ‌**‌弹性布局（Flex）**‌：专为布局设计的CSS模块，能够让容器空间的分配和子元素的排列更加简便和高效。
- ‌**‌网格布局（Grid）**‌：提供一个强大的二维布局系统，可以同时控制行和列的布局。

### 媒体查询

`@media screen` 屏幕尺寸

- width：viewport的宽度
- height：viewport的高度
- aspect-ratio：viewport的宽高比
- orientation：viewport的旋转方向

```css
/* 宽度小于 700px  */
@media screen and (max-width:699px) {
	.box {
		background-color: green;
	}
}

/* 宽度介于 700px - 1200px  */
@media screen and (min-width:700px) and (max-width:1200px) {
	.box {
		background-color: red;
	}
}
 
/* 宽度大于 1200px  */
@media screen and (min-width:1201px) {
	.box {
		background-color: blue;
	}
}
```



### 弹性布局 Flex

```css
display: flex;
```

#### 容器属性

以下 6 个属性设置在容器上：

- flex-direction：决定主轴的方向。
  - row（默认值）：主轴为水平方向，起点在左端。
  - column：主轴为垂直方向，起点在上沿。
- flex-wrap：如果一条轴线排不下，如何换行。
  - nowrap（默认）：不换行。
  - wrap：换行，第一行在上方。
- flex-flow：flex-direction 属性和 flex-wrap 属性的简写属性。
- justify-content：定义项目在主轴上的对齐方式。
  - flex-start（默认值）：左对齐
  - flex-end：右对齐
  - center： 居中
  - space-between：两端对齐，项目之间的间隔都相等。
  - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
  - space-evenly：项目与项目之间，项目与边框之间的间隔都相等。
- align-items：定义项目在交叉轴上的对齐方式。
- align-content：定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

#### item属性

以下6个属性设置在项目上。

- order：定义项目的排列顺序。数值越小，排列越靠前，默认为 0。
- flex-grow：定义项目的 **放大比例**，默认为 0，即如果存在剩余空间，也不放大。
- flex-shrink：定义了项目的 **缩小比例**，默认为 1，即如果空间不足，该项目将缩小。
- flex-basis：定义了在分配多余空间之前，项目占据的主轴空间（main size）。它的默认值为 auto，即项目的本来大小。
- flex： flex-grow 、 flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto 。后两个属性可选。
- align-self：允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto 。



### 网格布局 Grid

```css
display: grid;
```

#### 容器属性

- grid-gap：单元格的间距
  - `grid-gap: 10px;`

- grid-template-columns：定义列的宽度
  - `grid-template-columns: repeat(5, 1fr);`  每行 5 列，宽度自适应
- grid-template-rows：定义行的高度 【显式单元格】
  - `grid-template-rows: 100px;` 定义一行的高度
- grid-auto-rows：定义行的高度【隐式单元格】
  - `grid-auto-rows: 100px;` 不在布局中的，为隐式单元格。多行的 Grid，第一行是显式单元格，其他行是隐式单元格
- grid-template-areas：定义区域
```css
  grid-template-areas: 
  	'A A B'
  	'C D B'
  	'C E E';
```


#### item属性

- 合并单元格
  - `grid-column: 1 / 3;` 列的起始位置，基于轴线
  - `grid-row: 1 / 3;` 行的起始位置

- 指定自己的区域
  - `grid-area: A;`  与 grid-template-areas 里对应的区域



### 相对单位

**rem / em**

- rem：相对于根元素（即html元素）的字体大小。

- em：相对于当前元素的字体大小。

  > 如果当前元素没有设置字体大小，则取父元素的字体大小。

**vw / vh**

- vw：视口宽度的百分比。

- vh：视口高度的百分比。

**vmin / vmax**

- vmin：视口宽度和高度中较小的那个的百分比。

- vmax：视口宽度和高度中较大的那个的百分比。

**%**

- %：相对于父元素的百分比



### 动态字体大小

根据屏幕的尺寸，在根节点上设置不同的字体大小。

其他地方使用 rem，设置相对的字体大小【相对于根节点的字体大小】

```css
@media screen and (min-width: 700px) {
	html{
		font-size: 14px;
	}
}
 
@media screen and (min-width: 960px) {
	html{
		font-size: 18px;
	}
}
 
div {
  font-size: 2rem;  /** 实际的值为：2 * 14px = 28px */
  background-color: red;
}
```



## 2、CSS 变量

CSS 变量可以继承，把变量定义在 **:root** 或 html 上，则页面内所有的元素都可以使用这些变量

**主题切换**，可以通过CSS 变量来实现

```css
/** 定义变量：--变量名 */
--text-color: #fff;

/** 使用变量：var函数 */
color: var(--text-color);
```

在 js 里定义 CSS 变量

```js
div.style.setProperty('--text-color', '#fff');
```



## 3、CSS 动画

### 过渡动画 transition

使用过渡动画的元素，需要设置过渡时间。在鼠标悬浮时，修改样式的值，来实现动画效果。

- transition：过渡时间
- transform：变形
  - scale：缩放
  - rotate：旋转
  - translate：平移
  - perspective：3D景深

```css
.box {
	transition: 1s;
	
	&:hover {
		transform: scale(1.2);
	}
}
```



### 关键帧 @keyframes

- @keyframes 创建关键帧
- animation 使用动画
  - animation-name：引用 @keyframes 的动画名称
  - animation-duration：一个动画周期的时间，比如 2s
  - animation-timing-function：动画曲线，属性值有：`linear` 、`ease`（默认值）、`ease-in` 、`ease-out` 和 `ease-in-out`
  - animation-iteration-count：动画播放次数，属性值可以为正整数或`infinite`（循环无限播放），默认为1，表示动画只执行一次。
  - animation-direction：动画方向，属性值有：`normal`（默认值）、alternate 正反交替、reverse 反向执行

```css
/** 1、基本设置 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
 
.element {
  animation: fadeIn 2s ease-in-out;
}

/** 2-1、设置多个时间点 */
@keyframes slideIn {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0); }
  100% { transform: translateX(100%); }
}

/** 2-2、正反交替、无限循环的动画 */
.slide-in {
  animation: slideIn 2s infinite alternate ease-in-out;
}
```



## 4、CSS 权重

### Selector Specificity (a, b, c)

**a)** ID 选择器

| ID 选择器 | 如： #app，权重为 (1, 0, 0) |
| --------- | --------------------------- |

**b)** class选择器、属性选择器、伪类

| class选择器 | 如： .logo，权重为 (0, 1, 0) |
| ----------- | ---------------------------- |
| 属性选择器  | 如： [type="text"]           |
| 伪类        | 如： :hover                  |

**c)**  标签选择器、伪元素

| 标签选择器 | 如： div，   权重为 (0, 0, 1) |
| ---------- | ----------------------------- |
| 伪元素     | 如： ::before 、::root        |

**!important**，加在样式属性值后，覆盖属性的其他值

**行内样式**，写在元素的 style 属性上，权重 大于 选择器



单个选择器的 Specificity 按照 **行内样式 > id选择器 > class选择器、属性选择器、伪类 > 元素选择器、伪元素** 的规律排序。
如果遇到组合选择器，则按其逻辑将其拆分为单个选择器后 **相加** 再进行判断。
如果选择器里包含了 **!important**，当选择器的权重 >= 其他选择器的权重时，会覆盖加了 !important 的属性
如果权重相等，则后面的样式会覆盖前面的样式

组合选择器，如：子选择器（>）、相邻选择器（+）、兄弟选择器（~），及 通用选择器（*），权重为 0



## 5、图片

### object-fit

### 背景图片

### clip-path



## 6、其他

### 定位

### 阴影

### 文本溢出

### box-sizing

### filter



## 7、Less



## 8、Sass



