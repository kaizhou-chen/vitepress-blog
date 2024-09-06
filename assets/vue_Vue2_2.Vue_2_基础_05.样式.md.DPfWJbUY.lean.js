import{_ as i}from"./chunks/深度作用选择器.XyZrSKjp.js";import{_ as a,c as n,a2 as t,o as l}from"./chunks/framework.QcI9UzYB.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/Vue2/2.Vue_2_基础/05.样式.md","filePath":"vue/Vue2/2.Vue_2_基础/05.样式.md"}'),p={name:"vue/Vue2/2.Vue_2_基础/05.样式.md"};function h(e,s,k,E,d,r){return l(),n("div",null,s[0]||(s[0]=[t('<h2 id="样式隔离-样式穿透" tabindex="-1">样式隔离 / 样式穿透 <a class="header-anchor" href="#样式隔离-样式穿透" aria-label="Permalink to &quot;样式隔离 / 样式穿透&quot;">​</a></h2><p><strong>样式隔离 scoped</strong></p><ul><li>scoped 样式只作用于当前组件，使组件之间的样式相互隔离，不会互相影响</li><li>在DOM结构和CSS样式上添加<strong>唯一不重复的标记</strong>: data-v-hash，以保证唯一，达到样式私有化的目的</li><li>如果组件内部包含有其他组件，只会子组件的根节点加上当前组件的data属性</li></ul><p><img src="'+i+`" alt=""></p><p><strong>样式穿透 (深度选择器 deep)</strong></p><p><a href="https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B1%E5%BA%A6%E4%BD%9C%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8" target="_blank" rel="noreferrer">官方文档</a>，样式隔离后，如果需要修改全局样式，可以使用深度选择器。</p><p>例如</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">Vue 2 推荐：/deep/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">CSS 直接支持：&gt;&gt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- Vue 2 推荐 /deep/ --&gt;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;less&quot;</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> scoped</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">.el-select</span><span style="--shiki-light:#FDAEB7;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> /deep/</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> .el-input</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">    width</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">130</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- CSS 直接使用 &gt;&gt;&gt; --&gt;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">.el-select</span><span style="--shiki-light:#FDAEB7;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> &gt;&gt;&gt;</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> .el-input</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">    width</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">130</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="less" tabindex="-1">Less <a class="header-anchor" href="#less" aria-label="Permalink to &quot;Less&quot;">​</a></h2><p><strong>安装</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> less</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> less-loader</span></span></code></pre></div><p>安装完成后，检查是否安装成功</p><p>在项目根目录执行如下命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">ode_modules</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">\\.</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">bin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">\\</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">lessc</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><p><strong>main.js</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> less </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> &#39;less&#39;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">Vue.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(less)</span></span></code></pre></div><p><strong>使用方法</strong></p><p>在 xx.vue 文件中，style标签上设置lang=&quot;less&quot;</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;less&quot;</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> scoped</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#85E89D;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,19)]))}const c=a(p,[["render",h]]);export{o as __pageData,c as default};
