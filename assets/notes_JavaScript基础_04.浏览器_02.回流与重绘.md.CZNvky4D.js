import{_ as a,c as e,o as n,a4 as s}from"./chunks/framework.CAy_Deu4.js";const b=JSON.parse('{"title":"回流与重绘","description":"","frontmatter":{},"headers":[],"relativePath":"notes/JavaScript基础/04.浏览器/02.回流与重绘.md","filePath":"notes/JavaScript基础/04.浏览器/02.回流与重绘.md"}'),l={name:"notes/JavaScript基础/04.浏览器/02.回流与重绘.md"},i=s(`<h1 id="回流与重绘" tabindex="-1">回流与重绘 <a class="header-anchor" href="#回流与重绘" aria-label="Permalink to &quot;回流与重绘&quot;">​</a></h1><h2 id="回流" tabindex="-1">回流 <a class="header-anchor" href="#回流" aria-label="Permalink to &quot;回流&quot;">​</a></h2><blockquote><p><strong>回流</strong>（Reflow）指的是当浏览器某个位置的布局发生了变化，浏览器就会重新从根部开始递归向下计算该节点及其子孙节点的布局，依次计算所有节点的几何尺寸和位置。</p></blockquote><p>在回流过程中，可能会增加一些渲染器，如文本字符串。DOM 树里的每个节点（内部）都会有 <code>reflow</code> 方法，一个节点的回流很有可能导致子节点，甚至父节点以及同级节点的回流。</p><p>回流后，浏览器会重新绘制受影响的部分到屏幕可视区域，该过程称为重绘。另外，DOM 变化不一定都会影响几何属性，比如改变一个元素的背景色不影响宽高，这种情况下只会发生重绘，代价较小。</p><p>回流几乎是无法避免的。现在界面上流行的一些效果，比如树状目录的折叠、展开（实质上是元素的显示与隐藏）等，都将引起浏览器的回流。鼠标滑过、点击等用户交互事件，只要这些行为引起了页面上某些元素的占位面积、定位方式、边距等属性的变化，都会引起它内部、周围甚至整个页面的重新渲染。通常我们都无法预估浏览器到底会回流哪一部分的代码，它们都彼此相互影响着。</p><h3 id="回流原因" tabindex="-1">回流原因 <a class="header-anchor" href="#回流原因" aria-label="Permalink to &quot;回流原因&quot;">​</a></h3><p>引发回流的根本原因：</p><ul><li><strong>Initial</strong>：网页初始化的时候</li><li><strong>Incremental</strong>：JavaScript 在操作 DOM 树时</li><li><strong>Resize</strong>：元素节点的尺寸改变</li><li><strong>StyleChange</strong>：样式属性发生变化</li><li><strong>Dirty</strong>：几个 Incremental 的 Reflow 发生在同一个元素的子树上</li></ul><h3 id="回流场景" tabindex="-1">回流场景 <a class="header-anchor" href="#回流场景" aria-label="Permalink to &quot;回流场景&quot;">​</a></h3><p>会导致产生回流的场景：</p><ul><li>网页初始化（Initial）</li><li>元素内容变化，如输入空间（Incremental）</li><li>通过脚本增加、删除和修改 DOM 节点（Incremental）</li><li>改变浏览器窗口大小（Resize）</li><li>计算 <code>offsetWidth</code> 和 <code>offsetHeight</code> 等（Resize）</li><li>设置 style 属性（StyleChange）</li><li>操作 class 属性（StyleChange）</li><li>样式表变动（StyleChange）</li><li>改变文字大小（StyleChange）</li><li>激活伪类，如 <code>:hover</code>（StyleChange）</li></ul><p>浏览器并不会在我们进行上述操作时立即进行回流，浏览器会积攥一批 <code>reflow</code> 后批量进行回流。</p><h4 id="立刻进行回流" tabindex="-1">立刻进行回流 <a class="header-anchor" href="#立刻进行回流" aria-label="Permalink to &quot;立刻进行回流&quot;">​</a></h4><p>不过有的操作会让浏览器 <strong>立刻进行回流</strong>，比如 窗口缩放**，**改变了页面默认的字体，或者说 <strong>获取以下这些值</strong>。</p><ul><li><code>offsetTop</code>、<code>offsetLeft</code>、<code>offsetWidth</code>、<code>offsetHeight</code></li><li><code>scrollTop</code>、<code>scrollLeft</code>、<code>scrollWidth</code>、<code>scrollHeight</code></li><li><code>clientTop</code>、<code>clientLeft</code>、<code>clientWidth</code>、<code>clientHeight</code></li><li>IE 中的 <code>getComputedStyle()</code> 和 <code>currentStyle</code></li></ul><h4 id="样式属性" tabindex="-1">样式属性 <a class="header-anchor" href="#样式属性" aria-label="Permalink to &quot;样式属性&quot;">​</a></h4><p>触发页面重新布局的样式属性：</p><ul><li>盒子模型相关属性</li><li>定位属性及浮动相关属性</li><li>改变节点内部文字结构的相关属性</li></ul><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>width             top             text-align</span></span>
<span class="line"><span>height            bottom          vertical-align</span></span>
<span class="line"><span>padding           left            line-height</span></span>
<span class="line"><span>margin            right           overflow</span></span>
<span class="line"><span>display           position        font-family</span></span>
<span class="line"><span>border            float           font-size</span></span>
<span class="line"><span>border-width      clear           white-space</span></span>
<span class="line"><span>min-height</span></span>
<span class="line"><span>min-width</span></span></code></pre></div><h2 id="重绘" tabindex="-1">重绘 <a class="header-anchor" href="#重绘" aria-label="Permalink to &quot;重绘&quot;">​</a></h2><blockquote><p>重绘（Repaint）遍历所有节点，<strong>检测节点的可见性、颜色、轮廓等可见的样式属性</strong>，然后根据检测的结果更新页面的响应部分。</p></blockquote><p>当渲染树中的一些元素需要更新一些不会改变元素布局的属性，比如只是影响元素的外观、风格、而不会影响布局的那些属性，这时候就只发生重绘。当然，页面首次加载也是要重绘一次的。</p><h3 id="重绘属性" tabindex="-1">重绘属性 <a class="header-anchor" href="#重绘属性" aria-label="Permalink to &quot;重绘属性&quot;">​</a></h3><p>只触发重绘的属性</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>color</span></span>
<span class="line"><span>border-style</span></span>
<span class="line"><span>border-radius</span></span>
<span class="line"><span>visibility</span></span>
<span class="line"><span>text-decoration</span></span>
<span class="line"><span>background</span></span>
<span class="line"><span>background-image</span></span>
<span class="line"><span>background-position</span></span>
<span class="line"><span>background-repeat</span></span>
<span class="line"><span>background-size</span></span>
<span class="line"><span>outline-color</span></span>
<span class="line"><span>outline</span></span>
<span class="line"><span>outline-style</span></span>
<span class="line"><span>outline-width</span></span>
<span class="line"><span>box-shadow</span></span></code></pre></div><p>参考文档</p><ul><li><a href="https://tsejx.github.io/javascript-guidebook/browser-object-model/browser-working-principle/paint" target="_blank" rel="noreferrer">https://tsejx.github.io/javascript-guidebook/browser-object-model/browser-working-principle/paint</a></li></ul>`,28),t=[i];function o(p,c,r,d,h,g){return n(),e("div",null,t)}const f=a(l,[["render",o]]);export{b as __pageData,f as default};
