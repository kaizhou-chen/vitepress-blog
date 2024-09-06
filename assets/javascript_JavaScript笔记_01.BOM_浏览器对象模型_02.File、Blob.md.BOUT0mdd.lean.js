import{_ as i,c as a,a2 as n,o as h}from"./chunks/framework.QcI9UzYB.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/JavaScript笔记/01.BOM_浏览器对象模型/02.File、Blob.md","filePath":"javascript/JavaScript笔记/01.BOM_浏览器对象模型/02.File、Blob.md"}'),k={name:"javascript/JavaScript笔记/01.BOM_浏览器对象模型/02.File、Blob.md"};function l(t,s,E,p,e,r){return h(),a("div",null,s[0]||(s[0]=[n(`<h2 id="file" tabindex="-1">File <a class="header-anchor" href="#file" aria-label="Permalink to &quot;File&quot;">​</a></h2><h3 id="下载文件" tabindex="-1">下载文件 <a class="header-anchor" href="#下载文件" aria-label="Permalink to &quot;下载文件&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> download</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#FFAB70;--shiki-dark:#FFAB70;">file</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#FFAB70;--shiki-dark:#FFAB70;">filename</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> blobUrl</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> URL</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">createObjectURL</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(file);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> link</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  link.href </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> blobUrl;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  link.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">setAttribute</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;download&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">, filename);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  document.body.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(link);</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  link.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">click</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // clean up</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  document.body.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">removeChild</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(link);</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">  URL</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">revokeObjectURL</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(blobUrl);</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="查看图片、pdf" tabindex="-1">查看图片、PDF <a class="header-anchor" href="#查看图片、pdf" aria-label="Permalink to &quot;查看图片、PDF&quot;">​</a></h3><p>使用 Object URL，不要使用 dataURL，因为 Base64 字符串，可能导致 url 超长</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> preview</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#FFAB70;--shiki-dark:#FFAB70;">file</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> blobUrl</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> URL</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">createObjectURL</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(file);</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  window.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(blobUrl, </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;_blank&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="blob" tabindex="-1">Blob <a class="header-anchor" href="#blob" aria-label="Permalink to &quot;Blob&quot;">​</a></h2><h3 id="dataurl-转-blob" tabindex="-1">dataURL 转 Blob <a class="header-anchor" href="#dataurl-转-blob" aria-label="Permalink to &quot;dataURL 转 Blob&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将 Base64 编码的 dataURL 转换为 Blob</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> dataURLtoBlob</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#FFAB70;--shiki-dark:#FFAB70;">dataURL</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> byteString;</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> (dataURL.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;,&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">indexOf</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;base64&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">    byteString </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> atob</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(dataURL.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;,&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">    byteString </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> unescape</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(dataURL.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;,&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // separate out the mime component</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> mimeString</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> dataURL.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;,&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;:&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;">&#39;;&#39;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // write the bytes of the string to an ArrayBuffer</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> ab</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> ArrayBuffer</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(byteString.</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> ia</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> Uint8Array</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(ab);</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> byteString.</span><span style="--shiki-light:#79B8FF;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">    ia[i] </span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;"> byteString.</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">charCodeAt</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">(i);</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // write the ArrayBuffer to a blob, and you&#39;re done</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#F97583;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;"> Blob</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">([ab], {type: mimeString});</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,9)]))}const g=i(k,[["render",l]]);export{F as __pageData,g as default};
