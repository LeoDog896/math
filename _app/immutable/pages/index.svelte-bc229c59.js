import{S as R,i as T,s as U,e as k,t as q,k as E,l as D,c as x,a as y,h as S,m as $,d as _,b as p,g,Q as v,F as z,j,r as m,J as K,T as F,q as w,p as b,U as N,o as B}from"../chunks/index-0cc79b3e.js";import{f as I}from"../chunks/index-cff33647.js";function V(c,t,i){const s=c.slice();return s[2]=t[i].boxes,s[3]=t[i].name,s[4]=t[i].expanded,s[5]=t,s[6]=i,s}function A(c,t,i){const s=c.slice();return s[3]=t[i].name,s[7]=t[i].href,s}function G(c){let t,i,s,r=c[2],a=[];for(let e=0;e<r.length;e+=1)a[e]=H(A(c,r,e));const n=e=>b(a[e],1,1,()=>{a[e]=null});return{c(){t=k("div");for(let e=0;e<a.length;e+=1)a[e].c();i=E(),this.h()},l(e){t=x(e,"DIV",{class:!0});var l=y(t);for(let o=0;o<a.length;o+=1)a[o].l(l);i=$(l),l.forEach(_),this.h()},h(){p(t,"class","flex flex-wrap justify-around")},m(e,l){g(e,t,l);for(let o=0;o<a.length;o+=1)a[o].m(t,null);v(t,i),s=!0},p(e,l){if(l&1){r=e[2];let o;for(o=0;o<r.length;o+=1){const d=A(e,r,o);a[o]?(a[o].p(d,l),m(a[o],1)):(a[o]=H(d),a[o].c(),m(a[o],1),a[o].m(t,i))}for(B(),o=r.length;o<a.length;o+=1)n(o);w()}},i(e){if(!s){for(let l=0;l<r.length;l+=1)m(a[l]);s=!0}},o(e){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)b(a[l]);s=!1},d(e){e&&_(t),N(a,e)}}}function H(c){let t,i=c[3]+"",s,r,a,n;return{c(){t=k("a"),s=q(i),this.h()},l(e){t=x(e,"A",{href:!0,class:!0});var l=y(t);s=S(l,i),l.forEach(_),this.h()},h(){p(t,"href",r=c[7]),p(t,"class","flex flex-1 flex-col m-4 bg-green-100 hover:bg-green-200 active:bg-green-300 transition-all items-center justify-center w-1/4 p-4")},m(e,l){g(e,t,l),v(t,s),n=!0},p(e,l){(!n||l&1)&&i!==(i=e[3]+"")&&j(s,i),(!n||l&1&&r!==(r=e[7]))&&p(t,"href",r)},i(e){n||(K(()=>{a||(a=F(t,I,{y:-20},!0)),a.run(1)}),n=!0)},o(e){a||(a=F(t,I,{y:-20},!1)),a.run(0),n=!1},d(e){e&&_(t),e&&a&&a.end()}}}function J(c){let t,i=c[3]+"",s,r,a=c[4]?"^":">",n,e,l,o,d,C;function Q(){return c[1](c[4],c[5],c[6])}let f=c[4]&&G(c);return{c(){t=k("h1"),s=q(i),r=E(),n=q(a),e=E(),f&&f.c(),l=D(),this.h()},l(h){t=x(h,"H1",{class:!0});var u=y(t);s=S(u,i),r=$(u),n=S(u,a),u.forEach(_),e=$(h),f&&f.l(h),l=D(),this.h()},h(){p(t,"class","bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all cursor-pointer select-none text-center rounded-lg p-6 text-2xl w-full")},m(h,u){g(h,t,u),v(t,s),v(t,r),v(t,n),g(h,e,u),f&&f.m(h,u),g(h,l,u),o=!0,d||(C=z(t,"click",Q),d=!0)},p(h,u){c=h,(!o||u&1)&&i!==(i=c[3]+"")&&j(s,i),(!o||u&1)&&a!==(a=c[4]?"^":">")&&j(n,a),c[4]?f?(f.p(c,u),u&1&&m(f,1)):(f=G(c),f.c(),m(f,1),f.m(l.parentNode,l)):f&&(B(),b(f,1,1,()=>{f=null}),w())},i(h){o||(m(f),o=!0)},o(h){b(f),o=!1},d(h){h&&_(t),h&&_(e),f&&f.d(h),h&&_(l),d=!1,C()}}}function L(c){let t,i,s=c[0],r=[];for(let n=0;n<s.length;n+=1)r[n]=J(V(c,s,n));const a=n=>b(r[n],1,1,()=>{r[n]=null});return{c(){t=k("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){t=x(n,"DIV",{class:!0});var e=y(t);for(let l=0;l<r.length;l+=1)r[l].l(e);e.forEach(_),this.h()},h(){p(t,"class","m-8")},m(n,e){g(n,t,e);for(let l=0;l<r.length;l+=1)r[l].m(t,null);i=!0},p(n,[e]){if(e&1){s=n[0];let l;for(l=0;l<s.length;l+=1){const o=V(n,s,l);r[l]?(r[l].p(o,e),m(r[l],1)):(r[l]=J(o),r[l].c(),m(r[l],1),r[l].m(t,null))}for(B(),l=s.length;l<r.length;l+=1)a(l);w()}},i(n){if(!i){for(let e=0;e<s.length;e+=1)m(r[e]);i=!0}},o(n){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)b(r[e]);i=!1},d(n){n&&_(t),N(r,n)}}}function M(c,t,i){const s=[{name:"General",boxes:[{name:"Basics",href:"/math/boxes/basics"},{name:"Sequence",href:"/math/boxes/sequence"},{name:"Formula Cheat Sheet",href:"/math/boxes/formulas"}]}];return[s,(a,n,e)=>i(0,n[e].expanded=!a,s)]}class W extends R{constructor(t){super(),T(this,t,M,L,U,{})}}export{W as default};
