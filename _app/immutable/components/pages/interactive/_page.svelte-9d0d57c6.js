import{S as z,i as E,s as C,k as P,l as x,m as B,h as m,n as T,Q as kt,b as g,R as Ee,T as ue,B as V,J as oe,D as ct,q as me,r as he,I as ae,u as we,U as ut,V as yt,o as mt,e as y,g as O,t as d,d as R,f as h,W as Ce,X as le,Y as Tt,w as I,x as q,y as D,Z as de,_ as fe,z as $,v as W,a as X,c as Y,$ as _t,L,M as K,N as F,O as H,H as _e,a0 as Pt,a1 as xt,a2 as At,a3 as It,a4 as Oe,a5 as Re,K as Dt,a6 as Se,a7 as ve,P as $t,a8 as ke}from"../../../chunks/index-80c6022b.js";import{d as Bt,w as zt}from"../../../chunks/index-41ae8fbe.js";function Ne(o,e,n){const r=o.slice();return r[4]=e[n],r}function Ge(o){let e,n=o[4].replaceAll("_"," ")+"",r,t;return{c(){e=P("option"),r=me(n),this.h()},l(i){e=x(i,"OPTION",{});var a=B(e);r=he(a,n),a.forEach(m),this.h()},h(){e.__value=t=o[4],e.value=e.__value},m(i,a){g(i,e,a),ae(e,r)},p(i,a){a&2&&n!==(n=i[4].replaceAll("_"," ")+"")&&we(r,n),a&2&&t!==(t=i[4])&&(e.__value=t,e.value=e.__value)},d(i){i&&m(e)}}}function Et(o){let e,n,r,t=o[1],i=[];for(let a=0;a<t.length;a+=1)i[a]=Ge(Ne(o,t,a));return{c(){e=P("select");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=x(a,"SELECT",{id:!0,class:!0});var l=B(e);for(let s=0;s<i.length;s+=1)i[s].l(l);l.forEach(m),this.h()},h(){T(e,"id","select"),T(e,"class","svelte-1i9xen5"),o[0]===void 0&&kt(()=>o[3].call(e))},m(a,l){g(a,e,l);for(let s=0;s<i.length;s+=1)i[s].m(e,null);Ee(e,o[0]),n||(r=[ue(e,"change",o[2]),ue(e,"change",o[3])],n=!0)},p(a,[l]){if(l&2){t=a[1];let s;for(s=0;s<t.length;s+=1){const c=Ne(a,t,s);i[s]?i[s].p(c,l):(i[s]=Ge(c),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=t.length}l&3&&Ee(e,a[0])},i:V,o:V,d(a){a&&m(e),oe(i,a),n=!1,ct(r)}}}function Ct(o,e,n){let{selectedGuide:r=""}=e,{options:t}=e;function i(l){ut.call(this,o,l)}function a(){r=yt(this),n(0,r),n(1,t)}return o.$$set=l=>{"selectedGuide"in l&&n(0,r=l.selectedGuide),"options"in l&&n(1,t=l.options)},[r,t,i,a]}class Ot extends z{constructor(e){super(),E(this,e,Ct,Et,C,{selectedGuide:0,options:1})}}function Rt(){const o=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||o(e)},mt(()=>{console.warn=o})}function Me(o,e,n){const r=o.slice();return r[18]=e[n],r}function qe(o,e,n){const r=o.slice();return r[18]=e[n],r}function We(o,e,n){const r=o.slice();return r[10]=e[n],r}function Le(o,e,n){const r=o.slice();return r[13]=e[n],r[15]=n,r}function Ke(o,e,n){const r=o.slice();return r[16]=e[n],r[15]=n,r}function Fe(o,e,n){const r=o.slice();return r[7]=e[n],r}function Nt(o){let e,n,r,t;const i=[Wt,qt,Mt],a=[];function l(s,c){return s[0]==="table"?0:s[0]==="list"?1:2}return e=l(o),n=a[e]=i[e](o),{c(){n.c(),r=y()},l(s){n.l(s),r=y()},m(s,c){a[e].m(s,c),g(s,r,c),t=!0},p(s,c){let u=e;e=l(s),e===u?a[e].p(s,c):(O(),d(a[u],1,1,()=>{a[u]=null}),R(),n=a[e],n?n.p(s,c):(n=a[e]=i[e](s),n.c()),h(n,1),n.m(r.parentNode,r))},i(s){t||(h(n),t=!0)},o(s){d(n),t=!1},d(s){a[e].d(s),s&&m(r)}}}function Gt(o){let e,n,r=o[1],t=[];for(let a=0;a<r.length;a+=1)t[a]=Je(Fe(o,r,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=y()},l(a){for(let l=0;l<t.length;l+=1)t[l].l(a);e=y()},m(a,l){for(let s=0;s<t.length;s+=1)t[s].m(a,l);g(a,e,l),n=!0},p(a,l){if(l&34){r=a[1];let s;for(s=0;s<r.length;s+=1){const c=Fe(a,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=Je(c),t[s].c(),h(t[s],1),t[s].m(e.parentNode,e))}for(O(),s=r.length;s<t.length;s+=1)i(s);R()}},i(a){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(a){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(a){oe(t,a),a&&m(e)}}}function Mt(o){let e,n,r;const t=[o[6]];var i=o[5][o[0]];function a(l){let s={$$slots:{default:[Ft]},$$scope:{ctx:l}};for(let c=0;c<t.length;c+=1)s=le(s,t[c]);return{props:s}}return i&&(e=W(i,a(o))),{c(){e&&I(e.$$.fragment),n=y()},l(l){e&&q(e.$$.fragment,l),n=y()},m(l,s){e&&D(e,l,s),g(l,n,s),r=!0},p(l,s){const c=s&64?de(t,[fe(l[6])]):{};if(s&8388706&&(c.$$scope={dirty:s,ctx:l}),i!==(i=l[5][l[0]])){if(e){O();const u=e;d(u.$$.fragment,1,0,()=>{$(u,1)}),R()}i?(e=W(i,a(l)),I(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(l){r||(e&&h(e.$$.fragment,l),r=!0)},o(l){e&&d(e.$$.fragment,l),r=!1},d(l){l&&m(n),e&&$(e,l)}}}function qt(o){let e,n,r,t;const i=[jt,Ht],a=[];function l(s,c){return s[4]?0:1}return e=l(o),n=a[e]=i[e](o),{c(){n.c(),r=y()},l(s){n.l(s),r=y()},m(s,c){a[e].m(s,c),g(s,r,c),t=!0},p(s,c){let u=e;e=l(s),e===u?a[e].p(s,c):(O(),d(a[u],1,1,()=>{a[u]=null}),R(),n=a[e],n?n.p(s,c):(n=a[e]=i[e](s),n.c()),h(n,1),n.m(r.parentNode,r))},i(s){t||(h(n),t=!0)},o(s){d(n),t=!1},d(s){a[e].d(s),s&&m(r)}}}function Wt(o){let e,n,r;var t=o[5].table;function i(a){return{props:{$$slots:{default:[rn]},$$scope:{ctx:a}}}}return t&&(e=W(t,i(o))),{c(){e&&I(e.$$.fragment),n=y()},l(a){e&&q(e.$$.fragment,a),n=y()},m(a,l){e&&D(e,a,l),g(a,n,l),r=!0},p(a,l){const s={};if(l&8388716&&(s.$$scope={dirty:l,ctx:a}),t!==(t=a[5].table)){if(e){O();const c=e;d(c.$$.fragment,1,0,()=>{$(c,1)}),R()}t?(e=W(t,i(a)),I(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else t&&e.$set(s)},i(a){r||(e&&h(e.$$.fragment,a),r=!0)},o(a){e&&d(e.$$.fragment,a),r=!1},d(a){a&&m(n),e&&$(e,a)}}}function Lt(o){let e=o[6].raw+"",n;return{c(){n=me(e)},l(r){n=he(r,e)},m(r,t){g(r,n,t)},p(r,t){t&64&&e!==(e=r[6].raw+"")&&we(n,e)},i:V,o:V,d(r){r&&m(n)}}}function Kt(o){let e,n;return e=new ce({props:{tokens:o[1],renderers:o[5]}}),{c(){I(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,t){D(e,r,t),n=!0},p(r,t){const i={};t&2&&(i.tokens=r[1]),t&32&&(i.renderers=r[5]),e.$set(i)},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){d(e.$$.fragment,r),n=!1},d(r){$(e,r)}}}function Ft(o){let e,n,r,t;const i=[Kt,Lt],a=[];function l(s,c){return s[1]?0:1}return e=l(o),n=a[e]=i[e](o),{c(){n.c(),r=y()},l(s){n.l(s),r=y()},m(s,c){a[e].m(s,c),g(s,r,c),t=!0},p(s,c){let u=e;e=l(s),e===u?a[e].p(s,c):(O(),d(a[u],1,1,()=>{a[u]=null}),R(),n=a[e],n?n.p(s,c):(n=a[e]=i[e](s),n.c()),h(n,1),n.m(r.parentNode,r))},i(s){t||(h(n),t=!0)},o(s){d(n),t=!1},d(s){a[e].d(s),s&&m(r)}}}function Ht(o){let e,n,r;const t=[{ordered:o[4]},o[6]];var i=o[5].list;function a(l){let s={$$slots:{default:[Ut]},$$scope:{ctx:l}};for(let c=0;c<t.length;c+=1)s=le(s,t[c]);return{props:s}}return i&&(e=W(i,a(o))),{c(){e&&I(e.$$.fragment),n=y()},l(l){e&&q(e.$$.fragment,l),n=y()},m(l,s){e&&D(e,l,s),g(l,n,s),r=!0},p(l,s){const c=s&80?de(t,[s&16&&{ordered:l[4]},s&64&&fe(l[6])]):{};if(s&8388704&&(c.$$scope={dirty:s,ctx:l}),i!==(i=l[5].list)){if(e){O();const u=e;d(u.$$.fragment,1,0,()=>{$(u,1)}),R()}i?(e=W(i,a(l)),I(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(l){r||(e&&h(e.$$.fragment,l),r=!0)},o(l){e&&d(e.$$.fragment,l),r=!1},d(l){l&&m(n),e&&$(e,l)}}}function jt(o){let e,n,r;const t=[{ordered:o[4]},o[6]];var i=o[5].list;function a(l){let s={$$slots:{default:[Jt]},$$scope:{ctx:l}};for(let c=0;c<t.length;c+=1)s=le(s,t[c]);return{props:s}}return i&&(e=W(i,a(o))),{c(){e&&I(e.$$.fragment),n=y()},l(l){e&&q(e.$$.fragment,l),n=y()},m(l,s){e&&D(e,l,s),g(l,n,s),r=!0},p(l,s){const c=s&80?de(t,[s&16&&{ordered:l[4]},s&64&&fe(l[6])]):{};if(s&8388704&&(c.$$scope={dirty:s,ctx:l}),i!==(i=l[5].list)){if(e){O();const u=e;d(u.$$.fragment,1,0,()=>{$(u,1)}),R()}i?(e=W(i,a(l)),I(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(l){r||(e&&h(e.$$.fragment,l),r=!0)},o(l){e&&d(e.$$.fragment,l),r=!1},d(l){l&&m(n),e&&$(e,l)}}}function Vt(o){let e,n,r;return e=new ce({props:{tokens:o[18].tokens,renderers:o[5]}}),{c(){I(e.$$.fragment),n=X()},l(t){q(e.$$.fragment,t),n=Y(t)},m(t,i){D(e,t,i),g(t,n,i),r=!0},p(t,i){const a={};i&64&&(a.tokens=t[18].tokens),i&32&&(a.renderers=t[5]),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){d(e.$$.fragment,t),r=!1},d(t){$(e,t),t&&m(n)}}}function He(o){let e,n,r;const t=[o[18]];var i=o[5].unorderedlistitem||o[5].listitem;function a(l){let s={$$slots:{default:[Vt]},$$scope:{ctx:l}};for(let c=0;c<t.length;c+=1)s=le(s,t[c]);return{props:s}}return i&&(e=W(i,a(o))),{c(){e&&I(e.$$.fragment),n=y()},l(l){e&&q(e.$$.fragment,l),n=y()},m(l,s){e&&D(e,l,s),g(l,n,s),r=!0},p(l,s){const c=s&64?de(t,[fe(l[18])]):{};if(s&8388704&&(c.$$scope={dirty:s,ctx:l}),i!==(i=l[5].unorderedlistitem||l[5].listitem)){if(e){O();const u=e;d(u.$$.fragment,1,0,()=>{$(u,1)}),R()}i?(e=W(i,a(l)),I(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(l){r||(e&&h(e.$$.fragment,l),r=!0)},o(l){e&&d(e.$$.fragment,l),r=!1},d(l){l&&m(n),e&&$(e,l)}}}function Ut(o){let e,n,r=o[6].items,t=[];for(let a=0;a<r.length;a+=1)t[a]=He(Me(o,r,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=y()},l(a){for(let l=0;l<t.length;l+=1)t[l].l(a);e=y()},m(a,l){for(let s=0;s<t.length;s+=1)t[s].m(a,l);g(a,e,l),n=!0},p(a,l){if(l&96){r=a[6].items;let s;for(s=0;s<r.length;s+=1){const c=Me(a,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=He(c),t[s].c(),h(t[s],1),t[s].m(e.parentNode,e))}for(O(),s=r.length;s<t.length;s+=1)i(s);R()}},i(a){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(a){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(a){oe(t,a),a&&m(e)}}}function Zt(o){let e,n,r;return e=new ce({props:{tokens:o[18].tokens,renderers:o[5]}}),{c(){I(e.$$.fragment),n=X()},l(t){q(e.$$.fragment,t),n=Y(t)},m(t,i){D(e,t,i),g(t,n,i),r=!0},p(t,i){const a={};i&64&&(a.tokens=t[18].tokens),i&32&&(a.renderers=t[5]),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){d(e.$$.fragment,t),r=!1},d(t){$(e,t),t&&m(n)}}}function je(o){let e,n,r;const t=[o[18]];var i=o[5].orderedlistitem||o[5].listitem;function a(l){let s={$$slots:{default:[Zt]},$$scope:{ctx:l}};for(let c=0;c<t.length;c+=1)s=le(s,t[c]);return{props:s}}return i&&(e=W(i,a(o))),{c(){e&&I(e.$$.fragment),n=y()},l(l){e&&q(e.$$.fragment,l),n=y()},m(l,s){e&&D(e,l,s),g(l,n,s),r=!0},p(l,s){const c=s&64?de(t,[fe(l[18])]):{};if(s&8388704&&(c.$$scope={dirty:s,ctx:l}),i!==(i=l[5].orderedlistitem||l[5].listitem)){if(e){O();const u=e;d(u.$$.fragment,1,0,()=>{$(u,1)}),R()}i?(e=W(i,a(l)),I(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(l){r||(e&&h(e.$$.fragment,l),r=!0)},o(l){e&&d(e.$$.fragment,l),r=!1},d(l){l&&m(n),e&&$(e,l)}}}function Jt(o){let e,n,r=o[6].items,t=[];for(let a=0;a<r.length;a+=1)t[a]=je(qe(o,r,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=y()},l(a){for(let l=0;l<t.length;l+=1)t[l].l(a);e=y()},m(a,l){for(let s=0;s<t.length;s+=1)t[s].m(a,l);g(a,e,l),n=!0},p(a,l){if(l&96){r=a[6].items;let s;for(s=0;s<r.length;s+=1){const c=qe(a,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=je(c),t[s].c(),h(t[s],1),t[s].m(e.parentNode,e))}for(O(),s=r.length;s<t.length;s+=1)i(s);R()}},i(a){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(a){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(a){oe(t,a),a&&m(e)}}}function Qt(o){let e,n,r;return e=new ce({props:{tokens:o[16].tokens,renderers:o[5]}}),{c(){I(e.$$.fragment),n=X()},l(t){q(e.$$.fragment,t),n=Y(t)},m(t,i){D(e,t,i),g(t,n,i),r=!0},p(t,i){const a={};i&4&&(a.tokens=t[16].tokens),i&32&&(a.renderers=t[5]),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){d(e.$$.fragment,t),r=!1},d(t){$(e,t),t&&m(n)}}}function Ve(o){let e,n,r;var t=o[5].tablecell;function i(a){return{props:{header:!0,align:a[6].align[a[15]]||"center",$$slots:{default:[Qt]},$$scope:{ctx:a}}}}return t&&(e=W(t,i(o))),{c(){e&&I(e.$$.fragment),n=y()},l(a){e&&q(e.$$.fragment,a),n=y()},m(a,l){e&&D(e,a,l),g(a,n,l),r=!0},p(a,l){const s={};if(l&64&&(s.align=a[6].align[a[15]]||"center"),l&8388644&&(s.$$scope={dirty:l,ctx:a}),t!==(t=a[5].tablecell)){if(e){O();const c=e;d(c.$$.fragment,1,0,()=>{$(c,1)}),R()}t?(e=W(t,i(a)),I(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else t&&e.$set(s)},i(a){r||(e&&h(e.$$.fragment,a),r=!0)},o(a){e&&d(e.$$.fragment,a),r=!1},d(a){a&&m(n),e&&$(e,a)}}}function Xt(o){let e,n,r=o[2],t=[];for(let a=0;a<r.length;a+=1)t[a]=Ve(Ke(o,r,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=y()},l(a){for(let l=0;l<t.length;l+=1)t[l].l(a);e=y()},m(a,l){for(let s=0;s<t.length;s+=1)t[s].m(a,l);g(a,e,l),n=!0},p(a,l){if(l&100){r=a[2];let s;for(s=0;s<r.length;s+=1){const c=Ke(a,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=Ve(c),t[s].c(),h(t[s],1),t[s].m(e.parentNode,e))}for(O(),s=r.length;s<t.length;s+=1)i(s);R()}},i(a){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(a){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(a){oe(t,a),a&&m(e)}}}function Yt(o){let e,n,r;var t=o[5].tablerow;function i(a){return{props:{$$slots:{default:[Xt]},$$scope:{ctx:a}}}}return t&&(e=W(t,i(o))),{c(){e&&I(e.$$.fragment),n=y()},l(a){e&&q(e.$$.fragment,a),n=y()},m(a,l){e&&D(e,a,l),g(a,n,l),r=!0},p(a,l){const s={};if(l&8388708&&(s.$$scope={dirty:l,ctx:a}),t!==(t=a[5].tablerow)){if(e){O();const c=e;d(c.$$.fragment,1,0,()=>{$(c,1)}),R()}t?(e=W(t,i(a)),I(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else t&&e.$set(s)},i(a){r||(e&&h(e.$$.fragment,a),r=!0)},o(a){e&&d(e.$$.fragment,a),r=!1},d(a){a&&m(n),e&&$(e,a)}}}function en(o){let e,n;return e=new ce({props:{tokens:o[13].tokens,renderers:o[5]}}),{c(){I(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,t){D(e,r,t),n=!0},p(r,t){const i={};t&8&&(i.tokens=r[13].tokens),t&32&&(i.renderers=r[5]),e.$set(i)},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){d(e.$$.fragment,r),n=!1},d(r){$(e,r)}}}function Ue(o){let e,n,r;var t=o[5].tablecell;function i(a){return{props:{header:!1,align:a[6].align[a[15]]||"center",$$slots:{default:[en]},$$scope:{ctx:a}}}}return t&&(e=W(t,i(o))),{c(){e&&I(e.$$.fragment),n=y()},l(a){e&&q(e.$$.fragment,a),n=y()},m(a,l){e&&D(e,a,l),g(a,n,l),r=!0},p(a,l){const s={};if(l&64&&(s.align=a[6].align[a[15]]||"center"),l&8388648&&(s.$$scope={dirty:l,ctx:a}),t!==(t=a[5].tablecell)){if(e){O();const c=e;d(c.$$.fragment,1,0,()=>{$(c,1)}),R()}t?(e=W(t,i(a)),I(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else t&&e.$set(s)},i(a){r||(e&&h(e.$$.fragment,a),r=!0)},o(a){e&&d(e.$$.fragment,a),r=!1},d(a){a&&m(n),e&&$(e,a)}}}function tn(o){let e,n,r=o[10],t=[];for(let a=0;a<r.length;a+=1)t[a]=Ue(Le(o,r,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=X()},l(a){for(let l=0;l<t.length;l+=1)t[l].l(a);e=Y(a)},m(a,l){for(let s=0;s<t.length;s+=1)t[s].m(a,l);g(a,e,l),n=!0},p(a,l){if(l&104){r=a[10];let s;for(s=0;s<r.length;s+=1){const c=Le(a,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=Ue(c),t[s].c(),h(t[s],1),t[s].m(e.parentNode,e))}for(O(),s=r.length;s<t.length;s+=1)i(s);R()}},i(a){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(a){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(a){oe(t,a),a&&m(e)}}}function Ze(o){let e,n,r;var t=o[5].tablerow;function i(a){return{props:{$$slots:{default:[tn]},$$scope:{ctx:a}}}}return t&&(e=W(t,i(o))),{c(){e&&I(e.$$.fragment),n=y()},l(a){e&&q(e.$$.fragment,a),n=y()},m(a,l){e&&D(e,a,l),g(a,n,l),r=!0},p(a,l){const s={};if(l&8388712&&(s.$$scope={dirty:l,ctx:a}),t!==(t=a[5].tablerow)){if(e){O();const c=e;d(c.$$.fragment,1,0,()=>{$(c,1)}),R()}t?(e=W(t,i(a)),I(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else t&&e.$set(s)},i(a){r||(e&&h(e.$$.fragment,a),r=!0)},o(a){e&&d(e.$$.fragment,a),r=!1},d(a){a&&m(n),e&&$(e,a)}}}function nn(o){let e,n,r=o[3],t=[];for(let a=0;a<r.length;a+=1)t[a]=Ze(We(o,r,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=y()},l(a){for(let l=0;l<t.length;l+=1)t[l].l(a);e=y()},m(a,l){for(let s=0;s<t.length;s+=1)t[s].m(a,l);g(a,e,l),n=!0},p(a,l){if(l&104){r=a[3];let s;for(s=0;s<r.length;s+=1){const c=We(a,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=Ze(c),t[s].c(),h(t[s],1),t[s].m(e.parentNode,e))}for(O(),s=r.length;s<t.length;s+=1)i(s);R()}},i(a){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(a){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(a){oe(t,a),a&&m(e)}}}function rn(o){let e,n,r,t,i;var a=o[5].tablehead;function l(u){return{props:{$$slots:{default:[Yt]},$$scope:{ctx:u}}}}a&&(e=W(a,l(o)));var s=o[5].tablebody;function c(u){return{props:{$$slots:{default:[nn]},$$scope:{ctx:u}}}}return s&&(r=W(s,c(o))),{c(){e&&I(e.$$.fragment),n=X(),r&&I(r.$$.fragment),t=y()},l(u){e&&q(e.$$.fragment,u),n=Y(u),r&&q(r.$$.fragment,u),t=y()},m(u,p){e&&D(e,u,p),g(u,n,p),r&&D(r,u,p),g(u,t,p),i=!0},p(u,p){const w={};if(p&8388708&&(w.$$scope={dirty:p,ctx:u}),a!==(a=u[5].tablehead)){if(e){O();const v=e;d(v.$$.fragment,1,0,()=>{$(v,1)}),R()}a?(e=W(a,l(u)),I(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else a&&e.$set(w);const f={};if(p&8388712&&(f.$$scope={dirty:p,ctx:u}),s!==(s=u[5].tablebody)){if(r){O();const v=r;d(v.$$.fragment,1,0,()=>{$(v,1)}),R()}s?(r=W(s,c(u)),I(r.$$.fragment),h(r.$$.fragment,1),D(r,t.parentNode,t)):r=null}else s&&r.$set(f)},i(u){i||(e&&h(e.$$.fragment,u),r&&h(r.$$.fragment,u),i=!0)},o(u){e&&d(e.$$.fragment,u),r&&d(r.$$.fragment,u),i=!1},d(u){e&&$(e,u),u&&m(n),u&&m(t),r&&$(r,u)}}}function Je(o){let e,n;const r=[o[7],{renderers:o[5]}];let t={};for(let i=0;i<r.length;i+=1)t=le(t,r[i]);return e=new ce({props:t}),{c(){I(e.$$.fragment)},l(i){q(e.$$.fragment,i)},m(i,a){D(e,i,a),n=!0},p(i,a){const l=a&34?de(r,[a&2&&fe(i[7]),a&32&&{renderers:i[5]}]):{};e.$set(l)},i(i){n||(h(e.$$.fragment,i),n=!0)},o(i){d(e.$$.fragment,i),n=!1},d(i){$(e,i)}}}function an(o){let e,n,r,t;const i=[Gt,Nt],a=[];function l(s,c){return s[0]?s[5][s[0]]?1:-1:0}return~(e=l(o))&&(n=a[e]=i[e](o)),{c(){n&&n.c(),r=y()},l(s){n&&n.l(s),r=y()},m(s,c){~e&&a[e].m(s,c),g(s,r,c),t=!0},p(s,[c]){let u=e;e=l(s),e===u?~e&&a[e].p(s,c):(n&&(O(),d(a[u],1,1,()=>{a[u]=null}),R()),~e?(n=a[e],n?n.p(s,c):(n=a[e]=i[e](s),n.c()),h(n,1),n.m(r.parentNode,r)):n=null)},i(s){t||(h(n),t=!0)},o(s){d(n),t=!1},d(s){~e&&a[e].d(s),s&&m(r)}}}function on(o,e,n){const r=["type","tokens","header","rows","ordered","renderers"];let t=Ce(e,r),{type:i=void 0}=e,{tokens:a=void 0}=e,{header:l=void 0}=e,{rows:s=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return Rt(),o.$$set=p=>{e=le(le({},e),Tt(p)),n(6,t=Ce(e,r)),"type"in p&&n(0,i=p.type),"tokens"in p&&n(1,a=p.tokens),"header"in p&&n(2,l=p.header),"rows"in p&&n(3,s=p.rows),"ordered"in p&&n(4,c=p.ordered),"renderers"in p&&n(5,u=p.renderers)},[i,a,l,s,c,u,t]}let ce=class extends z{constructor(e){super(),E(this,e,on,an,C,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}};function ht(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let pe=ht();function sn(o){pe=o}const dt=/[&<>"']/,ln=new RegExp(dt.source,"g"),ft=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,cn=new RegExp(ft.source,"g"),un={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qe=o=>un[o];function Z(o,e){if(e){if(dt.test(o))return o.replace(ln,Qe)}else if(ft.test(o))return o.replace(cn,Qe);return o}const mn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function pt(o){return o.replace(mn,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const hn=/(^|[^\[])\^/g;function G(o,e){o=typeof o=="string"?o:o.source,e=e||"";const n={replace:(r,t)=>(t=t.source||t,t=t.replace(hn,"$1"),o=o.replace(r,t),n),getRegex:()=>new RegExp(o,e)};return n}const dn=/[^\w:]/g,fn=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Xe(o,e,n){if(o){let r;try{r=decodeURIComponent(pt(n)).replace(dn,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}e&&!fn.test(n)&&(n=wn(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const ye={},pn=/^[^:]+:\/*[^/]*$/,gn=/^([^:]+:)[\s\S]*$/,Sn=/^([^:]+:\/*[^/]*)[\s\S]*$/;function wn(o,e){ye[" "+o]||(pn.test(o)?ye[" "+o]=o+"/":ye[" "+o]=Te(o,"/",!0)),o=ye[" "+o];const n=o.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:o.replace(gn,"$1")+e:e.charAt(0)==="/"?n?e:o.replace(Sn,"$1")+e:o+e}const Pe={exec:function(){}};function ne(o){let e=1,n,r;for(;e<arguments.length;e++){n=arguments[e];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(o[r]=n[r])}return o}function Ye(o,e){const n=o.replace(/\|/g,(i,a,l)=>{let s=!1,c=a;for(;--c>=0&&l[c]==="\\";)s=!s;return s?"|":" |"}),r=n.split(/ \|/);let t=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;t<r.length;t++)r[t]=r[t].trim().replace(/\\\|/g,"|");return r}function Te(o,e,n){const r=o.length;if(r===0)return"";let t=0;for(;t<r;){const i=o.charAt(r-t-1);if(i===e&&!n)t++;else if(i!==e&&n)t++;else break}return o.slice(0,r-t)}function bn(o,e){if(o.indexOf(e[1])===-1)return-1;const n=o.length;let r=0,t=0;for(;t<n;t++)if(o[t]==="\\")t++;else if(o[t]===e[0])r++;else if(o[t]===e[1]&&(r--,r<0))return t;return-1}function gt(o){o&&o.sanitize&&!o.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function et(o,e){if(e<1)return"";let n="";for(;e>1;)e&1&&(n+=o),e>>=1,o+=o;return n+o}function tt(o,e,n,r){const t=e.href,i=e.title?Z(e.title):null,a=o[1].replace(/\\([\[\]])/g,"$1");if(o[0].charAt(0)!=="!"){r.state.inLink=!0;const l={type:"link",raw:n,href:t,title:i,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,l}return{type:"image",raw:n,href:t,title:i,text:Z(a)}}function vn(o,e){const n=o.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(t=>{const i=t.match(/^\s+/);if(i===null)return t;const[a]=i;return a.length>=r.length?t.slice(r.length):t}).join(`
`)}class Ie{constructor(e){this.options=e||pe}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Te(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],t=vn(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:t}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const t=Te(r,"#");(this.options.pedantic||!t||/ $/.test(t))&&(r=t.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const r=n[0].replace(/^ *>[ \t]?/gm,""),t=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(r);return this.lexer.state.top=t,{type:"blockquote",raw:n[0],tokens:i,text:r}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r,t,i,a,l,s,c,u,p,w,f,v,A=n[1].trim();const M=A.length>1,N={type:"list",raw:"",ordered:M,start:M?+A.slice(0,-1):"",loose:!1,items:[]};A=M?`\\d{1,9}\\${A.slice(-1)}`:`\\${A}`,this.options.pedantic&&(A=M?A:"[*+-]");const j=new RegExp(`^( {0,3}${A})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(v=!1,!(!(n=j.exec(e))||this.rules.block.hr.test(e)));){if(r=n[0],e=e.substring(r.length),u=n[2].split(`
`,1)[0].replace(/^\t+/,te=>" ".repeat(3*te.length)),p=e.split(`
`,1)[0],this.options.pedantic?(a=2,f=u.trimLeft()):(a=n[2].search(/[^ ]/),a=a>4?1:a,f=u.slice(a),a+=n[1].length),s=!1,!u&&/^ *$/.test(p)&&(r+=p+`
`,e=e.substring(p.length+1),v=!0),!v){const te=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),J=new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Q=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),se=new RegExp(`^ {0,${Math.min(3,a-1)}}#`);for(;e&&(w=e.split(`
`,1)[0],p=w,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(Q.test(p)||se.test(p)||te.test(p)||J.test(e)));){if(p.search(/[^ ]/)>=a||!p.trim())f+=`
`+p.slice(a);else{if(s||u.search(/[^ ]/)>=4||Q.test(u)||se.test(u)||J.test(u))break;f+=`
`+p}!s&&!p.trim()&&(s=!0),r+=w+`
`,e=e.substring(w.length+1),u=p.slice(a)}}N.loose||(c?N.loose=!0:/\n *\n *$/.test(r)&&(c=!0)),this.options.gfm&&(t=/^\[[ xX]\] /.exec(f),t&&(i=t[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),N.items.push({type:"list_item",raw:r,task:!!t,checked:i,loose:!1,text:f}),N.raw+=r}N.items[N.items.length-1].raw=r.trimRight(),N.items[N.items.length-1].text=f.trimRight(),N.raw=N.raw.trimRight();const ee=N.items.length;for(l=0;l<ee;l++)if(this.lexer.state.top=!1,N.items[l].tokens=this.lexer.blockTokens(N.items[l].text,[]),!N.loose){const te=N.items[l].tokens.filter(Q=>Q.type==="space"),J=te.length>0&&te.some(Q=>/\n.*\n/.test(Q.raw));N.loose=J}if(N.loose)for(l=0;l<ee;l++)N.items[l].loose=!0;return N}}html(e){const n=this.rules.block.html.exec(e);if(n){const r={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const t=this.options.sanitizer?this.options.sanitizer(n[0]):Z(n[0]);r.type="paragraph",r.text=t,r.tokens=this.lexer.inline(t)}return r}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),t=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",i=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:t,title:i}}}table(e){const n=this.rules.block.table.exec(e);if(n){const r={type:"table",header:Ye(n[1]).map(t=>({text:t})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=n[0];let t=r.align.length,i,a,l,s;for(i=0;i<t;i++)/^ *-+: *$/.test(r.align[i])?r.align[i]="right":/^ *:-+: *$/.test(r.align[i])?r.align[i]="center":/^ *:-+ *$/.test(r.align[i])?r.align[i]="left":r.align[i]=null;for(t=r.rows.length,i=0;i<t;i++)r.rows[i]=Ye(r.rows[i],r.header.length).map(c=>({text:c}));for(t=r.header.length,a=0;a<t;a++)r.header[a].tokens=this.lexer.inline(r.header[a].text);for(t=r.rows.length,a=0;a<t;a++)for(s=r.rows[a],l=0;l<s.length;l++)s[l].tokens=this.lexer.inline(s[l].text);return r}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Z(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):Z(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=Te(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=bn(n[2],"()");if(a>-1){const s=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,s).trim(),n[3]=""}}let t=n[2],i="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(t);a&&(t=a[1],i=a[3])}else i=n[3]?n[3].slice(1,-1):"";return t=t.trim(),/^</.test(t)&&(this.options.pedantic&&!/>$/.test(r)?t=t.slice(1):t=t.slice(1,-1)),tt(n,{href:t&&t.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let t=(r[2]||r[1]).replace(/\s+/g," ");if(t=n[t.toLowerCase()],!t){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return tt(r,t,r[0],this.lexer)}}emStrong(e,n,r=""){let t=this.rules.inline.emStrong.lDelim.exec(e);if(!t||t[3]&&r.match(/[\p{L}\p{N}]/u))return;const i=t[1]||t[2]||"";if(!i||i&&(r===""||this.rules.inline.punctuation.exec(r))){const a=t[0].length-1;let l,s,c=a,u=0;const p=t[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(p.lastIndex=0,n=n.slice(-1*e.length+a);(t=p.exec(n))!=null;){if(l=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!l)continue;if(s=l.length,t[3]||t[4]){c+=s;continue}else if((t[5]||t[6])&&a%3&&!((a+s)%3)){u+=s;continue}if(c-=s,c>0)continue;s=Math.min(s,s+c+u);const w=e.slice(0,a+t.index+(t[0].length-l.length)+s);if(Math.min(a,s)%2){const v=w.slice(1,-1);return{type:"em",raw:w,text:v,tokens:this.lexer.inlineTokens(v)}}const f=w.slice(2,-2);return{type:"strong",raw:w,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const t=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return t&&i&&(r=r.substring(1,r.length-1)),r=Z(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const r=this.rules.inline.autolink.exec(e);if(r){let t,i;return r[2]==="@"?(t=Z(this.options.mangle?n(r[1]):r[1]),i="mailto:"+t):(t=Z(r[1]),i=t),{type:"link",raw:r[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(e,n){let r;if(r=this.rules.inline.url.exec(e)){let t,i;if(r[2]==="@")t=Z(this.options.mangle?n(r[0]):r[0]),i="mailto:"+t;else{let a;do a=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(a!==r[0]);t=Z(r[0]),r[1]==="www."?i="http://"+r[0]:i=r[0]}return{type:"link",raw:r[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(e,n){const r=this.rules.inline.text.exec(e);if(r){let t;return this.lexer.state.inRawBlock?t=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):Z(r[0]):r[0]:t=Z(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:t}}}}const k={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Pe,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};k._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;k._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;k.def=G(k.def).replace("label",k._label).replace("title",k._title).getRegex();k.bullet=/(?:[*+-]|\d{1,9}[.)])/;k.listItemStart=G(/^( *)(bull) */).replace("bull",k.bullet).getRegex();k.list=G(k.list).replace(/bull/g,k.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+k.def.source+")").getRegex();k._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";k._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;k.html=G(k.html,"i").replace("comment",k._comment).replace("tag",k._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();k.paragraph=G(k._paragraph).replace("hr",k.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",k._tag).getRegex();k.blockquote=G(k.blockquote).replace("paragraph",k.paragraph).getRegex();k.normal=ne({},k);k.gfm=ne({},k.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});k.gfm.table=G(k.gfm.table).replace("hr",k.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",k._tag).getRegex();k.gfm.paragraph=G(k._paragraph).replace("hr",k.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",k.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",k._tag).getRegex();k.pedantic=ne({},k.normal,{html:G(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",k._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Pe,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:G(k.normal._paragraph).replace("hr",k.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",k.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const S={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Pe,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Pe,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};S._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";S.punctuation=G(S.punctuation).replace(/punctuation/g,S._punctuation).getRegex();S.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;S.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;S._comment=G(k._comment).replace("(?:-->|$)","-->").getRegex();S.emStrong.lDelim=G(S.emStrong.lDelim).replace(/punct/g,S._punctuation).getRegex();S.emStrong.rDelimAst=G(S.emStrong.rDelimAst,"g").replace(/punct/g,S._punctuation).getRegex();S.emStrong.rDelimUnd=G(S.emStrong.rDelimUnd,"g").replace(/punct/g,S._punctuation).getRegex();S._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;S._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;S._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;S.autolink=G(S.autolink).replace("scheme",S._scheme).replace("email",S._email).getRegex();S._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;S.tag=G(S.tag).replace("comment",S._comment).replace("attribute",S._attribute).getRegex();S._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;S._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;S._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;S.link=G(S.link).replace("label",S._label).replace("href",S._href).replace("title",S._title).getRegex();S.reflink=G(S.reflink).replace("label",S._label).replace("ref",k._label).getRegex();S.nolink=G(S.nolink).replace("ref",k._label).getRegex();S.reflinkSearch=G(S.reflinkSearch,"g").replace("reflink",S.reflink).replace("nolink",S.nolink).getRegex();S.normal=ne({},S);S.pedantic=ne({},S.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:G(/^!?\[(label)\]\((.*?)\)/).replace("label",S._label).getRegex(),reflink:G(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",S._label).getRegex()});S.gfm=ne({},S.normal,{escape:G(S.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});S.gfm.url=G(S.gfm.url,"i").replace("email",S.gfm._extended_email).getRegex();S.breaks=ne({},S.gfm,{br:G(S.br).replace("{2,}","*").getRegex(),text:G(S.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function kn(o){return o.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function nt(o){let e="",n,r;const t=o.length;for(n=0;n<t;n++)r=o.charCodeAt(n),Math.random()>.5&&(r="x"+r.toString(16)),e+="&#"+r+";";return e}class ie{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||pe,this.options.tokenizer=this.options.tokenizer||new Ie,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:k.normal,inline:S.normal};this.options.pedantic?(n.block=k.pedantic,n.inline=S.pedantic):this.options.gfm&&(n.block=k.gfm,this.options.breaks?n.inline=S.breaks:n.inline=S.gfm),this.tokenizer.rules=n}static get rules(){return{block:k,inline:S}}static lex(e,n){return new ie(n).lex(e)}static lexInline(e,n){return new ie(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,s,c)=>s+"    ".repeat(c.length));let r,t,i,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(r=l.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),t=n[n.length-1],t&&(t.type==="paragraph"||t.type==="text")?(t.raw+=`
`+r.raw,t.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=t.text):n.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),t=n[n.length-1],t&&(t.type==="paragraph"||t.type==="text")?(t.raw+=`
`+r.raw,t.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=t.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const s=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},s),typeof c=="number"&&c>=0&&(l=Math.min(l,c))}),l<1/0&&l>=0&&(i=e.substring(0,l+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){t=n[n.length-1],a&&t.type==="paragraph"?(t.raw+=`
`+r.raw,t.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=t.text):n.push(r),a=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),t=n[n.length-1],t&&t.type==="text"?(t.raw+=`
`+r.raw,t.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=t.text):n.push(r);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,t,i,a=e,l,s,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)u.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,l.index)+"["+et("a",l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,l.index)+"["+et("a",l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(a))!=null;)a=a.slice(0,l.index+l[0].length-2)+"++"+a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(s||(c=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(r=u.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t=n[n.length-1],t&&r.type==="text"&&t.type==="text"?(t.raw+=r.raw,t.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),t=n[n.length-1],t&&r.type==="text"&&t.type==="text"?(t.raw+=r.raw,t.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,c)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e,nt)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e,nt))){e=e.substring(r.raw.length),n.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const p=e.slice(1);let w;this.options.extensions.startInline.forEach(function(f){w=f.call({lexer:this},p),typeof w=="number"&&w>=0&&(u=Math.min(u,w))}),u<1/0&&u>=0&&(i=e.substring(0,u+1))}if(r=this.tokenizer.inlineText(i,kn)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(c=r.raw.slice(-1)),s=!0,t=n[n.length-1],t&&t.type==="text"?(t.raw+=r.raw,t.text+=r.text):n.push(r);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class De{constructor(e){this.options=e||pe}code(e,n,r){const t=(n||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(e,t);i!=null&&i!==e&&(r=!0,e=i)}return e=e.replace(/\n$/,"")+`
`,t?'<pre><code class="'+this.options.langPrefix+Z(t)+'">'+(r?e:Z(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:Z(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,n,r,t){if(this.options.headerIds){const i=this.options.headerPrefix+t.slug(r);return`<h${n} id="${i}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,r){const t=n?"ol":"ul",i=n&&r!==1?' start="'+r+'"':"";return"<"+t+i+`>
`+e+"</"+t+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const r=n.header?"th":"td";return(n.align?`<${r} align="${n.align}">`:`<${r}>`)+e+`</${r}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,r){if(e=Xe(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let t='<a href="'+e+'"';return n&&(t+=' title="'+n+'"'),t+=">"+r+"</a>",t}image(e,n,r){if(e=Xe(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let t=`<img src="${e}" alt="${r}"`;return n&&(t+=` title="${n}"`),t+=this.options.xhtml?"/>":">",t}text(e){return e}}class St{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,r){return""+r}image(e,n,r){return""+r}br(){return""}}class $e{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let r=e,t=0;if(this.seen.hasOwnProperty(r)){t=this.seen[e];do t++,r=e+"-"+t;while(this.seen.hasOwnProperty(r))}return n||(this.seen[e]=t,this.seen[r]=0),r}slug(e,n={}){const r=this.serialize(e);return this.getNextSafeSlug(r,n.dryrun)}}class re{constructor(e){this.options=e||pe,this.options.renderer=this.options.renderer||new De,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new St,this.slugger=new $e}static parse(e,n){return new re(n).parse(e)}static parseInline(e,n){return new re(n).parseInline(e)}parse(e,n=!0){let r="",t,i,a,l,s,c,u,p,w,f,v,A,M,N,j,ee,te,J,Q;const se=e.length;for(t=0;t<se;t++){if(f=e[t],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(Q=this.options.extensions.renderers[f.type].call({parser:this},f),Q!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type))){r+=Q||"";continue}switch(f.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(f.tokens),f.depth,pt(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(f.text,f.lang,f.escaped);continue}case"table":{for(p="",u="",l=f.header.length,i=0;i<l;i++)u+=this.renderer.tablecell(this.parseInline(f.header[i].tokens),{header:!0,align:f.align[i]});for(p+=this.renderer.tablerow(u),w="",l=f.rows.length,i=0;i<l;i++){for(c=f.rows[i],u="",s=c.length,a=0;a<s;a++)u+=this.renderer.tablecell(this.parseInline(c[a].tokens),{header:!1,align:f.align[a]});w+=this.renderer.tablerow(u)}r+=this.renderer.table(p,w);continue}case"blockquote":{w=this.parse(f.tokens),r+=this.renderer.blockquote(w);continue}case"list":{for(v=f.ordered,A=f.start,M=f.loose,l=f.items.length,w="",i=0;i<l;i++)j=f.items[i],ee=j.checked,te=j.task,N="",j.task&&(J=this.renderer.checkbox(ee),M?j.tokens.length>0&&j.tokens[0].type==="paragraph"?(j.tokens[0].text=J+" "+j.tokens[0].text,j.tokens[0].tokens&&j.tokens[0].tokens.length>0&&j.tokens[0].tokens[0].type==="text"&&(j.tokens[0].tokens[0].text=J+" "+j.tokens[0].tokens[0].text)):j.tokens.unshift({type:"text",text:J}):N+=J),N+=this.parse(j.tokens,M),w+=this.renderer.listitem(N,te,ee);r+=this.renderer.list(w,v,A);continue}case"html":{r+=this.renderer.html(f.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{for(w=f.tokens?this.parseInline(f.tokens):f.text;t+1<se&&e[t+1].type==="text";)f=e[++t],w+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);r+=n?this.renderer.paragraph(w):w;continue}default:{const be='Token with "'+f.type+'" type was not found.';if(this.options.silent){console.error(be);return}else throw new Error(be)}}}return r}parseInline(e,n){n=n||this.renderer;let r="",t,i,a;const l=e.length;for(t=0;t<l;t++){if(i=e[t],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(a=this.options.extensions.renderers[i.type].call({parser:this},i),a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){r+=a||"";continue}switch(i.type){case"escape":{r+=n.text(i.text);break}case"html":{r+=n.html(i.text);break}case"link":{r+=n.link(i.href,i.title,this.parseInline(i.tokens,n));break}case"image":{r+=n.image(i.href,i.title,i.text);break}case"strong":{r+=n.strong(this.parseInline(i.tokens,n));break}case"em":{r+=n.em(this.parseInline(i.tokens,n));break}case"codespan":{r+=n.codespan(i.text);break}case"br":{r+=n.br();break}case"del":{r+=n.del(this.parseInline(i.tokens,n));break}case"text":{r+=n.text(i.text);break}default:{const s='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(s);return}else throw new Error(s)}}}return r}}function _(o,e,n){if(typeof o>"u"||o===null)throw new Error("marked(): input parameter is undefined or null");if(typeof o!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected");if(typeof e=="function"&&(n=e,e=null),e=ne({},_.defaults,e||{}),gt(e),n){const t=e.highlight;let i;try{i=ie.lex(o,e)}catch(s){return n(s)}const a=function(s){let c;if(!s)try{e.walkTokens&&_.walkTokens(i,e.walkTokens),c=re.parse(i,e)}catch(u){s=u}return e.highlight=t,s?n(s):n(null,c)};if(!t||t.length<3||(delete e.highlight,!i.length))return a();let l=0;_.walkTokens(i,function(s){s.type==="code"&&(l++,setTimeout(()=>{t(s.text,s.lang,function(c,u){if(c)return a(c);u!=null&&u!==s.text&&(s.text=u,s.escaped=!0),l--,l===0&&a()})},0))}),l===0&&a();return}function r(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+Z(t.message+"",!0)+"</pre>";throw t}try{const t=ie.lex(o,e);if(e.walkTokens){if(e.async)return Promise.all(_.walkTokens(t,e.walkTokens)).then(()=>re.parse(t,e)).catch(r);_.walkTokens(t,e.walkTokens)}return re.parse(t,e)}catch(t){r(t)}}_.options=_.setOptions=function(o){return ne(_.defaults,o),sn(_.defaults),_};_.getDefaults=ht;_.defaults=pe;_.use=function(...o){const e=_.defaults.extensions||{renderers:{},childTokens:{}};o.forEach(n=>{const r=ne({},n);if(r.async=_.defaults.async||r.async,n.extensions&&(n.extensions.forEach(t=>{if(!t.name)throw new Error("extension name required");if(t.renderer){const i=e.renderers[t.name];i?e.renderers[t.name]=function(...a){let l=t.renderer.apply(this,a);return l===!1&&(l=i.apply(this,a)),l}:e.renderers[t.name]=t.renderer}if(t.tokenizer){if(!t.level||t.level!=="block"&&t.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[t.level]?e[t.level].unshift(t.tokenizer):e[t.level]=[t.tokenizer],t.start&&(t.level==="block"?e.startBlock?e.startBlock.push(t.start):e.startBlock=[t.start]:t.level==="inline"&&(e.startInline?e.startInline.push(t.start):e.startInline=[t.start]))}t.childTokens&&(e.childTokens[t.name]=t.childTokens)}),r.extensions=e),n.renderer){const t=_.defaults.renderer||new De;for(const i in n.renderer){const a=t[i];t[i]=(...l)=>{let s=n.renderer[i].apply(t,l);return s===!1&&(s=a.apply(t,l)),s}}r.renderer=t}if(n.tokenizer){const t=_.defaults.tokenizer||new Ie;for(const i in n.tokenizer){const a=t[i];t[i]=(...l)=>{let s=n.tokenizer[i].apply(t,l);return s===!1&&(s=a.apply(t,l)),s}}r.tokenizer=t}if(n.walkTokens){const t=_.defaults.walkTokens;r.walkTokens=function(i){let a=[];return a.push(n.walkTokens.call(this,i)),t&&(a=a.concat(t.call(this,i))),a}}_.setOptions(r)})};_.walkTokens=function(o,e){let n=[];for(const r of o)switch(n=n.concat(e.call(_,r)),r.type){case"table":{for(const t of r.header)n=n.concat(_.walkTokens(t.tokens,e));for(const t of r.rows)for(const i of t)n=n.concat(_.walkTokens(i.tokens,e));break}case"list":{n=n.concat(_.walkTokens(r.items,e));break}default:_.defaults.extensions&&_.defaults.extensions.childTokens&&_.defaults.extensions.childTokens[r.type]?_.defaults.extensions.childTokens[r.type].forEach(function(t){n=n.concat(_.walkTokens(r[t],e))}):r.tokens&&(n=n.concat(_.walkTokens(r.tokens,e)))}return n};_.parseInline=function(o,e){if(typeof o>"u"||o===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof o!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected");e=ne({},_.defaults,e||{}),gt(e);try{const n=ie.lexInline(o,e);return e.walkTokens&&_.walkTokens(n,e.walkTokens),re.parseInline(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+Z(n.message+"",!0)+"</pre>";throw n}};_.Parser=re;_.parser=re.parse;_.Renderer=De;_.TextRenderer=St;_.Lexer=ie;_.lexer=ie.lex;_.Tokenizer=Ie;_.Slugger=$e;_.parse=_;_.options;_.setOptions;_.use;_.walkTokens;_.parseInline;re.parse;ie.lex;const wt={};function yn(o){let e;return{c(){e=me(o[1])},l(n){e=he(n,o[1])},m(n,r){g(n,e,r)},p(n,r){r&2&&we(e,n[1])},i:V,o:V,d(n){n&&m(e)}}}function Tn(o){let e,n;const r=o[5].default,t=L(r,o,o[4],null);return{c(){e=P("h6"),t&&t.c(),this.h()},l(i){e=x(i,"H6",{id:!0});var a=B(e);t&&t.l(a),a.forEach(m),this.h()},h(){T(e,"id",o[2])},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,a){t&&t.p&&(!n||a&16)&&K(t,r,i,i[4],n?H(r,i[4],a,null):F(i[4]),null),(!n||a&4)&&T(e,"id",i[2])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function _n(o){let e,n;const r=o[5].default,t=L(r,o,o[4],null);return{c(){e=P("h5"),t&&t.c(),this.h()},l(i){e=x(i,"H5",{id:!0});var a=B(e);t&&t.l(a),a.forEach(m),this.h()},h(){T(e,"id",o[2])},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,a){t&&t.p&&(!n||a&16)&&K(t,r,i,i[4],n?H(r,i[4],a,null):F(i[4]),null),(!n||a&4)&&T(e,"id",i[2])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Pn(o){let e,n;const r=o[5].default,t=L(r,o,o[4],null);return{c(){e=P("h4"),t&&t.c(),this.h()},l(i){e=x(i,"H4",{id:!0});var a=B(e);t&&t.l(a),a.forEach(m),this.h()},h(){T(e,"id",o[2])},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,a){t&&t.p&&(!n||a&16)&&K(t,r,i,i[4],n?H(r,i[4],a,null):F(i[4]),null),(!n||a&4)&&T(e,"id",i[2])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function xn(o){let e,n;const r=o[5].default,t=L(r,o,o[4],null);return{c(){e=P("h3"),t&&t.c(),this.h()},l(i){e=x(i,"H3",{id:!0});var a=B(e);t&&t.l(a),a.forEach(m),this.h()},h(){T(e,"id",o[2])},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,a){t&&t.p&&(!n||a&16)&&K(t,r,i,i[4],n?H(r,i[4],a,null):F(i[4]),null),(!n||a&4)&&T(e,"id",i[2])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function An(o){let e,n;const r=o[5].default,t=L(r,o,o[4],null);return{c(){e=P("h2"),t&&t.c(),this.h()},l(i){e=x(i,"H2",{id:!0});var a=B(e);t&&t.l(a),a.forEach(m),this.h()},h(){T(e,"id",o[2])},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,a){t&&t.p&&(!n||a&16)&&K(t,r,i,i[4],n?H(r,i[4],a,null):F(i[4]),null),(!n||a&4)&&T(e,"id",i[2])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function In(o){let e,n;const r=o[5].default,t=L(r,o,o[4],null);return{c(){e=P("h1"),t&&t.c(),this.h()},l(i){e=x(i,"H1",{id:!0});var a=B(e);t&&t.l(a),a.forEach(m),this.h()},h(){T(e,"id",o[2])},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,a){t&&t.p&&(!n||a&16)&&K(t,r,i,i[4],n?H(r,i[4],a,null):F(i[4]),null),(!n||a&4)&&T(e,"id",i[2])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Dn(o){let e,n,r,t;const i=[In,An,xn,Pn,_n,Tn,yn],a=[];function l(s,c){return s[0]===1?0:s[0]===2?1:s[0]===3?2:s[0]===4?3:s[0]===5?4:s[0]===6?5:6}return e=l(o),n=a[e]=i[e](o),{c(){n.c(),r=y()},l(s){n.l(s),r=y()},m(s,c){a[e].m(s,c),g(s,r,c),t=!0},p(s,[c]){let u=e;e=l(s),e===u?a[e].p(s,c):(O(),d(a[u],1,1,()=>{a[u]=null}),R(),n=a[e],n?n.p(s,c):(n=a[e]=i[e](s),n.c()),h(n,1),n.m(r.parentNode,r))},i(s){t||(h(n),t=!0)},o(s){d(n),t=!1},d(s){a[e].d(s),s&&m(r)}}}function $n(o,e,n){let r,{$$slots:t={},$$scope:i}=e,{depth:a}=e,{raw:l}=e,{text:s}=e;const{slug:c,getOptions:u}=_t(wt),p=u();return o.$$set=w=>{"depth"in w&&n(0,a=w.depth),"raw"in w&&n(1,l=w.raw),"text"in w&&n(3,s=w.text),"$$scope"in w&&n(4,i=w.$$scope)},o.$$.update=()=>{o.$$.dirty&8&&n(2,r=p.headerIds?p.headerPrefix+c(s):void 0)},[a,l,r,s,i,t]}class Bn extends z{constructor(e){super(),E(this,e,$n,Dn,C,{depth:0,raw:1,text:3})}}function zn(o){let e,n;const r=o[1].default,t=L(r,o,o[0],null);return{c(){e=P("p"),t&&t.c()},l(i){e=x(i,"P",{});var a=B(e);t&&t.l(a),a.forEach(m)},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,[a]){t&&t.p&&(!n||a&1)&&K(t,r,i,i[0],n?H(r,i[0],a,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function En(o,e,n){let{$$slots:r={},$$scope:t}=e;return o.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class Cn extends z{constructor(e){super(),E(this,e,En,zn,C,{})}}function On(o){let e;const n=o[3].default,r=L(n,o,o[2],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,i){r&&r.m(t,i),e=!0},p(t,[i]){r&&r.p&&(!e||i&4)&&K(r,n,t,t[2],e?H(n,t[2],i,null):F(t[2]),null)},i(t){e||(h(r,t),e=!0)},o(t){d(r,t),e=!1},d(t){r&&r.d(t)}}}function Rn(o,e,n){let{$$slots:r={},$$scope:t}=e,{text:i}=e,{raw:a}=e;return o.$$set=l=>{"text"in l&&n(0,i=l.text),"raw"in l&&n(1,a=l.raw),"$$scope"in l&&n(2,t=l.$$scope)},[i,a,t,r]}class Nn extends z{constructor(e){super(),E(this,e,Rn,On,C,{text:0,raw:1})}}function Gn(o){let e,n;return{c(){e=P("img"),this.h()},l(r){e=x(r,"IMG",{src:!0,title:!0,alt:!0}),this.h()},h(){_e(e.src,n=o[0])||T(e,"src",n),T(e,"title",o[1]),T(e,"alt",o[2])},m(r,t){g(r,e,t)},p(r,[t]){t&1&&!_e(e.src,n=r[0])&&T(e,"src",n),t&2&&T(e,"title",r[1]),t&4&&T(e,"alt",r[2])},i:V,o:V,d(r){r&&m(e)}}}function Mn(o,e,n){let{href:r=""}=e,{title:t=void 0}=e,{text:i=""}=e;return o.$$set=a=>{"href"in a&&n(0,r=a.href),"title"in a&&n(1,t=a.title),"text"in a&&n(2,i=a.text)},[r,t,i]}class qn extends z{constructor(e){super(),E(this,e,Mn,Gn,C,{href:0,title:1,text:2})}}function Wn(o){let e,n;const r=o[3].default,t=L(r,o,o[2],null);return{c(){e=P("a"),t&&t.c(),this.h()},l(i){e=x(i,"A",{href:!0,title:!0});var a=B(e);t&&t.l(a),a.forEach(m),this.h()},h(){T(e,"href",o[0]),T(e,"title",o[1])},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,[a]){t&&t.p&&(!n||a&4)&&K(t,r,i,i[2],n?H(r,i[2],a,null):F(i[2]),null),(!n||a&1)&&T(e,"href",i[0]),(!n||a&2)&&T(e,"title",i[1])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Ln(o,e,n){let{$$slots:r={},$$scope:t}=e,{href:i=""}=e,{title:a=void 0}=e;return o.$$set=l=>{"href"in l&&n(0,i=l.href),"title"in l&&n(1,a=l.title),"$$scope"in l&&n(2,t=l.$$scope)},[i,a,t,r]}class Kn extends z{constructor(e){super(),E(this,e,Ln,Wn,C,{href:0,title:1})}}function Fn(o){let e,n;const r=o[1].default,t=L(r,o,o[0],null);return{c(){e=P("em"),t&&t.c()},l(i){e=x(i,"EM",{});var a=B(e);t&&t.l(a),a.forEach(m)},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,[a]){t&&t.p&&(!n||a&1)&&K(t,r,i,i[0],n?H(r,i[0],a,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Hn(o,e,n){let{$$slots:r={},$$scope:t}=e;return o.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class jn extends z{constructor(e){super(),E(this,e,Hn,Fn,C,{})}}function Vn(o){let e,n;const r=o[1].default,t=L(r,o,o[0],null);return{c(){e=P("del"),t&&t.c()},l(i){e=x(i,"DEL",{});var a=B(e);t&&t.l(a),a.forEach(m)},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,[a]){t&&t.p&&(!n||a&1)&&K(t,r,i,i[0],n?H(r,i[0],a,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Un(o,e,n){let{$$slots:r={},$$scope:t}=e;return o.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class Zn extends z{constructor(e){super(),E(this,e,Un,Vn,C,{})}}function Jn(o){let e,n=o[0].replace(/`/g,"")+"",r;return{c(){e=P("code"),r=me(n)},l(t){e=x(t,"CODE",{});var i=B(e);r=he(i,n),i.forEach(m)},m(t,i){g(t,e,i),ae(e,r)},p(t,[i]){i&1&&n!==(n=t[0].replace(/`/g,"")+"")&&we(r,n)},i:V,o:V,d(t){t&&m(e)}}}function Qn(o,e,n){let{raw:r}=e;return o.$$set=t=>{"raw"in t&&n(0,r=t.raw)},[r]}class Xn extends z{constructor(e){super(),E(this,e,Qn,Jn,C,{raw:0})}}function Yn(o){let e,n;const r=o[1].default,t=L(r,o,o[0],null);return{c(){e=P("strong"),t&&t.c()},l(i){e=x(i,"STRONG",{});var a=B(e);t&&t.l(a),a.forEach(m)},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,[a]){t&&t.p&&(!n||a&1)&&K(t,r,i,i[0],n?H(r,i[0],a,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function er(o,e,n){let{$$slots:r={},$$scope:t}=e;return o.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class tr extends z{constructor(e){super(),E(this,e,er,Yn,C,{})}}function nr(o){let e,n;const r=o[1].default,t=L(r,o,o[0],null);return{c(){e=P("table"),t&&t.c()},l(i){e=x(i,"TABLE",{});var a=B(e);t&&t.l(a),a.forEach(m)},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,[a]){t&&t.p&&(!n||a&1)&&K(t,r,i,i[0],n?H(r,i[0],a,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function rr(o,e,n){let{$$slots:r={},$$scope:t}=e;return o.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class ir extends z{constructor(e){super(),E(this,e,rr,nr,C,{})}}function ar(o){let e,n;const r=o[1].default,t=L(r,o,o[0],null);return{c(){e=P("thead"),t&&t.c()},l(i){e=x(i,"THEAD",{});var a=B(e);t&&t.l(a),a.forEach(m)},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,[a]){t&&t.p&&(!n||a&1)&&K(t,r,i,i[0],n?H(r,i[0],a,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function or(o,e,n){let{$$slots:r={},$$scope:t}=e;return o.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class sr extends z{constructor(e){super(),E(this,e,or,ar,C,{})}}function lr(o){let e,n;const r=o[1].default,t=L(r,o,o[0],null);return{c(){e=P("tbody"),t&&t.c()},l(i){e=x(i,"TBODY",{});var a=B(e);t&&t.l(a),a.forEach(m)},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,[a]){t&&t.p&&(!n||a&1)&&K(t,r,i,i[0],n?H(r,i[0],a,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function cr(o,e,n){let{$$slots:r={},$$scope:t}=e;return o.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class ur extends z{constructor(e){super(),E(this,e,cr,lr,C,{})}}function mr(o){let e,n;const r=o[1].default,t=L(r,o,o[0],null);return{c(){e=P("tr"),t&&t.c()},l(i){e=x(i,"TR",{});var a=B(e);t&&t.l(a),a.forEach(m)},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,[a]){t&&t.p&&(!n||a&1)&&K(t,r,i,i[0],n?H(r,i[0],a,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function hr(o,e,n){let{$$slots:r={},$$scope:t}=e;return o.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class dr extends z{constructor(e){super(),E(this,e,hr,mr,C,{})}}function fr(o){let e,n;const r=o[3].default,t=L(r,o,o[2],null);return{c(){e=P("td"),t&&t.c(),this.h()},l(i){e=x(i,"TD",{align:!0});var a=B(e);t&&t.l(a),a.forEach(m),this.h()},h(){T(e,"align",o[1])},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,a){t&&t.p&&(!n||a&4)&&K(t,r,i,i[2],n?H(r,i[2],a,null):F(i[2]),null),(!n||a&2)&&T(e,"align",i[1])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function pr(o){let e,n;const r=o[3].default,t=L(r,o,o[2],null);return{c(){e=P("th"),t&&t.c(),this.h()},l(i){e=x(i,"TH",{align:!0});var a=B(e);t&&t.l(a),a.forEach(m),this.h()},h(){T(e,"align",o[1])},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,a){t&&t.p&&(!n||a&4)&&K(t,r,i,i[2],n?H(r,i[2],a,null):F(i[2]),null),(!n||a&2)&&T(e,"align",i[1])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function gr(o){let e,n,r,t;const i=[pr,fr],a=[];function l(s,c){return s[0]?0:1}return e=l(o),n=a[e]=i[e](o),{c(){n.c(),r=y()},l(s){n.l(s),r=y()},m(s,c){a[e].m(s,c),g(s,r,c),t=!0},p(s,[c]){let u=e;e=l(s),e===u?a[e].p(s,c):(O(),d(a[u],1,1,()=>{a[u]=null}),R(),n=a[e],n?n.p(s,c):(n=a[e]=i[e](s),n.c()),h(n,1),n.m(r.parentNode,r))},i(s){t||(h(n),t=!0)},o(s){d(n),t=!1},d(s){a[e].d(s),s&&m(r)}}}function Sr(o,e,n){let{$$slots:r={},$$scope:t}=e,{header:i}=e,{align:a}=e;return o.$$set=l=>{"header"in l&&n(0,i=l.header),"align"in l&&n(1,a=l.align),"$$scope"in l&&n(2,t=l.$$scope)},[i,a,t,r]}class wr extends z{constructor(e){super(),E(this,e,Sr,gr,C,{header:0,align:1})}}function br(o){let e,n;const r=o[3].default,t=L(r,o,o[2],null);return{c(){e=P("ul"),t&&t.c()},l(i){e=x(i,"UL",{});var a=B(e);t&&t.l(a),a.forEach(m)},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,a){t&&t.p&&(!n||a&4)&&K(t,r,i,i[2],n?H(r,i[2],a,null):F(i[2]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function vr(o){let e,n;const r=o[3].default,t=L(r,o,o[2],null);return{c(){e=P("ol"),t&&t.c(),this.h()},l(i){e=x(i,"OL",{start:!0});var a=B(e);t&&t.l(a),a.forEach(m),this.h()},h(){T(e,"start",o[1])},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,a){t&&t.p&&(!n||a&4)&&K(t,r,i,i[2],n?H(r,i[2],a,null):F(i[2]),null),(!n||a&2)&&T(e,"start",i[1])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function kr(o){let e,n,r,t;const i=[vr,br],a=[];function l(s,c){return s[0]?0:1}return e=l(o),n=a[e]=i[e](o),{c(){n.c(),r=y()},l(s){n.l(s),r=y()},m(s,c){a[e].m(s,c),g(s,r,c),t=!0},p(s,[c]){let u=e;e=l(s),e===u?a[e].p(s,c):(O(),d(a[u],1,1,()=>{a[u]=null}),R(),n=a[e],n?n.p(s,c):(n=a[e]=i[e](s),n.c()),h(n,1),n.m(r.parentNode,r))},i(s){t||(h(n),t=!0)},o(s){d(n),t=!1},d(s){a[e].d(s),s&&m(r)}}}function yr(o,e,n){let{$$slots:r={},$$scope:t}=e,{ordered:i}=e,{start:a}=e;return o.$$set=l=>{"ordered"in l&&n(0,i=l.ordered),"start"in l&&n(1,a=l.start),"$$scope"in l&&n(2,t=l.$$scope)},[i,a,t,r]}class Tr extends z{constructor(e){super(),E(this,e,yr,kr,C,{ordered:0,start:1})}}function _r(o){let e,n;const r=o[1].default,t=L(r,o,o[0],null);return{c(){e=P("li"),t&&t.c()},l(i){e=x(i,"LI",{});var a=B(e);t&&t.l(a),a.forEach(m)},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,[a]){t&&t.p&&(!n||a&1)&&K(t,r,i,i[0],n?H(r,i[0],a,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Pr(o,e,n){let{$$slots:r={},$$scope:t}=e;return o.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class xr extends z{constructor(e){super(),E(this,e,Pr,_r,C,{})}}function Ar(o){let e;return{c(){e=P("hr")},l(n){e=x(n,"HR",{})},m(n,r){g(n,e,r)},p:V,i:V,o:V,d(n){n&&m(e)}}}class Ir extends z{constructor(e){super(),E(this,e,null,Ar,C,{})}}function Dr(o){let e,n;return{c(){e=new Pt(!1),n=y(),this.h()},l(r){e=xt(r,!1),n=y(),this.h()},h(){e.a=n},m(r,t){e.m(o[0],r,t),g(r,n,t)},p(r,[t]){t&1&&e.p(r[0])},i:V,o:V,d(r){r&&m(n),r&&e.d()}}}function $r(o,e,n){let{text:r}=e;return o.$$set=t=>{"text"in t&&n(0,r=t.text)},[r]}class Br extends z{constructor(e){super(),E(this,e,$r,Dr,C,{text:0})}}function zr(o){let e,n;const r=o[1].default,t=L(r,o,o[0],null);return{c(){e=P("blockquote"),t&&t.c()},l(i){e=x(i,"BLOCKQUOTE",{});var a=B(e);t&&t.l(a),a.forEach(m)},m(i,a){g(i,e,a),t&&t.m(e,null),n=!0},p(i,[a]){t&&t.p&&(!n||a&1)&&K(t,r,i,i[0],n?H(r,i[0],a,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Er(o,e,n){let{$$slots:r={},$$scope:t}=e;return o.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class Cr extends z{constructor(e){super(),E(this,e,Er,zr,C,{})}}function Or(o){let e,n,r;return{c(){e=P("pre"),n=P("code"),r=me(o[1]),this.h()},l(t){e=x(t,"PRE",{class:!0});var i=B(e);n=x(i,"CODE",{});var a=B(n);r=he(a,o[1]),a.forEach(m),i.forEach(m),this.h()},h(){T(e,"class",o[0])},m(t,i){g(t,e,i),ae(e,n),ae(n,r)},p(t,[i]){i&2&&we(r,t[1]),i&1&&T(e,"class",t[0])},i:V,o:V,d(t){t&&m(e)}}}function Rr(o,e,n){let{lang:r}=e,{text:t}=e;return o.$$set=i=>{"lang"in i&&n(0,r=i.lang),"text"in i&&n(1,t=i.text)},[r,t]}class Nr extends z{constructor(e){super(),E(this,e,Rr,Or,C,{lang:0,text:1})}}function Gr(o){let e,n;const r=o[1].default,t=L(r,o,o[0],null);return{c(){e=P("br"),t&&t.c()},l(i){e=x(i,"BR",{}),t&&t.l(i)},m(i,a){g(i,e,a),t&&t.m(i,a),n=!0},p(i,[a]){t&&t.p&&(!n||a&1)&&K(t,r,i,i[0],n?H(r,i[0],a,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Mr(o,e,n){let{$$slots:r={},$$scope:t}=e;return o.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class qr extends z{constructor(e){super(),E(this,e,Mr,Gr,C,{})}}const Wr={heading:Bn,paragraph:Cn,text:Nn,image:qn,link:Kn,em:jn,strong:tr,codespan:Xn,del:Zn,table:ir,tablehead:sr,tablebody:ur,tablerow:dr,tablecell:wr,list:Tr,orderedlistitem:null,unorderedlistitem:null,listitem:xr,hr:Ir,html:Br,blockquote:Cr,code:Nr,br:qr},Lr={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function Kr(o){let e,n;return e=new ce({props:{tokens:o[0],renderers:o[1]}}),{c(){I(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,t){D(e,r,t),n=!0},p(r,[t]){const i={};t&1&&(i.tokens=r[0]),t&2&&(i.renderers=r[1]),e.$set(i)},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){d(e.$$.fragment,r),n=!1},d(r){$(e,r)}}}function Fr(o,e,n){let r,t,i,a,{source:l=[]}=e,{renderers:s={}}=e,{options:c={}}=e,{isInline:u=!1}=e;const p=At();let w,f,v;return It(wt,{slug:A=>t?t.slug(A):"",getOptions:()=>i}),mt(()=>{n(7,v=!0)}),o.$$set=A=>{"source"in A&&n(2,l=A.source),"renderers"in A&&n(3,s=A.renderers),"options"in A&&n(4,c=A.options),"isInline"in A&&n(5,u=A.isInline)},o.$$.update=()=>{o.$$.dirty&4&&n(8,r=Array.isArray(l)),o.$$.dirty&4&&(t=l?new $e:void 0),o.$$.dirty&16&&n(9,i={...Lr,...c}),o.$$.dirty&869&&(r?n(0,w=l):(n(6,f=new ie(i)),n(0,w=u?f.inlineTokens(l):f.lex(l)),p("parsed",{tokens:w}))),o.$$.dirty&8&&n(1,a={...Wr,...s}),o.$$.dirty&385&&v&&!r&&p("parsed",{tokens:w})},[w,a,l,s,c,u,f,v,r,i]}class Hr extends z{constructor(e){super(),E(this,e,Fr,Kr,C,{source:2,renderers:3,options:4,isInline:5})}}function jr(){const{subscribe:o,set:e,update:n}=zt(new Set);return{subscribe:o,add:r=>n(t=>t.add(r)),reset:()=>e(new Set)}}const Be=jr(),Vr=Bt(Be,o=>Array.from(o).sort((e,n)=>e.localeCompare(n)));function Ur(o){let e,n;return{c(){e=P("img"),this.h()},l(r){e=x(r,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){_e(e.src,n=o[0].replace("../static",""))||T(e,"src",n),T(e,"title",o[1]),T(e,"alt",o[2]),T(e,"class","svelte-1gl2z3f")},m(r,t){g(r,e,t)},p(r,[t]){t&1&&!_e(e.src,n=r[0].replace("../static",""))&&T(e,"src",n),t&2&&T(e,"title",r[1]),t&4&&T(e,"alt",r[2])},i:V,o:V,d(r){r&&m(e)}}}function Zr(o,e,n){let{href:r=""}=e,{title:t=""}=e,{text:i=""}=e;return console.log(r),o.$$set=a=>{"href"in a&&n(0,r=a.href),"title"in a&&n(1,t=a.title),"text"in a&&n(2,i=a.text)},[r,t,i]}class Jr extends z{constructor(e){super(),E(this,e,Zr,Ur,C,{href:0,title:1,text:2})}}function rt(o){let e,n;return e=new Hr({props:{source:o[0]+" ",renderers:{image:Jr}}}),{c(){I(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,t){D(e,r,t),n=!0},p(r,t){const i={};t&1&&(i.source=r[0]+" "),e.$set(i)},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){d(e.$$.fragment,r),n=!1},d(r){$(e,r)}}}function Qr(o){let e,n,r=o[0].length!=0&&rt(o);return{c(){r&&r.c(),e=y()},l(t){r&&r.l(t),e=y()},m(t,i){r&&r.m(t,i),g(t,e,i),n=!0},p(t,[i]){t[0].length!=0?r?(r.p(t,i),i&1&&h(r,1)):(r=rt(t),r.c(),h(r,1),r.m(e.parentNode,e)):r&&(O(),d(r,1,1,()=>{r=null}),R())},i(t){n||(h(r),n=!0)},o(t){d(r),n=!1},d(t){r&&r.d(t),t&&m(e)}}}const Xr=/\[[#A-Za-z:,?-]+\]/gi;function Yr(o){let e=o.match(Xr);return e!=null?e.flatMap(n=>n.substring(1,n.length-1).split(",")):[]}function ei(o,e,n){let r,t,i,a,l,{block:s}=e,{filter:c}=e,{keepHeadlines:u=!0}=e;function p(f,v){let A="";for(let M=0;M<v.length;M++)w(v[M],a[M],f)&&(A+=v[M]+`
`);return A.trim()}function w(f,v,A){return A==""||r&&u||f.toLowerCase().includes(A.toLowerCase())||v!=null&&v.includes(A)}return o.$$set=f=>{"block"in f&&n(1,s=f.block),"filter"in f&&n(2,c=f.filter),"keepHeadlines"in f&&n(3,u=f.keepHeadlines)},o.$$.update=()=>{o.$$.dirty&2&&(r=s.trim().startsWith("#")),o.$$.dirty&2&&n(6,t=s.split(`
`)),o.$$.dirty&64&&n(5,i=t.map(f=>f.replace(/(\[[#A-Za-z:,?-]+\])/g,""))),o.$$.dirty&64&&n(4,a=t.map(f=>Yr(f))),o.$$.dirty&36&&n(0,l=p(c,i)),o.$$.dirty&16&&a.forEach(f=>f.forEach(v=>Be.add(v)))},[l,s,c,u,a,i,t]}class ti extends z{constructor(e){super(),E(this,e,ei,Qr,C,{block:1,filter:2,keepHeadlines:3})}}function it(o,e,n){const r=o.slice();return r[2]=e[n],r}function at(o){let e,n;return e=new ti({props:{filter:o[0],block:o[2]}}),{c(){I(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,t){D(e,r,t),n=!0},p(r,t){const i={};t&1&&(i.filter=r[0]),t&2&&(i.block=r[2]),e.$set(i)},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){d(e.$$.fragment,r),n=!1},d(r){$(e,r)}}}function ni(o){let e,n,r=o[1],t=[];for(let a=0;a<r.length;a+=1)t[a]=at(it(o,r,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=y()},l(a){for(let l=0;l<t.length;l+=1)t[l].l(a);e=y()},m(a,l){for(let s=0;s<t.length;s+=1)t[s].m(a,l);g(a,e,l),n=!0},p(a,[l]){if(l&3){r=a[1];let s;for(s=0;s<r.length;s+=1){const c=it(a,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=at(c),t[s].c(),h(t[s],1),t[s].m(e.parentNode,e))}for(O(),s=r.length;s<t.length;s+=1)i(s);R()}},i(a){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(a){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(a){oe(t,a),a&&m(e)}}}function ri(o,e,n){let{searchTerm:r=""}=e,{textBlocks:t}=e;return o.$$set=i=>{"searchTerm"in i&&n(0,r=i.searchTerm),"textBlocks"in i&&n(1,t=i.textBlocks)},[r,t]}class ii extends z{constructor(e){super(),E(this,e,ri,ni,C,{searchTerm:0,textBlocks:1})}}const ai=`
# Purpose of the Kanban Guide

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
`,oi=`
# Purpose of the Nexus Guide

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
`,si=`
The Definitive Guide to Scrum@Scale: Scaling that Works

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
`,li=`
# Purpose of the Scrum Guide

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
4. Develop and sustain Cloud (online, secure, on-demand) and other operational
   environments for product use; and,
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
`,ci=`
# Scrum Definition

Scrum is a lightweight framework[#ScrumFramework] that helps people, teams and organizations[#Organization] generate value through adaptive[ScrumPillars:Adaptation] solutions for complex problems.

In a nutshell, Scrum requires a Scrum Master[ScrumTeam:ScrumMaster] to foster an environment where:

1. A Product Owner[ScrumTeam:ProductOwner] orders the work[ScrumArtefact:ProductBacklog:Item] for a complex problem into a Product Backlog[ScrumArtefact:ProductBacklog].
2. The Scrum Team[ScrumTeam] turns a selection of the work[SprintBacklogItem,ScrumArtefact:ProductBacklog:Item] into an Increment[ScrumArtifacts:Increment] of value during a Sprint[ScumEvents:Sprint].
3. The Scrum Team[ScrumTeam] and its stakeholders[#Stakeholder] inspect[ScrumPillars:Inspection] the results[#Increment] and adjust[ScrumPillars:Adaptation] for the next Sprint[ScumEvents:Sprint].[ScrumEvent:SprintReview]
4. Repeat[#cadence]

Scrum is simple.
Try it[Scrum] as is and determine if its philosophy, theory, and structure help to achieve goals[Commitments:ProductGoal,Commitments:SprintGoal] and create value.
The Scrum framework[#ScrumFramework] is purposefully incomplete, only defining the parts required to implement Scrum theory.
Scrum is built upon by the collective intelligence of the people using it.
Rather than provide people with detailed instructions, the rules of Scrum guide their relationships[ScrumTeam] and interactions[ScumEvent].

Various processes, techniques and methods can be employed within the framework[#ScrumFramework].
Scrum wraps around existing practices or renders them unnecessary[Lean:WasteReduction].
Scrum makes visible[ScrumPillars:Transparency] the relative efficacy of current management, environment, and work techniques, so that improvements[ScrumPillars:Adaptation] can be made.

# Scrum Theory

Scrum is founded on empiricism[#Empiricism] and lean thinking.
Empiricism[#Empiricism] asserts that knowledge comes from experience and making decisions based on what is observed[ScrumPillars:Inspection].
Lean thinking reduces waste[Lean:WasteReduction] and focuses[ScrumValues:Focus] on the essentials.

Scrum employs an iterative[#cadence], incremental[#Increment] approach to optimize predictability and to control risk.
Scrum engages groups of people[ScrumTeam] who collectively have all the skills and expertise to do the work and share or acquire such skills as needed[#learn].[#SelfManagement]

Scrum combines four formal events[ScrumEvents] for inspection[ScrumPillars:Inspection] and adaptation[ScrumPillars:Adaption], within a containing event[ScrumEvents], the Sprint[ScrumEvents:Sprint].
These events[ScrumEvents] work because they[ScrumEvents] implement the empirical[#Empiricism] Scrum pillars[ScrumPillars] of transparency[ScrumPillars:Transparency], inspection[ScrumPillars:Inspection], and adaptation[ScrumPillars:Adaption].

## Transparency[ScrumPillars:Transparency]

The emergent[#Emergence] process and work must be visible[ScrumPillars:Transparency] to those performing the work[ScrumTeam:Developers] as well as those receiving the work[#Stakeholder].
With Scrum, important decisions are based on the perceived state of its three formal artifacts[ScrumArtifacts].
Artifacts[ScrumArtifacts] that have low transparency[ScrumPillars:Transparency] can lead to decisions that diminish value and increase risk.
Transparency[ScrumPillars:Transparency] enables inspection[ScrumPillars:Inspection].
Inspection[ScrumPillars:Inspection] without transparency[ScrumPillars:Transparency] is misleading and wasteful.

## Inspection[ScrumPillars:Inspection]

The Scrum artifacts[ScrumArtifacts] and the progress toward agreed goals[Commitments:ProductGoal,Commitments:SprintGoal] must be inspected[ScrumPillars:Inspection] frequently and diligently to detect potentially undesirable variances or problems.
To help with inspection[ScrumPillars:Inspection], Scrum provides cadence[#cadence] in the form of its five events[ScrumEvents].

Inspection[ScrumPillars:Inspection] enables adaptation[ScrumPillars:Adaption].
Inspection[ScrumPillars:Inspection] without adaptation[ScrumPillars:Adaption] is considered pointless[ScrumValues:Courage].
Scrum events[ScrumEvents] are designed to provoke change[ScrumPillars:Adaption].

## Adaptation[ScrumPillars:Adaption]

If any aspects of a process deviate outside acceptable limits or if the resulting product is unacceptable[ScrumArtefact:Increment:Commitment:DefinitionOfDone], the process being applied[ScrumEvents] or the materials being produced[ScrumArtifacts] must be adjusted[ScrumPillars:Adaption].
The adjustment[ScrumPillars:Adaption] must be made as soon as possible to minimize further deviation.

Adaptation[ScrumPillars:Adaption] becomes more difficult when the people involved are not empowered or self-managing[#SelfManagement].
A Scrum Team[ScrumTeam] is expected to adapt[ScrumPillars:Adaption] the moment it learns anything new through inspection[ScrumPillars:Inspection].

# Scrum Values[ScrumValues]

Successful use of Scrum depends on people becoming more proficient in living five values[ScrumValues]:
**Commitment, Focus, Openness, Respect, and Courage**[ScrumValues]

The Scrum Team[ScrumTeam] commits[ScrumValues:Commitment] to achieving its goals[Commitments:ProductGoal,Commitments:SprintGoal] and to supporting each other.
Their primary focus[ScrumValues:Focus] is on the work of the Sprint[ScumEvents:Sprint] to make the best possible progress toward these goals[Commitments:ProductGoal,Commitments:SprintGoal].
The Scrum Team[ScrumTeam] and its stakeholders[#Stakeholder] are open[ScrumValues:Openness] about the work and the challenges.
Scrum Team[ScrumTeam] members respect[ScrumValues:Respect] each other to be capable, independent people, and are respected[ScrumValues:Respect] as such by the people with whom they work.
The Scrum Team[ScrumTeam] members have the courage[ScrumValues:Courage] to do the right thing, to work on tough problems.

These values[ScrumValues] give direction to the Scrum Team[ScrumTeam] with regard to their work, actions, and behavior.
The decisions that are made, the steps taken, and the way Scrum is used should reinforce these values[ScrumValues], not diminish or undermine them[ScrumValues].
The Scrum Team[ScrumTeam] members learn and explore the values[ScrumValues] as they[ScrumTeam] work with the Scrum events[ScrumEvents] and artifacts[ScrumArtifacts].
When these values[ScrumValues] are embodied by the Scrum Team[ScrumTeam] and the people they[#externalPeople?] work with, the empirical[#Empiricism] Scrum pillars of transparency[ScrumPillars:Transparency], inspection[ScrumPillars:Inspection], and adaptation[ScrumPillars:Adaption] come to life building trust.

# Scrum Team[ScrumTeam]

The fundamental unit of Scrum is a small team[ScrumTeam] of people, a Scrum Team[ScrumTeam].
The Scrum Team[ScrumTeam] consists of one Scrum Master[ScrumTeam:ScrumMaster], one Product Owner[ScrumTeam:ProductOwner], and Developers[ScrumTeam:Developers].
Within a Scrum Team[ScrumTeam], there are no sub-teams or hierarchies.
It[ScrumTeam] is a cohesive unit of professionals focused[ScrumValues:Focus] on one objective at a time, the Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal].

Scrum Teams[ScrumTeam] are cross-functional[#cross-functional], meaning the members have all the skills necessary to create value each Sprint[ScumEvents:Sprint].
They[ScrumTeam] are also self-managing[#SelfManagement], meaning they[ScrumTeam] internally decide who does what, when, and how.

The Scrum Team[ScrumTeam] is small enough to remain nimble and large enough to complete significant work within a Sprint[ScumEvents:Sprint], typically 10 or fewer people.
In general, we have found that smaller teams[ScrumTeam] communicate better and are more productive.
If Scrum Teams[ScrumTeam] become too large, they[ScrumTeam] should consider reorganizing into multiple cohesive Scrum Teams[ScrumTeam], each focused[ScrumValues:Focus] on the same product.
Therefore, they[ScrumTeam] should share the same Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal], Product Backlog[ScrumArtefact:ProductBacklog], and Product Owner[ScrumTeam:ProductOwner].

The Scrum Team[ScrumTeam] is responsible[Responsible] for all product-related activities from stakeholder[#Stakeholder] collaboration, verification, maintenance, operation, experimentation, research and development, and anything else that might be required.
They[ScrumTeam] are structured and empowered by the organization[#Organization] to manage their[ScrumTeam] own work.
Working in Sprints[ScumEvents:Sprint] at a sustainable pace improves[ScrumPillars:Adaption] the Scrum Team’s[ScrumTeam] focus[ScrumValues:Focus] and consistency[ReduceComplexity].

The entire Scrum Team[ScrumTeam] is accountable[ScrumTeam:Accountable] for creating a valuable, useful Increment[ScrumArtifacts] every Sprint[ScumEvents:Sprint].
Scrum defines three specific accountabilities[Accountable] within the Scrum Team[ScrumTeam]: the Developers[ScrumTeam:Developers], the Product Owner[ScrumTeam:ProductOwner], and the Scrum Master[ScrumTeam:ScrumMaster].

## Developers[ScrumTeam:Developers]

Developers[ScrumTeam:Developers] are the people in the Scrum Team[ScrumTeam] that are committed[ScrumValues:Commitment] to creating any aspect of a usable Increment[ScrumArtifacts] each Sprint[ScumEvents:Sprint].

The specific skills needed by the Developers[ScrumTeam:Developers] are often broad and will vary with the domain of work. However, the Developers[ScrumTeam:Developers] are always accountable[ScrumTeam:Developers:Accountable] for:

- Creating a plan for the Sprint[ScumEvents:Sprint], the Sprint Backlog;[ScrumTeam:Developers:Accountable]
- Instilling quality by adhering to a Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone];[ScrumTeam:Developers:Accountable]
- Adapting[ScrumPillars:Adaption] their plan each day toward the Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal]; and,[ScrumTeam:Developers:Accountable]
- Holding each other accountable as professionals.[ScrumTeam:Developers:Accountable]

## Product Owner[ScrumTeam:ProductOwner]

The Product Owner[ScrumTeam:ProductOwner] is accountable[ScrumTeam:ProductOwner:Accountable] for maximizing the value of the product resulting from the work of the Scrum Team[ScrumTeam].
How this is done may vary widely across organizations[#Organization], Scrum Teams[ScrumTeam], and individuals.

The Product Owner[ScrumTeam:ProductOwner] is also accountable[ScrumTeam:ProductOwner:Accountable] for effective Product Backlog[ScrumArtefact:ProductBacklog] management, which includes:

- Developing and explicitly communicating the Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal];[ScrumTeam:ProductOwner:Accountable]
- Creating and clearly communicating Product Backlog items[ScrumArtefact:ProductBacklog:Item];[ScrumTeam:ProductOwner:Accountable]
- Ordering Product Backlog items[ScrumArtefact:ProductBacklog:Item]; and,[ScrumTeam:ProductOwner:Accountable]
- Ensuring that the Product Backlog[ScrumArtefact:ProductBacklog] is transparent[ScrumPillars:Transparency], visible[ScrumPillars:Transparency] and understood.[ScrumTeam:ProductOwner:Accountable]

The Product Owner[ScrumTeam:ProductOwner] may do the above work or may delegate the responsibility[ProductOwner:Responsible] to others.
Regardless, the Product Owner[ScrumTeam:ProductOwner] remains accountable.[ScrumTeam:ProductOwner:Accountable]

For Product Owners[ScrumTeam:ProductOwner] to succeed, the entire organization[#Organization] must respect[ScrumValues:Respect] their decisions.
These decisions are visible[ScrumPillars:Transparency] in the content and ordering of the Product Backlog[ScrumArtefact:ProductBacklog], and through the inspectable[ScrumPillars:Inspection] Increment[ScrumArtifacts] at the Sprint Review[ScrumEvents:SprintReview].[ScrumTeam:ProductOwner]

The Product Owner[ScrumTeam:ProductOwner] is one person, not a committee.
The Product Owner[ScrumTeam:ProductOwner] may represent the needs of many stakeholders[#Stakeholder] in the Product Backlog[ScrumArtefact:ProductBacklog].
Those wanting to change the Product Backlog[ScrumArtefact:ProductBacklog] can do so by trying to convince the Product Owner[ScrumTeam:ProductOwner].

## Scrum Master[ScrumTeam:ScrumMaster]

The Scrum Master[ScrumTeam:ScrumMaster] is accountable[ScrumTeam:ScrumMaster:Accountable] for establishing Scrum as defined in the Scrum Guide.
They[ScrumTeam:ScrumMaster] do this by helping everyone understand Scrum theory and practice, both within the Scrum Team[ScrumTeam] and the organization[#Organization].

The Scrum Master[ScrumTeam:ScrumMaster] is accountable[ScrumTeam:ScrumMaster:Accountable] for the Scrum Team’s[ScrumTeam] effectiveness.
They[ScrumTeam:ScrumMaster] do this by enabling the Scrum Team[ScrumTeam] to improve[ScrumPillars:Adaption] its practices, within the Scrum framework[#ScrumFramework].

Scrum Masters[ScrumTeam:ScrumMaster] are true leaders who serve the Scrum Team[ScrumTeam] and the larger organization[#Organization].

The Scrum Master[ScrumTeam:ScrumMaster] serves[ScrumTeam:ScrumMaster:Serve] the Scrum Team[ScrumTeam] in several ways, including:

- Coaching the team members[ScrumTeam] in self-management[#SelfManagement] and cross-functionality[#cross-functional];[ScrumTeam:ScrumMaster:Serve]
- Helping the Scrum Team[ScrumTeam] focus[ScrumValues:Focus] on creating high-value Increments[ScrumTeam:ScrumMaster:Serve][ScrumArtifacts] that meet the Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone];
- Causing the removal of impediments[#impediments] to the Scrum Team’s[ScrumTeam] progress; and,[ScrumTeam:ScrumMaster:Serve]
- Ensuring that all Scrum events[ScrumEvents] take place and are positive, productive, and kept within the timebox[#timebox].[ScrumTeam:ScrumMaster:Serve]

The Scrum Master[ScrumTeam:ScrumMaster] serves[ScrumTeam:ScrumMaster:Serve] the Product Owner[ScrumTeam:ProductOwner] in several ways, including:

- Helping find techniques for effective Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal] definition and Product Backlog[ScrumArtefact:ProductBacklog] management;[ScrumTeam:ScrumMaster:Serve]
- Helping the Scrum Team[ScrumTeam] understand the need for clear and concise Product Backlog items[ScrumArtefact:ProductBacklog:Item];[ScrumTeam:ScrumMaster:Serve]
- Helping establish empirical[#Empiricism] product planning for a complex environment; and,[ScrumTeam:ScrumMaster:Serve]
- Facilitating stakeholder[#Stakeholder] collaboration as requested or needed.[ScrumTeam:ScrumMaster:Serve]

The Scrum Master[ScrumTeam:ScrumMaster] serves[ScrumTeam:ScrumMaster:Serve] the organization[#Organization] in several ways, including:

- Leading, training, and coaching the organization[#Organization] in its Scrum adoption;[ScrumTeam:ScrumMaster:Serve]
- Planning and advising Scrum implementations within the organization[#Organization];[ScrumTeam:ScrumMaster:Serve]
- Helping employees and stakeholders[#Stakeholder] understand and enact an empirical[#Empiricism] approach for complex work; and,[ScrumTeam:ScrumMaster:Serve]
- Removing barriers between stakeholders[#Stakeholder] and Scrum Teams[ScrumTeam].[ScrumTeam:ScrumMaster:Serve]

# Scrum Events[ScrumEvents]

The Sprint[ScumEvents:Sprint] is a container for all other events[ScrumEvents].
Each event[ScrumEvents] in Scrum is a formal opportunity to inspect[ScrumPillars:Inspection] and adapt[ScrumPillars:Adaption] Scrum artifacts[ScrumArtifacts].
These events[ScrumEvents] are specifically designed to enable the transparency[ScrumPillars:Transparency] required.
Failure to operate any events[ScrumEvents] as prescribed results in lost opportunities to inspect[ScrumPillars:Inspection] and adapt[ScrumPillars:Adaption].
Events[ScrumEvents] are used in Scrum to create regularity[#cadence] and to minimize the need for meetings not defined in Scrum[#extendScrum].
Optimally, all events[ScrumEvents] are held at the same time and place to reduce complexity[#ReduceComplexity].

## The Sprint[ScumEvents:Sprint]

Sprints[ScumEvents:Sprint] are the heartbeat[#cadence] of Scrum, where ideas are turned into value.

They[ScumEvents:Sprint] are fixed length[#timebox] events[ScumEvents:Sprint] of one month[#timebox] or less to create consistency[#ReduceComplexity].
A new Sprint[ScumEvents:Sprint] starts immediately after the conclusion of the previous Sprint[ScrumEvents:#order,ScumEvents:Sprint].

All the work[#PBI] necessary to achieve the Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal], including Sprint Planning[ScumEvents:SprintPlanning], Daily Scrums[ScumEvents:DailyScrum], Sprint Review[ScrumEvents:SprintReview], and Sprint Retrospective[ScrumEvents:SprintRetrospective], happen within Sprints[ScumEvents:Sprint].

During the Sprint[ScumEvents:Sprint]:

- No changes[ScrumPillars:Adaption] are made that would endanger the Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal];
- Quality does not decrease;
- The Product Backlog[ScrumArtefact:ProductBacklog] is refined[ScrumPillars:Adaption] as needed; and,
- Scope may be clarified and renegotiated[ScrumPillars:Adaption] with the Product Owner[ScrumTeam:ProductOwner] as more is learned.

Sprints[ScumEvents:Sprint] enable predictability[#Forecast] by ensuring inspection[ScrumPillars:Inspection] and adaptation[ScrumPillars:Adaption] of progress toward a Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal] at least every calendar month[#timebox].
When a Sprint’s[ScumEvents:Sprint] horizon[#timebox] is too long[#timebox] the Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal] may become invalid, complexity may rise[#ReduceComplexity], and risk may[#uncertency] increase.
Shorter[#timebox] Sprints[ScumEvents:Sprint] can be employed to generate more learning cycles[#cadence] and limit risk of cost and effort to a smaller time frame[#timebox].
Each Sprint[ScumEvents:Sprint] may be considered a short project.

Various practices exist to forecast[#Forecast] progress, like burn-downs[#extendScrum,#BurnDown], burn-ups[#extendScrum,#BurnUp], or cumulative flows[#extendScrum].
While proven useful, these do not replace the importance of empiricism[#Empiricism].
In complex environments, what will happen is unknown[#uncertency].
Only what has already happened may be used for forward-looking decision making.

A Sprint[ScumEvents:Sprint] could be cancelled if the Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal] becomes obsolete.
Only the Product Owner[ScrumTeam:ProductOwner] has the authority[ProductOwner:Responsible] to cancel the Sprint[ScumEvents:Sprint].

## Sprint Planning[ScumEvents:SprintPlanning]

Sprint Planning[ScumEvents:SprintPlanning] initiates[ScrumEvents:#order] the Sprint[ScumEvents:Sprint] by laying out[#transparency] the work to be performed for the Sprint[ScumEvents:Sprint].
This resulting plan[#SprintBacklog] is created by the collaborative work of the entire Scrum Team[ScrumTeam,ScumEvents:SprintPlanning:Attendees].

The Product Owner[ScrumTeam:ProductOwner] ensures[ProductOwner:Responsible] that attendees[ScumEvents:SprintPlanning:Attendees] are prepared to discuss the most important Product Backlog items[ScrumArtefact:ProductBacklog:Item] and how they[ScrumArtefact:ProductBacklog:Item] map to the Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal].
The Scrum Team[ScrumTeam] may also invite other people to attend[ScumEvents:SprintPlanning:Attendees] Sprint Planning[ScumEvents:SprintPlanning] to provide advice.

Sprint Planning[ScumEvents:SprintPlanning] addresses the following topics:

**Topic One: Why is this Sprint[ScumEvents:Sprint] valuable?**

The Product Owner[ScrumTeam:ProductOwner] proposes how the product could increase its value and utility in the current Sprint[ScumEvents:Sprint].
The whole Scrum Team[ScrumTeam] then collaborates to define a Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal] that communicates why the Sprint[ScumEvents:Sprint] is valuable to stakeholders[#Stakeholder].
The Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal] must be finalized prior to the end of Sprint Planning[ScumEvents:SprintPlanning].

**Topic Two: What can be Done this Sprint?**

Through discussion with the Product Owner[ScrumTeam:ProductOwner], the Developers[ScrumTeam:Developers] select items[ScrumArtefact:ProductBacklog:Item] from the Product Backlog[ScrumArtefact:ProductBacklog] to include in the current Sprint[ScumEvents:Sprint].
The Scrum Team[ScrumTeam] may refine[#ProductBacklogRefinement] these items[ScrumArtefact:ProductBacklog:Item] during this process, which increases understanding and confidence.

Selecting how much can be completed within a Sprint[ScumEvents:Sprint] may be challenging.
However, the more the Developers[ScrumTeam:Developers] know about their[ScrumTeam:Developers] past performance, their[ScrumTeam:Developers] upcoming capacity, and their[ScrumTeam:Developers] Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone], the more confident they[ScrumTeam:Developers] will be in their Sprint[ScumEvents:Sprint] forecasts[#Forecast].

**Topic Three: How will the chosen work get done?**

For each selected Product Backlog item[ScrumArtefact:ProductBacklog:Item], the Developers[ScrumTeam:Developers] plan the work necessary to create an Increment[ScrumArtifacts] that meets the Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone].
This is often done by decomposing Product Backlog items[ScrumArtefact:ProductBacklog:Item] into smaller work items[WorkItem] of one day[#timebox] or less.
How this is done is at the sole discretion of the Developers[ScrumTeam:Developers].
No one else tells them[ScrumTeam:Developers] how to turn Product Backlog items[ScrumArtefact:ProductBacklog:Item] into Increments[ScrumArtifacts] of value.

The Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal], the Product Backlog items[ScrumArtefact:ProductBacklog:Item] selected for the Sprint[ScumEvents:Sprint], plus the plan for delivering[ScrumArtifacts:Increment] them are together referred to as the Sprint Backlog.

Sprint Planning[ScumEvents:SprintPlanning] is timeboxed[#timebox] to a maximum of eight hours[#timebox] for a one-month Sprint[ScumEvents:Sprint].
For shorter Sprints[ScumEvents:Sprint], the event is usually shorter.

## Daily Scrum[ScumEvents:DailyScrum]

The purpose of the Daily Scrum[ScumEvents:DailyScrum] is to inspect[ScrumPillars:Inspection] progress toward the Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal] and adapt[ScrumPillars:Adaption] the Sprint Backlog as necessary, adjusting[ScrumPillars:Adaption] the upcoming planned work.

The Daily Scrum[ScumEvents:DailyScrum] is a 15-minute[#timebox] event for the Developers[ScrumTeam:Developers,ScumEvents:DailyScrum:Attendees] of the Scrum Team[ScrumTeam].
To reduce complexity[ReduceComplexity], it is held at the same time and place every working day[ScrumEvents:#order] of the Sprint[ScumEvents:Sprint].
If the Product Owner[ScrumTeam:ProductOwner] or Scrum Master[ScrumTeam:ScrumMaster] are actively working on items[ScrumArtefact:ProductBacklog:Item,WorkItem] in the Sprint Backlog, they[ScrumTeam:ProductOwner,ScrumTeam:ScrumMaster] participate[ScumEvents:DailyScrum:Attendees] as Developers[ScrumTeam:Developers].

The Developers[ScrumTeam:Developers][ScrumTeam:Developers] want, as long as their Daily Scrum[ScumEvents:DailyScrum] focuses on progress toward the Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal] and produces an actionable plan for the next day of work.
This creates focus[ScrumValue:Focus] and improves[ScrumPillars:Adaption] self-management[#SelfManagement].

Daily Scrums[ScumEvents:DailyScrum] improve[ScrumPillars:Adaption] communications, identify impediments, promote quick decision-making, and consequently eliminate the need for other meetings[#extendScrum].

The Daily Scrum[ScumEvents:DailyScrum] is not the only time Developers[ScrumTeam:Developers] are allowed to adjust[ScrumPillars:Adaption] their plan.
They[ScrumTeam:Developers] often meet throughout the day for more detailed discussions about adapting[ScrumPillars:Adaption] or re-planning the rest of the Sprint’s[ScumEvents:Sprint] work.

## Sprint Review[ScrumEvents:SprintReview]

The purpose of the Sprint Review[ScrumEvents:SprintReview] is to inspect[ScrumPillars:Inspection] the outcome of the Sprint[ScumEvents:Sprint] and determine future adaptations[ScrumPillars:Adaption].
The Scrum Team[ScrumTeam,ScumEvents:SprintReview:Attendees] presents the results of their work to key stakeholders[ScumEvents:SprintReview:Attendees,#Stakeholder] and progress toward the Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal] is discussed.

During the event[ScrumEvents:SprintReview], the Scrum Team[ScrumTeam] and stakeholders[#Stakeholder] review[ScrumEvents:SprintReview] what was accomplished[#Forecast] in the Sprint[ScumEvents:Sprint] and what has changed[Adaption] in their environment.
Based on this information, attendees[ScumEvents:SprintReview:Attendees] collaborate on what to do next.
The Product Backlog[ScrumArtefact:ProductBacklog] may also be adjusted[ScrumPillars:Adaption] to meet new opportunities.
The Sprint Review[ScrumEvents:SprintReview] is a working session and the Scrum Team[ScrumTeam] should avoid limiting it to a presentation.

The Sprint Review[ScrumEvents:SprintReview] is the second to last[ScrumEvents:#order] event of the Sprint[ScumEvents:Sprint] and is timeboxed[#timebox] to a maximum of four hours[#timebox] for a one-month Sprint.
For shorter Sprints[ScumEvents:Sprint], the event is usually shorter.

## Sprint Retrospective[ScrumEvents:SprintRetrospective]

The purpose of the Sprint Retrospective[ScrumEvents:SprintRetrospective] is to plan ways to increase quality and effectiveness.

The Scrum Team[ScrumTeam,ScumEvents:SprintRetrospective:Attendees] inspects[ScrumPillars:Inspection] how the last Sprint[ScumEvents:Sprint] went with regards to individuals, interactions, processes, tools, and their Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone].
Inspected[ScrumPillars:Inspection] elements often vary with the domain of work. Assumptions that led them astray are identified and their origins explored.
The Scrum Team[ScrumTeam] discusses what went well during the Sprint[ScumEvents:Sprint], what problems it encountered, and how those problems were (or were not) solved[ScrumValues:Courage].

The Scrum Team[ScrumTeam] identifies[ScrumPillars:Inspection] the most helpful changes to improve[ScrumPillars:Adaption] its effectiveness.
The most impactful improvements[ScrumPillars:Adaption] are addressed as soon as possible.
They[#mostImpactfulImprovements?] may even be added to the Sprint Backlog for the next Sprint[ScumEvents:Sprint].

The Sprint Retrospective[ScrumEvents:SprintRetrospective] concludes[ScrumEvents:#order] the Sprint[ScumEvents:Sprint].
It[ScrumEvents:SprintRetrospective] is timeboxed[#timebox] to a maximum of three hours[#timebox] for a onemonth Sprint[ScumEvents:Sprint].
For shorter Sprints[ScumEvents:Sprint], the event[ScrumEvents:SprintRetrospective] is usually shorter.[#timebox]

# Scrum Artifacts[ScrumArtifacts]

Scrum’s artifacts[ScrumArtifacts] represent work or value.
They[ScrumArtifacts] are designed to maximize transparency[ScrumPillars:Transparency] of key information.
Thus, everyone inspecting[ScrumPillars:Inspection] them[ScrumArtifacts] has the same basis for adaptation[ScrumPillars:Adaption].

Each artifact[ScrumArtifacts] contains a commitment[ScrumValues:Commitment] to ensure it provides information that enhances transparency[ScrumPillars:Transparency] and focus[ScrumValues:Focus] against which progress can be measured:

- For the Product Backlog[ScrumArtefact:ProductBacklog] it is the Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal].
- For the Sprint Backlog it is the Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal].
- For the Increment[ScrumArtifacts] it is the Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone].

These commitments[ScrumValues:Commitment,Commitments:ProductGoal,Commitments:SprintGoal,ScrumArtefact:Increment:Commitment:DefinitionOfDone] exist to reinforce empiricism[#Empiricism] and the Scrum values[ScrumValues] for the Scrum Team and their stakeholders[#Stakeholder].

## Product Backlog[ScrumArtefact:ProductBacklog]

The Product Backlog[ScrumArtefact:ProductBacklog] is an emergent[#Emergence], ordered list of what is needed to improve[ScrumPillars:Adaption] the product.
It[ProductBacklog] is the single source of work undertaken by the Scrum Team[ScrumTeam].

Product Backlog items[ScrumArtefact:ProductBacklog:Item] that can be Done by the Scrum Team[ScrumTeam] within one Sprint[ScumEvents:Sprint] are deemed ready[#Ready] for selection in a Sprint Planning[ScumEvents:SprintPlanning] event.
They[ScrumArtefact:ProductBacklog:Item] usually acquire this degree of transparency[ScrumPillars:Transparency] after refining[ScrumPillars:Adaption] activities.
Product Backlog[ScrumArtefact:ProductBacklog] refinement[#ProductBacklogRefinement] is the act of breaking down and further defining Product Backlog items[ScrumArtefact:ProductBacklog:Item] into smaller more precise items[ScrumArtefact:ProductBacklog:Item].
This[#ProductBacklogRefinement] is an ongoing activity to add details, such as a description, order, and size.
Attributes often vary with the domain of work.

The Developers[ScrumTeam:Developers] who will be doing the work are responsible[ScrumTeam:Developers:Responsible] for the sizing.
The Product Owner[ScrumTeam:ProductOwner] may influence the Developers[ScrumTeam:Developers] by helping them[ScrumTeam:Developers] understand and select trade-offs.

### Commitment[ScrumValues:Commitment]: Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal]

The Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal] describes a future state of the product which can serve as a target for the Scrum Team[ScrumTeam] to plan against.
The Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal] is in the Product Backlog[ScrumArtefact:ProductBacklog].
The rest of the Product Backlog[ScrumArtefact:ProductBacklog] emerges[#Emergence] to define “what” will fulfill the Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal].

> A product is a vehicle to deliver value.
> It[product] has a clear boundary, known stakeholders[#Stakeholder], well-defined users or customers.
> A product could be a service, a physical product, or something more abstract.

The Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal] is the long-term objective for the Scrum Team[ScrumTeam].
They[ScrumTeam] must fulfill (or abandon) one objective[ScrumArtefact:ProductBacklog:Commitment:ProductGoal] before taking on the next[ScrumArtefact:ProductBacklog:Commitment:ProductGoal].

## Sprint Backlog

The Sprint Backlog is composed of the Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal] (why), the set of Product Backlog items[ScrumArtefact:ProductBacklog:Item] selected for the Sprint[ScumEvents:Sprint] (what), as well as an actionable plan[WorkItem] for delivering the Increment[ScrumArtifacts:Increment] (how).

The Sprint Backlog is a plan by and for the Developers[ScrumTeam:Developers].
It is a highly visible[ScrumPillars:Transparency], real-time picture of the work that the Developers[ScrumTeam:Developers] plan to accomplish[#Forecast] during the Sprint[ScumEvents:Sprint] in order to achieve the Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal].
Consequently, the Sprint Backlog is updated throughout the Sprint as more is learned.
It should have enough detail that they[ScrumTeam:Developers] can inspect[ScrumPillars:Inspection] their progress in the Daily Scrum[ScumEvents:DailyScrum].

### Commitment[ScrumValues:Commitment]: Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal]

The Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal] is the single objective for the Sprint[ScumEvents:Sprint].
Although the Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal] is a commitment[ScrumValues:Commitment] by the Developers[ScrumTeam:Developers], it provides flexibility in terms of the exact work needed to achieve it.
The Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal] also creates coherence[#Coherence] and focus[ScrumValues:Focus], encouraging the Scrum Team[ScrumTeam] to work together rather than on separate initiatives.

The Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal] is created during the Sprint Planning[ScumEvents:SprintPlanning] event and then added to the Sprint Backlog.
As the Developers[ScrumTeam:Developers] work during the Sprint[ScumEvents:Sprint], they[ScrumTeam:Developers] keep the Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal] in mind.
If the work turns out to be different than they[ScrumTeam:Developers] expected, they[ScrumTeam:Developers] collaborate with the Product Owner[ScrumTeam:ProductOwner] to negotiate[ScrumPillars:Adaption] the scope of the Sprint Backlog within the Sprint[ScumEvents:Sprint] without affecting the Sprint Goal[ScrumArtefact:SprintBacklog:Commitment:SprintGoal].

## Increment[ScrumArtifacts]

An Increment[ScrumArtifacts] is a concrete stepping stone toward the Product Goal[ScrumArtefact:ProductBacklog:Commitment:ProductGoal].
Each Increment[ScrumArtifacts] is additive to all prior Increments[ScrumArtifacts] and thoroughly verified, ensuring that all Increments[ScrumArtifacts] work together.
In order to provide value, the Increment[ScrumArtifacts] must be usable.

Multiple Increments[ScrumArtifacts] may be created within a Sprint[ScumEvents:Sprint].
The sum of the Increments[ScrumArtifacts] is presented at the Sprint Review[ScrumEvents:SprintReview] thus supporting empiricism[#Empiricism].
However, an Increment[ScrumArtifacts] may be delivered to stakeholders[#Stakeholder] prior to the end of the Sprint.
The Sprint Review[ScrumEvents:SprintReview] should never be considered a gate to releasing[ScrumArtifacts:Increment] value.

Work cannot be considered part of an Increment[ScrumArtifacts] unless it meets the Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone].

### Commitment[ScrumValues:Commitment]: Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone]

The Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone] is a formal description of the state of the Increment[ScrumArtifacts] when it meets the quality measures required for the product.

The moment a Product Backlog item[ScrumArtefact:ProductBacklog:Item] meets the Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone], an Increment[ScrumArtifacts] is born.

The Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone] creates transparency[ScrumPillars:Transparency] by providing everyone a shared understanding of what work was completed as part of the Increment[ScrumArtifacts].
If a Product Backlog item[ScrumArtefact:ProductBacklog:Item] does not meet the Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone], it cannot be released[ScrumArtifacts:Increment] or even presented at the Sprint Review[ScrumEvents:SprintReview].
Instead, it returns to the Product Backlog[ScrumArtefact:ProductBacklog] for future consideration.

If the Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone] for an increment[ScrumArtifacts:Increment] is part of the standards of the organization[#Organization], all Scrum Teams[ScrumTeam] must follow it as a minimum.
If it is not an organizational[#Organization] standard, the Scrum Team[ScrumTeam] must create a Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone] appropriate for the product.

The Developers[ScrumTeam:Developers] are required to conform to the Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone].
If there are multiple Scrum Teams[ScrumTeam] working together on a product, they[ScrumTeam] must mutually define and comply with the same Definition of Done[ScrumArtefact:Increment:Commitment:DefinitionOfDone].

# End Note

Scrum is free and offered in this Guide.
The Scrum framework[#ScrumFramework], as outlined herein, is immutable.
While implementing only parts of Scrum is possible, the result is not Scrum.[#extendScrum]
Scrum exists only in its entirety and functions well as a container for other techniques, methodologies, and practices[#extendScrum].

# Copyright

© 2020 Ken Schwaber and Jeff Sutherland

This publication is offered for license under the Attribution Share-Alike license of Creative Commons, accessible at https://creativecommons.org/licenses/by-sa/4.0/legalcode and also described in summary form at https://creativecommons.org/licenses/by-sa/4.0/. By utilizing this Scrum Guide, you acknowledge and agree that you have read and agree to be bound by the terms of the Attribution Share-Alike license of Creative Commons.
`,bt=Object.freeze(Object.defineProperty({__proto__:null,Kanban_Guide_2020:ai,Nexus_Guide_2021:oi,Scrum_At_Scale_Guide_2022:si,Scrum_Guide_2017:li,Scrum_Guide_2020:ci},Symbol.toStringTag,{value:"Module"}));function ui(o){let e,n,r;return{c(){e=P("li"),this.h()},l(t){e=x(t,"LI",{class:!0});var i=B(e);i.forEach(m),this.h()},h(){T(e,"class","autocomplete-items svelte-1jxhqc6"),Oe(e,"autocomplete-active",o[1])},m(t,i){g(t,e,i),e.innerHTML=o[0],n||(r=ue(e,"click",o[2]),n=!0)},p(t,[i]){i&1&&(e.innerHTML=t[0]),i&2&&Oe(e,"autocomplete-active",t[1])},i:V,o:V,d(t){t&&m(e),n=!1,r()}}}function mi(o,e,n){let{itemLabel:r}=e,{highlighted:t}=e;function i(a){ut.call(this,o,a)}return o.$$set=a=>{"itemLabel"in a&&n(0,r=a.itemLabel),"highlighted"in a&&n(1,t=a.highlighted)},[r,t,i]}class hi extends z{constructor(e){super(),E(this,e,mi,ui,C,{itemLabel:0,highlighted:1})}}function ot(o,e,n){const r=o.slice();return r[11]=e[n],r[13]=n,r}function st(o){let e,n,r=o[2],t=[];for(let a=0;a<r.length;a+=1)t[a]=lt(ot(o,r,a));const i=a=>d(t[a],1,1,()=>{t[a]=null});return{c(){e=P("ul");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=x(a,"UL",{id:!0,class:!0});var l=B(e);for(let s=0;s<t.length;s+=1)t[s].l(l);l.forEach(m),this.h()},h(){T(e,"id","autocomplete-items-list"),T(e,"class","svelte-9wnqa0")},m(a,l){g(a,e,l);for(let s=0;s<t.length;s+=1)t[s].m(e,null);n=!0},p(a,l){if(l&44){r=a[2];let s;for(s=0;s<r.length;s+=1){const c=ot(a,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=lt(c),t[s].c(),h(t[s],1),t[s].m(e,null))}for(O(),s=r.length;s<t.length;s+=1)i(s);R()}},i(a){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(a){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(a){a&&m(e),oe(t,a)}}}function lt(o){let e,n;function r(){return o[9](o[11])}return e=new hi({props:{itemLabel:o[11],highlighted:o[13]===o[3]}}),e.$on("click",r),{c(){I(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,i){D(e,t,i),n=!0},p(t,i){o=t;const a={};i&4&&(a.itemLabel=o[11]),i&8&&(a.highlighted=o[13]===o[3]),e.$set(a)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function di(o){let e,n,r,t,i,a,l,s=o[2].length>0&&st(o);return{c(){e=P("form"),n=P("div"),r=P("input"),t=X(),s&&s.c(),this.h()},l(c){e=x(c,"FORM",{autocomplete:!0});var u=B(e);n=x(u,"DIV",{class:!0});var p=B(n);r=x(p,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),p.forEach(m),t=Y(u),s&&s.l(u),u.forEach(m),this.h()},h(){T(r,"id","item-input"),T(r,"type","search"),T(r,"placeholder","Search Terms"),T(r,"class","svelte-9wnqa0"),T(n,"class","autocomplete svelte-9wnqa0"),T(e,"autocomplete","off")},m(c,u){g(c,e,u),ae(e,n),ae(n,r),o[7](r),Re(r,o[0]),ae(e,t),s&&s.m(e,null),i=!0,a||(l=[ue(window,"keydown",o[6]),ue(r,"input",o[8]),ue(r,"input",o[4])],a=!0)},p(c,[u]){u&1&&Re(r,c[0]),c[2].length>0?s?(s.p(c,u),u&4&&h(s,1)):(s=st(c),s.c(),h(s,1),s.m(e,null)):s&&(O(),d(s,1,1,()=>{s=null}),R())},i(c){i||(h(s),i=!0)},o(c){d(s),i=!1},d(c){c&&m(e),o[7](null),s&&s.d(),a=!1,ct(l)}}}function fi(o,e){let n=o.toLowerCase().indexOf(e.toLowerCase()),r=o.substring(n,n+e.length),t=`<strong>${r}</strong>`;return o.replaceAll(r,t)}function pi(o){return o.replaceAll(/<(.)*?>/g,"")}function gi(o,e,n){let r;Dt(o,Vr,v=>n(10,r=v));let{searchTerm:t=""}=e,i,a=[],l=null;function s(){let v=[];t&&r.forEach(A=>{A.toLowerCase().includes(t.toLowerCase())&&(v=[...v,fi(A,t)])}),n(2,a=v)}function c(v){n(0,t=pi(v)),n(2,a=[]),n(3,l=null),document==null||document.querySelector("#item-input").focus()}function u(v){if(v.key==="ArrowDown"&&(l==null||l<=a.length-1))l===null?n(3,l=0):n(3,l+=1);else if(v.key==="ArrowUp"&&l!==null)l===0?n(3,l=a.length-1):n(3,l-=1);else if(v.key==="Enter")c(l===null?t:a[l]);else return}function p(v){Se[v?"unshift":"push"](()=>{i=v,n(1,i)})}function w(){t=this.value,n(0,t)}const f=v=>c(v);return o.$$set=v=>{"searchTerm"in v&&n(0,t=v.searchTerm)},o.$$.update=()=>{o.$$.dirty&1&&(t||(n(2,a=[]),n(3,l=null)))},[t,i,a,l,s,c,u,p,w,f]}class Si extends z{constructor(e){super(),E(this,e,gi,di,C,{searchTerm:0})}}function wi(o){let e,n,r,t,i,a,l,s,c,u,p,w,f,v,A,M,N,j,ee;function te(b){o[4](b)}let J={};o[1]!==void 0&&(J.searchTerm=o[1]),a=new Si({props:J}),Se.push(()=>ve(a,"searchTerm",te,o[1]));function Q(b){o[5](b)}let se={options:Object.keys(bt)};o[0]!==void 0&&(se.selectedGuide=o[0]),p=new Ot({props:se}),Se.push(()=>ve(p,"selectedGuide",Q,o[0])),p.$on("change",o[3]);function be(b){o[6](b)}function vt(b){o[7](b)}let xe={};return o[2]!==void 0&&(xe.textBlocks=o[2]),o[1]!==void 0&&(xe.searchTerm=o[1]),M=new ii({props:xe}),Se.push(()=>ve(M,"textBlocks",be,o[2])),Se.push(()=>ve(M,"searchTerm",vt,o[1])),{c(){e=P("meta"),n=X(),r=P("h1"),t=me("Interactive Agile Guides"),i=X(),I(a.$$.fragment),s=X(),c=P("br"),u=X(),I(p.$$.fragment),f=X(),v=P("br"),A=X(),I(M.$$.fragment),this.h()},l(b){const U=$t("svelte-144h0ef",document.head);e=x(U,"META",{name:!0,content:!0}),U.forEach(m),n=Y(b),r=x(b,"H1",{});var ge=B(r);t=he(ge,"Interactive Agile Guides"),ge.forEach(m),i=Y(b),q(a.$$.fragment,b),s=Y(b),c=x(b,"BR",{}),u=Y(b),q(p.$$.fragment,b),f=Y(b),v=x(b,"BR",{}),A=Y(b),q(M.$$.fragment,b),this.h()},h(){document.title="Interactive Agile Guides",T(e,"name","description"),T(e,"content","Interactive Agile Guides")},m(b,U){ae(document.head,e),g(b,n,U),g(b,r,U),ae(r,t),g(b,i,U),D(a,b,U),g(b,s,U),g(b,c,U),g(b,u,U),D(p,b,U),g(b,f,U),g(b,v,U),g(b,A,U),D(M,b,U),ee=!0},p(b,[U]){const ge={};!l&&U&2&&(l=!0,ge.searchTerm=b[1],ke(()=>l=!1)),a.$set(ge);const ze={};!w&&U&1&&(w=!0,ze.selectedGuide=b[0],ke(()=>w=!1)),p.$set(ze);const Ae={};!N&&U&4&&(N=!0,Ae.textBlocks=b[2],ke(()=>N=!1)),!j&&U&2&&(j=!0,Ae.searchTerm=b[1],ke(()=>j=!1)),M.$set(Ae)},i(b){ee||(h(a.$$.fragment,b),h(p.$$.fragment,b),h(M.$$.fragment,b),ee=!0)},o(b){d(a.$$.fragment,b),d(p.$$.fragment,b),d(M.$$.fragment,b),ee=!1},d(b){m(e),b&&m(n),b&&m(r),b&&m(i),$(a,b),b&&m(s),b&&m(c),b&&m(u),$(p,b),b&&m(f),b&&m(v),b&&m(A),$(M,b)}}}function bi(o,e,n){let r,t="",i="Scrum_Guide_2020";function a(w){for(const[f,v]of Object.entries(bt))if(f===w)return v;return"# No matching Guide found"}function l(){Be.reset(),n(1,t="")}function s(w){t=w,n(1,t)}function c(w){i=w,n(0,i)}function u(w){r=w,n(2,r),n(0,i)}function p(w){t=w,n(1,t)}return o.$$.update=()=>{o.$$.dirty&1&&n(2,r=a(i).split(`

`))},[i,t,r,l,s,c,u,p]}class Ti extends z{constructor(e){super(),E(this,e,bi,wi,C,{})}}export{Ti as default};
