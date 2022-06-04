import{S as ls,i as os,s as ps,e as f,t as M,c as h,a as d,h as T,d as p,b as v,g as $,H as y,j as is,F as N,k as V,m as z,I as O,J as Q,K as U,r as q,p as L,D as S,x as W,y as j,z as B,A as rs,B as X,C as A,L as Y,n as R}from"../../chunks/index-534db0d8.js";import{B as cs}from"../../chunks/Box-87702e08.js";const ms=o=>({}),Z=o=>({}),us=o=>({}),ss=o=>({});function as(o){let s,a;return{c(){s=f("div"),a=M(o[0]),this.h()},l(l){s=h(l,"DIV",{class:!0});var t=d(s);a=T(t,o[0]),t.forEach(p),this.h()},h(){v(s,"class","w-full bg-gray-100 text-center text-xl p-4")},m(l,t){$(l,s,t),y(s,a)},p(l,t){t&1&&is(a,l[0])},d(l){l&&p(s)}}}function ts(o){let s,a;return{c(){s=f("div"),a=M(o[1]),this.h()},l(l){s=h(l,"DIV",{class:!0});var t=d(s);a=T(t,o[1]),t.forEach(p),this.h()},h(){v(s,"class","w-full bg-gray-100 text-center text-xl p-4")},m(l,t){$(l,s,t),y(s,a)},p(l,t){t&2&&is(a,l[1])},d(l){l&&p(s)}}}function fs(o){let s,a,l,t,n,r,g,m,k,D,I,x,w,e=o[0]&&as(o);const u=o[4].input,_=N(u,o,o[3],ss);let c=o[1]&&ts(o);const C=o[4].result,E=N(C,o,o[3],Z);return{c(){s=f("div"),a=f("div"),l=f("div"),e&&e.c(),t=V(),n=f("div"),_&&_.c(),g=V(),m=f("div"),k=f("div"),c&&c.c(),D=V(),I=f("div"),E&&E.c(),this.h()},l(i){s=h(i,"DIV",{class:!0});var b=d(s);a=h(b,"DIV",{class:!0});var F=d(a);l=h(F,"DIV",{class:!0});var P=d(l);e&&e.l(P),t=z(P),n=h(P,"DIV",{class:!0});var J=d(n);_&&_.l(J),J.forEach(p),P.forEach(p),F.forEach(p),g=z(b),m=h(b,"DIV",{class:!0});var K=d(m);k=h(K,"DIV",{class:!0});var H=d(k);c&&c.l(H),D=z(H),I=h(H,"DIV",{class:!0});var G=d(I);E&&E.l(G),G.forEach(p),H.forEach(p),K.forEach(p),b.forEach(p),this.h()},h(){v(n,"class","p-4"),v(l,"class","flex flex-col h-full"),v(a,"class",r="flex-grow min-h-full border "+(o[2]?"w-1/2":"")),v(I,"class","w-full flex flex-grow justify-center h-full items-center"),v(k,"class","flex flex-col h-full w-full"),v(m,"class",x="flex-grow min-h-full border "+(o[2]?"w-1/2":"")),v(s,"class","flex items-stretch flex-row w-full py-4 rounded-lg")},m(i,b){$(i,s,b),y(s,a),y(a,l),e&&e.m(l,null),y(l,t),y(l,n),_&&_.m(n,null),y(s,g),y(s,m),y(m,k),c&&c.m(k,null),y(k,D),y(k,I),E&&E.m(I,null),w=!0},p(i,[b]){i[0]?e?e.p(i,b):(e=as(i),e.c(),e.m(l,t)):e&&(e.d(1),e=null),_&&_.p&&(!w||b&8)&&O(_,u,i,i[3],w?U(u,i[3],b,us):Q(i[3]),ss),(!w||b&4&&r!==(r="flex-grow min-h-full border "+(i[2]?"w-1/2":"")))&&v(a,"class",r),i[1]?c?c.p(i,b):(c=ts(i),c.c(),c.m(k,D)):c&&(c.d(1),c=null),E&&E.p&&(!w||b&8)&&O(E,C,i,i[3],w?U(C,i[3],b,ms):Q(i[3]),Z),(!w||b&4&&x!==(x="flex-grow min-h-full border "+(i[2]?"w-1/2":"")))&&v(m,"class",x)},i(i){w||(q(_,i),q(E,i),w=!0)},o(i){L(_,i),L(E,i),w=!1},d(i){i&&p(s),e&&e.d(),_&&_.d(i),c&&c.d(),E&&E.d(i)}}}function hs(o,s,a){let{$$slots:l={},$$scope:t}=s,{left:n="Input"}=s,{right:r="Result"}=s,{equalWidth:g=!0}=s;return o.$$set=m=>{"left"in m&&a(0,n=m.left),"right"in m&&a(1,r=m.right),"equalWidth"in m&&a(2,g=m.equalWidth),"$$scope"in m&&a(3,t=m.$$scope)},[n,r,g,t,l]}class es extends ls{constructor(s){super(),os(this,s,hs,fs,ps,{left:0,right:1,equalWidth:2})}}function ds(o){let s,a,l=`<code class="language-ts"><span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token operator">...</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token operator">=</span> a<span class="token punctuation">;</span> n <span class="token operator">&lt;=</span> b<span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  sum <span class="token operator">+=</span> c
<span class="token punctuation">&#125;</span> </code>`;return{c(){s=f("div"),a=f("pre"),this.h()},l(t){s=h(t,"DIV",{slot:!0});var n=d(s);a=h(n,"PRE",{class:!0});var r=d(a);r.forEach(p),n.forEach(p),this.h()},h(){v(a,"class","language-ts"),v(s,"slot","input")},m(t,n){$(t,s,n),y(s,a),a.innerHTML=l},p:R,d(t){t&&p(s)}}}function _s(o){let s,a,l='<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mstyle scriptlevel="0" displaystyle="true"><munderover><mo>\u2211</mo><mrow><mi>n</mi><mo>=</mo><mi>a</mi></mrow><mi>b</mi></munderover><mi>c</mi></mstyle></mrow><annotation encoding="application/x-tex">\\displaystyle\\sum_{n=a}^bc</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:3.0861em;vertical-align:-1.25em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.8361em;"><span style="top:-1.9em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">=</span><span class="mord mathnormal mtight">a</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">\u2211</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:1.25em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">c</span></span></span></span></span>';return{c(){s=f("div"),a=f("div"),this.h()},l(t){s=h(t,"DIV",{slot:!0});var n=d(s);a=h(n,"DIV",{class:!0});var r=d(a);r.forEach(p),n.forEach(p),this.h()},h(){v(a,"class","math math-display"),v(s,"slot","result")},m(t,n){$(t,s,n),y(s,a),a.innerHTML=l},p:R,d(t){t&&p(s)}}}function vs(o){let s,a,l=`<code class="language-ts"><span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token operator">...</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token operator">=</span> a<span class="token punctuation">;</span> n <span class="token operator">&lt;=</span> b<span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  sum <span class="token operator">+=</span> c
<span class="token punctuation">&#125;</span> </code>`;return{c(){s=f("div"),a=f("pre"),this.h()},l(t){s=h(t,"DIV",{slot:!0});var n=d(s);a=h(n,"PRE",{class:!0});var r=d(a);r.forEach(p),n.forEach(p),this.h()},h(){v(a,"class","language-ts"),v(s,"slot","input")},m(t,n){$(t,s,n),y(s,a),a.innerHTML=l},p:R,d(t){t&&p(s)}}}function gs(o){let s,a,l='<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mstyle scriptlevel="0" displaystyle="true"><munderover><mo>\u220F</mo><mrow><mi>n</mi><mo>=</mo><mi>a</mi></mrow><mi>b</mi></munderover><mi>c</mi></mstyle></mrow><annotation encoding="application/x-tex">\\displaystyle\\prod_{n=a}^bc</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:3.0861em;vertical-align:-1.25em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.8361em;"><span style="top:-1.9em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">=</span><span class="mord mathnormal mtight">a</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">\u220F</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:1.25em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">c</span></span></span></span></span>';return{c(){s=f("div"),a=f("div"),this.h()},l(t){s=h(t,"DIV",{slot:!0});var n=d(s);a=h(n,"DIV",{class:!0});var r=d(a);r.forEach(p),n.forEach(p),this.h()},h(){v(a,"class","math math-display"),v(s,"slot","result")},m(t,n){$(t,s,n),y(s,a),a.innerHTML=l},p:R,d(t){t&&p(s)}}}function ys(o){let s,a,l,t,n,r,g,m,k,D,I,x,w;return g=new es({props:{left:"Code",right:"Math",$$slots:{result:[_s],input:[ds]},$$scope:{ctx:o}}}),x=new es({props:{left:"Code",right:"Math",$$slots:{result:[gs],input:[vs]},$$scope:{ctx:o}}}),{c(){s=f("p"),a=M("The following is the syntax for a summation, one of the many commonly used mathematical symbols."),l=V(),t=f("p"),n=M("This can actually be closely related to a for loop:"),r=V(),W(g.$$.fragment),m=V(),k=f("p"),D=M("The other form of this, a PI (product) symbol, can be used for multiplication"),I=V(),W(x.$$.fragment)},l(e){s=h(e,"P",{});var u=d(s);a=T(u,"The following is the syntax for a summation, one of the many commonly used mathematical symbols."),u.forEach(p),l=z(e),t=h(e,"P",{});var _=d(t);n=T(_,"This can actually be closely related to a for loop:"),_.forEach(p),r=z(e),j(g.$$.fragment,e),m=z(e),k=h(e,"P",{});var c=d(k);D=T(c,"The other form of this, a PI (product) symbol, can be used for multiplication"),c.forEach(p),I=z(e),j(x.$$.fragment,e)},m(e,u){$(e,s,u),y(s,a),$(e,l,u),$(e,t,u),y(t,n),$(e,r,u),B(g,e,u),$(e,m,u),$(e,k,u),y(k,D),$(e,I,u),B(x,e,u),w=!0},p(e,u){const _={};u&2&&(_.$$scope={dirty:u,ctx:e}),g.$set(_);const c={};u&2&&(c.$$scope={dirty:u,ctx:e}),x.$set(c)},i(e){w||(q(g.$$.fragment,e),q(x.$$.fragment,e),w=!0)},o(e){L(g.$$.fragment,e),L(x.$$.fragment,e),w=!1},d(e){e&&p(s),e&&p(l),e&&p(t),e&&p(r),A(g,e),e&&p(m),e&&p(k),e&&p(I),A(x,e)}}}function ks(o){let s,a;const l=[o[0],ns];let t={$$slots:{default:[ys]},$$scope:{ctx:o}};for(let n=0;n<l.length;n+=1)t=S(t,l[n]);return s=new cs({props:t}),{c(){W(s.$$.fragment)},l(n){j(s.$$.fragment,n)},m(n,r){B(s,n,r),a=!0},p(n,[r]){const g=r&1?rs(l,[r&1&&X(n[0]),r&0&&X(ns)]):{};r&2&&(g.$$scope={dirty:r,ctx:n}),s.$set(g)},i(n){a||(q(s.$$.fragment,n),a=!0)},o(n){L(s.$$.fragment,n),a=!1},d(n){A(s,n)}}}const ns={title:"Sequence",layout:"boxes"};function ws(o,s,a){return o.$$set=l=>{a(0,s=S(S({},s),Y(l)))},s=Y(s),[s]}class xs extends ls{constructor(s){super(),os(this,s,ws,ks,ps,{})}}export{xs as default,ns as metadata};
