import{S as w,i as M,s as z,k as u,q as E,a as x,l as f,m as v,r as $,h as i,c as L,n as p,b as A,I as n,T as S,B as F,D,K as O,w as R,P as j,x as G,y as J,f as Q,t as V,z as W}from"../../../chunks/index-46152244.js";import{c as y}from"../../../chunks/store-fe87f594.js";function X(r){let t,o,e,_,g,s,l,a,h,m,k,C,q,T,b,H,P,K;return{c(){t=u("form"),o=u("label"),e=u("input"),_=E(`
		Keep Header`),g=x(),s=u("label"),l=u("input"),a=E(`
		Full-text search`),h=x(),m=u("label"),k=u("input"),C=E(`
		Auto-Tagging`),q=x(),T=u("label"),b=u("input"),H=E(`
		Tag search`),this.h()},l(d){t=f(d,"FORM",{class:!0});var c=v(t);o=f(c,"LABEL",{});var B=v(o);e=f(B,"INPUT",{type:!0,class:!0}),_=$(B,`
		Keep Header`),B.forEach(i),g=L(c),s=f(c,"LABEL",{});var I=v(s);l=f(I,"INPUT",{type:!0,class:!0}),a=$(I,`
		Full-text search`),I.forEach(i),h=L(c),m=f(c,"LABEL",{});var N=v(m);k=f(N,"INPUT",{type:!0,class:!0}),C=$(N,`
		Auto-Tagging`),N.forEach(i),q=L(c),T=f(c,"LABEL",{});var U=v(T);b=f(U,"INPUT",{type:!0,class:!0}),H=$(U,`
		Tag search`),U.forEach(i),c.forEach(i),this.h()},h(){p(e,"type","checkbox"),p(e,"class","svelte-12afgxq"),p(l,"type","checkbox"),p(l,"class","svelte-12afgxq"),p(k,"type","checkbox"),p(k,"class","svelte-12afgxq"),p(b,"type","checkbox"),p(b,"class","svelte-12afgxq"),p(t,"class","content")},m(d,c){A(d,t,c),n(t,o),n(o,e),e.checked=r[0].keepHeader,n(o,_),n(t,g),n(t,s),n(s,l),l.checked=r[0].fullTextSearch,n(s,a),n(t,h),n(t,m),n(m,k),k.checked=r[0].autoTagging,n(m,C),n(t,q),n(t,T),n(T,b),b.checked=r[0].tagSearch,n(T,H),P||(K=[S(e,"change",r[1]),S(l,"change",r[2]),S(k,"change",r[3]),S(b,"change",r[4])],P=!0)},p(d,[c]){c&1&&(e.checked=d[0].keepHeader),c&1&&(l.checked=d[0].fullTextSearch),c&1&&(k.checked=d[0].autoTagging),c&1&&(b.checked=d[0].tagSearch)},i:F,o:F,d(d){d&&i(t),P=!1,D(K)}}}function Y(r,t,o){let e;O(r,y,a=>o(0,e=a));function _(){e.keepHeader=this.checked,y.set(e)}function g(){e.fullTextSearch=this.checked,y.set(e)}function s(){e.autoTagging=this.checked,y.set(e)}function l(){e.tagSearch=this.checked,y.set(e)}return[e,_,g,s,l]}class Z extends w{constructor(t){super(),M(this,t,Y,X,z,{})}}function ee(r){let t,o,e,_,g,s,l;return s=new Z({}),{c(){t=u("meta"),o=x(),e=u("h1"),_=E("Configuration"),g=x(),R(s.$$.fragment),this.h()},l(a){const h=j("svelte-tgyha1",document.head);t=f(h,"META",{name:!0,content:!0}),h.forEach(i),o=L(a),e=f(a,"H1",{});var m=v(e);_=$(m,"Configuration"),m.forEach(i),g=L(a),G(s.$$.fragment,a),this.h()},h(){document.title="Configuration",p(t,"name","description"),p(t,"content","Configuration")},m(a,h){n(document.head,t),A(a,o,h),A(a,e,h),n(e,_),A(a,g,h),J(s,a,h),l=!0},p:F,i(a){l||(Q(s.$$.fragment,a),l=!0)},o(a){V(s.$$.fragment,a),l=!1},d(a){i(t),a&&i(o),a&&i(e),a&&i(g),W(s,a)}}}class ne extends w{constructor(t){super(),M(this,t,null,ee,z,{})}}export{ne as default};
