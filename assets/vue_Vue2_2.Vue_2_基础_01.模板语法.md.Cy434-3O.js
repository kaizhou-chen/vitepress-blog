import{_ as i,c as t,a2 as a,o as n}from"./chunks/framework.QcI9UzYB.js";const e="/vitepress-blog/assets/Vue-2.CaQDJF_2.png",p="/vitepress-blog/assets/Vue-3.DK1GUgxN.png",c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/Vue2/2.Vue_2_基础/01.模板语法.md","filePath":"vue/Vue2/2.Vue_2_基础/01.模板语法.md"}'),l={name:"vue/Vue2/2.Vue_2_基础/01.模板语法.md"};function h(E,s,d,k,r,o){return n(),t("div",null,s[0]||(s[0]=[a(`<h2 id="模板语法" tabindex="-1">模板语法 <a class="header-anchor" href="#模板语法" aria-label="Permalink to &quot;模板语法&quot;">​</a></h2><div class="full-width-table"><table tabindex="0"><thead><tr><th>说明</th><th>属性</th><th>备注</th></tr></thead><tbody><tr><td>文本插值</td><td><strong><span>{</span>{ text }<span>}</span></strong></td><td></td></tr><tr><td></td><td><strong><span>{</span>{ message | capitalize }<span>}</span></strong></td><td>过滤器</td></tr><tr><td>绑定属性</td><td><strong>:title</strong></td><td></td></tr><tr><td>监听事件</td><td><strong>@click</strong></td><td></td></tr><tr><td></td><td><strong>@submit.prevent</strong></td><td>event.preventDefault()</td></tr><tr><td></td><td><strong>@click.stop.prevent</strong></td><td>event.stopPropagation()<br>event.preventDefault()</td></tr><tr><td></td><td><strong>@keyup.enter.native</strong></td><td>只有在 <code>key</code> 是 <code>Enter</code> 时触发</td></tr><tr><td>表单输入绑定</td><td><strong>v-model</strong></td><td>指令</td></tr><tr><td>条件渲染</td><td><strong>v-if</strong></td><td></td></tr><tr><td></td><td><strong>v-show</strong></td><td></td></tr><tr><td>列表渲染</td><td><strong>v-for</strong></td><td>v-for=&quot;(item, index) in list&quot;</td></tr></tbody></table></div><h3 id="常用指令" tabindex="-1">常用指令 <a class="header-anchor" href="#常用指令" aria-label="Permalink to &quot;常用指令&quot;">​</a></h3><table tabindex="0"><thead><tr><th>指令</th><th></th></tr></thead><tbody><tr><td>v-show</td><td>不支持template语法<br>不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行显示或隐藏的切换</td></tr><tr><td>v-if</td><td>支持template语法<br><code>v-if</code> 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。<br><code>v-if</code> 也是<strong>惰性的</strong>：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。</td></tr><tr><td>区别</td><td><code>v-if</code> 有更高的切换开销，而 <code>v-show</code> 有更高的初始渲染开销。<br>因此，如果需要非常频繁地切换，则使用 <code>v-show</code> 较好；如果在运行时条件很少改变，则使用 <code>v-if</code> 较好。</td></tr><tr><td>v-else<br>v-else-if</td><td></td></tr><tr><td>v-for</td><td>key 唯一标识，vue 会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。<br>有相同父元素的子元素必须有<strong>独特的 key</strong>。重复的 key 会造成渲染错误。</td></tr><tr><td>v-html</td><td>渲染HTML标签</td></tr><tr><td>v-model</td><td>表单控件或者组件的双向绑定</td></tr><tr><td>v-bind</td><td>绑定属性，缩写是 <strong>：</strong></td></tr><tr><td>v-on</td><td>绑定时间，缩写是 <strong>@</strong></td></tr><tr><td>v-slot</td><td>插槽名称，缩写是 <strong>#</strong></td></tr></tbody></table><h3 id="v-model-自定义组件" tabindex="-1">v-model 自定义组件 <a class="header-anchor" href="#v-model-自定义组件" aria-label="Permalink to &quot;v-model 自定义组件&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">一个组件上的 v</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">model 默认会利用名为 value 的 prop 和名为 input 的事件。</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">也可以使用 model 属性来配置 prop 名和事件名</span></span></code></pre></div><h2 id="vue-2-vue-3-对照表" tabindex="-1">Vue 2 / Vue 3 对照表 <a class="header-anchor" href="#vue-2-vue-3-对照表" aria-label="Permalink to &quot;Vue 2 / Vue 3 对照表&quot;">​</a></h2><table tabindex="0"><thead><tr><th></th><th>Vue 2</th><th>Vue 3</th></tr></thead><tbody><tr><td><div style="white-space:nowrap;">基本语法</div></td><td><img src="`+e+'" alt=""></td><td><img src="'+p+`" alt=""></td></tr></tbody></table><h2 id="props-emit" tabindex="-1">props / $emit <a class="header-anchor" href="#props-emit" aria-label="Permalink to &quot;props / $emit&quot;">​</a></h2><table tabindex="0"><thead><tr><th></th><th>说明</th></tr></thead><tbody><tr><td>props</td><td>子组件里定义的 <strong>props</strong>，可以接收父组件传进来的参数</td></tr><tr><td>$emit</td><td>子组件通过 <strong>$emit</strong> 函数，触发自定义事件，执行父组件上的方法</td></tr></tbody></table><br><p><strong>父组件</strong></p><p>在 <code>components</code> 里注册组件 todo-item</p><p><code>:title</code> 将 title 的值传给子组件</p><p><code>@remove</code> 自定义事件</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">li</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">      is</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;todo-item&quot;</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">      v-for</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;(todo, index) in todos&quot;</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">      :key</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;todo.id&quot;</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">      :title</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;todo.title&quot;</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">      @remove</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;todos.splice(index, 1)&quot;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">    &gt;&lt;/</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt; </span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> TodoItem </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> &#39;@/components/TodoItem.vue&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">    &#39;todo-item&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">: TodoItem</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><br><p><strong>子组件</strong></p><p>在 <code>props</code> 里定义 title，接收父组件传入的值</p><p>通过 <code>$emit(&#39;remove&#39;)</code> 调用自定义事件</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">    {{ title }}</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;$emit(&#39;remove&#39;)&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;Remove&lt;/</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">    title: String</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><br><h2 id="计算属性-computed-watch" tabindex="-1">计算属性 computed / watch <a class="header-anchor" href="#计算属性-computed-watch" aria-label="Permalink to &quot;计算属性 computed / watch&quot;">​</a></h2><p>计算属性 VS 方法</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">计算属性有缓存，如果计算属性依赖的数据没有变化，则计算属性会返回之前的计算结果，不会执行函数。</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">而方法，在每次重新渲染时，都会再次执行函数</span></span></code></pre></div><p>计算属性 VS watch</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">当一些数据需要随着其它数据变动而变动时，使用</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">\`计算属性\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">当需要在数据变化时执行异步操作或开销较大的操作时，使用</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">\`watch\`</span></span></code></pre></div><h2 id="混入-mixin" tabindex="-1">混入 mixin <a class="header-anchor" href="#混入-mixin" aria-label="Permalink to &quot;混入 mixin&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">混入，混入对象可以包含任意组件选项。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">选项合并：</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">) 同名钩子函数将被合并到一个数组里</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">   先调用混入对象的钩子，再调用组件自身的钩子</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">) 数据对象，methods、components 和 directives，将被合并</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">   如果键名冲突，则取组件的键值对</span></span></code></pre></div><h2 id="set" tabindex="-1">$set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;$set&quot;">​</a></h2><p>根据官方文档定义：<strong>如果在实例创建之后添加新的属性到实例上，它不会触发视图更新</strong>。</p><p>解决方法：使用 Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上，别名 $set</p><br><p>对象</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">$set</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(Object, key, value)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 有时你想向已有对象上添加一些属性，例如使用 Object.assign() 或 _.extend() 方法来添加属性。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 但是，添加到对象上的新属性不会触发更新。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在这种情况下可以创建一个新的对象，让它包含原对象的属性和新的属性：</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">.obj</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">({}, </span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">.obj, { a: </span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">, e: </span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> })</span></span></code></pre></div><p>数组</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">$set</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(Array, index, newValue)</span></span></code></pre></div><h2 id="双向绑定原理-mvvm-待补充" tabindex="-1">双向绑定原理 MVVM - 待补充 <a class="header-anchor" href="#双向绑定原理-mvvm-待补充" aria-label="Permalink to &quot;双向绑定原理 MVVM  - 待补充&quot;">​</a></h2><p><code>视图变化，更新数据</code> ---&gt; 事件监听</p><p><code>数据变化，更新视图</code> ---&gt; 数据劫持 / 发布订阅模式</p><p>数据劫持</p><p>Object.defineProperty (obj, prop, descriptor)</p><p>​ set 数据发生变化，通知所有订阅者</p><p>​ get 添加订阅者</p>`,44)]))}const y=i(l,[["render",h]]);export{c as __pageData,y as default};
