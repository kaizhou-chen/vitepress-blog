import{_ as e,c as t,o as a,a4 as s}from"./chunks/framework.CAy_Deu4.js";const i="/vitepress-blog/assets/Object.defineProperty.B_ZwfMWl.png",d="/vitepress-blog/assets/Proxy.CyuEgBxz.png",n="/vitepress-blog/assets/nextTick_how.BvMrb4_B.png",y=JSON.parse('{"title":"面试问题","description":"","frontmatter":{},"headers":[],"relativePath":"notes/面试问题.md","filePath":"notes/面试问题.md"}'),o={name:"notes/面试问题.md"},r=s(`<h1 id="面试问题" tabindex="-1">面试问题 <a class="header-anchor" href="#面试问题" aria-label="Permalink to &quot;面试问题&quot;">​</a></h1><h2 id="_1、对-vue-的理解" tabindex="-1">1、对 Vue 的理解 <a class="header-anchor" href="#_1、对-vue-的理解" aria-label="Permalink to &quot;1、对 Vue 的理解&quot;">​</a></h2><h3 id="对spa-单页应用-的理解" tabindex="-1">对SPA (单页应用) 的理解 <a class="header-anchor" href="#对spa-单页应用-的理解" aria-label="Permalink to &quot;对SPA (单页应用) 的理解&quot;">​</a></h3><p>SPA（single-page application），翻译过来就是单页应用。通过动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验。</p><p>单页应用的缺点是，首次渲染速度相对较慢。</p><h4 id="首屏加载" tabindex="-1">首屏加载 <a class="header-anchor" href="#首屏加载" aria-label="Permalink to &quot;首屏加载&quot;">​</a></h4><p>常见的几种SPA首屏优化方式</p><ul><li><p>减小入口文件积</p><p>在<code>vue-router</code>配置路由的时候，采用动态加载路由的形式</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">routes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Blogs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ShowBlogs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    component: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./components/ShowBlogs.vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div></li><li><p>UI框架按需加载</p><p>在日常使用<code>UI</code>框架，例如<code>element-UI</code>、或者<code>antd</code>，我们经常性直接引用整个<code>UI</code>库。可以按需引用。</p></li><li><p>图片资源的压缩</p><p>对页面上使用到的<code>icon</code>，可以使用在线字体图标，或者将众多小图标合并到同一张图上，用以减轻<code>http</code>请求压力。</p></li><li><p>开启GZip压缩</p><p>打完包之后，可以用<code>gzip</code>做一下压缩。在服务器上也要做相应的配置，如果发送请求的浏览器支持<code>gzip</code>，就发送给它<code>gzip</code>格式的文件。</p></li></ul><h3 id="对-vue-的理解" tabindex="-1">对 Vue 的理解 <a class="header-anchor" href="#对-vue-的理解" aria-label="Permalink to &quot;对 Vue 的理解&quot;">​</a></h3><p>Vue 的核心特性是：数据驱动（MVVM）、组件化、指令系统。</p><p>组件化的优势：降低耦合度、支持复用、方便调试和维护</p><p>常用指令：条件渲染、列表渲染、属性绑定、事件绑定、双向数据绑定</p><h2 id="_2、vue-如何实现数据双向绑定" tabindex="-1">2、Vue 如何实现数据双向绑定 <a class="header-anchor" href="#_2、vue-如何实现数据双向绑定" aria-label="Permalink to &quot;2、Vue 如何实现数据双向绑定&quot;">​</a></h2><p>Vue 是通过<strong>数据劫持</strong>的方式来做数据绑定的。Vue 2 使用的核心方法是 <code>Object.defineProperty()</code>，Vue 3 使用的是代理 Proxy。</p><h3 id="数据劫持" tabindex="-1">数据劫持 <a class="header-anchor" href="#数据劫持" aria-label="Permalink to &quot;数据劫持&quot;">​</a></h3><table tabindex="0"><thead><tr><th>数据劫持</th><th>Vue 2</th><th>Vue 3</th></tr></thead><tbody><tr><td>核心方法</td><td>Object.defineProperty</td><td>Proxy</td></tr><tr><td>收集依赖</td><td>视图中会用到<code>data</code>中某<code>key</code>，这称为依赖<br>同⼀个<code>key</code>可能出现多次，每次都需要收集出来<br>用⼀个<code>Watcher</code>来维护它们</td><td><code>get</code> 读取属性时，将当前副作用函数添加到桶里</td></tr><tr><td><code>set</code> 设置属性后</td><td>通知所有的订阅者执行更新</td><td>把副作用函数从桶里取出并执行</td></tr></tbody></table><h3 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h3><table tabindex="0"><thead><tr><th></th><th>Object.defineProperty</th><th>Proxy</th></tr></thead><tbody><tr><td>拦截范围</td><td>只能拦截对象的<code>单个属性</code>操作<br>只能定义特定属性的 getter 和 setter</td><td>可以拦截对<code>对象的所有操作</code><br>包括属性访问、赋值、删除、函数调用等<br>可以使用get、set、deleteProperty等来拦截这些操作</td></tr><tr><td>动态属性</td><td>不可以处理动态属性<br>使用 <code>$set</code> 、<code>$delete</code></td><td>可以处理对象的动态添加和删除属性</td></tr><tr><td>性能</td><td>需要遍历所有属性<br>必须深层遍历嵌套的对象<br>会改变原对象，将原本的 value 变成了 setter 和 getter</td><td>不用遍历<br>可以在 get 里面递归调用 Proxy 并返回<br>不改变原对象，生成一个代理对象</td></tr><tr><td></td><td><img src="`+i+'" alt="Object.defineProperty"></td><td><img src="'+d+`" alt="Proxy"></td></tr></tbody></table><p>Vue 2 无法<strong>直接</strong>监听到属性的新增与删除，需要通过 <code>$set</code> 和 <code>$delete</code> 来实现。由于不能监听到数组的变化，所有内部重写了数组的相关方法。</p><h2 id="_3、vue-如何实现nexttick" tabindex="-1">3、Vue 如何实现nextTick <a class="header-anchor" href="#_3、vue-如何实现nexttick" aria-label="Permalink to &quot;3、Vue 如何实现nextTick&quot;">​</a></h2><p>Vue 会在数据变化后异步执行 DOM 更新。在更新完毕后，会调用 nextTick。</p><p>异步更新其实是微任务，nextTick 也优先使用微任务 Promise</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(flushCallbacks)</span></span></code></pre></div><h3 id="更新-渲染" tabindex="-1">更新 ≠ 渲染 <a class="header-anchor" href="#更新-渲染" aria-label="Permalink to &quot;更新 ≠ 渲染&quot;">​</a></h3><p>nextTick 是微任务，此时页面没有重新渲染，为什么能获取到最新DOM呢？很重要的一点是：更新 ≠ 渲染</p><p>因为异步更新，已经修改了DOM树，可以获取到最新的DOM，只是还没渲染到页面上而已。</p><p><img src="`+n+'" alt="nextTick_how"></p><p>4、</p>',28),h=[r];function p(l,c,k,u,g,b){return a(),t("div",null,h)}const _=e(o,[["render",p]]);export{y as __pageData,_ as default};
