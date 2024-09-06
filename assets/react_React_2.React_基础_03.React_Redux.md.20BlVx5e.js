import{_ as i,c as a,a2 as t,o as e}from"./chunks/framework.QcI9UzYB.js";const o=JSON.parse('{"title":"Redux、Mobx","description":"","frontmatter":{},"headers":[],"relativePath":"react/React/2.React_基础/03.React_Redux.md","filePath":"react/React/2.React_基础/03.React_Redux.md"}'),n={name:"react/React/2.React_基础/03.React_Redux.md"};function p(r,s,h,l,k,E){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="redux、mobx" tabindex="-1">Redux、Mobx <a class="header-anchor" href="#redux、mobx" aria-label="Permalink to &quot;Redux、Mobx&quot;">​</a></h1><h2 id="什么是-redux" tabindex="-1">什么是 Redux <a class="header-anchor" href="#什么是-redux" aria-label="Permalink to &quot;什么是 Redux&quot;">​</a></h2><p>Redux 是状态管理工具</p><h3 id="定义-store" tabindex="-1">定义 store <a class="header-anchor" href="#定义-store" aria-label="Permalink to &quot;定义 store&quot;">​</a></h3><p><strong>store / store.ts</strong></p><p>如下 2 个文件，参考官方文档 <a href="https://cn.react-redux.js.org/tutorials/typescript-quick-start" target="_blank" rel="noreferrer">React Redux 快速入门</a> ，几乎不用做改动</p><p><strong>store.ts</strong> 、 <strong>hooks.ts</strong></p><p><strong>store / reducer / appSlice.ts</strong></p><p>这个文件里的代码，简单理解成 Java Bean 的 getters、setters，只写模版代码，不写业务逻辑</p><p><strong>main.tsx</strong></p><p>将 App 组件包裹在 <code>&lt;Provider&gt;</code>标签中，为所有组件提供 store</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> ReactDOM </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> &#39;react-dom/client&#39;</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> App </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> &#39;./App.tsx&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> { store } </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> &#39;./store/store.ts&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> { Provider } </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> &#39;react-redux&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">ReactDOM.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">createRoot</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;root&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">Provider</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> store</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">{store}&gt;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">Provider</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="useselector、usedispatch" tabindex="-1">useSelector、useDispatch <a class="header-anchor" href="#useselector、usedispatch" aria-label="Permalink to &quot;useSelector、useDispatch&quot;">​</a></h3><p>useSelector：使用一个 selector 函数从 Redux store 的 <code>state</code> 中提取数据</p><p>useDispatch：返回一个 Redux store 中的 <code>dispatch</code> 函数</p>`,15)]))}const c=i(n,[["render",p]]);export{o as __pageData,c as default};
