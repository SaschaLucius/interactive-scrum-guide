var jt=Object.defineProperty;var Vt=(s,e,r)=>e in s?jt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r;var J=(s,e,r)=>(Vt(s,typeof e!="symbol"?e+"":e,r),r),Ht=(s,e,r)=>{if(!e.has(s))throw TypeError("Cannot "+r)};var Ge=(s,e,r)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,r)};var Ae=(s,e,r)=>(Ht(s,e,"access private method"),r);import{_ as Ce,s as B,e as P,c as C,f as R,d as u,i as y,E as Ut,k as S,$ as tt,R as me,n as L,V as ue,r as Ve,t as ye,g as be,a0 as xe,j as ie,x as _e,a1 as Bt,a2 as Yt,v as He,q as k,a3 as rt,P as re,a4 as Zt,z as N,a as ee,b as te,a5 as Jt,W as q,X as K,Y as j,Z as V,S as Re,a6 as Ot,a7 as zt,a8 as Qt,a9 as Xt,l as ve,aa as nt,N as $t,y as Le,w as er,h as tr,p as rr,ab as it}from"../chunks/scheduler.BZrI2ZaZ.js";import{S as O,i as z,g as W,t as d,c as F,a as h,b as A,d as G,m as I,e as E,f as at}from"../chunks/index.BKHbsuZA.js";import{s as We,e as Y,g as oe,a as se}from"../chunks/public.BeYHrH7j.js";import{w as Ue,d as Ye}from"../chunks/index.DkZ3YXVy.js";function nr(s){return[void 0,"error","removed"].includes(Ce(We))?Promise.resolve("Umami not found."):Ze().then(e=>s?e.track(r=>({...r,...s})):e.track())}async function Ze(){let s=50;for(;!window.umami;){if([void 0,"error","removed"].includes(Ce(We))||s>0)return{track:()=>Promise.resolve("Umami not found.")};await new Promise(e=>setTimeout(e,100)),s--}return window.umami}function ir(s,e){return[void 0,"error","removed"].includes(Ce(We))?Promise.resolve("Umami not found."):Ze().then(r=>e?r.track(s,e):r.track(s))}function ar(s,e,r){return[void 0,"error","removed"].includes(Ce(We))?Promise.resolve("Umami not found."):Ze().then(n=>r?n.track(t=>({...t,...e,name:s,data:r})):n.track(t=>({...t,...e,name:s})))}function or(s){var i,a,c,o;const e=(i=s.target)==null?void 0:i.getAttribute("data-umami-event"),r=(a=s.currentTarget)==null?void 0:a.getAttribute("data-umami-event"),n=(c=s.target)==null?void 0:c.getAttribute("id"),t=(o=s.currentTarget)==null?void 0:o.getAttribute("id");ir(`${e??r??n??t} ${s.type}`,s)}function ot(s,e,r){const n=s.slice();return n[5]=e[r],n}function st(s){let e,r=s[5].replaceAll("_"," ")+"",n,t;return{c(){e=P("option"),n=ye(r),this.h()},l(i){e=C(i,"OPTION",{});var a=R(e);n=be(a,r),a.forEach(u),this.h()},h(){e.__value=t=s[5],xe(e,e.__value)},m(i,a){S(i,e,a),ie(e,n)},p(i,a){a&2&&r!==(r=i[5].replaceAll("_"," ")+"")&&_e(n,r),a&2&&t!==(t=i[5])&&(e.__value=t,xe(e,e.__value))},d(i){i&&u(e)}}}function sr(s){let e,r,n,t=Y(s[1]),i=[];for(let a=0;a<t.length;a+=1)i[a]=st(ot(s,t,a));return{c(){e=P("select");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=C(a,"SELECT",{id:!0,class:!0});var c=R(e);for(let o=0;o<i.length;o+=1)i[o].l(c);c.forEach(u),this.h()},h(){y(e,"id","select"),y(e,"class","svelte-vfwpa"),s[0]===void 0&&Ut(()=>s[3].call(e))},m(a,c){S(a,e,c);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null);tt(e,s[0],!0),r||(n=[me(e,"change",s[2]),me(e,"change",s[3]),me(e,"change",s[4])],r=!0)},p(a,[c]){if(c&2){t=Y(a[1]);let o;for(o=0;o<t.length;o+=1){const l=ot(a,t,o);i[o]?i[o].p(l,c):(i[o]=st(l),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}c&3&&tt(e,a[0])},i:L,o:L,d(a){a&&u(e),ue(i,a),r=!1,Ve(n)}}}function cr(s,e,r){let{selectedGuide:n=""}=e,{options:t}=e;function i(o){Bt.call(this,s,o)}function a(){n=Yt(this),r(0,n),r(1,t)}const c=()=>ar(n,{url:"/interactive-scrum-guide"});return s.$$set=o=>{"selectedGuide"in o&&r(0,n=o.selectedGuide),"options"in o&&r(1,t=o.options)},[n,t,i,a,c]}class lr extends O{constructor(e){super(),z(this,e,cr,sr,B,{selectedGuide:0,options:1})}}function mr(){const s=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||s(e)},He(()=>{console.warn=s})}function ct(s,e,r){const n=s.slice();return n[18]=e[r],n}function lt(s,e,r){const n=s.slice();return n[18]=e[r],n}function mt(s,e,r){const n=s.slice();return n[10]=e[r],n}function ut(s,e,r){const n=s.slice();return n[13]=e[r],n[15]=r,n}function ht(s,e,r){const n=s.slice();return n[16]=e[r],n[15]=r,n}function dt(s,e,r){const n=s.slice();return n[7]=e[r],n}function ur(s){let e,r,n,t;const i=[fr,pr,dr],a=[];function c(o,l){return o[0]==="table"?0:o[0]==="list"?1:2}return e=c(s),r=a[e]=i[e](s),{c(){r.c(),n=k()},l(o){r.l(o),n=k()},m(o,l){a[e].m(o,l),S(o,n,l),t=!0},p(o,l){let m=e;e=c(o),e===m?a[e].p(o,l):(W(),d(a[m],1,1,()=>{a[m]=null}),F(),r=a[e],r?r.p(o,l):(r=a[e]=i[e](o),r.c()),h(r,1),r.m(n.parentNode,n))},i(o){t||(h(r),t=!0)},o(o){d(r),t=!1},d(o){o&&u(n),a[e].d(o)}}}function hr(s){let e,r,n=Y(s[1]),t=[];for(let a=0;a<n.length;a+=1)t[a]=vt(dt(s,n,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=k()},l(a){for(let c=0;c<t.length;c+=1)t[c].l(a);e=k()},m(a,c){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(a,c);S(a,e,c),r=!0},p(a,c){if(c&34){n=Y(a[1]);let o;for(o=0;o<n.length;o+=1){const l=dt(a,n,o);t[o]?(t[o].p(l,c),h(t[o],1)):(t[o]=vt(l),t[o].c(),h(t[o],1),t[o].m(e.parentNode,e))}for(W(),o=n.length;o<t.length;o+=1)i(o);F()}},i(a){if(!r){for(let c=0;c<n.length;c+=1)h(t[c]);r=!0}},o(a){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)d(t[c]);r=!1},d(a){a&&u(e),ue(t,a)}}}function dr(s){let e,r,n;const t=[s[6]];var i=s[5][s[0]];function a(c,o){let l={$$slots:{default:[wr]},$$scope:{ctx:c}};for(let m=0;m<t.length;m+=1)l=re(l,t[m]);return o!==void 0&&o&64&&(l=re(l,oe(t,[se(c[6])]))),{props:l}}return i&&(e=N(i,a(s))),{c(){e&&A(e.$$.fragment),r=k()},l(c){e&&G(e.$$.fragment,c),r=k()},m(c,o){e&&I(e,c,o),S(c,r,o),n=!0},p(c,o){if(o&33&&i!==(i=c[5][c[0]])){if(e){W();const l=e;d(l.$$.fragment,1,0,()=>{E(l,1)}),F()}i?(e=N(i,a(c,o)),A(e.$$.fragment),h(e.$$.fragment,1),I(e,r.parentNode,r)):e=null}else if(i){const l=o&64?oe(t,[se(c[6])]):{};o&8388706&&(l.$$scope={dirty:o,ctx:c}),e.$set(l)}},i(c){n||(e&&h(e.$$.fragment,c),n=!0)},o(c){e&&d(e.$$.fragment,c),n=!1},d(c){c&&u(r),e&&E(e,c)}}}function pr(s){let e,r,n,t;const i=[yr,vr],a=[];function c(o,l){return o[4]?0:1}return e=c(s),r=a[e]=i[e](s),{c(){r.c(),n=k()},l(o){r.l(o),n=k()},m(o,l){a[e].m(o,l),S(o,n,l),t=!0},p(o,l){let m=e;e=c(o),e===m?a[e].p(o,l):(W(),d(a[m],1,1,()=>{a[m]=null}),F(),r=a[e],r?r.p(o,l):(r=a[e]=i[e](o),r.c()),h(r,1),r.m(n.parentNode,n))},i(o){t||(h(r),t=!0)},o(o){d(r),t=!1},d(o){o&&u(n),a[e].d(o)}}}function fr(s){let e,r,n;var t=s[5].table;function i(a,c){return{props:{$$slots:{default:[xr]},$$scope:{ctx:a}}}}return t&&(e=N(t,i(s))),{c(){e&&A(e.$$.fragment),r=k()},l(a){e&&G(e.$$.fragment,a),r=k()},m(a,c){e&&I(e,a,c),S(a,r,c),n=!0},p(a,c){if(c&32&&t!==(t=a[5].table)){if(e){W();const o=e;d(o.$$.fragment,1,0,()=>{E(o,1)}),F()}t?(e=N(t,i(a)),A(e.$$.fragment),h(e.$$.fragment,1),I(e,r.parentNode,r)):e=null}else if(t){const o={};c&8388716&&(o.$$scope={dirty:c,ctx:a}),e.$set(o)}},i(a){n||(e&&h(e.$$.fragment,a),n=!0)},o(a){e&&d(e.$$.fragment,a),n=!1},d(a){a&&u(r),e&&E(e,a)}}}function gr(s){let e=s[6].raw+"",r;return{c(){r=ye(e)},l(n){r=be(n,e)},m(n,t){S(n,r,t)},p(n,t){t&64&&e!==(e=n[6].raw+"")&&_e(r,e)},i:L,o:L,d(n){n&&u(r)}}}function Sr(s){let e,r;return e=new Se({props:{tokens:s[1],renderers:s[5]}}),{c(){A(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,t){I(e,n,t),r=!0},p(n,t){const i={};t&2&&(i.tokens=n[1]),t&32&&(i.renderers=n[5]),e.$set(i)},i(n){r||(h(e.$$.fragment,n),r=!0)},o(n){d(e.$$.fragment,n),r=!1},d(n){E(e,n)}}}function wr(s){let e,r,n,t;const i=[Sr,gr],a=[];function c(o,l){return o[1]?0:1}return e=c(s),r=a[e]=i[e](s),{c(){r.c(),n=k()},l(o){r.l(o),n=k()},m(o,l){a[e].m(o,l),S(o,n,l),t=!0},p(o,l){let m=e;e=c(o),e===m?a[e].p(o,l):(W(),d(a[m],1,1,()=>{a[m]=null}),F(),r=a[e],r?r.p(o,l):(r=a[e]=i[e](o),r.c()),h(r,1),r.m(n.parentNode,n))},i(o){t||(h(r),t=!0)},o(o){d(r),t=!1},d(o){o&&u(n),a[e].d(o)}}}function vr(s){let e,r,n;const t=[{ordered:s[4]},s[6]];var i=s[5].list;function a(c,o){let l={$$slots:{default:[kr]},$$scope:{ctx:c}};for(let m=0;m<t.length;m+=1)l=re(l,t[m]);return o!==void 0&&o&80&&(l=re(l,oe(t,[o&16&&{ordered:c[4]},o&64&&se(c[6])]))),{props:l}}return i&&(e=N(i,a(s))),{c(){e&&A(e.$$.fragment),r=k()},l(c){e&&G(e.$$.fragment,c),r=k()},m(c,o){e&&I(e,c,o),S(c,r,o),n=!0},p(c,o){if(o&32&&i!==(i=c[5].list)){if(e){W();const l=e;d(l.$$.fragment,1,0,()=>{E(l,1)}),F()}i?(e=N(i,a(c,o)),A(e.$$.fragment),h(e.$$.fragment,1),I(e,r.parentNode,r)):e=null}else if(i){const l=o&80?oe(t,[o&16&&{ordered:c[4]},o&64&&se(c[6])]):{};o&8388704&&(l.$$scope={dirty:o,ctx:c}),e.$set(l)}},i(c){n||(e&&h(e.$$.fragment,c),n=!0)},o(c){e&&d(e.$$.fragment,c),n=!1},d(c){c&&u(r),e&&E(e,c)}}}function yr(s){let e,r,n;const t=[{ordered:s[4]},s[6]];var i=s[5].list;function a(c,o){let l={$$slots:{default:[Pr]},$$scope:{ctx:c}};for(let m=0;m<t.length;m+=1)l=re(l,t[m]);return o!==void 0&&o&80&&(l=re(l,oe(t,[o&16&&{ordered:c[4]},o&64&&se(c[6])]))),{props:l}}return i&&(e=N(i,a(s))),{c(){e&&A(e.$$.fragment),r=k()},l(c){e&&G(e.$$.fragment,c),r=k()},m(c,o){e&&I(e,c,o),S(c,r,o),n=!0},p(c,o){if(o&32&&i!==(i=c[5].list)){if(e){W();const l=e;d(l.$$.fragment,1,0,()=>{E(l,1)}),F()}i?(e=N(i,a(c,o)),A(e.$$.fragment),h(e.$$.fragment,1),I(e,r.parentNode,r)):e=null}else if(i){const l=o&80?oe(t,[o&16&&{ordered:c[4]},o&64&&se(c[6])]):{};o&8388704&&(l.$$scope={dirty:o,ctx:c}),e.$set(l)}},i(c){n||(e&&h(e.$$.fragment,c),n=!0)},o(c){e&&d(e.$$.fragment,c),n=!1},d(c){c&&u(r),e&&E(e,c)}}}function br(s){let e,r,n;return e=new Se({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){A(e.$$.fragment),r=ee()},l(t){G(e.$$.fragment,t),r=te(t)},m(t,i){I(e,t,i),S(t,r,i),n=!0},p(t,i){const a={};i&64&&(a.tokens=t[18].tokens),i&32&&(a.renderers=t[5]),e.$set(a)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){t&&u(r),E(e,t)}}}function pt(s){let e,r,n;const t=[s[18]];var i=s[5].unorderedlistitem||s[5].listitem;function a(c,o){let l={$$slots:{default:[br]},$$scope:{ctx:c}};for(let m=0;m<t.length;m+=1)l=re(l,t[m]);return o!==void 0&&o&64&&(l=re(l,oe(t,[se(c[18])]))),{props:l}}return i&&(e=N(i,a(s))),{c(){e&&A(e.$$.fragment),r=k()},l(c){e&&G(e.$$.fragment,c),r=k()},m(c,o){e&&I(e,c,o),S(c,r,o),n=!0},p(c,o){if(o&32&&i!==(i=c[5].unorderedlistitem||c[5].listitem)){if(e){W();const l=e;d(l.$$.fragment,1,0,()=>{E(l,1)}),F()}i?(e=N(i,a(c,o)),A(e.$$.fragment),h(e.$$.fragment,1),I(e,r.parentNode,r)):e=null}else if(i){const l=o&64?oe(t,[se(c[18])]):{};o&8388704&&(l.$$scope={dirty:o,ctx:c}),e.$set(l)}},i(c){n||(e&&h(e.$$.fragment,c),n=!0)},o(c){e&&d(e.$$.fragment,c),n=!1},d(c){c&&u(r),e&&E(e,c)}}}function kr(s){let e,r,n=Y(s[6].items),t=[];for(let a=0;a<n.length;a+=1)t[a]=pt(ct(s,n,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=k()},l(a){for(let c=0;c<t.length;c+=1)t[c].l(a);e=k()},m(a,c){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(a,c);S(a,e,c),r=!0},p(a,c){if(c&96){n=Y(a[6].items);let o;for(o=0;o<n.length;o+=1){const l=ct(a,n,o);t[o]?(t[o].p(l,c),h(t[o],1)):(t[o]=pt(l),t[o].c(),h(t[o],1),t[o].m(e.parentNode,e))}for(W(),o=n.length;o<t.length;o+=1)i(o);F()}},i(a){if(!r){for(let c=0;c<n.length;c+=1)h(t[c]);r=!0}},o(a){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)d(t[c]);r=!1},d(a){a&&u(e),ue(t,a)}}}function Tr(s){let e,r,n;return e=new Se({props:{tokens:s[18].tokens,renderers:s[5]}}),{c(){A(e.$$.fragment),r=ee()},l(t){G(e.$$.fragment,t),r=te(t)},m(t,i){I(e,t,i),S(t,r,i),n=!0},p(t,i){const a={};i&64&&(a.tokens=t[18].tokens),i&32&&(a.renderers=t[5]),e.$set(a)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){t&&u(r),E(e,t)}}}function ft(s){let e,r,n;const t=[s[18]];var i=s[5].orderedlistitem||s[5].listitem;function a(c,o){let l={$$slots:{default:[Tr]},$$scope:{ctx:c}};for(let m=0;m<t.length;m+=1)l=re(l,t[m]);return o!==void 0&&o&64&&(l=re(l,oe(t,[se(c[18])]))),{props:l}}return i&&(e=N(i,a(s))),{c(){e&&A(e.$$.fragment),r=k()},l(c){e&&G(e.$$.fragment,c),r=k()},m(c,o){e&&I(e,c,o),S(c,r,o),n=!0},p(c,o){if(o&32&&i!==(i=c[5].orderedlistitem||c[5].listitem)){if(e){W();const l=e;d(l.$$.fragment,1,0,()=>{E(l,1)}),F()}i?(e=N(i,a(c,o)),A(e.$$.fragment),h(e.$$.fragment,1),I(e,r.parentNode,r)):e=null}else if(i){const l=o&64?oe(t,[se(c[18])]):{};o&8388704&&(l.$$scope={dirty:o,ctx:c}),e.$set(l)}},i(c){n||(e&&h(e.$$.fragment,c),n=!0)},o(c){e&&d(e.$$.fragment,c),n=!1},d(c){c&&u(r),e&&E(e,c)}}}function Pr(s){let e,r,n=Y(s[6].items),t=[];for(let a=0;a<n.length;a+=1)t[a]=ft(lt(s,n,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=k()},l(a){for(let c=0;c<t.length;c+=1)t[c].l(a);e=k()},m(a,c){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(a,c);S(a,e,c),r=!0},p(a,c){if(c&96){n=Y(a[6].items);let o;for(o=0;o<n.length;o+=1){const l=lt(a,n,o);t[o]?(t[o].p(l,c),h(t[o],1)):(t[o]=ft(l),t[o].c(),h(t[o],1),t[o].m(e.parentNode,e))}for(W(),o=n.length;o<t.length;o+=1)i(o);F()}},i(a){if(!r){for(let c=0;c<n.length;c+=1)h(t[c]);r=!0}},o(a){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)d(t[c]);r=!1},d(a){a&&u(e),ue(t,a)}}}function Cr(s){let e,r,n;return e=new Se({props:{tokens:s[16].tokens,renderers:s[5]}}),{c(){A(e.$$.fragment),r=ee()},l(t){G(e.$$.fragment,t),r=te(t)},m(t,i){I(e,t,i),S(t,r,i),n=!0},p(t,i){const a={};i&4&&(a.tokens=t[16].tokens),i&32&&(a.renderers=t[5]),e.$set(a)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){t&&u(r),E(e,t)}}}function gt(s){let e,r,n;var t=s[5].tablecell;function i(a,c){return{props:{header:!0,align:a[6].align[a[15]]||"center",$$slots:{default:[Cr]},$$scope:{ctx:a}}}}return t&&(e=N(t,i(s))),{c(){e&&A(e.$$.fragment),r=k()},l(a){e&&G(e.$$.fragment,a),r=k()},m(a,c){e&&I(e,a,c),S(a,r,c),n=!0},p(a,c){if(c&32&&t!==(t=a[5].tablecell)){if(e){W();const o=e;d(o.$$.fragment,1,0,()=>{E(o,1)}),F()}t?(e=N(t,i(a)),A(e.$$.fragment),h(e.$$.fragment,1),I(e,r.parentNode,r)):e=null}else if(t){const o={};c&64&&(o.align=a[6].align[a[15]]||"center"),c&8388644&&(o.$$scope={dirty:c,ctx:a}),e.$set(o)}},i(a){n||(e&&h(e.$$.fragment,a),n=!0)},o(a){e&&d(e.$$.fragment,a),n=!1},d(a){a&&u(r),e&&E(e,a)}}}function _r(s){let e,r,n=Y(s[2]),t=[];for(let a=0;a<n.length;a+=1)t[a]=gt(ht(s,n,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=k()},l(a){for(let c=0;c<t.length;c+=1)t[c].l(a);e=k()},m(a,c){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(a,c);S(a,e,c),r=!0},p(a,c){if(c&100){n=Y(a[2]);let o;for(o=0;o<n.length;o+=1){const l=ht(a,n,o);t[o]?(t[o].p(l,c),h(t[o],1)):(t[o]=gt(l),t[o].c(),h(t[o],1),t[o].m(e.parentNode,e))}for(W(),o=n.length;o<t.length;o+=1)i(o);F()}},i(a){if(!r){for(let c=0;c<n.length;c+=1)h(t[c]);r=!0}},o(a){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)d(t[c]);r=!1},d(a){a&&u(e),ue(t,a)}}}function Ar(s){let e,r,n;var t=s[5].tablerow;function i(a,c){return{props:{$$slots:{default:[_r]},$$scope:{ctx:a}}}}return t&&(e=N(t,i(s))),{c(){e&&A(e.$$.fragment),r=k()},l(a){e&&G(e.$$.fragment,a),r=k()},m(a,c){e&&I(e,a,c),S(a,r,c),n=!0},p(a,c){if(c&32&&t!==(t=a[5].tablerow)){if(e){W();const o=e;d(o.$$.fragment,1,0,()=>{E(o,1)}),F()}t?(e=N(t,i(a)),A(e.$$.fragment),h(e.$$.fragment,1),I(e,r.parentNode,r)):e=null}else if(t){const o={};c&8388708&&(o.$$scope={dirty:c,ctx:a}),e.$set(o)}},i(a){n||(e&&h(e.$$.fragment,a),n=!0)},o(a){e&&d(e.$$.fragment,a),n=!1},d(a){a&&u(r),e&&E(e,a)}}}function Ir(s){let e,r;return e=new Se({props:{tokens:s[13].tokens,renderers:s[5]}}),{c(){A(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,t){I(e,n,t),r=!0},p(n,t){const i={};t&8&&(i.tokens=n[13].tokens),t&32&&(i.renderers=n[5]),e.$set(i)},i(n){r||(h(e.$$.fragment,n),r=!0)},o(n){d(e.$$.fragment,n),r=!1},d(n){E(e,n)}}}function St(s){let e,r,n;var t=s[5].tablecell;function i(a,c){return{props:{header:!1,align:a[6].align[a[15]]||"center",$$slots:{default:[Ir]},$$scope:{ctx:a}}}}return t&&(e=N(t,i(s))),{c(){e&&A(e.$$.fragment),r=k()},l(a){e&&G(e.$$.fragment,a),r=k()},m(a,c){e&&I(e,a,c),S(a,r,c),n=!0},p(a,c){if(c&32&&t!==(t=a[5].tablecell)){if(e){W();const o=e;d(o.$$.fragment,1,0,()=>{E(o,1)}),F()}t?(e=N(t,i(a)),A(e.$$.fragment),h(e.$$.fragment,1),I(e,r.parentNode,r)):e=null}else if(t){const o={};c&64&&(o.align=a[6].align[a[15]]||"center"),c&8388648&&(o.$$scope={dirty:c,ctx:a}),e.$set(o)}},i(a){n||(e&&h(e.$$.fragment,a),n=!0)},o(a){e&&d(e.$$.fragment,a),n=!1},d(a){a&&u(r),e&&E(e,a)}}}function Er(s){let e,r,n=Y(s[10]),t=[];for(let a=0;a<n.length;a+=1)t[a]=St(ut(s,n,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=ee()},l(a){for(let c=0;c<t.length;c+=1)t[c].l(a);e=te(a)},m(a,c){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(a,c);S(a,e,c),r=!0},p(a,c){if(c&104){n=Y(a[10]);let o;for(o=0;o<n.length;o+=1){const l=ut(a,n,o);t[o]?(t[o].p(l,c),h(t[o],1)):(t[o]=St(l),t[o].c(),h(t[o],1),t[o].m(e.parentNode,e))}for(W(),o=n.length;o<t.length;o+=1)i(o);F()}},i(a){if(!r){for(let c=0;c<n.length;c+=1)h(t[c]);r=!0}},o(a){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)d(t[c]);r=!1},d(a){a&&u(e),ue(t,a)}}}function wt(s){let e,r,n;var t=s[5].tablerow;function i(a,c){return{props:{$$slots:{default:[Er]},$$scope:{ctx:a}}}}return t&&(e=N(t,i(s))),{c(){e&&A(e.$$.fragment),r=k()},l(a){e&&G(e.$$.fragment,a),r=k()},m(a,c){e&&I(e,a,c),S(a,r,c),n=!0},p(a,c){if(c&32&&t!==(t=a[5].tablerow)){if(e){W();const o=e;d(o.$$.fragment,1,0,()=>{E(o,1)}),F()}t?(e=N(t,i(a)),A(e.$$.fragment),h(e.$$.fragment,1),I(e,r.parentNode,r)):e=null}else if(t){const o={};c&8388712&&(o.$$scope={dirty:c,ctx:a}),e.$set(o)}},i(a){n||(e&&h(e.$$.fragment,a),n=!0)},o(a){e&&d(e.$$.fragment,a),n=!1},d(a){a&&u(r),e&&E(e,a)}}}function Dr(s){let e,r,n=Y(s[3]),t=[];for(let a=0;a<n.length;a+=1)t[a]=wt(mt(s,n,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=k()},l(a){for(let c=0;c<t.length;c+=1)t[c].l(a);e=k()},m(a,c){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(a,c);S(a,e,c),r=!0},p(a,c){if(c&104){n=Y(a[3]);let o;for(o=0;o<n.length;o+=1){const l=mt(a,n,o);t[o]?(t[o].p(l,c),h(t[o],1)):(t[o]=wt(l),t[o].c(),h(t[o],1),t[o].m(e.parentNode,e))}for(W(),o=n.length;o<t.length;o+=1)i(o);F()}},i(a){if(!r){for(let c=0;c<n.length;c+=1)h(t[c]);r=!0}},o(a){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)d(t[c]);r=!1},d(a){a&&u(e),ue(t,a)}}}function xr(s){let e,r,n,t,i;var a=s[5].tablehead;function c(m,g){return{props:{$$slots:{default:[Ar]},$$scope:{ctx:m}}}}a&&(e=N(a,c(s)));var o=s[5].tablebody;function l(m,g){return{props:{$$slots:{default:[Dr]},$$scope:{ctx:m}}}}return o&&(n=N(o,l(s))),{c(){e&&A(e.$$.fragment),r=ee(),n&&A(n.$$.fragment),t=k()},l(m){e&&G(e.$$.fragment,m),r=te(m),n&&G(n.$$.fragment,m),t=k()},m(m,g){e&&I(e,m,g),S(m,r,g),n&&I(n,m,g),S(m,t,g),i=!0},p(m,g){if(g&32&&a!==(a=m[5].tablehead)){if(e){W();const p=e;d(p.$$.fragment,1,0,()=>{E(p,1)}),F()}a?(e=N(a,c(m)),A(e.$$.fragment),h(e.$$.fragment,1),I(e,r.parentNode,r)):e=null}else if(a){const p={};g&8388708&&(p.$$scope={dirty:g,ctx:m}),e.$set(p)}if(g&32&&o!==(o=m[5].tablebody)){if(n){W();const p=n;d(p.$$.fragment,1,0,()=>{E(p,1)}),F()}o?(n=N(o,l(m)),A(n.$$.fragment),h(n.$$.fragment,1),I(n,t.parentNode,t)):n=null}else if(o){const p={};g&8388712&&(p.$$scope={dirty:g,ctx:m}),n.$set(p)}},i(m){i||(e&&h(e.$$.fragment,m),n&&h(n.$$.fragment,m),i=!0)},o(m){e&&d(e.$$.fragment,m),n&&d(n.$$.fragment,m),i=!1},d(m){m&&(u(r),u(t)),e&&E(e,m),n&&E(n,m)}}}function vt(s){let e,r;const n=[s[7],{renderers:s[5]}];let t={};for(let i=0;i<n.length;i+=1)t=re(t,n[i]);return e=new Se({props:t}),{c(){A(e.$$.fragment)},l(i){G(e.$$.fragment,i)},m(i,a){I(e,i,a),r=!0},p(i,a){const c=a&34?oe(n,[a&2&&se(i[7]),a&32&&{renderers:i[5]}]):{};e.$set(c)},i(i){r||(h(e.$$.fragment,i),r=!0)},o(i){d(e.$$.fragment,i),r=!1},d(i){E(e,i)}}}function Rr(s){let e,r,n,t;const i=[hr,ur],a=[];function c(o,l){return o[0]?o[5][o[0]]?1:-1:0}return~(e=c(s))&&(r=a[e]=i[e](s)),{c(){r&&r.c(),n=k()},l(o){r&&r.l(o),n=k()},m(o,l){~e&&a[e].m(o,l),S(o,n,l),t=!0},p(o,[l]){let m=e;e=c(o),e===m?~e&&a[e].p(o,l):(r&&(W(),d(a[m],1,1,()=>{a[m]=null}),F()),~e?(r=a[e],r?r.p(o,l):(r=a[e]=i[e](o),r.c()),h(r,1),r.m(n.parentNode,n)):r=null)},i(o){t||(h(r),t=!0)},o(o){d(r),t=!1},d(o){o&&u(n),~e&&a[e].d(o)}}}function Br(s,e,r){const n=["type","tokens","header","rows","ordered","renderers"];let t=rt(e,n),{type:i=void 0}=e,{tokens:a=void 0}=e,{header:c=void 0}=e,{rows:o=void 0}=e,{ordered:l=!1}=e,{renderers:m}=e;return mr(),s.$$set=g=>{e=re(re({},e),Zt(g)),r(6,t=rt(e,n)),"type"in g&&r(0,i=g.type),"tokens"in g&&r(1,a=g.tokens),"header"in g&&r(2,c=g.header),"rows"in g&&r(3,o=g.rows),"ordered"in g&&r(4,l=g.ordered),"renderers"in g&&r(5,m=g.renderers)},[i,a,c,o,l,m,t]}let Se=class extends O{constructor(e){super(),z(this,e,Br,Rr,B,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}};function Je(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let de=Je();function Mt(s){de=s}const Wt=/[&<>"']/,Or=new RegExp(Wt.source,"g"),Ft=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,zr=new RegExp(Ft.source,"g"),$r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},yt=s=>$r[s];function Z(s,e){if(e){if(Wt.test(s))return s.replace(Or,yt)}else if(Ft.test(s))return s.replace(zr,yt);return s}const Mr=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Gt(s){return s.replace(Mr,(e,r)=>(r=r.toLowerCase(),r==="colon"?":":r.charAt(0)==="#"?r.charAt(1)==="x"?String.fromCharCode(parseInt(r.substring(2),16)):String.fromCharCode(+r.substring(1)):""))}const Wr=/(^|[^\[])\^/g;function $(s,e){s=typeof s=="string"?s:s.source,e=e||"";const r={replace:(n,t)=>(t=t.source||t,t=t.replace(Wr,"$1"),s=s.replace(n,t),r),getRegex:()=>new RegExp(s,e)};return r}const Fr=/[^\w:]/g,Gr=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function bt(s,e,r){if(s){let n;try{n=decodeURIComponent(Gt(r)).replace(Fr,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!Gr.test(r)&&(r=Kr(e,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const Ie={},Nr=/^[^:]+:\/*[^/]*$/,Lr=/^([^:]+:)[\s\S]*$/,qr=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Kr(s,e){Ie[" "+s]||(Nr.test(s)?Ie[" "+s]=s+"/":Ie[" "+s]=De(s,"/",!0)),s=Ie[" "+s];const r=s.indexOf(":")===-1;return e.substring(0,2)==="//"?r?e:s.replace(Lr,"$1")+e:e.charAt(0)==="/"?r?e:s.replace(qr,"$1")+e:s+e}const Be={exec:function(){}};function kt(s,e){const r=s.replace(/\|/g,(i,a,c)=>{let o=!1,l=a;for(;--l>=0&&c[l]==="\\";)o=!o;return o?"|":" |"}),n=r.split(/ \|/);let t=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;t<n.length;t++)n[t]=n[t].trim().replace(/\\\|/g,"|");return n}function De(s,e,r){const n=s.length;if(n===0)return"";let t=0;for(;t<n;){const i=s.charAt(n-t-1);if(i===e&&!r)t++;else if(i!==e&&r)t++;else break}return s.slice(0,n-t)}function jr(s,e){if(s.indexOf(e[1])===-1)return-1;const r=s.length;let n=0,t=0;for(;t<r;t++)if(s[t]==="\\")t++;else if(s[t]===e[0])n++;else if(s[t]===e[1]&&(n--,n<0))return t;return-1}function Vr(s,e){!s||s.silent||(e&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(s.sanitize||s.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(s.highlight||s.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),s.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),s.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),s.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),s.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(s.headerIds||s.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function Tt(s,e,r,n){const t=e.href,i=e.title?Z(e.title):null,a=s[1].replace(/\\([\[\]])/g,"$1");if(s[0].charAt(0)!=="!"){n.state.inLink=!0;const c={type:"link",raw:r,href:t,title:i,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,c}return{type:"image",raw:r,href:t,title:i,text:Z(a)}}function Hr(s,e){const r=s.match(/^(\s+)(?:```)/);if(r===null)return e;const n=r[1];return e.split(`
`).map(t=>{const i=t.match(/^\s+/);if(i===null)return t;const[a]=i;return a.length>=n.length?t.slice(n.length):t}).join(`
`)}class Oe{constructor(e){this.options=e||de}space(e){const r=this.rules.block.newline.exec(e);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(e){const r=this.rules.block.code.exec(e);if(r){const n=r[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:r[0],codeBlockStyle:"indented",text:this.options.pedantic?n:De(n,`
`)}}}fences(e){const r=this.rules.block.fences.exec(e);if(r){const n=r[0],t=Hr(n,r[3]||"");return{type:"code",raw:n,lang:r[2]?r[2].trim().replace(this.rules.inline._escapes,"$1"):r[2],text:t}}}heading(e){const r=this.rules.block.heading.exec(e);if(r){let n=r[2].trim();if(/#$/.test(n)){const t=De(n,"#");(this.options.pedantic||!t||/ $/.test(t))&&(n=t.trim())}return{type:"heading",raw:r[0],depth:r[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const r=this.rules.block.hr.exec(e);if(r)return{type:"hr",raw:r[0]}}blockquote(e){const r=this.rules.block.blockquote.exec(e);if(r){const n=r[0].replace(/^ *>[ \t]?/gm,""),t=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(n);return this.lexer.state.top=t,{type:"blockquote",raw:r[0],tokens:i,text:n}}}list(e){let r=this.rules.block.list.exec(e);if(r){let n,t,i,a,c,o,l,m,g,p,f,v,_=r[1].trim();const H=_.length>1,D={type:"list",raw:"",ordered:H,start:H?+_.slice(0,-1):"",loose:!1,items:[]};_=H?`\\d{1,9}\\${_.slice(-1)}`:`\\${_}`,this.options.pedantic&&(_=H?_:"[*+-]");const x=new RegExp(`^( {0,3}${_})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(v=!1,!(!(r=x.exec(e))||this.rules.block.hr.test(e)));){if(n=r[0],e=e.substring(n.length),m=r[2].split(`
`,1)[0].replace(/^\t+/,Q=>" ".repeat(3*Q.length)),g=e.split(`
`,1)[0],this.options.pedantic?(a=2,f=m.trimLeft()):(a=r[2].search(/[^ ]/),a=a>4?1:a,f=m.slice(a),a+=r[1].length),o=!1,!m&&/^ *$/.test(g)&&(n+=g+`
`,e=e.substring(g.length+1),v=!0),!v){const Q=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),ne=new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),X=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),pe=new RegExp(`^ {0,${Math.min(3,a-1)}}#`);for(;e&&(p=e.split(`
`,1)[0],g=p,this.options.pedantic&&(g=g.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(X.test(g)||pe.test(g)||Q.test(g)||ne.test(e)));){if(g.search(/[^ ]/)>=a||!g.trim())f+=`
`+g.slice(a);else{if(o||m.search(/[^ ]/)>=4||X.test(m)||pe.test(m)||ne.test(m))break;f+=`
`+g}!o&&!g.trim()&&(o=!0),n+=p+`
`,e=e.substring(p.length+1),m=g.slice(a)}}D.loose||(l?D.loose=!0:/\n *\n *$/.test(n)&&(l=!0)),this.options.gfm&&(t=/^\[[ xX]\] /.exec(f),t&&(i=t[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),D.items.push({type:"list_item",raw:n,task:!!t,checked:i,loose:!1,text:f}),D.raw+=n}D.items[D.items.length-1].raw=n.trimRight(),D.items[D.items.length-1].text=f.trimRight(),D.raw=D.raw.trimRight();const ce=D.items.length;for(c=0;c<ce;c++)if(this.lexer.state.top=!1,D.items[c].tokens=this.lexer.blockTokens(D.items[c].text,[]),!D.loose){const Q=D.items[c].tokens.filter(X=>X.type==="space"),ne=Q.length>0&&Q.some(X=>/\n.*\n/.test(X.raw));D.loose=ne}if(D.loose)for(c=0;c<ce;c++)D.items[c].loose=!0;return D}}html(e){const r=this.rules.block.html.exec(e);if(r){const n={type:"html",block:!0,raw:r[0],pre:!this.options.sanitizer&&(r[1]==="pre"||r[1]==="script"||r[1]==="style"),text:r[0]};if(this.options.sanitize){const t=this.options.sanitizer?this.options.sanitizer(r[0]):Z(r[0]);n.type="paragraph",n.text=t,n.tokens=this.lexer.inline(t)}return n}}def(e){const r=this.rules.block.def.exec(e);if(r){const n=r[1].toLowerCase().replace(/\s+/g," "),t=r[2]?r[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",i=r[3]?r[3].substring(1,r[3].length-1).replace(this.rules.inline._escapes,"$1"):r[3];return{type:"def",tag:n,raw:r[0],href:t,title:i}}}table(e){const r=this.rules.block.table.exec(e);if(r){const n={type:"table",header:kt(r[1]).map(t=>({text:t})),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:r[3]&&r[3].trim()?r[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=r[0];let t=n.align.length,i,a,c,o;for(i=0;i<t;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(t=n.rows.length,i=0;i<t;i++)n.rows[i]=kt(n.rows[i],n.header.length).map(l=>({text:l}));for(t=n.header.length,a=0;a<t;a++)n.header[a].tokens=this.lexer.inline(n.header[a].text);for(t=n.rows.length,a=0;a<t;a++)for(o=n.rows[a],c=0;c<o.length;c++)o[c].tokens=this.lexer.inline(o[c].text);return n}}}lheading(e){const r=this.rules.block.lheading.exec(e);if(r)return{type:"heading",raw:r[0],depth:r[2].charAt(0)==="="?1:2,text:r[1],tokens:this.lexer.inline(r[1])}}paragraph(e){const r=this.rules.block.paragraph.exec(e);if(r){const n=r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1];return{type:"paragraph",raw:r[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const r=this.rules.block.text.exec(e);if(r)return{type:"text",raw:r[0],text:r[0],tokens:this.lexer.inline(r[0])}}escape(e){const r=this.rules.inline.escape.exec(e);if(r)return{type:"escape",raw:r[0],text:Z(r[1])}}tag(e){const r=this.rules.inline.tag.exec(e);if(r)return!this.lexer.state.inLink&&/^<a /i.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):Z(r[0]):r[0]}}link(e){const r=this.rules.inline.link.exec(e);if(r){const n=r[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const a=De(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{const a=jr(r[2],"()");if(a>-1){const o=(r[0].indexOf("!")===0?5:4)+r[1].length+a;r[2]=r[2].substring(0,a),r[0]=r[0].substring(0,o).trim(),r[3]=""}}let t=r[2],i="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(t);a&&(t=a[1],i=a[3])}else i=r[3]?r[3].slice(1,-1):"";return t=t.trim(),/^</.test(t)&&(this.options.pedantic&&!/>$/.test(n)?t=t.slice(1):t=t.slice(1,-1)),Tt(r,{href:t&&t.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},r[0],this.lexer)}}reflink(e,r){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let t=(n[2]||n[1]).replace(/\s+/g," ");if(t=r[t.toLowerCase()],!t){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return Tt(n,t,n[0],this.lexer)}}emStrong(e,r,n=""){let t=this.rules.inline.emStrong.lDelim.exec(e);if(!t||t[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(t[1]||t[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const a=t[0].length-1;let c,o,l=a,m=0;const g=t[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,r=r.slice(-1*e.length+a);(t=g.exec(r))!=null;){if(c=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!c)continue;if(o=c.length,t[3]||t[4]){l+=o;continue}else if((t[5]||t[6])&&a%3&&!((a+o)%3)){m+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l+m);const p=e.slice(0,a+t.index+o+1);if(Math.min(a,o)%2){const v=p.slice(1,-1);return{type:"em",raw:p,text:v,tokens:this.lexer.inlineTokens(v)}}const f=p.slice(2,-2);return{type:"strong",raw:p,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){const r=this.rules.inline.code.exec(e);if(r){let n=r[2].replace(/\n/g," ");const t=/[^ ]/.test(n),i=/^ /.test(n)&&/ $/.test(n);return t&&i&&(n=n.substring(1,n.length-1)),n=Z(n,!0),{type:"codespan",raw:r[0],text:n}}}br(e){const r=this.rules.inline.br.exec(e);if(r)return{type:"br",raw:r[0]}}del(e){const r=this.rules.inline.del.exec(e);if(r)return{type:"del",raw:r[0],text:r[2],tokens:this.lexer.inlineTokens(r[2])}}autolink(e,r){const n=this.rules.inline.autolink.exec(e);if(n){let t,i;return n[2]==="@"?(t=Z(this.options.mangle?r(n[1]):n[1]),i="mailto:"+t):(t=Z(n[1]),i=t),{type:"link",raw:n[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(e,r){let n;if(n=this.rules.inline.url.exec(e)){let t,i;if(n[2]==="@")t=Z(this.options.mangle?r(n[0]):n[0]),i="mailto:"+t;else{let a;do a=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(a!==n[0]);t=Z(n[0]),n[1]==="www."?i="http://"+n[0]:i=n[0]}return{type:"link",raw:n[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(e,r){const n=this.rules.inline.text.exec(e);if(n){let t;return this.lexer.state.inRawBlock?t=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):Z(n[0]):n[0]:t=Z(this.options.smartypants?r(n[0]):n[0]),{type:"text",raw:n[0],text:t}}}}const b={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Be,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};b._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;b._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;b.def=$(b.def).replace("label",b._label).replace("title",b._title).getRegex();b.bullet=/(?:[*+-]|\d{1,9}[.)])/;b.listItemStart=$(/^( *)(bull) */).replace("bull",b.bullet).getRegex();b.list=$(b.list).replace(/bull/g,b.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+b.def.source+")").getRegex();b._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";b._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;b.html=$(b.html,"i").replace("comment",b._comment).replace("tag",b._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();b.lheading=$(b.lheading).replace(/bull/g,b.bullet).getRegex();b.paragraph=$(b._paragraph).replace("hr",b.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",b._tag).getRegex();b.blockquote=$(b.blockquote).replace("paragraph",b.paragraph).getRegex();b.normal={...b};b.gfm={...b.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};b.gfm.table=$(b.gfm.table).replace("hr",b.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",b._tag).getRegex();b.gfm.paragraph=$(b._paragraph).replace("hr",b.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",b.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",b._tag).getRegex();b.pedantic={...b.normal,html:$(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",b._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Be,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:$(b.normal._paragraph).replace("hr",b.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",b.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const w={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Be,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Be,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};w._punctuation="\\p{P}$+<=>`^|~";w.punctuation=$(w.punctuation,"u").replace(/punctuation/g,w._punctuation).getRegex();w.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;w.anyPunctuation=/\\[punct]/g;w._escapes=/\\([punct])/g;w._comment=$(b._comment).replace("(?:-->|$)","-->").getRegex();w.emStrong.lDelim=$(w.emStrong.lDelim,"u").replace(/punct/g,w._punctuation).getRegex();w.emStrong.rDelimAst=$(w.emStrong.rDelimAst,"gu").replace(/punct/g,w._punctuation).getRegex();w.emStrong.rDelimUnd=$(w.emStrong.rDelimUnd,"gu").replace(/punct/g,w._punctuation).getRegex();w.anyPunctuation=$(w.anyPunctuation,"gu").replace(/punct/g,w._punctuation).getRegex();w._escapes=$(w._escapes,"gu").replace(/punct/g,w._punctuation).getRegex();w._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;w._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;w.autolink=$(w.autolink).replace("scheme",w._scheme).replace("email",w._email).getRegex();w._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;w.tag=$(w.tag).replace("comment",w._comment).replace("attribute",w._attribute).getRegex();w._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;w._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;w._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;w.link=$(w.link).replace("label",w._label).replace("href",w._href).replace("title",w._title).getRegex();w.reflink=$(w.reflink).replace("label",w._label).replace("ref",b._label).getRegex();w.nolink=$(w.nolink).replace("ref",b._label).getRegex();w.reflinkSearch=$(w.reflinkSearch,"g").replace("reflink",w.reflink).replace("nolink",w.nolink).getRegex();w.normal={...w};w.pedantic={...w.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:$(/^!?\[(label)\]\((.*?)\)/).replace("label",w._label).getRegex(),reflink:$(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",w._label).getRegex()};w.gfm={...w.normal,escape:$(w.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};w.gfm.url=$(w.gfm.url,"i").replace("email",w.gfm._extended_email).getRegex();w.breaks={...w.gfm,br:$(w.br).replace("{2,}","*").getRegex(),text:$(w.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function Ur(s){return s.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Pt(s){let e="",r,n;const t=s.length;for(r=0;r<t;r++)n=s.charCodeAt(r),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class ae{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||de,this.options.tokenizer=this.options.tokenizer||new Oe,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const r={block:b.normal,inline:w.normal};this.options.pedantic?(r.block=b.pedantic,r.inline=w.pedantic):this.options.gfm&&(r.block=b.gfm,this.options.breaks?r.inline=w.breaks:r.inline=w.gfm),this.tokenizer.rules=r}static get rules(){return{block:b,inline:w}}static lex(e,r){return new ae(r).lex(e)}static lexInline(e,r){return new ae(r).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let r;for(;r=this.inlineQueue.shift();)this.inlineTokens(r.src,r.tokens);return this.tokens}blockTokens(e,r=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(c,o,l)=>o+"    ".repeat(l.length));let n,t,i,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(n=c.call({lexer:this},e,r))?(e=e.substring(n.raw.length),r.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&r.length>0?r[r.length-1].raw+=`
`:r.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),t=r[r.length-1],t&&(t.type==="paragraph"||t.type==="text")?(t.raw+=`
`+n.raw,t.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=t.text):r.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),t=r[r.length-1],t&&(t.type==="paragraph"||t.type==="text")?(t.raw+=`
`+n.raw,t.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=t.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),r.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const o=e.slice(1);let l;this.options.extensions.startBlock.forEach(function(m){l=m.call({lexer:this},o),typeof l=="number"&&l>=0&&(c=Math.min(c,l))}),c<1/0&&c>=0&&(i=e.substring(0,c+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i))){t=r[r.length-1],a&&t.type==="paragraph"?(t.raw+=`
`+n.raw,t.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=t.text):r.push(n),a=i.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),t=r[r.length-1],t&&t.type==="text"?(t.raw+=`
`+n.raw,t.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=t.text):r.push(n);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){let n,t,i,a=e,c,o,l;if(this.tokens.links){const m=Object.keys(this.tokens.links);if(m.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)m.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(o||(l=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(m=>(n=m.call({lexer:this},e,r))?(e=e.substring(n.raw.length),r.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),t=r[r.length-1],t&&n.type==="text"&&t.type==="text"?(t.raw+=n.raw,t.text+=n.text):r.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),t=r[r.length-1],t&&n.type==="text"&&t.type==="text"?(t.raw+=n.raw,t.text+=n.text):r.push(n);continue}if(n=this.tokenizer.emStrong(e,a,l)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.autolink(e,Pt)){e=e.substring(n.raw.length),r.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,Pt))){e=e.substring(n.raw.length),r.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let m=1/0;const g=e.slice(1);let p;this.options.extensions.startInline.forEach(function(f){p=f.call({lexer:this},g),typeof p=="number"&&p>=0&&(m=Math.min(m,p))}),m<1/0&&m>=0&&(i=e.substring(0,m+1))}if(n=this.tokenizer.inlineText(i,Ur)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(l=n.raw.slice(-1)),o=!0,t=r[r.length-1],t&&t.type==="text"?(t.raw+=n.raw,t.text+=n.text):r.push(n);continue}if(e){const m="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return r}}class ze{constructor(e){this.options=e||de}code(e,r,n){const t=(r||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(e,t);i!=null&&i!==e&&(n=!0,e=i)}return e=e.replace(/\n$/,"")+`
`,t?'<pre><code class="'+this.options.langPrefix+Z(t)+'">'+(n?e:Z(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:Z(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,r){return e}heading(e,r,n,t){if(this.options.headerIds){const i=this.options.headerPrefix+t.slug(n);return`<h${r} id="${i}">${e}</h${r}>
`}return`<h${r}>${e}</h${r}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,r,n){const t=r?"ol":"ul",i=r&&n!==1?' start="'+n+'"':"";return"<"+t+i+`>
`+e+"</"+t+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,r){return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,r){const n=r.header?"th":"td";return(r.align?`<${n} align="${r.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,r,n){if(e=bt(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let t='<a href="'+e+'"';return r&&(t+=' title="'+r+'"'),t+=">"+n+"</a>",t}image(e,r,n){if(e=bt(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let t=`<img src="${e}" alt="${n}"`;return r&&(t+=` title="${r}"`),t+=this.options.xhtml?"/>":">",t}text(e){return e}}class Qe{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,r,n){return""+n}image(e,r,n){return""+n}br(){return""}}class Fe{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,r){let n=e,t=0;if(this.seen.hasOwnProperty(n)){t=this.seen[e];do t++,n=e+"-"+t;while(this.seen.hasOwnProperty(n))}return r||(this.seen[e]=t,this.seen[n]=0),n}slug(e,r={}){const n=this.serialize(e);return this.getNextSafeSlug(n,r.dryrun)}}class le{constructor(e){this.options=e||de,this.options.renderer=this.options.renderer||new ze,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Qe,this.slugger=new Fe}static parse(e,r){return new le(r).parse(e)}static parseInline(e,r){return new le(r).parseInline(e)}parse(e,r=!0){let n="",t,i,a,c,o,l,m,g,p,f,v,_,H,D,x,ce,Q,ne,X;const pe=e.length;for(t=0;t<pe;t++){if(f=e[t],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(X=this.options.extensions.renderers[f.type].call({parser:this},f),X!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type))){n+=X||"";continue}switch(f.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(f.tokens),f.depth,Gt(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(f.text,f.lang,f.escaped);continue}case"table":{for(g="",m="",c=f.header.length,i=0;i<c;i++)m+=this.renderer.tablecell(this.parseInline(f.header[i].tokens),{header:!0,align:f.align[i]});for(g+=this.renderer.tablerow(m),p="",c=f.rows.length,i=0;i<c;i++){for(l=f.rows[i],m="",o=l.length,a=0;a<o;a++)m+=this.renderer.tablecell(this.parseInline(l[a].tokens),{header:!1,align:f.align[a]});p+=this.renderer.tablerow(m)}n+=this.renderer.table(g,p);continue}case"blockquote":{p=this.parse(f.tokens),n+=this.renderer.blockquote(p);continue}case"list":{for(v=f.ordered,_=f.start,H=f.loose,c=f.items.length,p="",i=0;i<c;i++)x=f.items[i],ce=x.checked,Q=x.task,D="",x.task&&(ne=this.renderer.checkbox(ce),H?x.tokens.length>0&&x.tokens[0].type==="paragraph"?(x.tokens[0].text=ne+" "+x.tokens[0].text,x.tokens[0].tokens&&x.tokens[0].tokens.length>0&&x.tokens[0].tokens[0].type==="text"&&(x.tokens[0].tokens[0].text=ne+" "+x.tokens[0].tokens[0].text)):x.tokens.unshift({type:"text",text:ne}):D+=ne),D+=this.parse(x.tokens,H),p+=this.renderer.listitem(D,Q,ce);n+=this.renderer.list(p,v,_);continue}case"html":{n+=this.renderer.html(f.text,f.block);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{for(p=f.tokens?this.parseInline(f.tokens):f.text;t+1<pe&&e[t+1].type==="text";)f=e[++t],p+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);n+=r?this.renderer.paragraph(p):p;continue}default:{const ke='Token with "'+f.type+'" type was not found.';if(this.options.silent){console.error(ke);return}else throw new Error(ke)}}}return n}parseInline(e,r){r=r||this.renderer;let n="",t,i,a;const c=e.length;for(t=0;t<c;t++){if(i=e[t],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(a=this.options.extensions.renderers[i.type].call({parser:this},i),a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){n+=a||"";continue}switch(i.type){case"escape":{n+=r.text(i.text);break}case"html":{n+=r.html(i.text);break}case"link":{n+=r.link(i.href,i.title,this.parseInline(i.tokens,r));break}case"image":{n+=r.image(i.href,i.title,i.text);break}case"strong":{n+=r.strong(this.parseInline(i.tokens,r));break}case"em":{n+=r.em(this.parseInline(i.tokens,r));break}case"codespan":{n+=r.codespan(i.text);break}case"br":{n+=r.br();break}case"del":{n+=r.del(this.parseInline(i.tokens,r));break}case"text":{n+=r.text(i.text);break}default:{const o='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(o);return}else throw new Error(o)}}}return n}}class Te{constructor(e){this.options=e||de}preprocess(e){return e}postprocess(e){return e}}J(Te,"passThroughHooks",new Set(["preprocess","postprocess"]));var Pe,qe,Me,Nt;class Yr{constructor(...e){Ge(this,Pe);Ge(this,Me);J(this,"defaults",Je());J(this,"options",this.setOptions);J(this,"parse",Ae(this,Pe,qe).call(this,ae.lex,le.parse));J(this,"parseInline",Ae(this,Pe,qe).call(this,ae.lexInline,le.parseInline));J(this,"Parser",le);J(this,"parser",le.parse);J(this,"Renderer",ze);J(this,"TextRenderer",Qe);J(this,"Lexer",ae);J(this,"lexer",ae.lex);J(this,"Tokenizer",Oe);J(this,"Slugger",Fe);J(this,"Hooks",Te);this.use(...e)}walkTokens(e,r){let n=[];for(const t of e)switch(n=n.concat(r.call(this,t)),t.type){case"table":{for(const i of t.header)n=n.concat(this.walkTokens(i.tokens,r));for(const i of t.rows)for(const a of i)n=n.concat(this.walkTokens(a.tokens,r));break}case"list":{n=n.concat(this.walkTokens(t.items,r));break}default:this.defaults.extensions&&this.defaults.extensions.childTokens&&this.defaults.extensions.childTokens[t.type]?this.defaults.extensions.childTokens[t.type].forEach(i=>{n=n.concat(this.walkTokens(t[i],r))}):t.tokens&&(n=n.concat(this.walkTokens(t.tokens,r)))}return n}use(...e){const r=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const t={...n};if(t.async=this.defaults.async||t.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const a=r.renderers[i.name];a?r.renderers[i.name]=function(...c){let o=i.renderer.apply(this,c);return o===!1&&(o=a.apply(this,c)),o}:r.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");r[i.level]?r[i.level].unshift(i.tokenizer):r[i.level]=[i.tokenizer],i.start&&(i.level==="block"?r.startBlock?r.startBlock.push(i.start):r.startBlock=[i.start]:i.level==="inline"&&(r.startInline?r.startInline.push(i.start):r.startInline=[i.start]))}i.childTokens&&(r.childTokens[i.name]=i.childTokens)}),t.extensions=r),n.renderer){const i=this.defaults.renderer||new ze(this.defaults);for(const a in n.renderer){const c=i[a];i[a]=(...o)=>{let l=n.renderer[a].apply(i,o);return l===!1&&(l=c.apply(i,o)),l}}t.renderer=i}if(n.tokenizer){const i=this.defaults.tokenizer||new Oe(this.defaults);for(const a in n.tokenizer){const c=i[a];i[a]=(...o)=>{let l=n.tokenizer[a].apply(i,o);return l===!1&&(l=c.apply(i,o)),l}}t.tokenizer=i}if(n.hooks){const i=this.defaults.hooks||new Te;for(const a in n.hooks){const c=i[a];Te.passThroughHooks.has(a)?i[a]=o=>{if(this.defaults.async)return Promise.resolve(n.hooks[a].call(i,o)).then(m=>c.call(i,m));const l=n.hooks[a].call(i,o);return c.call(i,l)}:i[a]=(...o)=>{let l=n.hooks[a].apply(i,o);return l===!1&&(l=c.apply(i,o)),l}}t.hooks=i}if(n.walkTokens){const i=this.defaults.walkTokens;t.walkTokens=function(a){let c=[];return c.push(n.walkTokens.call(this,a)),i&&(c=c.concat(i.call(this,a))),c}}this.defaults={...this.defaults,...t}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}}Pe=new WeakSet,qe=function(e,r){return(n,t,i)=>{typeof t=="function"&&(i=t,t=null);const a={...t};t={...this.defaults,...a};const c=Ae(this,Me,Nt).call(this,t.silent,t.async,i);if(typeof n>"u"||n===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(Vr(t,i),t.hooks&&(t.hooks.options=t),i){const o=t.highlight;let l;try{t.hooks&&(n=t.hooks.preprocess(n)),l=e(n,t)}catch(p){return c(p)}const m=p=>{let f;if(!p)try{t.walkTokens&&this.walkTokens(l,t.walkTokens),f=r(l,t),t.hooks&&(f=t.hooks.postprocess(f))}catch(v){p=v}return t.highlight=o,p?c(p):i(null,f)};if(!o||o.length<3||(delete t.highlight,!l.length))return m();let g=0;this.walkTokens(l,p=>{p.type==="code"&&(g++,setTimeout(()=>{o(p.text,p.lang,(f,v)=>{if(f)return m(f);v!=null&&v!==p.text&&(p.text=v,p.escaped=!0),g--,g===0&&m()})},0))}),g===0&&m();return}if(t.async)return Promise.resolve(t.hooks?t.hooks.preprocess(n):n).then(o=>e(o,t)).then(o=>t.walkTokens?Promise.all(this.walkTokens(o,t.walkTokens)).then(()=>o):o).then(o=>r(o,t)).then(o=>t.hooks?t.hooks.postprocess(o):o).catch(c);try{t.hooks&&(n=t.hooks.preprocess(n));const o=e(n,t);t.walkTokens&&this.walkTokens(o,t.walkTokens);let l=r(o,t);return t.hooks&&(l=t.hooks.postprocess(l)),l}catch(o){return c(o)}}},Me=new WeakSet,Nt=function(e,r,n){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Z(t.message+"",!0)+"</pre>";if(r)return Promise.resolve(i);if(n){n(null,i);return}return i}if(r)return Promise.reject(t);if(n){n(t);return}throw t}};const ge=new Yr(de);function M(s,e,r){return ge.parse(s,e,r)}M.options=M.setOptions=function(s){return ge.setOptions(s),M.defaults=ge.defaults,Mt(M.defaults),M};M.getDefaults=Je;M.defaults=de;M.use=function(...s){return ge.use(...s),M.defaults=ge.defaults,Mt(M.defaults),M};M.walkTokens=function(s,e){return ge.walkTokens(s,e)};M.parseInline=ge.parseInline;M.Parser=le;M.parser=le.parse;M.Renderer=ze;M.TextRenderer=Qe;M.Lexer=ae;M.lexer=ae.lex;M.Tokenizer=Oe;M.Slugger=Fe;M.Hooks=Te;M.parse=M;M.options;M.setOptions;M.use;M.walkTokens;M.parseInline;le.parse;ae.lex;const Lt={};function Zr(s){let e;return{c(){e=ye(s[1])},l(r){e=be(r,s[1])},m(r,n){S(r,e,n)},p(r,n){n&2&&_e(e,r[1])},i:L,o:L,d(r){r&&u(e)}}}function Jr(s){let e,r;const n=s[5].default,t=q(n,s,s[4],null);return{c(){e=P("h6"),t&&t.c(),this.h()},l(i){e=C(i,"H6",{id:!0});var a=R(e);t&&t.l(a),a.forEach(u),this.h()},h(){y(e,"id",s[2])},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,a){t&&t.p&&(!r||a&16)&&K(t,n,i,i[4],r?V(n,i[4],a,null):j(i[4]),null),(!r||a&4)&&y(e,"id",i[2])},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function Qr(s){let e,r;const n=s[5].default,t=q(n,s,s[4],null);return{c(){e=P("h5"),t&&t.c(),this.h()},l(i){e=C(i,"H5",{id:!0});var a=R(e);t&&t.l(a),a.forEach(u),this.h()},h(){y(e,"id",s[2])},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,a){t&&t.p&&(!r||a&16)&&K(t,n,i,i[4],r?V(n,i[4],a,null):j(i[4]),null),(!r||a&4)&&y(e,"id",i[2])},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function Xr(s){let e,r;const n=s[5].default,t=q(n,s,s[4],null);return{c(){e=P("h4"),t&&t.c(),this.h()},l(i){e=C(i,"H4",{id:!0});var a=R(e);t&&t.l(a),a.forEach(u),this.h()},h(){y(e,"id",s[2])},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,a){t&&t.p&&(!r||a&16)&&K(t,n,i,i[4],r?V(n,i[4],a,null):j(i[4]),null),(!r||a&4)&&y(e,"id",i[2])},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function en(s){let e,r;const n=s[5].default,t=q(n,s,s[4],null);return{c(){e=P("h3"),t&&t.c(),this.h()},l(i){e=C(i,"H3",{id:!0});var a=R(e);t&&t.l(a),a.forEach(u),this.h()},h(){y(e,"id",s[2])},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,a){t&&t.p&&(!r||a&16)&&K(t,n,i,i[4],r?V(n,i[4],a,null):j(i[4]),null),(!r||a&4)&&y(e,"id",i[2])},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function tn(s){let e,r;const n=s[5].default,t=q(n,s,s[4],null);return{c(){e=P("h2"),t&&t.c(),this.h()},l(i){e=C(i,"H2",{id:!0});var a=R(e);t&&t.l(a),a.forEach(u),this.h()},h(){y(e,"id",s[2])},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,a){t&&t.p&&(!r||a&16)&&K(t,n,i,i[4],r?V(n,i[4],a,null):j(i[4]),null),(!r||a&4)&&y(e,"id",i[2])},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function rn(s){let e,r;const n=s[5].default,t=q(n,s,s[4],null);return{c(){e=P("h1"),t&&t.c(),this.h()},l(i){e=C(i,"H1",{id:!0});var a=R(e);t&&t.l(a),a.forEach(u),this.h()},h(){y(e,"id",s[2])},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,a){t&&t.p&&(!r||a&16)&&K(t,n,i,i[4],r?V(n,i[4],a,null):j(i[4]),null),(!r||a&4)&&y(e,"id",i[2])},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function nn(s){let e,r,n,t;const i=[rn,tn,en,Xr,Qr,Jr,Zr],a=[];function c(o,l){return o[0]===1?0:o[0]===2?1:o[0]===3?2:o[0]===4?3:o[0]===5?4:o[0]===6?5:6}return e=c(s),r=a[e]=i[e](s),{c(){r.c(),n=k()},l(o){r.l(o),n=k()},m(o,l){a[e].m(o,l),S(o,n,l),t=!0},p(o,[l]){let m=e;e=c(o),e===m?a[e].p(o,l):(W(),d(a[m],1,1,()=>{a[m]=null}),F(),r=a[e],r?r.p(o,l):(r=a[e]=i[e](o),r.c()),h(r,1),r.m(n.parentNode,n))},i(o){t||(h(r),t=!0)},o(o){d(r),t=!1},d(o){o&&u(n),a[e].d(o)}}}function an(s,e,r){let n,{$$slots:t={},$$scope:i}=e,{depth:a}=e,{raw:c}=e,{text:o}=e;const{slug:l,getOptions:m}=Jt(Lt),g=m();return s.$$set=p=>{"depth"in p&&r(0,a=p.depth),"raw"in p&&r(1,c=p.raw),"text"in p&&r(3,o=p.text),"$$scope"in p&&r(4,i=p.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&r(2,n=g.headerIds?g.headerPrefix+l(o):void 0)},[a,c,n,o,i,t]}class on extends O{constructor(e){super(),z(this,e,an,nn,B,{depth:0,raw:1,text:3})}}function sn(s){let e,r;const n=s[1].default,t=q(n,s,s[0],null);return{c(){e=P("p"),t&&t.c()},l(i){e=C(i,"P",{});var a=R(e);t&&t.l(a),a.forEach(u)},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,[a]){t&&t.p&&(!r||a&1)&&K(t,n,i,i[0],r?V(n,i[0],a,null):j(i[0]),null)},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function cn(s,e,r){let{$$slots:n={},$$scope:t}=e;return s.$$set=i=>{"$$scope"in i&&r(0,t=i.$$scope)},[t,n]}class ln extends O{constructor(e){super(),z(this,e,cn,sn,B,{})}}function mn(s){let e;const r=s[3].default,n=q(r,s,s[2],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,i){n&&n.m(t,i),e=!0},p(t,[i]){n&&n.p&&(!e||i&4)&&K(n,r,t,t[2],e?V(r,t[2],i,null):j(t[2]),null)},i(t){e||(h(n,t),e=!0)},o(t){d(n,t),e=!1},d(t){n&&n.d(t)}}}function un(s,e,r){let{$$slots:n={},$$scope:t}=e,{text:i}=e,{raw:a}=e;return s.$$set=c=>{"text"in c&&r(0,i=c.text),"raw"in c&&r(1,a=c.raw),"$$scope"in c&&r(2,t=c.$$scope)},[i,a,t,n]}class hn extends O{constructor(e){super(),z(this,e,un,mn,B,{text:0,raw:1})}}function dn(s){let e,r;return{c(){e=P("img"),this.h()},l(n){e=C(n,"IMG",{src:!0,title:!0,alt:!0}),this.h()},h(){Re(e.src,r=s[0])||y(e,"src",r),y(e,"title",s[1]),y(e,"alt",s[2])},m(n,t){S(n,e,t)},p(n,[t]){t&1&&!Re(e.src,r=n[0])&&y(e,"src",r),t&2&&y(e,"title",n[1]),t&4&&y(e,"alt",n[2])},i:L,o:L,d(n){n&&u(e)}}}function pn(s,e,r){let{href:n=""}=e,{title:t=void 0}=e,{text:i=""}=e;return s.$$set=a=>{"href"in a&&r(0,n=a.href),"title"in a&&r(1,t=a.title),"text"in a&&r(2,i=a.text)},[n,t,i]}class fn extends O{constructor(e){super(),z(this,e,pn,dn,B,{href:0,title:1,text:2})}}function gn(s){let e,r;const n=s[3].default,t=q(n,s,s[2],null);return{c(){e=P("a"),t&&t.c(),this.h()},l(i){e=C(i,"A",{href:!0,title:!0});var a=R(e);t&&t.l(a),a.forEach(u),this.h()},h(){y(e,"href",s[0]),y(e,"title",s[1])},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,[a]){t&&t.p&&(!r||a&4)&&K(t,n,i,i[2],r?V(n,i[2],a,null):j(i[2]),null),(!r||a&1)&&y(e,"href",i[0]),(!r||a&2)&&y(e,"title",i[1])},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function Sn(s,e,r){let{$$slots:n={},$$scope:t}=e,{href:i=""}=e,{title:a=void 0}=e;return s.$$set=c=>{"href"in c&&r(0,i=c.href),"title"in c&&r(1,a=c.title),"$$scope"in c&&r(2,t=c.$$scope)},[i,a,t,n]}class wn extends O{constructor(e){super(),z(this,e,Sn,gn,B,{href:0,title:1})}}function vn(s){let e,r;const n=s[1].default,t=q(n,s,s[0],null);return{c(){e=P("em"),t&&t.c()},l(i){e=C(i,"EM",{});var a=R(e);t&&t.l(a),a.forEach(u)},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,[a]){t&&t.p&&(!r||a&1)&&K(t,n,i,i[0],r?V(n,i[0],a,null):j(i[0]),null)},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function yn(s,e,r){let{$$slots:n={},$$scope:t}=e;return s.$$set=i=>{"$$scope"in i&&r(0,t=i.$$scope)},[t,n]}class bn extends O{constructor(e){super(),z(this,e,yn,vn,B,{})}}function kn(s){let e,r;const n=s[1].default,t=q(n,s,s[0],null);return{c(){e=P("del"),t&&t.c()},l(i){e=C(i,"DEL",{});var a=R(e);t&&t.l(a),a.forEach(u)},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,[a]){t&&t.p&&(!r||a&1)&&K(t,n,i,i[0],r?V(n,i[0],a,null):j(i[0]),null)},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function Tn(s,e,r){let{$$slots:n={},$$scope:t}=e;return s.$$set=i=>{"$$scope"in i&&r(0,t=i.$$scope)},[t,n]}class Pn extends O{constructor(e){super(),z(this,e,Tn,kn,B,{})}}function Cn(s){let e,r=s[0].replace(/`/g,"")+"",n;return{c(){e=P("code"),n=ye(r)},l(t){e=C(t,"CODE",{});var i=R(e);n=be(i,r),i.forEach(u)},m(t,i){S(t,e,i),ie(e,n)},p(t,[i]){i&1&&r!==(r=t[0].replace(/`/g,"")+"")&&_e(n,r)},i:L,o:L,d(t){t&&u(e)}}}function _n(s,e,r){let{raw:n}=e;return s.$$set=t=>{"raw"in t&&r(0,n=t.raw)},[n]}class An extends O{constructor(e){super(),z(this,e,_n,Cn,B,{raw:0})}}function In(s){let e,r;const n=s[1].default,t=q(n,s,s[0],null);return{c(){e=P("strong"),t&&t.c()},l(i){e=C(i,"STRONG",{});var a=R(e);t&&t.l(a),a.forEach(u)},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,[a]){t&&t.p&&(!r||a&1)&&K(t,n,i,i[0],r?V(n,i[0],a,null):j(i[0]),null)},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function En(s,e,r){let{$$slots:n={},$$scope:t}=e;return s.$$set=i=>{"$$scope"in i&&r(0,t=i.$$scope)},[t,n]}class Dn extends O{constructor(e){super(),z(this,e,En,In,B,{})}}function xn(s){let e,r;const n=s[1].default,t=q(n,s,s[0],null);return{c(){e=P("table"),t&&t.c()},l(i){e=C(i,"TABLE",{});var a=R(e);t&&t.l(a),a.forEach(u)},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,[a]){t&&t.p&&(!r||a&1)&&K(t,n,i,i[0],r?V(n,i[0],a,null):j(i[0]),null)},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function Rn(s,e,r){let{$$slots:n={},$$scope:t}=e;return s.$$set=i=>{"$$scope"in i&&r(0,t=i.$$scope)},[t,n]}class Bn extends O{constructor(e){super(),z(this,e,Rn,xn,B,{})}}function On(s){let e,r;const n=s[1].default,t=q(n,s,s[0],null);return{c(){e=P("thead"),t&&t.c()},l(i){e=C(i,"THEAD",{});var a=R(e);t&&t.l(a),a.forEach(u)},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,[a]){t&&t.p&&(!r||a&1)&&K(t,n,i,i[0],r?V(n,i[0],a,null):j(i[0]),null)},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function zn(s,e,r){let{$$slots:n={},$$scope:t}=e;return s.$$set=i=>{"$$scope"in i&&r(0,t=i.$$scope)},[t,n]}class $n extends O{constructor(e){super(),z(this,e,zn,On,B,{})}}function Mn(s){let e,r;const n=s[1].default,t=q(n,s,s[0],null);return{c(){e=P("tbody"),t&&t.c()},l(i){e=C(i,"TBODY",{});var a=R(e);t&&t.l(a),a.forEach(u)},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,[a]){t&&t.p&&(!r||a&1)&&K(t,n,i,i[0],r?V(n,i[0],a,null):j(i[0]),null)},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function Wn(s,e,r){let{$$slots:n={},$$scope:t}=e;return s.$$set=i=>{"$$scope"in i&&r(0,t=i.$$scope)},[t,n]}class Fn extends O{constructor(e){super(),z(this,e,Wn,Mn,B,{})}}function Gn(s){let e,r;const n=s[1].default,t=q(n,s,s[0],null);return{c(){e=P("tr"),t&&t.c()},l(i){e=C(i,"TR",{});var a=R(e);t&&t.l(a),a.forEach(u)},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,[a]){t&&t.p&&(!r||a&1)&&K(t,n,i,i[0],r?V(n,i[0],a,null):j(i[0]),null)},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function Nn(s,e,r){let{$$slots:n={},$$scope:t}=e;return s.$$set=i=>{"$$scope"in i&&r(0,t=i.$$scope)},[t,n]}class Ln extends O{constructor(e){super(),z(this,e,Nn,Gn,B,{})}}function qn(s){let e,r;const n=s[3].default,t=q(n,s,s[2],null);return{c(){e=P("td"),t&&t.c(),this.h()},l(i){e=C(i,"TD",{align:!0});var a=R(e);t&&t.l(a),a.forEach(u),this.h()},h(){y(e,"align",s[1])},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,a){t&&t.p&&(!r||a&4)&&K(t,n,i,i[2],r?V(n,i[2],a,null):j(i[2]),null),(!r||a&2)&&y(e,"align",i[1])},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function Kn(s){let e,r;const n=s[3].default,t=q(n,s,s[2],null);return{c(){e=P("th"),t&&t.c(),this.h()},l(i){e=C(i,"TH",{align:!0});var a=R(e);t&&t.l(a),a.forEach(u),this.h()},h(){y(e,"align",s[1])},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,a){t&&t.p&&(!r||a&4)&&K(t,n,i,i[2],r?V(n,i[2],a,null):j(i[2]),null),(!r||a&2)&&y(e,"align",i[1])},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function jn(s){let e,r,n,t;const i=[Kn,qn],a=[];function c(o,l){return o[0]?0:1}return e=c(s),r=a[e]=i[e](s),{c(){r.c(),n=k()},l(o){r.l(o),n=k()},m(o,l){a[e].m(o,l),S(o,n,l),t=!0},p(o,[l]){let m=e;e=c(o),e===m?a[e].p(o,l):(W(),d(a[m],1,1,()=>{a[m]=null}),F(),r=a[e],r?r.p(o,l):(r=a[e]=i[e](o),r.c()),h(r,1),r.m(n.parentNode,n))},i(o){t||(h(r),t=!0)},o(o){d(r),t=!1},d(o){o&&u(n),a[e].d(o)}}}function Vn(s,e,r){let{$$slots:n={},$$scope:t}=e,{header:i}=e,{align:a}=e;return s.$$set=c=>{"header"in c&&r(0,i=c.header),"align"in c&&r(1,a=c.align),"$$scope"in c&&r(2,t=c.$$scope)},[i,a,t,n]}class Hn extends O{constructor(e){super(),z(this,e,Vn,jn,B,{header:0,align:1})}}function Un(s){let e,r;const n=s[3].default,t=q(n,s,s[2],null);return{c(){e=P("ul"),t&&t.c()},l(i){e=C(i,"UL",{});var a=R(e);t&&t.l(a),a.forEach(u)},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,a){t&&t.p&&(!r||a&4)&&K(t,n,i,i[2],r?V(n,i[2],a,null):j(i[2]),null)},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function Yn(s){let e,r;const n=s[3].default,t=q(n,s,s[2],null);return{c(){e=P("ol"),t&&t.c(),this.h()},l(i){e=C(i,"OL",{start:!0});var a=R(e);t&&t.l(a),a.forEach(u),this.h()},h(){y(e,"start",s[1])},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,a){t&&t.p&&(!r||a&4)&&K(t,n,i,i[2],r?V(n,i[2],a,null):j(i[2]),null),(!r||a&2)&&y(e,"start",i[1])},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function Zn(s){let e,r,n,t;const i=[Yn,Un],a=[];function c(o,l){return o[0]?0:1}return e=c(s),r=a[e]=i[e](s),{c(){r.c(),n=k()},l(o){r.l(o),n=k()},m(o,l){a[e].m(o,l),S(o,n,l),t=!0},p(o,[l]){let m=e;e=c(o),e===m?a[e].p(o,l):(W(),d(a[m],1,1,()=>{a[m]=null}),F(),r=a[e],r?r.p(o,l):(r=a[e]=i[e](o),r.c()),h(r,1),r.m(n.parentNode,n))},i(o){t||(h(r),t=!0)},o(o){d(r),t=!1},d(o){o&&u(n),a[e].d(o)}}}function Jn(s,e,r){let{$$slots:n={},$$scope:t}=e,{ordered:i}=e,{start:a}=e;return s.$$set=c=>{"ordered"in c&&r(0,i=c.ordered),"start"in c&&r(1,a=c.start),"$$scope"in c&&r(2,t=c.$$scope)},[i,a,t,n]}class Qn extends O{constructor(e){super(),z(this,e,Jn,Zn,B,{ordered:0,start:1})}}function Xn(s){let e,r;const n=s[1].default,t=q(n,s,s[0],null);return{c(){e=P("li"),t&&t.c()},l(i){e=C(i,"LI",{});var a=R(e);t&&t.l(a),a.forEach(u)},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,[a]){t&&t.p&&(!r||a&1)&&K(t,n,i,i[0],r?V(n,i[0],a,null):j(i[0]),null)},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function ei(s,e,r){let{$$slots:n={},$$scope:t}=e;return s.$$set=i=>{"$$scope"in i&&r(0,t=i.$$scope)},[t,n]}class ti extends O{constructor(e){super(),z(this,e,ei,Xn,B,{})}}function ri(s){let e;return{c(){e=P("hr")},l(r){e=C(r,"HR",{})},m(r,n){S(r,e,n)},p:L,i:L,o:L,d(r){r&&u(e)}}}class ni extends O{constructor(e){super(),z(this,e,null,ri,B,{})}}function ii(s){let e,r;return{c(){e=new Ot(!1),r=k(),this.h()},l(n){e=zt(n,!1),r=k(),this.h()},h(){e.a=r},m(n,t){e.m(s[0],n,t),S(n,r,t)},p(n,[t]){t&1&&e.p(n[0])},i:L,o:L,d(n){n&&(u(r),e.d())}}}function ai(s,e,r){let{text:n}=e;return s.$$set=t=>{"text"in t&&r(0,n=t.text)},[n]}class oi extends O{constructor(e){super(),z(this,e,ai,ii,B,{text:0})}}function si(s){let e,r;const n=s[1].default,t=q(n,s,s[0],null);return{c(){e=P("blockquote"),t&&t.c()},l(i){e=C(i,"BLOCKQUOTE",{});var a=R(e);t&&t.l(a),a.forEach(u)},m(i,a){S(i,e,a),t&&t.m(e,null),r=!0},p(i,[a]){t&&t.p&&(!r||a&1)&&K(t,n,i,i[0],r?V(n,i[0],a,null):j(i[0]),null)},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function ci(s,e,r){let{$$slots:n={},$$scope:t}=e;return s.$$set=i=>{"$$scope"in i&&r(0,t=i.$$scope)},[t,n]}class li extends O{constructor(e){super(),z(this,e,ci,si,B,{})}}function mi(s){let e,r,n;return{c(){e=P("pre"),r=P("code"),n=ye(s[1]),this.h()},l(t){e=C(t,"PRE",{class:!0});var i=R(e);r=C(i,"CODE",{});var a=R(r);n=be(a,s[1]),a.forEach(u),i.forEach(u),this.h()},h(){y(e,"class",s[0])},m(t,i){S(t,e,i),ie(e,r),ie(r,n)},p(t,[i]){i&2&&_e(n,t[1]),i&1&&y(e,"class",t[0])},i:L,o:L,d(t){t&&u(e)}}}function ui(s,e,r){let{lang:n}=e,{text:t}=e;return s.$$set=i=>{"lang"in i&&r(0,n=i.lang),"text"in i&&r(1,t=i.text)},[n,t]}class hi extends O{constructor(e){super(),z(this,e,ui,mi,B,{lang:0,text:1})}}function di(s){let e,r;const n=s[1].default,t=q(n,s,s[0],null);return{c(){e=P("br"),t&&t.c()},l(i){e=C(i,"BR",{}),t&&t.l(i)},m(i,a){S(i,e,a),t&&t.m(i,a),r=!0},p(i,[a]){t&&t.p&&(!r||a&1)&&K(t,n,i,i[0],r?V(n,i[0],a,null):j(i[0]),null)},i(i){r||(h(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i)}}}function pi(s,e,r){let{$$slots:n={},$$scope:t}=e;return s.$$set=i=>{"$$scope"in i&&r(0,t=i.$$scope)},[t,n]}class fi extends O{constructor(e){super(),z(this,e,pi,di,B,{})}}const gi={heading:on,paragraph:ln,text:hn,image:fn,link:wn,em:bn,strong:Dn,codespan:An,del:Pn,table:Bn,tablehead:$n,tablebody:Fn,tablerow:Ln,tablecell:Hn,list:Qn,orderedlistitem:null,unorderedlistitem:null,listitem:ti,hr:ni,html:oi,blockquote:li,code:hi,br:fi},Si={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function wi(s){let e,r;return e=new Se({props:{tokens:s[0],renderers:s[1]}}),{c(){A(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,t){I(e,n,t),r=!0},p(n,[t]){const i={};t&1&&(i.tokens=n[0]),t&2&&(i.renderers=n[1]),e.$set(i)},i(n){r||(h(e.$$.fragment,n),r=!0)},o(n){d(e.$$.fragment,n),r=!1},d(n){E(e,n)}}}function vi(s,e,r){let n,t,i,a,{source:c=[]}=e,{renderers:o={}}=e,{options:l={}}=e,{isInline:m=!1}=e;const g=Qt();let p,f,v;return Xt(Lt,{slug:_=>t?t.slug(_):"",getOptions:()=>i}),He(()=>{r(7,v=!0)}),s.$$set=_=>{"source"in _&&r(2,c=_.source),"renderers"in _&&r(3,o=_.renderers),"options"in _&&r(4,l=_.options),"isInline"in _&&r(5,m=_.isInline)},s.$$.update=()=>{s.$$.dirty&4&&r(8,n=Array.isArray(c)),s.$$.dirty&4&&(t=c?new Fe:void 0),s.$$.dirty&16&&r(9,i={...Si,...l}),s.$$.dirty&869&&(n?r(0,p=c):(r(6,f=new ae(i)),r(0,p=m?f.inlineTokens(c):f.lex(c)),g("parsed",{tokens:p}))),s.$$.dirty&8&&r(1,a={...gi,...o}),s.$$.dirty&385&&v&&!n&&g("parsed",{tokens:p})},[p,a,c,o,l,m,f,v,n,i]}class yi extends O{constructor(e){super(),z(this,e,vi,wi,B,{source:2,renderers:3,options:4,isInline:5})}}const bi=(s,e)=>{const r=Ue(e),n=localStorage.getItem(s);return n!=null&&r.set(JSON.parse(n)),r.subscribe(t=>{t==null?localStorage.removeItem(s):localStorage.setItem(s,JSON.stringify(t))}),window.addEventListener("storage",()=>{const t=localStorage.getItem(s);if(t==null)return;const i=JSON.parse(t);i!==Ce(r)&&r.set(i)}),r},Ke=bi("config",{keepHeader:!0}),ki={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},Ti={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},Pi="[^aeiou]",Xe="[aeiouy]",he="("+Pi+"[^aeiouy]*)",$e="("+Xe+"[aeiou]*)",Ne=new RegExp("^"+he+"?"+$e+he),Ci=new RegExp("^"+he+"?"+$e+he+$e+"?$"),Ee=new RegExp("^"+he+"?("+$e+he+"){2,}"),Ct=new RegExp("^"+he+"?"+Xe),_t=new RegExp("^"+he+Xe+"[^aeiouwxy]$"),_i=/ll$/,Ai=/^(.+?)e$/,Ii=/^(.+?)y$/,Ei=/^(.+?(s|t))(ion)$/,Di=/^(.+?)(ed|ing)$/,xi=/(at|bl|iz)$/,Ri=/^(.+?)eed$/,Bi=/^.+?[^s]s$/,Oi=/^.+?(ss|i)es$/,zi=/([^aeiouylsz])\1$/,$i=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,Mi=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,Wi=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;function Fi(s){let e=String(s).toLowerCase();if(e.length<3)return e;let r=!1;e.codePointAt(0)===121&&(r=!0,e="Y"+e.slice(1)),Oi.test(e)?e=e.slice(0,-2):Bi.test(e)&&(e=e.slice(0,-1));let n;return(n=Ri.exec(e))?Ne.test(n[1])&&(e=e.slice(0,-1)):(n=Di.exec(e))&&Ct.test(n[1])&&(e=n[1],xi.test(e)?e+="e":zi.test(e)?e=e.slice(0,-1):_t.test(e)&&(e+="e")),(n=Ii.exec(e))&&Ct.test(n[1])&&(e=n[1]+"i"),(n=$i.exec(e))&&Ne.test(n[1])&&(e=n[1]+ki[n[2]]),(n=Mi.exec(e))&&Ne.test(n[1])&&(e=n[1]+Ti[n[2]]),(n=Wi.exec(e))?Ee.test(n[1])&&(e=n[1]):(n=Ei.exec(e))&&Ee.test(n[1])&&(e=n[1]),(n=Ai.exec(e))&&(Ee.test(n[1])||Ci.test(n[1])&&!_t.test(n[1]))&&(e=n[1]),_i.test(e)&&Ee.test(e)&&(e=e.slice(0,-1)),r&&(e="y"+e.slice(1)),e}const we=Ue(""),qt=Ye(we,s=>s.toLowerCase());Ye(qt,s=>Fi(s));function Gi(s){let e,r;return{c(){e=P("img"),this.h()},l(n){e=C(n,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Re(e.src,r=s[0].replace("../static",""))||y(e,"src",r),y(e,"title",s[1]),y(e,"alt",s[2]),y(e,"class","svelte-1gl2z3f")},m(n,t){S(n,e,t)},p(n,[t]){t&1&&!Re(e.src,r=n[0].replace("../static",""))&&y(e,"src",r),t&2&&y(e,"title",n[1]),t&4&&y(e,"alt",n[2])},i:L,o:L,d(n){n&&u(e)}}}function Ni(s,e,r){let{href:n=""}=e,{title:t=""}=e,{text:i=""}=e;return s.$$set=a=>{"href"in a&&r(0,n=a.href),"title"in a&&r(1,t=a.title),"text"in a&&r(2,i=a.text)},[n,t,i]}class Li extends O{constructor(e){super(),z(this,e,Ni,Gi,B,{href:0,title:1,text:2})}}function At(s){let e,r;return e=new yi({props:{source:s[0]+" ",renderers:{image:Li}}}),{c(){A(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,t){I(e,n,t),r=!0},p(n,t){const i={};t&1&&(i.source=n[0]+" "),e.$set(i)},i(n){r||(h(e.$$.fragment,n),r=!0)},o(n){d(e.$$.fragment,n),r=!1},d(n){E(e,n)}}}function qi(s){let e,r,n=s[0].length!=0&&At(s);return{c(){n&&n.c(),e=k()},l(t){n&&n.l(t),e=k()},m(t,i){n&&n.m(t,i),S(t,e,i),r=!0},p(t,[i]){t[0].length!=0?n?(n.p(t,i),i&1&&h(n,1)):(n=At(t),n.c(),h(n,1),n.m(e.parentNode,e)):n&&(W(),d(n,1,1,()=>{n=null}),F())},i(t){r||(h(n),r=!0)},o(t){d(n),r=!1},d(t){t&&u(e),n&&n.d(t)}}}const Ki=/\[[#A-Za-z:,?-]+\]/gi;function ji(s,e){return s!=null&&s.filter(r=>r.toLowerCase().includes(e.toLowerCase())).length>0}function Vi(s,e){return s.toLowerCase().includes(e.toLowerCase())}function Hi(s){let e=s.match(Ki);return e!=null?e.flatMap(r=>r.substring(1,r.length-1).split(",")):[]}function Ui(s,e,r){let n,t,i,a,c,o,l;ve(s,Ke,v=>r(4,o=v)),ve(s,qt,v=>r(5,l=v));let{block:m}=e;function g(v,_,H){let D="";for(let x=0;x<_.length;x++)f(_[x],a[x],v,H)&&(D+=_[x]+`
`);return D.trim()}function p(v){return v&&n}function f(v,_,H,D){return H==""||p(D)||Vi(v,H)||ji(_,H)}return s.$$set=v=>{"block"in v&&r(1,m=v.block)},s.$$.update=()=>{s.$$.dirty&2&&(n=m.trim().startsWith("#")),s.$$.dirty&2&&r(3,t=m.split(`
`)),s.$$.dirty&8&&r(2,i=t.map(v=>v.replace(/(\[[#A-Za-z:,?-]+\])/g,""))),s.$$.dirty&8&&(a=t.map(v=>Hi(v))),s.$$.dirty&52&&r(0,c=g(l,i,o.keepHeader))},[c,m,i,t,o,l]}class Yi extends O{constructor(e){super(),z(this,e,Ui,qi,B,{block:1})}}function It(s,e,r){const n=s.slice();return n[1]=e[r],n}function Et(s){let e,r;return e=new Yi({props:{block:s[1]}}),{c(){A(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,t){I(e,n,t),r=!0},p(n,t){const i={};t&1&&(i.block=n[1]),e.$set(i)},i(n){r||(h(e.$$.fragment,n),r=!0)},o(n){d(e.$$.fragment,n),r=!1},d(n){E(e,n)}}}function Zi(s){let e,r,n=Y(s[0]),t=[];for(let a=0;a<n.length;a+=1)t[a]=Et(It(s,n,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=k()},l(a){for(let c=0;c<t.length;c+=1)t[c].l(a);e=k()},m(a,c){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(a,c);S(a,e,c),r=!0},p(a,[c]){if(c&1){n=Y(a[0]);let o;for(o=0;o<n.length;o+=1){const l=It(a,n,o);t[o]?(t[o].p(l,c),h(t[o],1)):(t[o]=Et(l),t[o].c(),h(t[o],1),t[o].m(e.parentNode,e))}for(W(),o=n.length;o<t.length;o+=1)i(o);F()}},i(a){if(!r){for(let c=0;c<n.length;c+=1)h(t[c]);r=!0}},o(a){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)d(t[c]);r=!1},d(a){a&&u(e),ue(t,a)}}}function Ji(s,e,r){let{textBlocks:n}=e;return s.$$set=t=>{"textBlocks"in t&&r(0,n=t.textBlocks)},[n]}class Qi extends O{constructor(e){super(),z(this,e,Ji,Zi,B,{textBlocks:0})}}const Xi=`# Manifesto for Agile Software Development

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

`,ea=`## Preamble

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

`,ta=`# Purpose of the Kanban Guide

By reducing Kanban[KanbanFramework] to its essential components, the hope is that this guide will be a unifying reference for the community.
By building upon Kanban[KanbanFramework] fundamentals, the strategy presented here can accommodate the full spectrum of value delivery[ValueDelivery] and organizational challenges.

Any use of the word Kanban in this document specifically means the holistic set of concepts in this guide.

© 2019-2020 Orderly Disruption Limited, Daniel S. Vacanti, Inc.

This publication is offered for license under the Attribution ShareAlike license of Creative Commons, accessible at http://creativecommons.org/licenses/by-sa/4.0/legalcode and also described in summary form at http://creativecommons.org/licenses/by-sa/4.0/, By using this Kanban Guide, you acknowledge that you have read and agree to be bound by the terms of the Attribution ShareAlike license of Creative Commons.

# Definition of Kanban

Kanban[KanbanFramework] is a strategy for optimizing the flow[Flow] of value[Value] through a process that uses a visual, pull-based system[PullSystem].
There may be various ways to define value[Value], including consideration of the needs of the customer, the end-user, the organization[Organization], and the environment, for example.

Kanban[KanbanFramework] comprises the following three practices working in tandem:

- Defining and visualizing a workflow[Workflow]
- Actively managing items in a workflow[Workflow]
- Improving a workflow[Workflow]

In their implementation, these Kanban practices are collectively called a Kanban system[KanbanSystem].
Those who participate in the value delivery[ValueDelivery] of a Kanban system[KanbanSystem] are called Kanban system members[KanbanSystemMembers].

# Why Use Kanban?

Central to the definition of Kanban[KanbanFramework] is the concept of flow[Flow].
Flow[Flow] is the movement of potential value[Value] through a system.
As most workflows[Workflow] exist to optimize value[Value], the strategy of Kanban[KanbanFramework] is to optimize value[Value] by optimizing flow[Flow].
Optimization does not necessarily imply maximization.
Rather, value optimization[ValueOptimization] means striving to find the right balance of effectiveness, efficiency, and predictability in how work gets done:

- An effective workflow[Workflow] is one that delivers what customers want when they want it.
- An efficient workflow[Workflow] allocates available economic resources as optimally as possible to deliver value[Value].
- A predictable workflow[Workflow] means being able to accurately forecast value delivery[ValueDelivery] within an acceptable degree of uncertainty.

The strategy of Kanban[KanbanFramework] is to get members to ask the right questions sooner as part of a continuous improvement[ContinuousImprovement] effort in pursuit of these goals.
Only by finding a sustainable balance among these three elements can value optimization[ValueOptimization] be achieved.

Because Kanban[KanbanFramework] can work with virtually any workflow[Workflow], its application is not limited to any one industry or context.
Professional knowledge workers, such as those in finance, marketing, healthcare, and software (to name a few), have benefited from Kanban practices[KanbanPractices].

# Kanban Theory

Kanban[KanbanFramework] draws on established flow theory[FlowTheory], including but not limited to: systems thinking[SystemsThinking], lean principles[LeanPrinciples], queuing theory[QueuingTheory] (batch size and queue size), variability, and quality control.
Continually improving a Kanban system[KanbanSystem] over time based on these theories is one way that organizations[Organization] can attempt to optimize the delivery of value[Value].

The theory upon which Kanban[KanbanFramework] is based is also shared by many existing value-oriented methodologies and frameworks.
Because of these similarities, Kanban[KanbanFramework] can and should be used to augment those delivery techniques.

# Kanban Practices[KanbanPractices]

## Defining and Visualizing the Workflow[Workflow]

Optimizing flow[Flow] requires defining what flow[Flow] means in a given context.
The explicit shared understanding of flow[Flow] among Kanban system members[KanbanSystemMembers] within their context is called a Definition of Workflow[DefinitionOfWorkflow] (DoW).
DoW[DefinitionOfWorkflow] is a fundamental concept of Kanban[KanbanFramework].
All other elements of this guide depend heavily on how workflow[Workflow] is defined.

_At minimum_, members must create their DoW[DefinitionOfWorkflow] using all of the following elements:

- A definition of the individual units of value[Value] that are moving through the workflow[Workflow]. These units of value[Value] are referred to as work items[WorkItems] (or items).
- A definition for when work items[WorkItems] are started and finished within the workflow[Workflow]. Your workflow[Workflow] may have more than one started or finished points depending on the work item[WorkItems].
- One or more defined states that the work items[WorkItems] flow through from started to finished. Any work items[WorkItems] between a started point and a finished point are considered work in progress[WorkInProgress] (WIP).
- A definition of how WIP[WorkInProgress] will be controlled from started to finished.
- Explicit policies about how work items[WorkItems] can flow through each state from started to finished.
- A service level expectation[ServiceLevelExpectation] (SLE), which is a forecast of how long it should take a work item[WorkItems] to flow from started to finished.

Kanban system members[KanbanSystemMembers] often require additional DoW[DefinitionOfWorkflow] elements such as values, principles, and working agreements depending on the team's circumstances.
The options vary, and there are resources beyond this guide that can help with deciding which ones to incorporate.

The visualization of the DoW[DefinitionOfWorkflow] is called a Kanban board[KanbanBoard].
Making at least the minimum elements of DoW[DefinitionOfWorkflow] transparent on the Kanban board[KanbanBoard] is essential to processing knowledge that informs optimal workflow[Workflow] operation and facilitates continuous process improvement[ContinuousImprovement].

There are no specific guidelines for how a visualization should look as long as it encompasses the shared understanding of how value[Value] gets delivered.
Consideration should be given to all aspects of the DoW[DefinitionOfWorkflow] (e.g., work items[WorkItems], policies) along with any other context-specific factors that may affect how the process operates.
Kanban system members[KanbanSystemMembers] are limited only by their imagination regarding how they make flow[Flow] transparent.

## Actively Managing Items in a Workflow[Workflow]

Active management of items in a workflow[Workflow] can take several forms, including but not limited to the following:

- Controlling WIP[WorkInProgress].
- Avoiding work items[WorkItems] piling up in any part of the workflow[Workflow].
- Ensuring work items[WorkItems] do not age unnecessarily, using the SLE[ServiceLevelExpectation] as a reference.
- Unblocking blocked work.

A common practice is for Kanban system members[KanbanSystemMembers] to review the active management of items regularly.
Although some may choose a daily meeting, there is no requirement to formalize the review or meet at a regular cadence so long as active management takes place.

## Controlling Work In Progress[WorkInProgress]

Kanban system members[KanbanSystemMembers] must explicitly control the number of work items[WorkItems] in a workflow[Workflow] from start to finish.
That control is usually represented as numbers or slots/tokens on a Kanban board[KanbanBoard] that are called WIP[WorkInProgress] limits.
A WIP[WorkInProgress] limit can include (but is not limited to) work items[WorkItems] in a single column, several grouped columns/lanes/areas, or a whole board[KanbanBoard].

A side effect of controlling WIP[WorkInProgress] is that it creates a pull system[PullSystem].
It is called a pull system[PullSystem] because Kanban system members[KanbanSystemMembers] start work on an item (pulls or selects) only when there is a clear signal that there is capacity to do so.
When WIP[WorkInProgress] drops below the limit in the DoW[DefinitionOfWorkflow], that is a signal to select new work.
Members should refrain from pulling/selecting more than the number of work items[WorkItems] into a given part of the workflow[Workflow] as defined by the WIP[WorkInProgress] Limit.
In rare cases, system members may agree to pull additional work items[WorkItems] beyond the WIP[WorkInProgress] Limit, but it should not be routine.

Controlling WIP[WorkInProgress] not only helps workflow[Workflow] but often also improves the Kanban system members'[KanbanSystemMembers] collective focus, commitment, and collaboration.
Any acceptable exceptions to controlling WIP[WorkInProgress] should be made explicit as part of the DoW[DefinitionOfWorkflow].

## Service Level Expectation[ServiceLevelExpectation]

The SLE[ServiceLevelExpectation] is a forecast of how long it should take a single work item[WorkItems] to flow from started to finished.
The SLE[ServiceLevelExpectation] itself has two parts: a period of elapsed time and a probability associated with that period (e.g., "85% of work items[WorkItems] will be finished in eight days or less").
The SLE[ServiceLevelExpectation] should be based on historical cycle time[CycleTime], and once calculated, should be visualized on the Kanban board[KanbanBoard].
If historical cycle time[CycleTime] data does not exist, a best guess will do until there is enough historical data for a proper SLE[ServiceLevelExpectation] calculation.

# Improving the Workflow[Workflow]

Having made the DoW[DefinitionOfWorkflow] explicit, the Kanban system members'[KanbanSystemMembers] responsibility is to continuously improve their workflow[Workflow] to achieve a better balance of effectiveness, efficiency, and predictability.
The information they gain from visualization and other Kanban measures[KanbanMeasures] guide what tweaks to the DoW[DefinitionOfWorkflow] may be most beneficial.

It is common practice to review the DoW[DefinitionOfWorkflow] from time to time to discuss and implement any changes needed.
There is no requirement, however, to wait for a formal meeting at a regular cadence to make these changes.
Kanban system members[KanbanSystemMembers] can and should make just-in-time alterations as the context dictates.
There is also nothing that prescribes improvements to workflow[Workflow] to be small and incremental.
If visualization and the Kanban measures[KanbanMeasures] indicate that a big change is needed, that is what the members should implement.

# Kanban Measures[KanbanMeasures]

The application of Kanban[KanbanFramework] requires the collection and analysis of a minimum set of flow measures[FlowMeasures] (or metrics).
They are a reflection of the Kanban system's[KanbanSystem] current health and performance and will help inform decisions about how value[Value] gets delivered.

The four mandatory flow measures[FlowMeasures] to track are:

- _WIP_[WorkInProgress]: The number of work items[WorkItems] started but not finished.
- _Throughput_[Throughput]: The number of work items[WorkItems] finished per unit of time. Note the measurement of throughput[Throughput] is the exact count of work items[WorkItems].
- _Work Item Age_[WorkItemAge]: The amount of elapsed time between when a work item[WorkItems] started and the current time.
- _Cycle Time_[CycleTime]: The amount of elapsed time between when a work item[WorkItems] started and when a work item[WorkItems] finished.

For these mandatory four flow measures[FlowMeasures], started and finished refer to how the Kanban system members[KanbanSystemMembers] have defined those terms in the DoW[DefinitionOfWorkflow].

Provided that the members use these metrics as described in this guide, members can refer to any of these measures using any other names as they choose.

In and of themselves, these metrics are meaningless unless they can inform one or more of the three Kanban practices[KanbanPractices].
Therefore, visualizing these metrics using charts is recommended.
It does not matter what kind of charts are used as long as they enable a shared understanding of the Kanban system's[KanbanSystem] current health and performance.

The flow measures[FlowMeasures] listed in this guide represent only the minimum required for the operation of a Kanban system[KanbanSystem].
Kanban system members[KanbanSystemMembers] may and often should use additional context-specific measures that assist data-informed decisions.

# Endnote

Kanban's[KanbanFramework] practices and measures are immutable.
Although implementing only parts of Kanban[KanbanFramework] is possible, the result is not Kanban[KanbanFramework].
One can and likely should add other principles, methodologies, and techniques to the Kanban system[KanbanSystem], but the minimum set of practices, measures, and the spirit of optimizing value[Value] must be preserved.

# History of Kanban

The present state of Kanban[KanbanFramework] can trace its roots to the Toyota Production System (and its antecedents) and the work of people like Taiichi Ohno and W. Edwards Deming.
The collective set of practices for knowledge work that is now commonly referred to as Kanban[KanbanFramework] mostly originated on a team at Corbis in 2006.
Those practices quickly spread to encompass a large and diverse international community that has continued to enhance and evolve the approach.

# Acknowledgments

In addition to all who helped to develop Kanban[KanbanFramework] over the years, we would like to thank the following individuals specifically for their contributions to this guide:

- Yuval Yeret and Steve Porter for their initial contribution of foundational concepts.
- Emily Coleman for the inspiration to broaden the definition of value[Value].
- Ryan Ripley and Todd Miller for helping to develop much of the supporting materials upon which this guide is based.
- Julia Wester, Colleen Johnson, Jose Casal, and Jean-Paul Bayley for being insightful reviewers of the early drafts.
- Dave West and Eric Naiburg for their careful consideration of what should be in the final published version.
- Deborah Zanke for editing.

# License

This work is licensed by Orderly Disruption Limited and Daniel S. Vacanti, Inc. under a Creative Commons Attribution 4.0 International License.

`,ra=`# Purpose

The flow-based[Flow] perspective of Kanban[KanbanFramework] can enhance and complement the Scrum framework[Framework] and its implementation.
Teams[ScrumTeam] can add complementary Kanban[KanbanFramework] practices[KanbanPractices] whether they are just starting to use Scrum[Scrum] or have been using it all along.

The Kanban Guide for Scrum Teams[ScrumTeam] is the result of a collaboration between members of the Scrum.org community and leaders of the Kanban[KanbanFramework] community.
Together, they stand behind The Kanban Guide for Scrum Teams[ScrumTeam].
It is their shared belief that professional product[Product] development practitioners can benefit from the application of Kanban[KanbanFramework] together with Scrum[Scrum].

# Relation to the Scrum Guide
This guide does not replace or discount any part of The Scrum Guide. It is designed to enhance and expand the practices of Scrum[Scrum,ExtendScrum].
This guide assumes the reader is operating a process using the Scrum framework[Framework].
Therefore, The Scrum Guide applies in its entirety.

# Definition of Kanban
Kanban[KanbanFramework] (n): a strategy for optimizing the flow[Flow] of value[Value,ValueDelivery] through a process that uses a visual, workin-progress[WorkInProgress] limited pull system[PullSystem].

# Kanban with Scrum Theory
## Flow and Empiricism[Empiricism]
Central to the definition of Kanban[KanbanFramework] is the concept of flow[Flow].
Flow[Flow] is the movement of value[Value] throughout the product[Product] development system.
Kanban[KanbanFramework] optimizes flow[Flow] by improving the overall efficiency, effectiveness, and predictability[Forecast] of a process.
Optimizing flow[Flow] in a Scrum[Scrum] context requires defining what flow[Flow] means in Scrum[Scrum].
Scrum[Scrum] is founded on empirical[Empiricism] process control theory, or empiricism[Empiricism].
Key to empirical[Empiricism] process control is the frequency of the transparency[EmpiricalScrumPillars,Transparency], inspection[EmpiricalScrumPillars,Inspection], and adaptation[EmpiricalScrumPillars,Adaptation] cycle - which we can also describe as the Cycle Time[CycleTime] through the feedback loop.
When Kanban[KanbanFramework] practices[KanbanPractices] are applied to Scrum[Scrum], they provide a focus[ScrumValues,Focus] on improving the flow[Flow] through the feedback loop; optimizing transparency[EmpiricalScrumPillars,Transparency] and the frequency of inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation] for both the product[Product] and the process.

## The Basic Metrics of Flow[Flow,FlowMeasures]
The four basic metrics of flow[Flow,FlowMeasures] that Scrum Teams[ScrumTeam] using Kanban[KanbanFramework] need to track are as follows:
- Work in Progress[WorkInProgress] (WIP): The number of work items[WorkItems] started but not finished. The team[ScrumTeam] can use the WIP[WorkInProgress] metric to provide transparency[EmpiricalScrumPillars,Transparency] about their progress towards reducing their WIP[WorkInProgress] and improving their flow[Flow]. Note that there is a difference between the WIP[WorkInProgress] metric and the policies a Scrum Team[ScrumTeam] uses to limit WIP[WorkInProgress].
- Cycle Time[CycleTime]: The amount of elapsed time between when a work item[WorkItems] starts and when a work item[WorkItems] finishes.
- Work Item Age[WorkItemAge]: The amount of time between when a work item[WorkItems] started and the current time. This applies only to items that are still in progress[WorkInProgress].
- Throughput[Throughput]: The number of work items[WorkItems] finished per unit of time.

## Little's Law – The Key to Governing Flow[Flow]
A key tenet governing flow[Flow] theory is Little's Law, which is a guideline that establishes the following relationship:

average cycle time[CycleTime] = average work in progress[WorkInProgress] / average throughput[Throughput]

Little's Law reveals that in general, for a given process with a given throughput[Throughput], the more things that you work on at any given time (on average), the longer it is going to take to finish those things (on average).
If cycle times[CycleTime] are too long, the first action Scrum Teams[ScrumTeam] should consider is lowering WIP[WorkInProgress]. Most of the other elements of Kanban[KanbanFramework] are built upon the relationship between WIP[WorkInProgress] and Cycle Time[CycleTime].
Little's Law also shows us how flow[Flow] theory relies on empiricism[Empiricism] by using flow[Flow] metrics and data to gain transparency[EmpiricalScrumPillars,Transparency] into historical flow[Flow] and then using that data to inform flow[Flow] inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation] experiments.

# Kanban Practices[KanbanPractices]
Scrum Teams[ScrumTeam] can achieve flow[Flow] optimization by using the following four practices[KanbanPractices]:
- Visualization of the Workflow[Workflow,Transparency]
- Limiting Work in Progress[WorkInProgress] (WIP)
- Active management of work items[WorkItems] in progress[WorkInProgress]
- Inspecting and adapting[EmpiricalScrumPillars,Inspection,EmpiricalScrumPillars,Adaptation] the team's Definition of Workflow[DefinitionOfWorkflow]

### Definition of Workflow[DefinitionOfWorkflow]
The four Kanban[KanbanFramework] practices[KanbanPractices] are enabled by the Scrum Team's[ScrumTeam] Definition of Workflow[DefinitionOfWorkflow]. This
definition represents the Scrum Team[ScrumTeam] members' explicit understanding of what their policies are
for following the Kanban[KanbanFramework] practices[KanbanPractices]. This shared understanding improves transparency[EmpiricalScrumPillars,Transparency] and enables
self-management[SelfManagement].
Note that the scope of the Definition of Workflow[DefinitionOfWorkflow] may span beyond the Sprint[ScrumEvents,Sprint] and the Sprint
Backlog[ScrumArtifacts,SprintBacklog]. For instance, a Scrum Team's[ScrumTeam] Definition of Workflow[DefinitionOfWorkflow] may encompass flow[Flow] inside and/or
outside of the Sprint[ScrumEvents,Sprint].
Creating and adapting[EmpiricalScrumPillars,Adaptation] the Definition of Workflow[DefinitionOfWorkflow] is the accountability[Accountable] of the relevant roles on the
Scrum Team[ScrumTeam] as described in the Scrum Guide. No one outside of the Scrum Team[ScrumTeam] should tell the
Scrum Team[ScrumTeam] how to define their Workflow[Workflow].

## Visualization of the Workflow[Workflow] – the Kanban Board[KanbanBoard]
Visualization using the Kanban board[KanbanBoard] is the way the Scrum Team[ScrumTeam] makes its Workflow[Workflow] transparent[EmpiricalScrumPillars,Transparency].
The board's configuration should prompt the right conversations at the right time and proactively
suggest opportunities for improvement[EmpiricalScrumPillars,Adaptation].
Visualization should include the following:
- Defined points at which the Scrum Team[ScrumTeam] considers work to have started and to have
finished.
- A definition of the work items[WorkItems] - the individual units of value[Value] (stakeholder[Stakeholder] value[Value], knowledge
value[Value], process improvement value[Value]) that are flowing through the Scrum Team's[ScrumTeam] system
(most likely Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] (PBIs)).
- A definition of the workflow[Workflow] states that the work items[WorkItems] flow[Flow] through from start to finish
(of which there must be at least one active state).
- Explicit policies about how work flows[Flow] through each state (which may include items from
a Scrum Team's[ScrumTeam] Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] and pull policies between stages).
- Policies for limiting Work in Progress[WorkInProgress] (WIP).

## Limiting Work in Progress[WorkInProgress] (WIP)
Work in Progress[WorkInProgress] (WIP) refers to the work items[WorkItems] the Scrum Team[ScrumTeam] has started but has not yet
finished.
Scrum Teams[ScrumTeam] using Kanban[KanbanFramework] must explicitly limit the number of these work items[WorkItems] in progress[WorkInProgress]. A
Scrum Team[ScrumTeam] can explicitly limit WIP[WorkInProgress] however they see fit but should stick to that limit once
established.
The primary effect of limiting WIP[WorkInProgress] is that it creates a pull system[PullSystem]. It is called a pull system[PullSystem] because
the team[ScrumTeam] starts work (i.e. pulls) on an item only when it is clear that it has the capacity to do so.
When the WIP[WorkInProgress] drops below the defined limit, that is the signal to start new work. Note this is
different from a push system, which demands that work starts on an item whenever it is
requested.
Limiting WIP[WorkInProgress] helps flow[Flow] and improves the Scrum Team's[ScrumTeam] self-management[SelfManagement], focus[ScrumValues,Focus], commitment[ScrumValues,Commitment],
and collaboration.

## Active Management of Work Items[WorkItems] in Progress[WorkInProgress]
Limiting WIP[WorkInProgress] is necessary to achieve flow[Flow], but it alone is not sufficient. The third practice[KanbanPractices] to
establish flow[Flow] is the active management of work items[WorkItems] in progress[WorkInProgress]. Within the Sprint[ScrumEvents,Sprint], this
management by the Scrum Team[ScrumTeam] can take several forms, including but not limited to the
following:
- Making sure that work items[WorkItems] are only pulled into the Workflow[Workflow] at about the same rate
that they leave the Workflow[Workflow].
- Ensuring work items[WorkItems] aren't left to age unnecessarily.
- Responding quickly to blocked or queued work items[WorkItems] as well those that are exceeding the
team's expected Cycle Time[CycleTime] levels (See Service Level Expectation[ServiceLevelExpectation] - SLE).
Service Level Expectation[ServiceLevelExpectation] (SLE)
A service level expectation[ServiceLevelExpectation] (SLE) forecasts[Forecast] how long it should take a given item to flow[Flow] from start
to finish within the Scrum Team's[ScrumTeam] Workflow[Workflow]. The Scrum Team[ScrumTeam] uses its SLE[ServiceLevelExpectation] to find active flow[Flow] issues
and to inspect[EmpiricalScrumPillars,Inspection] and adapt[EmpiricalScrumPillars,Adaptation] in cases of falling below those expectations.
The SLE[ServiceLevelExpectation] itself has two parts: a range of elapsed days and a probability associated with that period
(e.g., 85% of work items[WorkItems] should be finished in eight days or less). The SLE[ServiceLevelExpectation] should be based on the
Scrum Team's[ScrumTeam] historical Cycle Time[CycleTime], and once calculated, the Scrum Team[ScrumTeam] should make it
transparent[EmpiricalScrumPillars,Transparency]. If no historical Cycle Time[CycleTime] data exists, the Scrum Team[ScrumTeam] should make its best guess
and then inspect[EmpiricalScrumPillars,Inspection] and adapt[EmpiricalScrumPillars,Adaptation] once there is enough historical data to do a proper SLE[ServiceLevelExpectation] calculation.

## Inspect and Adapt[EmpiricalScrumPillars,Inspection,EmpiricalScrumPillars,Adaptation] the Definition of Workflow[DefinitionOfWorkflow]
The Scrum Team[ScrumTeam] uses the existing Scrum events[ScrumEvents] to inspect[EmpiricalScrumPillars,Inspection] and adapt[EmpiricalScrumPillars,Adaptation] its Definition of Workflow[DefinitionOfWorkflow],
thereby helping to improve empiricism[Empiricism] and optimizing the value[Value] the Scrum Team[ScrumTeam] delivers.
The following are aspects of the Definition of Workflow[DefinitionOfWorkflow] the Scrum Team[ScrumTeam] might adopt:
- Visualization policies - for example, Workflow[Workflow] states - either changing the actual
Workflow[Workflow] or bringing more transparency[EmpiricalScrumPillars,Transparency] to an area in which the team[ScrumTeam] wants to inspect[EmpiricalScrumPillars,Inspection]
and adapt[EmpiricalScrumPillars,Adaptation].
- How-we-work policies - these can directly address an impediment[Impediments]. For example, adjusting
WIP[WorkInProgress] limits and SLEs[ServiceLevelExpectation] or changing the batch size (how often items are pulled between
states) can have a dramatic impact. 

# Flow-Based Events[ScrumEvents]
Kanban[KanbanFramework] in a Scrum[Scrum] context does not require any additional events[ScrumEvents] to those outlined in The Scrum
Guide. However, using a flow-based[Flow] perspective and metrics in Scrum's[Scrum] events[ScrumEvents] strengthens
Scrum's[Scrum] empirical[Empiricism] approach.

## The Sprint[ScrumEvents,Sprint]
The Kanban[KanbanFramework] complementary practices[KanbanPractices] don't invalidate the need for Scrum's[Scrum] Sprint[ScrumEvents,Sprint]. The Sprint[ScrumEvents,Sprint] and
its events[ScrumEvents] provide opportunities for inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation] of both product[Product] and process. It's a
common misconception that teams[ScrumTeam] can only deliver value[Value,ValueDelivery] once per Sprint[ScrumEvents,Sprint]. In fact, they must
deliver value[Value,ValueDelivery] at least once per Sprint[ScrumEvents,Sprint]. Teams[ScrumTeam] using Scrum[Scrum] with Kanban[KanbanFramework] use the Sprint[ScrumEvents,Sprint] and its events[ScrumEvents]
as a feedback improvement loop by collaboratively inspecting[EmpiricalScrumPillars,Inspection] and adapting[EmpiricalScrumPillars,Adaptation] their Definition of
Workflow[DefinitionOfWorkflow] and flow[Flow] metrics.
Kanban[KanbanFramework] practices[KanbanPractices] can help Scrum Teams[ScrumTeam] improve flow[Flow] and create an environment where decisions
are made just-in-time throughout the Sprint[ScrumEvents,Sprint] based on inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation]. In this
environment, Scrum Teams[ScrumTeam] rely on the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] and close collaboration within the Scrum Team[ScrumTeam]
to optimize the value[Value] delivered in the Sprint[ScrumEvents,Sprint]

## Sprint Planning[ScrumEvents,SprintPlanning]
A flow-based[Flow] Sprint Planning[ScrumEvents,SprintPlanning] meeting uses flow[Flow] metrics as an aid for developing the Sprint
Backlog[ScrumArtifacts,SprintBacklog]. Reviewing historical throughput[Throughput] can help a Scrum Team[ScrumTeam] understand their capacity for
the next Sprint[ScrumEvents,Sprint].

## Daily Scrum[ScrumEvents,DailyScrum]
A flow-based[Flow] Daily Scrum[ScrumEvents,DailyScrum] focuses[ScrumValues,Focus] the Developers[ScrumTeam,Developers] on doing everything they can to maintain
consistent flow[Flow]. While the goal of the Daily Scrum[ScrumEvents,DailyScrum] remains the same as outlined in The Scrum
Guide, the meeting itself takes place around the Kanban board[KanbanBoard] and focuses[ScrumValues,Focus] on where flow[Flow] is
lacking and on what actions the Developers[ScrumTeam,Developers] can take to get it back.
Additional things to consider during a flow-based[Flow] Daily Scrum[ScrumEvents,DailyScrum] include the following:
- What work items[WorkItems] are blocked and what can be done to get them unblocked?
- What work is flowing slower than expected? What is the Work Item Age[WorkItemAge] of each item in
progress[WorkInProgress]? What work items[WorkItems] have violated or are about to violate their SLE[ServiceLevelExpectation] and what can
the Scrum Team[ScrumTeam] do to get that work completed?
- Are there any factors not represented on the board that may impact our ability to
complete work today?
- Have we learned anything new that might change what the Scrum Team[ScrumTeam] has planned to
work on next?
- Have we broken our WIP[WorkInProgress] limit? And what can we do to ensure we can complete the work
in progress[WorkInProgress]?

## Sprint Review[ScrumEvents,SprintReview]
The Scrum Guide provides an outline of the Sprint Review[ScrumEvents,SprintReview]. Inspecting[EmpiricalScrumPillars,Inspection] Kanban[KanbanFramework] flow[Flow] metrics as part
of the review can create opportunities for new conversations about monitoring progress towards
the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal]. Reviewing Throughput[Throughput] can provide additional information when the Product
Owner[ScrumTeam,ProductOwner] discusses likely delivery dates.

## Sprint Retrospective[ScrumEvents,SprintRetrospective]
A flow-based[Flow] Sprint Retrospective[ScrumEvents,SprintRetrospective] adds the inspection[EmpiricalScrumPillars,Inspection] of flow[Flow] metrics and analytics to help
determine what improvements the Scrum Team[ScrumTeam] can make to its processes. The Scrum Team[ScrumTeam] using
Kanban[KanbanFramework] also inspects[EmpiricalScrumPillars,Inspection] and adapts[EmpiricalScrumPillars,Adaptation] the Definition of Workflow[DefinitionOfWorkflow] to optimize the flow[Flow] in the next
Sprint[ScrumEvents,Sprint]. Using a cumulative flow[Flow] diagram to visualize a Scrum Team's[ScrumTeam] WIP[WorkInProgress], approximate average
Cycle Time[CycleTime] and average Throughput[Throughput] can be valuable.
In addition to the Sprint Retrospective[ScrumEvents,SprintRetrospective], the Scrum Team[ScrumTeam] should consider taking advantage of
process inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation] opportunities as they emerge throughout the Sprint[ScrumEvents,Sprint].
Similarly, changes to a Scrum Team's[ScrumTeam] Definition of Workflow[DefinitionOfWorkflow] may happen at any time. Because
these changes will have a material impact on how the Scrum Team[ScrumTeam] performs, changes made
during the regular cadence[Cadence] provided by the Sprint Retrospective[ScrumEvents,SprintRetrospective] event will reduce complexity[ReduceComplexity] and
improve focus[ScrumValues,Focus], commitment[ScrumValues,Commitment] and transparency[EmpiricalScrumPillars,Transparency].

# Increment[ScrumArtifacts,Increment]
Scrum[Scrum] requires the team[ScrumTeam] to create (at minimum) a valuable, useful Increment[ScrumArtifacts,Increment] every Sprint[ScrumEvents,Sprint].
Scrum's[Scrum] empiricism[Empiricism] encourages the creation of multiple valuable increments[ScrumArtifacts,Increment] during the Sprint[ScrumEvents,Sprint] to
enable fast inspect[EmpiricalScrumPillars,Inspection] and adapt[EmpiricalScrumPillars,Adaptation] feedback loops. Kanban[KanbanFramework] helps manage the flow[Flow] of these feedback
loops more explicitly and allows the Scrum Team[ScrumTeam] to identify bottlenecks, constraints, and
impediments[Impediments] to enable this faster, more continuous delivery of value[Value,ValueDelivery].

# Endnote
Scrum[Scrum] is not a process or technique. It is a framework[Framework] within which people can address complex
adaptive problems while productively and creatively delivering products[Product] of the highest possible
value[Value]. As The Scrum Guide points out, it functions well as a container for other techniques,
methodologies, and practices[ExtendScrum].
The flow[Flow] optimization practices[KanbanPractices] of Kanban[KanbanFramework] provide Scrum Teams[ScrumTeam] with additional opportunities to
inspect[EmpiricalScrumPillars,Inspection] the right thing, at the right time, and then based on that inspection[EmpiricalScrumPillars,Inspection], adapt[EmpiricalScrumPillars,Adaptation] as needed.
Kanban's[KanbanFramework] hyperfocus on transparency[EmpiricalScrumPillars,Transparency], visualization, and flow[Flow] maximizes feedback, empiricism[Empiricism],
and ultimately the delivery of value[Value,ValueDelivery].

# History and Acknowledgments
Kanban's[KanbanFramework] use in the context of creative knowledge work mostly originated in 2006 on a team at
Corbis, a media licensing company in Seattle. Those practices[KanbanPractices] quickly spread to encompass a large
and diverse international community that over the years continued to enhance and evolve the
approach.
This guide was developed collaboratively by Scrum.org, its Professional Scrum Trainer
Community, Steve Porter, Yuval Yeret, and Daniel Vacanti.
A special thank you to Glaudia Califano, Louis-Philippe Carignan, Charles Bradley, Jose Casal, Andy
Hiles, Jesse Houwing, and Julia Wester for their contributions. We also owe a debt of gratitude to
all those practitioners who have in the past contributed to make Kanban[KanbanFramework] a viable and successful
lean-agile strategy.

# License
2021 Scrum.org. Offered for license under the Attribution Share-Alike license of Creative Commons,
accessible at http://creativecommons.org/licenses/by-sa/4.0/legalcode and also described in summary
form at http://creativecommons.org/licenses/by-sa/4.0/. By utilizing this Kanban Guide for Scrum Teams,
you acknowledge and agree that you have read and agree to be bound by the terms of the Attribution
Share-Alike license of Creative Commons

`,na=`# Purpose of the Nexus Guide

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

`,ia=`The Definitive Guide to Scrum@Scale: Scaling that Works

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

`,aa=`# Purpose of the Scrum Guide

Scrum is a framework[Framework] for developing, delivering, and sustaining complex products.
This Guide contains the definition of Scrum.
This definition consists of Scrum's roles[ScrumTeam], events[ScrumEvents], artifacts[ScrumArtifacts], and the rules that bind them together.
Ken Schwaber and Jeff Sutherland developed Scrum; the Scrum Guide is written and provided by them.
Together, they stand behind the Scrum Guide.

# Definition of Scrum

Scrum (n): A framework[Framework] within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value[ValueDelivery].

Scrum is:

- Lightweight
- Simple to understand
- Difficult to master

Scrum is a process framework[Framework] that has been used to manage work on complex products since the early 1990s.
Scrum is not a process, technique, or definitive method.
Rather, it is a framework[Framework] within which you can employ various processes and techniques.
Scrum makes clear the relative efficacy of your product management and work techniques so that you can continuously improve[EmpiricalScrumPillars,Adaptation] the product, the team[ScrumTeam], and the working environment.

The Scrum framework[Framework] consists of Scrum Teams[ScrumTeam] and their associated roles, events[ScrumEvents], artifacts[ScrumArtifacts], and rules.
Each component within the framework[Framework] serves a specific purpose and is essential to Scrum's success and usage.

The rules of Scrum bind together the roles[ScrumTeam], events[ScrumEvents], and artifacts[ScrumArtifacts], governing the relationships and interaction between them.
The rules of Scrum are described throughout the body of this document.

Specific tactics for using the Scrum framework[Framework] vary and are described elsewhere[ExtendScrum].

# Uses of Scrum

Scrum was initially developed for managing and developing products[Product].
Starting in the early 1990s, Scrum has been used extensively, worldwide, to:

1. Research and identify viable markets, technologies, and product capabilities;
2. Develop products[Product] and enhancements;
3. Release products[Product] and enhancements, as frequently as many times per day;
4. Develop and sustain Cloud (online, secure, on-demand) and other operational environments for product[Product] use; and,
5. Sustain and renew products[Product].

Scrum has been used to develop software, hardware, embedded software, networks of interacting function, autonomous vehicles, schools, government, marketing, managing the operation of organizations[Organization] and almost everything we use in our daily lives, as individuals and societies.

As technology, market, and environmental complexities and their interactions have rapidly increased, Scrum's utility in dealing with complexity is proven daily.

Scrum proved especially effective in iterative[Cadence] and incremental[Increment] knowledge transfer[Learn].
Scrum is now widely used for products[Product], services, and the management of the parent organization[Organization].

The essence of Scrum is a small team[ScrumTeam] of people.
The individual team[ScrumTeam] is highly flexible and adaptive[EmpiricalScrumPillars,Adaptation].
These strengths continue operating in single, several, many, and networks of teams[ScrumTeams] that develop, release, operate and sustain the work and work products of thousands of people.
They collaborate and interoperate through sophisticated development architectures and target release environments.

When the words "develop" and "development" are used in the Scrum Guide, they refer to complex work, such as those types identified above.

# Scrum Theory

Scrum is founded on empirical process control theory, or empiricism[Empiricism].
Empiricism[Empiricism] asserts that knowledge comes from experience and making decisions based on what is known.
Scrum employs an iterative[Cadence], incremental[Increment] approach to optimize predictability[Forecast] and control risk[Risk].

Three pillars uphold every implementation of empirical[Empiricism] process control: transparency[EmpiricalScrumPillars,Transparency], inspection[EmpiricalScrumPillars,Inspection], and adaptation[EmpiricalScrumPillars,Adaptation].

# Transparency[EmpiricalScrumPillars,Transparency]

Significant aspects of the process must be visible[EmpiricalScrumPillars,Transparency] to those responsible for the outcome.
Transparency[EmpiricalScrumPillars,Transparency] requires those aspects be defined by a common standard so observers share a common understanding of what is being seen.

For example

- A common language referring to the process must be shared by all participants; and,
- Those performing the work and those inspecting the resulting increment[ScrumArtifacts,Increment] must share a
  common definition of "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone].

# Inspection[EmpiricalScrumPillars,Inspection]

Scrum users must frequently inspect[EmpiricalScrumPillars,Inspection] Scrum artifacts[ScrumArtifacts] and progress toward a Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] to detect undesirable variances.
Their inspection[EmpiricalScrumPillars,Inspection] should not be so frequent that inspection[EmpiricalScrumPillars,Inspection] gets in the way of the work.
Inspections[EmpiricalScrumPillars,Inspection] are most beneficial when diligently performed by skilled inspectors at the point of work.

# Adaptation[EmpiricalScrumPillars,Adaptation]

If an inspector determines that one or more aspects of a process deviate outside acceptable limits, and that the resulting product[Product] will be unacceptable, the process or the material being processed must be adjusted[EmpiricalScrumPillars,Adaptation].
An adjustment[EmpiricalScrumPillars,Adaptation] must be made as soon as possible to minimize further deviation.

Scrum prescribes four formal events[ScrumEvents] for inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation], as described in the Scrum Events[ScrumEvents] section of this document:

- Sprint Planning[ScrumEvents,SprintPlanning]
- Daily Scrum[ScrumEvents,DailyScrum]
- Sprint Review[ScrumEvents,SprintReview]
- Sprint Retrospective[ScrumEvents,SprintRetrospective]

# Scrum Values[ScrumValues]

When the values of commitment[ScrumValues,Commitment], courage[ScrumValues,Courage], focus[ScrumValues,Focus], openness[ScrumValues,Openness] and respect[ScrumValues,Respect] are embodied and lived by the Scrum Team[ScrumTeam], the Scrum pillars[EmpiricalScrumPillars] of transparency[EmpiricalScrumPillars,Transparency], inspection[EmpiricalScrumPillars,Inspection], and adaptation[EmpiricalScrumPillars,Adaptation] come to life and build trust for everyone.
The Scrum Team[ScrumTeam] members learn[Learn] and explore those values[ScrumValues] as they work with the Scrum roles[ScrumTeam], events[ScrumEvents], and artifacts[ScrumArtifacts].

Successful use of Scrum depends on people becoming more proficient in living these five values[ScrumValues].
People personally commit[ScrumValues,Commitment] to achieving the goals of the Scrum Team[ScrumTeam].
The Scrum Team[ScrumTeam] members have courage[ScrumValues,Courage] to do the right thing and work on tough problems.
Everyone focuses[ScrumValues,Focus] on the work of the Sprint[ScrumEvents,Sprint] and the goals of the Scrum Team[ScrumTeam].
The Scrum Team[ScrumTeam] and its stakeholders[Stakeholder] agree to be open[ScrumValues,Openness] about all the work and the challenges with performing the work.
Scrum Team[ScrumTeam] members respect[ScrumValues,Respect] each other to be capable, independent people.

# The Scrum Team[ScrumTeam]

The Scrum Team[ScrumTeam] consists of a Product Owner[ScrumTeam,ProductOwner], the Development Team[ScrumTeam,Developers], and a Scrum Master[ScrumTeam,ScrumMaster].
Scrum Teams[ScrumTeam] are self-organizing[SelfManagement] and cross-functional[CrossFunctional].
Self-organizing[SelfManagement] teams choose how best to accomplish their work, rather than being directed by others outside the team.
Cross-functional[CrossFunctional] teams have all competencies needed to accomplish the work without depending on others not part of the team.
The team model in Scrum is designed to optimize flexibility, creativity, and productivity.
The Scrum Team[ScrumTeam] has proven itself to be increasingly effective for all the earlier stated uses, and any complex work.

Scrum Teams[ScrumTeam] deliver products iteratively[Cadence] and incrementally[Increment], maximizing opportunities for feedback.
Incremental deliveries of "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] product ensure a potentially useful version of working product is always available.

## The Product Owner[ScrumTeam,ProductOwner]

The Product Owner[ScrumTeam,ProductOwner] is responsible[ScrumTeam,ProductOwner,Responsible] for maximizing the value[ValueDelivery] of the product[Product] resulting from work of the Development Team[ScrumTeam,Developers].
How this is done may vary widely across organizations[Organization], Scrum Teams[ScrumTeam], and individuals.

The Product Owner[ScrumTeam,ProductOwner] is the sole person responsible[ScrumTeam,ProductOwner,Responsible] for managing the Product Backlog[ScrumArtifacts,ProductBacklog].
Product Backlog[ScrumArtifacts,ProductBacklog] management includes:

- Clearly expressing Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem];
- Ordering the items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] in the Product Backlog[ScrumArtifacts,ProductBacklog] to best achieve goals and missions;
- Optimizing the value[ValueDelivery] of the work the Development Team[ScrumTeam,Developers] performs;
- Ensuring that the Product Backlog[ScrumArtifacts,ProductBacklog] is visible[EmpiricalScrumPillars,Transparency], transparent[EmpiricalScrumPillars,Transparency], and clear to all, and shows what the Scrum Team[ScrumTeam] will work on next; and,
- Ensuring the Development Team[ScrumTeam,Developers] understands items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] in the Product Backlog[ScrumArtifacts,ProductBacklog] to the level needed.

The Product Owner[ScrumTeam,ProductOwner] may do the above work, or have the Development Team[ScrumTeam,Developers] do it.
However, the Product Owner[ScrumTeam,ProductOwner] remains accountable[ScrumTeam,ProductOwner,Accountable].

The Product Owner[ScrumTeam,ProductOwner] is one person, not a committee.
The Product Owner[ScrumTeam,ProductOwner] may represent the desires of a committee in the Product Backlog[ScrumArtifacts,ProductBacklog], but those wanting to change a Product Backlog item's[ScrumArtifacts,ProductBacklog,ProductBacklogItem] priority must address the Product Owner[ScrumTeam,ProductOwner].

For the Product Owner[ScrumTeam,ProductOwner] to succeed, the entire organization[Organization] must respect[ScrumValues,Respect] his or her decisions.
The Product Owner's[ScrumTeam,ProductOwner] decisions are visible[EmpiricalScrumPillars,Transparency] in the content and ordering of the Product Backlog[ScrumArtifacts,ProductBacklog].
No one can force the Development Team[ScrumTeam,Developers] to work from a different set of requirements.

## The Development Team[ScrumTeam,Developers]

The Development Team[ScrumTeam,Developers] consists of professionals who do the work of delivering a potentially releasable Increment[ScrumArtifacts,Increment] of "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] product at the end of each Sprint[ScrumEvents,Sprint].
A "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] increment[ScrumArtifacts,Increment] is required at the Sprint Review[ScrumEvents,SprintReview].
Only members of the Development Team[ScrumTeam,Developers] create the Increment[ScrumArtifacts,Increment].

Development Teams[ScrumTeam,Developers] are structured and empowered[Management] by the organization[Organization] to organize and manage their own work[SelfManagement].
The resulting synergy optimizes the Development Team's[ScrumTeam,Developers] overall efficiency and effectiveness.

Development Teams[ScrumTeam,Developers] have the following characteristics:

- They are self-organizing[SelfManagement]. No one (not even the Scrum Master[ScrumTeam,ScrumMaster]) tells the Development Team[ScrumTeam,Developers] how to turn Product Backlog[ScrumArtifacts,ProductBacklog] into Increments[ScrumArtifacts,Increment] of potentially releasable functionality;
- Development Teams[ScrumTeam,Developers] are cross-functional[CrossFunctional], with all the skills as a team necessary to create a product Increment[ScrumArtifacts,Increment];
- Scrum recognizes no titles for Development Team[ScrumTeam,Developers] members, regardless of the work being performed by the person;
- Scrum recognizes no sub-teams in the Development Team[ScrumTeam,Developers], regardless of domains that need to be addressed like testing, architecture, operations, or business analysis; and,
- Individual Development Team[ScrumTeam,Developers] members may have specialized skills and areas of focus, but accountability[Accountable] belongs to the Development Team[ScrumTeam,Developers] as a whole.

### Development Team[ScrumTeam,Developers] Size

Optimal Development Team[ScrumTeam,Developers] size is small enough to remain nimble and large enough to complete significant work within a Sprint[ScrumEvents,Sprint].
Fewer than three Development Team[ScrumTeam,Developers] members decrease interaction and results in smaller productivity gains.
Smaller Development Teams[ScrumTeam,Developers] may encounter skill constraints during the Sprint[ScrumEvents,Sprint], causing the Development Team[ScrumTeam,Developers] to be unable to deliver a potentially releasable Increment[ScrumArtifacts,Increment].
Having more than nine members requires too much coordination.
Large Development Teams[ScrumTeam,Developers] generate too much complexity for an empirical[Empiricism] process to be useful.
The Product Owner[ScrumTeam,ProductOwner] and Scrum Master[ScrumTeam,ScrumMaster] roles are not included in this count unless they are also executing the work of the Sprint Backlog[ScrumArtifacts,SprintBacklog].

## The Scrum Master[ScrumTeam,ScrumMaster]

The Scrum Master[ScrumTeam,ScrumMaster] is responsible[ScrumTeam,ScrumMaster,Responsible] for promoting and supporting Scrum as defined in the Scrum Guide.
Scrum Masters[ScrumTeam,ScrumMaster] do this by helping everyone understand Scrum theory, practices, rules, and values[ScrumValues].

The Scrum Master[ScrumTeam,ScrumMaster] is a servant-leader[Serve] for the Scrum Team[ScrumTeam].
The Scrum Master[ScrumTeam,ScrumMaster] helps those outside the Scrum Team[ScrumTeam] understand which of their interactions with the Scrum Team[ScrumTeam] are helpful and which aren't.
The Scrum Master[ScrumTeam,ScrumMaster] helps everyone change these interactions to maximize the value[ValueDelivery] created by the Scrum Team[ScrumTeam].

### Scrum Master[ScrumTeam,ScrumMaster] Service to the Product Owner[ScrumTeam,ProductOwner]

The Scrum Master[ScrumTeam,ScrumMaster] serves[ScrumTeam,ScrumMaster,Serve] the Product Owner[ScrumTeam,ProductOwner] in several ways, including:

- Ensuring that goals, scope, and product domain are understood by everyone on the Scrum Team[ScrumTeam] as well as possible;
- Finding techniques for effective Product Backlog[ScrumArtifacts,ProductBacklog] management;
- Helping the Scrum Team[ScrumTeam] understand the need for clear and concise Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem];
- Understanding product planning in an empirical[Empiricism] environment;
- Ensuring the Product Owner[ScrumTeam,ProductOwner] knows how to arrange the Product Backlog[ScrumArtifacts,ProductBacklog] to maximize value[ValueDelivery];
- Understanding and practicing agility; and,
- Facilitating Scrum events[ScrumEvents] as requested or needed.

### Scrum Master[ScrumTeam,ScrumMaster] Service to the Development Team[ScrumTeam,Developers]

The Scrum Master[ScrumTeam,ScrumMaster] serves[ScrumTeam,ScrumMaster,Serve] the Development Team[ScrumTeam,Developers] in several ways, including:

- Coaching the Development Team[ScrumTeam,Developers] in self-organization[SelfManagement] and cross-functionality[CrossFunctional];
- Helping the Development Team[ScrumTeam,Developers] to create high-value products[ValueDelivery];
- Removing impediments[Impediments] to the Development Team's[ScrumTeam,Developers] progress;
- Facilitating Scrum events[ScrumEvents] as requested or needed; and,
- Coaching the Development Team[ScrumTeam,Developers] in organizational environments in which Scrum is not yet fully adopted and understood.

### Scrum Master[ScrumTeam,ScrumMaster] Service to the Organization[Organization]

The Scrum Master[ScrumTeam,ScrumMaster] serves[ScrumTeam,ScrumMaster,Serve] the organization[Organization] in several ways, including:

- Leading and coaching the organization[Organization] in its Scrum adoption;
- Planning Scrum implementations within the organization[Organization];
- Helping employees and stakeholders[Stakeholder] understand and enact Scrum and empirical[Empiricism] product development;
- Causing change that increases the productivity of the Scrum Team[ScrumTeam]; and,
- Working with other Scrum Masters[ScrumTeam,ScrumMaster] to increase the effectiveness of the application of Scrum in the organization[Organization].

# Scrum Events[ScrumEvents]

Prescribed events[ScrumEvents] are used in Scrum to create regularity[Cadence] and to minimize the need for meetings not defined in Scrum[ExtendScrum,OtherMeetings].
All events[ScrumEvents] are time-boxed[Timebox] events, such that every event has a maximum duration.
Once a Sprint[ScrumEvents,Sprint] begins, its duration is fixed and cannot be shortened or lengthened.
The remaining events[ScrumEvents] may end whenever the purpose of the event is achieved, ensuring an appropriate amount of time is spent without allowing waste[Lean,WasteReduction] in the process.

Other than the Sprint[ScrumEvents,Sprint] itself, which is a container for all other events[ScrumEvents], each event[ScrumEvents] in Scrum is a formal opportunity to inspect[EmpiricalScrumPillars,Inspection] and adapt[EmpiricalScrumPillars,Adaptation] something.
These events[ScrumEvents] are specifically designed to enable critical transparency[EmpiricalScrumPillars,Transparency] and inspection[EmpiricalScrumPillars,Inspection].
Failure to include any of these events[ScrumEvents] results in reduced transparency[EmpiricalScrumPillars,Transparency] and is a lost opportunity to inspect[EmpiricalScrumPillars,Inspection] and adapt[EmpiricalScrumPillars,Adaptation].

## The Sprint[ScrumEvents,Sprint]

The heart of Scrum is a Sprint[ScrumEvents,Sprint], a time-box[Timebox] of one month or less during which a "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone], useable, and potentially releasable product Increment[ScrumArtifacts,Increment] is created.
Sprints[ScrumEvents,Sprint] have consistent durations throughout a development effort.
A new Sprint[ScrumEvents,Sprint] starts immediately after the conclusion of the previous Sprint[ScrumEvents,Sprint].

Sprints[ScrumEvents,Sprint] contain and consist of the Sprint Planning[ScrumEvents,SprintPlanning], Daily Scrums[ScrumEvents,DailyScrum], the development work, the Sprint Review[ScrumEvents,SprintReview], and the Sprint Retrospective[ScrumEvents,SprintRetrospective].

During the Sprint[ScrumEvents,Sprint]:

- No changes are made that would endanger the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal];
- Quality[Quality] goals do not decrease; and,
- Scope may be clarified and re-negotiated[EmpiricalScrumPillars,Adaptation] between the Product Owner[ScrumTeam,ProductOwner] and Development Team[ScrumTeam,Developers] as more is learned[Learn].

Each Sprint[ScrumEvents,Sprint] may be considered a project with no more than a one-month horizon[Timebox].
Like projects, Sprints[ScrumEvents,Sprint] are used to accomplish something.
Each Sprint[ScrumEvents,Sprint] has a goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] of what is to be built, a design and flexible plan that will guide building it, the work, and the resultant product increment[ScrumArtifacts,Increment].

Sprints[ScrumEvents,Sprint] are limited to one calendar month[Timebox].
When a Sprint's[ScrumEvents,Sprint] horizon[Timebox] is too long the definition of what is being built may change, complexity may rise, and risk[Risk] may increase.
Sprints[ScrumEvents,Sprint] enable predictability[Forecast] by ensuring inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation] of progress toward a Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] at least every calendar month[Timebox].
Sprints[ScrumEvents,Sprint] also limit risk[Risk] to one calendar month[Timebox] of cost.

### Cancelling a Sprint[ScrumEvents,Sprint]

A Sprint[ScrumEvents,Sprint] can be cancelled before the Sprint[ScrumEvents,Sprint] time-box[Timebox] is over.
Only the Product Owner[ScrumTeam,ProductOwner] has the authority[ScrumTeam,ProductOwner,Responsible] to cancel the Sprint[ScrumEvents,Sprint], although he or she may do so under influence from the stakeholders[Stakeholder], the Development Team[ScrumTeam,Developers], or the Scrum Master[ScrumTeam,ScrumMaster].

A Sprint[ScrumEvents,Sprint] would be cancelled if the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] becomes obsolete.
This might occur if the company changes direction or if market or technology conditions change.
In general, a Sprint[ScrumEvents,Sprint] should be cancelled if it no longer makes sense given the circumstances.
But, due to the short duration of Sprints[ScrumEvents,Sprint], cancellation rarely makes sense.

When a Sprint[ScrumEvents,Sprint] is cancelled, any completed and "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] are reviewed.
If part of the work is potentially releasable, the Product Owner[ScrumTeam,ProductOwner] typically accepts it.
All incomplete Product Backlog Items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] are re-estimated and put back on the Product Backlog[ScrumArtifacts,ProductBacklog].
The work done on them depreciates quickly and must be frequently re-estimated.

Sprint[ScrumEvents,Sprint] cancellations consume resources, since everyone regroups in another Sprint Planning[ScrumEvents,SprintPlanning] to start another Sprint[ScrumEvents,Sprint].
Sprint[ScrumEvents,Sprint] cancellations are often traumatic to the Scrum Team[ScrumTeam], and are very uncommon.

## Sprint Planning[ScrumEvents,SprintPlanning]

The work to be performed in the Sprint[ScrumEvents,Sprint] is planned at the Sprint Planning[ScrumEvents,SprintPlanning].
This plan is created by the collaborative work of the entire Scrum Team[ScrumTeam].

Sprint Planning[ScrumEvents,SprintPlanning] is time-boxed[Timebox] to a maximum of eight hours[Timebox] for a one-month Sprint[ScrumEvents,Sprint].
For shorter Sprints[ScrumEvents,Sprint], the event is usually shorter.
The Scrum Master[ScrumTeam,ScrumMaster] ensures that the event takes place and that attendants[ScrumEvents,SprintPlanning,Attendees] understand its purpose.
The Scrum Master[ScrumTeam,ScrumMaster] teaches the Scrum Team[ScrumTeam] to keep it within the time-box[Timebox].

Sprint Planning[ScrumEvents,SprintPlanning] answers the following:

- What can be delivered in the Increment[ScrumArtifacts,Increment] resulting from the upcoming Sprint[ScrumEvents,Sprint]?
- How will the work needed to deliver the Increment[ScrumArtifacts,Increment] be achieved?

### Topic One: What can be done this Sprint[ScrumEvents,Sprint]?

The Development Team[ScrumTeam,Developers] works to forecast[Forecast] the functionality that will be developed during the Sprint[ScrumEvents,Sprint].
The Product Owner[ScrumTeam,ProductOwner] discusses the objective that the Sprint[ScrumEvents,Sprint] should achieve and the Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] that, if completed in the Sprint[ScrumEvents,Sprint], would achieve the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].
The entire Scrum Team[ScrumTeam] collaborates on understanding the work of the Sprint[ScrumEvents,Sprint].

The input to this meeting is the Product Backlog[ScrumArtifacts,ProductBacklog], the latest product Increment[ScrumArtifacts,Increment], projected capacity of the Development Team[ScrumTeam,Developers] during the Sprint[ScrumEvents,Sprint], and past performance of the Development Team[ScrumTeam,Developers].
The number of items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] selected from the Product Backlog[ScrumArtifacts,ProductBacklog] for the Sprint[ScrumEvents,Sprint] is solely up to the Development Team[ScrumTeam,Developers].
Only the Development Team[ScrumTeam,Developers] can assess what it can accomplish over the upcoming Sprint[ScrumEvents,Sprint].

During Sprint Planning[ScrumEvents,SprintPlanning] the Scrum Team[ScrumTeam] also crafts a Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].
The Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] is an objective that will be met within the Sprint[ScrumEvents,Sprint] through the implementation of the Product Backlog[ScrumArtifacts,ProductBacklog], and it provides guidance to the Development Team[ScrumTeam,Developers] on why it is building the Increment[ScrumArtifacts,Increment].

### Topic Two: How will the chosen work get done?

Having set the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] and selected the Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] for the Sprint[ScrumEvents,Sprint], the Development Team[ScrumTeam,Developers] decides how it will build this functionality into a "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] product Increment[ScrumArtifacts,Increment] during the Sprint[ScrumEvents,Sprint].
The Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] selected for this Sprint[ScrumEvents,Sprint] plus the plan for delivering them is called the Sprint Backlog[ScrumArtifacts,SprintBacklog].

The Development Team[ScrumTeam,Developers] usually starts by designing the system and the work needed to convert the Product Backlog[ScrumArtifacts,ProductBacklog] into a working product Increment[ScrumArtifacts,Increment].
Work may be of varying size, or estimated effort.
However, enough work is planned during Sprint Planning[ScrumEvents,SprintPlanning] for the Development Team[ScrumTeam,Developers] to forecast[Forecast] what it believes it can do in the upcoming Sprint[ScrumEvents,Sprint].
Work planned for the first days of the Sprint[ScrumEvents,Sprint] by the Development Team[ScrumTeam,Developers] is decomposed by the end of this meeting, often to units of one day[Timebox] or less.
The Development Team[ScrumTeam,Developers] self-organizes[SelfManagement] to undertake the work in the Sprint Backlog[ScrumArtifacts,SprintBacklog], both during Sprint Planning[ScrumEvents,SprintPlanning] and as needed throughout the Sprint[ScrumEvents,Sprint].

The Product Owner[ScrumTeam,ProductOwner] can help to clarify the selected Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] and make trade-offs.
If the Development Team[ScrumTeam,Developers] determines it has too much or too little work, it may renegotiate the selected Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] with the Product Owner[ScrumTeam,ProductOwner].
The Development Team[ScrumTeam,Developers] may also invite other people to attend to provide technical or domain advice.

By the end of the Sprint Planning[ScrumEvents,SprintPlanning], the Development Team[ScrumTeam,Developers] should be able to explain to the Product Owner[ScrumTeam,ProductOwner] and Scrum Master[ScrumTeam,ScrumMaster] how it intends to work as a self-organizing[SelfManagement] team to accomplish the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] and create the anticipated Increment[ScrumArtifacts,Increment].

### Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal]

The Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] is an objective set for the Sprint[ScrumEvents,Sprint] that can be met through the implementation of Product Backlog[ScrumArtifacts,ProductBacklog].
It provides guidance to the Development Team[ScrumTeam,Developers] on why it is building the Increment[ScrumArtifacts,Increment].
It is created during the Sprint Planning[ScrumEvents,SprintPlanning] meeting.
The Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] gives the Development Team[ScrumTeam,Developers] some flexibility regarding the functionality implemented within the Sprint[ScrumEvents,Sprint].
The selected Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] deliver one coherent function[Coherence], which can be the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].
The Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] can be any other coherence[Coherence] that causes the Development Team[ScrumTeam,Developers] to work together rather than on separate initiatives.

As the Development Team[ScrumTeam,Developers] works, it keeps the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] in mind.
In order to satisfy the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal], it implements functionality and technology.
If the work turns out to be different than the Development Team[ScrumTeam,Developers] expected, they collaborate with the Product Owner[ScrumTeam,ProductOwner] to negotiate the scope of Sprint Backlog[ScrumArtifacts,SprintBacklog] within the Sprint[ScrumEvents,Sprint].

## Daily Scrum[ScrumEvents,DailyScrum]

The Daily Scrum[ScrumEvents,DailyScrum] is a 15-minute[Timebox] time-boxed[Timebox] event for the Development Team[ScrumTeam,Developers].
The Daily Scrum[ScrumEvents,DailyScrum] is held every day of the Sprint[ScrumEvents,Sprint].
At it, the Development Team[ScrumTeam,Developers] plans work for the next 24 hours.
This optimizes team collaboration and performance by inspecting[EmpiricalScrumPillars,Inspection] the work since the last Daily Scrum[ScrumEvents,DailyScrum] and forecasting[Forecast] upcoming Sprint[ScrumEvents,Sprint] work.
The Daily Scrum[ScrumEvents,DailyScrum] is held at the same time and place each day to reduce complexity[ReduceComplexity].

The Development Team[ScrumTeam,Developers] uses the Daily Scrum[ScrumEvents,DailyScrum] to inspect[EmpiricalScrumPillars,Inspection] progress toward the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] and to inspect[EmpiricalScrumPillars,Inspection] how progress is trending toward completing the work in the Sprint Backlog[ScrumArtifacts,SprintBacklog].
The Daily Scrum[ScrumEvents,DailyScrum] optimizes the probability that the Development Team[ScrumTeam,Developers] will meet the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].
Every day, the Development Team[ScrumTeam,Developers] should understand how it intends to work together as a self-organizing[SelfManagement] team to accomplish the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] and create the anticipated Increment[ScrumArtifacts,Increment] by the end of the Sprint[ScrumEvents,Sprint].

The structure of the meeting is set by the Development Team[ScrumTeam,Developers] and can be conducted in different ways if it focuses on progress toward the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].
Some Development Teams[ScrumTeam,Developers] will use questions, some will be more discussion based.
Here is an example of what might be used:

- What did I do yesterday that helped the Development Team[ScrumTeam,Developers] meet the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal]?
- What will I do today to help the Development Team[ScrumTeam,Developers] meet the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal]?
- Do I see any impediment[Impediments] that prevents me or the Development Team[ScrumTeam,Developers] from meeting the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal]?

The Development Team[ScrumTeam,Developers] or team members often meet immediately after the Daily Scrum[ScrumEvents,DailyScrum] for detailed discussions, or to adapt[EmpiricalScrumPillars,Adaptation], or replan, the rest of the Sprint's[ScrumEvents,Sprint] work.

The Scrum Master[ScrumTeam,ScrumMaster] ensures that the Development Team[ScrumTeam,Developers] has the meeting, but the Development Team[ScrumTeam,Developers] is responsible[ScrumTeam,Developers,Responsible] for conducting the Daily Scrum[ScrumEvents,DailyScrum].
The Scrum Master[ScrumTeam,ScrumMaster] teaches the Development Team[ScrumTeam,Developers] to keep the Daily Scrum[ScrumEvents,DailyScrum] within the 15-minute[Timebox] time-box[Timebox].

The Daily Scrum[ScrumEvents,DailyScrum] is an internal meeting for the Development Team[ScrumTeam,Developers].
If others are present, the Scrum Master[ScrumTeam,ScrumMaster] ensures that they do not disrupt the meeting.

Daily Scrums[ScrumEvents,DailyScrum] improve communications, eliminate other meetings[ExtendScrum,OtherMeetings], identify impediments[Impediments] to development for removal, highlight and promote quick decision-making, and improve the Development Team's[ScrumTeam,Developers] level of knowledge.
This is a key inspect[EmpiricalScrumPillars,Inspection] and adapt[EmpiricalScrumPillars,Adaptation] meeting.

## Sprint Review[ScrumEvents,SprintReview]

A Sprint Review[ScrumEvents,SprintReview] is held at the end of the Sprint[ScrumEvents,Sprint] to inspect[EmpiricalScrumPillars,Inspection] the Increment[ScrumArtifacts,Increment] and adapt[EmpiricalScrumPillars,Adaptation] the Product Backlog[ScrumArtifacts,ProductBacklog] if needed.
During the Sprint Review[ScrumEvents,SprintReview], the Scrum Team[ScrumTeam] and stakeholders[Stakeholder] collaborate about what was done in the Sprint[ScrumEvents,Sprint].
Based on that and any changes to the Product Backlog[ScrumArtifacts,ProductBacklog] during the Sprint[ScrumEvents,Sprint], attendees[ScrumEvents,SprintReview,Attendees] collaborate on the next things that could be done to optimize value[ValueDelivery].
This is an informal meeting, not a status meeting, and the presentation of the Increment[ScrumArtifacts,Increment] is intended to elicit feedback and foster collaboration.

This is at most a four-hour[Timebox] meeting for one-month Sprints[ScrumEvents,Sprint].
For shorter Sprints[ScrumEvents,Sprint], the event is usually shorter.
The Scrum Master[ScrumTeam,ScrumMaster] ensures that the event takes place and that attendees[ScrumEvents,SprintReview,Attendees] understand its purpose.
The Scrum Master[ScrumTeam,ScrumMaster] teaches everyone involved to keep it within the time-box[Timebox].

The Sprint Review[ScrumEvents,SprintReview] includes the following elements:

- Attendees[ScrumEvents,SprintReview,Attendees] include the Scrum Team[ScrumTeam] and key stakeholders[Stakeholder] invited by the Product Owner[ScrumTeam,ProductOwner];
- The Product Owner[ScrumTeam,ProductOwner] explains what Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] have been "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] and what has
  not been "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone];
- The Development Team[ScrumTeam,Developers] discusses what went well during the Sprint[ScrumEvents,Sprint], what problems it ran
  into, and how those problems were solved;
- The Development Team[ScrumTeam,Developers] demonstrates the work that it has "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] and answers questions
  about the Increment[ScrumArtifacts,Increment];
- The Product Owner[ScrumTeam,ProductOwner] discusses the Product Backlog[ScrumArtifacts,ProductBacklog] as it stands. He or she projects likely
  target and delivery dates based on progress[Forecast] to date (if needed);
- The entire group collaborates on what to do next, so that the Sprint Review[ScrumEvents,SprintReview] provides valuable input to subsequent Sprint Planning[ScrumEvents,SprintPlanning];
- Review of how the marketplace or potential use of the product[Product] might have changed what is the most valuable thing to do next; and,
- Review of the timeline, budget, potential capabilities, and marketplace for the next anticipated releases of functionality or capability of the product[Product].

The result of the Sprint Review[ScrumEvents,SprintReview] is a revised Product Backlog[ScrumArtifacts,ProductBacklog] that defines the probable Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] for the next Sprint[ScrumEvents,Sprint].
The Product Backlog[ScrumArtifacts,ProductBacklog] may also be adjusted overall to meet new opportunities.

## Sprint Retrospective[ScrumEvents,SprintRetrospective]

The Sprint Retrospective[ScrumEvents,SprintRetrospective] is an opportunity for the Scrum Team[ScrumTeam] to inspect[EmpiricalScrumPillars,Inspection] itself and create a plan for improvements[EmpiricalScrumPillars,Adaptation] to be enacted during the next Sprint[ScrumEvents,Sprint].

The Sprint Retrospective[ScrumEvents,SprintRetrospective] occurs after the Sprint Review[ScrumEvents,SprintReview] and prior to the next Sprint Planning[ScrumEvents,SprintPlanning].
This is at most a three-hour[Timebox] meeting for one-month Sprints[ScrumEvents,Sprint].
For shorter Sprints[ScrumEvents,Sprint], the event is usually shorter.
The Scrum Master[ScrumTeam,ScrumMaster] ensures that the event takes place and that attendants[ScrumEvents,SprintRetrospective,Attendees] understand its purpose.

The Scrum Master[ScrumTeam,ScrumMaster] ensures that the meeting is positive and productive.
The Scrum Master[ScrumTeam,ScrumMaster] teaches all to keep it within the time-box[Timebox].
The Scrum Master[ScrumTeam,ScrumMaster] participates as a peer team member in the meeting from the accountability[Accountable] over the Scrum process.

The purpose of the Sprint Retrospective[ScrumEvents,SprintRetrospective] is to:

- Inspect[EmpiricalScrumPillars,Inspection] how the last Sprint[ScrumEvents,Sprint] went with regards to people, relationships, process, and tools;
- Identify and order the major items that went well and potential improvements[EmpiricalScrumPillars,Adaptation]; and,
- Create a plan for implementing improvements[EmpiricalScrumPillars,Adaptation] to the way the Scrum Team[ScrumTeam] does its work.

The Scrum Master[ScrumTeam,ScrumMaster] encourages the Scrum Team[ScrumTeam] to improve[EmpiricalScrumPillars,Adaptation], within the Scrum process framework[Framework], its development process and practices to make it more effective and enjoyable for the next Sprint[ScrumEvents,Sprint].
During each Sprint Retrospective[ScrumEvents,SprintRetrospective], the Scrum Team[ScrumTeam] plans ways to increase product quality[Quality] by improving[EmpiricalScrumPillars,Adaptation] work processes or adapting[EmpiricalScrumPillars,Adaptation] the definition of "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone], if appropriate and not in conflict with product[Product] or organizational[Organization] standards.

By the end of the Sprint Retrospective[ScrumEvents,SprintRetrospective], the Scrum Team[ScrumTeam] should have identified improvements[EmpiricalScrumPillars,Adaptation] that it will implement in the next Sprint[ScrumEvents,Sprint].
Implementing these improvements[EmpiricalScrumPillars,Adaptation] in the next Sprint[ScrumEvents,Sprint] is the adaptation[EmpiricalScrumPillars,Adaptation] to the inspection[EmpiricalScrumPillars,Inspection] of the Scrum Team[ScrumTeam] itself.
Although improvements[EmpiricalScrumPillars,Adaptation] may be implemented at any time, the Sprint Retrospective[ScrumEvents,SprintRetrospective] provides a formal opportunity to focus on inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation].

# Scrum Artifacts[ScrumArtifacts]

Scrum's artifacts[ScrumArtifacts] represent work or value[ValueDelivery] to provide transparency[EmpiricalScrumPillars,Transparency] and opportunities for inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation].
Artifacts[ScrumArtifacts] defined by Scrum are specifically designed to maximize transparency[EmpiricalScrumPillars,Transparency] of key information so that everybody has the same understanding of the artifact[ScrumArtifacts].

## Product Backlog[ScrumArtifacts,ProductBacklog]

The Product Backlog[ScrumArtifacts,ProductBacklog] is an ordered list of everything that is known to be needed in the product[Product].
It is the single source of requirements for any changes to be made to the product[Product].
The Product Owner[ScrumTeam,ProductOwner] is responsible[ScrumTeam,ProductOwner,Responsible] for the Product Backlog[ScrumArtifacts,ProductBacklog], including its content, availability, and ordering.

A Product Backlog[ScrumArtifacts,ProductBacklog] is never complete.
The earliest development of it lays out the initially known and best-understood requirements.
The Product Backlog[ScrumArtifacts,ProductBacklog] evolves as the product[Product] and the environment in which it will be used evolves.
The Product Backlog[ScrumArtifacts,ProductBacklog] is dynamic; it constantly changes to identify what the product[Product] needs to be appropriate, competitive, and useful.
If a product[Product] exists, its Product Backlog[ScrumArtifacts,ProductBacklog] also exists.

The Product Backlog[ScrumArtifacts,ProductBacklog] lists all features, functions, requirements, enhancements, and fixes that constitute the changes to be made to the product[Product] in future releases.
Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] have the attributes of a description, order, estimate, and value[ValueDelivery].
Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] often include test descriptions that will prove its completeness when "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone].

As a product[Product] is used and gains value[ValueDelivery], and the marketplace provides feedback, the Product Backlog[ScrumArtifacts,ProductBacklog] becomes a larger and more exhaustive list.
Requirements never stop changing, so a Product Backlog[ScrumArtifacts,ProductBacklog] is a living artifact.
Changes in business requirements, market conditions, or technology may cause changes in the Product Backlog[ScrumArtifacts,ProductBacklog].

Multiple Scrum Teams[ScrumTeam] often work together on the same product[Product].
One Product Backlog[ScrumArtifacts,ProductBacklog] is used to describe the upcoming work on the product[Product].
A Product Backlog[ScrumArtifacts,ProductBacklog] attribute that groups items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] may then be employed.

Product Backlog refinement[ProductBacklogRefinement] is the act of adding detail, estimates, and order to items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] in the Product Backlog[ScrumArtifacts,ProductBacklog].
This is an ongoing process in which the Product Owner[ScrumTeam,ProductOwner] and the Development Team[ScrumTeam,Developers] collaborate on the details of Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem].
During Product Backlog refinement[ProductBacklogRefinement], items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] are reviewed and revised.
The Scrum Team[ScrumTeam] decides how and when refinement[ProductBacklogRefinement] is done.
Refinement[ProductBacklogRefinement] usually consumes no more than 10% of the capacity of the Development Team[ScrumTeam,Developers].
However, Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] can be updated at any time by the Product Owner[ScrumTeam,ProductOwner] or at the Product Owner's[ScrumTeam,ProductOwner] discretion.

Higher ordered Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] are usually clearer and more detailed than lower ordered ones.
More precise estimates are made based on the greater clarity and increased detail; the lower the order, the less detail.
Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] that will occupy the Development Team[ScrumTeam,Developers] for the upcoming Sprint[ScrumEvents,Sprint] are refined[ProductBacklogRefinement] so that any one item[ScrumArtifacts,ProductBacklog,ProductBacklogItem] can reasonably be "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] within the Sprint[ScrumEvents,Sprint] time-box[Timebox].
Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] that can be "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] by the Development Team[ScrumTeam,Developers] within one Sprint[ScrumEvents,Sprint] are deemed "Ready"[Ready] for selection in a Sprint Planning[ScrumEvents,SprintPlanning].
Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] usually acquire this degree of transparency[EmpiricalScrumPillars,Transparency] through the above described refining[ProductBacklogRefinement] activities.

The Development Team[ScrumTeam,Developers] is responsible[ScrumTeam,Developers,Responsible] for all estimates.
The Product Owner[ScrumTeam,ProductOwner] may influence the Development Team[ScrumTeam,Developers] by helping it understand and select trade-offs, but the people who will perform the work make the final estimate.

### Monitoring Progress Toward Goals

At any point in time, the total work remaining to reach a goal can be summed.
The Product Owner[ScrumTeam,ProductOwner] tracks this total work remaining at least every Sprint Review[ScrumEvents,SprintReview].
The Product Owner[ScrumTeam,ProductOwner] compares this amount with work remaining at previous Sprint Reviews[ScrumEvents,SprintReview] to assess progress[Forecast] toward completing projected work by the desired time for the goal.
This information is made transparent[EmpiricalScrumPillars,Transparency] to all stakeholders[Stakeholder].

Various projective practices upon trending have been used to forecast[Forecast] progress, like burn-downs[ExtendScrum,BurnDown], burn-ups[ExtendScrum,BurnUp], or cumulative flows[ExtendScrum].
These have proven useful.
However, these do not replace the importance of empiricism[Empiricism].
In complex environments, what will happen is unknown[Uncertainty].
Only what has already happened may be used for forward-looking[Forecast] decision-making.

## Sprint Backlog[ScrumArtifacts,SprintBacklog]

The Sprint Backlog[ScrumArtifacts,SprintBacklog] is the set of Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] selected for the Sprint[ScrumEvents,Sprint], plus a plan for delivering the product Increment[ScrumArtifacts,Increment] and realizing the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].
The Sprint Backlog[ScrumArtifacts,SprintBacklog] is a forecast[Forecast] by the Development Team[ScrumTeam,Developers] about what functionality will be in the next Increment[ScrumArtifacts,Increment] and the work needed to deliver that functionality into a "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] Increment[ScrumArtifacts,Increment].

The Sprint Backlog[ScrumArtifacts,SprintBacklog] makes visible[EmpiricalScrumPillars,Transparency] all the work that the Development Team[ScrumTeam,Developers] identifies as necessary to meet the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].
To ensure continuous improvement[EmpiricalScrumPillars,Adaptation], it includes at least one high priority process improvement identified in the previous Retrospective[ScrumEvents,SprintRetrospective] meeting.

The Sprint Backlog[ScrumArtifacts,SprintBacklog] is a plan with enough detail that changes in progress can be understood in the Daily Scrum[ScrumEvents,DailyScrum].
The Development Team[ScrumTeam,Developers] modifies the Sprint Backlog[ScrumArtifacts,SprintBacklog] throughout the Sprint[ScrumEvents,Sprint], and the Sprint Backlog[ScrumArtifacts,SprintBacklog] emerges[Emergence] during the Sprint[ScrumEvents,Sprint].
This emergence[Emergence] occurs as the Development Team[ScrumTeam,Developers] works through the plan and learns[Learn] more about the work needed to achieve the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].

As new work is required, the Development Team[ScrumTeam,Developers] adds it to the Sprint Backlog[ScrumArtifacts,SprintBacklog].
As work is performed or completed, the estimated remaining work is updated.
When elements of the plan are deemed unnecessary, they are removed.
Only the Development Team[ScrumTeam,Developers] can change its Sprint Backlog[ScrumArtifacts,SprintBacklog] during a Sprint[ScrumEvents,Sprint].
The Sprint Backlog[ScrumArtifacts,SprintBacklog] is a highly visible[EmpiricalScrumPillars,Transparency], real-time picture of the work that the Development Team[ScrumTeam,Developers] plans to accomplish during the Sprint[ScrumEvents,Sprint], and it belongs solely to the Development Team[ScrumTeam,Developers].

### Monitoring Sprint Progress

At any point in time in a Sprint[ScrumEvents,Sprint], the total work remaining in the Sprint Backlog[ScrumArtifacts,SprintBacklog] can be summed.
The Development Team[ScrumTeam,Developers] tracks this total work remaining at least for every Daily Scrum[ScrumEvents,DailyScrum] to project the likelihood of achieving the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].
By tracking the remaining work throughout the Sprint[ScrumEvents,Sprint], the Development Team[ScrumTeam,Developers] can manage its progress.

## Increment[ScrumArtifacts,Increment]

The Increment[ScrumArtifacts,Increment] is the sum of all the Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] completed during a Sprint[ScrumEvents,Sprint] and the value[ValueDelivery] of the increments[ScrumArtifacts,Increment] of all previous Sprints[ScrumEvents,Sprint].
At the end of a Sprint[ScrumEvents,Sprint], the new Increment[ScrumArtifacts,Increment] must be "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone], which means it must be in useable condition and meet the Scrum Team's[ScrumTeam] definition of "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone]. 
An increment[ScrumArtifacts,Increment] is a body of inspectable[EmpiricalScrumPillars,Inspection], done work that supports empiricism[Empiricism] at the end of the Sprint[ScrumEvents,Sprint].
The increment[ScrumArtifacts,Increment] is a step toward a vision or goal.
The increment[ScrumArtifacts,Increment] must be in useable condition regardless of whether the Product Owner[ScrumTeam,ProductOwner] decides to release it.

# Artifact Transparency[EmpiricalScrumPillars,Transparency]

Scrum relies on transparency[EmpiricalScrumPillars,Transparency].
Decisions to optimize value[ValueDelivery] and control risk[Risk] are made based on the perceived state of the artifacts[ScrumArtifacts].
To the extent that transparency[EmpiricalScrumPillars,Transparency] is complete, these decisions have a sound basis.
To the extent that the artifacts[ScrumArtifacts] are incompletely transparent[EmpiricalScrumPillars,Transparency], these decisions can be flawed, value[ValueDelivery] may diminish and risk[Risk] may increase.

The Scrum Master[ScrumTeam,ScrumMaster] must work with the Product Owner[ScrumTeam,ProductOwner], Development Team[ScrumTeam,Developers], and other involved parties to understand if the artifacts[ScrumArtifacts] are completely transparent[EmpiricalScrumPillars,Transparency].
There are practices for coping with incomplete transparency[EmpiricalScrumPillars,Transparency]; the Scrum Master[ScrumTeam,ScrumMaster] must help everyone apply the most appropriate practices in the absence of complete transparency[EmpiricalScrumPillars,Transparency].
A Scrum Master[ScrumTeam,ScrumMaster] can detect incomplete transparency[EmpiricalScrumPillars,Transparency] by inspecting[EmpiricalScrumPillars,Inspection] the artifacts[ScrumArtifacts], sensing patterns, listening closely to what is being said, and detecting differences between expected and real results.

The Scrum Master's[ScrumTeam,ScrumMaster] job is to work with the Scrum Team[ScrumTeam] and the organization[Organization] to increase the transparency[EmpiricalScrumPillars,Transparency] of the artifacts[ScrumArtifacts].
This work usually involves learning[Learn], convincing, and change.
Transparency[EmpiricalScrumPillars,Transparency] doesn't occur overnight, but is a path.

## Definition of "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone]

When a Product Backlog item[ScrumArtifacts,ProductBacklog,ProductBacklogItem] or an Increment[ScrumArtifacts,Increment] is described as "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone], everyone must understand what "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] means.
Although this may vary significantly per Scrum Team[ScrumTeam], members must have a shared understanding of what it means for work to be complete, to ensure transparency[EmpiricalScrumPillars,Transparency].
This is the definition of "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] for the Scrum Team[ScrumTeam] and is used to assess when work is complete on the product Increment[ScrumArtifacts,Increment].

The same definition guides the Development Team[ScrumTeam,Developers] in knowing how many Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] it can select during a Sprint Planning[ScrumEvents,SprintPlanning].
The purpose of each Sprint[ScrumEvents,Sprint] is to deliver Increments[ScrumArtifacts,Increment] of potentially releasable functionality that adhere to the Scrum Team's[ScrumTeam] current definition of "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone].

Development Teams[ScrumTeam,Developers] deliver an Increment[ScrumArtifacts,Increment] of product functionality every Sprint[ScrumEvents,Sprint].
This Increment[ScrumArtifacts,Increment] is useable, so a Product Owner[ScrumTeam,ProductOwner] may choose to immediately release it.
If the definition of "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] for an increment[ScrumArtifacts,Increment] is part of the conventions, standards or guidelines of the development organization[Organization], all Scrum Teams[ScrumTeam] must follow it as a minimum.

If "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] for an increment[ScrumArtifacts,Increment] is not a convention of the development organization[Organization], the Development Team[ScrumTeam,Developers] of the Scrum Team[ScrumTeam] must define a definition of "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] appropriate for the product[Product].
If there are multiple Scrum Teams[ScrumTeams,ScaledScrum] working on the system or product[Product] release, the Development Teams[ScrumTeam,Developers] on all the Scrum Teams[ScrumTeams,ScaledScrum] must mutually define the definition of "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone].

Each Increment[ScrumArtifacts,Increment] is additive to all prior Increments[ScrumArtifacts,Increment] and thoroughly tested, ensuring that all Increments[ScrumArtifacts,Increment] work together.

As Scrum Teams[ScrumTeam] mature, it is expected that their definitions of "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] will expand to include more stringent criteria for higher quality[Quality].
New definitions, as used, may uncover work to be done in previously "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] increments[ScrumArtifacts,Increment].
Any one product[Product] or system should have a definition of "Done"[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] that is a standard for any work done on it.

# End Note

Scrum is free and offered in this Guide.
Scrum's roles[ScrumTeam], events[ScrumEvents], artifacts[ScrumArtifacts], and rules are immutable[NoChangesAreAllowed] and although implementing only parts of Scrum is possible, the result is not Scrum[ExtendScrum].
Scrum exists only in its entirety and functions well as a container for other techniques, methodologies, and practices[ExtendScrum].

# Copyright

©2017 Ken Schwaber and Jeff Sutherland. Offered for license under the Attribution Share-Alike license of Creative Commons, accessible at http://creativecommons.org/licenses/by-sa/4.0/legalcode and also described in summary form at http://creativecommons.org/licenses/by-sa/4.0/. By utilizing this Scrum Guide, you acknowledge and agree that you have read and agree to be bound by the terms of the Attribution Share-Alike license of Creative Commons.

`,oa=`# Scrum Definition

Scrum is a lightweight framework[Framework,ExtendScrum] that helps people, teams and organizations[Organization] generate value[ValueDelivery] through adaptive[EmpiricalScrumPillars,Adaptation] solutions for complex problems.

In a nutshell, Scrum requires a Scrum Master[ScrumTeam,ScrumMaster] to foster an environment where:

1. A Product Owner[ScrumTeam,ProductOwner] orders the work[ScrumArtifacts,ProductBacklog,ProductBacklogItem] for a complex problem into a Product Backlog[ScrumArtifacts,ProductBacklog].
2. The Scrum Team[ScrumTeam] turns a selection of the work[SprintBacklogItem,ScrumArtifacts,ProductBacklog,ProductBacklogItem] into an Increment[ScrumArtifacts,Increment] of value during a Sprint[ScrumEvents,Sprint].
3. The Scrum Team[ScrumTeam] and its stakeholders[Stakeholder] inspect[EmpiricalScrumPillars,Inspection] the results[Increment] and adjust[EmpiricalScrumPillars,Adaptation] for the next Sprint[ScrumEvents,Sprint].[ScrumEvent,SprintReview]
4. Repeat[Cadence]

Scrum is simple.
Try it[Scrum] as is and determine if its philosophy, theory, and structure help to achieve goals[Commitment,ProductGoal,SprintGoal] and create value[ValueDelivery].
The Scrum framework[Framework] is purposefully incomplete, only defining the parts required to implement Scrum theory.[ExtendScrum]
Scrum is built upon by the collective intelligence of the people using it.
Rather than provide people with detailed instructions, the rules of Scrum guide their relationships[ScrumTeam] and interactions[ScrumEvent].

Various processes, techniques and methods can be employed within the framework[Framework].
Scrum wraps around existing practices or renders them unnecessary[Lean,WasteReduction].
Scrum makes visible[EmpiricalScrumPillars,Transparency] the relative efficacy of current management[Management], environment, and work techniques, so that improvements[EmpiricalScrumPillars,Adaptation] can be made.

# Scrum Theory

Scrum is founded on empiricism[Empiricism] and lean thinking.
Empiricism[Empiricism] asserts that knowledge comes from experience and making decisions based on what is observed[EmpiricalScrumPillars,Inspection].
Lean thinking reduces waste[Lean,WasteReduction] and focuses[ScrumValues,Focus] on the essentials.

Scrum employs an iterative[Cadence], incremental[Increment] approach to optimize predictability and to control risk[Risk].
Scrum engages groups of people[ScrumTeam] who collectively have all the skills and expertise to do the work and share or acquire such skills as needed[Learn].[SelfManagement]

Scrum combines four formal events[ScrumEvents] for inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation], within a containing event[ScrumEvents], the Sprint[ScrumEvents,Sprint].
These events[ScrumEvents] work because they[ScrumEvents] implement the empirical[Empiricism] Scrum pillars[EmpiricalScrumPillars] of transparency[EmpiricalScrumPillars,Transparency], inspection[EmpiricalScrumPillars,Inspection], and adaptation[EmpiricalScrumPillars,Adaptation].

## Transparency[EmpiricalScrumPillars,Transparency]

The emergent[Emergence] process and work must be visible[EmpiricalScrumPillars,Transparency] to those performing the work[ScrumTeam,Developers] as well as those receiving the work[Stakeholder].
With Scrum, important decisions are based on the perceived state of its three formal artifacts[ScrumArtifacts].
Artifacts[ScrumArtifacts] that have low transparency[EmpiricalScrumPillars,Transparency] can lead to decisions that diminish value and increase risk.[Risk]
Transparency[EmpiricalScrumPillars,Transparency] enables inspection[EmpiricalScrumPillars,Inspection].
Inspection[EmpiricalScrumPillars,Inspection] without transparency[EmpiricalScrumPillars,Transparency] is misleading and wasteful.[Risk]

## Inspection[EmpiricalScrumPillars,Inspection]

The Scrum artifacts[ScrumArtifacts] and the progress toward agreed goals[Commitment,ProductGoal,SprintGoal] must be inspected[EmpiricalScrumPillars,Inspection] frequently and diligently to detect potentially undesirable variances or problems.[Risk]
To help with inspection[EmpiricalScrumPillars,Inspection], Scrum provides cadence[Cadence] in the form of its five events[ScrumEvents].

Inspection[EmpiricalScrumPillars,Inspection] enables adaptation[EmpiricalScrumPillars,Adaptation].
Inspection[EmpiricalScrumPillars,Inspection] without adaptation[EmpiricalScrumPillars,Adaptation] is considered pointless[ScrumValues,Courage].[Risk]
Scrum events[ScrumEvents] are designed to provoke change[EmpiricalScrumPillars,Adaptation].

## Adaptation[EmpiricalScrumPillars,Adaptation]

If any aspects of a process deviate outside acceptable limits or if the resulting product[Product] is unacceptable[ScrumArtifacts,Increment,Commitment,DefinitionOfDone], the process being applied[ScrumEvents] or the materials being produced[ScrumArtifacts] must be adjusted[EmpiricalScrumPillars,Adaptation].
The adjustment[EmpiricalScrumPillars,Adaptation] must be made as soon as possible to minimize further deviation.

Adaptation[EmpiricalScrumPillars,Adaptation] becomes more difficult when the people involved are not empowered[Management] or self-managing[SelfManagement].[Risk]
A Scrum Team[ScrumTeam] is expected to adapt[EmpiricalScrumPillars,Adaptation] the moment it learns[Learn] anything new through inspection[EmpiricalScrumPillars,Inspection].

# Scrum Values[ScrumValues]

Successful use of Scrum depends on people becoming more proficient in living five values[ScrumValues]:
**Commitment, Focus, Openness, Respect, and Courage**[ScrumValues]

The Scrum Team[ScrumTeam] commits[ScrumValues,Commitment] to achieving its goals[Commitment,ProductGoal,SprintGoal] and to supporting each other.
Their primary focus[ScrumValues,Focus] is on the work of the Sprint[ScrumEvents,Sprint] to make the best possible progress toward these goals[Commitment,ProductGoal,SprintGoal].
The Scrum Team[ScrumTeam] and its stakeholders[Stakeholder] are open[ScrumValues,Openness] about the work and the challenges.
Scrum Team[ScrumTeam] members respect[ScrumValues,Respect] each other to be capable, independent people, and are respected[ScrumValues,Respect] as such by the people with whom they work.
The Scrum Team[ScrumTeam] members have the courage[ScrumValues,Courage] to do the right thing, to work on tough problems.

These values[ScrumValues] give direction to the Scrum Team[ScrumTeam] with regard to their work, actions, and behavior.
The decisions that are made, the steps taken, and the way Scrum is used should reinforce these values[ScrumValues], not diminish or undermine them[ScrumValues].[Management,Risk]
The Scrum Team[ScrumTeam] members learn[Learn] and explore the values[ScrumValues] as they[ScrumTeam] work with the Scrum events[ScrumEvents] and artifacts[ScrumArtifacts].
When these values[ScrumValues] are embodied by the Scrum Team[ScrumTeam] and the people they[ExternalPeople] work with, the empirical[Empiricism] Scrum pillars of transparency[EmpiricalScrumPillars,Transparency], inspection[EmpiricalScrumPillars,Inspection], and adaptation[EmpiricalScrumPillars,Adaptation] come to life building trust.

# Scrum Team[ScrumTeam]

The fundamental unit of Scrum is a small team[ScrumTeam] of people, a Scrum Team[ScrumTeam].
The Scrum Team[ScrumTeam] consists of one Scrum Master[ScrumTeam,ScrumMaster], one Product Owner[ScrumTeam,ProductOwner], and Developers[ScrumTeam,Developers].
Within a Scrum Team[ScrumTeam], there are no sub-teams or hierarchies.[Risk]
It[ScrumTeam] is a cohesive unit of professionals focused[ScrumValues,Focus] on one objective at a time, the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal].

Scrum Teams[ScrumTeam] are cross-functional[CrossFunctional], meaning the members have all the skills[CrossFunctional] necessary to create value each Sprint[ScrumEvents,Sprint].
They[ScrumTeam] are also self-managing[SelfManagement], meaning they[ScrumTeam] internally decide who does what, when, and how.

The Scrum Team[ScrumTeam] is small enough to remain nimble and large enough to complete significant work within a Sprint[ScrumEvents,Sprint], typically 10 or fewer people.
In general, we have found that smaller teams[ScrumTeam] communicate better and are more productive.
If Scrum Teams[ScrumTeam] become too large, they[ScrumTeam] should consider reorganizing into multiple cohesive Scrum Teams[ScrumTeams,ScaledScrum], each focused[ScrumValues,Focus] on the same product.[Risk]
Therefore, they[ScrumTeams] should share the same Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal], Product Backlog[ScrumArtifacts,ProductBacklog], and Product Owner[ScrumTeam,ProductOwner].

The Scrum Team[ScrumTeam] is responsible[Responsible] for all product-related activities from stakeholder[Stakeholder] collaboration, verification[Learn], maintenance, operation, experimentation, research and development, and anything else that might be required.[CrossFunctional]
They[ScrumTeam] are structured and empowered[Management] by the organization[Organization] to manage[Management] their[ScrumTeam] own work.
Working in Sprints[ScrumEvents,Sprint] at a sustainable pace improves[EmpiricalScrumPillars,Adaptation] the Scrum Team's[ScrumTeam] focus[ScrumValues,Focus] and consistency[ReduceComplexity].

The entire Scrum Team[ScrumTeam] is accountable[ScrumTeam,Accountable] for creating a valuable, useful Increment[ScrumArtifacts] every Sprint[ScrumEvents,Sprint].
Scrum defines three specific accountabilities[Accountable] within the Scrum Team[ScrumTeam]: the Developers[ScrumTeam,Developers], the Product Owner[ScrumTeam,ProductOwner], and the Scrum Master[ScrumTeam,ScrumMaster].

## Developers[ScrumTeam,Developers]

Developers[ScrumTeam,Developers] are the people in the Scrum Team[ScrumTeam] that are committed[ScrumValues,Commitment] to creating any aspect of a usable Increment[ScrumArtifacts] each Sprint[ScrumEvents,Sprint].

The specific skills needed by the Developers[ScrumTeam,Developers] are often broad and will vary with the domain of work. However, the Developers[ScrumTeam,Developers] are always accountable[ScrumTeam,Developers,Accountable] for:

- Creating a plan for the Sprint[ScrumEvents,Sprint], the Sprint Backlog;[ScrumTeam,Developers,Accountable]
- Instilling quality[Quality] by adhering to a Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone];[ScrumTeam,Developers,Accountable]
- Adapting[EmpiricalScrumPillars,Adaptation] their plan each day toward the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal]; and,[ScrumTeam,Developers,Accountable]
- Holding each other accountable as professionals.[ScrumTeam,Developers,Accountable]

## Product Owner[ScrumTeam,ProductOwner]

The Product Owner[ScrumTeam,ProductOwner] is accountable[ScrumTeam,ProductOwner,Accountable] for maximizing the value of the product[Product] resulting from the work of the Scrum Team[ScrumTeam].
How this is done may vary widely across organizations[Organization], Scrum Teams[ScrumTeam], and individuals.

The Product Owner[ScrumTeam,ProductOwner] is also accountable[ScrumTeam,ProductOwner,Accountable] for effective Product Backlog[ScrumArtifacts,ProductBacklog] management, which includes:

- Developing and explicitly communicating the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal];[ScrumTeam,ProductOwner,Accountable]
- Creating and clearly communicating Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem];[ScrumTeam,ProductOwner,Accountable]
- Ordering Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem]; and,[ScrumTeam,ProductOwner,Accountable]
- Ensuring that the Product Backlog[ScrumArtifacts,ProductBacklog] is transparent[EmpiricalScrumPillars,Transparency], visible[EmpiricalScrumPillars,Transparency] and understood.[ScrumTeam,ProductOwner,Accountable]

The Product Owner[ScrumTeam,ProductOwner] may do the above work or may delegate the responsibility[ScrumTeam,ProductOwner,Responsible] to others.
Regardless, the Product Owner[ScrumTeam,ProductOwner] remains accountable.[ScrumTeam,ProductOwner,Accountable]

For Product Owners[ScrumTeam,ProductOwner] to succeed, the entire organization[Organization] must respect[ScrumValues,Respect] their decisions.[Management]
These decisions are visible[EmpiricalScrumPillars,Transparency] in the content and ordering of the Product Backlog[ScrumArtifacts,ProductBacklog], and through the inspectable[EmpiricalScrumPillars,Inspection] Increment[ScrumArtifacts] at the Sprint Review[ScrumEvents,SprintReview].[ScrumTeam,ProductOwner]

The Product Owner[ScrumTeam,ProductOwner] is one person, not a committee.
The Product Owner[ScrumTeam,ProductOwner] may represent the needs of many stakeholders[Stakeholder] in the Product Backlog[ScrumArtifacts,ProductBacklog].
Those wanting to change the Product Backlog[ScrumArtifacts,ProductBacklog] can do so by trying to convince the Product Owner[ScrumTeam,ProductOwner].

## Scrum Master[ScrumTeam,ScrumMaster]

The Scrum Master[ScrumTeam,ScrumMaster] is accountable[ScrumTeam,ScrumMaster,Accountable] for establishing Scrum as defined in the Scrum Guide.
They[ScrumTeam,ScrumMaster] do this by helping everyone understand Scrum theory and practice, both within the Scrum Team[ScrumTeam] and the organization[Organization].

The Scrum Master[ScrumTeam,ScrumMaster] is accountable[ScrumTeam,ScrumMaster,Accountable] for the Scrum Team's[ScrumTeam] effectiveness.
They[ScrumTeam,ScrumMaster] do this by enabling the Scrum Team[ScrumTeam] to improve[EmpiricalScrumPillars,Adaptation] its practices, within the Scrum framework[Framework].

Scrum Masters[ScrumTeam,ScrumMaster] are true leaders who serve[Serve] the Scrum Team[ScrumTeam] and the larger organization[Organization].

The Scrum Master[ScrumTeam,ScrumMaster] serves[ScrumTeam,ScrumMaster,Serve] the Scrum Team[ScrumTeam] in several ways, including:

- Coaching the team members[ScrumTeam] in self-management[SelfManagement] and cross-functionality[CrossFunctional];[ScrumTeam,ScrumMaster,Serve]
- Helping the Scrum Team[ScrumTeam] focus[ScrumValues,Focus] on creating high-value Increments[ScrumTeam,ScrumMaster,Serve,ScrumArtifacts,Increment,ValueDelivery];
- Causing the removal of impediments[Impediments] to the Scrum Team's[ScrumTeam] progress; and,[ScrumTeam,ScrumMaster,Serve]
- Ensuring that all Scrum events[ScrumEvents] take place and are positive, productive, and kept within the timebox[Timebox].[ScrumTeam,ScrumMaster,Serve]

The Scrum Master[ScrumTeam,ScrumMaster] serves[ScrumTeam,ScrumMaster,Serve] the Product Owner[ScrumTeam,ProductOwner] in several ways, including:

- Helping find techniques for effective Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal] definition and Product Backlog[ScrumArtifacts,ProductBacklog] management;[ScrumTeam,ScrumMaster,Serve]
- Helping the Scrum Team[ScrumTeam] understand the need for clear and concise Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem];[ScrumTeam,ScrumMaster,Serve]
- Helping establish empirical[Empiricism] product[Product] planning for a complex environment[Uncertainty]; and,[ScrumTeam,ScrumMaster,Serve]
- Facilitating stakeholder[Stakeholder] collaboration as requested or needed.[ScrumTeam,ScrumMaster,Serve]

The Scrum Master[ScrumTeam,ScrumMaster] serves[ScrumTeam,ScrumMaster,Serve] the organization[Organization] in several ways, including:

- Leading, training, and coaching the organization[Organization] in its Scrum adoption;[ScrumTeam,ScrumMaster,Serve,Adaptation]
- Planning and advising Scrum implementations within the organization[Organization];[ScrumTeam,ScrumMaster,Serve]
- Helping employees and stakeholders[Stakeholder] understand and enact an empirical[Empiricism] approach for complex work; and,[ScrumTeam,ScrumMaster,Serve]
- Removing barriers[Impediments] between stakeholders[Stakeholder] and Scrum Teams[ScrumTeam].[ScrumTeam,ScrumMaster,Serve,Risk]

# Scrum Events[ScrumEvents]

The Sprint[ScrumEvents,Sprint] is a container for all other events[ScrumEvents].
Each event[ScrumEvents] in Scrum is a formal opportunity to inspect[EmpiricalScrumPillars,Inspection] and adapt[EmpiricalScrumPillars,Adaptation] Scrum artifacts[ScrumArtifacts].
These events[ScrumEvents] are specifically designed to enable the transparency[EmpiricalScrumPillars,Transparency] required.
Failure to operate any events[ScrumEvents] as prescribed results in lost opportunities to inspect[EmpiricalScrumPillars,Inspection] and adapt[EmpiricalScrumPillars,Adaptation].[Risk]
Events[ScrumEvents] are used in Scrum to create regularity[Cadence] and to minimize the need for meetings not defined in Scrum[ExtendScrum,OtherMeetings].
Optimally, all events[ScrumEvents] are held at the same time and place to reduce complexity[ReduceComplexity].

## The Sprint[ScrumEvents,Sprint]

Sprints[ScrumEvents,Sprint] are the heartbeat[Cadence] of Scrum, where ideas are turned into value.

They[ScrumEvents,Sprint] are fixed length[Timebox] events[ScrumEvents,Sprint] of one month[Timebox] or less to create consistency[ReduceComplexity].
A new Sprint[ScrumEvents,Sprint] starts immediately after the conclusion of the previous Sprint[ScrumEvents,Order,ScrumEvents,Sprint].

All the work[ProductBacklogItem] necessary to achieve the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal], including Sprint Planning[ScrumEvents,SprintPlanning], Daily Scrums[ScrumEvents,DailyScrum], Sprint Review[ScrumEvents,SprintReview], and Sprint Retrospective[ScrumEvents,SprintRetrospective], happen within Sprints[ScrumEvents,Sprint].

During the Sprint[ScrumEvents,Sprint]:

- No changes[EmpiricalScrumPillars,Adaptation] are made that would endanger the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal];[Risk]
- Quality[Quality] does not decrease;
- The Product Backlog[ScrumArtifacts,ProductBacklog] is refined[EmpiricalScrumPillars,Adaptation] as needed; and,
- Scope may be clarified and renegotiated[EmpiricalScrumPillars,Adaptation] with the Product Owner[ScrumTeam,ProductOwner] as more is learned[Learn].

Sprints[ScrumEvents,Sprint] enable predictability[Forecast] by ensuring inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation] of progress toward a Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal] at least every calendar month[Timebox].
When a Sprint's[ScrumEvents,Sprint] horizon[Timebox] is too long[Timebox] the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] may become invalid, complexity may rise[ReduceComplexity], and risk may[Uncertainty] increase.[Risk]
Shorter[Timebox] Sprints[ScrumEvents,Sprint] can be employed to generate more learning[Learn] cycles[Cadence] and limit risk of cost and effort to a smaller time frame[Timebox].
Each Sprint[ScrumEvents,Sprint] may be considered a short project.

Various practices exist to forecast[Forecast] progress, like burn-downs[ExtendScrum,BurnDown], burn-ups[ExtendScrum,BurnUp], or cumulative flows[ExtendScrum].
While proven useful, these do not replace the importance of empiricism[Empiricism].
In complex environments, what will happen is unknown[Uncertainty].[Risk]
Only what has already happened may be used for forward-looking[Forecast] decision making.

A Sprint[ScrumEvents,Sprint] could be cancelled if the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] becomes obsolete.
Only the Product Owner[ScrumTeam,ProductOwner] has the authority[ScrumTeam,ProductOwner,Responsible] to cancel the Sprint[ScrumEvents,Sprint].

## Sprint Planning[ScrumEvents,SprintPlanning]

Sprint Planning[ScrumEvents,SprintPlanning] initiates[ScrumEvents,Order] the Sprint[ScrumEvents,Sprint] by laying out[EmpiricalScrumPillars,Transparency] the work to be performed for the Sprint[ScrumEvents,Sprint].
This resulting plan[SprintBacklog] is created by the collaborative work of the entire Scrum Team[ScrumTeam,ScrumEvents,SprintPlanning,Attendees].

The Product Owner[ScrumTeam,ProductOwner] ensures[ScrumTeam,ProductOwner,Responsible] that attendees[ScrumEvents,SprintPlanning,Attendees] are prepared to discuss the most important Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] and how they[ScrumArtifacts,ProductBacklog,ProductBacklogItem] map to the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal].
The Scrum Team[ScrumTeam] may also invite other people to attend[ScrumEvents,SprintPlanning,Attendees] Sprint Planning[ScrumEvents,SprintPlanning] to provide advice.

Sprint Planning[ScrumEvents,SprintPlanning] addresses the following topics:

**Topic One: Why is this Sprint[ScrumEvents,Sprint] valuable?**

The Product Owner[ScrumTeam,ProductOwner] proposes how the product[Product] could increase its value and utility in the current Sprint[ScrumEvents,Sprint].
The whole Scrum Team[ScrumTeam] then collaborates to define a Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] that communicates why the Sprint[ScrumEvents,Sprint] is valuable to stakeholders[Stakeholder].
The Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] must be finalized prior to the end of Sprint Planning[ScrumEvents,SprintPlanning].

**Topic Two: What can be Done this Sprint?**

Through discussion with the Product Owner[ScrumTeam,ProductOwner], the Developers[ScrumTeam,Developers] select items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] from the Product Backlog[ScrumArtifacts,ProductBacklog] to include in the current Sprint[ScrumEvents,Sprint].
The Scrum Team[ScrumTeam] may refine[ProductBacklogRefinement] these items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] during this process, which increases understanding and confidence.

Selecting how much can be completed within a Sprint[ScrumEvents,Sprint] may be challenging.[Forecast]
However, the more the Developers[ScrumTeam,Developers] know about their[ScrumTeam,Developers] past performance, their[ScrumTeam,Developers] upcoming capacity[Capacity], and their[ScrumTeam,Developers] Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone], the more confident they[ScrumTeam,Developers] will be in their Sprint[ScrumEvents,Sprint] forecasts[Forecast].

**Topic Three: How will the chosen work get done?**

For each selected Product Backlog item[ScrumArtifacts,ProductBacklog,ProductBacklogItem], the Developers[ScrumTeam,Developers] plan the work necessary to create an Increment[ScrumArtifacts] that meets the Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone].
This is often done by decomposing Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] into smaller work items[WorkItem] of one day[Timebox] or less.
How this is done is at the sole discretion of the Developers[ScrumTeam,Developers].
No one else tells[NotTheSameAsGivingAdvice] them[ScrumTeam,Developers] how to turn Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] into Increments[ScrumArtifacts] of value.

The Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal], the Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] selected for the Sprint[ScrumEvents,Sprint], plus the plan for delivering[ScrumArtifacts,Increment] them are together referred to as the Sprint Backlog[ScrumArtifacts,SprintBacklog,WorkItem].

Sprint Planning[ScrumEvents,SprintPlanning] is timeboxed[Timebox] to a maximum of eight hours[Timebox] for a one-month Sprint[ScrumEvents,Sprint].
For shorter Sprints[ScrumEvents,Sprint], the event is usually shorter.

## Daily Scrum[ScrumEvents,DailyScrum]

The purpose of the Daily Scrum[ScrumEvents,DailyScrum] is to inspect[EmpiricalScrumPillars,Inspection] progress toward the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] and adapt[EmpiricalScrumPillars,Adaptation] the Sprint Backlog as necessary, adjusting[EmpiricalScrumPillars,Adaptation] the upcoming planned work.

The Daily Scrum[ScrumEvents,DailyScrum] is a 15-minute[Timebox] event for the Developers[ScrumTeam,Developers,ScrumEvents,DailyScrum,Attendees] of the Scrum Team[ScrumTeam].
To reduce complexity[ReduceComplexity], it is held at the same time and place every working day[ScrumEvents,Order] of the Sprint[ScrumEvents,Sprint].
If the Product Owner[ScrumTeam,ProductOwner] or Scrum Master[ScrumTeam,ScrumMaster] are actively working on items[ScrumArtifacts,ProductBacklog,ProductBacklogItem,WorkItem] in the Sprint Backlog, they[ScrumTeam,ProductOwner,ScrumMaster] participate[ScrumEvents,DailyScrum,Attendees] as Developers[ScrumTeam,Developers].

The Developers[ScrumTeam,Developers] want, as long as their Daily Scrum[ScrumEvents,DailyScrum] focuses on progress toward the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] and produces an actionable plan for the next day of work.
This creates focus[ScrumValues,Focus] and improves[EmpiricalScrumPillars,Adaptation] self-management[SelfManagement].

Daily Scrums[ScrumEvents,DailyScrum] improve[EmpiricalScrumPillars,Adaptation] communications, identify impediments[Impediments], promote quick decision-making, and consequently eliminate the need for other meetings[ExtendScrum,OtherMeetings].

The Daily Scrum[ScrumEvents,DailyScrum] is not the only time Developers[ScrumTeam,Developers] are allowed to adjust[EmpiricalScrumPillars,Adaptation] their plan.
They[ScrumTeam,Developers] often meet throughout the day for more detailed discussions about adapting[EmpiricalScrumPillars,Adaptation] or re-planning the rest of the Sprint's[ScrumEvents,Sprint] work.

## Sprint Review[ScrumEvents,SprintReview]

The purpose of the Sprint Review[ScrumEvents,SprintReview] is to inspect[EmpiricalScrumPillars,Inspection] the outcome of the Sprint[ScrumEvents,Sprint] and determine future adaptations[EmpiricalScrumPillars,Adaptation].
The Scrum Team[ScrumTeam,ScrumEvents,SprintReview,Attendees] presents the results of their work to key stakeholders[ScrumEvents,SprintReview,Attendees,Stakeholder] and progress toward the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal] is discussed.

During the event[ScrumEvents,SprintReview], the Scrum Team[ScrumTeam] and stakeholders[Stakeholder] review[ScrumEvents,SprintReview] what was accomplished[Forecast] in the Sprint[ScrumEvents,Sprint] and what has changed[EmpiricalScrumPillars,Adaptation] in their environment.
Based on this information, attendees[ScrumEvents,SprintReview,Attendees] collaborate on what to do next.
The Product Backlog[ScrumArtifacts,ProductBacklog] may also be adjusted[EmpiricalScrumPillars,Adaptation] to meet new opportunities.
The Sprint Review[ScrumEvents,SprintReview] is a working session and the Scrum Team[ScrumTeam] should avoid limiting it to a presentation.

The Sprint Review[ScrumEvents,SprintReview] is the second to last[ScrumEvents,Order] event of the Sprint[ScrumEvents,Sprint] and is timeboxed[Timebox] to a maximum of four hours[Timebox] for a one-month Sprint.
For shorter Sprints[ScrumEvents,Sprint], the event is usually shorter.

## Sprint Retrospective[ScrumEvents,SprintRetrospective]

The purpose of the Sprint Retrospective[ScrumEvents,SprintRetrospective] is to plan ways to increase quality[Quality] and effectiveness.

The Scrum Team[ScrumTeam,ScrumEvents,SprintRetrospective,Attendees] inspects[EmpiricalScrumPillars,Inspection] how the last Sprint[ScrumEvents,Sprint] went with regards to individuals, interactions, processes, tools, and their Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone].
Inspected[EmpiricalScrumPillars,Inspection] elements often vary with the domain of work. Assumptions that led them astray are identified and their origins explored.
The Scrum Team[ScrumTeam] discusses what went well during the Sprint[ScrumEvents,Sprint], what problems[Impediments] it encountered, and how those problems were (or were not) solved[ScrumValues,Courage].

The Scrum Team[ScrumTeam] identifies[EmpiricalScrumPillars,Inspection] the most helpful changes to improve[EmpiricalScrumPillars,Adaptation] its effectiveness.
The most impactful improvements[EmpiricalScrumPillars,Adaptation] are addressed as soon as possible.
They[EmpiricalScrumPillars,Adaptation] may even be added to the Sprint Backlog for the next Sprint[ScrumEvents,Sprint].

The Sprint Retrospective[ScrumEvents,SprintRetrospective] concludes[ScrumEvents,Order] the Sprint[ScrumEvents,Sprint].
It[ScrumEvents,SprintRetrospective] is timeboxed[Timebox] to a maximum of three hours[Timebox] for a onemonth Sprint[ScrumEvents,Sprint].
For shorter Sprints[ScrumEvents,Sprint], the event[ScrumEvents,SprintRetrospective] is usually shorter.[Timebox]

# Scrum Artifacts[ScrumArtifacts]

Scrum's artifacts[ScrumArtifacts] represent work or value.
They[ScrumArtifacts] are designed to maximize transparency[EmpiricalScrumPillars,Transparency] of key information.
Thus, everyone inspecting[EmpiricalScrumPillars,Inspection] them[ScrumArtifacts] has the same basis for adaptation[EmpiricalScrumPillars,Adaptation].

Each artifact[ScrumArtifacts] contains a commitment[ScrumValues,Commitment] to ensure it provides information that enhances transparency[EmpiricalScrumPillars,Transparency] and focus[ScrumValues,Focus] against which progress can be measured:[Forecast]

- For the Product Backlog[ScrumArtifacts,ProductBacklog] it is the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal].
- For the Sprint Backlog it is the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].
- For the Increment[ScrumArtifacts] it is the Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone].

These commitments[ScrumValues,Commitment,ProductGoal,SprintGoal,ScrumArtifacts,Increment,DefinitionOfDone] exist to reinforce empiricism[Empiricism] and the Scrum values[ScrumValues] for the Scrum Team and their stakeholders[Stakeholder].

## Product Backlog[ScrumArtifacts,ProductBacklog]

The Product Backlog[ScrumArtifacts,ProductBacklog] is an emergent[Emergence], ordered list of what is needed to improve[EmpiricalScrumPillars,Adaptation] the product.
It[ScrumArtifacts,ProductBacklog] is the single source of work undertaken by the Scrum Team[ScrumTeam].

Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] that can be Done by the Scrum Team[ScrumTeam] within one Sprint[ScrumEvents,Sprint] are deemed ready[Ready] for selection in a Sprint Planning[ScrumEvents,SprintPlanning] event.
They[ScrumArtifacts,ProductBacklog,ProductBacklogItem] usually acquire this degree of transparency[EmpiricalScrumPillars,Transparency] after refining[EmpiricalScrumPillars,Adaptation] activities.
Product Backlog[ScrumArtifacts,ProductBacklog] refinement[ProductBacklogRefinement] is the act of breaking down and further defining Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] into smaller more precise items[ScrumArtifacts,ProductBacklog,ProductBacklogItem].
This[ProductBacklogRefinement] is an ongoing activity to add details, such as a description, order, and size.
Attributes often vary with the domain of work.

The Developers[ScrumTeam,Developers] who will be doing the work are responsible[ScrumTeam,Developers,Responsible] for the sizing.
The Product Owner[ScrumTeam,ProductOwner] may influence the Developers[ScrumTeam,Developers] by helping them[ScrumTeam,Developers] understand and select trade-offs.

### Commitment[ScrumValues,Commitment]: Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal]

The Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal] describes a future state of the product[Product] which can serve as a target for the Scrum Team[ScrumTeam] to plan against.
The Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal] is in the Product Backlog[ScrumArtifacts,ProductBacklog].
The rest of the Product Backlog[ScrumArtifacts,ProductBacklog] emerges[Emergence] to define "what" will fulfill the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal].

> A product[Product] is a vehicle to deliver value.
> It[Product] has a clear boundary, known stakeholders[Stakeholder], well-defined users or customers.
> A product[Product] could be a service, a physical product[Product], or something more abstract.

The Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal] is the long-term objective for the Scrum Team[ScrumTeam].
They[ScrumTeam] must fulfill (or abandon) one objective[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal] before taking on the next[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal].

## Sprint Backlog

The Sprint Backlog[ScrumArtifacts,SprintBacklog] is composed of the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] (why), the set of Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] selected for the Sprint[ScrumEvents,Sprint] (what), as well as an actionable plan[WorkItem] for delivering the Increment[ScrumArtifacts,Increment] (how).

The Sprint Backlog[ScrumArtifacts,SprintBacklog] is a plan by and for the Developers[ScrumTeam,Roles,Developers].
It[ScrumArtifacts,SprintBacklog] is a highly visible[EmpiricalScrumPillars,Transparency], real-time picture of the work that the Developers[ScrumTeam,Roles,Developers] plan to accomplish[Forecast] during the Sprint[ScrumEvents,Sprint] in order to achieve the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].
Consequently, the Sprint Backlog[ScrumArtifacts,SprintBacklog] is updated throughout the Sprint as more is learned[Learn].
It should have enough detail that they[ScrumTeam,Developers] can inspect[EmpiricalScrumPillars,Inspection] their progress in the Daily Scrum[ScrumEvents,DailyScrum].

### Commitment[ScrumValues,Commitment]: Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal]

The Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] is the single objective for the Sprint[ScrumEvents,Sprint].
Although the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] is a commitment[ScrumValues,Commitment] by the Developers[ScrumTeam,Developers], it provides flexibility in terms of the exact work needed to achieve it.
The Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] also creates coherence[Coherence] and focus[ScrumValues,Focus], encouraging the Scrum Team[ScrumTeam] to work together rather than on separate initiatives.

The Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] is created during the Sprint Planning[ScrumEvents,SprintPlanning] event and then added to the Sprint Backlog.
As the Developers[ScrumTeam,Developers] work during the Sprint[ScrumEvents,Sprint], they[ScrumTeam,Developers] keep the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] in mind.
If the work turns out to be different than they[ScrumTeam,Developers] expected, they[ScrumTeam,Developers] collaborate with the Product Owner[ScrumTeam,ProductOwner] to negotiate[EmpiricalScrumPillars,Adaptation] the scope of the Sprint Backlog within the Sprint[ScrumEvents,Sprint] without affecting the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal].

## Increment[ScrumArtifacts]

An Increment[ScrumArtifacts] is a concrete stepping stone toward the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal].
Each Increment[ScrumArtifacts] is additive to all prior Increments[ScrumArtifacts] and thoroughly verified, ensuring that all Increments[ScrumArtifacts] work together.
In order to provide value[ValueDelivery], the Increment[ScrumArtifacts] must be usable.

Multiple Increments[ScrumArtifacts] may be created within a Sprint[ScrumEvents,Sprint].
The sum of the Increments[ScrumArtifacts] is presented at the Sprint Review[ScrumEvents,SprintReview] thus supporting empiricism[Empiricism].
However, an Increment[ScrumArtifacts] may be delivered to stakeholders[Stakeholder] prior to the end of the Sprint.
The Sprint Review[ScrumEvents,SprintReview] should never be considered a gate to releasing[ScrumArtifacts,Increment] value.

Work cannot be considered part of an Increment[ScrumArtifacts] unless it meets the Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone].

### Commitment[ScrumValues,Commitment]: Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone]

The Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] is a formal description of the state of the Increment[ScrumArtifacts] when it meets the quality[Quality] measures required for the product.

The moment a Product Backlog item[ScrumArtifacts,ProductBacklog,ProductBacklogItem] meets the Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone], an Increment[ScrumArtifacts,Increment] is born.

The Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] creates transparency[EmpiricalScrumPillars,Transparency] by providing everyone a shared understanding of what work was completed as part of the Increment[ScrumArtifacts].
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

`,Kt=Object.freeze(Object.defineProperty({__proto__:null,Agile_Manifesto:Xi,Holacracy_Constitution:ea,Kanban_Guide_2020:ta,Kanban_Guide_for_Scrum_Teams:ra,Nexus_Guide_2021:na,Scrum_At_Scale_Guide_2022:ia,Scrum_Guide_2017:aa,Scrum_Guide_2020:oa},Symbol.toStringTag,{value:"Module"})),sa=["software"],ca=["ratifiers","adopt","constitution","authority","organization","rule","process","amend","made","policy","define","partner","governance","relevant","constraints","acting","article","role","person","lead","purpose","potential","domain","control","accountable","enact","apply","tension","responses","resolve","regularly","action","priority","projects","specific","work","time","add","circle","make","considered","broader","holds","super","conflict","spend","anchor","change","thereof","remove","automatically","facilitator","secretary","required","meeting","serving","assignment","focus","context","prioritization","duty","request","share","item","impact","official","individual","interpret","relational","agreements","tactical","regular","represent","round","participant","turn","allowed","initiative","agenda","step","reasonable","permission","counts","limit","member","election","select","rep","integrative","candidate","proposer","reactions","concern","objection","criteria","objector","address","surrogate","duration","breakdown","role lead","broader circle","super circle","anchor circle","circle thereof","circle lead","lead role","relational agreements","tactical meetings","agenda item","individual initiative","governance process","circle member","circle rep","integrative election","election process","amended proposal","governance meeting","process breakdown","circle lead role","integrative election process","integrative decision making process"],la=["kanban","guide","limited","definition","flow","system","practices","workflow","item","called","members","work","context","time","dow","started","finished","wip","sle","measures","kanban system","system members","work item","kanban system members","CT:KanbanFramework","CT:ValueDelivery","CT:Flow","CT:Value","CT:PullSystem","CT:Organization","CT:Workflow","CT:KanbanSystem","CT:KanbanSystemMembers","CT:ValueOptimization","CT:ContinuousImprovement","CT:KanbanPractices","CT:FlowTheory","CT:SystemsThinking","CT:LeanPrinciples","CT:QueuingTheory","CT:DefinitionOfWorkflow","CT:WorkItems","CT:WorkInProgress","CT:ServiceLevelExpectation","CT:KanbanBoard","CT:CycleTime","CT:KanbanMeasures","CT:FlowMeasures","CT:Throughput","CT:WorkItemAge"],ma=["flow","based","kanban","scrum","team","practices","guide","product","process","definition","progress","system","empiricism","transparency","inspect","adapt","cycle","time","feedback","metrics","work","wip","item","policies","limit","throughput","average","visualization","workflow","management","sprint","sle","events","flow based","kanban practices","scrum team","scrum guide","cycle time","progress wip","work item","flow metrics","service level expectation sle","CT:Flow","CT:KanbanFramework","CT:Framework","CT:ScrumTeam","CT:KanbanPractices","CT:Scrum","CT:Product","CT:ExtendScrum","CT:Value","CT:ValueDelivery","CT:WorkInProgress","CT:PullSystem","CT:Empiricism","CT:Forecast","CT:EmpiricalScrumPillars","CT:Transparency","CT:Inspection","CT:Adaptation","CT:CycleTime","CT:ScrumValues","CT:Focus","CT:FlowMeasures","CT:WorkItems","CT:WorkItemAge","CT:Throughput","CT:Workflow","CT:DefinitionOfWorkflow","CT:SelfManagement","CT:ScrumEvents","CT:Sprint","CT:ScrumArtifacts","CT:SprintBacklog","CT:Accountable","CT:KanbanBoard","CT:Stakeholder","CT:ProductBacklog","CT:ProductBacklogItem","CT:Increment","CT:Commitment","CT:DefinitionOfDone","CT:ServiceLevelExpectation","CT:Impediments","CT:SprintGoal","CT:SprintPlanning","CT:DailyScrum","CT:Developers","CT:SprintReview","CT:ProductGoal","CT:ProductOwner","CT:SprintRetrospective","CT:Cadence","CT:ReduceComplexity"],ua=["purpose","nexus","guide","product","integrated","work","valuable","framework","scrum","dependencies","team","definition","scale","deliver","single","people","owner","backlog","accountabilities","events","artifacts","increment","goal","sprint","cross","master","members","individual","issues","refinement","planning","daily","state","commitment","scrum team","nexus framework","single product","product owner","product backlog","integrated increment","cross team","nexus integration","integration team","scrum master","nexus sprint","sprint goal","backlog items","sprint backlog","product goal","team refinement","sprint planning","nexus daily","daily scrum","sprint review","single product backlog","cross team dependencies","nexus integration team","nexus sprint goal","product backlog items","nexus sprint backlog","cross team refinement","nexus sprint planning","nexus daily scrum","nexus sprint review","nexus sprint retrospective","CT:ScrumTeams","CT:Accountable","CT:ScrumTeam","CT:CrossTeam","CT:NexusIntegrationTeam"],ha=["guide","scrum","scale","single","team","deliver","optimal","creation","product","process","multiple","organization","quality","cross","dependencies","work","business","agile","priorities","coordinate","needed","delivery","prioritized","goal","network","function","customer","time","make","implementing","component","event","master","cycle","owner","specific","people","complex","set","transparency","organizational","operating","entire","progress","static","docsimages","scrum_at_scale_guide_2022","png","created","reference","model","sprint","executive","metascrum","action","eat","feedback","versions","group","release","daily","planning","backlog","refinement","chief","impediments","continuous","improvement","accountable","stakeholders","metrics","items","vision","strategic","sutherland","scrum scale","scrum guide","scrum team","multiple teams","cross team","business agility","scrum master","product owner","owner cycle","entire organization","operating system","static docsimages","docsimages scrum_at_scale_guide_2022","reference model","executive metascrum","executive action","action team","team process","scaled versions","daily scrum","owner team","chief product","continuous improvement","cross team dependencies","scrum master cycle","product owner cycle","static docsimages scrum_at_scale_guide_2022","executive action team","action team eat","product owner team","chief product owner","cross team coordination","executive action team eat"],da=["purpose","scrum","guide","framework","complex","product","definition","roles","event","artifacts","rules","people","understand","master","process","work","team","release","daily","organization","development","decisions","based","transparency","inspect","adaptation","responsible","increment","progress","sprint","goal","made","plan","review","retrospective","members","stakeholders","owner","accomplish","needed","deliver","potentially","backlog","items","ensures","change","requirements","end","create","functionality","complete","practices","time","remaining","box","month","shorter","upcoming","meet","selected","improvements","scrum guide","roles events","scrum team","sprint goal","sprint planning","daily scrum","sprint review","sprint retrospective","team members","product owner","development team","scrum master","product backlog","backlog items","potentially releasable","product increment","sprint backlog","time box","master ensures","upcoming sprint","work remaining","scrum team members","product backlog items","scrum master ensures","scrum master teaches","total work remaining","selected product backlog items","CT:Framework","CT:ScrumTeam","CT:ScrumEvents","CT:ScrumArtifacts","CT:ValueDelivery","CT:EmpiricalScrumPillars","CT:Adaptation","CT:ExtendScrum","CT:Product","CT:Organization","CT:Cadence","CT:Increment","CT:Learn","CT:ScrumTeams","CT:Empiricism","CT:Forecast","CT:Risk","CT:Transparency","CT:Inspection","CT:Commitment","CT:DefinitionOfDone","CT:SprintBacklog","CT:SprintGoal","CT:SprintPlanning","CT:DailyScrum","CT:SprintReview","CT:SprintRetrospective","CT:ScrumValues","CT:Courage","CT:Focus","CT:Openness","CT:Respect","CT:Sprint","CT:Stakeholder","CT:ProductOwner","CT:Developers","CT:ScrumMaster","CT:SelfManagement","CT:CrossFunctional","CT:Responsible","CT:ProductBacklog","CT:ProductBacklogItem","CT:Accountable","CT:Management","CT:Serve","CT:Impediments","CT:OtherMeetings","CT:Timebox","CT:Lean","CT:WasteReduction","CT:Quality","CT:Attendees","CT:Coherence","CT:ReduceComplexity","CT:ProductBacklogRefinement","CT:Ready","CT:BurnDown","CT:BurnUp","CT:Uncertainty","CT:Emergence","CT:ScaledScrum","CT:NoChangesAreAllowed"],pa=["scrum","definition","people","team","master","product","owner","work","backlog","increment","sprint","stakeholders","inspect","create","decisions","needed","event","adaptation","transparency","artifacts","progress","values","commitment","focus","developers","time","goal","organization","accountable","plan","items","review","helping","daily","shorter","scrum master","product owner","product backlog","scrum team","product goal","sprint backlog","sprint goal","backlog items","sprint review","sprint planning","daily scrum","product backlog items","CT:Framework","CT:ExtendScrum","CT:Organization","CT:ValueDelivery","CT:EmpiricalScrumPillars","CT:Adaptation","CT:ScrumTeam","CT:ScrumMaster","CT:ProductOwner","CT:ScrumArtifacts","CT:ProductBacklog","CT:ProductBacklogItem","CT:SprintBacklogItem","CT:Increment","CT:ScrumEvents","CT:Sprint","CT:Stakeholder","CT:Inspection","CT:ScrumEvent","CT:SprintReview","CT:Cadence","CT:Scrum","CT:Commitment","CT:ProductGoal","CT:SprintGoal","CT:Lean","CT:WasteReduction","CT:Transparency","CT:Management","CT:Empiricism","CT:ScrumValues","CT:Focus","CT:Risk","CT:Learn","CT:SelfManagement","CT:Emergence","CT:Developers","CT:Courage","CT:Product","CT:DefinitionOfDone","CT:Openness","CT:Respect","CT:ExternalPeople","CT:CrossFunctional","CT:ScrumTeams","CT:ScaledScrum","CT:Responsible","CT:ReduceComplexity","CT:Accountable","CT:Quality","CT:SprintBacklog","CT:Serve","CT:Impediments","CT:Timebox","CT:Uncertainty","CT:OtherMeetings","CT:Order","CT:SprintPlanning","CT:DailyScrum","CT:SprintRetrospective","CT:Forecast","CT:BurnDown","CT:BurnUp","CT:Attendees","CT:ProductBacklogRefinement","CT:Capacity","CT:WorkItem","CT:NotTheSameAsGivingAdvice","CT:Ready","CT:Roles","CT:Coherence","CT:UnfinishedWork","CT:NoChangesAreAllowed"],fa=Object.freeze(Object.defineProperty({__proto__:null,Agile_Manifesto:sa,Holacracy_Constitution:ca,Kanban_Guide_2020:la,Kanban_Guide_for_Scrum_Teams:ma,Nexus_Guide_2021:ua,Scrum_At_Scale_Guide_2022:ha,Scrum_Guide_2017:da,Scrum_Guide_2020:pa},Symbol.toStringTag,{value:"Module"}));function ga(s){let e,r,n=(s[1]?"Tag: "+s[2]:s[2])+"",t,i,a;return{c(){e=P("li"),r=new Ot(!1),this.h()},l(c){e=C(c,"LI",{class:!0,"data-umami-event":!0});var o=R(e);r=zt(o,!1),o.forEach(u),this.h()},h(){r.a=null,y(e,"class","autocomplete-items svelte-1jxhqc6"),y(e,"data-umami-event",t=`autocomplete: ${s[2].replace(/<[^>]+>/g,"")}`),nt(e,"autocomplete-active",s[0])},m(c,o){S(c,e,o),r.m(n,e),i||(a=[me(e,"click",or),me(e,"click",s[4])],i=!0)},p(c,[o]){o&6&&n!==(n=(c[1]?"Tag: "+c[2]:c[2])+"")&&r.p(n),o&4&&t!==(t=`autocomplete: ${c[2].replace(/<[^>]+>/g,"")}`)&&y(e,"data-umami-event",t),o&1&&nt(e,"autocomplete-active",c[0])},i:L,o:L,d(c){c&&u(e),i=!1,Ve(a)}}}function Sa(s,e,r){let n,t,{itemLabel:i}=e,{highlighted:a}=e;function c(o){Bt.call(this,s,o)}return s.$$set=o=>{"itemLabel"in o&&r(3,i=o.itemLabel),"highlighted"in o&&r(0,a=o.highlighted)},s.$$.update=()=>{s.$$.dirty&8&&r(1,n=i.startsWith("CT:")),s.$$.dirty&10&&r(2,t=n?i.slice(3).replace(/([a-z])([A-Z])/g,"$1 $2"):i)},[a,n,t,i,c]}class wa extends O{constructor(e){super(),z(this,e,Sa,ga,B,{itemLabel:3,highlighted:0})}}function va(){const{subscribe:s,set:e,update:r}=Ue(new Set);return{subscribe:s,add:n=>r(t=>t.add(n)),reset:()=>e(new Set)}}const je=va(),ya=Ye(je,s=>Array.from(s).sort((e,r)=>e.localeCompare(r)));function Dt(s,e,r){const n=s.slice();return n[11]=e[r],n[13]=r,n}function xt(s){let e,r,n=Y(s[2]),t=[];for(let a=0;a<n.length;a+=1)t[a]=Rt(Dt(s,n,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){e=P("ul");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=C(a,"UL",{id:!0,class:!0});var c=R(e);for(let o=0;o<t.length;o+=1)t[o].l(c);c.forEach(u),this.h()},h(){y(e,"id","autocomplete-items-list"),y(e,"class","svelte-yyp99g")},m(a,c){S(a,e,c);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null);r=!0},p(a,c){if(c&44){n=Y(a[2]);let o;for(o=0;o<n.length;o+=1){const l=Dt(a,n,o);t[o]?(t[o].p(l,c),h(t[o],1)):(t[o]=Rt(l),t[o].c(),h(t[o],1),t[o].m(e,null))}for(W(),o=n.length;o<t.length;o+=1)i(o);F()}},i(a){if(!r){for(let c=0;c<n.length;c+=1)h(t[c]);r=!0}},o(a){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)d(t[c]);r=!1},d(a){a&&u(e),ue(t,a)}}}function Rt(s){let e,r;function n(){return s[9](s[11])}return e=new wa({props:{itemLabel:s[11],highlighted:s[13]===s[3]}}),e.$on("click",n),{c(){A(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,i){I(e,t,i),r=!0},p(t,i){s=t;const a={};i&4&&(a.itemLabel=s[11]),i&8&&(a.highlighted=s[13]===s[3]),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){d(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function ba(s){let e,r,n,t,i,a,c,o=s[2].length>0&&xt(s);return{c(){e=P("form"),r=P("div"),n=P("input"),t=ee(),o&&o.c(),this.h()},l(l){e=C(l,"FORM",{autocomplete:!0});var m=R(e);r=C(m,"DIV",{class:!0});var g=R(r);n=C(g,"INPUT",{id:!0,type:!0,placeholder:!0,title:!0,class:!0}),g.forEach(u),t=te(m),o&&o.l(m),m.forEach(u),this.h()},h(){y(n,"id","item-input"),y(n,"type","search"),y(n,"placeholder","Utilize Search to narrow down the guide to the relevant sections."),y(n,"title","The guide can be narrowed down by searching with pre-defined tags or free form text."),y(n,"class","svelte-yyp99g"),y(r,"class","autocomplete svelte-yyp99g"),y(e,"autocomplete","off")},m(l,m){S(l,e,m),ie(e,r),ie(r,n),s[7](n),xe(n,s[0]),ie(e,t),o&&o.m(e,null),i=!0,a||(c=[me(window,"keydown",s[6]),me(n,"input",s[8]),me(n,"input",s[4])],a=!0)},p(l,[m]){m&1&&n.value!==l[0]&&xe(n,l[0]),l[2].length>0?o?(o.p(l,m),m&4&&h(o,1)):(o=xt(l),o.c(),h(o,1),o.m(e,null)):o&&(W(),d(o,1,1,()=>{o=null}),F())},i(l){i||(h(o),i=!0)},o(l){d(o),i=!1},d(l){l&&u(e),s[7](null),o&&o.d(),a=!1,Ve(c)}}}function ka(s,e){let r=s.toLowerCase().indexOf(e.toLowerCase()),n=s.substring(r,r+e.length),t=`<strong>${n}</strong>`;return s.replaceAll(n,t)}function Ta(s){return s.replaceAll(/<(.)*?>/g,"")}function Pa(s,e,r){let n,t;ve(s,we,v=>r(0,n=v)),ve(s,ya,v=>r(10,t=v));let i,a=[],c=null;function o(){let v=[];n&&t.forEach(_=>{_.toLowerCase().includes(n.toLowerCase())&&(v=[...v,ka(_,n)])}),r(2,a=v)}function l(v){const _=Ta(v);$t(we,n=_.startsWith("CT:")?_.slice(3):_,n),r(2,a=[]),r(3,c=null),document==null||document.querySelector("#item-input").focus()}function m(v){if(v.key==="ArrowDown"&&(c==null||c<=a.length-1))c===null?r(3,c=0):r(3,c+=1);else if(v.key==="ArrowUp"&&c!==null)c===0?r(3,c=a.length-1):r(3,c-=1);else if(v.key==="Enter")l(c===null?n:a[c]);else return}function g(v){Le[v?"unshift":"push"](()=>{i=v,r(1,i)})}function p(){n=this.value,we.set(n)}const f=v=>l(v);return s.$$.update=()=>{s.$$.dirty&1&&(n||(r(2,a=[]),r(3,c=null)))},[n,i,a,c,o,l,m,g,p,f]}class Ca extends O{constructor(e){super(),z(this,e,Pa,ba,B,{})}}function _a(s){let e,r,n,t,i,a;return{c(){e=P("form"),r=P("label"),n=ye(`Keep Document Structure
		`),t=P("input"),this.h()},l(c){e=C(c,"FORM",{style:!0});var o=R(e);r=C(o,"LABEL",{});var l=R(r);n=be(l,`Keep Document Structure
		`),t=C(l,"INPUT",{type:!0,class:!0}),l.forEach(u),o.forEach(u),this.h()},h(){y(t,"type","checkbox"),y(t,"class","svelte-12afgxq"),er(e,"text-align","center")},m(c,o){S(c,e,o),ie(e,r),ie(r,n),ie(r,t),t.checked=s[0].keepHeader,i||(a=me(t,"change",s[1]),i=!0)},p(c,[o]){o&1&&(t.checked=c[0].keepHeader)},i:L,o:L,d(c){c&&u(e),i=!1,a()}}}function Aa(s,e,r){let n;ve(s,Ke,i=>r(0,n=i));function t(){n.keepHeader=this.checked,Ke.set(n)}return[n,t]}class Ia extends O{constructor(e){super(),z(this,e,Aa,_a,B,{})}}function Ea(s){let e,r,n,t="Interactive Agile Guides",i,a,c,o,l,m,g,p,f,v,_,H,D,x,ce,Q;c=new Ca({}),l=new Ia({});function ne(T){s[3](T)}let X={options:Object.keys(Kt)};s[0]!==void 0&&(X.selectedGuide=s[0]),f=new lr({props:X}),Le.push(()=>at(f,"selectedGuide",ne)),f.$on("change",s[2]);function pe(T){s[4](T)}let ke={};return s[1]!==void 0&&(ke.textBlocks=s[1]),x=new Qi({props:ke}),Le.push(()=>at(x,"textBlocks",pe)),{c(){e=P("meta"),r=ee(),n=P("h1"),n.textContent=t,i=ee(),a=P("div"),A(c.$$.fragment),o=ee(),A(l.$$.fragment),m=ee(),g=P("br"),p=ee(),A(f.$$.fragment),_=ee(),H=P("br"),D=ee(),A(x.$$.fragment),this.h()},l(T){const U=tr("svelte-144h0ef",document.head);e=C(U,"META",{name:!0,content:!0}),U.forEach(u),r=te(T),n=C(T,"H1",{"data-svelte-h":!0}),rr(n)!=="svelte-drn8q9"&&(n.textContent=t),i=te(T),a=C(T,"DIV",{class:!0});var fe=R(a);G(c.$$.fragment,fe),o=te(fe),G(l.$$.fragment,fe),fe.forEach(u),m=te(T),g=C(T,"BR",{}),p=te(T),G(f.$$.fragment,T),_=te(T),H=C(T,"BR",{}),D=te(T),G(x.$$.fragment,T),this.h()},h(){document.title="Interactive Agile Guides",y(e,"name","description"),y(e,"content","Interactive Agile Guides"),y(a,"class","search-config-container svelte-1t8sesw")},m(T,U){ie(document.head,e),S(T,r,U),S(T,n,U),S(T,i,U),S(T,a,U),I(c,a,null),ie(a,o),I(l,a,null),S(T,m,U),S(T,g,U),S(T,p,U),I(f,T,U),S(T,_,U),S(T,H,U),S(T,D,U),I(x,T,U),Q=!0},p(T,[U]){const fe={};!v&&U&1&&(v=!0,fe.selectedGuide=T[0],it(()=>v=!1)),f.$set(fe);const et={};!ce&&U&2&&(ce=!0,et.textBlocks=T[1],it(()=>ce=!1)),x.$set(et)},i(T){Q||(h(c.$$.fragment,T),h(l.$$.fragment,T),h(f.$$.fragment,T),h(x.$$.fragment,T),Q=!0)},o(T){d(c.$$.fragment,T),d(l.$$.fragment,T),d(f.$$.fragment,T),d(x.$$.fragment,T),Q=!1},d(T){T&&(u(r),u(n),u(i),u(a),u(m),u(g),u(p),u(_),u(H),u(D)),u(e),E(c),E(l),E(f,T),E(x,T)}}}function Da(s,e,r){let n,t;ve(s,we,p=>r(5,t=p));let i="Scrum_Guide_2020";He(()=>{nr({url:"/interactive-scrum-guide"})});function a(p){for(const[f,v]of Object.entries(Kt))if(f===p)return v;return"# No matching Guide found"}function c(p){for(const[f,v]of Object.entries(fa))if(f===p)return v;return[]}function o(){je.reset(),$t(we,t="",t)}function l(p){c(p).forEach(f=>{je.add(f)})}function m(p){i=p,r(0,i)}function g(p){n=p,r(1,n),r(0,i)}return s.$$.update=()=>{s.$$.dirty&1&&r(1,n=a(i).split(`

`)),s.$$.dirty&1&&l(i)},[i,n,o,m,g]}class Ma extends O{constructor(e){super(),z(this,e,Da,Ea,B,{})}}export{Ma as component};
