var Ht=Object.defineProperty;var Kt=(s,e,n)=>e in s?Ht(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var J=(s,e,n)=>(Kt(s,typeof e!="symbol"?e+"":e,n),n),Vt=(s,e,n)=>{if(!e.has(s))throw TypeError("Cannot "+n)};var qe=(s,e,n)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,n)};var Ae=(s,e,n)=>(Vt(s,e,"access private method"),n);import{_ as Pe,s as z,e as _,c as P,f as $,d as m,i as b,E as Ut,k as y,$ as tt,R as ue,n as L,V as me,r as Ke,t as be,g as ve,a0 as De,j as re,x as Ce,a1 as zt,a2 as Yt,v as Ve,q as k,a3 as nt,P as ne,a4 as Zt,z as F,a as ee,b as te,a5 as Jt,W as j,X as W,Y as H,Z as K,S as $e,a6 as Bt,a7 as Ot,a8 as Qt,a9 as Xt,l as we,aa as it,N as Et,y as Le,w as en,h as tn,p as nn,ab as rt}from"../chunks/scheduler.BZrI2ZaZ.js";import{S as B,i as O,g as G,t as d,c as N,a as h,b as A,d as q,m as x,e as I,f as ot}from"../chunks/index.BKHbsuZA.js";import{s as Ge,e as Y,g as ae,a as se}from"../chunks/public.DLftdizK.js";import{w as Ue,d as Ye}from"../chunks/index.DkZ3YXVy.js";function rn(s){return[void 0,"error","removed"].includes(Pe(Ge))?Promise.resolve("Umami not found."):Ze().then(e=>s?e.track(n=>({...n,...s})):e.track())}async function Ze(){let s=50;for(;!window.umami;){if([void 0,"error","removed"].includes(Pe(Ge))||s>0)return{track:()=>Promise.resolve("Umami not found.")};await new Promise(e=>setTimeout(e,100)),s--}return window.umami}function on(s,e){return[void 0,"error","removed"].includes(Pe(Ge))?Promise.resolve("Umami not found."):Ze().then(n=>e?n.track(s,e):n.track(s))}function an(s,e,n){return[void 0,"error","removed"].includes(Pe(Ge))?Promise.resolve("Umami not found."):Ze().then(i=>n?i.track(t=>({...t,...e,name:s,data:n})):i.track(t=>({...t,...e,name:s})))}function sn(s){var r,o,l,a;const e=(r=s.target)==null?void 0:r.getAttribute("data-umami-event"),n=(o=s.currentTarget)==null?void 0:o.getAttribute("data-umami-event"),i=(l=s.target)==null?void 0:l.getAttribute("id"),t=(a=s.currentTarget)==null?void 0:a.getAttribute("id");on(`${e??n??i??t} ${s.type}`,s)}function at(s,e,n){const i=s.slice();return i[5]=e[n],i}function st(s){let e,n=s[5].replaceAll("_"," ")+"",i,t;return{c(){e=_("option"),i=be(n),this.h()},l(r){e=P(r,"OPTION",{});var o=$(e);i=ve(o,n),o.forEach(m),this.h()},h(){e.__value=t=s[5],De(e,e.__value)},m(r,o){y(r,e,o),re(e,i)},p(r,o){o&2&&n!==(n=r[5].replaceAll("_"," ")+"")&&Ce(i,n),o&2&&t!==(t=r[5])&&(e.__value=t,De(e,e.__value))},d(r){r&&m(e)}}}function ln(s){let e,n,i,t=Y(s[1]),r=[];for(let o=0;o<t.length;o+=1)r[o]=st(at(s,t,o));return{c(){e=_("select");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=P(o,"SELECT",{id:!0,class:!0});var l=$(e);for(let a=0;a<r.length;a+=1)r[a].l(l);l.forEach(m),this.h()},h(){b(e,"id","select"),b(e,"class","svelte-vfwpa"),s[0]===void 0&&Ut(()=>s[3].call(e))},m(o,l){y(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);tt(e,s[0],!0),n||(i=[ue(e,"change",s[2]),ue(e,"change",s[3]),ue(e,"change",s[4])],n=!0)},p(o,[l]){if(l&2){t=Y(o[1]);let a;for(a=0;a<t.length;a+=1){const c=at(o,t,a);r[a]?r[a].p(c,l):(r[a]=st(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}l&3&&tt(e,o[0])},i:L,o:L,d(o){o&&m(e),me(r,o),n=!1,Ke(i)}}}function cn(s,e,n){let{selectedGuide:i=""}=e,{options:t}=e;function r(a){zt.call(this,s,a)}function o(){i=Yt(this),n(0,i),n(1,t)}const l=()=>an(i,{url:"/interactive-scrum-guide"});return s.$$set=a=>{"selectedGuide"in a&&n(0,i=a.selectedGuide),"options"in a&&n(1,t=a.options)},[i,t,r,o,l]}class un extends B{constructor(e){super(),O(this,e,cn,ln,z,{selectedGuide:0,options:1})}}function mn(){const s=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||s(e)},Ve(()=>{console.warn=s})}function lt(s,e,n){const i=s.slice();return i[18]=e[n],i}function ct(s,e,n){const i=s.slice();return i[18]=e[n],i}function ut(s,e,n){const i=s.slice();return i[10]=e[n],i}function mt(s,e,n){const i=s.slice();return i[13]=e[n],i[15]=n,i}function ht(s,e,n){const i=s.slice();return i[16]=e[n],i[15]=n,i}function dt(s,e,n){const i=s.slice();return i[7]=e[n],i}function hn(s){let e,n,i,t;const r=[gn,fn,pn],o=[];function l(a,c){return a[0]==="table"?0:a[0]==="list"?1:2}return e=l(s),n=o[e]=r[e](s),{c(){n.c(),i=k()},l(a){n.l(a),i=k()},m(a,c){o[e].m(a,c),y(a,i,c),t=!0},p(a,c){let u=e;e=l(a),e===u?o[e].p(a,c):(G(),d(o[u],1,1,()=>{o[u]=null}),N(),n=o[e],n?n.p(a,c):(n=o[e]=r[e](a),n.c()),h(n,1),n.m(i.parentNode,i))},i(a){t||(h(n),t=!0)},o(a){d(n),t=!1},d(a){a&&m(i),o[e].d(a)}}}function dn(s){let e,n,i=Y(s[1]),t=[];for(let o=0;o<i.length;o+=1)t[o]=wt(dt(s,i,o));const r=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=k()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=k()},m(o,l){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(o,l);y(o,e,l),n=!0},p(o,l){if(l&34){i=Y(o[1]);let a;for(a=0;a<i.length;a+=1){const c=dt(o,i,a);t[a]?(t[a].p(c,l),h(t[a],1)):(t[a]=wt(c),t[a].c(),h(t[a],1),t[a].m(e.parentNode,e))}for(G(),a=i.length;a<t.length;a+=1)r(a);N()}},i(o){if(!n){for(let l=0;l<i.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){o&&m(e),me(t,o)}}}function pn(s){let e,n,i;const t=[s[6]];var r=s[5][s[0]];function o(l,a){let c={$$slots:{default:[wn]},$$scope:{ctx:l}};for(let u=0;u<t.length;u+=1)c=ne(c,t[u]);return a!==void 0&&a&64&&(c=ne(c,ae(t,[se(l[6])]))),{props:c}}return r&&(e=F(r,o(s))),{c(){e&&A(e.$$.fragment),n=k()},l(l){e&&q(e.$$.fragment,l),n=k()},m(l,a){e&&x(e,l,a),y(l,n,a),i=!0},p(l,a){if(a&33&&r!==(r=l[5][l[0]])){if(e){G();const c=e;d(c.$$.fragment,1,0,()=>{I(c,1)}),N()}r?(e=F(r,o(l,a)),A(e.$$.fragment),h(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else if(r){const c=a&64?ae(t,[se(l[6])]):{};a&8388706&&(c.$$scope={dirty:a,ctx:l}),e.$set(c)}},i(l){i||(e&&h(e.$$.fragment,l),i=!0)},o(l){e&&d(e.$$.fragment,l),i=!1},d(l){l&&m(n),e&&I(e,l)}}}function fn(s){let e,n,i,t;const r=[vn,bn],o=[];function l(a,c){return a[4]?0:1}return e=l(s),n=o[e]=r[e](s),{c(){n.c(),i=k()},l(a){n.l(a),i=k()},m(a,c){o[e].m(a,c),y(a,i,c),t=!0},p(a,c){let u=e;e=l(a),e===u?o[e].p(a,c):(G(),d(o[u],1,1,()=>{o[u]=null}),N(),n=o[e],n?n.p(a,c):(n=o[e]=r[e](a),n.c()),h(n,1),n.m(i.parentNode,i))},i(a){t||(h(n),t=!0)},o(a){d(n),t=!1},d(a){a&&m(i),o[e].d(a)}}}function gn(s){let e,n,i;var t=s[5].table;function r(o,l){return{props:{$$slots:{default:[$n]},$$scope:{ctx:o}}}}return t&&(e=F(t,r(s))),{c(){e&&A(e.$$.fragment),n=k()},l(o){e&&q(e.$$.fragment,o),n=k()},m(o,l){e&&x(e,o,l),y(o,n,l),i=!0},p(o,l){if(l&32&&t!==(t=o[5].table)){if(e){G();const a=e;d(a.$$.fragment,1,0,()=>{I(a,1)}),N()}t?(e=F(t,r(o)),A(e.$$.fragment),h(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else if(t){const a={};l&8388716&&(a.$$scope={dirty:l,ctx:o}),e.$set(a)}},i(o){i||(e&&h(e.$$.fragment,o),i=!0)},o(o){e&&d(e.$$.fragment,o),i=!1},d(o){o&&m(n),e&&I(e,o)}}}function yn(s){let e=s[6].raw+"",n;return{c(){n=be(e)},l(i){n=ve(i,e)},m(i,t){y(i,n,t)},p(i,t){t&64&&e!==(e=i[6].raw+"")&&Ce(n,e)},i:L,o:L,d(i){i&&m(n)}}}function Sn(s){let e,n;return e=new ye({props:{tokens:s[1],renderers:s[5]}}),{c(){A(e.$$.fragment)},l(i){q(e.$$.fragment,i)},m(i,t){x(e,i,t),n=!0},p(i,t){const r={};t&2&&(r.tokens=i[1]),t&32&&(r.renderers=i[5]),e.$set(r)},i(i){n||(h(e.$$.fragment,i),n=!0)},o(i){d(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function wn(s){let e,n,i,t;const r=[Sn,yn],o=[];function l(a,c){return a[1]?0:1}return e=l(s),n=o[e]=r[e](s),{c(){n.c(),i=k()},l(a){n.l(a),i=k()},m(a,c){o[e].m(a,c),y(a,i,c),t=!0},p(a,c){let u=e;e=l(a),e===u?o[e].p(a,c):(G(),d(o[u],1,1,()=>{o[u]=null}),N(),n=o[e],n?n.p(a,c):(n=o[e]=r[e](a),n.c()),h(n,1),n.m(i.parentNode,i))},i(a){t||(h(n),t=!0)},o(a){d(n),t=!1},d(a){a&&m(i),o[e].d(a)}}}function bn(s){let e,n,i;const t=[{ordered:s[4]},s[6]];var r=s[5].list;function o(l,a){let c={$$slots:{default:[Tn]},$$scope:{ctx:l}};for(let u=0;u<t.length;u+=1)c=ne(c,t[u]);return a!==void 0&&a&80&&(c=ne(c,ae(t,[a&16&&{ordered:l[4]},a&64&&se(l[6])]))),{props:c}}return r&&(e=F(r,o(s))),{c(){e&&A(e.$$.fragment),n=k()},l(l){e&&q(e.$$.fragment,l),n=k()},m(l,a){e&&x(e,l,a),y(l,n,a),i=!0},p(l,a){if(a&32&&r!==(r=l[5].list)){if(e){G();const c=e;d(c.$$.fragment,1,0,()=>{I(c,1)}),N()}r?(e=F(r,o(l,a)),A(e.$$.fragment),h(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else if(r){const c=a&80?ae(t,[a&16&&{ordered:l[4]},a&64&&se(l[6])]):{};a&8388704&&(c.$$scope={dirty:a,ctx:l}),e.$set(c)}},i(l){i||(e&&h(e.$$.fragment,l),i=!0)},o(l){e&&d(e.$$.fragment,l),i=!1},d(l){l&&m(n),e&&I(e,l)}}}function vn(s){let e,n,i;const t=[{ordered:s[4]},s[6]];var r=s[5].list;function o(l,a){let c={$$slots:{default:[Pn]},$$scope:{ctx:l}};for(let u=0;u<t.length;u+=1)c=ne(c,t[u]);return a!==void 0&&a&80&&(c=ne(c,ae(t,[a&16&&{ordered:l[4]},a&64&&se(l[6])]))),{props:c}}return r&&(e=F(r,o(s))),{c(){e&&A(e.$$.fragment),n=k()},l(l){e&&q(e.$$.fragment,l),n=k()},m(l,a){e&&x(e,l,a),y(l,n,a),i=!0},p(l,a){if(a&32&&r!==(r=l[5].list)){if(e){G();const c=e;d(c.$$.fragment,1,0,()=>{I(c,1)}),N()}r?(e=F(r,o(l,a)),A(e.$$.fragment),h(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else if(r){const c=a&80?ae(t,[a&16&&{ordered:l[4]},a&64&&se(l[6])]):{};a&8388704&&(c.$$scope={dirty:a,ctx:l}),e.$set(c)}},i(l){i||(e&&h(e.$$.fragment,l),i=!0)},o(l){e&&d(e.$$.fragment,l),i=!1},d(l){l&&m(n),e&&I(e,l)}}}function kn(s){let e,n,i;return e=new ye({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){A(e.$$.fragment),n=ee()},l(t){q(e.$$.fragment,t),n=te(t)},m(t,r){x(e,t,r),y(t,n,r),i=!0},p(t,r){const o={};r&64&&(o.tokens=t[18].tokens),r&32&&(o.renderers=t[5]),e.$set(o)},i(t){i||(h(e.$$.fragment,t),i=!0)},o(t){d(e.$$.fragment,t),i=!1},d(t){t&&m(n),I(e,t)}}}function pt(s){let e,n,i;const t=[s[18]];var r=s[5].unorderedlistitem||s[5].listitem;function o(l,a){let c={$$slots:{default:[kn]},$$scope:{ctx:l}};for(let u=0;u<t.length;u+=1)c=ne(c,t[u]);return a!==void 0&&a&64&&(c=ne(c,ae(t,[se(l[18])]))),{props:c}}return r&&(e=F(r,o(s))),{c(){e&&A(e.$$.fragment),n=k()},l(l){e&&q(e.$$.fragment,l),n=k()},m(l,a){e&&x(e,l,a),y(l,n,a),i=!0},p(l,a){if(a&32&&r!==(r=l[5].unorderedlistitem||l[5].listitem)){if(e){G();const c=e;d(c.$$.fragment,1,0,()=>{I(c,1)}),N()}r?(e=F(r,o(l,a)),A(e.$$.fragment),h(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else if(r){const c=a&64?ae(t,[se(l[18])]):{};a&8388704&&(c.$$scope={dirty:a,ctx:l}),e.$set(c)}},i(l){i||(e&&h(e.$$.fragment,l),i=!0)},o(l){e&&d(e.$$.fragment,l),i=!1},d(l){l&&m(n),e&&I(e,l)}}}function Tn(s){let e,n,i=Y(s[6].items),t=[];for(let o=0;o<i.length;o+=1)t[o]=pt(lt(s,i,o));const r=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=k()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=k()},m(o,l){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(o,l);y(o,e,l),n=!0},p(o,l){if(l&96){i=Y(o[6].items);let a;for(a=0;a<i.length;a+=1){const c=lt(o,i,a);t[a]?(t[a].p(c,l),h(t[a],1)):(t[a]=pt(c),t[a].c(),h(t[a],1),t[a].m(e.parentNode,e))}for(G(),a=i.length;a<t.length;a+=1)r(a);N()}},i(o){if(!n){for(let l=0;l<i.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){o&&m(e),me(t,o)}}}function _n(s){let e,n,i;return e=new ye({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){A(e.$$.fragment),n=ee()},l(t){q(e.$$.fragment,t),n=te(t)},m(t,r){x(e,t,r),y(t,n,r),i=!0},p(t,r){const o={};r&64&&(o.tokens=t[18].tokens),r&32&&(o.renderers=t[5]),e.$set(o)},i(t){i||(h(e.$$.fragment,t),i=!0)},o(t){d(e.$$.fragment,t),i=!1},d(t){t&&m(n),I(e,t)}}}function ft(s){let e,n,i;const t=[s[18]];var r=s[5].orderedlistitem||s[5].listitem;function o(l,a){let c={$$slots:{default:[_n]},$$scope:{ctx:l}};for(let u=0;u<t.length;u+=1)c=ne(c,t[u]);return a!==void 0&&a&64&&(c=ne(c,ae(t,[se(l[18])]))),{props:c}}return r&&(e=F(r,o(s))),{c(){e&&A(e.$$.fragment),n=k()},l(l){e&&q(e.$$.fragment,l),n=k()},m(l,a){e&&x(e,l,a),y(l,n,a),i=!0},p(l,a){if(a&32&&r!==(r=l[5].orderedlistitem||l[5].listitem)){if(e){G();const c=e;d(c.$$.fragment,1,0,()=>{I(c,1)}),N()}r?(e=F(r,o(l,a)),A(e.$$.fragment),h(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else if(r){const c=a&64?ae(t,[se(l[18])]):{};a&8388704&&(c.$$scope={dirty:a,ctx:l}),e.$set(c)}},i(l){i||(e&&h(e.$$.fragment,l),i=!0)},o(l){e&&d(e.$$.fragment,l),i=!1},d(l){l&&m(n),e&&I(e,l)}}}function Pn(s){let e,n,i=Y(s[6].items),t=[];for(let o=0;o<i.length;o+=1)t[o]=ft(ct(s,i,o));const r=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=k()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=k()},m(o,l){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(o,l);y(o,e,l),n=!0},p(o,l){if(l&96){i=Y(o[6].items);let a;for(a=0;a<i.length;a+=1){const c=ct(o,i,a);t[a]?(t[a].p(c,l),h(t[a],1)):(t[a]=ft(c),t[a].c(),h(t[a],1),t[a].m(e.parentNode,e))}for(G(),a=i.length;a<t.length;a+=1)r(a);N()}},i(o){if(!n){for(let l=0;l<i.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){o&&m(e),me(t,o)}}}function Cn(s){let e,n,i;return e=new ye({props:{tokens:s[16].tokens,renderers:s[5]}}),{c(){A(e.$$.fragment),n=ee()},l(t){q(e.$$.fragment,t),n=te(t)},m(t,r){x(e,t,r),y(t,n,r),i=!0},p(t,r){const o={};r&4&&(o.tokens=t[16].tokens),r&32&&(o.renderers=t[5]),e.$set(o)},i(t){i||(h(e.$$.fragment,t),i=!0)},o(t){d(e.$$.fragment,t),i=!1},d(t){t&&m(n),I(e,t)}}}function gt(s){let e,n,i;var t=s[5].tablecell;function r(o,l){return{props:{header:!0,align:o[6].align[o[15]]||"center",$$slots:{default:[Cn]},$$scope:{ctx:o}}}}return t&&(e=F(t,r(s))),{c(){e&&A(e.$$.fragment),n=k()},l(o){e&&q(e.$$.fragment,o),n=k()},m(o,l){e&&x(e,o,l),y(o,n,l),i=!0},p(o,l){if(l&32&&t!==(t=o[5].tablecell)){if(e){G();const a=e;d(a.$$.fragment,1,0,()=>{I(a,1)}),N()}t?(e=F(t,r(o)),A(e.$$.fragment),h(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else if(t){const a={};l&64&&(a.align=o[6].align[o[15]]||"center"),l&8388644&&(a.$$scope={dirty:l,ctx:o}),e.$set(a)}},i(o){i||(e&&h(e.$$.fragment,o),i=!0)},o(o){e&&d(e.$$.fragment,o),i=!1},d(o){o&&m(n),e&&I(e,o)}}}function An(s){let e,n,i=Y(s[2]),t=[];for(let o=0;o<i.length;o+=1)t[o]=gt(ht(s,i,o));const r=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=k()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=k()},m(o,l){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(o,l);y(o,e,l),n=!0},p(o,l){if(l&100){i=Y(o[2]);let a;for(a=0;a<i.length;a+=1){const c=ht(o,i,a);t[a]?(t[a].p(c,l),h(t[a],1)):(t[a]=gt(c),t[a].c(),h(t[a],1),t[a].m(e.parentNode,e))}for(G(),a=i.length;a<t.length;a+=1)r(a);N()}},i(o){if(!n){for(let l=0;l<i.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){o&&m(e),me(t,o)}}}function xn(s){let e,n,i;var t=s[5].tablerow;function r(o,l){return{props:{$$slots:{default:[An]},$$scope:{ctx:o}}}}return t&&(e=F(t,r(s))),{c(){e&&A(e.$$.fragment),n=k()},l(o){e&&q(e.$$.fragment,o),n=k()},m(o,l){e&&x(e,o,l),y(o,n,l),i=!0},p(o,l){if(l&32&&t!==(t=o[5].tablerow)){if(e){G();const a=e;d(a.$$.fragment,1,0,()=>{I(a,1)}),N()}t?(e=F(t,r(o)),A(e.$$.fragment),h(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else if(t){const a={};l&8388708&&(a.$$scope={dirty:l,ctx:o}),e.$set(a)}},i(o){i||(e&&h(e.$$.fragment,o),i=!0)},o(o){e&&d(e.$$.fragment,o),i=!1},d(o){o&&m(n),e&&I(e,o)}}}function In(s){let e,n;return e=new ye({props:{tokens:s[13].tokens,renderers:s[5]}}),{c(){A(e.$$.fragment)},l(i){q(e.$$.fragment,i)},m(i,t){x(e,i,t),n=!0},p(i,t){const r={};t&8&&(r.tokens=i[13].tokens),t&32&&(r.renderers=i[5]),e.$set(r)},i(i){n||(h(e.$$.fragment,i),n=!0)},o(i){d(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function yt(s){let e,n,i;var t=s[5].tablecell;function r(o,l){return{props:{header:!1,align:o[6].align[o[15]]||"center",$$slots:{default:[In]},$$scope:{ctx:o}}}}return t&&(e=F(t,r(s))),{c(){e&&A(e.$$.fragment),n=k()},l(o){e&&q(e.$$.fragment,o),n=k()},m(o,l){e&&x(e,o,l),y(o,n,l),i=!0},p(o,l){if(l&32&&t!==(t=o[5].tablecell)){if(e){G();const a=e;d(a.$$.fragment,1,0,()=>{I(a,1)}),N()}t?(e=F(t,r(o)),A(e.$$.fragment),h(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else if(t){const a={};l&64&&(a.align=o[6].align[o[15]]||"center"),l&8388648&&(a.$$scope={dirty:l,ctx:o}),e.$set(a)}},i(o){i||(e&&h(e.$$.fragment,o),i=!0)},o(o){e&&d(e.$$.fragment,o),i=!1},d(o){o&&m(n),e&&I(e,o)}}}function Rn(s){let e,n,i=Y(s[10]),t=[];for(let o=0;o<i.length;o+=1)t[o]=yt(mt(s,i,o));const r=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=ee()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=te(o)},m(o,l){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(o,l);y(o,e,l),n=!0},p(o,l){if(l&104){i=Y(o[10]);let a;for(a=0;a<i.length;a+=1){const c=mt(o,i,a);t[a]?(t[a].p(c,l),h(t[a],1)):(t[a]=yt(c),t[a].c(),h(t[a],1),t[a].m(e.parentNode,e))}for(G(),a=i.length;a<t.length;a+=1)r(a);N()}},i(o){if(!n){for(let l=0;l<i.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){o&&m(e),me(t,o)}}}function St(s){let e,n,i;var t=s[5].tablerow;function r(o,l){return{props:{$$slots:{default:[Rn]},$$scope:{ctx:o}}}}return t&&(e=F(t,r(s))),{c(){e&&A(e.$$.fragment),n=k()},l(o){e&&q(e.$$.fragment,o),n=k()},m(o,l){e&&x(e,o,l),y(o,n,l),i=!0},p(o,l){if(l&32&&t!==(t=o[5].tablerow)){if(e){G();const a=e;d(a.$$.fragment,1,0,()=>{I(a,1)}),N()}t?(e=F(t,r(o)),A(e.$$.fragment),h(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else if(t){const a={};l&8388712&&(a.$$scope={dirty:l,ctx:o}),e.$set(a)}},i(o){i||(e&&h(e.$$.fragment,o),i=!0)},o(o){e&&d(e.$$.fragment,o),i=!1},d(o){o&&m(n),e&&I(e,o)}}}function Dn(s){let e,n,i=Y(s[3]),t=[];for(let o=0;o<i.length;o+=1)t[o]=St(ut(s,i,o));const r=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=k()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=k()},m(o,l){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(o,l);y(o,e,l),n=!0},p(o,l){if(l&104){i=Y(o[3]);let a;for(a=0;a<i.length;a+=1){const c=ut(o,i,a);t[a]?(t[a].p(c,l),h(t[a],1)):(t[a]=St(c),t[a].c(),h(t[a],1),t[a].m(e.parentNode,e))}for(G(),a=i.length;a<t.length;a+=1)r(a);N()}},i(o){if(!n){for(let l=0;l<i.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){o&&m(e),me(t,o)}}}function $n(s){let e,n,i,t,r;var o=s[5].tablehead;function l(u,g){return{props:{$$slots:{default:[xn]},$$scope:{ctx:u}}}}o&&(e=F(o,l(s)));var a=s[5].tablebody;function c(u,g){return{props:{$$slots:{default:[Dn]},$$scope:{ctx:u}}}}return a&&(i=F(a,c(s))),{c(){e&&A(e.$$.fragment),n=ee(),i&&A(i.$$.fragment),t=k()},l(u){e&&q(e.$$.fragment,u),n=te(u),i&&q(i.$$.fragment,u),t=k()},m(u,g){e&&x(e,u,g),y(u,n,g),i&&x(i,u,g),y(u,t,g),r=!0},p(u,g){if(g&32&&o!==(o=u[5].tablehead)){if(e){G();const p=e;d(p.$$.fragment,1,0,()=>{I(p,1)}),N()}o?(e=F(o,l(u)),A(e.$$.fragment),h(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else if(o){const p={};g&8388708&&(p.$$scope={dirty:g,ctx:u}),e.$set(p)}if(g&32&&a!==(a=u[5].tablebody)){if(i){G();const p=i;d(p.$$.fragment,1,0,()=>{I(p,1)}),N()}a?(i=F(a,c(u)),A(i.$$.fragment),h(i.$$.fragment,1),x(i,t.parentNode,t)):i=null}else if(a){const p={};g&8388712&&(p.$$scope={dirty:g,ctx:u}),i.$set(p)}},i(u){r||(e&&h(e.$$.fragment,u),i&&h(i.$$.fragment,u),r=!0)},o(u){e&&d(e.$$.fragment,u),i&&d(i.$$.fragment,u),r=!1},d(u){u&&(m(n),m(t)),e&&I(e,u),i&&I(i,u)}}}function wt(s){let e,n;const i=[s[7],{renderers:s[5]}];let t={};for(let r=0;r<i.length;r+=1)t=ne(t,i[r]);return e=new ye({props:t}),{c(){A(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,o){x(e,r,o),n=!0},p(r,o){const l=o&34?ae(i,[o&2&&se(r[7]),o&32&&{renderers:r[5]}]):{};e.$set(l)},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){d(e.$$.fragment,r),n=!1},d(r){I(e,r)}}}function zn(s){let e,n,i,t;const r=[dn,hn],o=[];function l(a,c){return a[0]?a[5][a[0]]?1:-1:0}return~(e=l(s))&&(n=o[e]=r[e](s)),{c(){n&&n.c(),i=k()},l(a){n&&n.l(a),i=k()},m(a,c){~e&&o[e].m(a,c),y(a,i,c),t=!0},p(a,[c]){let u=e;e=l(a),e===u?~e&&o[e].p(a,c):(n&&(G(),d(o[u],1,1,()=>{o[u]=null}),N()),~e?(n=o[e],n?n.p(a,c):(n=o[e]=r[e](a),n.c()),h(n,1),n.m(i.parentNode,i)):n=null)},i(a){t||(h(n),t=!0)},o(a){d(n),t=!1},d(a){a&&m(i),~e&&o[e].d(a)}}}function Bn(s,e,n){const i=["type","tokens","header","rows","ordered","renderers"];let t=nt(e,i),{type:r=void 0}=e,{tokens:o=void 0}=e,{header:l=void 0}=e,{rows:a=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return mn(),s.$$set=g=>{e=ne(ne({},e),Zt(g)),n(6,t=nt(e,i)),"type"in g&&n(0,r=g.type),"tokens"in g&&n(1,o=g.tokens),"header"in g&&n(2,l=g.header),"rows"in g&&n(3,a=g.rows),"ordered"in g&&n(4,c=g.ordered),"renderers"in g&&n(5,u=g.renderers)},[r,o,l,a,c,u,t]}let ye=class extends B{constructor(e){super(),O(this,e,Bn,zn,z,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}};function Je(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let de=Je();function Mt(s){de=s}const Gt=/[&<>"']/,On=new RegExp(Gt.source,"g"),Nt=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,En=new RegExp(Nt.source,"g"),Mn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bt=s=>Mn[s];function Z(s,e){if(e){if(Gt.test(s))return s.replace(On,bt)}else if(Nt.test(s))return s.replace(En,bt);return s}const Gn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function qt(s){return s.replace(Gn,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const Nn=/(^|[^\[])\^/g;function E(s,e){s=typeof s=="string"?s:s.source,e=e||"";const n={replace:(i,t)=>(t=t.source||t,t=t.replace(Nn,"$1"),s=s.replace(i,t),n),getRegex:()=>new RegExp(s,e)};return n}const qn=/[^\w:]/g,Fn=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function vt(s,e,n){if(s){let i;try{i=decodeURIComponent(qt(n)).replace(qn,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}e&&!Fn.test(n)&&(n=Hn(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const xe={},Ln=/^[^:]+:\/*[^/]*$/,jn=/^([^:]+:)[\s\S]*$/,Wn=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Hn(s,e){xe[" "+s]||(Ln.test(s)?xe[" "+s]=s+"/":xe[" "+s]=Re(s,"/",!0)),s=xe[" "+s];const n=s.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:s.replace(jn,"$1")+e:e.charAt(0)==="/"?n?e:s.replace(Wn,"$1")+e:s+e}const ze={exec:function(){}};function kt(s,e){const n=s.replace(/\|/g,(r,o,l)=>{let a=!1,c=o;for(;--c>=0&&l[c]==="\\";)a=!a;return a?"|":" |"}),i=n.split(/ \|/);let t=0;if(i[0].trim()||i.shift(),i.length>0&&!i[i.length-1].trim()&&i.pop(),i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;t<i.length;t++)i[t]=i[t].trim().replace(/\\\|/g,"|");return i}function Re(s,e,n){const i=s.length;if(i===0)return"";let t=0;for(;t<i;){const r=s.charAt(i-t-1);if(r===e&&!n)t++;else if(r!==e&&n)t++;else break}return s.slice(0,i-t)}function Kn(s,e){if(s.indexOf(e[1])===-1)return-1;const n=s.length;let i=0,t=0;for(;t<n;t++)if(s[t]==="\\")t++;else if(s[t]===e[0])i++;else if(s[t]===e[1]&&(i--,i<0))return t;return-1}function Vn(s,e){!s||s.silent||(e&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(s.sanitize||s.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(s.highlight||s.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),s.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),s.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),s.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),s.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(s.headerIds||s.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function Tt(s,e,n,i){const t=e.href,r=e.title?Z(e.title):null,o=s[1].replace(/\\([\[\]])/g,"$1");if(s[0].charAt(0)!=="!"){i.state.inLink=!0;const l={type:"link",raw:n,href:t,title:r,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,l}return{type:"image",raw:n,href:t,title:r,text:Z(o)}}function Un(s,e){const n=s.match(/^(\s+)(?:```)/);if(n===null)return e;const i=n[1];return e.split(`
`).map(t=>{const r=t.match(/^\s+/);if(r===null)return t;const[o]=r;return o.length>=i.length?t.slice(i.length):t}).join(`
`)}class Be{constructor(e){this.options=e||de}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const i=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:Re(i,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const i=n[0],t=Un(i,n[3]||"");return{type:"code",raw:i,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:t}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let i=n[2].trim();if(/#$/.test(i)){const t=Re(i,"#");(this.options.pedantic||!t||/ $/.test(t))&&(i=t.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const i=n[0].replace(/^ *>[ \t]?/gm,""),t=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(i);return this.lexer.state.top=t,{type:"blockquote",raw:n[0],tokens:r,text:i}}}list(e){let n=this.rules.block.list.exec(e);if(n){let i,t,r,o,l,a,c,u,g,p,f,w,C=n[1].trim();const V=C.length>1,R={type:"list",raw:"",ordered:V,start:V?+C.slice(0,-1):"",loose:!1,items:[]};C=V?`\\d{1,9}\\${C.slice(-1)}`:`\\${C}`,this.options.pedantic&&(C=V?C:"[*+-]");const D=new RegExp(`^( {0,3}${C})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(w=!1,!(!(n=D.exec(e))||this.rules.block.hr.test(e)));){if(i=n[0],e=e.substring(i.length),u=n[2].split(`
`,1)[0].replace(/^\t+/,Q=>" ".repeat(3*Q.length)),g=e.split(`
`,1)[0],this.options.pedantic?(o=2,f=u.trimLeft()):(o=n[2].search(/[^ ]/),o=o>4?1:o,f=u.slice(o),o+=n[1].length),a=!1,!u&&/^ *$/.test(g)&&(i+=g+`
`,e=e.substring(g.length+1),w=!0),!w){const Q=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),ie=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),X=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),pe=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(p=e.split(`
`,1)[0],g=p,this.options.pedantic&&(g=g.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(X.test(g)||pe.test(g)||Q.test(g)||ie.test(e)));){if(g.search(/[^ ]/)>=o||!g.trim())f+=`
`+g.slice(o);else{if(a||u.search(/[^ ]/)>=4||X.test(u)||pe.test(u)||ie.test(u))break;f+=`
`+g}!a&&!g.trim()&&(a=!0),i+=p+`
`,e=e.substring(p.length+1),u=g.slice(o)}}R.loose||(c?R.loose=!0:/\n *\n *$/.test(i)&&(c=!0)),this.options.gfm&&(t=/^\[[ xX]\] /.exec(f),t&&(r=t[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),R.items.push({type:"list_item",raw:i,task:!!t,checked:r,loose:!1,text:f}),R.raw+=i}R.items[R.items.length-1].raw=i.trimRight(),R.items[R.items.length-1].text=f.trimRight(),R.raw=R.raw.trimRight();const le=R.items.length;for(l=0;l<le;l++)if(this.lexer.state.top=!1,R.items[l].tokens=this.lexer.blockTokens(R.items[l].text,[]),!R.loose){const Q=R.items[l].tokens.filter(X=>X.type==="space"),ie=Q.length>0&&Q.some(X=>/\n.*\n/.test(X.raw));R.loose=ie}if(R.loose)for(l=0;l<le;l++)R.items[l].loose=!0;return R}}html(e){const n=this.rules.block.html.exec(e);if(n){const i={type:"html",block:!0,raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const t=this.options.sanitizer?this.options.sanitizer(n[0]):Z(n[0]);i.type="paragraph",i.text=t,i.tokens=this.lexer.inline(t)}return i}}def(e){const n=this.rules.block.def.exec(e);if(n){const i=n[1].toLowerCase().replace(/\s+/g," "),t=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",r=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:i,raw:n[0],href:t,title:r}}}table(e){const n=this.rules.block.table.exec(e);if(n){const i={type:"table",header:kt(n[1]).map(t=>({text:t})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){i.raw=n[0];let t=i.align.length,r,o,l,a;for(r=0;r<t;r++)/^ *-+: *$/.test(i.align[r])?i.align[r]="right":/^ *:-+: *$/.test(i.align[r])?i.align[r]="center":/^ *:-+ *$/.test(i.align[r])?i.align[r]="left":i.align[r]=null;for(t=i.rows.length,r=0;r<t;r++)i.rows[r]=kt(i.rows[r],i.header.length).map(c=>({text:c}));for(t=i.header.length,o=0;o<t;o++)i.header[o].tokens=this.lexer.inline(i.header[o].text);for(t=i.rows.length,o=0;o<t;o++)for(a=i.rows[o],l=0;l<a.length;l++)a[l].tokens=this.lexer.inline(a[l].text);return i}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const i=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Z(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):Z(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const i=n[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const o=Re(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{const o=Kn(n[2],"()");if(o>-1){const a=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,a).trim(),n[3]=""}}let t=n[2],r="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(t);o&&(t=o[1],r=o[3])}else r=n[3]?n[3].slice(1,-1):"";return t=t.trim(),/^</.test(t)&&(this.options.pedantic&&!/>$/.test(i)?t=t.slice(1):t=t.slice(1,-1)),Tt(n,{href:t&&t.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let t=(i[2]||i[1]).replace(/\s+/g," ");if(t=n[t.toLowerCase()],!t){const r=i[0].charAt(0);return{type:"text",raw:r,text:r}}return Tt(i,t,i[0],this.lexer)}}emStrong(e,n,i=""){let t=this.rules.inline.emStrong.lDelim.exec(e);if(!t||t[3]&&i.match(/[\p{L}\p{N}]/u))return;if(!(t[1]||t[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const o=t[0].length-1;let l,a,c=o,u=0;const g=t[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+o);(t=g.exec(n))!=null;){if(l=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!l)continue;if(a=l.length,t[3]||t[4]){c+=a;continue}else if((t[5]||t[6])&&o%3&&!((o+a)%3)){u+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+u);const p=e.slice(0,o+t.index+a+1);if(Math.min(o,a)%2){const w=p.slice(1,-1);return{type:"em",raw:p,text:w,tokens:this.lexer.inlineTokens(w)}}const f=p.slice(2,-2);return{type:"strong",raw:p,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let i=n[2].replace(/\n/g," ");const t=/[^ ]/.test(i),r=/^ /.test(i)&&/ $/.test(i);return t&&r&&(i=i.substring(1,i.length-1)),i=Z(i,!0),{type:"codespan",raw:n[0],text:i}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const i=this.rules.inline.autolink.exec(e);if(i){let t,r;return i[2]==="@"?(t=Z(this.options.mangle?n(i[1]):i[1]),r="mailto:"+t):(t=Z(i[1]),r=t),{type:"link",raw:i[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(e,n){let i;if(i=this.rules.inline.url.exec(e)){let t,r;if(i[2]==="@")t=Z(this.options.mangle?n(i[0]):i[0]),r="mailto:"+t;else{let o;do o=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(o!==i[0]);t=Z(i[0]),i[1]==="www."?r="http://"+i[0]:r=i[0]}return{type:"link",raw:i[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(e,n){const i=this.rules.inline.text.exec(e);if(i){let t;return this.lexer.state.inRawBlock?t=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):Z(i[0]):i[0]:t=Z(this.options.smartypants?n(i[0]):i[0]),{type:"text",raw:i[0],text:t}}}}const v={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:ze,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};v._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;v._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;v.def=E(v.def).replace("label",v._label).replace("title",v._title).getRegex();v.bullet=/(?:[*+-]|\d{1,9}[.)])/;v.listItemStart=E(/^( *)(bull) */).replace("bull",v.bullet).getRegex();v.list=E(v.list).replace(/bull/g,v.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+v.def.source+")").getRegex();v._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";v._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;v.html=E(v.html,"i").replace("comment",v._comment).replace("tag",v._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();v.lheading=E(v.lheading).replace(/bull/g,v.bullet).getRegex();v.paragraph=E(v._paragraph).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex();v.blockquote=E(v.blockquote).replace("paragraph",v.paragraph).getRegex();v.normal={...v};v.gfm={...v.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};v.gfm.table=E(v.gfm.table).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex();v.gfm.paragraph=E(v._paragraph).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",v.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex();v.pedantic={...v.normal,html:E(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",v._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ze,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:E(v.normal._paragraph).replace("hr",v.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",v.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const S={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:ze,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:ze,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};S._punctuation="\\p{P}$+<=>`^|~";S.punctuation=E(S.punctuation,"u").replace(/punctuation/g,S._punctuation).getRegex();S.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;S.anyPunctuation=/\\[punct]/g;S._escapes=/\\([punct])/g;S._comment=E(v._comment).replace("(?:-->|$)","-->").getRegex();S.emStrong.lDelim=E(S.emStrong.lDelim,"u").replace(/punct/g,S._punctuation).getRegex();S.emStrong.rDelimAst=E(S.emStrong.rDelimAst,"gu").replace(/punct/g,S._punctuation).getRegex();S.emStrong.rDelimUnd=E(S.emStrong.rDelimUnd,"gu").replace(/punct/g,S._punctuation).getRegex();S.anyPunctuation=E(S.anyPunctuation,"gu").replace(/punct/g,S._punctuation).getRegex();S._escapes=E(S._escapes,"gu").replace(/punct/g,S._punctuation).getRegex();S._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;S._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;S.autolink=E(S.autolink).replace("scheme",S._scheme).replace("email",S._email).getRegex();S._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;S.tag=E(S.tag).replace("comment",S._comment).replace("attribute",S._attribute).getRegex();S._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;S._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;S._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;S.link=E(S.link).replace("label",S._label).replace("href",S._href).replace("title",S._title).getRegex();S.reflink=E(S.reflink).replace("label",S._label).replace("ref",v._label).getRegex();S.nolink=E(S.nolink).replace("ref",v._label).getRegex();S.reflinkSearch=E(S.reflinkSearch,"g").replace("reflink",S.reflink).replace("nolink",S.nolink).getRegex();S.normal={...S};S.pedantic={...S.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:E(/^!?\[(label)\]\((.*?)\)/).replace("label",S._label).getRegex(),reflink:E(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",S._label).getRegex()};S.gfm={...S.normal,escape:E(S.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};S.gfm.url=E(S.gfm.url,"i").replace("email",S.gfm._extended_email).getRegex();S.breaks={...S.gfm,br:E(S.br).replace("{2,}","*").getRegex(),text:E(S.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function Yn(s){return s.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function _t(s){let e="",n,i;const t=s.length;for(n=0;n<t;n++)i=s.charCodeAt(n),Math.random()>.5&&(i="x"+i.toString(16)),e+="&#"+i+";";return e}class oe{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||de,this.options.tokenizer=this.options.tokenizer||new Be,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:v.normal,inline:S.normal};this.options.pedantic?(n.block=v.pedantic,n.inline=S.pedantic):this.options.gfm&&(n.block=v.gfm,this.options.breaks?n.inline=S.breaks:n.inline=S.gfm),this.tokenizer.rules=n}static get rules(){return{block:v,inline:S}}static lex(e,n){return new oe(n).lex(e)}static lexInline(e,n){return new oe(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,a,c)=>a+"    ".repeat(c.length));let i,t,r,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(i=l.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),t=n[n.length-1],t&&(t.type==="paragraph"||t.type==="text")?(t.raw+=`
`+i.raw,t.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=t.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),t=n[n.length-1],t&&(t.type==="paragraph"||t.type==="text")?(t.raw+=`
`+i.raw,t.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=t.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const a=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},a),typeof c=="number"&&c>=0&&(l=Math.min(l,c))}),l<1/0&&l>=0&&(r=e.substring(0,l+1))}if(this.state.top&&(i=this.tokenizer.paragraph(r))){t=n[n.length-1],o&&t.type==="paragraph"?(t.raw+=`
`+i.raw,t.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=t.text):n.push(i),o=r.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),t=n[n.length-1],t&&t.type==="text"?(t.raw+=`
`+i.raw,t.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=t.text):n.push(i);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let i,t,r,o=e,l,a,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,l.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(a||(c=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(i=u.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),t=n[n.length-1],t&&i.type==="text"&&t.type==="text"?(t.raw+=i.raw,t.text+=i.text):n.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length),t=n[n.length-1],t&&i.type==="text"&&t.type==="text"?(t.raw+=i.raw,t.text+=i.text):n.push(i);continue}if(i=this.tokenizer.emStrong(e,o,c)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.autolink(e,_t)){e=e.substring(i.raw.length),n.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e,_t))){e=e.substring(i.raw.length),n.push(i);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const g=e.slice(1);let p;this.options.extensions.startInline.forEach(function(f){p=f.call({lexer:this},g),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(r=e.substring(0,u+1))}if(i=this.tokenizer.inlineText(r,Yn)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(c=i.raw.slice(-1)),a=!0,t=n[n.length-1],t&&t.type==="text"?(t.raw+=i.raw,t.text+=i.text):n.push(i);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class Oe{constructor(e){this.options=e||de}code(e,n,i){const t=(n||"").match(/\S*/)[0];if(this.options.highlight){const r=this.options.highlight(e,t);r!=null&&r!==e&&(i=!0,e=r)}return e=e.replace(/\n$/,"")+`
`,t?'<pre><code class="'+this.options.langPrefix+Z(t)+'">'+(i?e:Z(e,!0))+`</code></pre>
`:"<pre><code>"+(i?e:Z(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,n){return e}heading(e,n,i,t){if(this.options.headerIds){const r=this.options.headerPrefix+t.slug(i);return`<h${n} id="${r}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,i){const t=n?"ol":"ul",r=n&&i!==1?' start="'+i+'"':"";return"<"+t+r+`>
`+e+"</"+t+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const i=n.header?"th":"td";return(n.align?`<${i} align="${n.align}">`:`<${i}>`)+e+`</${i}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,i){if(e=vt(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let t='<a href="'+e+'"';return n&&(t+=' title="'+n+'"'),t+=">"+i+"</a>",t}image(e,n,i){if(e=vt(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let t=`<img src="${e}" alt="${i}"`;return n&&(t+=` title="${n}"`),t+=this.options.xhtml?"/>":">",t}text(e){return e}}class Qe{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,i){return""+i}image(e,n,i){return""+i}br(){return""}}class Ne{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let i=e,t=0;if(this.seen.hasOwnProperty(i)){t=this.seen[e];do t++,i=e+"-"+t;while(this.seen.hasOwnProperty(i))}return n||(this.seen[e]=t,this.seen[i]=0),i}slug(e,n={}){const i=this.serialize(e);return this.getNextSafeSlug(i,n.dryrun)}}class ce{constructor(e){this.options=e||de,this.options.renderer=this.options.renderer||new Oe,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Qe,this.slugger=new Ne}static parse(e,n){return new ce(n).parse(e)}static parseInline(e,n){return new ce(n).parseInline(e)}parse(e,n=!0){let i="",t,r,o,l,a,c,u,g,p,f,w,C,V,R,D,le,Q,ie,X;const pe=e.length;for(t=0;t<pe;t++){if(f=e[t],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(X=this.options.extensions.renderers[f.type].call({parser:this},f),X!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type))){i+=X||"";continue}switch(f.type){case"space":continue;case"hr":{i+=this.renderer.hr();continue}case"heading":{i+=this.renderer.heading(this.parseInline(f.tokens),f.depth,qt(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{i+=this.renderer.code(f.text,f.lang,f.escaped);continue}case"table":{for(g="",u="",l=f.header.length,r=0;r<l;r++)u+=this.renderer.tablecell(this.parseInline(f.header[r].tokens),{header:!0,align:f.align[r]});for(g+=this.renderer.tablerow(u),p="",l=f.rows.length,r=0;r<l;r++){for(c=f.rows[r],u="",a=c.length,o=0;o<a;o++)u+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:f.align[o]});p+=this.renderer.tablerow(u)}i+=this.renderer.table(g,p);continue}case"blockquote":{p=this.parse(f.tokens),i+=this.renderer.blockquote(p);continue}case"list":{for(w=f.ordered,C=f.start,V=f.loose,l=f.items.length,p="",r=0;r<l;r++)D=f.items[r],le=D.checked,Q=D.task,R="",D.task&&(ie=this.renderer.checkbox(le),V?D.tokens.length>0&&D.tokens[0].type==="paragraph"?(D.tokens[0].text=ie+" "+D.tokens[0].text,D.tokens[0].tokens&&D.tokens[0].tokens.length>0&&D.tokens[0].tokens[0].type==="text"&&(D.tokens[0].tokens[0].text=ie+" "+D.tokens[0].tokens[0].text)):D.tokens.unshift({type:"text",text:ie}):R+=ie),R+=this.parse(D.tokens,V),p+=this.renderer.listitem(R,Q,le);i+=this.renderer.list(p,w,C);continue}case"html":{i+=this.renderer.html(f.text,f.block);continue}case"paragraph":{i+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{for(p=f.tokens?this.parseInline(f.tokens):f.text;t+1<pe&&e[t+1].type==="text";)f=e[++t],p+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);i+=n?this.renderer.paragraph(p):p;continue}default:{const ke='Token with "'+f.type+'" type was not found.';if(this.options.silent){console.error(ke);return}else throw new Error(ke)}}}return i}parseInline(e,n){n=n||this.renderer;let i="",t,r,o;const l=e.length;for(t=0;t<l;t++){if(r=e[t],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(o=this.options.extensions.renderers[r.type].call({parser:this},r),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type))){i+=o||"";continue}switch(r.type){case"escape":{i+=n.text(r.text);break}case"html":{i+=n.html(r.text);break}case"link":{i+=n.link(r.href,r.title,this.parseInline(r.tokens,n));break}case"image":{i+=n.image(r.href,r.title,r.text);break}case"strong":{i+=n.strong(this.parseInline(r.tokens,n));break}case"em":{i+=n.em(this.parseInline(r.tokens,n));break}case"codespan":{i+=n.codespan(r.text);break}case"br":{i+=n.br();break}case"del":{i+=n.del(this.parseInline(r.tokens,n));break}case"text":{i+=n.text(r.text);break}default:{const a='Token with "'+r.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return i}}class Te{constructor(e){this.options=e||de}preprocess(e){return e}postprocess(e){return e}}J(Te,"passThroughHooks",new Set(["preprocess","postprocess"]));var _e,je,Me,Ft;class Zn{constructor(...e){qe(this,_e);qe(this,Me);J(this,"defaults",Je());J(this,"options",this.setOptions);J(this,"parse",Ae(this,_e,je).call(this,oe.lex,ce.parse));J(this,"parseInline",Ae(this,_e,je).call(this,oe.lexInline,ce.parseInline));J(this,"Parser",ce);J(this,"parser",ce.parse);J(this,"Renderer",Oe);J(this,"TextRenderer",Qe);J(this,"Lexer",oe);J(this,"lexer",oe.lex);J(this,"Tokenizer",Be);J(this,"Slugger",Ne);J(this,"Hooks",Te);this.use(...e)}walkTokens(e,n){let i=[];for(const t of e)switch(i=i.concat(n.call(this,t)),t.type){case"table":{for(const r of t.header)i=i.concat(this.walkTokens(r.tokens,n));for(const r of t.rows)for(const o of r)i=i.concat(this.walkTokens(o.tokens,n));break}case"list":{i=i.concat(this.walkTokens(t.items,n));break}default:this.defaults.extensions&&this.defaults.extensions.childTokens&&this.defaults.extensions.childTokens[t.type]?this.defaults.extensions.childTokens[t.type].forEach(r=>{i=i.concat(this.walkTokens(t[r],n))}):t.tokens&&(i=i.concat(this.walkTokens(t.tokens,n)))}return i}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const t={...i};if(t.async=this.defaults.async||t.async||!1,i.extensions&&(i.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if(r.renderer){const o=n.renderers[r.name];o?n.renderers[r.name]=function(...l){let a=r.renderer.apply(this,l);return a===!1&&(a=o.apply(this,l)),a}:n.renderers[r.name]=r.renderer}if(r.tokenizer){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[r.level]?n[r.level].unshift(r.tokenizer):n[r.level]=[r.tokenizer],r.start&&(r.level==="block"?n.startBlock?n.startBlock.push(r.start):n.startBlock=[r.start]:r.level==="inline"&&(n.startInline?n.startInline.push(r.start):n.startInline=[r.start]))}r.childTokens&&(n.childTokens[r.name]=r.childTokens)}),t.extensions=n),i.renderer){const r=this.defaults.renderer||new Oe(this.defaults);for(const o in i.renderer){const l=r[o];r[o]=(...a)=>{let c=i.renderer[o].apply(r,a);return c===!1&&(c=l.apply(r,a)),c}}t.renderer=r}if(i.tokenizer){const r=this.defaults.tokenizer||new Be(this.defaults);for(const o in i.tokenizer){const l=r[o];r[o]=(...a)=>{let c=i.tokenizer[o].apply(r,a);return c===!1&&(c=l.apply(r,a)),c}}t.tokenizer=r}if(i.hooks){const r=this.defaults.hooks||new Te;for(const o in i.hooks){const l=r[o];Te.passThroughHooks.has(o)?r[o]=a=>{if(this.defaults.async)return Promise.resolve(i.hooks[o].call(r,a)).then(u=>l.call(r,u));const c=i.hooks[o].call(r,a);return l.call(r,c)}:r[o]=(...a)=>{let c=i.hooks[o].apply(r,a);return c===!1&&(c=l.apply(r,a)),c}}t.hooks=r}if(i.walkTokens){const r=this.defaults.walkTokens;t.walkTokens=function(o){let l=[];return l.push(i.walkTokens.call(this,o)),r&&(l=l.concat(r.call(this,o))),l}}this.defaults={...this.defaults,...t}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}}_e=new WeakSet,je=function(e,n){return(i,t,r)=>{typeof t=="function"&&(r=t,t=null);const o={...t};t={...this.defaults,...o};const l=Ae(this,Me,Ft).call(this,t.silent,t.async,r);if(typeof i>"u"||i===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(Vn(t,r),t.hooks&&(t.hooks.options=t),r){const a=t.highlight;let c;try{t.hooks&&(i=t.hooks.preprocess(i)),c=e(i,t)}catch(p){return l(p)}const u=p=>{let f;if(!p)try{t.walkTokens&&this.walkTokens(c,t.walkTokens),f=n(c,t),t.hooks&&(f=t.hooks.postprocess(f))}catch(w){p=w}return t.highlight=a,p?l(p):r(null,f)};if(!a||a.length<3||(delete t.highlight,!c.length))return u();let g=0;this.walkTokens(c,p=>{p.type==="code"&&(g++,setTimeout(()=>{a(p.text,p.lang,(f,w)=>{if(f)return u(f);w!=null&&w!==p.text&&(p.text=w,p.escaped=!0),g--,g===0&&u()})},0))}),g===0&&u();return}if(t.async)return Promise.resolve(t.hooks?t.hooks.preprocess(i):i).then(a=>e(a,t)).then(a=>t.walkTokens?Promise.all(this.walkTokens(a,t.walkTokens)).then(()=>a):a).then(a=>n(a,t)).then(a=>t.hooks?t.hooks.postprocess(a):a).catch(l);try{t.hooks&&(i=t.hooks.preprocess(i));const a=e(i,t);t.walkTokens&&this.walkTokens(a,t.walkTokens);let c=n(a,t);return t.hooks&&(c=t.hooks.postprocess(c)),c}catch(a){return l(a)}}},Me=new WeakSet,Ft=function(e,n,i){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+Z(t.message+"",!0)+"</pre>";if(n)return Promise.resolve(r);if(i){i(null,r);return}return r}if(n)return Promise.reject(t);if(i){i(t);return}throw t}};const ge=new Zn(de);function M(s,e,n){return ge.parse(s,e,n)}M.options=M.setOptions=function(s){return ge.setOptions(s),M.defaults=ge.defaults,Mt(M.defaults),M};M.getDefaults=Je;M.defaults=de;M.use=function(...s){return ge.use(...s),M.defaults=ge.defaults,Mt(M.defaults),M};M.walkTokens=function(s,e){return ge.walkTokens(s,e)};M.parseInline=ge.parseInline;M.Parser=ce;M.parser=ce.parse;M.Renderer=Oe;M.TextRenderer=Qe;M.Lexer=oe;M.lexer=oe.lex;M.Tokenizer=Be;M.Slugger=Ne;M.Hooks=Te;M.parse=M;M.options;M.setOptions;M.use;M.walkTokens;M.parseInline;ce.parse;oe.lex;const Lt={};function Jn(s){let e;return{c(){e=be(s[1])},l(n){e=ve(n,s[1])},m(n,i){y(n,e,i)},p(n,i){i&2&&Ce(e,n[1])},i:L,o:L,d(n){n&&m(e)}}}function Qn(s){let e,n;const i=s[5].default,t=j(i,s,s[4],null);return{c(){e=_("h6"),t&&t.c(),this.h()},l(r){e=P(r,"H6",{id:!0});var o=$(e);t&&t.l(o),o.forEach(m),this.h()},h(){b(e,"id",s[2])},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,o){t&&t.p&&(!n||o&16)&&W(t,i,r,r[4],n?K(i,r[4],o,null):H(r[4]),null),(!n||o&4)&&b(e,"id",r[2])},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function Xn(s){let e,n;const i=s[5].default,t=j(i,s,s[4],null);return{c(){e=_("h5"),t&&t.c(),this.h()},l(r){e=P(r,"H5",{id:!0});var o=$(e);t&&t.l(o),o.forEach(m),this.h()},h(){b(e,"id",s[2])},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,o){t&&t.p&&(!n||o&16)&&W(t,i,r,r[4],n?K(i,r[4],o,null):H(r[4]),null),(!n||o&4)&&b(e,"id",r[2])},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function ei(s){let e,n;const i=s[5].default,t=j(i,s,s[4],null);return{c(){e=_("h4"),t&&t.c(),this.h()},l(r){e=P(r,"H4",{id:!0});var o=$(e);t&&t.l(o),o.forEach(m),this.h()},h(){b(e,"id",s[2])},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,o){t&&t.p&&(!n||o&16)&&W(t,i,r,r[4],n?K(i,r[4],o,null):H(r[4]),null),(!n||o&4)&&b(e,"id",r[2])},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function ti(s){let e,n;const i=s[5].default,t=j(i,s,s[4],null);return{c(){e=_("h3"),t&&t.c(),this.h()},l(r){e=P(r,"H3",{id:!0});var o=$(e);t&&t.l(o),o.forEach(m),this.h()},h(){b(e,"id",s[2])},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,o){t&&t.p&&(!n||o&16)&&W(t,i,r,r[4],n?K(i,r[4],o,null):H(r[4]),null),(!n||o&4)&&b(e,"id",r[2])},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function ni(s){let e,n;const i=s[5].default,t=j(i,s,s[4],null);return{c(){e=_("h2"),t&&t.c(),this.h()},l(r){e=P(r,"H2",{id:!0});var o=$(e);t&&t.l(o),o.forEach(m),this.h()},h(){b(e,"id",s[2])},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,o){t&&t.p&&(!n||o&16)&&W(t,i,r,r[4],n?K(i,r[4],o,null):H(r[4]),null),(!n||o&4)&&b(e,"id",r[2])},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function ii(s){let e,n;const i=s[5].default,t=j(i,s,s[4],null);return{c(){e=_("h1"),t&&t.c(),this.h()},l(r){e=P(r,"H1",{id:!0});var o=$(e);t&&t.l(o),o.forEach(m),this.h()},h(){b(e,"id",s[2])},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,o){t&&t.p&&(!n||o&16)&&W(t,i,r,r[4],n?K(i,r[4],o,null):H(r[4]),null),(!n||o&4)&&b(e,"id",r[2])},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function ri(s){let e,n,i,t;const r=[ii,ni,ti,ei,Xn,Qn,Jn],o=[];function l(a,c){return a[0]===1?0:a[0]===2?1:a[0]===3?2:a[0]===4?3:a[0]===5?4:a[0]===6?5:6}return e=l(s),n=o[e]=r[e](s),{c(){n.c(),i=k()},l(a){n.l(a),i=k()},m(a,c){o[e].m(a,c),y(a,i,c),t=!0},p(a,[c]){let u=e;e=l(a),e===u?o[e].p(a,c):(G(),d(o[u],1,1,()=>{o[u]=null}),N(),n=o[e],n?n.p(a,c):(n=o[e]=r[e](a),n.c()),h(n,1),n.m(i.parentNode,i))},i(a){t||(h(n),t=!0)},o(a){d(n),t=!1},d(a){a&&m(i),o[e].d(a)}}}function oi(s,e,n){let i,{$$slots:t={},$$scope:r}=e,{depth:o}=e,{raw:l}=e,{text:a}=e;const{slug:c,getOptions:u}=Jt(Lt),g=u();return s.$$set=p=>{"depth"in p&&n(0,o=p.depth),"raw"in p&&n(1,l=p.raw),"text"in p&&n(3,a=p.text),"$$scope"in p&&n(4,r=p.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&n(2,i=g.headerIds?g.headerPrefix+c(a):void 0)},[o,l,i,a,r,t]}class ai extends B{constructor(e){super(),O(this,e,oi,ri,z,{depth:0,raw:1,text:3})}}function si(s){let e,n;const i=s[1].default,t=j(i,s,s[0],null);return{c(){e=_("p"),t&&t.c()},l(r){e=P(r,"P",{});var o=$(e);t&&t.l(o),o.forEach(m)},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,[o]){t&&t.p&&(!n||o&1)&&W(t,i,r,r[0],n?K(i,r[0],o,null):H(r[0]),null)},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function li(s,e,n){let{$$slots:i={},$$scope:t}=e;return s.$$set=r=>{"$$scope"in r&&n(0,t=r.$$scope)},[t,i]}class ci extends B{constructor(e){super(),O(this,e,li,si,z,{})}}function ui(s){let e;const n=s[3].default,i=j(n,s,s[2],null);return{c(){i&&i.c()},l(t){i&&i.l(t)},m(t,r){i&&i.m(t,r),e=!0},p(t,[r]){i&&i.p&&(!e||r&4)&&W(i,n,t,t[2],e?K(n,t[2],r,null):H(t[2]),null)},i(t){e||(h(i,t),e=!0)},o(t){d(i,t),e=!1},d(t){i&&i.d(t)}}}function mi(s,e,n){let{$$slots:i={},$$scope:t}=e,{text:r}=e,{raw:o}=e;return s.$$set=l=>{"text"in l&&n(0,r=l.text),"raw"in l&&n(1,o=l.raw),"$$scope"in l&&n(2,t=l.$$scope)},[r,o,t,i]}class hi extends B{constructor(e){super(),O(this,e,mi,ui,z,{text:0,raw:1})}}function di(s){let e,n;return{c(){e=_("img"),this.h()},l(i){e=P(i,"IMG",{src:!0,title:!0,alt:!0}),this.h()},h(){$e(e.src,n=s[0])||b(e,"src",n),b(e,"title",s[1]),b(e,"alt",s[2])},m(i,t){y(i,e,t)},p(i,[t]){t&1&&!$e(e.src,n=i[0])&&b(e,"src",n),t&2&&b(e,"title",i[1]),t&4&&b(e,"alt",i[2])},i:L,o:L,d(i){i&&m(e)}}}function pi(s,e,n){let{href:i=""}=e,{title:t=void 0}=e,{text:r=""}=e;return s.$$set=o=>{"href"in o&&n(0,i=o.href),"title"in o&&n(1,t=o.title),"text"in o&&n(2,r=o.text)},[i,t,r]}class fi extends B{constructor(e){super(),O(this,e,pi,di,z,{href:0,title:1,text:2})}}function gi(s){let e,n;const i=s[3].default,t=j(i,s,s[2],null);return{c(){e=_("a"),t&&t.c(),this.h()},l(r){e=P(r,"A",{href:!0,title:!0});var o=$(e);t&&t.l(o),o.forEach(m),this.h()},h(){b(e,"href",s[0]),b(e,"title",s[1])},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,[o]){t&&t.p&&(!n||o&4)&&W(t,i,r,r[2],n?K(i,r[2],o,null):H(r[2]),null),(!n||o&1)&&b(e,"href",r[0]),(!n||o&2)&&b(e,"title",r[1])},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function yi(s,e,n){let{$$slots:i={},$$scope:t}=e,{href:r=""}=e,{title:o=void 0}=e;return s.$$set=l=>{"href"in l&&n(0,r=l.href),"title"in l&&n(1,o=l.title),"$$scope"in l&&n(2,t=l.$$scope)},[r,o,t,i]}class Si extends B{constructor(e){super(),O(this,e,yi,gi,z,{href:0,title:1})}}function wi(s){let e,n;const i=s[1].default,t=j(i,s,s[0],null);return{c(){e=_("em"),t&&t.c()},l(r){e=P(r,"EM",{});var o=$(e);t&&t.l(o),o.forEach(m)},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,[o]){t&&t.p&&(!n||o&1)&&W(t,i,r,r[0],n?K(i,r[0],o,null):H(r[0]),null)},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function bi(s,e,n){let{$$slots:i={},$$scope:t}=e;return s.$$set=r=>{"$$scope"in r&&n(0,t=r.$$scope)},[t,i]}class vi extends B{constructor(e){super(),O(this,e,bi,wi,z,{})}}function ki(s){let e,n;const i=s[1].default,t=j(i,s,s[0],null);return{c(){e=_("del"),t&&t.c()},l(r){e=P(r,"DEL",{});var o=$(e);t&&t.l(o),o.forEach(m)},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,[o]){t&&t.p&&(!n||o&1)&&W(t,i,r,r[0],n?K(i,r[0],o,null):H(r[0]),null)},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function Ti(s,e,n){let{$$slots:i={},$$scope:t}=e;return s.$$set=r=>{"$$scope"in r&&n(0,t=r.$$scope)},[t,i]}class _i extends B{constructor(e){super(),O(this,e,Ti,ki,z,{})}}function Pi(s){let e,n=s[0].replace(/`/g,"")+"",i;return{c(){e=_("code"),i=be(n)},l(t){e=P(t,"CODE",{});var r=$(e);i=ve(r,n),r.forEach(m)},m(t,r){y(t,e,r),re(e,i)},p(t,[r]){r&1&&n!==(n=t[0].replace(/`/g,"")+"")&&Ce(i,n)},i:L,o:L,d(t){t&&m(e)}}}function Ci(s,e,n){let{raw:i}=e;return s.$$set=t=>{"raw"in t&&n(0,i=t.raw)},[i]}class Ai extends B{constructor(e){super(),O(this,e,Ci,Pi,z,{raw:0})}}function xi(s){let e,n;const i=s[1].default,t=j(i,s,s[0],null);return{c(){e=_("strong"),t&&t.c()},l(r){e=P(r,"STRONG",{});var o=$(e);t&&t.l(o),o.forEach(m)},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,[o]){t&&t.p&&(!n||o&1)&&W(t,i,r,r[0],n?K(i,r[0],o,null):H(r[0]),null)},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function Ii(s,e,n){let{$$slots:i={},$$scope:t}=e;return s.$$set=r=>{"$$scope"in r&&n(0,t=r.$$scope)},[t,i]}class Ri extends B{constructor(e){super(),O(this,e,Ii,xi,z,{})}}function Di(s){let e,n;const i=s[1].default,t=j(i,s,s[0],null);return{c(){e=_("table"),t&&t.c()},l(r){e=P(r,"TABLE",{});var o=$(e);t&&t.l(o),o.forEach(m)},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,[o]){t&&t.p&&(!n||o&1)&&W(t,i,r,r[0],n?K(i,r[0],o,null):H(r[0]),null)},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function $i(s,e,n){let{$$slots:i={},$$scope:t}=e;return s.$$set=r=>{"$$scope"in r&&n(0,t=r.$$scope)},[t,i]}class zi extends B{constructor(e){super(),O(this,e,$i,Di,z,{})}}function Bi(s){let e,n;const i=s[1].default,t=j(i,s,s[0],null);return{c(){e=_("thead"),t&&t.c()},l(r){e=P(r,"THEAD",{});var o=$(e);t&&t.l(o),o.forEach(m)},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,[o]){t&&t.p&&(!n||o&1)&&W(t,i,r,r[0],n?K(i,r[0],o,null):H(r[0]),null)},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function Oi(s,e,n){let{$$slots:i={},$$scope:t}=e;return s.$$set=r=>{"$$scope"in r&&n(0,t=r.$$scope)},[t,i]}class Ei extends B{constructor(e){super(),O(this,e,Oi,Bi,z,{})}}function Mi(s){let e,n;const i=s[1].default,t=j(i,s,s[0],null);return{c(){e=_("tbody"),t&&t.c()},l(r){e=P(r,"TBODY",{});var o=$(e);t&&t.l(o),o.forEach(m)},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,[o]){t&&t.p&&(!n||o&1)&&W(t,i,r,r[0],n?K(i,r[0],o,null):H(r[0]),null)},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function Gi(s,e,n){let{$$slots:i={},$$scope:t}=e;return s.$$set=r=>{"$$scope"in r&&n(0,t=r.$$scope)},[t,i]}class Ni extends B{constructor(e){super(),O(this,e,Gi,Mi,z,{})}}function qi(s){let e,n;const i=s[1].default,t=j(i,s,s[0],null);return{c(){e=_("tr"),t&&t.c()},l(r){e=P(r,"TR",{});var o=$(e);t&&t.l(o),o.forEach(m)},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,[o]){t&&t.p&&(!n||o&1)&&W(t,i,r,r[0],n?K(i,r[0],o,null):H(r[0]),null)},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function Fi(s,e,n){let{$$slots:i={},$$scope:t}=e;return s.$$set=r=>{"$$scope"in r&&n(0,t=r.$$scope)},[t,i]}class Li extends B{constructor(e){super(),O(this,e,Fi,qi,z,{})}}function ji(s){let e,n;const i=s[3].default,t=j(i,s,s[2],null);return{c(){e=_("td"),t&&t.c(),this.h()},l(r){e=P(r,"TD",{align:!0});var o=$(e);t&&t.l(o),o.forEach(m),this.h()},h(){b(e,"align",s[1])},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,o){t&&t.p&&(!n||o&4)&&W(t,i,r,r[2],n?K(i,r[2],o,null):H(r[2]),null),(!n||o&2)&&b(e,"align",r[1])},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function Wi(s){let e,n;const i=s[3].default,t=j(i,s,s[2],null);return{c(){e=_("th"),t&&t.c(),this.h()},l(r){e=P(r,"TH",{align:!0});var o=$(e);t&&t.l(o),o.forEach(m),this.h()},h(){b(e,"align",s[1])},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,o){t&&t.p&&(!n||o&4)&&W(t,i,r,r[2],n?K(i,r[2],o,null):H(r[2]),null),(!n||o&2)&&b(e,"align",r[1])},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function Hi(s){let e,n,i,t;const r=[Wi,ji],o=[];function l(a,c){return a[0]?0:1}return e=l(s),n=o[e]=r[e](s),{c(){n.c(),i=k()},l(a){n.l(a),i=k()},m(a,c){o[e].m(a,c),y(a,i,c),t=!0},p(a,[c]){let u=e;e=l(a),e===u?o[e].p(a,c):(G(),d(o[u],1,1,()=>{o[u]=null}),N(),n=o[e],n?n.p(a,c):(n=o[e]=r[e](a),n.c()),h(n,1),n.m(i.parentNode,i))},i(a){t||(h(n),t=!0)},o(a){d(n),t=!1},d(a){a&&m(i),o[e].d(a)}}}function Ki(s,e,n){let{$$slots:i={},$$scope:t}=e,{header:r}=e,{align:o}=e;return s.$$set=l=>{"header"in l&&n(0,r=l.header),"align"in l&&n(1,o=l.align),"$$scope"in l&&n(2,t=l.$$scope)},[r,o,t,i]}class Vi extends B{constructor(e){super(),O(this,e,Ki,Hi,z,{header:0,align:1})}}function Ui(s){let e,n;const i=s[3].default,t=j(i,s,s[2],null);return{c(){e=_("ul"),t&&t.c()},l(r){e=P(r,"UL",{});var o=$(e);t&&t.l(o),o.forEach(m)},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,o){t&&t.p&&(!n||o&4)&&W(t,i,r,r[2],n?K(i,r[2],o,null):H(r[2]),null)},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function Yi(s){let e,n;const i=s[3].default,t=j(i,s,s[2],null);return{c(){e=_("ol"),t&&t.c(),this.h()},l(r){e=P(r,"OL",{start:!0});var o=$(e);t&&t.l(o),o.forEach(m),this.h()},h(){b(e,"start",s[1])},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,o){t&&t.p&&(!n||o&4)&&W(t,i,r,r[2],n?K(i,r[2],o,null):H(r[2]),null),(!n||o&2)&&b(e,"start",r[1])},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function Zi(s){let e,n,i,t;const r=[Yi,Ui],o=[];function l(a,c){return a[0]?0:1}return e=l(s),n=o[e]=r[e](s),{c(){n.c(),i=k()},l(a){n.l(a),i=k()},m(a,c){o[e].m(a,c),y(a,i,c),t=!0},p(a,[c]){let u=e;e=l(a),e===u?o[e].p(a,c):(G(),d(o[u],1,1,()=>{o[u]=null}),N(),n=o[e],n?n.p(a,c):(n=o[e]=r[e](a),n.c()),h(n,1),n.m(i.parentNode,i))},i(a){t||(h(n),t=!0)},o(a){d(n),t=!1},d(a){a&&m(i),o[e].d(a)}}}function Ji(s,e,n){let{$$slots:i={},$$scope:t}=e,{ordered:r}=e,{start:o}=e;return s.$$set=l=>{"ordered"in l&&n(0,r=l.ordered),"start"in l&&n(1,o=l.start),"$$scope"in l&&n(2,t=l.$$scope)},[r,o,t,i]}class Qi extends B{constructor(e){super(),O(this,e,Ji,Zi,z,{ordered:0,start:1})}}function Xi(s){let e,n;const i=s[1].default,t=j(i,s,s[0],null);return{c(){e=_("li"),t&&t.c()},l(r){e=P(r,"LI",{});var o=$(e);t&&t.l(o),o.forEach(m)},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,[o]){t&&t.p&&(!n||o&1)&&W(t,i,r,r[0],n?K(i,r[0],o,null):H(r[0]),null)},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function er(s,e,n){let{$$slots:i={},$$scope:t}=e;return s.$$set=r=>{"$$scope"in r&&n(0,t=r.$$scope)},[t,i]}class tr extends B{constructor(e){super(),O(this,e,er,Xi,z,{})}}function nr(s){let e;return{c(){e=_("hr")},l(n){e=P(n,"HR",{})},m(n,i){y(n,e,i)},p:L,i:L,o:L,d(n){n&&m(e)}}}class ir extends B{constructor(e){super(),O(this,e,null,nr,z,{})}}function rr(s){let e,n;return{c(){e=new Bt(!1),n=k(),this.h()},l(i){e=Ot(i,!1),n=k(),this.h()},h(){e.a=n},m(i,t){e.m(s[0],i,t),y(i,n,t)},p(i,[t]){t&1&&e.p(i[0])},i:L,o:L,d(i){i&&(m(n),e.d())}}}function or(s,e,n){let{text:i}=e;return s.$$set=t=>{"text"in t&&n(0,i=t.text)},[i]}class ar extends B{constructor(e){super(),O(this,e,or,rr,z,{text:0})}}function sr(s){let e,n;const i=s[1].default,t=j(i,s,s[0],null);return{c(){e=_("blockquote"),t&&t.c()},l(r){e=P(r,"BLOCKQUOTE",{});var o=$(e);t&&t.l(o),o.forEach(m)},m(r,o){y(r,e,o),t&&t.m(e,null),n=!0},p(r,[o]){t&&t.p&&(!n||o&1)&&W(t,i,r,r[0],n?K(i,r[0],o,null):H(r[0]),null)},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function lr(s,e,n){let{$$slots:i={},$$scope:t}=e;return s.$$set=r=>{"$$scope"in r&&n(0,t=r.$$scope)},[t,i]}class cr extends B{constructor(e){super(),O(this,e,lr,sr,z,{})}}function ur(s){let e,n,i;return{c(){e=_("pre"),n=_("code"),i=be(s[1]),this.h()},l(t){e=P(t,"PRE",{class:!0});var r=$(e);n=P(r,"CODE",{});var o=$(n);i=ve(o,s[1]),o.forEach(m),r.forEach(m),this.h()},h(){b(e,"class",s[0])},m(t,r){y(t,e,r),re(e,n),re(n,i)},p(t,[r]){r&2&&Ce(i,t[1]),r&1&&b(e,"class",t[0])},i:L,o:L,d(t){t&&m(e)}}}function mr(s,e,n){let{lang:i}=e,{text:t}=e;return s.$$set=r=>{"lang"in r&&n(0,i=r.lang),"text"in r&&n(1,t=r.text)},[i,t]}class hr extends B{constructor(e){super(),O(this,e,mr,ur,z,{lang:0,text:1})}}function dr(s){let e,n;const i=s[1].default,t=j(i,s,s[0],null);return{c(){e=_("br"),t&&t.c()},l(r){e=P(r,"BR",{}),t&&t.l(r)},m(r,o){y(r,e,o),t&&t.m(r,o),n=!0},p(r,[o]){t&&t.p&&(!n||o&1)&&W(t,i,r,r[0],n?K(i,r[0],o,null):H(r[0]),null)},i(r){n||(h(t,r),n=!0)},o(r){d(t,r),n=!1},d(r){r&&m(e),t&&t.d(r)}}}function pr(s,e,n){let{$$slots:i={},$$scope:t}=e;return s.$$set=r=>{"$$scope"in r&&n(0,t=r.$$scope)},[t,i]}class fr extends B{constructor(e){super(),O(this,e,pr,dr,z,{})}}const gr={heading:ai,paragraph:ci,text:hi,image:fi,link:Si,em:vi,strong:Ri,codespan:Ai,del:_i,table:zi,tablehead:Ei,tablebody:Ni,tablerow:Li,tablecell:Vi,list:Qi,orderedlistitem:null,unorderedlistitem:null,listitem:tr,hr:ir,html:ar,blockquote:cr,code:hr,br:fr},yr={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function Sr(s){let e,n;return e=new ye({props:{tokens:s[0],renderers:s[1]}}),{c(){A(e.$$.fragment)},l(i){q(e.$$.fragment,i)},m(i,t){x(e,i,t),n=!0},p(i,[t]){const r={};t&1&&(r.tokens=i[0]),t&2&&(r.renderers=i[1]),e.$set(r)},i(i){n||(h(e.$$.fragment,i),n=!0)},o(i){d(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function wr(s,e,n){let i,t,r,o,{source:l=[]}=e,{renderers:a={}}=e,{options:c={}}=e,{isInline:u=!1}=e;const g=Qt();let p,f,w;return Xt(Lt,{slug:C=>t?t.slug(C):"",getOptions:()=>r}),Ve(()=>{n(7,w=!0)}),s.$$set=C=>{"source"in C&&n(2,l=C.source),"renderers"in C&&n(3,a=C.renderers),"options"in C&&n(4,c=C.options),"isInline"in C&&n(5,u=C.isInline)},s.$$.update=()=>{s.$$.dirty&4&&n(8,i=Array.isArray(l)),s.$$.dirty&4&&(t=l?new Ne:void 0),s.$$.dirty&16&&n(9,r={...yr,...c}),s.$$.dirty&869&&(i?n(0,p=l):(n(6,f=new oe(r)),n(0,p=u?f.inlineTokens(l):f.lex(l)),g("parsed",{tokens:p}))),s.$$.dirty&8&&n(1,o={...gr,...a}),s.$$.dirty&385&&w&&!i&&g("parsed",{tokens:p})},[p,o,l,a,c,u,f,w,i,r]}class br extends B{constructor(e){super(),O(this,e,wr,Sr,z,{source:2,renderers:3,options:4,isInline:5})}}const vr=(s,e)=>{const n=Ue(e),i=localStorage.getItem(s);return i!=null&&n.set(JSON.parse(i)),n.subscribe(t=>{t==null?localStorage.removeItem(s):localStorage.setItem(s,JSON.stringify(t))}),window.addEventListener("storage",()=>{const t=localStorage.getItem(s);if(t==null)return;const r=JSON.parse(t);r!==Pe(n)&&n.set(r)}),n},We=vr("config",{keepHeader:!0}),kr={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},Tr={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},_r="[^aeiou]",Xe="[aeiouy]",he="("+_r+"[^aeiouy]*)",Ee="("+Xe+"[aeiou]*)",Fe=new RegExp("^"+he+"?"+Ee+he),Pr=new RegExp("^"+he+"?"+Ee+he+Ee+"?$"),Ie=new RegExp("^"+he+"?("+Ee+he+"){2,}"),Pt=new RegExp("^"+he+"?"+Xe),Ct=new RegExp("^"+he+Xe+"[^aeiouwxy]$"),Cr=/ll$/,Ar=/^(.+?)e$/,xr=/^(.+?)y$/,Ir=/^(.+?(s|t))(ion)$/,Rr=/^(.+?)(ed|ing)$/,Dr=/(at|bl|iz)$/,$r=/^(.+?)eed$/,zr=/^.+?[^s]s$/,Br=/^.+?(ss|i)es$/,Or=/([^aeiouylsz])\1$/,Er=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,Mr=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,Gr=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;function Nr(s){let e=String(s).toLowerCase();if(e.length<3)return e;let n=!1;e.codePointAt(0)===121&&(n=!0,e="Y"+e.slice(1)),Br.test(e)?e=e.slice(0,-2):zr.test(e)&&(e=e.slice(0,-1));let i;return(i=$r.exec(e))?Fe.test(i[1])&&(e=e.slice(0,-1)):(i=Rr.exec(e))&&Pt.test(i[1])&&(e=i[1],Dr.test(e)?e+="e":Or.test(e)?e=e.slice(0,-1):Ct.test(e)&&(e+="e")),(i=xr.exec(e))&&Pt.test(i[1])&&(e=i[1]+"i"),(i=Er.exec(e))&&Fe.test(i[1])&&(e=i[1]+kr[i[2]]),(i=Mr.exec(e))&&Fe.test(i[1])&&(e=i[1]+Tr[i[2]]),(i=Gr.exec(e))?Ie.test(i[1])&&(e=i[1]):(i=Ir.exec(e))&&Ie.test(i[1])&&(e=i[1]),(i=Ar.exec(e))&&(Ie.test(i[1])||Pr.test(i[1])&&!Ct.test(i[1]))&&(e=i[1]),Cr.test(e)&&Ie.test(e)&&(e=e.slice(0,-1)),n&&(e="y"+e.slice(1)),e}const Se=Ue(""),jt=Ye(Se,s=>s.toLowerCase());Ye(jt,s=>Nr(s));function qr(s){let e,n;return{c(){e=_("img"),this.h()},l(i){e=P(i,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){$e(e.src,n=s[0].replace("../static",""))||b(e,"src",n),b(e,"title",s[1]),b(e,"alt",s[2]),b(e,"class","svelte-1gl2z3f")},m(i,t){y(i,e,t)},p(i,[t]){t&1&&!$e(e.src,n=i[0].replace("../static",""))&&b(e,"src",n),t&2&&b(e,"title",i[1]),t&4&&b(e,"alt",i[2])},i:L,o:L,d(i){i&&m(e)}}}function Fr(s,e,n){let{href:i=""}=e,{title:t=""}=e,{text:r=""}=e;return s.$$set=o=>{"href"in o&&n(0,i=o.href),"title"in o&&n(1,t=o.title),"text"in o&&n(2,r=o.text)},[i,t,r]}class Lr extends B{constructor(e){super(),O(this,e,Fr,qr,z,{href:0,title:1,text:2})}}function At(s){let e,n;return e=new br({props:{source:s[0]+" ",renderers:{image:Lr}}}),{c(){A(e.$$.fragment)},l(i){q(e.$$.fragment,i)},m(i,t){x(e,i,t),n=!0},p(i,t){const r={};t&1&&(r.source=i[0]+" "),e.$set(r)},i(i){n||(h(e.$$.fragment,i),n=!0)},o(i){d(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function jr(s){let e,n,i=s[0].length!=0&&At(s);return{c(){i&&i.c(),e=k()},l(t){i&&i.l(t),e=k()},m(t,r){i&&i.m(t,r),y(t,e,r),n=!0},p(t,[r]){t[0].length!=0?i?(i.p(t,r),r&1&&h(i,1)):(i=At(t),i.c(),h(i,1),i.m(e.parentNode,e)):i&&(G(),d(i,1,1,()=>{i=null}),N())},i(t){n||(h(i),n=!0)},o(t){d(i),n=!1},d(t){t&&m(e),i&&i.d(t)}}}const Wr=/\[[#A-Za-z:,?-]+\]/gi;function Hr(s,e){return s!=null&&s.filter(n=>n.toLowerCase().includes(e.toLowerCase())).length>0}function Kr(s,e){return s.toLowerCase().includes(e.toLowerCase())}function Vr(s){let e=s.match(Wr);return e!=null?e.flatMap(n=>n.substring(1,n.length-1).split(",")):[]}function Ur(s,e,n){let i,t,r,o,l,a,c;we(s,We,w=>n(4,a=w)),we(s,jt,w=>n(5,c=w));let{block:u}=e;function g(w,C,V){let R="";for(let D=0;D<C.length;D++)f(C[D],o[D],w,V)&&(R+=C[D]+`
`);return R.trim()}function p(w){return w&&i}function f(w,C,V,R){return V==""||p(R)||Kr(w,V)||Hr(C,V)}return s.$$set=w=>{"block"in w&&n(1,u=w.block)},s.$$.update=()=>{s.$$.dirty&2&&(i=u.trim().startsWith("#")),s.$$.dirty&2&&n(3,t=u.split(`
`)),s.$$.dirty&8&&n(2,r=t.map(w=>w.replace(/(\[[#A-Za-z:,?-]+\])/g,""))),s.$$.dirty&8&&(o=t.map(w=>Vr(w))),s.$$.dirty&52&&n(0,l=g(c,r,a.keepHeader))},[l,u,r,t,a,c]}class Yr extends B{constructor(e){super(),O(this,e,Ur,jr,z,{block:1})}}function xt(s,e,n){const i=s.slice();return i[1]=e[n],i}function It(s){let e,n;return e=new Yr({props:{block:s[1]}}),{c(){A(e.$$.fragment)},l(i){q(e.$$.fragment,i)},m(i,t){x(e,i,t),n=!0},p(i,t){const r={};t&1&&(r.block=i[1]),e.$set(r)},i(i){n||(h(e.$$.fragment,i),n=!0)},o(i){d(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function Zr(s){let e,n,i=Y(s[0]),t=[];for(let o=0;o<i.length;o+=1)t[o]=It(xt(s,i,o));const r=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=k()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=k()},m(o,l){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(o,l);y(o,e,l),n=!0},p(o,[l]){if(l&1){i=Y(o[0]);let a;for(a=0;a<i.length;a+=1){const c=xt(o,i,a);t[a]?(t[a].p(c,l),h(t[a],1)):(t[a]=It(c),t[a].c(),h(t[a],1),t[a].m(e.parentNode,e))}for(G(),a=i.length;a<t.length;a+=1)r(a);N()}},i(o){if(!n){for(let l=0;l<i.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){o&&m(e),me(t,o)}}}function Jr(s,e,n){let{textBlocks:i}=e;return s.$$set=t=>{"textBlocks"in t&&n(0,i=t.textBlocks)},[i]}class Qr extends B{constructor(e){super(),O(this,e,Jr,Zr,z,{textBlocks:0})}}const Xr=`# Manifesto for Agile Software Development

We are uncovering better ways of developing software by doing it and helping others do it.
Through this work we have come to value:

- Individuals and interactions over processes and tools
- Working software over comprehensive documentation
- Customer collaboration over contract negotiation
- Responding to change over following a plan

That is, while there is value in the items on the right, we value the items on the left more.

## Principles behind the Agile Manifesto

We follow these principles:

- Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.
- Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.
- Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.
- Business people and developers must work together daily throughout the project.
- Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.
- The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.
- Working software is the primary measure of progress.
- Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.
- Continuous attention to technical excellence and good design enhances agility.
- Simplicity--the art of maximizing the amount of work not done--is essential.
- The best architectures, requirements, and designs emerge from self-organizing teams.
- At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.

# Copyright

© 2001, Kent Beck, Mike Beedle, Arie van Bennekum, Alistair Cockburn, Ward Cunningham, Martin Fowler, James Grenning, Jim Highsmith, Andrew Hunt, Ron Jeffries, Jon Kern, Brian Marick, Robert C. Martin, Steve Mellor, Ken Schwaber, Jeff Sutherland, Dave Thomas

`,eo=`## Preamble

The **_"Ratifiers"_** hereby adopt this **_"Constitution"_** as the formal authority structure of the specified **_"Organization"_**. In so doing, the Ratifiers cede their power to govern and run the Organization into the rules and processes herein, except for any powers that the Ratifiers lack the authority to delegate. The Ratifiers or their successors may amend this Constitution or repeal it using whatever authority they relied upon to adopt it, provided that any amendments are made in writing.

Any existing policies and systems the Organization had in effect before adopting this Constitution continue in full force after adoption, however they may not be expanded upon or modified except by the authorities and processes defined herein. These legacy policies and systems further lose all weight and authority as soon as this Constitution's processes create something that replaces or contradicts them.

The Organization may designate other **_"Partners"_** in addition to the Ratifiers to assist with its governance and operations, provided any such Partners have also agreed to abide by all relevant terms of this Constitution. Within that constraint, the Organization may define how it grants or removes Partner status, unless otherwise specified by the Ratifiers, and the Ratifiers may specify the initial Partners for the Organization.

Each Partner may rely upon the authorities granted by this Constitution to the full extent that the Ratifiers held such authorities before adopting it. All of the responsibilities and constraints on a Partner come from this Constitution and the outputs of its processes, and from any legal duties the Partner has to the Organization and while acting on its behalf. No implicit expectations or constraints have any power over a Partner, and nor do any dictates issued outside the authority granted by this Constitution.

## Article 1: Organizational Structure

### 1.1 Role Definition

A **_"Role"_** is an organizational construct that a person can fill and then energize on behalf of the Organization. Whoever fills a Role is a **_"Role Lead"_** for that Role.

A Role definition consists of a descriptive name and one or more of the following:

- **(a)** a **_"Purpose"_**, which is a capacity, potential, or goal that the Role will pursue or express.
- **(b)** one or more **_"Domains"_**, which are assets, processes, or other things the Role may exclusively control and regulate as its property, for its Purpose.
- **(c)** one or more **_"Accountabilities"_**, which are ongoing activities the Role will manage and enact in service of other Roles or to support its Purpose.

A Role may also hold **_"Policies"_**, which are grants or constraints of authority, or special rules that apply within that Role.

### 1.2 Responsibilities of Role Leads

As a Role Lead, you have the following responsibilities:

#### 1.2.1 Processing Tensions

You are responsible for comparing the actual expression of your Role’s Purpose and Accountabilities to your vision of their ideal potential, to identify gaps between the two (each gap is a **_"Tension"_**). You are then responsible for trying to enact your vision by taking steps to reduce or resolve those Tensions.

#### 1.2.2 Processing Purpose & Accountabilities

You are responsible for regularly considering how to enact your Role's Purpose and each Accountability, by defining:

- **(a)** **_"Next-Actions"_**, which are useful actions that you could take immediately, at least in the absence of competing priorities; and
- **(b)** **_"Projects"_**, which are specific outcomes that would be useful to work towards, at least in the absence of competing priorities.

#### 1.2.3 Breaking Down Projects

You are responsible for regularly defining Next-Actions for each of your Role's active Projects.

#### 1.2.4 Tracking Projects, Next-Actions, & Tensions

You are responsible for capturing and tracking all Projects and Next-Actions for your Role in written lists. You must also track Tensions you intend to resolve, at least until you process them into Projects or Next-Actions. You are also responsible for regularly reviewing and updating these lists, to maintain them as a trusted source of the Role’s potential work.

#### 1.2.5 Executing Next-Actions

Whenever you have time available to act in a Role, you are responsible for considering the Next-Actions you could take, and executing whichever would add the most value to the Organization.

### 1.3 Circles

A **_"Circle"_** is a container for organizing Roles and Policies around a common Purpose. The Roles and Policies within a Circle make up its acting **_"Governance"_**.

#### 1.3.1 Breaking Down Roles

The inside of every Role is a Circle. This Circle can hold its own Roles and Policies to break down and organize its work. This does not apply to the Roles defined in this Constitution, which may not be further broken down.

A Role's internal Circle is considered a **_"Sub-Circle"_** of the broader Circle that holds the Role, while that broader Circle is its **_"Super-Circle"_**.

#### 1.3.2 Delegating Domains

When a Circle grants a Domain to one of its Roles, any Role Lead for that Role may control that Domain on behalf of the Circle. A Circle may only grant Domains to its Roles that fall within the Circle's own Domains, or that are only relevant within its own internal processes.

Once a Role controls a Domain, it may create Policies governing that Domain within its own Governance. However, the Circle that delegated the Domain retains the right to define its own Policies governing that Domain as well. Any such Policies supersede those defined by the Role in the event of a conflict.

Granting a Domain to a Role does not delegate any rights the Circle has to control spending of money or assets, unless explicitly specified.

#### 1.3.3 Anchor Circle

The broadest Circle that holds the Purpose of the whole Organization is its **_"Anchor Circle"_**. The Anchor Circle holds all authorities and Domains that the Organization itself controls, and has no Super-Circle. The Anchor Circle may change its own Purpose or clarify its own Accountabilities via a Policy.

The Ratifiers may define an initial structure and other Governance within the Anchor Circle upon adopting this Constitution.

#### 1.3.4 Linking Into Circles

A Role may link into another Circle if a Policy of that other Circle or any Super-Circle thereof invites it.

Once linked into another Circle, a Role is considered part of the Governance of that other Circle. That Circle may add to the Role and later change what it adds. However, it may not delete the Role nor change anything added by another Circle, and another Circle may not change or remove anything it adds. The authority to add or change assignments into the Role stays with its source Circle. The Circle a Role links into is not considered its Super-Circle, and nor is the Role's inner Circle considered its Sub-Circle.

A Circle may unlink a Role by removing the Policy that invited it to link, or by another mechanism defined in that Policy. A Role may also opt to remove itself from a Circle it linked into, unless a Policy within or acting upon the Role's source Circle says otherwise. Once unlinked from a Circle, any Governance added to the Role by that Circle is automatically removed.

#### 1.3.5 Facilitator & Secretary Roles

Any Circle may appoint someone as the Circle's **_"Facilitator"_**. The selected Facilitator fills a **_"Facilitator Role"_** in the Circle, with a Purpose of "Circle governance and operational practices aligned with the Constitution".

Any Circle may appoint someone as the Circle's **_"Secretary"_**. The selected Secretary fills a **_"Secretary Role"_** in the Circle, with a Purpose of "Stabilize the Circle’s constitutionally-required records and meetings".

A Circle may add Accountabilities or Domains to its own Facilitator or Secretary Role, as well as amend or remove those additions. No Circle may amend or remove the Purpose of either Role, nor any Accountabilities or Domains placed on those Roles by this Constitution.

### 1.4 Circle Leads

Serving as a Role Lead also means serving as a **_"Circle Lead"_** within that Role's internal Circle, and thus filling the **_"Circle Lead Role"_** within. The Circle Lead Role holds the overall Purpose of that broader Role, and all Accountabilities on that Role to the extent they are not covered by other Roles or processes within the Circle.

The Anchor Circle has no Circle Leads, unless a Policy of the Circle says otherwise.

#### 1.4.1 Assigning Roles

A Circle Lead controls the Circle's Role assignments and may assign any Role within the Circle to anyone willing to fill it, including to multiple people at the same time. Anyone so assigned may later resign from filling the Role, unless they’ve agreed otherwise. A Circle Lead may also revoke an assignment to any Role within the Circle at any time.

A Circle Lead may further focus a Role assignment on only a specific context. To do so, the entire Role definition must still be relevant within that context. When a focus is used, each assignment focus behaves like a separate Role. The Role's Purpose, Domains, and Accountabilities all still apply, but only within the focus of the assignment.

No one other than a Circle Lead may assign a Role or revoke a Role assignment within the Circle, unless the Circle has delegated control of Role assignments to a different Role or process. A Policy may further constrain Role assignments or removals.

#### 1.4.2 Covering Unfilled Roles

Whenever a Role in a Circle is unfilled, each Circle Lead is automatically considered a Role Lead of the unfilled Role.

When a Role is filled only by people who are not Partners of the Organization, then each Circle Lead is automatically considered a Role Lead of that Role as well. However, this default assignment only applies to the extent that the non-Partners are not actively fulfilling relevant responsibilities and duties that a Partner would hold.

#### 1.4.3 Defining Priorities & Strategies

A Circle Lead may judge the relative value of potential Circle efforts to resolve priority conflicts across Roles. A Circle Lead may also define a **_"Strategy"_** for the Circle, or many Strategies, which are heuristics that guide prioritization in the Circle.

#### 1.4.4 Routing External References

Whenever Governance outside the Circle references the Circle itself or any Role in the Circle, a Circle Lead may update that reference to instead refer to another Role in the Circle. This clarification is not considered a change to that Circle's Governance.

#### 1.4.5 Amending the Circle Lead Role

A Circle may not modify the Purpose of its Circle Lead Role, nor remove the Role.

A Circle may add Accountabilities or Domains to the Circle Lead Role, and later remove these additions. However, any additions automatically apply to every Sub-Circle's Circle Lead Role as well, recursively. A Circle may not add Accountabilities or Domains just to its own Circle Lead Role, or any only relevant within that Circle.

A Circle may remove any Accountabilities, Domains, authorities, or functions of its own Circle Lead Role. It can do this either by placing them on another Role in the Circle, or by defining an alternate means of enacting them. Doing this automatically removes the relevant authority or element from the Circle's Circle Lead Role, for as long as the delegation remains in place.

## Article 2: Rules of Cooperation

### 2.1 Duty of Transparency

As a Partner, you have the duty to provide transparency to Role Leads in the Organization upon their request, as follows:

- **(a) Projects & Next-Actions:** You must share any Projects and Next-Actions you are tracking for the Organization.
- **(b) Relative Priority:** You must share your judgment of the relative priority of any of your Projects or Next-Actions vs. anything else competing for your attention.
- **(c) Projections:** You must provide a projection of when you expect to complete any of your Projects or Next-Actions. A rough estimate is enough, considering your current context and priorities. Detailed analysis or planning is not required, and this projection is not a commitment in any way. Unless Governance says otherwise, you have no duty to track the projection or follow-up with the recipient if it changes.
- **(d) Checklist Items:** You must verify completion of any recurring actions that you perform for your Roles or as a Partner of the Organization. If requested, you must continue to share these verifications regularly, until you believe they are no longer useful.
- **(e) Metrics:** You must share any metrics you collect in your Roles or as a Partner of the Organization. If requested, you must continue to share these metrics regularly, until you determine they are no longer useful.
- **(f) Progress Updates:** You must share a summary of progress you've made in your Roles or towards any of your Projects since the last update you shared. If requested, you must continue to share these updates regularly, until you determine they are no longer useful.
- **(g) Other Information:** You must share any other information that's readily available to you and won't cause harm to share.

### 2.2 Duty of Processing

As a Partner, you have the duty to promptly process messages and requests from Role Leads in the Organization, as follows:

- **(a) Requests to Clarify:** Others may ask you to clarify the next steps for any of your Projects or for any Accountability of your Roles. You must then determine and communicate a Next-Action to move it forward, if there are any you could take. If there are not, you must instead share what you’re waiting for before you can take a Next-Action.
- **(b) Requests for Projects & Next-Actions:** Others may ask you to take on a specific Next-Action or Project. You must accept and track it if you believe it would make sense to work towards in one of your Roles or as a Partner of the Organization, at least in the absence of competing priorities. If you don't, then you must either explain your reasoning, or suggest something else you believe will meet the requester’s goal instead.
- **(c) Requests to Impact Domain:** Others may ask to impact a Domain controlled by one of your Roles. You must allow the impact if you see no reason it will reduce your capacity to enact your Role's Purpose or Accountabilities. If you do see such a reason, you must explain it to the requester.

### 2.3 Duty of Prioritization

As a Partner, you have a duty to prioritize your attention in alignment with the following:

- **(a) Processing:** You must generally prioritize processing inbound messages to your Roles from other Role Leads over executing your own Next-Actions. However, you may delay processing messages until you can batch process at a convenient time, as long as your processing is still prompt. Processing includes engaging in any duties in this Article, and then sharing how you processed the message upon request. Processing does not include executing upon any Next-Actions or Projects you capture.
- **(b) Meetings:** You must prioritize attending any meeting defined in this Constitution over executing your own Next-Actions, but only when another Partner explicitly requests this prioritization for a specific meeting. You may still decline the request if you already have plans scheduled over the meeting time.
- **(c) Circle Priorities:** When choosing what to work on in a Role, you must consider any official Strategies or relative prioritizations of that Role, of any Circle holding that Role, and of any Super-Circle thereof. You must then treat these official priorities as more important to the Organization than your own individual priorities or your own judgment of the Organization's priorities. Official priorities of a Circle are those defined by a Circle Lead, or by any other Roles or processes with the authority to resolve priority conflicts and define Strategies for that Circle.
- **(d) Deadlines:** If the Governance or any official Strategy or prioritization of a Circle includes a deadline specifying when something must be done by, no one may interpret that as a mandate to meet that deadline regardless of the impact of doing so. Instead, you must interpret that as an official prioritization of any actions needed to hit that deadline over any other actions for that Circle, and act accordingly. A Circle Lead or another Role or process with the authority to resolve priority conflicts across Roles may overrule this prioritization.

### 2.4 Relational Agreements

As a Partner, you may have **_"Relational Agreements"_** with other Partners. These are agreements about how you will relate together while working in the Organization, or about how you will fulfill your general functions as Partners of the Organization. They may add to or clarify the duties in this Article, but they may not conflict with them.

Relational Agreements must remain focused on shaping behaviors that generally underpin work; they may not set expectations of work to do in a Role, nor expectations about how a Partner will prioritize across different Roles. Further, they may only specify concrete acts to do or behavioral constraints to honor; they may not include promises to achieve specific outcomes or embody abstract qualities.

As a Partner, you may request a Relational Agreement of another Partner for your own personal preferences or to serve a Role you fill. That Partner may accept or reject the requested Relational Agreement based on their own personal preferences. Unless otherwise agreed, either party may later terminate the Relational Agreement by notifying the other party.

As a Partner, you have a duty to align your behavior with any written Relational Agreements you have made. Anyone facilitating a meeting or process for the Organization may also enforce these Relational Agreements during that meeting or process, as long as they don't conflict with anything defined in this Constitution.

## Article 3: Tactical Meetings

Any Partner may convene a **_"Tactical Meeting"_** to assist Partners in engaging each other in their responsibilities and duties. In addition, the Secretary of each Circle is accountable for scheduling regular Tactical Meetings for the Circle.

### 3.1 Attendance

For regular Tactical Meetings convened by a Circle's Secretary, all of the Circle's Roles are invited unless a Policy says otherwise. For other Tactical Meetings, the Partner convening the meeting must specify the Roles invited to that meeting. All Partners serving as Role Leads of those Roles are then invited to attend and represent those Roles, unless the convener narrows the invitation to include only a subset of Role Leads for a Role.

### 3.2 Meeting Process

The Facilitator of a Circle is accountable for facilitating the Circle's regular Tactical Meetings, and its Secretary is accountable for capturing and publishing Tactical Meeting outputs. For Tactical Meetings convened by someone other than a Circle's Secretary, the Partner convening a Tactical Meeting must facilitate it and capture its outputs, or appoint another volunteer or appropriate Role to do so.

Unless a Policy says otherwise, the person facilitating the meeting must use the following process:

- **(a) Check-in Round:** Each participant in turn shares their current state, or offers another opening comment for the meeting. Responses are not allowed.
- **(b) Checklist Review:** Each participant verifies completion of any recurring actions that they are regularly reporting on for their Roles in the meeting.
- **(c) Metrics Review:** Each participant shares any metrics that they are regularly reporting on for their Roles in the meeting.
- **(d) Progress Updates:** Each participant highlights progress in any Project or other initiative that they are regularly reporting on for their Roles in the meeting. Participants may only share progress made since a prior report, and not the general status of any work.
- **(e) Build Agenda:** Participants build an agenda of items to process within the meeting. Each participant may add as many agenda items as desired by providing a short label for each, with no explanation or discussion allowed. Participants may add more agenda items after this step, between the processing of any existing agenda items.
- **(f) Triage Items:** To process each agenda item, the agenda item owner may make requests of another participant, either in that participant's general capacity as a Partner, or to a Role that participant represents in the meeting. However, requests to a Role may only be made in service of a Role the requester represents in the meeting. The person facilitating the meeting manages the time allowed for each agenda item to allow space for the entire agenda, and may cut off processing any item after its due share of meeting time.
- **(g) Closing Round:** Each participant in turn shares a closing reflection on the meeting. Responses are not allowed.

A Policy of a Circle may specify an alternate process or amend this default process for Tactical Meetings called by any of the Circle's Roles.

## Article 4: Distributed Authority

As a Role Lead, you have the authority to take any action or make any decision to enact your Role’s Purpose or Accountabilities, as long as you don't break a rule defined in this Constitution. When prioritizing and choosing among your potential actions, you may use your own reasonable judgment of the relative value to the Organization of each.

### 4.1 Constraints on Authority

As a Role Lead, you must honor the following constraints on your authority.

#### 4.1.1 Don't Violate Policies

While acting in a Role, you may not violate any Policies of the Role itself or of any Circle containing the Role.

#### 4.1.2 Get Permission Before Impacting Domains

In service of your Role, you have the authority to impact and control your Role's Domains.

You may also impact any Domain held by a Circle containing your Role and not further delegated, or any Domain such a Circle itself may impact. But if you believe your impact will be substantially difficult or expensive to undo, you need to get permission.

You may not exert control or cause a material impact on a Domain delegated to a Role or Circle that doesn't contain your Role, unless you get permission. Nor may you do so on a Domain owned by another sovereign entity without permission.

When you need permission to impact a Domain, you may get it from whomever controls that Domain. You may also get permission by announcing your intent to take a specific action, and inviting anyone with a relevant Domain to object. You must then wait a reasonable time to allow responses. If no one objects in that time, you then have permission to impact any Domains owned by any Role in the Organization that your announcement reached. You may assume a written announcement has reached anyone who typically reads messages in the channel you used. Any permission so granted only applies while taking the specific action you announced. A Policy may change or constrain this process.

#### 4.1.3 Get Authorization Before Spending Money

You may not spend any money or other assets unless you first get authorized to do so. This authorization must come from a Role that already has control of those resources for spending purposes. It counts as spending if you dispose of significant property of the Organization, or significantly limit any of its rights.

To get authorized to spend, you must announce your intent to spend in writing to the Role you're seeking authorization from. You must share this announcement where all Partners serving as Role Leads of that Role or within that Role will typically see it. Your statement must include the reason for the spending, and the Role you'll spend from. You must then wait a reasonable time to allow consideration and responses. Any recipient of your announcement may escalate the spending for extra consideration, and you may not proceed with the spending if escalated. However, a Role Lead of the Role you're seeking authorization from may reverse an escalation, as may the person who escalated it. Once a reasonable time has passed and no escalations stand, your Role gains control of those resources. You may spend them for your stated purpose, or further authorize others to. The Role you got this authorization from also loses this control, however a Role Lead of that Role may revoke the authorization at any time.

A Policy may change this process in any way, or directly authorize a Role to control spending of the Circle's resources.

### 4.2 Interpretation Authority

As a Partner, you may use your reasonable judgment to interpret this Constitution and anything under its authority. You may further interpret how these apply within any specific situation you face, and act based on your interpretations. However, you must interpret all Governance in the context of the Purpose and Accountabilities of the Circle containing it, and within any official interpretation rulings of that Circle or any Super-Circle thereof. You may not use any interpretations that conflict with that context or those rulings.

#### 4.2.1 Conflicts of Interpretation

As a Partner, your interpretation of this Constitution and the Organization's Governance may sometimes conflict with another Partner's. When that happens, either party may ask the Secretary of any affected Circle to rule on which interpretation to use, and the Secretary is accountable for interpreting the Constitution and anything under its authority upon request. After a Secretary responds, everyone must align with that Secretary's ruling until the relevant text or context changes.

After ruling on an interpretation, a Secretary may publish the ruling and the logic behind it. If published, the Secretary of that Circle and any contained Circles must attempt to align with that logic in any future rulings. However, a Secretary may still contradict it once a compelling new circumstance renders the logic obsolete.

You may appeal a Secretary's interpretation to the Secretary of any Super-Circle. A Super-Circle Secretary may overrule the interpretation of any Sub-Circle Secretary.

#### 4.2.2 Striking Invalid Governance

Any Partner may ask a Circle's Secretary to rule on the validity of any Governance within that Circle or any Sub-Circle thereof. If the Secretary concludes it violates the rules of this Constitution, the Secretary must strike it from the Circle's records. After doing so, the Secretary must promptly communicate what they struck and why to all Partners filling Roles within that Circle.

### 4.3 Individual Initiative

As a Partner, in some cases you are authorized to take **_"Individual Initiative"_** by acting beyond the authority of your Roles or by breaking rules in this Constitution.

#### 4.3.1 Allowed Situations

You may only take Individual Initiative when all of the following are true:

- **(a)** You are acting in good faith to serve the Purpose or express the Accountabilities of some Role within the Organization.
- **(b)** You believe your action would resolve or prevent more Tension for the Organization than it would likely create.
- **(c)** Your action would not commit the Organization to any spending beyond what you’re already authorized to spend.
- **(d)** If your action would violate any Policies or Domains, you believe much value would be lost from delaying to get permission or change Governance.

#### 4.3.2 Communication & Restoration

Upon taking Individual Initiative, you must explain your action to any Role Leads who you believe may be significantly impacted. Upon request of any such Role Lead, you must take further actions to help resolve any Tensions created by your Individual Initiative. You must also refrain from taking similar Individual Initiative upon request of any such Role Lead.

You must prioritize the communication and restoration required by this section over your regular work. However, a Circle Lead of a Circle that contains all Roles affected by your action may change this default priority.

## Article 5: Governance Process

Changing a Circle's Governance requires using the **_"Governance Process"_** defined herein.

### 5.1 Governance Participants

Each Circle has a group of **_"Circle Members"_** who may represent its Roles in its Governance Process.

A Circle's Circle Members are those Partners filling its Circle Lead Role, as well as each Partner serving as Role Lead for a Role in the Circle. If a Role has multiple Role Leads, a Circle may adopt a Policy to limit how many of them represent that Role as Circle Members in its Governance Process.

#### 5.1.1 Circle Reps

Any Circle Member of a Circle may request an election at any time to select or replace someone as the Circle's **_"Circle Rep"_** to help represent that Circle within any broader Circle containing it. The selected Circle Rep fills a **_"Circle Rep Role"_** in the Circle, with a Purpose of "Tensions relevant to process in a broader Circle channeled out and resolved", and the following Accountabilities:

- **(a)** Seeking to understand Tensions conveyed by Role Leads within the Circle
- **(b)** Discerning Tensions appropriate to process within a broader Circle that holds the Circle
- **(c)** Processing Tensions within a broader Circle to remove constraints on the Circle

The Circle must use the Integrative Election Process defined herein to select a Circle Rep, unless a Policy defines an alternate process. Only a Circle's Circle Members are eligible to serve as its Circle Rep. Anyone serving as a Circle Lead for the Circle may not also serve as its Circle Rep. No more than one person may serve as a Circle's Circle Rep at a time, unless a Policy of a containing Circle allows it.

The selected Circle Rep becomes a Circle Member of any Circle containing that Circle, with the authority to represent their Circle just like a Circle Lead. A containing Circle may limit or prevent these Circle Reps from becoming its Circle Members via a Policy, but only if its Roles have another way to enjoy comparable representation within that Circle.

A Circle may add Accountabilities or Domains to its own Circle Rep Role, as well as amend or remove those additions. No Circle may amend or remove the Purpose of the Role, nor any Accountabilities placed on the Role by this Constitution.

#### 5.1.2 Facilitator & Secretary

The Circle's Facilitator is accountable for facilitating its Governance Process. The Circle's Secretary is accountable for capturing and publishing the outputs of its Governance Process, and holds a Domain over the Circle's governance records.

Any Circle Member of a Circle may request an election at any time to select or replace someone as the Circle's Facilitator or Secretary. The Circle must use the Integrative Election Process defined herein to select a Facilitator or Secretary. No Role or Policy may assign the Facilitator Role or Secretary Role or remove an assignment via any other means, nor change this required process. Normally, the only candidates eligible for this election are a Circle's Circle Members. However, a Policy of the Circle or any Super-Circle may add or limit eligible candidates.

### 5.2 Scope of Governance

Within a Circle's Governance Process, its Circle Members may:

- **(a)** define, amend, or remove the Circle's Roles; and
- **(b)** define, amend, or remove the Circle's Policies; and
- **(c)** move the Circle's own Roles or Policies into a Sub-Circle or any Sub-Circle thereof, but only if they enact the Purpose or Accountabilities of that Sub-Circle; and
- **(d)** move Roles or Policies from within a Sub-Circle or any Sub-Circle thereof out into the Circle, but only if they are no longer relevant to enacting the Purpose or Accountabilities of that Sub-Circle; and
- **(e)** hold elections for any elected Role within the Circle.

No other decisions are valid outputs from a Circle's Governance Process.

#### 5.2.1 Scope of Policy

A Policy may only be one or more of the following:

- **(a)** a constraint on the authority of one or more of the Circle's contained Roles; or
- **(b)** a grant of an authority the Circle or Circle Lead holds to one or more Roles; or
- **(c)** a grant of authority that allows people or Roles not otherwise authorized to control or impact one of the Circle's Domains, or a constraint on how they may do so when otherwise authorized; or
- **(d)** a rule that changes a default rule or process in this Constitution, if that change is explicitly allowed.

A Policy that grants or constrains authority applies in all Sub-Circles as well, recursively, unless otherwise stated. A Policy that changes a default rule or process in this Constitution applies only within the Circle that holds the Policy, or, if explicitly stated, within all Sub-Circles as well, recursively. In the latter case, a Sub-Circle may still override that Policy via one of its own, unless explicitly forbidden in the original Policy.

### 5.3 Changing Governance

Any Circle Member of a Circle may initiate its Governance Process by proposing a change to its Governance. To do so, the **_"Proposer"_** must first share a **_"Proposal"_** in writing with all other Circle Members, using any communication channel allowed by the Secretary. Those other Circle Members may then ask clarifying questions, share reactions, and raise concerns about adopting the Proposal. Each concern is an **_"Objection"_** if it meets the criteria herein, and the person who raised it is the **_"Objector"_**.

Once each Circle Member confirms they have no Objections to a Proposal, it is adopted and amends the Circle's Governance. If Objections are raised, the Proposer and each Objector must find a way to address the Objections before the Circle adopts the Proposal. After any such effort, all Circle Members must be given another opportunity to raise Objections. A Circle may adopt a Policy to define a time limit for raising Objections, after which anyone who has not responded is assumed to have no Objections. At any point while the Circle is processing a Proposal asynchronously, any Circle Member may request the Proposer bring the Proposal to a meeting for real-time processing instead. Unless a Policy says otherwise, the asynchronous processing then stops and the Proposal is considered withdrawn until re-proposed at a meeting.

When making Proposals or raising Objections, a Circle Member may only represent the Roles in the Circle that they either fill as Role Lead or represent as Circle Rep. A Circle Member may also represent a Role that they have permission to temporarily represent from one of its Role Leads, until that permission expires or is withdrawn.

#### 5.3.1 Proposal Requirements

For a Proposal to be valid, the Proposer must be able to:

- **(a)** describe a Tension that the Proposal would address for one of the Proposer's Roles; and
- **(b)** share an example of an actual past or present situation illustrating that Tension; and
- **(c)** give a reasonable explanation of how the Proposal would have reduced the Tension in that example.

If at any point it becomes clear to the Facilitator that a Proposal does not meet these criteria, the Facilitator must discard the Proposal.

#### 5.3.2 Objection Requirements

A concern about adopting a Proposal only counts as an Objection if the Objector can provide a reasonable argument for why it meets **all** of the following criteria:

- **(a)** The Proposal would reduce the capacity of the Circle to enact its Purpose or Accountabilities.
- **(b)** The Proposal would limit the Objector's capacity to enact the Purpose or an Accountability of a Role the Objector represents in the Circle, even if the Objector filled no other Roles in the Organization.
- **(c)** The concern does not already exist even in the absence of the Proposal. Thus, a new Tension would be created specifically by adopting the Proposal.
- **(d)** The Proposal would necessarily cause the impact, or, if it might cause the impact, the Circle wouldn't have an adequate opportunity to adapt before significant harm could result.

However, regardless of the above criteria, a concern always counts as an Objection if adopting the Proposal would violate a rule in this Constitution.

#### 5.3.3 Testing Potential Objections

The Facilitator may test whether a concern counts as an Objection by asking the Objector if the concern meets the required criteria, and how. When assessing responses, the Facilitator may only judge whether the Objector presented arguments for each criteria using logical reasoning. The Facilitator may not judge on the basis of an argument’s accuracy or the importance of addressing it.

When an Objection is claimed because adopting a Proposal would violate this Constitution, the Facilitator may ask the Circle’s Secretary to interpret if that's true. If the Secretary rules that it is not, the Facilitator must then dismiss the Objection.

#### 5.3.4 Rules of Integration

While attempting to resolve an Objection, the following rules apply:

- **(a)** The Facilitator must test an Objection if requested by any Circle Member. If it fails to meet the required criteria, the Facilitator must discard it.
- **(b)** The Objector must attempt to find an amendment to the Proposal that will resolve the Objection and still address the Proposer’s Tension. If the Facilitator believes the Objector is not making a good faith attempt to do so, the Facilitator must deem the Objection abandoned and drop it.
- **(c)** Any Circle Member may ask the Proposer clarifying questions about the Tension behind the Proposal, or about any examples the Proposer shared to illustrate the Tension. If the Facilitator believes the Proposer is not answering them in good faith, the Facilitator must deem the Proposal dropped.
- **(d)** The Objector may suggest an amended Proposal, and offer reasonable arguments for why it should resolve the Tension. Then, upon the Objector’s request, the Proposer must present a reasonable argument for why the amended Proposal would fail to resolve the Tension in at least one of the examples the Proposer used to illustrate the Tension. If needed, the Proposer may add another example to illustrate why the amended Proposal would fail to resolve the Tension. If the Facilitator believes the Proposer is unable or unwilling to do so, the Facilitator must deem the Proposal dropped.

#### 5.3.5 Integrative Election Process

Any Circle Member may also initiate the Circle's Governance Process by calling for an election for a Circle Rep, Facilitator, or Secretary. The acting Facilitator must then enact the **_"Integrative Election Process"_** as follows:

- **(a) Describe Role:** First, the Facilitator identifies the target Role and chooses a term for the election. The Facilitator may also present other information relevant to the election. During this step and the next, no one may comment on any potential candidates.
- **(b) Nominate Candidates:** Each Circle Member uses a ballot or another private forum to name the eligible candidate whom the Circle Member believes is the best fit for the Role. Circle Members must label their ballot with their own name as well, and no one may abstain or nominate multiple people.
- **(c) Nomination Sharing Round:** During this step, the Facilitator shares each nomination with all Circle Members. For each one, the nominator states why he or she believes their nominee would be a good fit for the Role, and no one else responds. The nominator may not comment on other potential candidates beyond their nominee.
- **(d) Nomination Change Round:** Once all nominations are shared, any Circle Member may change their nomination and explain the reason for the change. No responses are allowed.
- **(e) Make a Proposal:** The Facilitator counts the nominations, and makes a Proposal to elect the candidate with the most. If there is a tie, the Facilitator may do any one of the following: (i) if only one of the tied candidates has nominated himself or herself, propose that person; or (ii) if the person currently filling the Role is among those tied, propose that person; or (iii) blindly select one of the tied candidates randomly, and propose that person; or (iv) go back to the previous step and ask each Circle Member who nominated someone other than a tied candidate to change that nomination to one of the tied candidates.
- **(f) Objection Round:** The Facilitator asks each Circle Member if they see any Objections to the Proposal. If any Objections surface, the Facilitator may either allow discussion to attempt to resolve them, or discard the Proposal. If discarded, the Facilitator must then go back to the prior step in this process, ignore all nominations for the discarded candidate, and apply the rules of the prior step to select another candidate to propose instead.

A Circle may adopt a Policy to define a time limit for nominating a candidate or responding to a Proposal during the Integrative Election Process. After that time limit is reached, the Facilitator must exclude anyone who has not responded from the remainder of the process.

The Facilitator of a Circle is accountable for triggering new elections for the Circle's elected Roles after each election term expires.

#### 5.3.6 Surrogates for Facilitator & Secretary

A surrogate may act as Facilitator or Secretary while the Role is unfilled. A surrogate may also fill in when the normal Facilitator or Secretary is unavailable when needed, or requests a surrogate for any reason.

Whenever a surrogate is needed, the surrogate is, in this order of precedence:

- **(a)** someone specified by the person to be replaced; or
- **(b)** for Facilitator, the acting Secretary of the Circle, and for Secretary, the acting Facilitator of the Circle; or
- **(c)** the Circle Lead of the Circle, or, if there are multiple Circle Leads, the first one to declare themselves acting as surrogate; or
- **(d)** the first Circle Member to declare themselves acting as surrogate.

### 5.4 Governance Meetings

In addition to processing Proposals made asynchronously outside of meetings, each Circle will also hold regular **_"Governance Meetings"_** to enact the Circle’s Governance Process in real time.

The Circle's Secretary is accountable for scheduling its Governance Meetings. In addition to any regularly-scheduled Governance Meetings of the Circle, the Secretary must schedule special Governance Meetings promptly upon request of any Circle Member. The requester may further specify an intention for a special Governance Meeting and any limits on what the meeting may change. This may include focusing the meeting on a specific Tension, or limiting it to only modifying certain Roles. In that case, the authority of that special Governance Meeting is constrained to only processing Proposals for the stated intent, and only making changes within the stated limits.

#### 5.4.1 Attendance

All Circle Members of a Circle may participate in its Governance Meetings. The acting Facilitator and Secretary may also participate even if they are not Circle Members of the Circle. In that case, they become temporary Circle Members for the duration of the meeting.

As a Circle Rep for a Circle, you may invite any Partner to join the Governance Meeting of any Circle immediately containing your Circle. You may only extend this invitation to one Partner at a time, and only to aid in the processing of a specific Tension affecting the Circle you represent. You must sense this Tension yourself as well, and believe it makes sense to process in the Circle. Your invited guest becomes a temporary Circle Member for the duration of the meeting, or until you withdraw the invitation. Your guest may represent your Circle along with you in the meeting, but only while processing that specific Tension.

Beyond the above, no one else may participate in a Circle’s Governance Meetings.

#### 5.4.2 Notice & Duration

A Circle may only conduct a Governance Meeting if the Secretary gave all Circle Members reasonable advance notice of the meeting. Beyond that, there is no quorum required for a Circle to conduct a Governance Meeting, unless a Policy specifies one.

Governance Meetings end once they reach the duration initially scheduled by the Secretary. The Secretary may choose to extend the duration within the meeting, but only if no Circle Member requests otherwise.

Any Circle Member who misses part or all of a Governance Meeting counts as having had a chance to raise concerns about any Proposals made therein. Thus, a Circle may adopt Proposals in a Governance Meeting without regard for absent members.

#### 5.4.3 Meeting Process

The Facilitator must use the following process for Governance Meetings:

- **(a) Check-in Round:** Each participant in turn shares their current state, or offers another opening comment for the meeting. Responses are not allowed.
- **(b) Agenda Building & Processing:** The Facilitator builds an agenda of Tensions to process, then processes each agenda item in turn.
- **(c) Closing Round:** Each participant in turn shares a closing reflection on the meeting. Responses are not allowed.

At any point during this process, a participant may request a **_"Time Out"_** pause. The Facilitator may choose to grant or deny this request. During the Time Out, participants may discuss administrative issues or the rules of this Constitution. They may not use the Time Out to work towards the resolution of a Tension, Proposal, or Objection. The Facilitator may end a Time Out at any point and resume the normal meeting process.

A Policy of the Circle may add to this process, but may not conflict with any rules or requirements defined in this Article.

#### 5.4.4 Agenda Building

The Facilitator builds an agenda of Tensions to process by soliciting agenda items from all participants. The Facilitator must do this in the meeting and not beforehand. Each participant may add as many agenda items as desired by providing a short label for each, with no explanation or discussion allowed. Participants may add more agenda items during the meeting, between the processing of any existing agenda items.

For a regular Governance Meeting, the Facilitator may choose the order in which to process agenda items. However, on request of a meeting participant, any agenda item calling for an election must go before all others. For a special Governance Meeting scheduled on request of a participant, that participant may choose the agenda order.

Agenda items are processed one at a time. To process a request for an election, the Facilitator uses the Integrative Election Process. To process anything else, the Facilitator uses the Integrative Decision-Making Process defined below.

#### 5.4.5 Integrative Decision-Making Process

The Facilitator must enact the **_"Integrative Decision-Making Process"_** as follows:

- **(a) Present Proposal:** First, the Proposer may describe the Tension and present a Proposal to address it. On the Proposer's request, the Facilitator may allow others to help craft a Proposal. However, the Facilitator must focus this help solely on getting to an initial Proposal to address the Proposer's Tension. The Facilitator must disallow discussing other Tensions or concerns about the Proposal.
- **(b) Clarifying Questions:** Once the Proposer makes a Proposal, others may ask questions to better understand the Proposal or the Tension behind it. The Proposer may answer each question, or may decline to do so. The Facilitator must stop any reactions or opinions expressed about the Proposal, and prevent discussion of any kind. Participants may also ask the Secretary to read the Proposal or show any existing Governance, during this step or at any other time when the participant is allowed to speak, and the Secretary must do so.
- **(c) Reaction Round:** Next, each participant except the Proposer may share reactions to the Proposal, one person at a time. The Facilitator must immediately stop any out-of-turn comments, any attempts to engage others in a dialog, and any reactions to other reactions instead of to the Proposal.
- **(d) Option to Clarify:** Next, the Proposer may share comments in response to the reactions and make amendments to the Proposal. However, the primary intent of any amendments must be to better address the Proposer’s Tension, and not Tensions raised by others. The Facilitator must immediately stop comments by anyone other than the Proposer or Secretary. Any engagement by the Secretary must focus solely on capturing the amended Proposal.
- **(e) Objection Round:** Next, each participant, one at a time, may raise concerns about adopting the Proposal. The Facilitator must either capture these concerns as Objections, or test them to see if they meet the Objection criteria and capture any that do. If there are no Objections, the Proposal is adopted. While testing concerns and capturing Objections, the Facilitator must stop and disallow discussion or responses of any kind from anyone other than the Objector.
- **(f) Integration:** If there are Objections, the Facilitator then focuses on each one, one at a time. For each, the participants brainstorm to find a potential amendment to the Proposal to resolve the Objection. The Facilitator marks an Objection resolved once the Objector confirms that the amended Proposal would not trigger the Objection, and the Proposer confirms that it still addresses the Tension. During this step, the Facilitator must apply the rules of integration described in this Article. Once all Objections are resolved, the Facilitator moves back to the Objection round with the amended Proposal.

### 5.5 Process Breakdown

A **_"Process Breakdown"_** occurs when a Circle shows a pattern of behavior or output that violates the rules of this Constitution. The Facilitator or Secretary of a Circle may declare a Process Breakdown in their own Circle or any Sub-Circle, using their reasonable judgment. Any concerned Partner may further request a Facilitator review a Sub-Circle to look for a potential Process Breakdown, and the Facilitator is accountable for auditing a Sub-Circle's meetings and records on request and declaring a Process Breakdown if one is discovered.

#### 5.5.1 Breakdown from Failed Governance

A Circle's Facilitator may also declare a Process Breakdown in the Circle if a Proposal fails to reach a resolution after those involved spend a reasonable amount of time and effort seeking resolution.

#### 5.5.2 Process Restoration

Whenever an authorized party declares a Process Breakdown within a Circle, the following occurs:

- **(a)** the Facilitator gains the authority to judge the logic and relevance of any arguments made to validate Proposals or Objections in the Circle; and
- **(b)** the Facilitator of the Super-Circle gains a Project to restore due-process within the Circle; and
- **(c)** the Facilitator of the Super-Circle gains the authority to take over as Facilitator or Secretary of the Circle; and
- **(d)** the Facilitator of the Super-Circle may assign an additional Circle Lead to the Circle for the duration of the Process Breakdown. Any decisions that person makes as Circle Lead supersede and prevent any conflicting decisions by another Circle Lead.

These authorities end as soon as due process is restored in the Circle, as assessed by the Facilitator of the Super-Circle.

If the Circle in Process Breakdown has no Super-Circle, then the powers above all vest with its own Facilitator instead.

#### 5.5.3 Escalation of Process Breakdown

A Process Breakdown in one Circle is not automatically considered a Process Breakdown of its Super-Circle. However, if it remains unresolved for an unreasonable time, then the Super-Circle is also considered in a Process Breakdown.

---

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

---

`,to=`# Purpose of the Kanban Guide

By reducing Kanban to its essential components, the hope is that this guide will be a unifying reference for the community.
By building upon Kanban fundamentals, the strategy presented here can accommodate the full spectrum of value delivery and organizational challenges.

Any use of the word Kanban in this document specifically means the holistic set of concepts in this guide.

© 2019-2020 Orderly Disruption Limited, Daniel S. Vacanti, Inc.

This publication is offered for license under the Attribution ShareAlike license of Creative Commons, accessible at http://creativecommons.org/licenses/by-sa/4.0/legalcode and also described in summary form at http://creativecommons.org/licenses/by-sa/4.0/, By using this Kanban Guide, you acknowledge that you have read and agree to be bound by the terms of the Attribution ShareAlike license of Creative Commons.

# Definition of Kanban

Kanban is a strategy for optimizing the flow of value through a process that uses a visual, pull-based system.
There may be various ways to define value, including consideration of the needs of the customer, the end-user, the organization, and the environment, for example.

Kanban comprises the following three practices working in tandem:

- Defining and visualizing a workflow
- Actively managing items in a workflow
- Improving a workflow

In their implementation, these Kanban practices are collectively called a Kanban system.
Those who participate in the value delivery of a Kanban system are called Kanban system members.

# Why Use Kanban?

Central to the definition of Kanban is the concept of flow.
Flow is the movement of potential value through a system.
As most workflows exist to optimize value, the strategy of Kanban is to optimize value by optimizing flow.
Optimization does not necessarily imply maximization.
Rather, value optimization means striving to find the right balance of effectiveness, efficiency, and predictability in how work gets done:

- An effective workflow is one that delivers what customers want when they want it.
- An efficient workflow allocates available economic resources as optimally as possible to deliver value.
- A predictable workflow means being able to accurately forecast value delivery within an acceptable degree of uncertainty.

The strategy of Kanban is to get members to ask the right questions sooner as part of a continuous improvement effort in pursuit of these goals.
Only by finding a sustainable balance among these three elements can value optimization be achieved.

Because Kanban can work with virtually any workflow, its application is not limited to any one industry or context.
Professional knowledge workers, such as those in finance, marketing, healthcare, and software (to name a few), have benefited from Kanban practices.

# Kanban Theory

Kanban draws on established flow theory, including but not limited to: systems thinking, lean principles, queuing theory (batch size and queue size), variability, and quality control.
Continually improving a Kanban system over time based on these theories is one way that organizations can attempt to optimize the delivery of value.

The theory upon which Kanban is based is also shared by many existing value-oriented methodologies and frameworks.
Because of these similarities, Kanban can and should be used to augment those delivery techniques.

# Kanban Practices

## Defining and Visualizing the Workflow

Optimizing flow requires defining what flow means in a given context.
The explicit shared understanding of flow among Kanban system members within their context is called a Definition of Workflow (DoW).
DoW is a fundamental concept of Kanban.
All other elements of this guide depend heavily on how workflow is defined.

_At minimum_, members must create their DoW using all of the following elements:

- A definition of the individual units of value that are moving through the workflow. These units of value are referred to as work items (or items).
- A definition for when work items are started and finished within the workflow. Your workflow may have more than one started or finished points depending on the work item.
- One or more defined states that the work items flow through from started to finished. Any work items between a started point and a finished point are considered work in progress (WIP)[WorkInProgress].
- A definition of how WIP[WorkInProgress] will be controlled from started to finished.
- Explicit policies about how work items can flow through each state from started to finished.
- A service level expectation (SLE), which is a forecast of how long it should take a work item to flow from started to finished.

Kanban system members often require additional DoW elements such as values, principles, and working agreements depending on the team’s circumstances.
The options vary, and there are resources beyond this guide that can help with deciding which ones to incorporate.

The visualization of the DoW is called a Kanban board[KanbanBoard].
Making at least the minimum elements of DoW transparent on the Kanban board[KanbanBoard] is essential to processing knowledge that informs optimal workflow operation and facilitates continuous process improvement.

There are no specific guidelines for how a visualization should look as long as it encompasses the shared understanding of how value gets delivered.
Consideration should be given to all aspects of the DoW (e.g., work items, policies) along with any other context-specific factors that may affect how the process operates.
Kanban system members are limited only by their imagination regarding how they make flow transparent.

## Actively Managing Items in a Workflow

Active management of items in a workflow can take several forms, including but not limited to the following:

- Controlling WIP.[WorkInProgress].
- Avoiding work items piling up in any part of the workflow.
- Ensuring work items do not age unnecessarily, using the SLE as a reference.
- Unblocking blocked work.

A common practice is for Kanban system members to review the active management of items regularly.
Although some may choose a daily meeting, there is no requirement to formalize the review or meet at a regular cadence so long as active management takes place.

## Controlling Work In Progress[WorkInProgress]

Kanban system members must explicitly control the number of work items in a workflow from start to finish.
That control is usually represented as numbers or slots/tokens on a Kanban board[KanbanBoard] that are called WIP[WorkInProgress] limits.
A WIP[WorkInProgress] limit can include (but is not limited to) work items in a single column, several grouped columns/lanes/areas, or a whole board[KanbanBoard].

A side effect of controlling WIP[WorkInProgress] is that it creates a pull system.
It is called a pull system because Kanban system members start work on an item (pulls or selects) only when there is a clear signal that there is capacity to do so.
When WIP[WorkInProgress] drops below the limit in the DoW, that is a signal to select new work.
Members should refrain from pulling/selecting more than the number of work items into a given part of the workflow as defined by the WIP[WorkInProgress] Limit.
In rare cases, system members may agree to pull additional work items beyond the WIP[WorkInProgress] Limit, but it should not be routine.

Controlling WIP[WorkInProgress] not only helps workflow but often also improves the Kanban system members’ collective focus, commitment, and collaboration.
Any acceptable exceptions to controlling WIP[WorkInProgress] should be made explicit as part of the DoW.

## Service Level Expectation

The SLE is a forecast of how long it should take a single work item to flow from started to finished.
The SLE itself has two parts: a period of elapsed time and a probability associated with that period (e.g., “85% of work items will be finished in eight days or less”).
The SLE should be based on historical cycle time[CycleTime], and once calculated, should be visualized on the Kanban board[KanbanBoard].
If historical cycle time[CycleTime] data does not exist, a best guess will do until there is enough historical data for a proper SLE calculation.

# Improving the Workflow

Having made the DoW explicit, the Kanban system members’ responsibility is to continuously improve their workflow to achieve a better balance of effectiveness, efficiency, and predictability.
The information they gain from visualization and other Kanban measures guide what tweaks to the DoW may be most beneficial.

It is common practice to review the DoW from time to time to discuss and implement any changes needed.
There is no requirement, however, to wait for a formal meeting at a regular cadence to make these changes.
Kanban system members can and should make just-in-time alterations as the context dictates.
There is also nothing that prescribes improvements to workflow to be small and incremental.
If visualization and the Kanban measures indicate that a big change is needed, that is what the members should implement.

# Kanban Measures

The application of Kanban requires the collection and analysis of a minimum set of flow measures (or metrics).
They are a reflection of the Kanban system’s current health and performance and will help inform decisions about how value gets delivered.

The four mandatory flow measures to track are:

- _WIP_[WorkInProgress]: The number of work items started but not finished.
- _Throughput_: The number of work items finished per unit of time. Note the measurement of throughput is the exact count of work items.
- _Work Item Age_: The amount of elapsed time between when a work item started and the current time.
- _Cycle Time_[CycleTime]: The amount of elapsed time between when a work item started and when a work item finished.

For these mandatory four flow measures, started and finished refer to how the Kanban system members have defined those terms in the DoW.

Provided that the members use these metrics as described in this guide, members can refer to any of these measures using any other names as they choose.

In and of themselves, these metrics are meaningless unless they can inform one or more of the three Kanban practices.
Therefore, visualizing these metrics using charts is recommended.
It does not matter what kind of charts are used as long as they enable a shared understanding of the Kanban system’s current health and performance.

The flow measures listed in this guide represent only the minimum required for the operation of a Kanban system.
Kanban system members may and often should use additional context-specific measures that assist data-informed decisions.

# Endnote

Kanban’s practices and measures are immutable.
Although implementing only parts of Kanban is possible, the result is not Kanban.
One can and likely should add other principles, methodologies, and techniques to the Kanban system, but the minimum set of practices, measures, and the spirit of optimizing value must be preserved.

# History of Kanban

The present state of Kanban can trace its roots to the Toyota Production System (and its antecedents) and the work of people like Taiichi Ohno and W. Edwards Deming.
The collective set of practices for knowledge work that is now commonly referred to as Kanban mostly originated on a team at Corbis in 2006.
Those practices quickly spread to encompass a large and diverse international community that has continued to enhance and evolve the approach.

# Acknowledgments

In addition to all who helped to develop Kanban over the years, we would like to thank the following individuals specifically for their contributions to this guide:

- Yuval Yeret and Steve Porter for their initial contribution of foundational concepts.
- Emily Coleman for the inspiration to broaden the definition of value.
- Ryan Ripley and Todd Miller for helping to develop much of the supporting materials upon which this guide is based.
- Julia Wester, Colleen Johnson, Jose Casal, and Jean-Paul Bayley for being insightful reviewers of the early drafts.
- Dave West and Eric Naiburg for their careful consideration of what should be in the final published version.
- Deborah Zanke for editing.

# License

This work is licensed by Orderly Disruption Limited and Daniel S. Vacanti, Inc. under a Creative Commons Attribution 4.0 International License.

`,no=`# Purpose of the Nexus Guide

Product delivery is complex, and the integration of product development work into a valuable product requires coordinating many diverse activities.
Nexus is a framework for developing and sustaining scaled product delivery initiatives.
It builds upon Scrum, extending it only where absolutely necessary to minimize and manage dependencies between multiple Scrum Teams[ScrumTeams] while promoting empiricism and the Scrum Values.

The Nexus framework inherits the purpose and intent of the Scrum framework as documented in the Scrum Guide (www.scrumguides.org.) Scaled Scrum is still Scrum.
Nexus does not change the core design or ideas of Scrum, or leave out elements, or negate the rules of Scrum.
Doing so covers up problems and limits the benefits of Scrum, potentially even rendering it useless.

This Guide contains the definition of Nexus.
Each element of the framework serves a specific purpose that is essential to help teams[ScrumTeams] and organizations scale the benefits of Scrum with multiple teams[ScrumTeams] working together.

As organizations use Nexus, they typically discover complementary patterns, processes, and practices that help them in their application of the Nexus framework.
As with Scrum, such tactics vary widely and are described elsewhere.

Ken Schwaber and Scrum.org developed Nexus.

# Nexus Definition

A Nexus is a group of approximately three to nine Scrum Teams[ScrumTeams] that work together to deliver a single product; it is a connection between people and things.
A Nexus has a single Product Owner who manages a single Product Backlog from which the Scrum Teams[ScrumTeams] work.

The Nexus framework defines the accountabilities[Accountable], events, and artifacts that bind and weave together the work of the Scrum Teams[ScrumTeams] in a Nexus.
Nexus builds upon Scrum’s foundation, and its parts will be familiar to those who have used Scrum.
It minimally extends the Scrum framework only where absolutely necessary to enable multiple teams[ScrumTeams] to work from a single Product Backlog to build an Integrated Increment that meets a goal.

# Nexus Theory

At its heart, Nexus seeks to preserve and enhance Scrum’s foundational bottom-up intelligence and empiricism while enabling a group of Scrum Teams[ScrumTeams] to deliver more value than can be achieved by a single team[ScrumTeam].
The goal of Nexus is to scale the value that a group of Scrum Teams[ScrumTeams], working on a single product, is able to deliver.
It does this by reducing the complexity that those teams[ScrumTeams] encounter as they collaborate to deliver an integrated, valuable, useful product Increment at least once every Sprint.

The Nexus Framework helps teams[ScrumTeams] solve common scaling challenges like reducing cross-team[CrossTeam] dependencies, preserving team[ScrumTeam] self-management and transparency, and ensuring accountability[Accountable].
Nexus helps to make transparent dependencies.
These dependencies are often caused by mismatches related to:

1. Product structure: The degree to which different concerns are independently separated in the product will greatly affect the complexity of creating an integrated product release.
2. Communication structure: The way that people communicate within and between teams[ScrumTeams] affects their ability to get work done; delays in communication and feedback reduce the flow of work.

Nexus provides opportunities to change the process, product structure, and communication structure to reduce or remove these dependencies.

While often counterintuitive, scaling the value that is delivered does not always require adding more people.
Increasing the number of people and the size of a product increases complexity and dependencies, the need for collaboration, and the number of communication pathways involved in making decisions.
Scaling-down, reducing the number of people who work on something, can be an important practice in delivering more value.

# The Nexus Framework

Nexus builds upon Scrum by enhancing the foundational elements of Scrum in ways that help solve the dependency and collaboration challenges of cross-team[CrossTeam] work.
Nexus (see Figure 1) reveals an empirical process that closely mirrors Scrum.

Nexus extends Scrum in the following ways:

- Accountabilities[Accountable]: The Nexus Integration Team[NexusIntegrationTeam] ensures that the Nexus delivers a valuable, useful Integrated Increment at least once every Sprint. The Nexus Integration Team[NexusIntegrationTeam] consists of the Product Owner, a Scrum Master, and Nexus Integration Team[NexusIntegrationTeam] Members.
- Events: Events are appended to, placed around, or replace regular Scrum events to augment them. As modified, they serve both the overall effort of all Scrum Teams[ScrumTeams] in the Nexus, and each individual team. A Nexus Sprint Goal is the objective for the Sprint.
- Artifacts: All Scrum Team[ScrumTeams] use the same, single Product Backlog. As the Product Backlog items are refined and made ready, indicators of which team will most likely do the work inside a Sprint are made transparent. A Nexus Sprint Backlog exists to assist with transparency during the Sprint. The Integrated Increment represents the current sum of all integrated work completed by a Nexus.

Figure 1: The Nexus Framework
![Figure 1: The Nexus Framework](../static/docsImages/Nexus_Guide_2021.Figure1.png)

# Accountabilities in Nexus[Accountable]

A Nexus consists of Scrum Teams[ScrumTeams] that work together toward a Product Goal.
The Scrum framework defines three specific sets of accountabilities[Accountable] within a Scrum Team: the Developers, the Product Owner, and the Scrum Master.
These accountabilities[Accountable] are prescribed in the Scrum Guide.
In Nexus, an additional accountability[Accountable] is introduced, the Nexus Integration Team[NexusIntegrationTeam].

## Nexus Integration Team[NexusIntegrationTeam]

The Nexus Integration Team[NexusIntegrationTeam] is accountable[Accountable] for ensuring that a done Integrated Increment (the combined work completed by a Nexus) is produced at least once a Sprint.
It provides the focus that makes possible the accountability[Accountable] of multiple Scrum Teams[ScrumTeams] to come together to create valuable, useful Increments, as prescribed in Scrum.

While Scrum Teams[ScrumTeams] address integration issues within the Nexus, the Nexus Integration Team[NexusIntegrationTeam] provides a focal point of integration for the Nexus.
Integration includes addressing technical and non-technical cross-functional team[CrossTeam] constraints that may impede a Nexus’ ability to deliver a constantly Integrated Increment.
It should use bottom-up intelligence from within the Nexus to achieve resolution.

The Product Owner, a Scrum Master, and the appropriate members from the Scrum Teams[ScrumTeams] belong to the Nexus Integration Team[NexusIntegrationTeam].
Appropriate members are the people with the necessary skills and knowledge to help resolve the issues the Nexus faces at any point in time.
Composition of the Nexus Integration Team[NexusIntegrationTeam] may change over time to reflect the current needs of a Nexus.
Common activities the Nexus Integration Team[NexusIntegrationTeam] might perform include coaching, consulting, and highlighting awareness of dependencies and cross-team[CrossTeam] issues.

The Nexus Integration Team[NexusIntegrationTeam] consists of:

- The Product Owner: A Nexus works off a single Product Backlog, and as described in Scrum, a Product Backlog has a single Product Owner who has the final say on its contents. The Product Owner is accountable[Accountable] for maximizing the value of the product and the work performed and integrated by the Scrum Teams[ScrumTeams] in a Nexus. The Product Owner is also accountable[Accountable] for effective Product Backlog management. How this is done may vary widely across organizations, Nexuses, Scrum Teams[CrossTeam,ScrumTeams], and individuals.
- A Scrum Master: The Scrum Master in the Nexus Integration Team[NexusIntegrationTeam] is accountable[Accountable] for ensuring the Nexus framework is understood and enacted as described in the Nexus Guide. This Scrum Master may also be a Scrum Master in one or more of the Scrum Teams[ScrumTeams] in the Nexus.
- One or more Nexus Integration Team[NexusIntegrationTeam] Members: The Nexus Integration Team[NexusIntegrationTeam] often consists of Scrum Team members who help the Scrum Teams[ScrumTeams] to adopt tools and practices that contribute to the Scrum Teams[ScrumTeams]’ ability to deliver a valuable and useful Integrated Increment that frequently meets the Definition of Done.

The Nexus Integration Team[NexusIntegrationTeam] is responsible for coaching and guiding the Scrum Teams[ScrumTeams] to acquire, implement, and learn practices and tools that improve their ability to produce a valuable, useful Increment.

Membership in the Nexus Integration Team[NexusIntegrationTeam] takes precedence over individual Scrum Team membership.
As long as their Nexus Integration Team[NexusIntegrationTeam] responsibility is satisfied, they can work as team members of their respective Scrum Teams[ScrumTeams].
This preference helps ensure that the work to resolve issues affecting multiple teams[ScrumTeams] has priority.

# Nexus Events

Nexus adds to or extends the events defined by Scrum.
The duration of Nexus events is guided by the length of the corresponding events in the Scrum Guide.
They are timeboxed in addition to their corresponding Scrum events.

At scale, it may not be practical for all members of the Nexus to participate to share information or to come to an agreement.
Except where noted, Nexus events are attended by whichever members of the Nexus are needed to achieve the intended outcome of the event most effectively.

Nexus events consist of:

## The Sprint

A Sprint in Nexus is the same as in Scrum.
The Scrum Teams[ScrumTeams] in a Nexus produce a single Integrated Increment.

## Cross-Team[CrossTeam] Refinement

Cross-Team Refinement of the Product Backlog reduces or eliminates cross-team[CrossTeam] dependencies within a Nexus.
The Product Backlog must be decomposed so that dependencies are transparent, identified across teams[ScrumTeams,CrossTeam], and removed or minimized.
Product Backlog items pass through different levels of decomposition from very large and vague requests to actionable work that a single Scrum Team could deliver inside a Sprint.

Cross-Team[CrossTeam] Refinement of the Product Backlog at scale serves a dual purpose:

- It helps the Scrum Teams[ScrumTeams] forecast which team will deliver which Product Backlog items.
- It identifies dependencies across those teams[ScrumTeams,CrossTeam].

Cross-Team[CrossTeam] Refinement is ongoing.
The frequency, duration, and attendance of Cross-Team[CrossTeam] Refinement varies to optimize these two purposes.

Where needed, each Scrum Team will continue their own refinement in order for the Product Backlog items to be ready for selection in a Nexus Sprint Planning event.
An adequately refined Product Backlog will minimize the emergence of new dependencies during Nexus Sprint Planning.

## Nexus Sprint Planning

The purpose of Nexus Sprint Planning is to coordinate the activities of all Scrum Teams[ScrumTeams] within a Nexus for a single Sprint.
Appropriate representatives from each Scrum Team and the Product Owner meet to plan the Sprint.

The result of Nexus Sprint Planning is:

- a Nexus Sprint Goal that aligns with the Product Goal and describes the purpose that will be achieved by the Nexus during the Sprint
- a Sprint Goal for each Scrum Team that aligns with the Nexus Sprint Goal
- a single Nexus Sprint Backlog that represents the work of the Nexus toward the Nexus Sprint Goal and makes cross-team[CrossTeam] dependencies transparent
- A Sprint Backlog for each Scrum Team, which makes transparent the work they will do in support of the Nexus Sprint Goal

## Nexus Daily Scrum

The purpose of the Nexus Daily Scrum is to identify any integration issues and inspect progress toward the Nexus Sprint Goal.
Appropriate representatives from the Scrum Teams[ScrumTeams] attend the Nexus Daily Scrum, inspect the current state of the integrated Increment, and identify integration issues and newly discovered cross-team[CrossTeam] dependencies or impacts.
Each Scrum Team’s Daily Scrum complements the Nexus Daily Scrum by creating plans for the day, focused primarily on addressing the integration issues raised during the Nexus Daily Scrum.

The Nexus Daily Scrum is not the only time Scrum Teams[ScrumTeams] in the Nexus are allowed to adjust their plan.
Cross-team[CrossTeam] communication can occur throughout the day for more detailed discussions about adapting or re-planning the rest of the Sprint’s work.

## Nexus Sprint Review

The Nexus Sprint Review is held at the end of the Sprint to provide feedback on the done Integrated Increment that the Nexus has built over the Sprint and determine future adaptations.

Since the entire Integrated Increment is the focus for capturing feedback from stakeholders, a Nexus Sprint Review replaces individual Scrum Team Sprint Reviews.
During the event, the Nexus presents the results of their work to key stakeholders and progress toward the Product Goal is discussed, although it may not be possible to show all completed work in detail.
Based on this information, attendees collaborate on what the Nexus should do to address the feedback.
The Product Backlog may be adjusted to reflect these discussions.

## Nexus Sprint Retrospective

The purpose of the Nexus Sprint Retrospective is to plan ways to increase quality and effectiveness across the whole Nexus.
The Nexus inspects how the last Sprint went with regards to individuals, teams[ScrumTeams], interactions, processes, tools, and its Definition of Done.
In addition to individual team improvements, the Scrum Teams[ScrumTeams]’ Sprint Retrospectives complement the Nexus Sprint Retrospective by using bottom-up intelligence to focus on issues that affect the Nexus as a whole.

The Nexus Sprint Retrospective concludes the Sprint.

# Nexus Artifacts and Commitments

Artifacts represent work or value, and are designed to maximize transparency, as described in the Scrum Guide.
The Nexus Integration Team[NexusIntegrationTeam] works with the Scrum Teams[ScrumTeams] within a Nexus to ensure that transparency is achieved across all artifacts and that the state of the Integrated Increment is widely understood.

Nexus extends Scrum with the following artifacts, and each artifact contains a commitment, as indicated below.
These commitments exist to reinforce empiricism and the Scrum value for the Nexus and its stakeholders.

## Product Backlog

There is a single Product Backlog that contains a list of what is needed to improve the product for the entire Nexus and all of its Scrum Teams[ScrumTeams].
At scale, the Product Backlog must be understood at a level where dependencies can be detected and minimized.
The Product Owner is accountable[Accountable] for the Product Backlog, including its content, availability, and ordering.

### Commitment: Product Goal

The commitment for the Product Backlog is the Product Goal.
The Product Goal, which describes the future state of the product and serves as a long-term goal of the Nexus.

## Nexus Sprint Backlog

A Nexus Sprint Backlog is the composite of the Nexus Sprint Goal and Product Backlog items from the Sprint Backlogs of the individual Scrum Teams[ScrumTeams].
It is used to highlight dependencies and the flow of work during the Sprint.
The Nexus Sprint Backlog is updated throughout the Sprint as more is learned.
It should have enough detail that the Nexus can inspect their progress in the Nexus Daily Scrum.

### Commitment: Nexus Sprint Goal

The commitment for the Nexus Sprint Backlog is the Nexus Sprint Goal.
The Nexus Sprint Goal is a single objective for the Nexus.
It is the sum of all the work and Sprint Goals of the Scrum Teams[ScrumTeams] within the Nexus.
It creates coherence and focus for the Nexus for the Sprint by encouraging the Scrum Teams[ScrumTeams] to work together rather than on separate initiatives.
The Nexus Sprint Goal is created at the Nexus Sprint Planning event and added to the Nexus Sprint Backlog.
As Scrum Teams[ScrumTeams] work during the Sprint, they keep the Nexus Sprint Goal in mind.
The Nexus should demonstrate the valuable and useful functionality that is done to achieve the Nexus Sprint Goal at the Nexus Sprint Review in order to receive stakeholder feedback.

## Integrated Increment

The Integrated Increment represents the current sum of all integrated work completed by a Nexus toward the Product Goal.
The Integrated Increment is inspected at the Nexus Sprint Review, but may be delivered to stakeholders before the end of the Sprint.
The Integrated Increment must meet the Definition of Done.

### Commitment: Definition of Done

The commitment for the Integrated Increment is the Definition of Done, which defines the state of the integrated work when it meets the quality and measures required for the product.
The Increment is done only when integrated, valuable, and usable.
The Nexus Integration Team[NexusIntegrationTeam] is responsible for a Definition of Done that can be applied to the Integrated Increment developed each Sprint.
All Scrum Teams[ScrumTeams] within the Nexus must define and adhere to this Definition of Done.
Individual Scrum Teams[ScrumTeams] self-manage to achieve this state.
They may choose to apply a more stringent Definition of Done within their own teams[ScrumTeams], but cannot apply less rigorous criteria than agreed for the Integrated Increment.

Decisions made based on the state of artifacts are only as effective as the level of artifact transparency.
Incomplete or partial information will lead to incorrect or flawed decisions.
The impact of those decisions can be magnified at the scale of Nexus.

# End Note

Nexus is free and offered in this Guide.
As with the Scrum framework, the accountabilities[Accountable] in Nexus, its artifacts, events, and rules are immutable.
Although implementing only parts of Nexus is possible, the result is not Nexus.

# Acknowledgements

Nexus and Scaled Professional Scrum were collaboratively developed by Ken Schwaber, David Dame, Richard Hundhausen, Patricia Kong, Rob Maher, Steve Porter, Christina Schwaber, and Gunther Verheyen. A special thank you to Kurt Bittner, Ravi Verma, Fredrik Wendt, Jesse Houwing and Simon Flossmann for their significant contributions in advancing Nexus and Scaled Professional Scrum.

# License

© 2021 Scrum.org. Offered for license under the Offered for license under the Attribution Share Alike license of Creative Commons, accessible at http://creativecommons.org/licenses/by-sa/4.0/legalcode and also described in summary form at http://creativecommons.org/licenses/by-sa/4.0/.
By utilizing this Nexus Guide, you acknowledge and agree that you have read and agree to be bound by the terms of the Attribution Share-Alike license of Creative Commons.

`,io=`The Definitive Guide to Scrum@Scale: Scaling that Works

# Preface to the Scrum@Scale Guide

Scrum, as originally outlined in the Scrum Guide, is focused on a single Scrum Team being able to deliver optimal value while maintaining a sustainable pace. Since its inception, the usage of Scrum has extended to the creation of products, processes, and services that require the efforts of multiple teams.

In the field, it was repeatedly observed that as the number of Scrum Teams within an organization grew, two major issues emerged:

- The volume, speed, and quality of their output (working product) per team began to fall, due to issues such as cross-team dependencies, duplication of work, and communication overhead
- The original management structure was ineffective for achieving business agility. Issues arose like competing priorities and the inability to quickly shift teams around to respond to dynamic market conditions

To counteract these issues, a framework for effectively coordinating multiple Scrum Teams was clearly needed which would aim for the following:

- Linear scalability: A corresponding percentage increase in delivery of working product with an increase in the number of teams
- Business agility: The ability to rapidly respond to change by adapting the initial stable configuration

Scrum@Scale helps an organization to focus multiple networks of Scrum Teams on prioritized goals. It aims to achieve this by setting up a structure which naturally extends the way a single Scrum Team functions across a network and whose managerial function exists within a minimum viable bureaucracy (MVB).

A network can achieve linear scalability when its characteristics are independent of its size. Designing and coordinating a network of teams with this goal does not constrain growth in a particular way; instead, it allows for the network to grow organically, based on its unique needs, and at a sustainable pace of change that can be better accepted by the individuals involved.

A minimum viable bureaucracy is defined as having the least amount of governing bodies and processes needed to carry out the function(s) of an organization without impeding the delivery of customer value. It helps to achieve business agility by reducing decision latency (time to make a decision), which has been noted as a primary driver of success. In order to begin implementing Scrum@Scale, it is essential to be familiar with the Agile Manifesto and the 2020 Scrum Guide. A failure to understand the nature of agility will prevent it from being achieved. If an organization cannot Scrum, it cannot scale.

# Purpose of the Scrum@Scale Guide

This guide provides the definition of Scrum@Scale and the components of its framework. It explains the accountabilities of the scaled roles, scaled events, and enterprise artifacts, as well as the rules that bind them together.

This guide is broken down into four basic sections:

- an introduction to Scrum@Scale, with the basics for getting started
- an overview of the Scrum Master Cycle
- an overview of the Product Owner Cycle
- a walk-through of bringing the cycles together

Each component serves a specific purpose which is required for success at scale. Changing their core design or ideas, omitting them, or not following the base rules laid out in this guide limits the benefits of Scrum@Scale.

Specific tactics beyond the basic structure and rules for implementing each component vary and are not described in this Guide. Other sources provide complementary patterns, processes, and insights.

# Definitions

Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.

The Scrum Guide describes the minimal set of elements that create a team environment that drives innovation, customer satisfaction, performance, and happiness. Scrum utilizes radical transparency and a series of formal events to provide opportunities to inspect and adapt a team and its product(s).

Scrum@Scale is a lightweight organizational framework in which a network of teams operating consistently with the Scrum Guide can address complex adaptive problems, while creatively delivering products of the highest possible value. These “products” may be physical, digital, complex integrated systems, processes, services, etc.

The Scrum@Scale Guide describes the minimal set of components to scale Scrum by using Scrum and its resulting business agility across an entire organization. It can be used in all types of organizations within industry, government, nonprofits, or academia. If an organization does not already use Scrum, it will require changes to its operating system.

In Scrum, care is taken to separate accountability of the “what” (product) from the “how” (process). The same care is taken in Scrum@Scale, so that jurisdiction and accountability are expressly understood. This eliminates wasteful organizational conflict that keep teams from achieving their optimal productivity. Because Scrum@Scale consists of components, it allows an organization to customize their transformation strategy and implementation. It gives an organization the ability to target incrementally prioritized change efforts in the area(s) deemed most valuable or most in need of adaptation and then progress on to others.

Scrum@Scale separates these components into two cycles: the Scrum Master Cycle (the “how”) and the Product Owner Cycle (the “what”), intersecting at two components and sharing a third. Taken as a whole, these cycles produce a powerful supporting structure for coordinating the efforts of multiple teams along a single path.

# The Components of Scrum@Scale

![](../static/docsImages/Scrum_At_Scale_Guide_2022.ScrumAtScale-Loop-W.png)

## Values-Driven Culture

Scrum@Scale aims to build a healthy organizational culture through the pillars of empirical process control and the Scrum Values. The pillars of empirical process control are transparency, inspection, and adaptation. These pillars are actualized by the Scrum values of Openness, Courage, Focus, Respect, and Commitment.

Openness supports transparency into all of the work and processes and without it, there is no ability to inspect them honestly and attempt to adapt them for the better. Courage refers to taking the bold leaps required to deliver value quicker in innovative ways. Focus and Commitment refer to the way we handle our work obligations, putting customer value delivery as the highest priority. Lastly, all of this must occur in an environment based on respect for the individuals doing the work, without whom nothing can be created.

Scrum@Scale helps organizations thrive by supporting a positive team learning environment for working at a sustainable pace, while putting customer value at the forefront.

## Getting Started: Installing an Agile Operating System

When implementing networks of teams, it is critical to develop a scalable Reference Model prior to scaling. The reference model is a small set of teams that coordinate to deliver every Sprint. As these teams successfully implement Scrum, the rest of the organization has a functioning, healthy example of Scrum to replicate. It serves as a prototype for scaling Scrum across the next network of teams. Any deficiencies in a Scrum implementation will be magnified when multiple teams are deployed. Scaling problems include organizational policies and procedures or development practices that block performance and frustrate teams.

In a scaled setting, the Reference Model is best enabled by grouping teams together that need to coordinate in order to deliver a fully integrated set of Increments into a Scrum of Scrums (SoS). To operate effectively, the Scrum of Scrums needs to be supported by a minimum viable bureaucracy composed of two leadership groups: an Executive MetaScrum (EMS) forum, focused on what is produced by the Scrum of Scrums and an Executive Action Team (EAT) focused on how they can get it done faster. The Executive MetaScrum and Executive Action Team components are the hubs around which each cycle revolves.

## Scaling The Teams

In Scrum, the ideal state is for a Scrum Team to be an independent path to production. As such, it needs members who have all the skills necessary to go from ideation to implementation. The Scrum of Scrums is a larger team of multiple teams that replicates this ideal at scale. Each team within the Scrum of Scrums must satisfy the Team Process component.

## The Team Process

The Team Process is Scrum as prescribed by the Scrum Guide. Since every Scrum Team has a Product Owner and a Scrum Master, it constitutes the first intersection between the Product Owner and Scrum Master Cycles. The goals of the Team Process are to:

- Maximize the flow of completed work that meets the Definition of Done
- Increase performance of the team over time
- Operate in a way that is sustainable and enriching for the team
- Accelerate the customer feedback loop

## The Scrum of Scrums (SoS)

A Scrum of Scrums operates as if it were a Scrum Team, satisfying the Team Process component with scaled versions of the Scrum accountabilities, events, and artifacts. While the Scrum Guide defines the optimal team size as being fewer than 10 people, Harvard research has determined that optimal team size is 4.6 people (on average). Therefore, the optimal number of teams in a Scrum of Scrums is 4 or 5.

As a dynamic group, the teams composing the Scrum of Scrums are responsible for a fully integrated set of potentially shippable increments of product at the end of every Sprint. Optimally, they carry out all of the functions required to release value directly to customers.

![](../static/docsImages/Scrum_At_Scale_Guide_2022.1.png)

_NOTE: In the above and following diagrams, light-grey outlined pentagons represent a team. Where applicable, we have chosen to represent the SM & PO as smaller pentagons. These diagrams are meant to be examples only, as each organizational diagram may differ greatly._

## Scaling in Larger Organizations

Depending upon the size of an implementation, more than one Scrum of Scrums may be needed to deliver a complex product. In such cases, a Scrum of Scrum of Scrums (SoSoS) can be created out of multiple Scrums of Scrums. Each of these will have scaled versions of each Scrum of Scrums’ roles, artifacts, and events.

Scaling the Scrum of Scrums reduces the number of communication pathways within the organization so that complexity of communication overhead is limited. The SoSoS interfaces with a Scrum of Scrums in the exact same manner that a Scrum of Scrums interfaces with a single Scrum Team, which allows for linear scalability.

![](../static/docsImages/Scrum_At_Scale_Guide_2022.2.png)

_NOTE: For simplicity, the numbers of teams and groupings in the sample diagrams are symmetrical. They are meant to be examples only, as each organizational diagram may differ greatly._

## Scaling the Events and Roles

If a Scrum of Scrums (SoS) operates as a Scrum Team, then it needs to scale the Scrum Events and the teams’ corresponding accountabilities. To coordinate the “how” in every Sprint, a SoS will need to hold scaled versions of the Daily Scrum and Sprint Retrospective. To coordinate the “what” in every Sprint, a SoS will need to hold scaled versions of Sprint Planning and a Sprint Review. As an ongoing practice, Backlog Refinement will also need to be done at scale.

The scaled versions of the Daily Scrum and Retrospective are facilitated by a Scrum Master for the group, called the Scrum of Scrums Master (SoSM). The scaled versions of the Sprint Review and Backlog Refinement are facilitated by a Product Owner Team guided by a Chief Product Owner (CPO). The scaled version of Sprint Planning is held with the Product Owner Team and the Scrum Masters. The Product Owner Team gains insight into what will be delivered in the current Sprint and the Scrum Masters gain insight into capacity and technical capabilities. The roles of Scrum of Scrums Master and Chief Product Owner scale into the leadership groups which then drive their corresponding cycles, satisfying the components of Scrum@Scale.

## Event: The Scaled Daily Scrum (SDS)

The main talking points of a Daily Scrum are the progress towards the Sprint Goal and impediments to meeting that commitment. In a scaled setting, the Scrum of Scrums needs to understand collective progress and be responsive to impediments raised by participating teams; therefore, at least one representative from each team attends a Scaled Daily Scrum (SDS). Any person or number of people from participating teams may attend as needed.

To optimize collaboration and performance, the Scaled Daily Scrum event mirrors the Daily Scrum, in that it:

- Is time-boxed to 15 minutes or less
- Must be attended by a representative of each team.
- Is a forum to discuss how teams can work together more effectively, what has been done, what will be done, what is going wrong & why, and what the group is going to do about it

Some examples of questions to be answered:

- What impediments does a team have that will prevent them from accomplishing their Sprint Goal or that will impact the delivery plan?
- Is a team doing anything that will prevent another team from accomplishing their Sprint Goal or that will impact their delivery plan?
- Have any new dependencies between the teams or a way to resolve an existing dependency been discovered?

## Event: The Scaled Retrospective

Every Sprint, the Scrum of Scrums holds a scaled version of the Sprint Retrospective where the Scrum Masters of each team get together and discuss what experiments have been done to drive continuous improvement and their results. Additionally, they should discuss the next round of experiments and how successful improvements can be leveraged across the group of teams or beyond.

# The Scrum Master Cycle: Coordinating the “How”

## Role: The Scrum of Scrums Master (SoSM)

The Scrum Master of the Scrum of Scrums is called the Scrum of Scrums Master (SoSM). The Scrum of Scrums Master is accountable for ensuring the Scaled events take place, are productive, positive, and kept within the time-box. The Scrum of Scrums Master may be one of the team’s Scrum Masters or a person specifically dedicated to this role. They are accountable for the release of the joint teams’ efforts and continuously improving the effectiveness of the Scrum of Scrums. This includes greater team throughput, lower cost, and higher quality. In order to achieve these goals, they must:

- Work closely with the Chief Product Owner to deliver a potentially releasable product increment at least every Sprint
- Coordinate the teams’ delivery with the Product Owners Team’s release plans
- Make impediments, process improvements, and progress visible to the organization
- Facilitate the prioritization and removal of impediments, paying particular attention to cross-team dependencies

The Scrum of Scrums Master is a true leader who serves the teams and the organization by understanding cross-team dependencies, including those outside of the Scrum of Scrums and enabling cross-team coordination and communication. They are accountable for keeping the Chief Product Owner, stakeholders, and larger organization informed by radiating information about product development progress, impediments removal status, and other metrics. The Scrum of Scrums Master leads by example, mentoring others to increase the effectiveness and adoption of Scrum throughout the organization.

In the case where multiple Scrum of Scrums are grouped into a Scrum of Scrum of Scrums, then a Scrum of Scrum of Scrums Master (SoSoSM) is needed to coordinate from that wider perspective.

## The Hub of the SM Cycle: The Executive Action Team (EAT)

The Executive Action Team (EAT) fulfills the Scrum Master accountabilities for an entire agile organization. This leadership team creates an agile ecosystem that allows the Reference Model to function optimally, by:

- implementing the Scrum values
- assuring that Scrum roles are created and supported
- Scrum events are held and attended
- Scrum Artifacts and their associated commitments are generated, made transparent, and updated throughout each Sprint.
- formulating guidelines and procedures that act as a translation layer between the Reference model and any part of the organization that is not agile.

The Executive Action Team is accountable for removing impediments that cannot be removed by members of the Scrum of Scrums (or wider network). Therefore, it must be comprised of individuals who are empowered, politically and financially, to remove them. The function of the Executive Action Team is to coordinate multiple Scrums of Scrums (or wider networks) and to interface with any non-agile parts of the organization. As with any Scrum Team, it needs a Product Owner, a Scrum Master, and a transparent backlog.

![](../static/docsImages/Scrum_At_Scale_Guide_2022.3.png)

_Sample Diagram showing an EAT coordinating 5 groupings of 25 teams_

## EAT Backlog and Responsibilities

The product of the Executive Action Team (EAT) is the creation of an Agile operating system for the organization. The EAT curates a Product Backlog consisting of initiatives for the ongoing transformation of the organization to achieve the goal of greater business agility. This backlog also includes process improvements which remove impediments and ones that need to be standardized.

The Executive Action Team’s responsibilities include, but are not limited to:

- Creating an agile operating system for the Reference Model as it scales through an organization, including corporate operational rules, procedures, and guidelines to enable agility
- Ensuring a Product Owner organization is created, funded, and supported
- Measuring and improving the quality of Scrum in an organization
- Building capability within an organization for business agility
- Creating a center for continuous learning for Scrum professionals
- Supporting the exploration of new ways of working

The function of the Executive Action Team is to see that this backlog is carried out. They may do this themselves or empower another group to do it. As the Executive Action Team is accountable for the quality of Scrum within the organization, the entire Scrum Master organization reports into them.

The Scrum Master organization (Scrum Masters, Scrum of Scrum Masters, and the Executive Action Team) work as a whole to implement the Scrum Master Cycle components. These unique components are:

- Continuous Improvement and Impediment Removal
- Cross-Team Coordination
- Delivery

## Continuous Improvement and Impediment Removal

Ideally, impediments should be removed as quickly as possible. This is critical to avoid scaling the impediments themselves, and because unresolved impediments may slow productivity. Therefore, the goals of Continuous Improvement and Impediment Removal are to:

- identify impediments and reframe them as opportunities to improve
- ensure transparency and visibility in the organization to effect change
- maintain an effective environment for prioritizing and removing impediments
- verify that improvements have positively impacted team and/or product metrics

## Cross-Team Coordination

When multiple teams are needed for the creation of a shared product, streamlined collaboration is required for success. Therefore, the goals of Cross-Team Coordination are to:

- sync up similar processes across multiple related teams
- mitigate cross-team dependencies to ensure they do not become impediments
- maintain alignment of team norms and guidelines for consistent output

## Delivery

Since the goal of the Scrum of Scrums is to function as a single unit and release together, how the product is delivered falls under their scope as a group. The Product Owner Team determines both the content of the release and the optimal time to deliver the increment to customers. Therefore, the goals of Delivery for the Scrum of Scrums are to:

- deliver a consistent flow of valuable finished product to customers
- integrate the work of different teams into one seamless product
- ensure a high-quality customer experience

# The Product Owner Cycle: Coordinating the “What”

## Scaling the Product Owner – The Product Owner Cycle

For each Scrum of Scrums, there is a shared common backlog that feeds the network of teams. It requires a Product Owner Team (PO Team), including a Chief Product Owner, who is accountable as the Product Owner for the group of teams. The PO Team’s main focus is ensuring that the individual teams’ priorities follow along a single path. This allows them to coordinate their individual team’s backlogs and build alignment with stakeholders and customer needs.

Each team’s Product Owner is accountable for the composition and prioritization of their team’s Sprint backlog and may pull items from the common backlog or generate independent backlog items at their discretion as needed to meet business objectives.

The main functions of the Product Owner Team are to:

- communicate the overarching vision for the product & make it visible to everyone in the organization
- build alignment with key stakeholders to secure support for backlog implementation
- generate a single, prioritized backlog; ensuring that duplication of work is avoided
- work with the Scrum of Scrums Master to create a minimally uniform “Definition of Done” that applies to all team
- eliminate dependencies raised by the teams
- generate a coordinated Roadmap and Release Plan
- monitor metrics that give insight into the product and the market

## Role: The Chief Product Owner (CPO)

The Chief Product Owner coordinates priorities with the Product Owner Team. Together they align backlog priorities with stakeholder and customer needs. The CPO may be an individual team Product Owner who plays this role as well, or they may be a person specifically dedicated to it. Their main responsibilities are the same as a regular Product Owner’s now scaled:

- Setting a strategic vision for the whole product
- Creating a single, prioritized backlog to be delivered by all of the teams
- Decide which metrics the Product Owner Team will monitor
- Assess customer product feedback and adjust the common backlog accordingly
- Facilitate the MetaScrum event (see below)

The Chief Product Owner is accountable along with their associated Scrum of Scrums Masters for the efficient delivery of product increments according to the Release Plan.

## Scaling the Product Owner Team

Having Product Owner Teams enables a network design of Product Owners which scales along with their associated Scrum of Scrums. There is no specific term associated with these expanded units, nor do the Chief Product Owners of them have specific expanded titles. Each organization is encouraged to develop their own.

## The Hub of the PO Cycle: The Executive MetaScrum (EMS)

To fulfill the Product Owner role for the entire agile organization, the Chief Product Owners meet with executives and key stakeholders at an Executive MetaScrum event. This event is derived from the MetaScrum pattern. It is _the forum_ for Leadership and other stakeholders to express their preferences to the PO Team, negotiate priorities, alter budgets, or realign teams to maximize the delivery of value. At no other time during the Sprint should these decisions be made.

At the Executive MetaScrum a dynamic group of leaders sets the organizational vision and the strategic priorities, aligning all of the teams around common goals. In order to be effective, the Chief Product Owner facilitates and each team’s Product Owner (or a proxy) must attend. This event occurs as often as needed- at least once per Sprint- to ensure an aligned backlog within the Scrum of Scrums. Optimally, this group of leaders operates as a scrum team.

In the case of larger implementations where there are multiple Scrum of Scrums, there may be multiple MetaScrums which have their strategic backlog created and prioritized at an Executive MetaScrum.

## Coordinating the “What” – The Product Owner Cycle

The Product Owner organization (the Product Owners, the Chief Product Owners, and the Executive MetaScrum) work as a whole to satisfy the unique components of the Product Owner Cycle:

- Strategic Vision
- Backlog Prioritization
- Backlog Decomposition & Refinement
- Release Planning

## Strategic Vision

A compelling vision attracts both customers and great employees. Therefore, formulate a Strategic Vision to be communicated, both externally and internally, with the goals of:

- aligning the entire organization along a shared path forward
- compellingly articulating why the organization and its products exist
- clarity allowing for the creation of concrete Product Goals
- describing what the organization will do to leverage key assets
- being able to respond to rapidly changing market conditions

## Backlog Prioritization

Proper backlog prioritization is essential for teams to work in a coordinated manner to optimize value delivery. Competition between priorities creates waste because it pulls teams in opposing directions. The goals of Backlog Prioritization are to:

- identify a clear ordering for products, capabilities, and services to be delivered
- reflect value creation, risk mitigation, and internal dependencies in ordering of the backlog
- prioritize the high-level initiatives across the entire agile organization prior to Backlog Decomposition and Refinement

## Backlog Decomposition and Refinement

A Chief Product Owner’s backlog contains items which are larger in scope than an individual team’s backlog. To pull prioritized items into individual teams, they may need to be broken down and understood better. The goals of Backlog Decomposition and Refinement are to:

- identify the complex products, projects, and associated Product Goals which will make the vision a reality
- break those complex products and projects into independent elements
- ensure all backlog items can be refined further by the teams into items they can complete in one Sprint

## Release Planning

Release Planning may encompass one or many releases of the product to a customer. It is a longer-term planning horizon than a single Sprint. The goals of Release Planning are to:

- forecast the delivery timeline of key Product Increments and capabilities.
- communicate delivery expectations to stakeholders.
- communicate the financial impact of the delivery schedule.

# Connecting the Product Owner and Scrum Master Cycles

The cycles first intersect at the Team Process component. From that point, the accountability for the “what” and “how” separate until done product gets delivered. The cycles connect again within the Feedback component where customer response to the product is interpreted. This requires Metrics in order to make empirical decisions about adapting for the next delivery cycle. The Product Owner and Scrum Master organizations work together to fulfill the requirements of these components.

## Product Feedback and Release Feedback

Product feedback is interpreted by the Product Owner organization to drive continuous improvement of the product through updating the Product Backlog(s). Release feedback is interpreted by the Scrum Master organization to drive continuous improvement of the Delivery mechanisms. The goals of obtaining and analyzing Feedback are to:

- validate assumptions
- understand how customers use and interact with the product
- capture new ideas and emerging requirements for new functionality

## Metrics and Transparency

Metrics may be unique to both specific organizations as well as to specific functions within those organizations. Scrum@Scale does not require any specific set of metrics, but it does suggest that at a bare minimum, the organization should measure:

- Productivity – e.g. change in amount of working product delivered per Sprint
- Value Delivery – e.g. business value per unit of team effort
- Quality – e.g. defect rate or service down-time
- Sustainability – e.g. team happiness

Radical transparency is essential for Scrum to function optimally, giving the organization the ability to honestly assess its progress and to inspect and adapt its products and processes.

The goals of having Metrics and Transparency are to:

- provide the appropriate context with which to make data-driven decisions
- reduce decision latency
- streamline the work required by teams, stakeholders or leadership

## Some Notes on Organizational Design

The goal of organizational design with Scrum@Scale is to allow it to be component-based, just like the framework itself. This permits for rebalancing or refactoring of teams in response to the market.

Sample diagrams:

![](../static/docsImages/Scrum_At_Scale_Guide_2022.4.png)

![](../static/docsImages/Scrum_At_Scale_Guide_2022.5.png)

Customer Relations, Legal / Compliance, and People Operations are included here since they are necessary parts of organizations and will exist as independent Scrum Teams on their own, upon which all other teams may rely.

A final note on the representation of the Executive Action Team and the Executive MetaScrum: In this diagram, they are shown as overlapping since some members are a part of the EAT and attend the EMS event. In very small organizations or implementations, the Executive Action Team members and the attendees of the Executive MetaScrum event may consist entirely of the same people.

![](../static/docsImages/Scrum_At_Scale_Guide_2022.6.png)

_In this organizational diagram, the Knowledge and Infrastructure Teams represent virtual teams of specialists of which there are too few to staff each team. If they act as shared-services team, they coordinate with the Scrum Teams as a group, where requests flow through a Product Owner for each specialty who converts them into a transparent prioritized backlog. An important note is that these teams are NOT silos of individuals who sit together (this is why they are represented as hollow pentagons); their team members sit on the actual Scrum Teams, but they make up this virtual Scrum of their own for the purpose of backlog dissemination and process improvement._

# End Note

Scrum@Scale is designed to scale productivity, to get an entire organization delivering twice the value at half the cost. Implementing a streamlined workflow at a sustainable pace with better decision making improves the work environment, increases business agility, and generates higher returns to all stakeholders.

Scrum@Scale is designed to saturate an organization with Scrum. Well implemented Scrum can run an entire organization with Scrum@Scale as the operating system.

# Acknowledgements

## History

Dr. Jeff Sutherland developed Scrum@Scale based on the fundamental principles behind Scrum, Complex Adaptive Systems theory, game theory, and his work in biology. The original version of this guide was created by collaboration with Jessica Larsen, Avi Schneier, and Alex Sutherland. Subsequent editions have been refined with the input of many experienced Scrum practitioners based on the results of their field work.

## People and Organizations

We acknowledge IDX for the creation of the Scrum of Scrums which first allowed Scrum to scale to hundreds of teams, PatientKeeper for the creation of the MetaScrum, which enabled rapid deployment of innovative product, and OpenView Venture Partners for scaling Scrum to the entire organization. We value input from Intel, who taught us “nothing scales except a scale-free architecture”, and SAP, with the largest Scrum team product organization, who taught us management involvement in the MetaScrum is essential to get more than 2,000 Scrum Teams to work together.

The agile coaches and trainers implementing these concepts at Amazon, GE, 3M, Toyota, Spotify, Maersk, Comcast, AT&T and many other companies have been helpful in testing these concepts across a wide range of businesses across different domains

1. “Business agility.” Wikipedia, Last modified 27 February 2020. [https://en.wikipedia.org/wiki/Business_agility](https://en.wikipedia.org/wiki/Business_agility).
2. Johnson, Jim. New CHAOS Report. The Standish Group. 2018.
3. Ogunnaike, Babatunde A. and Ray, W. Harmon. Process Dynamics, Modeling and Control. Oxford University Press. 1994.
4. Hackman, J Richard. Leading Teams: Setting the Stage for Great Performances. Harvard Business Press. 2002.
5. Sutherland, Jeff, Coplien, James O., and The Scrum Patterns Group. A Scrum Book: The Spirit of the Game. Pragmatic Bookshelf. 2019.
6. Sutherland, Jeff. “Inventing and Reinventing SCRUM in five Companies.” Sur le site officiel de l’alliance agile. 2001.
7. Sutherland, Jeff. “Future of Scrum: Parallel Pipelining of Sprints in Complex Projects.” Proceedings of the Agile Development Conference. IEEE Computer Society 90-102. 2005.
8. Sutherland, Jeff and Altman, Igor. “Take No Prisoners: How a Venture Capital Group Does Scrum.” Agile Conference, 2009. AGILE’09, IEEE 350-355. 2009.

`,ro=`# Purpose of the Scrum Guide

Scrum is a framework for developing, delivering, and sustaining complex products. This Guide contains the definition of Scrum. This definition consists of Scrum’s roles, events, artifacts, and the rules that bind them together. Ken Schwaber and Jeff Sutherland developed Scrum; the Scrum Guide is written and provided by them. Together, they stand behind the Scrum Guide.

# Definition of Scrum

Scrum (n): A framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value.

Scrum is:

- Lightweight
- Simple to understand
- Difficult to master

Scrum is a process framework that has been used to manage work on complex products since the early 1990s. Scrum is not a process, technique, or definitive method. Rather, it is a framework within which you can employ various processes and techniques. Scrum makes clear the relative efficacy of your product management and work techniques so that you can continuously improve the product, the team, and the working environment.

The Scrum framework consists of Scrum Teams and their associated roles, events, artifacts, and rules. Each component within the framework serves a specific purpose and is essential to Scrum’s success and usage.

The rules of Scrum bind together the roles, events, and artifacts, governing the relationships and interaction between them. The rules of Scrum are described throughout the body of this document.

Specific tactics for using the Scrum framework vary and are described elsewhere.

# Uses of Scrum

Scrum was initially developed for managing and developing products. Starting in the early 1990s, Scrum has been used extensively, worldwide, to:

1. Research and identify viable markets, technologies, and product capabilities;
2. Develop products and enhancements;
3. Release products and enhancements, as frequently as many times per day;
4. Develop and sustain Cloud (online, secure, on-demand) and other operational environments for product use; and,
5. Sustain and renew products.

Scrum has been used to develop software, hardware, embedded software, networks of interacting function, autonomous vehicles, schools, government, marketing, managing the operation of organizations and almost everything we use in our daily lives, as individuals and societies.

As technology, market, and environmental complexities and their interactions have rapidly increased, Scrum’s utility in dealing with complexity is proven daily.

Scrum proved especially effective in iterative and incremental knowledge transfer. Scrum is now widely used for products, services, and the management of the parent organization.

The essence of Scrum is a small team of people. The individual team is highly flexible and adaptive. These strengths continue operating in single, several, many, and networks of teams that develop, release, operate and sustain the work and work products of thousands of people. They collaborate and interoperate through sophisticated development architectures and target release environments.

When the words “develop” and “development” are used in the Scrum Guide, they refer to complex work, such as those types identified above.

# Scrum Theory

Scrum is founded on empirical process control theory, or empiricism. Empiricism asserts that knowledge comes from experience and making decisions based on what is known. Scrum employs an iterative, incremental approach to optimize predictability and control risk.

Three pillars uphold every implementation of empirical process control: transparency, inspection, and adaptation.

# Transparency

Significant aspects of the process must be visible to those responsible for the outcome. Transparency requires those aspects be defined by a common standard so observers share a common understanding of what is being seen.

For example

- A common language referring to the process must be shared by all participants; and,
- Those performing the work and those inspecting the resulting increment must share a
  common definition of “Done”.

# Inspection

Scrum users must frequently inspect Scrum artifacts and progress toward a Sprint Goal to detect undesirable variances. Their inspection should not be so frequent that inspection gets in the way of the work. Inspections are most beneficial when diligently performed by skilled inspectors at the point of work.

# Adaptation

If an inspector determines that one or more aspects of a process deviate outside acceptable limits, and that the resulting product will be unacceptable, the process or the material being processed must be adjusted. An adjustment must be made as soon as possible to minimize further deviation.

Scrum prescribes four formal events for inspection and adaptation, as described in the Scrum Events section of this document:

- Sprint Planning
- Daily Scrum
- Sprint Review
- Sprint Retrospective

# Scrum Values

When the values of commitment, courage, focus, openness and respect are embodied and lived by the Scrum Team, the Scrum pillars of transparency, inspection, and adaptation come to life and build trust for everyone. The Scrum Team members learn and explore those values as they work with the Scrum roles, events, and artifacts.

Successful use of Scrum depends on people becoming more proficient in living these five values. People personally commit to achieving the goals of the Scrum Team. The Scrum Team members have courage to do the right thing and work on tough problems. Everyone focuses on the work of the Sprint and the goals of the Scrum Team. The Scrum Team and its stakeholders agree to be open about all the work and the challenges with performing the work. Scrum Team members respect each other to be capable, independent people.

# The Scrum Team

The Scrum Team consists of a Product Owner, the Development Team, and a Scrum Master. Scrum Teams are self-organizing and cross-functional. Self-organizing teams choose how best to accomplish their work, rather than being directed by others outside the team. Cross-functional teams have all competencies needed to accomplish the work without depending on others not part of the team. The team model in Scrum is designed to optimize flexibility, creativity, and productivity. The Scrum Team has proven itself to be increasingly effective for all the earlier stated uses, and any complex work.

Scrum Teams deliver products iteratively and incrementally, maximizing opportunities for feedback. Incremental deliveries of “Done” product ensure a potentially useful version of working product is always available.

## The Product Owner

The Product Owner is responsible for maximizing the value of the product resulting from work of the Development Team. How this is done may vary widely across organizations, Scrum Teams, and individuals.

The Product Owner is the sole person responsible for managing the Product Backlog. Product Backlog management includes:

- Clearly expressing Product Backlog items;
- Ordering the items in the Product Backlog to best achieve goals and missions;
- Optimizing the value of the work the Development Team performs;
- Ensuring that the Product Backlog is visible, transparent, and clear to all, and shows what the Scrum Team will work on next; and,
- Ensuring the Development Team understands items in the Product Backlog to the level needed.

The Product Owner may do the above work, or have the Development Team do it. However, the Product Owner remains accountable.

The Product Owner is one person, not a committee. The Product Owner may represent the desires of a committee in the Product Backlog, but those wanting to change a Product Backlog item’s priority must address the Product Owner.

For the Product Owner to succeed, the entire organization must respect his or her decisions. The Product Owner’s decisions are visible in the content and ordering of the Product Backlog. No one can force the Development Team to work from a different set of requirements.

## The Development Team

The Development Team consists of professionals who do the work of delivering a potentially releasable Increment of “Done” product at the end of each Sprint. A “Done” increment is required at the Sprint Review. Only members of the Development Team create the Increment.

Development Teams are structured and empowered by the organization to organize and manage their own work. The resulting synergy optimizes the Development Team’s overall efficiency and effectiveness.

Development Teams have the following characteristics:

- They are self-organizing. No one (not even the Scrum Master) tells the Development Team how to turn Product Backlog into Increments of potentially releasable functionality;
- Development Teams are cross-functional, with all the skills as a team necessary to create a product Increment;
- Scrum recognizes no titles for Development Team members, regardless of the work being performed by the person;
- Scrum recognizes no sub-teams in the Development Team, regardless of domains that need to be addressed like testing, architecture, operations, or business analysis; and,
- Individual Development Team members may have specialized skills and areas of focus, but accountability belongs to the Development Team as a whole.

### Development Team Size

Optimal Development Team size is small enough to remain nimble and large enough to complete significant work within a Sprint. Fewer than three Development Team members decrease interaction and results in smaller productivity gains. Smaller Development Teams may encounter skill constraints during the Sprint, causing the Development Team to be unable to deliver a potentially releasable Increment. Having more than nine members requires too much coordination. Large Development Teams generate too much complexity for an empirical process to be useful. The Product Owner and Scrum Master roles are not included in this count unless they are also executing the work of the Sprint Backlog.

## The Scrum Master

The Scrum Master is responsible for promoting and supporting Scrum as defined in the Scrum Guide. Scrum Masters do this by helping everyone understand Scrum theory, practices, rules, and values.

The Scrum Master is a servant-leader for the Scrum Team. The Scrum Master helps those outside the Scrum Team understand which of their interactions with the Scrum Team are helpful and which aren’t. The Scrum Master helps everyone change these interactions to maximize the value created by the Scrum Team.

### Scrum Master Service to the Product Owner

The Scrum Master serves the Product Owner in several ways, including:

- Ensuring that goals, scope, and product domain are understood by everyone on the Scrum Team as well as possible;
- Finding techniques for effective Product Backlog management;
- Helping the Scrum Team understand the need for clear and concise Product Backlog items;
- Understanding product planning in an empirical environment;
- Ensuring the Product Owner knows how to arrange the Product Backlog to maximize value;
- Understanding and practicing agility; and,
- Facilitating Scrum events as requested or needed.

### Scrum Master Service to the Development Team

The Scrum Master serves the Development Team in several ways, including:

- Coaching the Development Team in self-organization and cross-functionality;
- Helping the Development Team to create high-value products;
- Removing impediments to the Development Team’s progress;
- Facilitating Scrum events as requested or needed; and,
- Coaching the Development Team in organizational environments in which Scrum is not yet fully adopted and understood.

### Scrum Master Service to the Organization

The Scrum Master serves the organization in several ways, including:

- Leading and coaching the organization in its Scrum adoption;
- Planning Scrum implementations within the organization;
- Helping employees and stakeholders understand and enact Scrum and empirical product development;
- Causing change that increases the productivity of the Scrum Team; and,
- Working with other Scrum Masters to increase the effectiveness of the application of Scrum in the organization.

# Scrum Events

Prescribed events are used in Scrum to create regularity and to minimize the need for meetings not defined in Scrum. All events are time-boxed events, such that every event has a maximum duration. Once a Sprint begins, its duration is fixed and cannot be shortened or lengthened. The remaining events may end whenever the purpose of the event is achieved, ensuring an appropriate amount of time is spent without allowing waste in the process.

Other than the Sprint itself, which is a container for all other events, each event in Scrum is a formal opportunity to inspect and adapt something. These events are specifically designed to enable critical transparency and inspection. Failure to include any of these events results in reduced transparency and is a lost opportunity to inspect and adapt.

## The Sprint

The heart of Scrum is a Sprint, a time-box of one month or less during which a “Done”, useable, and potentially releasable product Increment is created. Sprints have consistent durations throughout a development effort. A new Sprint starts immediately after the conclusion of the previous Sprint.

Sprints contain and consist of the Sprint Planning, Daily Scrums, the development work, the Sprint Review, and the Sprint Retrospective.

During the Sprint:

- No changes are made that would endanger the Sprint Goal;
- Quality goals do not decrease; and,
- Scope may be clarified and re-negotiated between the Product Owner and Development Team as more is learned.

Each Sprint may be considered a project with no more than a one-month horizon. Like projects, Sprints are used to accomplish something. Each Sprint has a goal of what is to be built, a design and flexible plan that will guide building it, the work, and the resultant product increment.

Sprints are limited to one calendar month. When a Sprint’s horizon is too long the definition of what is being built may change, complexity may rise, and risk may increase. Sprints enable predictability by ensuring inspection and adaptation of progress toward a Sprint Goal at least every calendar month. Sprints also limit risk to one calendar month of cost.

### Cancelling a Sprint

A Sprint can be cancelled before the Sprint time-box is over. Only the Product Owner has the authority to cancel the Sprint, although he or she may do so under influence from the stakeholders, the Development Team, or the Scrum Master.

A Sprint would be cancelled if the Sprint Goal becomes obsolete. This might occur if the company changes direction or if market or technology conditions change. In general, a Sprint should be cancelled if it no longer makes sense given the circumstances. But, due to the short duration of Sprints, cancellation rarely makes sense.

When a Sprint is cancelled, any completed and “Done” Product Backlog items are reviewed. If part of the work is potentially releasable, the Product Owner typically accepts it. All incomplete Product Backlog Items are re-estimated and put back on the Product Backlog. The work done on them depreciates quickly and must be frequently re-estimated.

Sprint cancellations consume resources, since everyone regroups in another Sprint Planning to start another Sprint. Sprint cancellations are often traumatic to the Scrum Team, and are very uncommon.

## Sprint Planning

The work to be performed in the Sprint is planned at the Sprint Planning. This plan is created by the collaborative work of the entire Scrum Team.

Sprint Planning is time-boxed to a maximum of eight hours for a one-month Sprint. For shorter Sprints, the event is usually shorter. The Scrum Master ensures that the event takes place and that attendants understand its purpose. The Scrum Master teaches the Scrum Team to keep it within the time-box.

Sprint Planning answers the following:

- What can be delivered in the Increment resulting from the upcoming Sprint?
- How will the work needed to deliver the Increment be achieved?

### Topic One: What can be done this Sprint?

The Development Team works to forecast the functionality that will be developed during the Sprint. The Product Owner discusses the objective that the Sprint should achieve and the Product Backlog items that, if completed in the Sprint, would achieve the Sprint Goal. The entire Scrum Team collaborates on understanding the work of the Sprint.

The input to this meeting is the Product Backlog, the latest product Increment, projected capacity of the Development Team during the Sprint, and past performance of the Development Team. The number of items selected from the Product Backlog for the Sprint is solely up to the Development Team. Only the Development Team can assess what it can accomplish over the upcoming Sprint.

During Sprint Planning the Scrum Team also crafts a Sprint Goal. The Sprint Goal is an objective that will be met within the Sprint through the implementation of the Product Backlog, and it provides guidance to the Development Team on why it is building the Increment.

### Topic Two: How will the chosen work get done?

Having set the Sprint Goal and selected the Product Backlog items for the Sprint, the Development Team decides how it will build this functionality into a “Done” product Increment during the Sprint. The Product Backlog items selected for this Sprint plus the plan for delivering them is called the Sprint Backlog.

The Development Team usually starts by designing the system and the work needed to convert the Product Backlog into a working product Increment. Work may be of varying size, or estimated effort. However, enough work is planned during Sprint Planning for the Development Team to forecast what it believes it can do in the upcoming Sprint. Work planned for the first days of the Sprint by the Development Team is decomposed by the end of this meeting, often to units of one day or less. The Development Team self-organizes to undertake the work in the Sprint Backlog, both during Sprint Planning and as needed throughout the Sprint.

The Product Owner can help to clarify the selected Product Backlog items and make trade-offs. If the Development Team determines it has too much or too little work, it may renegotiate the selected Product Backlog items with the Product Owner. The Development Team may also invite other people to attend to provide technical or domain advice.

By the end of the Sprint Planning, the Development Team should be able to explain to the Product Owner and Scrum Master how it intends to work as a self-organizing team to accomplish the Sprint Goal and create the anticipated Increment.

### Sprint Goal

The Sprint Goal is an objective set for the Sprint that can be met through the implementation of Product Backlog. It provides guidance to the Development Team on why it is building the Increment. It is created during the Sprint Planning meeting. The Sprint Goal gives the Development Team some flexibility regarding the functionality implemented within the Sprint. The selected Product Backlog items deliver one coherent function, which can be the Sprint Goal. The Sprint Goal can be any other coherence that causes the Development Team to work together rather than on separate initiatives.

As the Development Team works, it keeps the Sprint Goal in mind. In order to satisfy the Sprint Goal, it implements functionality and technology. If the work turns out to be different than the Development Team expected, they collaborate with the Product Owner to negotiate the scope of Sprint Backlog within the Sprint.

## Daily Scrum

The Daily Scrum is a 15-minute time-boxed event for the Development Team. The Daily Scrum is held every day of the Sprint. At it, the Development Team plans work for the next 24 hours. This optimizes team collaboration and performance by inspecting the work since the last Daily Scrum and forecasting upcoming Sprint work. The Daily Scrum is held at the same time and place each day to reduce complexity.

The Development Team uses the Daily Scrum to inspect progress toward the Sprint Goal and to inspect how progress is trending toward completing the work in the Sprint Backlog. The Daily Scrum optimizes the probability that the Development Team will meet the Sprint Goal. Every day, the Development Team should understand how it intends to work together as a self- organizing team to accomplish the Sprint Goal and create the anticipated Increment by the end of the Sprint.

The structure of the meeting is set by the Development Team and can be conducted in different ways if it focuses on progress toward the Sprint Goal. Some Development Teams will use questions, some will be more discussion based. Here is an example of what might be used:

- What did I do yesterday that helped the Development Team meet the Sprint Goal?
- What will I do today to help the Development Team meet the Sprint Goal?
- Do I see any impediment that prevents me or the Development Team from meeting the Sprint Goal?

The Development Team or team members often meet immediately after the Daily Scrum for detailed discussions, or to adapt, or replan, the rest of the Sprint’s work.

The Scrum Master ensures that the Development Team has the meeting, but the Development Team is responsible for conducting the Daily Scrum. The Scrum Master teaches the Development Team to keep the Daily Scrum within the 15-minute time-box.

The Daily Scrum is an internal meeting for the Development Team. If others are present, the Scrum Master ensures that they do not disrupt the meeting.

Daily Scrums improve communications, eliminate other meetings, identify impediments to development for removal, highlight and promote quick decision-making, and improve the Development Team’s level of knowledge. This is a key inspect and adapt meeting.

## Sprint Review

A Sprint Review is held at the end of the Sprint to inspect the Increment and adapt the Product Backlog if needed. During the Sprint Review, the Scrum Team and stakeholders collaborate about what was done in the Sprint. Based on that and any changes to the Product Backlog during the Sprint, attendees collaborate on the next things that could be done to optimize value. This is an informal meeting, not a status meeting, and the presentation of the Increment is intended to elicit feedback and foster collaboration.

This is at most a four-hour meeting for one-month Sprints. For shorter Sprints, the event is usually shorter. The Scrum Master ensures that the event takes place and that attendees understand its purpose. The Scrum Master teaches everyone involved to keep it within the time-box.

The Sprint Review includes the following elements:

- Attendees include the Scrum Team and key stakeholders invited by the Product Owner;
- The Product Owner explains what Product Backlog items have been “Done” and what has
  not been “Done”;
- The Development Team discusses what went well during the Sprint, what problems it ran
  into, and how those problems were solved;
- The Development Team demonstrates the work that it has “Done” and answers questions
  about the Increment;
- The Product Owner discusses the Product Backlog as it stands. He or she projects likely
  target and delivery dates based on progress to date (if needed);
- The entire group collaborates on what to do next, so that the Sprint Review provides valuable input to subsequent Sprint Planning;
- Review of how the marketplace or potential use of the product might have changed what is the most valuable thing to do next; and,
- Review of the timeline, budget, potential capabilities, and marketplace for the next anticipated releases of functionality or capability of the product.

The result of the Sprint Review is a revised Product Backlog that defines the probable Product Backlog items for the next Sprint. The Product Backlog may also be adjusted overall to meet new opportunities.

## Sprint Retrospective

The Sprint Retrospective is an opportunity for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint.

The Sprint Retrospective occurs after the Sprint Review and prior to the next Sprint Planning. This is at most a three-hour meeting for one-month Sprints. For shorter Sprints, the event is usually shorter. The Scrum Master ensures that the event takes place and that attendants understand its purpose.

The Scrum Master ensures that the meeting is positive and productive. The Scrum Master teaches all to keep it within the time-box. The Scrum Master participates as a peer team member in the meeting from the accountability over the Scrum process.

The purpose of the Sprint Retrospective is to:

- Inspect how the last Sprint went with regards to people, relationships, process, and tools;
- Identify and order the major items that went well and potential improvements; and,
- Create a plan for implementing improvements to the way the Scrum Team does its work.

The Scrum Master encourages the Scrum Team to improve, within the Scrum process framework, its development process and practices to make it more effective and enjoyable for the next Sprint. During each Sprint Retrospective, the Scrum Team plans ways to increase product quality by improving work processes or adapting the definition of “Done”, if appropriate and not in conflict with product or organizational standards.

By the end of the Sprint Retrospective, the Scrum Team should have identified improvements that it will implement in the next Sprint. Implementing these improvements in the next Sprint is the adaptation to the inspection of the Scrum Team itself. Although improvements may be implemented at any time, the Sprint Retrospective provides a formal opportunity to focus on inspection and adaptation.

# Scrum Artifacts

Scrum’s artifacts represent work or value to provide transparency and opportunities for inspection and adaptation. Artifacts defined by Scrum are specifically designed to maximize transparency of key information so that everybody has the same understanding of the artifact.

## Product Backlog

The Product Backlog is an ordered list of everything that is known to be needed in the product. It is the single source of requirements for any changes to be made to the product. The Product Owner is responsible for the Product Backlog, including its content, availability, and ordering.

A Product Backlog is never complete. The earliest development of it lays out the initially known and best-understood requirements. The Product Backlog evolves as the product and the environment in which it will be used evolves. The Product Backlog is dynamic; it constantly changes to identify what the product needs to be appropriate, competitive, and useful. If a product exists, its Product Backlog also exists.

The Product Backlog lists all features, functions, requirements, enhancements, and fixes that constitute the changes to be made to the product in future releases. Product Backlog items have the attributes of a description, order, estimate, and value. Product Backlog items often include test descriptions that will prove its completeness when “Done.”

As a product is used and gains value, and the marketplace provides feedback, the Product Backlog becomes a larger and more exhaustive list. Requirements never stop changing, so a Product Backlog is a living artifact. Changes in business requirements, market conditions, or technology may cause changes in the Product Backlog.

Multiple Scrum Teams often work together on the same product. One Product Backlog is used to describe the upcoming work on the product. A Product Backlog attribute that groups items may then be employed.

Product Backlog refinement is the act of adding detail, estimates, and order to items in the Product Backlog. This is an ongoing process in which the Product Owner and the Development Team collaborate on the details of Product Backlog items. During Product Backlog refinement, items are reviewed and revised. The Scrum Team decides how and when refinement is done. Refinement usually consumes no more than 10% of the capacity of the Development Team. However, Product Backlog items can be updated at any time by the Product Owner or at the Product Owner’s discretion.

Higher ordered Product Backlog items are usually clearer and more detailed than lower ordered ones. More precise estimates are made based on the greater clarity and increased detail; the lower the order, the less detail. Product Backlog items that will occupy the Development Team for the upcoming Sprint are refined so that any one item can reasonably be “Done” within the Sprint time-box. Product Backlog items that can be “Done” by the Development Team within one Sprint are deemed “Ready” for selection in a Sprint Planning. Product Backlog items usually acquire this degree of transparency through the above described refining activities.

The Development Team is responsible for all estimates. The Product Owner may influence the Development Team by helping it understand and select trade-offs, but the people who will perform the work make the final estimate.

### Monitoring Progress Toward Goals

At any point in time, the total work remaining to reach a goal can be summed. The Product Owner tracks this total work remaining at least every Sprint Review. The Product Owner compares this amount with work remaining at previous Sprint Reviews to assess progress toward completing projected work by the desired time for the goal. This information is made transparent to all stakeholders.

Various projective practices upon trending have been used to forecast progress, like burn- downs, burn-ups, or cumulative flows. These have proven useful. However, these do not replace the importance of empiricism. In complex environments, what will happen is unknown. Only what has already happened may be used for forward-looking decision-making.

## Sprint Backlog

The Sprint Backlog is the set of Product Backlog items selected for the Sprint, plus a plan for delivering the product Increment and realizing the Sprint Goal. The Sprint Backlog is a forecast by the Development Team about what functionality will be in the next Increment and the work needed to deliver that functionality into a “Done” Increment.

The Sprint Backlog makes visible all the work that the Development Team identifies as necessary to meet the Sprint Goal. To ensure continuous improvement, it includes at least one high priority process improvement identified in the previous Retrospective meeting.

The Sprint Backlog is a plan with enough detail that changes in progress can be understood in the Daily Scrum. The Development Team modifies the Sprint Backlog throughout the Sprint, and the Sprint Backlog emerges during the Sprint. This emergence occurs as the Development Team
works through the plan and learns more about the work needed to achieve the Sprint Goal.

As new work is required, the Development Team adds it to the Sprint Backlog. As work is performed or completed, the estimated remaining work is updated. When elements of the plan are deemed unnecessary, they are removed. Only the Development Team can change its Sprint Backlog during a Sprint. The Sprint Backlog is a highly visible, real-time picture of the work that the Development Team plans to accomplish during the Sprint, and it belongs solely to the Development Team.

### Monitoring Sprint Progress

At any point in time in a Sprint, the total work remaining in the Sprint Backlog can be summed. The Development Team tracks this total work remaining at least for every Daily Scrum to project the likelihood of achieving the Sprint Goal. By tracking the remaining work throughout the Sprint, the Development Team can manage its progress.

## Increment

The Increment is the sum of all the Product Backlog items completed during a Sprint and the value of the increments of all previous Sprints. At the end of a Sprint, the new Increment must be “Done,” which means it must be in useable condition and meet the Scrum Team’s definition of “Done.” An increment is a body of inspectable, done work that supports empiricism at the end of the Sprint. The increment is a step toward a vision or goal. The increment must be in useable condition regardless of whether the Product Owner decides to release it.

# Artifact Transparency

Scrum relies on transparency. Decisions to optimize value and control risk are made based on the perceived state of the artifacts. To the extent that transparency is complete, these decisions have a sound basis. To the extent that the artifacts are incompletely transparent, these decisions can be flawed, value may diminish and risk may increase.

The Scrum Master must work with the Product Owner, Development Team, and other involved parties to understand if the artifacts are completely transparent. There are practices for coping with incomplete transparency; the Scrum Master must help everyone apply the most appropriate practices in the absence of complete transparency. A Scrum Master can detect incomplete transparency by inspecting the artifacts, sensing patterns, listening closely to what is being said, and detecting differences between expected and real results.

The Scrum Master’s job is to work with the Scrum Team and the organization to increase the transparency of the artifacts. This work usually involves learning, convincing, and change. Transparency doesn’t occur overnight, but is a path.

## Definition of “Done”

When a Product Backlog item or an Increment is described as “Done”, everyone must understand what “Done” means. Although this may vary significantly per Scrum Team, members must have a shared understanding of what it means for work to be complete, to ensure transparency. This is the definition of “Done” for the Scrum Team and is used to assess when work is complete on the product Increment.

The same definition guides the Development Team in knowing how many Product Backlog items it can select during a Sprint Planning. The purpose of each Sprint is to deliver Increments of potentially releasable functionality that adhere to the Scrum Team’s current definition of “Done.”

Development Teams deliver an Increment of product functionality every Sprint. This Increment is useable, so a Product Owner may choose to immediately release it. If the definition of "Done" for an increment is part of the conventions, standards or guidelines of the development organization, all Scrum Teams must follow it as a minimum.

If "Done" for an increment is not a convention of the development organization, the Development Team of the Scrum Team must define a definition of “Done” appropriate for the product. If there are multiple Scrum Teams working on the system or product release, the Development Teams on all the Scrum Teams must mutually define the definition of “Done.”

Each Increment is additive to all prior Increments and thoroughly tested, ensuring that all Increments work together.

As Scrum Teams mature, it is expected that their definitions of “Done” will expand to include more stringent criteria for higher quality. New definitions, as used, may uncover work to be done in previously “Done” increments. Any one product or system should have a definition of “Done” that is a standard for any work done on it.

# End Note

Scrum is free and offered in this Guide.
Scrum’s roles, events, artifacts, and rules are immutable and although implementing only parts of Scrum is possible, the result is not Scrum.
Scrum exists only in its entirety and functions well as a container for other techniques, methodologies, and practices.

# Copyright

©2017 Ken Schwaber and Jeff Sutherland. Offered for license under the Attribution Share-Alike license of Creative Commons, accessible at http://creativecommons.org/licenses/by-sa/4.0/legalcode and also described in summary form at http://creativecommons.org/licenses/by-sa/4.0/. By utilizing this Scrum Guide, you acknowledge and agree that you have read and agree to be bound by the terms of the Attribution Share-Alike license of Creative Commons.

`,oo=`# Scrum Definition

Scrum is a lightweight framework[Framework,ExtendScrum] that helps people, teams and organizations[Organization] generate value through adaptive[ScrumPillars,Adaptation] solutions for complex problems.

In a nutshell, Scrum requires a Scrum Master[ScrumTeam,ScrumMaster] to foster an environment where:

1. A Product Owner[ScrumTeam,ProductOwner] orders the work[ScrumArtifacts,ProductBacklog,ProductBacklogItem] for a complex problem into a Product Backlog[ScrumArtifacts,ProductBacklog].
2. The Scrum Team[ScrumTeam] turns a selection of the work[SprintBacklogItem,ScrumArtifacts,ProductBacklog,ProductBacklogItem] into an Increment[ScrumArtifacts,Increment] of value during a Sprint[ScumEvents,Sprint].
3. The Scrum Team[ScrumTeam] and its stakeholders[Stakeholder] inspect[ScrumPillars,Inspection] the results[Increment] and adjust[ScrumPillars,Adaptation] for the next Sprint[ScumEvents,Sprint].[ScrumEvent,SprintReview]
4. Repeat[Cadence]

Scrum is simple.
Try it[Scrum] as is and determine if its philosophy, theory, and structure help to achieve goals[Commitment,ProductGoal,SprintGoal] and create value.
The Scrum framework[Framework] is purposefully incomplete, only defining the parts required to implement Scrum theory.[ExtendScrum]
Scrum is built upon by the collective intelligence of the people using it.
Rather than provide people with detailed instructions, the rules of Scrum guide their relationships[ScrumTeam] and interactions[ScumEvent].

Various processes, techniques and methods can be employed within the framework[Framework].
Scrum wraps around existing practices or renders them unnecessary[Lean,WasteReduction].
Scrum makes visible[ScrumPillars,Transparency] the relative efficacy of current management[Management], environment, and work techniques, so that improvements[ScrumPillars,Adaptation] can be made.

# Scrum Theory

Scrum is founded on empiricism[Empiricism] and lean thinking.
Empiricism[Empiricism] asserts that knowledge comes from experience and making decisions based on what is observed[ScrumPillars,Inspection].
Lean thinking reduces waste[Lean,WasteReduction] and focuses[ScrumValues,Focus] on the essentials.

Scrum employs an iterative[Cadence], incremental[Increment] approach to optimize predictability and to control risk.
Scrum engages groups of people[ScrumTeam] who collectively have all the skills and expertise to do the work and share or acquire such skills as needed[Learn].[SelfManagement]

Scrum combines four formal events[ScrumEvents] for inspection[ScrumPillars,Inspection] and adaptation[ScrumPillars,Adaptation], within a containing event[ScrumEvents], the Sprint[ScrumEvents,Sprint].
These events[ScrumEvents] work because they[ScrumEvents] implement the empirical[Empiricism] Scrum pillars[ScrumPillars] of transparency[ScrumPillars,Transparency], inspection[ScrumPillars,Inspection], and adaptation[ScrumPillars,Adaptation].

## Transparency[ScrumPillars,Transparency]

The emergent[Emergence] process and work must be visible[ScrumPillars,Transparency] to those performing the work[ScrumTeam,Developers] as well as those receiving the work[Stakeholder].
With Scrum, important decisions are based on the perceived state of its three formal artifacts[ScrumArtifacts].
Artifacts[ScrumArtifacts] that have low transparency[ScrumPillars,Transparency] can lead to decisions that diminish value and increase risk.
Transparency[ScrumPillars,Transparency] enables inspection[ScrumPillars,Inspection].
Inspection[ScrumPillars,Inspection] without transparency[ScrumPillars,Transparency] is misleading and wasteful.

## Inspection[ScrumPillars,Inspection]

The Scrum artifacts[ScrumArtifacts] and the progress toward agreed goals[Commitment,ProductGoal,SprintGoal] must be inspected[ScrumPillars,Inspection] frequently and diligently to detect potentially undesirable variances or problems.
To help with inspection[ScrumPillars,Inspection], Scrum provides cadence[Cadence] in the form of its five events[ScrumEvents].

Inspection[ScrumPillars,Inspection] enables adaptation[ScrumPillars,Adaptation].
Inspection[ScrumPillars,Inspection] without adaptation[ScrumPillars,Adaptation] is considered pointless[ScrumValues,Courage].
Scrum events[ScrumEvents] are designed to provoke change[ScrumPillars,Adaptation].

## Adaptation[ScrumPillars,Adaptation]

If any aspects of a process deviate outside acceptable limits or if the resulting product[Product] is unacceptable[ScrumArtifacts,Increment,Commitment,DefinitionOfDone], the process being applied[ScrumEvents] or the materials being produced[ScrumArtifacts] must be adjusted[ScrumPillars,Adaptation].
The adjustment[ScrumPillars,Adaptation] must be made as soon as possible to minimize further deviation.

Adaptation[ScrumPillars,Adaptation] becomes more difficult when the people involved are not empowered[Management] or self-managing[SelfManagement].
A Scrum Team[ScrumTeam] is expected to adapt[ScrumPillars,Adaptation] the moment it learns[Learn] anything new through inspection[ScrumPillars,Inspection].

# Scrum Values[ScrumValues]

Successful use of Scrum depends on people becoming more proficient in living five values[ScrumValues]:
**Commitment, Focus, Openness, Respect, and Courage**[ScrumValues]

The Scrum Team[ScrumTeam] commits[ScrumValues,Commitment] to achieving its goals[Commitment,ProductGoal,SprintGoal] and to supporting each other.
Their primary focus[ScrumValues,Focus] is on the work of the Sprint[ScumEvents,Sprint] to make the best possible progress toward these goals[Commitment,ProductGoal,SprintGoal].
The Scrum Team[ScrumTeam] and its stakeholders[Stakeholder] are open[ScrumValues,Openness] about the work and the challenges.
Scrum Team[ScrumTeam] members respect[ScrumValues,Respect] each other to be capable, independent people, and are respected[ScrumValues,Respect] as such by the people with whom they work.
The Scrum Team[ScrumTeam] members have the courage[ScrumValues,Courage] to do the right thing, to work on tough problems.

These values[ScrumValues] give direction to the Scrum Team[ScrumTeam] with regard to their work, actions, and behavior.
The decisions that are made, the steps taken, and the way Scrum is used should reinforce these values[ScrumValues], not diminish or undermine them[ScrumValues].[Management]
The Scrum Team[ScrumTeam] members learn[Learn] and explore the values[ScrumValues] as they[ScrumTeam] work with the Scrum events[ScrumEvents] and artifacts[ScrumArtifacts].
When these values[ScrumValues] are embodied by the Scrum Team[ScrumTeam] and the people they[ExternalPeople] work with, the empirical[Empiricism] Scrum pillars of transparency[ScrumPillars,Transparency], inspection[ScrumPillars,Inspection], and adaptation[ScrumPillars,Adaptation] come to life building trust.

# Scrum Team[ScrumTeam]

The fundamental unit of Scrum is a small team[ScrumTeam] of people, a Scrum Team[ScrumTeam].
The Scrum Team[ScrumTeam] consists of one Scrum Master[ScrumTeam,ScrumMaster], one Product Owner[ScrumTeam,ProductOwner], and Developers[ScrumTeam,Developers].
Within a Scrum Team[ScrumTeam], there are no sub-teams or hierarchies.
It[ScrumTeam] is a cohesive unit of professionals focused[ScrumValues,Focus] on one objective at a time, the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal].

Scrum Teams[ScrumTeam] are cross-functional[CrossFunctional], meaning the members have all the skills[CrossFunctional] necessary to create value each Sprint[ScumEvents,Sprint].
They[ScrumTeam] are also self-managing[SelfManagement], meaning they[ScrumTeam] internally decide who does what, when, and how.

The Scrum Team[ScrumTeam] is small enough to remain nimble and large enough to complete significant work within a Sprint[ScumEvents,Sprint], typically 10 or fewer people.
In general, we have found that smaller teams[ScrumTeam] communicate better and are more productive.
If Scrum Teams[ScrumTeam] become too large, they[ScrumTeam] should consider reorganizing into multiple cohesive Scrum Teams[ScrumTeams,ScaledScrum], each focused[ScrumValues,Focus] on the same product.
Therefore, they[ScrumTeam] should share the same Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal], Product Backlog[ScrumArtifacts,ProductBacklog], and Product Owner[ScrumTeam,ProductOwner].

The Scrum Team[ScrumTeam] is responsible[Responsible] for all product-related activities from stakeholder[Stakeholder] collaboration, verification[Learn], maintenance, operation, experimentation, research and development, and anything else that might be required.[CrossFunctional]
They[ScrumTeam] are structured and empowered[Management] by the organization[Organization] to manage[Management] their[ScrumTeam] own work.
Working in Sprints[ScumEvents,Sprint] at a sustainable pace improves[ScrumPillars,Adaptation] the Scrum Team’s[ScrumTeam] focus[ScrumValues,Focus] and consistency[ReduceComplexity].

The entire Scrum Team[ScrumTeam] is accountable[ScrumTeam,Accountable] for creating a valuable, useful Increment[ScrumArtifacts] every Sprint[ScumEvents,Sprint].
Scrum defines three specific accountabilities[Accountable] within the Scrum Team[ScrumTeam]: the Developers[ScrumTeam,Developers], the Product Owner[ScrumTeam,ProductOwner], and the Scrum Master[ScrumTeam,ScrumMaster].

## Developers[ScrumTeam,Developers]

Developers[ScrumTeam,Developers] are the people in the Scrum Team[ScrumTeam] that are committed[ScrumValues,Commitment] to creating any aspect of a usable Increment[ScrumArtifacts] each Sprint[ScumEvents,Sprint].

The specific skills needed by the Developers[ScrumTeam,Developers] are often broad and will vary with the domain of work. However, the Developers[ScrumTeam,Developers] are always accountable[ScrumTeam,Developers,Accountable] for:

- Creating a plan for the Sprint[ScumEvents,Sprint], the Sprint Backlog;[ScrumTeam,Developers,Accountable]
- Instilling quality by adhering to a Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone];[ScrumTeam,Developers,Accountable]
- Adapting[ScrumPillars,Adaptation] their plan each day toward the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal]; and,[ScrumTeam,Developers,Accountable]
- Holding each other accountable as professionals.[ScrumTeam,Developers,Accountable]

## Product Owner[ScrumTeam,ProductOwner]

The Product Owner[ScrumTeam,ProductOwner] is accountable[ScrumTeam,ProductOwner,Accountable] for maximizing the value of the product[Product] resulting from the work of the Scrum Team[ScrumTeam].
How this is done may vary widely across organizations[Organization], Scrum Teams[ScrumTeam], and individuals.

The Product Owner[ScrumTeam,ProductOwner] is also accountable[ScrumTeam,ProductOwner,Accountable] for effective Product Backlog[ScrumArtifacts,ProductBacklog] management, which includes:

- Developing and explicitly communicating the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal];[ScrumTeam,ProductOwner,Accountable]
- Creating and clearly communicating Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem];[ScrumTeam,ProductOwner,Accountable]
- Ordering Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem]; and,[ScrumTeam,ProductOwner,Accountable]
- Ensuring that the Product Backlog[ScrumArtifacts,ProductBacklog] is transparent[ScrumPillars,Transparency], visible[ScrumPillars,Transparency] and understood.[ScrumTeam,ProductOwner,Accountable]

The Product Owner[ScrumTeam,ProductOwner] may do the above work or may delegate the responsibility[ProductOwner,Responsible] to others.
Regardless, the Product Owner[ScrumTeam,ProductOwner] remains accountable.[ScrumTeam,ProductOwner,Accountable]

For Product Owners[ScrumTeam,ProductOwner] to succeed, the entire organization[Organization] must respect[ScrumValues,Respect] their decisions.[Management]
These decisions are visible[ScrumPillars,Transparency] in the content and ordering of the Product Backlog[ScrumArtifacts,ProductBacklog], and through the inspectable[ScrumPillars,Inspection] Increment[ScrumArtifacts] at the Sprint Review[ScrumEvents,SprintReview].[ScrumTeam,ProductOwner]

The Product Owner[ScrumTeam,ProductOwner] is one person, not a committee.
The Product Owner[ScrumTeam,ProductOwner] may represent the needs of many stakeholders[Stakeholder] in the Product Backlog[ScrumArtifacts,ProductBacklog].
Those wanting to change the Product Backlog[ScrumArtifacts,ProductBacklog] can do so by trying to convince the Product Owner[ScrumTeam,ProductOwner].

## Scrum Master[ScrumTeam,ScrumMaster]

The Scrum Master[ScrumTeam,ScrumMaster] is accountable[ScrumTeam,ScrumMaster,Accountable] for establishing Scrum as defined in the Scrum Guide.
They[ScrumTeam,ScrumMaster] do this by helping everyone understand Scrum theory and practice, both within the Scrum Team[ScrumTeam] and the organization[Organization].

The Scrum Master[ScrumTeam,ScrumMaster] is accountable[ScrumTeam,ScrumMaster,Accountable] for the Scrum Team’s[ScrumTeam] effectiveness.
They[ScrumTeam,ScrumMaster] do this by enabling the Scrum Team[ScrumTeam] to improve[ScrumPillars,Adaptation] its practices, within the Scrum framework[Framework].

Scrum Masters[ScrumTeam,ScrumMaster] are true leaders who serve the Scrum Team[ScrumTeam] and the larger organization[Organization].

The Scrum Master[ScrumTeam,ScrumMaster] serves[ScrumTeam,ScrumMaster,Serve] the Scrum Team[ScrumTeam] in several ways, including:

- Coaching the team members[ScrumTeam] in self-management[SelfManagement] and cross-functionality[CrossFunctional];[ScrumTeam,ScrumMaster,Serve]
- Helping the Scrum Team[ScrumTeam] focus[ScrumValues,Focus] on creating high-value Increments[ScrumTeam,ScrumMaster,Serve][ScrumArtifacts] that meet the Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone];
- Causing the removal of impediments[Impediments] to the Scrum Team’s[ScrumTeam] progress; and,[ScrumTeam,ScrumMaster,Serve]
- Ensuring that all Scrum events[ScrumEvents] take place and are positive, productive, and kept within the timebox[Timebox].[ScrumTeam,ScrumMaster,Serve]

The Scrum Master[ScrumTeam,ScrumMaster] serves[ScrumTeam,ScrumMaster,Serve] the Product Owner[ScrumTeam,ProductOwner] in several ways, including:

- Helping find techniques for effective Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal] definition and Product Backlog[ScrumArtifacts,ProductBacklog] management;[ScrumTeam,ScrumMaster,Serve]
- Helping the Scrum Team[ScrumTeam] understand the need for clear and concise Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem];[ScrumTeam,ScrumMaster,Serve]
- Helping establish empirical[Empiricism] product[Product] planning for a complex environment[Uncertainty]; and,[ScrumTeam,ScrumMaster,Serve]
- Facilitating stakeholder[Stakeholder] collaboration as requested or needed.[ScrumTeam,ScrumMaster,Serve]

The Scrum Master[ScrumTeam,ScrumMaster] serves[ScrumTeam,ScrumMaster,Serve] the organization[Organization] in several ways, including:

- Leading, training, and coaching the organization[Organization] in its Scrum adoption;[ScrumTeam,ScrumMaster,Serve]
- Planning and advising Scrum implementations within the organization[Organization];[ScrumTeam,ScrumMaster,Serve]
- Helping employees and stakeholders[Stakeholder] understand and enact an empirical[Empiricism] approach for complex work; and,[ScrumTeam,ScrumMaster,Serve]
- Removing barriers[Impediments] between stakeholders[Stakeholder] and Scrum Teams[ScrumTeam].[ScrumTeam,ScrumMaster,Serve]

# Scrum Events[ScrumEvents]

The Sprint[ScumEvents,Sprint] is a container for all other events[ScrumEvents].
Each event[ScrumEvents] in Scrum is a formal opportunity to inspect[ScrumPillars,Inspection] and adapt[ScrumPillars,Adaptation] Scrum artifacts[ScrumArtifacts].
These events[ScrumEvents] are specifically designed to enable the transparency[ScrumPillars,Transparency] required.
Failure to operate any events[ScrumEvents] as prescribed results in lost opportunities to inspect[ScrumPillars,Inspection] and adapt[ScrumPillars,Adaptation].
Events[ScrumEvents] are used in Scrum to create regularity[Cadence] and to minimize the need for meetings not defined in Scrum[ExtendScrum,OtherMeetings].
Optimally, all events[ScrumEvents] are held at the same time and place to reduce complexity[ReduceComplexity].

## The Sprint[ScumEvents,Sprint]

Sprints[ScumEvents,Sprint] are the heartbeat[Cadence] of Scrum, where ideas are turned into value.

They[ScumEvents,Sprint] are fixed length[Timebox] events[ScumEvents,Sprint] of one month[Timebox] or less to create consistency[ReduceComplexity].
A new Sprint[ScumEvents,Sprint] starts immediately after the conclusion of the previous Sprint[ScrumEvents,order,ScumEvents,Sprint].

All the work[PBI] necessary to achieve the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal], including Sprint Planning[ScumEvents,SprintPlanning], Daily Scrums[ScumEvents,DailyScrum], Sprint Review[ScrumEvents,SprintReview], and Sprint Retrospective[ScrumEvents,SprintRetrospective], happen within Sprints[ScumEvents,Sprint].

During the Sprint[ScumEvents,Sprint]:

- No changes[ScrumPillars,Adaptation] are made that would endanger the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal];
- Quality does not decrease;
- The Product Backlog[ScrumArtifacts,ProductBacklog] is refined[ScrumPillars,Adaptation] as needed; and,
- Scope may be clarified and renegotiated[ScrumPillars,Adaptation] with the Product Owner[ScrumTeam,ProductOwner] as more is learned[Learn].

Sprints[ScumEvents,Sprint] enable predictability[Forecast] by ensuring inspection[ScrumPillars,Inspection] and adaptation[ScrumPillars,Adaptation] of progress toward a Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal] at least every calendar month[Timebox].
When a Sprint’s[ScumEvents,Sprint] horizon[Timebox] is too long[Timebox] the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] may become invalid, complexity may rise[ReduceComplexity], and risk may[Uncertainty] increase.
Shorter[Timebox] Sprints[ScumEvents,Sprint] can be employed to generate more learning[Learn] cycles[Cadence] and limit risk of cost and effort to a smaller time frame[Timebox].
Each Sprint[ScumEvents,Sprint] may be considered a short project.

Various practices exist to forecast[Forecast] progress, like burn-downs[ExtendScrum,BurnDown], burn-ups[ExtendScrum,BurnUp], or cumulative flows[ExtendScrum].
While proven useful, these do not replace the importance of empiricism[Empiricism].
In complex environments, what will happen is unknown[Uncertainty].
Only what has already happened may be used for forward-looking[Forecast] decision making.

A Sprint[ScumEvents,Sprint] could be cancelled if the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] becomes obsolete.
Only the Product Owner[ScrumTeam,ProductOwner] has the authority[ProductOwner,Responsible] to cancel the Sprint[ScumEvents,Sprint].

## Sprint Planning[ScumEvents,SprintPlanning]

Sprint Planning[ScumEvents,SprintPlanning] initiates[ScrumEvents,Order] the Sprint[ScumEvents,Sprint] by laying out[transparency] the work to be performed for the Sprint[ScumEvents,Sprint].
This resulting plan[SprintBacklog] is created by the collaborative work of the entire Scrum Team[ScrumTeam,ScumEvents,SprintPlanning,Attendees].

The Product Owner[ScrumTeam,ProductOwner] ensures[ProductOwner,Responsible] that attendees[ScumEvents,SprintPlanning,Attendees] are prepared to discuss the most important Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] and how they[ScrumArtifacts,ProductBacklog,ProductBacklogItem] map to the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal].
The Scrum Team[ScrumTeam] may also invite other people to attend[ScumEvents,SprintPlanning,Attendees] Sprint Planning[ScumEvents,SprintPlanning] to provide advice.

Sprint Planning[ScumEvents,SprintPlanning] addresses the following topics:

**Topic One: Why is this Sprint[ScumEvents,Sprint] valuable?**

The Product Owner[ScrumTeam,ProductOwner] proposes how the product[Product] could increase its value and utility in the current Sprint[ScumEvents,Sprint].
The whole Scrum Team[ScrumTeam] then collaborates to define a Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] that communicates why the Sprint[ScumEvents,Sprint] is valuable to stakeholders[Stakeholder].
The Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] must be finalized prior to the end of Sprint Planning[ScumEvents,SprintPlanning].

**Topic Two: What can be Done this Sprint?**

Through discussion with the Product Owner[ScrumTeam,ProductOwner], the Developers[ScrumTeam,Developers] select items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] from the Product Backlog[ScrumArtifacts,ProductBacklog] to include in the current Sprint[ScumEvents,Sprint].
The Scrum Team[ScrumTeam] may refine[ProductBacklogRefinement] these items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] during this process, which increases understanding and confidence.

Selecting how much can be completed within a Sprint[ScumEvents,Sprint] may be challenging.[Forecast]
However, the more the Developers[ScrumTeam,Developers] know about their[ScrumTeam,Developers] past performance, their[ScrumTeam,Developers] upcoming capacity[Capacity], and their[ScrumTeam,Developers] Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone], the more confident they[ScrumTeam,Developers] will be in their Sprint[ScumEvents,Sprint] forecasts[Forecast].

**Topic Three: How will the chosen work get done?**

For each selected Product Backlog item[ScrumArtifacts,ProductBacklog,ProductBacklogItem], the Developers[ScrumTeam,Developers] plan the work necessary to create an Increment[ScrumArtifacts] that meets the Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone].
This is often done by decomposing Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] into smaller work items[WorkItem] of one day[Timebox] or less.
How this is done is at the sole discretion of the Developers[ScrumTeam,Developers].
No one else tells[NotTheSameAsGivingAdvice] them[ScrumTeam,Developers] how to turn Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] into Increments[ScrumArtifacts] of value.

The Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal], the Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] selected for the Sprint[ScumEvents,Sprint], plus the plan for delivering[ScrumArtifacts,Increment] them are together referred to as the Sprint Backlog.

Sprint Planning[ScumEvents,SprintPlanning] is timeboxed[Timebox] to a maximum of eight hours[Timebox] for a one-month Sprint[ScumEvents,Sprint].
For shorter Sprints[ScumEvents,Sprint], the event is usually shorter.

## Daily Scrum[ScumEvents,DailyScrum]

The purpose of the Daily Scrum[ScumEvents,DailyScrum] is to inspect[ScrumPillars,Inspection] progress toward the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] and adapt[ScrumPillars,Adaptation] the Sprint Backlog as necessary, adjusting[ScrumPillars,Adaptation] the upcoming planned work.

The Daily Scrum[ScumEvents,DailyScrum] is a 15-minute[Timebox] event for the Developers[ScrumTeam,Developers,ScumEvents,DailyScrum,Attendees] of the Scrum Team[ScrumTeam].
To reduce complexity[ReduceComplexity], it is held at the same time and place every working day[ScrumEvents,order] of the Sprint[ScumEvents,Sprint].
If the Product Owner[ScrumTeam,ProductOwner] or Scrum Master[ScrumTeam,ScrumMaster] are actively working on items[ScrumArtifacts,ProductBacklog,ProductBacklogItem,WorkItem] in the Sprint Backlog, they[ScrumTeam,ProductOwner,ScrumTeam,ScrumMaster] participate[ScumEvents,DailyScrum,Attendees] as Developers[ScrumTeam,Developers].

The Developers[ScrumTeam,Developers] want, as long as their Daily Scrum[ScumEvents,DailyScrum] focuses on progress toward the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] and produces an actionable plan for the next day of work.
This creates focus[ScrumValue,Focus] and improves[ScrumPillars,Adaptation] self-management[SelfManagement].

Daily Scrums[ScumEvents,DailyScrum] improve[ScrumPillars,Adaptation] communications, identify impediments[Impediments], promote quick decision-making, and consequently eliminate the need for other meetings[ExtendScrum,OtherMeetings].

The Daily Scrum[ScumEvents,DailyScrum] is not the only time Developers[ScrumTeam,Developers] are allowed to adjust[ScrumPillars,Adaptation] their plan.
They[ScrumTeam,Developers] often meet throughout the day for more detailed discussions about adapting[ScrumPillars,Adaptation] or re-planning the rest of the Sprint’s[ScumEvents,Sprint] work.

## Sprint Review[ScrumEvents,SprintReview]

The purpose of the Sprint Review[ScrumEvents,SprintReview] is to inspect[ScrumPillars,Inspection] the outcome of the Sprint[ScumEvents,Sprint] and determine future adaptations[ScrumPillars,Adaptation].
The Scrum Team[ScrumTeam,ScumEvents,SprintReview,Attendees] presents the results of their work to key stakeholders[ScumEvents,SprintReview,Attendees,Stakeholder] and progress toward the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal] is discussed.

During the event[ScrumEvents,SprintReview], the Scrum Team[ScrumTeam] and stakeholders[Stakeholder] review[ScrumEvents,SprintReview] what was accomplished[Forecast] in the Sprint[ScumEvents,Sprint] and what has changed[ScrumPillars,Adaptation] in their environment.
Based on this information, attendees[ScumEvents,SprintReview,Attendees] collaborate on what to do next.
The Product Backlog[ScrumArtifacts,ProductBacklog] may also be adjusted[ScrumPillars,Adaptation] to meet new opportunities.
The Sprint Review[ScrumEvents,SprintReview] is a working session and the Scrum Team[ScrumTeam] should avoid limiting it to a presentation.

The Sprint Review[ScrumEvents,SprintReview] is the second to last[ScrumEvents,order] event of the Sprint[ScumEvents,Sprint] and is timeboxed[Timebox] to a maximum of four hours[Timebox] for a one-month Sprint.
For shorter Sprints[ScumEvents,Sprint], the event is usually shorter.

## Sprint Retrospective[ScrumEvents,SprintRetrospective]

The purpose of the Sprint Retrospective[ScrumEvents,SprintRetrospective] is to plan ways to increase quality and effectiveness.

The Scrum Team[ScrumTeam,ScumEvents,SprintRetrospective,Attendees] inspects[ScrumPillars,Inspection] how the last Sprint[ScumEvents,Sprint] went with regards to individuals, interactions, processes, tools, and their Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone].
Inspected[ScrumPillars,Inspection] elements often vary with the domain of work. Assumptions that led them astray are identified and their origins explored.
The Scrum Team[ScrumTeam] discusses what went well during the Sprint[ScumEvents,Sprint], what problems[Impediments] it encountered, and how those problems were (or were not) solved[ScrumValues,Courage].

The Scrum Team[ScrumTeam] identifies[ScrumPillars,Inspection] the most helpful changes to improve[ScrumPillars,Adaptation] its effectiveness.
The most impactful improvements[ScrumPillars,Adaptation] are addressed as soon as possible.
They[ScrumPillars,Adaptation] may even be added to the Sprint Backlog for the next Sprint[ScumEvents,Sprint].

The Sprint Retrospective[ScrumEvents,SprintRetrospective] concludes[ScrumEvents,Order] the Sprint[ScumEvents,Sprint].
It[ScrumEvents,SprintRetrospective] is timeboxed[Timebox] to a maximum of three hours[Timebox] for a onemonth Sprint[ScumEvents,Sprint].
For shorter Sprints[ScumEvents,Sprint], the event[ScrumEvents,SprintRetrospective] is usually shorter.[Timebox]

# Scrum Artifacts[ScrumArtifacts]

Scrum’s artifacts[ScrumArtifacts] represent work or value.
They[ScrumArtifacts] are designed to maximize transparency[ScrumPillars,Transparency] of key information.
Thus, everyone inspecting[ScrumPillars,Inspection] them[ScrumArtifacts] has the same basis for adaptation[ScrumPillars,Adaptation].

Each artifact[ScrumArtifacts] contains a commitment[ScrumValues,Commitment] to ensure it provides information that enhances transparency[ScrumPillars,Transparency] and focus[ScrumValues,Focus] against which progress can be measured:[Forecast]

- For the Product Backlog[ScrumArtifacts,ProductBacklog] it is the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal].
- For the Sprint Backlog it is the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].
- For the Increment[ScrumArtifacts] it is the Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone].

These commitments[ScrumValues,Commitment,ProductGoal,SprintGoal,ScrumArtifacts,Increment,DefinitionOfDone] exist to reinforce empiricism[Empiricism] and the Scrum values[ScrumValues] for the Scrum Team and their stakeholders[Stakeholder].

## Product Backlog[ScrumArtifacts,ProductBacklog]

The Product Backlog[ScrumArtifacts,ProductBacklog] is an emergent[Emergence], ordered list of what is needed to improve[ScrumPillars,Adaptation] the product.
It[ScrumArtifacts,ProductBacklog] is the single source of work undertaken by the Scrum Team[ScrumTeam].

Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] that can be Done by the Scrum Team[ScrumTeam] within one Sprint[ScumEvents,Sprint] are deemed ready[Ready] for selection in a Sprint Planning[ScumEvents,SprintPlanning] event.
They[ScrumArtifacts,ProductBacklog,ProductBacklogItem] usually acquire this degree of transparency[ScrumPillars,Transparency] after refining[ScrumPillars,Adaptation] activities.
Product Backlog[ScrumArtifacts,ProductBacklog] refinement[ProductBacklogRefinement] is the act of breaking down and further defining Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] into smaller more precise items[ScrumArtifacts,ProductBacklog,ProductBacklogItem].
This[ProductBacklogRefinement] is an ongoing activity to add details, such as a description, order, and size.
Attributes often vary with the domain of work.

The Developers[ScrumTeam,Developers] who will be doing the work are responsible[ScrumTeam,Developers,Responsible] for the sizing.
The Product Owner[ScrumTeam,ProductOwner] may influence the Developers[ScrumTeam,Developers] by helping them[ScrumTeam,Developers] understand and select trade-offs.

### Commitment[ScrumValues,Commitment]: Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal]

The Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal] describes a future state of the product[Product] which can serve as a target for the Scrum Team[ScrumTeam] to plan against.
The Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal] is in the Product Backlog[ScrumArtifacts,ProductBacklog].
The rest of the Product Backlog[ScrumArtifacts,ProductBacklog] emerges[Emergence] to define “what” will fulfill the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal].

> A product[Product] is a vehicle to deliver value.
> It[Product] has a clear boundary, known stakeholders[Stakeholder], well-defined users or customers.
> A product[Product] could be a service, a physical product[Product], or something more abstract.

The Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal] is the long-term objective for the Scrum Team[ScrumTeam].
They[ScrumTeam] must fulfill (or abandon) one objective[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal] before taking on the next[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal].

## Sprint Backlog

The Sprint Backlog is composed of the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] (why), the set of Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] selected for the Sprint[ScumEvents,Sprint] (what), as well as an actionable plan[WorkItem] for delivering the Increment[ScrumArtifacts,Increment] (how).

The Sprint Backlog is a plan by and for the Developers[ScrumTeam,Developers].
It is a highly visible[ScrumPillars,Transparency], real-time picture of the work that the Developers[ScrumTeam,Developers] plan to accomplish[Forecast] during the Sprint[ScumEvents,Sprint] in order to achieve the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].
Consequently, the Sprint Backlog is updated throughout the Sprint as more is learned[Learn].
It should have enough detail that they[ScrumTeam,Developers] can inspect[ScrumPillars,Inspection] their progress in the Daily Scrum[ScumEvents,DailyScrum].

### Commitment[ScrumValues,Commitment]: Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal]

The Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] is the single objective for the Sprint[ScumEvents,Sprint].
Although the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] is a commitment[ScrumValues,Commitment] by the Developers[ScrumTeam,Developers], it provides flexibility in terms of the exact work needed to achieve it.
The Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] also creates coherence[Coherence] and focus[ScrumValues,Focus], encouraging the Scrum Team[ScrumTeam] to work together rather than on separate initiatives.

The Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] is created during the Sprint Planning[ScumEvents,SprintPlanning] event and then added to the Sprint Backlog.
As the Developers[ScrumTeam,Developers] work during the Sprint[ScumEvents,Sprint], they[ScrumTeam,Developers] keep the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] in mind.
If the work turns out to be different than they[ScrumTeam,Developers] expected, they[ScrumTeam,Developers] collaborate with the Product Owner[ScrumTeam,ProductOwner] to negotiate[ScrumPillars,Adaptation] the scope of the Sprint Backlog within the Sprint[ScumEvents,Sprint] without affecting the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].

## Increment[ScrumArtifacts]

An Increment[ScrumArtifacts] is a concrete stepping stone toward the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal].
Each Increment[ScrumArtifacts] is additive to all prior Increments[ScrumArtifacts] and thoroughly verified, ensuring that all Increments[ScrumArtifacts] work together.
In order to provide value, the Increment[ScrumArtifacts] must be usable.

Multiple Increments[ScrumArtifacts] may be created within a Sprint[ScumEvents,Sprint].
The sum of the Increments[ScrumArtifacts] is presented at the Sprint Review[ScrumEvents,SprintReview] thus supporting empiricism[Empiricism].
However, an Increment[ScrumArtifacts] may be delivered to stakeholders[Stakeholder] prior to the end of the Sprint.
The Sprint Review[ScrumEvents,SprintReview] should never be considered a gate to releasing[ScrumArtifacts,Increment] value.

Work cannot be considered part of an Increment[ScrumArtifacts] unless it meets the Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone].

### Commitment[ScrumValues,Commitment]: Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone]

The Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] is a formal description of the state of the Increment[ScrumArtifacts] when it meets the quality measures required for the product.

The moment a Product Backlog item[ScrumArtifacts,ProductBacklog,ProductBacklogItem] meets the Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone], an Increment[ScrumArtifacts,Increment] is born.

The Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] creates transparency[ScrumPillars,Transparency] by providing everyone a shared understanding of what work was completed as part of the Increment[ScrumArtifacts].
If a Product Backlog item[ScrumArtifacts,ProductBacklog,ProductBacklogItem] does not meet the Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone], it cannot be released[ScrumArtifacts,Increment] or even presented at the Sprint Review[ScrumEvents,SprintReview].[UnfinishedWork]
Instead, it returns to the Product Backlog[ScrumArtifacts,ProductBacklog] for future consideration.[UnfinishedWork]

If the Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] for an increment[ScrumArtifacts,Increment] is part of the standards of the organization[Organization], all Scrum Teams[ScrumTeam] must follow it as a minimum.
If it is not an organizational[Organization] standard, the Scrum Team[ScrumTeam] must create a Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] appropriate for the product[Product].

The Developers[ScrumTeam,Developers] are required to conform to the Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone].
If there are multiple Scrum Teams[ScrumTeams,ScaledScrum] working together on a product[Product], they[ScrumTeam] must mutually define and comply with the same Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone].

# End Note

Scrum is free and offered in this Guide.
The Scrum framework[Framework], as outlined herein, is immutable[NoChangesAreAllowed].[ExtendScrum]
While implementing only parts of Scrum is possible, the result is not Scrum.[ExtendScrum]
Scrum exists only in its entirety and functions well as a container for other techniques, methodologies, and practices[ExtendScrum].

# Copyright

© 2020 Ken Schwaber and Jeff Sutherland

This publication is offered for license under the Attribution Share-Alike license of Creative Commons, accessible at https://creativecommons.org/licenses/by-sa/4.0/legalcode and also described in summary form at https://creativecommons.org/licenses/by-sa/4.0/. By utilizing this Scrum Guide, you acknowledge and agree that you have read and agree to be bound by the terms of the Attribution Share-Alike license of Creative Commons.

`,Wt=Object.freeze(Object.defineProperty({__proto__:null,Agile_Manifesto:Xr,Holacracy_Constitution:eo,Kanban_Guide_2020:to,Nexus_Guide_2021:no,Scrum_At_Scale_Guide_2022:io,Scrum_Guide_2017:ro,Scrum_Guide_2020:oo},Symbol.toStringTag,{value:"Module"})),ao=["software"],so=["ratifiers","adopt","constitution","authority","organization","rule","process","amend","made","policy","define","partner","governance","relevant","constraints","acting","article","role","person","lead","purpose","potential","domain","control","accountable","enact","apply","tension","responses","resolve","regularly","action","priority","projects","specific","work","time","add","circle","make","considered","broader","holds","super","conflict","spend","anchor","change","thereof","remove","automatically","facilitator","secretary","required","meeting","serving","assignment","focus","context","prioritization","duty","request","share","item","impact","official","individual","interpret","relational","agreements","tactical","regular","represent","round","participant","turn","allowed","initiative","agenda","step","reasonable","permission","counts","limit","member","election","select","rep","integrative","candidate","proposer","reactions","concern","objection","criteria","objector","address","surrogate","duration","breakdown","role lead","broader circle","super circle","anchor circle","circle thereof","circle lead","lead role","relational agreements","tactical meetings","agenda item","individual initiative","governance process","circle member","circle rep","integrative election","election process","amended proposal","governance meeting","process breakdown","circle lead role","integrative election process","integrative decision making process"],lo=["kanban","guide","limited","definition","flow","system","practices","workflow","item","called","members","work","context","time","dow","started","finished","wip","sle","measures","kanban system","system members","work item","kanban system members","CT:WorkInProgress","CT:KanbanBoard","CT:CycleTime"],co=["purpose","nexus","guide","product","integrated","work","valuable","framework","scrum","dependencies","team","definition","scale","deliver","single","people","owner","backlog","accountabilities","events","artifacts","increment","goal","sprint","cross","master","members","individual","issues","refinement","planning","daily","state","commitment","scrum team","nexus framework","single product","product owner","product backlog","integrated increment","cross team","nexus integration","integration team","scrum master","nexus sprint","sprint goal","backlog items","sprint backlog","product goal","team refinement","sprint planning","nexus daily","daily scrum","sprint review","single product backlog","cross team dependencies","nexus integration team","nexus sprint goal","product backlog items","nexus sprint backlog","cross team refinement","nexus sprint planning","nexus daily scrum","nexus sprint review","nexus sprint retrospective","CT:ScrumTeams","CT:Accountable","CT:ScrumTeam","CT:CrossTeam","CT:NexusIntegrationTeam"],uo=["guide","scrum","scale","single","team","deliver","optimal","creation","product","process","multiple","organization","quality","cross","dependencies","work","business","agile","priorities","coordinate","needed","delivery","prioritized","goal","network","function","customer","time","make","implementing","component","event","master","cycle","owner","specific","people","complex","set","transparency","organizational","operating","entire","progress","static","docsimages","scrum_at_scale_guide_2022","png","created","reference","model","sprint","executive","metascrum","action","eat","feedback","versions","group","release","daily","planning","backlog","refinement","chief","impediments","continuous","improvement","accountable","stakeholders","metrics","items","vision","strategic","sutherland","scrum scale","scrum guide","scrum team","multiple teams","cross team","business agility","scrum master","product owner","owner cycle","entire organization","operating system","static docsimages","docsimages scrum_at_scale_guide_2022","reference model","executive metascrum","executive action","action team","team process","scaled versions","daily scrum","owner team","chief product","continuous improvement","cross team dependencies","scrum master cycle","product owner cycle","static docsimages scrum_at_scale_guide_2022","executive action team","action team eat","product owner team","chief product owner","cross team coordination","executive action team eat"],mo=["purpose","scrum","guide","framework","complex","product","definition","roles","event","artifacts","rules","people","understand","master","process","work","team","release","daily","organization","development","decisions","based","transparency","inspect","adaptation","responsible","increment","progress","sprint","goal","made","plan","review","retrospective","members","stakeholders","owner","accomplish","needed","deliver","potentially","backlog","items","ensures","change","requirements","end","create","functionality","complete","practices","time","remaining","box","month","shorter","upcoming","meet","selected","improvements","scrum guide","roles events","scrum team","sprint goal","sprint planning","daily scrum","sprint review","sprint retrospective","team members","product owner","development team","scrum master","product backlog","backlog items","potentially releasable","product increment","sprint backlog","time box","master ensures","upcoming sprint","work remaining","scrum team members","product backlog items","scrum master ensures","scrum master teaches","total work remaining","selected product backlog items"],ho=["scrum","definition","people","team","master","product","owner","work","backlog","increment","sprint","stakeholders","inspect","create","decisions","needed","event","adaptation","transparency","artifacts","progress","values","commitment","focus","developers","time","goal","organization","accountable","plan","items","review","helping","daily","shorter","scrum master","product owner","product backlog","scrum team","product goal","sprint backlog","sprint goal","backlog items","sprint review","sprint planning","daily scrum","product backlog items","CT:Framework","CT:ExtendScrum","CT:Organization","CT:ScrumPillars","CT:Adaptation","CT:ScrumTeam","CT:ScrumMaster","CT:ProductOwner","CT:ScrumArtifacts","CT:ProductBacklog","CT:ProductBacklogItem","CT:SprintBacklogItem","CT:Increment","CT:ScumEvents","CT:Sprint","CT:Stakeholder","CT:Inspection","CT:ScrumEvent","CT:SprintReview","CT:Cadence","CT:Scrum","CT:Commitment","CT:ProductGoal","CT:SprintGoal","CT:ScumEvent","CT:Lean","CT:WasteReduction","CT:Transparency","CT:Management","CT:Empiricism","CT:ScrumValues","CT:Focus","CT:Learn","CT:SelfManagement","CT:ScrumEvents","CT:Emergence","CT:Developers","CT:Courage","CT:Product","CT:DefinitionOfDone","CT:Openness","CT:Respect","CT:ExternalPeople","CT:CrossFunctional","CT:ScrumTeams","CT:ScaledScrum","CT:Responsible","CT:ReduceComplexity","CT:Accountable","CT:SprintBacklog","CT:Serve","CT:Impediments","CT:Timebox","CT:Uncertainty","CT:OtherMeetings","CT:order","CT:PBI","CT:SprintPlanning","CT:DailyScrum","CT:SprintRetrospective","CT:Forecast","CT:BurnDown","CT:BurnUp","CT:Order","CT:transparency","CT:Attendees","CT:ProductBacklogRefinement","CT:Capacity","CT:WorkItem","CT:NotTheSameAsGivingAdvice","CT:ScrumValue","CT:Ready","CT:Coherence","CT:UnfinishedWork","CT:NoChangesAreAllowed"],po=Object.freeze(Object.defineProperty({__proto__:null,Agile_Manifesto:ao,Holacracy_Constitution:so,Kanban_Guide_2020:lo,Nexus_Guide_2021:co,Scrum_At_Scale_Guide_2022:uo,Scrum_Guide_2017:mo,Scrum_Guide_2020:ho},Symbol.toStringTag,{value:"Module"}));function fo(s){let e,n,i=(s[1]?"Tag: "+s[2]:s[2])+"",t,r,o;return{c(){e=_("li"),n=new Bt(!1),this.h()},l(l){e=P(l,"LI",{class:!0,"data-umami-event":!0});var a=$(e);n=Ot(a,!1),a.forEach(m),this.h()},h(){n.a=null,b(e,"class","autocomplete-items svelte-1jxhqc6"),b(e,"data-umami-event",t=`autocomplete: ${s[2].replace(/<[^>]+>/g,"")}`),it(e,"autocomplete-active",s[0])},m(l,a){y(l,e,a),n.m(i,e),r||(o=[ue(e,"click",sn),ue(e,"click",s[4])],r=!0)},p(l,[a]){a&6&&i!==(i=(l[1]?"Tag: "+l[2]:l[2])+"")&&n.p(i),a&4&&t!==(t=`autocomplete: ${l[2].replace(/<[^>]+>/g,"")}`)&&b(e,"data-umami-event",t),a&1&&it(e,"autocomplete-active",l[0])},i:L,o:L,d(l){l&&m(e),r=!1,Ke(o)}}}function go(s,e,n){let i,t,{itemLabel:r}=e,{highlighted:o}=e;function l(a){zt.call(this,s,a)}return s.$$set=a=>{"itemLabel"in a&&n(3,r=a.itemLabel),"highlighted"in a&&n(0,o=a.highlighted)},s.$$.update=()=>{s.$$.dirty&8&&n(1,i=r.startsWith("CT:")),s.$$.dirty&10&&n(2,t=i?r.slice(3).replace(/([a-z])([A-Z])/g,"$1 $2"):r)},[o,i,t,r,l]}class yo extends B{constructor(e){super(),O(this,e,go,fo,z,{itemLabel:3,highlighted:0})}}function So(){const{subscribe:s,set:e,update:n}=Ue(new Set);return{subscribe:s,add:i=>n(t=>t.add(i)),reset:()=>e(new Set)}}const He=So(),wo=Ye(He,s=>Array.from(s).sort((e,n)=>e.localeCompare(n)));function Rt(s,e,n){const i=s.slice();return i[11]=e[n],i[13]=n,i}function Dt(s){let e,n,i=Y(s[2]),t=[];for(let o=0;o<i.length;o+=1)t[o]=$t(Rt(s,i,o));const r=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){e=_("ul");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=P(o,"UL",{id:!0,class:!0});var l=$(e);for(let a=0;a<t.length;a+=1)t[a].l(l);l.forEach(m),this.h()},h(){b(e,"id","autocomplete-items-list"),b(e,"class","svelte-yyp99g")},m(o,l){y(o,e,l);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);n=!0},p(o,l){if(l&44){i=Y(o[2]);let a;for(a=0;a<i.length;a+=1){const c=Rt(o,i,a);t[a]?(t[a].p(c,l),h(t[a],1)):(t[a]=$t(c),t[a].c(),h(t[a],1),t[a].m(e,null))}for(G(),a=i.length;a<t.length;a+=1)r(a);N()}},i(o){if(!n){for(let l=0;l<i.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){o&&m(e),me(t,o)}}}function $t(s){let e,n;function i(){return s[9](s[11])}return e=new yo({props:{itemLabel:s[11],highlighted:s[13]===s[3]}}),e.$on("click",i),{c(){A(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,r){x(e,t,r),n=!0},p(t,r){s=t;const o={};r&4&&(o.itemLabel=s[11]),r&8&&(o.highlighted=s[13]===s[3]),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function bo(s){let e,n,i,t,r,o,l,a=s[2].length>0&&Dt(s);return{c(){e=_("form"),n=_("div"),i=_("input"),t=ee(),a&&a.c(),this.h()},l(c){e=P(c,"FORM",{autocomplete:!0});var u=$(e);n=P(u,"DIV",{class:!0});var g=$(n);i=P(g,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),g.forEach(m),t=te(u),a&&a.l(u),u.forEach(m),this.h()},h(){b(i,"id","item-input"),b(i,"type","search"),b(i,"placeholder","Search Terms"),b(i,"class","svelte-yyp99g"),b(n,"class","autocomplete svelte-yyp99g"),b(e,"autocomplete","off")},m(c,u){y(c,e,u),re(e,n),re(n,i),s[7](i),De(i,s[0]),re(e,t),a&&a.m(e,null),r=!0,o||(l=[ue(window,"keydown",s[6]),ue(i,"input",s[8]),ue(i,"input",s[4])],o=!0)},p(c,[u]){u&1&&i.value!==c[0]&&De(i,c[0]),c[2].length>0?a?(a.p(c,u),u&4&&h(a,1)):(a=Dt(c),a.c(),h(a,1),a.m(e,null)):a&&(G(),d(a,1,1,()=>{a=null}),N())},i(c){r||(h(a),r=!0)},o(c){d(a),r=!1},d(c){c&&m(e),s[7](null),a&&a.d(),o=!1,Ke(l)}}}function vo(s,e){let n=s.toLowerCase().indexOf(e.toLowerCase()),i=s.substring(n,n+e.length),t=`<strong>${i}</strong>`;return s.replaceAll(i,t)}function ko(s){return s.replaceAll(/<(.)*?>/g,"")}function To(s,e,n){let i,t;we(s,Se,w=>n(0,i=w)),we(s,wo,w=>n(10,t=w));let r,o=[],l=null;function a(){let w=[];i&&t.forEach(C=>{C.toLowerCase().includes(i.toLowerCase())&&(w=[...w,vo(C,i)])}),n(2,o=w)}function c(w){const C=ko(w);Et(Se,i=C.startsWith("CT:")?C.slice(3):C,i),n(2,o=[]),n(3,l=null),document==null||document.querySelector("#item-input").focus()}function u(w){if(w.key==="ArrowDown"&&(l==null||l<=o.length-1))l===null?n(3,l=0):n(3,l+=1);else if(w.key==="ArrowUp"&&l!==null)l===0?n(3,l=o.length-1):n(3,l-=1);else if(w.key==="Enter")c(l===null?i:o[l]);else return}function g(w){Le[w?"unshift":"push"](()=>{r=w,n(1,r)})}function p(){i=this.value,Se.set(i)}const f=w=>c(w);return s.$$.update=()=>{s.$$.dirty&1&&(i||(n(2,o=[]),n(3,l=null)))},[i,r,o,l,a,c,u,g,p,f]}class _o extends B{constructor(e){super(),O(this,e,To,bo,z,{})}}function Po(s){let e,n,i,t,r,o;return{c(){e=_("form"),n=_("label"),i=be(`Keep Document Structure
		`),t=_("input"),this.h()},l(l){e=P(l,"FORM",{style:!0});var a=$(e);n=P(a,"LABEL",{});var c=$(n);i=ve(c,`Keep Document Structure
		`),t=P(c,"INPUT",{type:!0,class:!0}),c.forEach(m),a.forEach(m),this.h()},h(){b(t,"type","checkbox"),b(t,"class","svelte-12afgxq"),en(e,"text-align","center")},m(l,a){y(l,e,a),re(e,n),re(n,i),re(n,t),t.checked=s[0].keepHeader,r||(o=ue(t,"change",s[1]),r=!0)},p(l,[a]){a&1&&(t.checked=l[0].keepHeader)},i:L,o:L,d(l){l&&m(e),r=!1,o()}}}function Co(s,e,n){let i;we(s,We,r=>n(0,i=r));function t(){i.keepHeader=this.checked,We.set(i)}return[i,t]}class Ao extends B{constructor(e){super(),O(this,e,Co,Po,z,{})}}function xo(s){let e,n,i,t="Interactive Agile Guides",r,o,l,a,c,u,g,p,f,w,C,V,R,D,le,Q;l=new _o({}),c=new Ao({});function ie(T){s[3](T)}let X={options:Object.keys(Wt)};s[0]!==void 0&&(X.selectedGuide=s[0]),f=new un({props:X}),Le.push(()=>ot(f,"selectedGuide",ie)),f.$on("change",s[2]);function pe(T){s[4](T)}let ke={};return s[1]!==void 0&&(ke.textBlocks=s[1]),D=new Qr({props:ke}),Le.push(()=>ot(D,"textBlocks",pe)),{c(){e=_("meta"),n=ee(),i=_("h1"),i.textContent=t,r=ee(),o=_("div"),A(l.$$.fragment),a=ee(),A(c.$$.fragment),u=ee(),g=_("br"),p=ee(),A(f.$$.fragment),C=ee(),V=_("br"),R=ee(),A(D.$$.fragment),this.h()},l(T){const U=tn("svelte-144h0ef",document.head);e=P(U,"META",{name:!0,content:!0}),U.forEach(m),n=te(T),i=P(T,"H1",{"data-svelte-h":!0}),nn(i)!=="svelte-drn8q9"&&(i.textContent=t),r=te(T),o=P(T,"DIV",{class:!0});var fe=$(o);q(l.$$.fragment,fe),a=te(fe),q(c.$$.fragment,fe),fe.forEach(m),u=te(T),g=P(T,"BR",{}),p=te(T),q(f.$$.fragment,T),C=te(T),V=P(T,"BR",{}),R=te(T),q(D.$$.fragment,T),this.h()},h(){document.title="Interactive Agile Guides",b(e,"name","description"),b(e,"content","Interactive Agile Guides"),b(o,"class","search-config-container svelte-1t8sesw")},m(T,U){re(document.head,e),y(T,n,U),y(T,i,U),y(T,r,U),y(T,o,U),x(l,o,null),re(o,a),x(c,o,null),y(T,u,U),y(T,g,U),y(T,p,U),x(f,T,U),y(T,C,U),y(T,V,U),y(T,R,U),x(D,T,U),Q=!0},p(T,[U]){const fe={};!w&&U&1&&(w=!0,fe.selectedGuide=T[0],rt(()=>w=!1)),f.$set(fe);const et={};!le&&U&2&&(le=!0,et.textBlocks=T[1],rt(()=>le=!1)),D.$set(et)},i(T){Q||(h(l.$$.fragment,T),h(c.$$.fragment,T),h(f.$$.fragment,T),h(D.$$.fragment,T),Q=!0)},o(T){d(l.$$.fragment,T),d(c.$$.fragment,T),d(f.$$.fragment,T),d(D.$$.fragment,T),Q=!1},d(T){T&&(m(n),m(i),m(r),m(o),m(u),m(g),m(p),m(C),m(V),m(R)),m(e),I(l),I(c),I(f,T),I(D,T)}}}function Io(s,e,n){let i,t;we(s,Se,p=>n(5,t=p));let r="Scrum_Guide_2020";Ve(()=>{rn({url:"/interactive-scrum-guide"})});function o(p){for(const[f,w]of Object.entries(Wt))if(f===p)return w;return"# No matching Guide found"}function l(p){for(const[f,w]of Object.entries(po))if(f===p)return w;return[]}function a(){He.reset(),Et(Se,t="",t)}function c(p){l(p).forEach(f=>{He.add(f)})}function u(p){r=p,n(0,r)}function g(p){i=p,n(1,i),n(0,r)}return s.$$.update=()=>{s.$$.dirty&1&&n(1,i=o(r).split(`

`)),s.$$.dirty&1&&c(r)},[r,i,a,u,g]}class Eo extends B{constructor(e){super(),O(this,e,Io,xo,z,{})}}export{Eo as component};
