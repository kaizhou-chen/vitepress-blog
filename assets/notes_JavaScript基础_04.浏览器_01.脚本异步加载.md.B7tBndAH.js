import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.CAy_Deu4.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notes/JavaScript基础/04.浏览器/01.脚本异步加载.md","filePath":"notes/JavaScript基础/04.浏览器/01.脚本异步加载.md"}'),e={name:"notes/JavaScript基础/04.浏览器/01.脚本异步加载.md"},l=n(`<h2 id="资源提示符" tabindex="-1">资源提示符 <a class="header-anchor" href="#资源提示符" aria-label="Permalink to &quot;资源提示符&quot;">​</a></h2><h3 id="script" tabindex="-1">script <a class="header-anchor" href="#script" aria-label="Permalink to &quot;script&quot;">​</a></h3><ul><li><code>&lt;script&gt;</code> 没有资源提示符时，浏览器会等待 js 下载完毕后，执行 js，然后再解析 DOM</li></ul><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  %% 注释使用 %% 开头</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  %% 使用 classDef 定义样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  %% 使用伪类，在节点上使用样式  :::start</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  %% 定义节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  start(normal):::start</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parse_1(parse dom):::green</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  exec(exec):::blue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parse_2(parse dom):::green</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fetch(fetch):::blue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  finish:::finish</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  %% 设置节点关系</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  start --- parse_1 -- &quot;等待 js 下载完毕，阻塞主线程&quot; --- exec --- parse_2 --&gt; finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parse_1 -- &quot;&amp;lt;script&amp;gt;&quot; --&gt; fetch --&gt; exec</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  %% 使用 classDef 定义样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef start fill:none, stroke:none</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef finish fill:none, stroke:none, color:transparent</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef green fill:yellowgreen, stroke:#333, stroke-width:1px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef blue fill:royalblue, stroke:#333, stroke-width:1px, color:white</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  %% 使用 linkStyle 设置第 n 条连接线的样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  linkStyle 1 stroke:red</span></span></code></pre></div><ul><li><code>&lt;script async /&gt;</code> 有 <strong>async</strong> 资源提示符时，浏览器会边解析 DOM ，边下载 js。当 js 下载完毕，就执行 js。此时 DOM 可能还没有解析完毕</li></ul><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  start(async):::start</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parse_1(parse dom):::green</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parse_2(parse dom):::green</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  exec(exec):::blue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parse_3(parse dom):::green</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fetch(fetch):::blue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  finish:::finish</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  start --- parse_1 --- parse_2 -- &quot;边解析 DOM&quot; --- exec --- parse_3 --&gt; finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parse_1 -- &quot;&amp;lt;script&amp;gt;&quot; --&gt; fetch -- &quot;边下载 js&quot; --- exec</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef start fill:none, stroke:none</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef finish fill:none, stroke:none, color:transparent</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef green fill:yellowgreen, stroke:#333, stroke-width:1px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef blue fill:royalblue, stroke:#333, stroke-width:1px, color:white</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  linkStyle 2 stroke:red</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  linkStyle 6 stroke:red</span></span></code></pre></div><ul><li><code>&lt;script defer /&gt;</code> 有 <strong>defer</strong> 资源提示符时，浏览器会边解析 DOM，边下载 js。当 DOM 解析完毕，才执行 js。</li></ul><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  start(defer):::start</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parse_1(parse dom):::green</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parse_2(parse dom):::green</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  exec(exec):::blue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fetch(fetch):::blue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  finish:::finish</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  start --- parse_1 --- parse_2 -- &quot;DOM 解析完毕&quot; --- exec --&gt; finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parse_1 -- &quot;&amp;lt;script&amp;gt;&quot; --&gt; fetch --- exec</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef start fill:none, stroke:none</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef finish fill:none, stroke:none, color:transparent</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef green fill:yellowgreen, stroke:#333, stroke-width:1px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  classDef blue fill:royalblue, stroke:#333, stroke-width:1px, color:white</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  linkStyle 2 stroke:red</span></span></code></pre></div><h3 id="link" tabindex="-1">link <a class="header-anchor" href="#link" aria-label="Permalink to &quot;link&quot;">​</a></h3><ul><li><code>&lt;link rel=&quot;preload&quot; /&gt;</code> 有 <strong>preload</strong> 资源提示符时</li></ul><p>边解析 DOM，边下载资源。下载完毕后缓存起来，需要用到资源时，读取缓存</p><p>preload 优先级更高，下载当前页面需要的资源</p><ul><li><code>&lt;link ref=&quot;prefetch&quot; /&gt;</code> 有 <strong>prefetch</strong> 资源提示符时</li></ul><p>prefetch 优先级更低，下载其他页面需要的资源</p>`,14),t=[l];function p(h,r,E,k,c,o){return i(),a("div",null,t)}const y=s(e,[["render",p]]);export{g as __pageData,y as default};
