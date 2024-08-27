import{_ as t,c as e,o as a,a4 as o}from"./chunks/framework.CAy_Deu4.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notes/JavaScript基础/03.函数式编程/01.箭头函数.md","filePath":"notes/JavaScript基础/03.函数式编程/01.箭头函数.md"}'),r={name:"notes/JavaScript基础/03.函数式编程/01.箭头函数.md"},s=o('<h3 id="箭头函数" tabindex="-1">箭头函数 <a class="header-anchor" href="#箭头函数" aria-label="Permalink to &quot;箭头函数&quot;">​</a></h3><p>箭头函数有以下特点：</p><p>1、箭头函数的 this</p><table tabindex="0"><thead><tr><th>this</th><th></th></tr></thead><tbody><tr><td>箭头函数 <strong>this</strong></td><td>函数定义时，其所在上下文的 this，作为自己的 this。且任何方法都改变不了 this 的指向。</td></tr><tr><td>普通函数 <strong>this</strong></td><td>代表它的直接调用者，比如 obj.function，那么 function 的 this 就是 obj。<br>没找到直接调用者,则 this 指的是 window。<br>可以使用 call, apply, bind 来绑定 this</td></tr></tbody></table><p>2、不能作为构造函数，不能被 new 调用</p><p>3、没有原型，即没有 prototype 属性</p><p>4、没有 arguments，可以使用 ...rest参数</p>',7),n=[s];function i(_,d,p,c,h,l){return a(),e("div",null,n)}const m=t(r,[["render",i]]);export{f as __pageData,m as default};
