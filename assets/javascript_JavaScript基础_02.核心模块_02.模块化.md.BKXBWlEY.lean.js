import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.QcI9UzYB.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/JavaScript基础/02.核心模块/02.模块化.md","filePath":"javascript/JavaScript基础/02.核心模块/02.模块化.md"}'),l={name:"javascript/JavaScript基础/02.核心模块/02.模块化.md"};function h(e,s,p,k,E,r){return t(),a("div",null,s[0]||(s[0]=[n(`<h2 id="模块化" tabindex="-1">模块化 <a class="header-anchor" href="#模块化" aria-label="Permalink to &quot;模块化&quot;">​</a></h2><h3 id="es6-module" tabindex="-1">ES6 Module <a class="header-anchor" href="#es6-module" aria-label="Permalink to &quot;ES6 Module&quot;">​</a></h3><h4 id="import" tabindex="-1">import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;import&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> { formatDate } </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> &#39;./dataUtil&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> router </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> &#39;./router&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> Icons </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> &#39;@element-plus/icons-vue&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h4 id="export" tabindex="-1">export <a class="header-anchor" href="#export" aria-label="Permalink to &quot;export&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> formatDate</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> dayOfYear</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> router</span></span></code></pre></div><h3 id="commonjs" tabindex="-1">CommonJS <a class="header-anchor" href="#commonjs" aria-label="Permalink to &quot;CommonJS&quot;">​</a></h3><p>Node.js 采用了这个规范。</p><h4 id="require" tabindex="-1">require <a class="header-anchor" href="#require" aria-label="Permalink to &quot;require&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> fs</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;fs&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;path&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">readFile</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">writeFile</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&quot;./file-utils&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h4 id="module-exports" tabindex="-1">module.exports <a class="header-anchor" href="#module-exports" aria-label="Permalink to &quot;module.exports&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> readFile</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> writeFile</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  readFile,</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  writeFile,</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="iife-模式" tabindex="-1">IIFE 模式 <a class="header-anchor" href="#iife-模式" aria-label="Permalink to &quot;IIFE 模式&quot;">​</a></h3><ul><li>IIFE 模式：匿名函数自调用（闭包）</li><li>IIFE：Immediately-Invoked Function Expression（立即调用函数表达式）</li><li>作用：数据是私有的，外部只能通过暴露的方法操作</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#FFAB70;--shiki-dark:#FFAB70;">window</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 数据</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> &#39;IIFE module data&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 函数</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> bar</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 暴露 foo 函数和 bar 函数</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  window.module </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> { foo, bar };</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">})(window);</span></span></code></pre></div>`,15)]))}const F=i(l,[["render",h]]);export{o as __pageData,F as default};
