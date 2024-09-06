import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.QcI9UzYB.js";const F=JSON.parse('{"title":"搭建项目","description":"","frontmatter":{},"headers":[],"relativePath":"react/React/1.搭建项目/01.搭建项目.md","filePath":"react/React/1.搭建项目/01.搭建项目.md"}'),p={name:"react/React/1.搭建项目/01.搭建项目.md"};function e(h,s,l,k,E,r){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="搭建项目" tabindex="-1">搭建项目 <a class="header-anchor" href="#搭建项目" aria-label="Permalink to &quot;搭建项目&quot;">​</a></h1><h2 id="方式一-vite" tabindex="-1">方式一：vite <a class="header-anchor" href="#方式一-vite" aria-label="Permalink to &quot;方式一：vite&quot;">​</a></h2><p><a href="/vitepress-blog/notes/Vite/Vite_搭建项目/01.node.js_配置.html" title="Vite 搭建项目">Vite 搭建项目</a></p><h2 id="方式二-create-react-app" tabindex="-1">方式二：create-react-app <a class="header-anchor" href="#方式二-create-react-app" aria-label="Permalink to &quot;方式二：create-react-app&quot;">​</a></h2><h3 id="创建新项目" tabindex="-1">创建新项目 <a class="header-anchor" href="#创建新项目" aria-label="Permalink to &quot;创建新项目&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span>npx create-react-app 项目名 --template typescript</span></span></code></pre></div><h3 id="配置代理" tabindex="-1">配置代理 <a class="header-anchor" href="#配置代理" aria-label="Permalink to &quot;配置代理&quot;">​</a></h3><p><strong>安装 http-proxy-middleware</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install http-proxy-middleware --save</span></span></code></pre></div><p><strong>src / setupProxy.js</strong></p><p>在 src 目录新建 <strong>setupProxy.js</strong>，文件名不要修改</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">createProxyMiddleware</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;http-proxy-middleware&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#FFAB70;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  app.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">    &#39;/api&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">    createProxyMiddleware</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 在 setupProxy 里，一定要带上  /api</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">      target: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;http://localhost:8090/api&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">      changeOrigin: </span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="配置别名" tabindex="-1">配置别名 @ <a class="header-anchor" href="#配置别名" aria-label="Permalink to &quot;配置别名 @&quot;">​</a></h3><p><strong>安装依赖</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> react-app-rewired</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> customize-cra</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> customize-cra-less-loader</span></span></code></pre></div><p><strong>config-overrides.js</strong></p><p>在根目录下新建 <strong>config-overrides.js</strong>，文件名不要修改</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">override</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">addWebpackAlias</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;customize-cra&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> addLessLoader</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;customize-cra-less-loader&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;path&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> resolve</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#FFAB70;--shiki-dark:#FFAB70;"> dir</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;.&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">, dir)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> override</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 配置别名 @</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">  addWebpackAlias</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;@&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">]: </span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;src&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // LESS</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">  addLessLoader</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">    lessLoaderOptions: {</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">      lessOptions: {</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">        javascriptEnabled: </span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>package.json</strong></p><p>修改命令脚本，将 <code>react-scripts</code> 改成 <code>react-app-rewired</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">  &quot;name&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;react-webpack-example&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">  &quot;version&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;0.1.0&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">  &quot;private&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">  &quot;scripts&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">    &quot;start&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;react-app-rewired start&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">    &quot;build&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;react-app-rewired build&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">    &quot;test&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;react-app-rewired test&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">    &quot;eject&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;react-scripts eject&quot;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="打包到二级目录" tabindex="-1">打包到二级目录 <a class="header-anchor" href="#打包到二级目录" aria-label="Permalink to &quot;打包到二级目录&quot;">​</a></h3><p><strong>package.json</strong></p><p>设置 homepage</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;homepage&quot;: &quot;/myapp/&quot;,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>router / router.tsx</strong></p><p>在 createBrowserRouter 时，设置 basename</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 项目的 base</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> base</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">.env.</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">VITE_BASE_PATH</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建路由，并设置 basename</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> router</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> createBrowserRouter</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(routes, { basename: base })</span></span></code></pre></div>`,28)]))}const o=i(p,[["render",e]]);export{F as __pageData,o as default};
