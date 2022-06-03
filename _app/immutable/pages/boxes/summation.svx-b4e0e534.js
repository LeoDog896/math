import{S as J,i as K,s as N,D as H,x as O,y as Q,z as U,A as W,B,r as X,p as Y,C as Z,L as D,e as y,t as $,k as v,c as d,a as f,h as L,d as n,m as g,b as M,g as p,H as P,n as ss}from"../../chunks/index-534db0d8.js";import{B as as}from"../../chunks/Box-87702e08.js";function ns(k){let a,m,i,o,t='<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mstyle scriptlevel="0" displaystyle="true"><munderover><mo>\u2211</mo><mrow><mi>n</mi><mo>=</mo><mi>a</mi></mrow><mi>b</mi></munderover><mi>c</mi></mstyle></mrow><annotation encoding="application/x-tex">\\displaystyle\\sum_{n=a}^bc</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:3.0861em;vertical-align:-1.25em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.8361em;"><span style="top:-1.9em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">=</span><span class="mord mathnormal mtight">a</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">\u2211</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:1.25em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">c</span></span></span></span></span>',l,c,T,w,r,R=`<code class="language-ts"><span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token operator">...</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token operator">=</span> a<span class="token punctuation">;</span> n <span class="token operator">&lt;=</span> b<span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  sum <span class="token operator">+=</span> c
<span class="token punctuation">&#125;</span> </code>`,b,_,E,x,u,V='<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mstyle scriptlevel="0" displaystyle="true"><munderover><mo>\u220F</mo><mrow><mi>n</mi><mo>=</mo><mi>a</mi></mrow><mi>b</mi></munderover><mi>c</mi></mstyle></mrow><annotation encoding="application/x-tex">\\displaystyle\\prod_{n=a}^bc</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:3.0861em;vertical-align:-1.25em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.8361em;"><span style="top:-1.9em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">=</span><span class="mord mathnormal mtight">a</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">\u220F</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:1.25em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">c</span></span></span></span></span>',z,h,j=`<code class="language-ts"><span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token operator">...</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token operator">=</span> a<span class="token punctuation">;</span> n <span class="token operator">&lt;=</span> b<span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  sum <span class="token operator">*=</span> c
<span class="token punctuation">&#125;</span> </code>`;return{c(){a=y("p"),m=$("The following is the syntax for a summation, one of the many commonly used mathematical symbols."),i=v(),o=y("div"),l=v(),c=y("p"),T=$("This can actually be closely related to a for loop:"),w=v(),r=y("pre"),b=v(),_=y("p"),E=$("The other form of this, a PI (product) symbol, can be used for multiplication"),x=v(),u=y("div"),z=v(),h=y("pre"),this.h()},l(s){a=d(s,"P",{});var e=f(a);m=L(e,"The following is the syntax for a summation, one of the many commonly used mathematical symbols."),e.forEach(n),i=g(s),o=d(s,"DIV",{class:!0});var q=f(o);q.forEach(n),l=g(s),c=d(s,"P",{});var I=f(c);T=L(I,"This can actually be closely related to a for loop:"),I.forEach(n),w=g(s),r=d(s,"PRE",{class:!0});var A=f(r);A.forEach(n),b=g(s),_=d(s,"P",{});var S=f(_);E=L(S,"The other form of this, a PI (product) symbol, can be used for multiplication"),S.forEach(n),x=g(s),u=d(s,"DIV",{class:!0});var F=f(u);F.forEach(n),z=g(s),h=d(s,"PRE",{class:!0});var G=f(h);G.forEach(n),this.h()},h(){M(o,"class","math math-display"),M(r,"class","language-ts"),M(u,"class","math math-display"),M(h,"class","language-ts")},m(s,e){p(s,a,e),P(a,m),p(s,i,e),p(s,o,e),o.innerHTML=t,p(s,l,e),p(s,c,e),P(c,T),p(s,w,e),p(s,r,e),r.innerHTML=R,p(s,b,e),p(s,_,e),P(_,E),p(s,x,e),p(s,u,e),u.innerHTML=V,p(s,z,e),p(s,h,e),h.innerHTML=j},p:ss,d(s){s&&n(a),s&&n(i),s&&n(o),s&&n(l),s&&n(c),s&&n(w),s&&n(r),s&&n(b),s&&n(_),s&&n(x),s&&n(u),s&&n(z),s&&n(h)}}}function ts(k){let a,m;const i=[k[0],C];let o={$$slots:{default:[ns]},$$scope:{ctx:k}};for(let t=0;t<i.length;t+=1)o=H(o,i[t]);return a=new as({props:o}),{c(){O(a.$$.fragment)},l(t){Q(a.$$.fragment,t)},m(t,l){U(a,t,l),m=!0},p(t,[l]){const c=l&1?W(i,[l&1&&B(t[0]),l&0&&B(C)]):{};l&2&&(c.$$scope={dirty:l,ctx:t}),a.$set(c)},i(t){m||(X(a.$$.fragment,t),m=!0)},o(t){Y(a.$$.fragment,t),m=!1},d(t){Z(a,t)}}}const C={title:"Summation",layout:"boxes"};function es(k,a,m){return k.$$set=i=>{m(0,a=H(H({},a),D(i)))},a=D(a),[a]}class os extends J{constructor(a){super(),K(this,a,es,ts,N,{})}}export{os as default,C as metadata};
