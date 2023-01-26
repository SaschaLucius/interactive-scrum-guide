import{S as X,i as Y,s as ee,k as g,a as B,C as x,l as E,m as p,h as o,c as D,D as C,E as J,n as t,b as K,F as a,B as P,G as te,H as se,q as R,r as V,I as ae,w as le,x as re,y as ne,J as ce,K as oe,L as ue,f as T,t as j,z as ie}from"../../chunks/index-5f6fc08c.js";import{p as he}from"../../chunks/stores-f612656b.js";const ve=""+new URL("../../assets/svelte-logo-87df40b8.svg",import.meta.url).href,fe=""+new URL("../../assets/github-1ea8d62e.svg",import.meta.url).href;function Q(v,e,s){const n=v.slice();return n[2]=e[s],n}function W(v){let e,s,n=v[2].name+"",r,$,z;return{c(){e=g("li"),s=g("a"),r=R(n),$=B(),this.h()},l(l){e=E(l,"LI",{"aria-current":!0,class:!0});var u=p(e);s=E(u,"A",{href:!0,class:!0});var d=p(s);r=V(d,n),d.forEach(o),$=D(u),u.forEach(o),this.h()},h(){t(s,"href",v[2].path),t(s,"class","svelte-1u9z1tp"),t(e,"aria-current",z=v[0].url.pathname==="{p.path}"?"page":void 0),t(e,"class","svelte-1u9z1tp")},m(l,u){K(l,e,u),a(e,s),a(s,r),a(e,$)},p(l,u){u&1&&z!==(z=l[0].url.pathname==="{p.path}"?"page":void 0)&&t(e,"aria-current",z)},d(l){l&&o(e)}}}function _e(v){let e,s,n,r,$,z,l,u,d,H,w,L,b,i,c,f,I,A,S,k=v[1],m=[];for(let _=0;_<k.length;_+=1)m[_]=W(Q(v,k,_));return{c(){e=g("header"),s=g("div"),n=g("a"),r=g("img"),z=B(),l=g("nav"),u=x("svg"),d=x("path"),H=B(),w=g("ul");for(let _=0;_<m.length;_+=1)m[_].c();L=B(),b=x("svg"),i=x("path"),c=B(),f=g("div"),I=g("a"),A=g("img"),this.h()},l(_){e=E(_,"HEADER",{class:!0});var y=p(e);s=E(y,"DIV",{class:!0});var h=p(s);n=E(h,"A",{href:!0,class:!0});var M=p(n);r=E(M,"IMG",{src:!0,alt:!0,class:!0}),M.forEach(o),h.forEach(o),z=D(y),l=E(y,"NAV",{class:!0});var G=p(l);u=C(G,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var U=p(u);d=C(U,"path",{d:!0,class:!0}),p(d).forEach(o),U.forEach(o),H=D(G),w=E(G,"UL",{class:!0});var F=p(w);for(let q=0;q<m.length;q+=1)m[q].l(F);F.forEach(o),L=D(G),b=C(G,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var N=p(b);i=C(N,"path",{d:!0,class:!0}),p(i).forEach(o),N.forEach(o),G.forEach(o),c=D(y),f=E(y,"DIV",{class:!0});var O=p(f);I=E(O,"A",{href:!0,class:!0});var Z=p(I);A=E(Z,"IMG",{src:!0,alt:!0,class:!0}),Z.forEach(o),O.forEach(o),y.forEach(o),this.h()},h(){J(r.src,$=ve)||t(r,"src",$),t(r,"alt","Home"),t(r,"class","svelte-1u9z1tp"),t(n,"href","/"),t(n,"class","svelte-1u9z1tp"),t(s,"class","corner svelte-1u9z1tp"),t(d,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),t(d,"class","svelte-1u9z1tp"),t(u,"viewBox","0 0 2 3"),t(u,"aria-hidden","true"),t(u,"class","svelte-1u9z1tp"),t(w,"class","svelte-1u9z1tp"),t(i,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),t(i,"class","svelte-1u9z1tp"),t(b,"viewBox","0 0 2 3"),t(b,"aria-hidden","true"),t(b,"class","svelte-1u9z1tp"),t(l,"class","svelte-1u9z1tp"),J(A.src,S=fe)||t(A,"src",S),t(A,"alt","GitHub"),t(A,"class","svelte-1u9z1tp"),t(I,"href","https://github.com/SaschaLucius/sveltekit-demo"),t(I,"class","svelte-1u9z1tp"),t(f,"class","corner svelte-1u9z1tp"),t(e,"class","svelte-1u9z1tp")},m(_,y){K(_,e,y),a(e,s),a(s,n),a(n,r),a(e,z),a(e,l),a(l,u),a(u,d),a(l,H),a(l,w);for(let h=0;h<m.length;h+=1)m[h].m(w,null);a(l,L),a(l,b),a(b,i),a(e,c),a(e,f),a(f,I),a(I,A)},p(_,[y]){if(y&3){k=_[1];let h;for(h=0;h<k.length;h+=1){const M=Q(_,k,h);m[h]?m[h].p(M,y):(m[h]=W(M),m[h].c(),m[h].m(w,null))}for(;h<m.length;h+=1)m[h].d(1);m.length=k.length}},i:P,o:P,d(_){_&&o(e),te(m,_)}}}function pe(v,e,s){let n;se(v,he,$=>s(0,n=$));var r=[{path:"/scrum",name:"Interactive Scrum Guide"},{path:"/about",name:"About me"}];return[n,r]}class de extends X{constructor(e){super(),Y(this,e,pe,_e,ee,{})}}function me(v){let e,s,n,r,$,z,l,u,d,H,w,L;s=new de({});const b=v[1].default,i=ae(b,v,v[0],null);return{c(){e=g("div"),le(s.$$.fragment),n=B(),r=g("main"),i&&i.c(),$=B(),z=g("footer"),l=g("p"),u=R("visit "),d=g("a"),H=R("kit.svelte.dev"),w=R(" to learn SvelteKit"),this.h()},l(c){e=E(c,"DIV",{class:!0});var f=p(e);re(s.$$.fragment,f),n=D(f),r=E(f,"MAIN",{class:!0});var I=p(r);i&&i.l(I),I.forEach(o),$=D(f),z=E(f,"FOOTER",{class:!0});var A=p(z);l=E(A,"P",{});var S=p(l);u=V(S,"visit "),d=E(S,"A",{href:!0,class:!0});var k=p(d);H=V(k,"kit.svelte.dev"),k.forEach(o),w=V(S," to learn SvelteKit"),S.forEach(o),A.forEach(o),f.forEach(o),this.h()},h(){t(r,"class","svelte-8o1gnw"),t(d,"href","https://kit.svelte.dev"),t(d,"class","svelte-8o1gnw"),t(z,"class","svelte-8o1gnw"),t(e,"class","app svelte-8o1gnw")},m(c,f){K(c,e,f),ne(s,e,null),a(e,n),a(e,r),i&&i.m(r,null),a(e,$),a(e,z),a(z,l),a(l,u),a(l,d),a(d,H),a(l,w),L=!0},p(c,[f]){i&&i.p&&(!L||f&1)&&ce(i,b,c,c[0],L?ue(b,c[0],f,null):oe(c[0]),null)},i(c){L||(T(s.$$.fragment,c),T(i,c),L=!0)},o(c){j(s.$$.fragment,c),j(i,c),L=!1},d(c){c&&o(e),ie(s),i&&i.d(c)}}}function ge(v,e,s){let{$$slots:n={},$$scope:r}=e;return v.$$set=$=>{"$$scope"in $&&s(0,r=$.$$scope)},[r,n]}class ze extends X{constructor(e){super(),Y(this,e,ge,me,ee,{})}}export{ze as default};
