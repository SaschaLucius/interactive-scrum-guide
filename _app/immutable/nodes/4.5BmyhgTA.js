import{d as w}from"../chunks/index.R8ovVqwX.js";import{s as M,e as u,t as E,a as $,c as h,f as T,g as S,d as p,b as y,i as f,k as L,j as s,C,n as j,r as z,l as R,h as D,q as G}from"../chunks/scheduler.Dh7gh8aA.js";import{S as O,i as K,b as J,d as Q,m as V,a as W,t as X,e as Y}from"../chunks/index.D7BpNTuF.js";import{c as x}from"../chunks/config.bQ1AKIl-.js";const Z=w,ee=!0,ie=Object.freeze(Object.defineProperty({__proto__:null,csr:Z,prerender:ee},Symbol.toStringTag,{value:"Module"}));function te(r){let t,o,e,m,d,n,l,a,i,k,_,A,q,v,b,H,P,F;return{c(){t=u("form"),o=u("label"),e=u("input"),m=E(`
		Keep Header`),d=$(),n=u("label"),l=u("input"),a=E(`
		Full-text search`),i=$(),k=u("label"),_=u("input"),A=E(`
		Auto-Tagging`),q=$(),v=u("label"),b=u("input"),H=E(`
		Tag search`),this.h()},l(g){t=h(g,"FORM",{class:!0});var c=T(t);o=h(c,"LABEL",{});var B=T(o);e=h(B,"INPUT",{type:!0,class:!0}),m=S(B,`
		Keep Header`),B.forEach(p),d=y(c),n=h(c,"LABEL",{});var I=T(n);l=h(I,"INPUT",{type:!0,class:!0}),a=S(I,`
		Full-text search`),I.forEach(p),i=y(c),k=h(c,"LABEL",{});var N=T(k);_=h(N,"INPUT",{type:!0,class:!0}),A=S(N,`
		Auto-Tagging`),N.forEach(p),q=y(c),v=h(c,"LABEL",{});var U=T(v);b=h(U,"INPUT",{type:!0,class:!0}),H=S(U,`
		Tag search`),U.forEach(p),c.forEach(p),this.h()},h(){f(e,"type","checkbox"),f(e,"class","svelte-12afgxq"),f(l,"type","checkbox"),f(l,"class","svelte-12afgxq"),f(_,"type","checkbox"),f(_,"class","svelte-12afgxq"),f(b,"type","checkbox"),f(b,"class","svelte-12afgxq"),f(t,"class","content")},m(g,c){L(g,t,c),s(t,o),s(o,e),e.checked=r[0].keepHeader,s(o,m),s(t,d),s(t,n),s(n,l),l.checked=r[0].fullTextSearch,s(n,a),s(t,i),s(t,k),s(k,_),_.checked=r[0].autoTagging,s(k,A),s(t,q),s(t,v),s(v,b),b.checked=r[0].tagSearch,s(v,H),P||(F=[C(e,"change",r[1]),C(l,"change",r[2]),C(_,"change",r[3]),C(b,"change",r[4])],P=!0)},p(g,[c]){c&1&&(e.checked=g[0].keepHeader),c&1&&(l.checked=g[0].fullTextSearch),c&1&&(_.checked=g[0].autoTagging),c&1&&(b.checked=g[0].tagSearch)},i:j,o:j,d(g){g&&p(t),P=!1,z(F)}}}function ae(r,t,o){let e;R(r,x,a=>o(0,e=a));function m(){e.keepHeader=this.checked,x.set(e)}function d(){e.fullTextSearch=this.checked,x.set(e)}function n(){e.autoTagging=this.checked,x.set(e)}function l(){e.tagSearch=this.checked,x.set(e)}return[e,m,d,n,l]}class ne extends O{constructor(t){super(),K(this,t,ae,te,M,{})}}function se(r){let t,o,e,m="Configuration",d,n,l;return n=new ne({}),{c(){t=u("meta"),o=$(),e=u("h1"),e.textContent=m,d=$(),J(n.$$.fragment),this.h()},l(a){const i=D("svelte-tgyha1",document.head);t=h(i,"META",{name:!0,content:!0}),i.forEach(p),o=y(a),e=h(a,"H1",{"data-svelte-h":!0}),G(e)!=="svelte-1lfvks4"&&(e.textContent=m),d=y(a),Q(n.$$.fragment,a),this.h()},h(){document.title="Configuration",f(t,"name","description"),f(t,"content","Configuration")},m(a,i){s(document.head,t),L(a,o,i),L(a,e,i),L(a,d,i),V(n,a,i),l=!0},p:j,i(a){l||(W(n.$$.fragment,a),l=!0)},o(a){X(n.$$.fragment,a),l=!1},d(a){a&&(p(o),p(e),p(d)),p(t),Y(n,a)}}}class ue extends O{constructor(t){super(),K(this,t,null,se,M,{})}}export{ue as component,ie as universal};
