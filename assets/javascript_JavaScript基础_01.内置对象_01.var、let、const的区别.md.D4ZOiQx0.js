import{_ as o,c as e,o as t,a4 as a}from"./chunks/framework.AxSQlOX8.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/JavaScript基础/01.内置对象/01.var、let、const的区别.md","filePath":"javascript/JavaScript基础/01.内置对象/01.var、let、const的区别.md"}'),c={name:"javascript/JavaScript基础/01.内置对象/01.var、let、const的区别.md"},r=a('<h2 id="var、let、const的区别" tabindex="-1">var、let、const的区别 <a class="header-anchor" href="#var、let、const的区别" aria-label="Permalink to &quot;var、let、const的区别&quot;">​</a></h2><h3 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h3><p><strong>1. 全局作用域</strong></p><p>在函数外，用 <code>var</code> 声明的变量为全局变量，具有全局作用域，会被添加为全局对象 window 的属性。</p><p><strong>2. 函数作用域</strong></p><p>在函数内，用 <code>var</code> 声明的变量，具有函数作用域，只能在函数内部访问</p><p><strong>3. 块级作用域</strong></p><p><code>let</code> 和 <code>const</code> 具有块级作用域，只能在代码块内部访问</p><h3 id="变量声明" tabindex="-1">变量声明 <a class="header-anchor" href="#变量声明" aria-label="Permalink to &quot;变量声明&quot;">​</a></h3><p><strong>1. 变量提升</strong></p><p><code>var</code> 存在变量提升，变量的声明会被提升到顶部，变量在声明之前就可以使用</p><p><strong>2. 暂时性死区</strong></p><p><code>let</code> 和 <code>const</code>，变量声明之前在 <strong>暂时性死区</strong>，变量在声明之前不能使用</p><p><strong>3. 重复声明</strong></p><p><code>var</code> 可以重复声明变量，后声明的同名变量会覆盖之前声明的变量</p><p><code>const</code> 和 <code>let</code> 不允许重复声明变量</p><h3 id="变量赋值" tabindex="-1">变量赋值 <a class="header-anchor" href="#变量赋值" aria-label="Permalink to &quot;变量赋值&quot;">​</a></h3><p><strong>1. 初始值</strong></p><p><code>var</code> 和 <code>let</code> 在变量声明时，可以不设置初始值</p><p><code>const</code> 在变量声明时，必须设置初始值</p><p><strong>2. 重新赋值</strong></p><p><code>var</code> 和 <code>let</code> 允许重新赋值</p><p><code>const</code> 不允许重新赋值</p>',23),s=[r];function n(d,p,l,i,_,h){return t(),e("div",null,s)}const m=o(c,[["render",n]]);export{g as __pageData,m as default};
