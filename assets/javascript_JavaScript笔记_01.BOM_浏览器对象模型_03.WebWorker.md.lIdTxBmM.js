import{_ as i,c as a,a2 as n,o as k}from"./chunks/framework.QcI9UzYB.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/JavaScript笔记/01.BOM_浏览器对象模型/03.WebWorker.md","filePath":"javascript/JavaScript笔记/01.BOM_浏览器对象模型/03.WebWorker.md"}'),t={name:"javascript/JavaScript笔记/01.BOM_浏览器对象模型/03.WebWorker.md"};function h(e,s,l,p,r,E){return k(),a("div",null,s[0]||(s[0]=[n(`<h2 id="web-worker" tabindex="-1">Web Worker <a class="header-anchor" href="#web-worker" aria-label="Permalink to &quot;Web Worker&quot;">​</a></h2><h3 id="创建-worker" tabindex="-1">创建 Worker <a class="header-anchor" href="#创建-worker" aria-label="Permalink to &quot;创建 Worker&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取脚本文件路径</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> url</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> URL</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;./worker/demo.ts&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">.url);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置 type: &#39;module&#39;，可以在 worker 里使用 import 导入</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> worker</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> Worker</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(url, { type: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;module&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 执行 worker，并传入参数</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">worker.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">postMessage</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;run&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取 worker 的返回结果</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">worker.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">onmessage</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#FFAB70;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> e.data;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="编写-worker" tabindex="-1">编写 Worker <a class="header-anchor" href="#编写-worker" aria-label="Permalink to &quot;编写 Worker&quot;">​</a></h3><p><strong>demo.ts</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Web Worker 的默认写法</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">self.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">onmessage</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#FFAB70;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> e.data;      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// e.data 是通过 worker.postMessage 传入的数据</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  self.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">postMessage</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(result);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 执行完毕，通过 postMessage，将结果传递回去</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6)]))}const F=i(t,[["render",h]]);export{o as __pageData,F as default};
