import{S as Q,i as T,s as U,e as k,t as q,k as w,l as C,c as y,a as E,h as x,m as B,d as m,b as p,g as b,Q as g,F as z,j as S,r as d,J as K,U as D,q as V,p as v,V as N,o as $}from"../chunks/index-a3d8f87b.js";import{f as F}from"../chunks/index-4fb0eb82.js";function H(f,e,i){const o=f.slice();return o[2]=e[i].boxes,o[3]=e[i].name,o[4]=e[i].expanded,o[5]=e,o[6]=i,o}function I(f,e,i){const o=f.slice();return o[3]=e[i].name,o[7]=e[i].href,o[8]=e[i].hook,o}function R(f){let e,i,o,a=f[2],n=[];for(let t=0;t<a.length;t+=1)n[t]=G(I(f,a,t));const s=t=>v(n[t],1,1,()=>{n[t]=null});return{c(){e=k("div");for(let t=0;t<n.length;t+=1)n[t].c();i=w(),this.h()},l(t){e=y(t,"DIV",{class:!0});var l=E(e);for(let r=0;r<n.length;r+=1)n[r].l(l);i=B(l),l.forEach(m),this.h()},h(){p(e,"class","flex flex-wrap justify-around")},m(t,l){b(t,e,l);for(let r=0;r<n.length;r+=1)n[r].m(e,null);g(e,i),o=!0},p(t,l){if(l&1){a=t[2];let r;for(r=0;r<a.length;r+=1){const h=I(t,a,r);n[r]?(n[r].p(h,l),d(n[r],1)):(n[r]=G(h),n[r].c(),d(n[r],1),n[r].m(e,i))}for($(),r=a.length;r<n.length;r+=1)s(r);V()}},i(t){if(!o){for(let l=0;l<a.length;l+=1)d(n[l]);o=!0}},o(t){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)v(n[l]);o=!1},d(t){t&&m(e),N(n,t)}}}function A(f){let e,i=f[8]+"",o;return{c(){e=k("p"),o=q(i),this.h()},l(a){e=y(a,"P",{class:!0});var n=E(e);o=x(n,i),n.forEach(m),this.h()},h(){p(e,"class","text-gray-600")},m(a,n){b(a,e,n),g(e,o)},p(a,n){n&1&&i!==(i=a[8]+"")&&S(o,i)},d(a){a&&m(e)}}}function G(f){let e,i=f[3]+"",o,a,n,s,t,l=f[8]&&A(f);return{c(){e=k("a"),o=q(i),a=w(),l&&l.c(),this.h()},l(r){e=y(r,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var h=E(e);o=x(h,i),a=B(h),l&&l.l(h),h.forEach(m),this.h()},h(){p(e,"sveltekit:prefetch",""),p(e,"href",n=f[7]),p(e,"class","flex flex-1 flex-col m-4 bg-green-100 hover:bg-green-200 active:bg-green-300 transition-all items-center justify-center w-1/4 p-4")},m(r,h){b(r,e,h),g(e,o),g(e,a),l&&l.m(e,null),t=!0},p(r,h){(!t||h&1)&&i!==(i=r[3]+"")&&S(o,i),r[8]?l?l.p(r,h):(l=A(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null),(!t||h&1&&n!==(n=r[7]))&&p(e,"href",n)},i(r){t||(K(()=>{s||(s=D(e,F,{y:-20},!0)),s.run(1)}),t=!0)},o(r){s||(s=D(e,F,{y:-20},!1)),s.run(0),t=!1},d(r){r&&m(e),l&&l.d(),r&&s&&s.end()}}}function J(f){let e,i=f[3]+"",o,a,n=f[4]?"^":">",s,t,l,r,h,j;function P(){return f[1](f[4],f[5],f[6])}let c=f[4]&&R(f);return{c(){e=k("h1"),o=q(i),a=w(),s=q(n),t=w(),c&&c.c(),l=C(),this.h()},l(u){e=y(u,"H1",{class:!0});var _=E(e);o=x(_,i),a=B(_),s=x(_,n),_.forEach(m),t=B(u),c&&c.l(u),l=C(),this.h()},h(){p(e,"class","bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all cursor-pointer select-none text-center rounded-lg p-6 text-2xl w-full")},m(u,_){b(u,e,_),g(e,o),g(e,a),g(e,s),b(u,t,_),c&&c.m(u,_),b(u,l,_),r=!0,h||(j=z(e,"click",P),h=!0)},p(u,_){f=u,(!r||_&1)&&i!==(i=f[3]+"")&&S(o,i),(!r||_&1)&&n!==(n=f[4]?"^":">")&&S(s,n),f[4]?c?(c.p(f,_),_&1&&d(c,1)):(c=R(f),c.c(),d(c,1),c.m(l.parentNode,l)):c&&($(),v(c,1,1,()=>{c=null}),V())},i(u){r||(d(c),r=!0)},o(u){v(c),r=!1},d(u){u&&m(e),u&&m(t),c&&c.d(u),u&&m(l),h=!1,j()}}}function L(f){let e,i,o=f[0],a=[];for(let s=0;s<o.length;s+=1)a[s]=J(H(f,o,s));const n=s=>v(a[s],1,1,()=>{a[s]=null});return{c(){e=k("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=y(s,"DIV",{class:!0});var t=E(e);for(let l=0;l<a.length;l+=1)a[l].l(t);t.forEach(m),this.h()},h(){p(e,"class","m-8")},m(s,t){b(s,e,t);for(let l=0;l<a.length;l+=1)a[l].m(e,null);i=!0},p(s,[t]){if(t&1){o=s[0];let l;for(l=0;l<o.length;l+=1){const r=H(s,o,l);a[l]?(a[l].p(r,t),d(a[l],1)):(a[l]=J(r),a[l].c(),d(a[l],1),a[l].m(e,null))}for($(),l=o.length;l<a.length;l+=1)n(l);V()}},i(s){if(!i){for(let t=0;t<o.length;t+=1)d(a[t]);i=!0}},o(s){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)v(a[t]);i=!1},d(s){s&&m(e),N(a,s)}}}function M(f,e,i){const o=[{name:"General",boxes:[{name:"Basics",href:"/math/boxes/basics"},{name:"Sequence",href:"/math/boxes/sequence"},{name:"Formula Cheat Sheet",href:"/math/boxes/formulas"},{name:"Blobs & Trigonometry",href:"/math/boxes/blob"},{name:"Rotational Velocity",hook:"How do you rotate a cube?",href:"/math/boxes/rotational-velocity"}]}];return[o,(n,s,t)=>i(0,s[t].expanded=!n,o)]}class X extends Q{constructor(e){super(),T(this,e,M,L,U,{})}}export{X as default};