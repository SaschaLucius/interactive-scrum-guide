import{s as I,q as _,h as S,d as f,j as E,n as b,l as R,v as U,N as u,O as k,P as D,e as L,c as N,f as O,Q as h,k as T,R as g,S as j,r as q}from"./scheduler.BZrI2ZaZ.js";import{S as B,i as J}from"./index.BKHbsuZA.js";import{w as y}from"./index.DkZ3YXVy.js";import{b as A}from"./index.rV6zwFgL.js";const C=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function W(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function P(e,n){const i={},t={},c={$$scope:1};let l=e.length;for(;l--;){const r=e[l],s=n[l];if(s){for(const a in r)a in s||(t[a]=1);for(const a in s)c[a]||(i[a]=s[a],c[a]=1);e[l]=s}else for(const a in r)c[a]=1}for(const r in t)r in i||(i[r]=void 0);return i}function X(e){return typeof e=="object"&&e!==null?e:{}}const w=typeof localStorage<"u"?localStorage.getItem("umami"):JSON.stringify({enabled:!0}),z=y(w?JSON.parse(w).enabled:!0);z.subscribe(e=>typeof localStorage<"u"&&localStorage.setItem("umami",JSON.stringify({enabled:e})));const d=y(void 0),{document:m}=C;function H(e){let n,i,t,c,l=[{async:!0},{defer:!0},{id:"umami_analytics_script"},{"data-testid":"umami_analytics_script"},{src:i=e[1]},{"data-website-id":e[0]},e[2]],r={};for(let s=0;s<l.length;s+=1)r=D(r,l[s]);return{c(){n=L("script"),this.h()},l(s){n=N(s,"SCRIPT",{id:!0,"data-testid":!0,src:!0,"data-website-id":!0});var a=O(n);a.forEach(f),this.h()},h(){h(n,r)},m(s,a){T(s,n,a),t||(c=[g(n,"load",e[4]),g(n,"error",e[5])],t=!0)},p(s,a){h(n,r=P(l,[{async:!0},{defer:!0},{id:"umami_analytics_script"},{"data-testid":"umami_analytics_script"},a&2&&!j(n.src,i=s[1])&&{src:i},a&1&&{"data-website-id":s[0]},a&4&&s[2]]))},d(s){s&&f(n),t=!1,q(c)}}}function M(e){let n,i=e[3]&&H(e);return{c(){i&&i.c(),n=_()},l(t){const c=S("svelte-kdd4u",m.head);i&&i.l(c),n=_(),c.forEach(f)},m(t,c){i&&i.m(m.head,null),E(m.head,n)},p(t,[c]){t[3]&&i.p(t,c)},i:b,o:b,d(t){i&&i.d(t),f(n)}}}d.set(void 0);function Q(e,n,i){let t;R(e,d,o=>i(7,t=o));let{websiteID:c}=n,{srcURL:l}=n,{configuration:r={}}=n,{overwrite:s=!1}=n;if(U(()=>{document.getElementById("umami_analytics_script")!==null&&t!=="loaded"&&u(d,t="mounted",t)}),k(()=>{{const o=document.getElementById("umami_analytics_script");o!==null&&(o.remove(),u(d,t="removed",t),window.umami=void 0)}}),s&&A){const o=document.getElementById("umami_analytics_script");o!==null&&(o.remove(),u(d,t="removed",t))}let a=[void 0,"removed","error"].includes(t);function p(){u(d,t="loaded",t)}function v(o){u(d,t="error",t)}return e.$$set=o=>{"websiteID"in o&&i(0,c=o.websiteID),"srcURL"in o&&i(1,l=o.srcURL),"configuration"in o&&i(2,r=o.configuration),"overwrite"in o&&i(6,s=o.overwrite)},[c,l,r,a,p,v,s]}class Y extends B{constructor(n){super(),J(this,n,Q,M,I,{websiteID:0,srcURL:1,configuration:2,overwrite:6})}}globalThis.__sveltekit_1w4ai1h.env;export{Y as U,X as a,W as e,P as g,d as s};