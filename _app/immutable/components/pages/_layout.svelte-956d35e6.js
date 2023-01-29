import{S as X,i as Y,s as ee,k as m,a as k,C as S,l as g,m as p,h as u,c as q,D as x,E as J,n as t,b as T,F as a,B as K,G as te,H as se,q as R,r as V,I as ae,w as re,x as le,y as ne,J as ce,K as oe,L as ue,f as P,t as j,z as ie}from"../../chunks/index-5f6fc08c.js";import{p as he}from"../../chunks/stores-f612656b.js";const ve=""+new URL("../../assets/svelte-logo-87df40b8.svg",import.meta.url).href,fe=""+new URL("../../assets/github-1ea8d62e.svg",import.meta.url).href;function Q(v,e,s){const c=v.slice();return c[2]=e[s],c}function W(v){let e,s,c=v[2].name+"",n,E,$;return{c(){e=m("li"),s=m("a"),n=R(c),E=k(),this.h()},l(r){e=g(r,"LI",{"aria-current":!0,class:!0});var i=p(e);s=g(i,"A",{href:!0,class:!0});var _=p(s);n=V(_,c),_.forEach(u),E=q(i),i.forEach(u),this.h()},h(){t(s,"href",v[2].path),t(s,"class","svelte-1u9z1tp"),t(e,"aria-current",$=v[0].url.pathname==="{p.path}"?"page":void 0),t(e,"class","svelte-1u9z1tp")},m(r,i){T(r,e,i),a(e,s),a(s,n),a(e,E)},p(r,i){i&1&&$!==($=r[0].url.pathname==="{p.path}"?"page":void 0)&&t(e,"aria-current",$)},d(r){r&&u(e)}}}function pe(v){let e,s,c,n,E,$,r,i,_,A,y,H,o,l,b,I,L,z,G,B=v[1],d=[];for(let f=0;f<B.length;f+=1)d[f]=W(Q(v,B,f));return{c(){e=m("header"),s=m("div"),c=m("a"),n=m("img"),$=k(),r=m("nav"),i=S("svg"),_=S("path"),A=k(),y=m("ul");for(let f=0;f<d.length;f+=1)d[f].c();H=k(),o=S("svg"),l=S("path"),b=k(),I=m("div"),L=m("a"),z=m("img"),this.h()},l(f){e=g(f,"HEADER",{class:!0});var w=p(e);s=g(w,"DIV",{class:!0});var h=p(s);c=g(h,"A",{href:!0,class:!0});var M=p(c);n=g(M,"IMG",{src:!0,alt:!0,class:!0}),M.forEach(u),h.forEach(u),$=q(w),r=g(w,"NAV",{class:!0});var D=p(r);i=x(D,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var U=p(i);_=x(U,"path",{d:!0,class:!0}),p(_).forEach(u),U.forEach(u),A=q(D),y=g(D,"UL",{class:!0});var F=p(y);for(let C=0;C<d.length;C+=1)d[C].l(F);F.forEach(u),H=q(D),o=x(D,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var N=p(o);l=x(N,"path",{d:!0,class:!0}),p(l).forEach(u),N.forEach(u),D.forEach(u),b=q(w),I=g(w,"DIV",{class:!0});var O=p(I);L=g(O,"A",{href:!0,class:!0});var Z=p(L);z=g(Z,"IMG",{src:!0,alt:!0,class:!0}),Z.forEach(u),O.forEach(u),w.forEach(u),this.h()},h(){J(n.src,E=ve)||t(n,"src",E),t(n,"alt","Home"),t(n,"class","svelte-1u9z1tp"),t(c,"href","/"),t(c,"class","svelte-1u9z1tp"),t(s,"class","corner svelte-1u9z1tp"),t(_,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),t(_,"class","svelte-1u9z1tp"),t(i,"viewBox","0 0 2 3"),t(i,"aria-hidden","true"),t(i,"class","svelte-1u9z1tp"),t(y,"class","svelte-1u9z1tp"),t(l,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),t(l,"class","svelte-1u9z1tp"),t(o,"viewBox","0 0 2 3"),t(o,"aria-hidden","true"),t(o,"class","svelte-1u9z1tp"),t(r,"class","svelte-1u9z1tp"),J(z.src,G=fe)||t(z,"src",G),t(z,"alt","GitHub"),t(z,"class","svelte-1u9z1tp"),t(L,"href","https://github.com/SaschaLucius/interactive-scrum-guide/"),t(L,"class","svelte-1u9z1tp"),t(I,"class","corner svelte-1u9z1tp"),t(e,"class","svelte-1u9z1tp")},m(f,w){T(f,e,w),a(e,s),a(s,c),a(c,n),a(e,$),a(e,r),a(r,i),a(i,_),a(r,A),a(r,y);for(let h=0;h<d.length;h+=1)d[h].m(y,null);a(r,H),a(r,o),a(o,l),a(e,b),a(e,I),a(I,L),a(L,z)},p(f,[w]){if(w&3){B=f[1];let h;for(h=0;h<B.length;h+=1){const M=Q(f,B,h);d[h]?d[h].p(M,w):(d[h]=W(M),d[h].c(),d[h].m(y,null))}for(;h<d.length;h+=1)d[h].d(1);d.length=B.length}},i:K,o:K,d(f){f&&u(e),te(d,f)}}}function _e(v,e,s){let c;se(v,he,E=>s(0,c=E));var n=[{path:"/interactive",name:"Interactive Scrum Guide"},{path:"/about",name:"About"}];return[c,n]}class de extends X{constructor(e){super(),Y(this,e,_e,pe,ee,{})}}function me(v){let e,s,c,n,E,$,r,i,_,A,y;s=new de({});const H=v[1].default,o=ae(H,v,v[0],null);return{c(){e=m("div"),re(s.$$.fragment),c=k(),n=m("main"),o&&o.c(),E=k(),$=m("footer"),r=m("p"),i=R("Thank you for trying out my page, issues and improvement request can be submitted "),_=m("a"),A=R("here"),this.h()},l(l){e=g(l,"DIV",{class:!0});var b=p(e);le(s.$$.fragment,b),c=q(b),n=g(b,"MAIN",{class:!0});var I=p(n);o&&o.l(I),I.forEach(u),E=q(b),$=g(b,"FOOTER",{class:!0});var L=p($);r=g(L,"P",{});var z=p(r);i=V(z,"Thank you for trying out my page, issues and improvement request can be submitted "),_=g(z,"A",{href:!0,class:!0});var G=p(_);A=V(G,"here"),G.forEach(u),z.forEach(u),L.forEach(u),b.forEach(u),this.h()},h(){t(n,"class","svelte-8o1gnw"),t(_,"href","https://github.com/SaschaLucius/interactive-scrum-guide/issues"),t(_,"class","svelte-8o1gnw"),t($,"class","svelte-8o1gnw"),t(e,"class","app svelte-8o1gnw")},m(l,b){T(l,e,b),ne(s,e,null),a(e,c),a(e,n),o&&o.m(n,null),a(e,E),a(e,$),a($,r),a(r,i),a(r,_),a(_,A),y=!0},p(l,[b]){o&&o.p&&(!y||b&1)&&ce(o,H,l,l[0],y?ue(H,l[0],b,null):oe(l[0]),null)},i(l){y||(P(s.$$.fragment,l),P(o,l),y=!0)},o(l){j(s.$$.fragment,l),j(o,l),y=!1},d(l){l&&u(e),ie(s),o&&o.d(l)}}}function ge(v,e,s){let{$$slots:c={},$$scope:n}=e;return v.$$set=E=>{"$$scope"in E&&s(0,n=E.$$scope)},[n,c]}class be extends X{constructor(e){super(),Y(this,e,ge,me,ee,{})}}export{be as default};