import{S,i as V,s as F,D as b,x as M,y as D,z as H,A as G,B as P,r as R,p as q,C,R as A,e as f,t as g,k as y,c as d,a as _,h as $,d as m,m as x,g as v,Q as u,b as k,n as I}from"../../chunks/index-0cc79b3e.js";import{B as T}from"../../chunks/Box-7a4e1585.js";import{R as j}from"../../chunks/Result-79dbd34f.js";function z(h){let s,e,r,n,a,l,o,i,t='<code class="language-ts"><span class="token keyword">let</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">*</span>b<span class="token operator">*</span>h<span class="token punctuation">;</span></code>';return{c(){s=f("div"),e=f("h2"),r=g("Perimeter"),n=y(),a=f("p"),l=g("Perimeter of a rectangle"),o=y(),i=f("pre"),this.h()},l(p){s=d(p,"DIV",{slot:!0});var c=_(s);e=d(c,"H2",{});var w=_(e);r=$(w,"Perimeter"),w.forEach(m),n=x(c),a=d(c,"P",{});var E=_(a);l=$(E,"Perimeter of a rectangle"),E.forEach(m),o=x(c),i=d(c,"PRE",{class:!0});var L=_(i);L.forEach(m),c.forEach(m),this.h()},h(){k(i,"class","language-ts"),k(s,"slot","input")},m(p,c){v(p,s,c),u(s,e),u(e,r),u(s,n),u(s,a),u(a,l),u(s,o),u(s,i),i.innerHTML=t},p:I,d(p){p&&m(s)}}}function Q(h){let s,e,r=`<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable rowspacing="0.16em" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>b</mi><mi>h</mi></mrow></mstyle></mtd></mtr></mtable><annotation encoding="application/x-tex">\\begin{equation*}
A=\\frac 1 2 bh
\\end{equation*}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.0074em;vertical-align:-0.7537em;"></span><span class="mord"><span class="mtable"><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.2537em;"><span style="top:-3.2537em;"><span class="pstrut" style="height:3.3214em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal">bh</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.7537em;"><span></span></span></span></span></span></span></span></span></span></span></span>`;return{c(){s=f("div"),e=f("div"),this.h()},l(n){s=d(n,"DIV",{slot:!0});var a=_(s);e=d(a,"DIV",{class:!0});var l=_(e);l.forEach(m),a.forEach(m),this.h()},h(){k(e,"class","math math-display"),k(s,"slot","result")},m(n,a){v(n,s,a),u(s,e),e.innerHTML=r},p:I,d(n){n&&m(s)}}}function J(h){let s,e,r,n,a,l,o,i;return o=new j({props:{left:"",right:"",$$slots:{result:[Q],input:[z]},$$scope:{ctx:h}}}),{c(){s=f("p"),e=g("Below is a list of formulas for you convenience to use."),r=y(),n=f("h1"),a=g("Geometry"),l=y(),M(o.$$.fragment)},l(t){s=d(t,"P",{});var p=_(s);e=$(p,"Below is a list of formulas for you convenience to use."),p.forEach(m),r=x(t),n=d(t,"H1",{});var c=_(n);a=$(c,"Geometry"),c.forEach(m),l=x(t),D(o.$$.fragment,t)},m(t,p){v(t,s,p),u(s,e),v(t,r,p),v(t,n,p),u(n,a),v(t,l,p),H(o,t,p),i=!0},p(t,p){const c={};p&2&&(c.$$scope={dirty:p,ctx:t}),o.$set(c)},i(t){i||(R(o.$$.fragment,t),i=!0)},o(t){q(o.$$.fragment,t),i=!1},d(t){t&&m(s),t&&m(r),t&&m(n),t&&m(l),C(o,t)}}}function K(h){let s,e;const r=[h[0],B];let n={$$slots:{default:[J]},$$scope:{ctx:h}};for(let a=0;a<r.length;a+=1)n=b(n,r[a]);return s=new T({props:n}),{c(){M(s.$$.fragment)},l(a){D(s.$$.fragment,a)},m(a,l){H(s,a,l),e=!0},p(a,[l]){const o=l&1?G(r,[l&1&&P(a[0]),l&0&&P(B)]):{};l&2&&(o.$$scope={dirty:l,ctx:a}),s.$set(o)},i(a){e||(R(s.$$.fragment,a),e=!0)},o(a){q(s.$$.fragment,a),e=!1},d(a){C(s,a)}}}const B={title:"Formula Cheat Sheet",layout:"boxes"};function N(h,s,e){return h.$$set=r=>{e(0,s=b(b({},s),A(r)))},s=A(s),[s]}class X extends S{constructor(s){super(),V(this,s,N,K,F,{})}}export{X as default,B as metadata};
