function E(){}function Q(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(B)}function P(t){return typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ht(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function U(t){return Object.keys(t).length===0}function V(t,...n){if(t==null)return E;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t,n,e){t.$$.on_destroy.push(V(n,e))}function pt(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?Q(e.ctx.slice(),t[1](i(n))):e.ctx}function gt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(n.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=n.dirty[l]|r[l];return o}return n.dirty|r}return n.dirty}function yt(t,n,e,i,r,o){if(r){const s=O(n,e,i,o);t.p(s,r)}}function xt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function $t(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function bt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let N=!1;function X(){N=!0}function Y(){N=!1}function Z(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:Z(1,r,y=>n[e[y]].claim_order,u))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const o=[],s=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(o.push(n[c-1]);l>=c;l--)s.push(n[l]);l--}for(;l>=0;l--)s.push(n[l]);o.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<o.length&&s[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(s[c],f)}}function nt(t,n){if(N){for(tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function et(t,n,e){t.insertBefore(n,e||null)}function it(t,n,e){N&&!e?nt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function R(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function Et(){return C(" ")}function wt(){return C("")}function Nt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Tt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function rt(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,r=!1){z(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function I(t,n,e,i){return F(t,r=>r.nodeName===n,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];e[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(n))}function At(t,n,e){return I(t,n,e,G)}function St(t,n,e){return I(t,n,e,R)}function st(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>C(n),!0)}function kt(t){return st(t," ")}function L(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Ct(t,n){const e=L(t,"HTML_TAG_START",0),i=L(t,"HTML_TAG_END",e);if(e===i)return new D(void 0,n);z(t);const r=t.splice(e,i-e+1);w(r[0]),w(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new D(o,n)}function jt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Ht(t,n){t.value=n??""}function Mt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Lt(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function Dt(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function qt(t,n,e){t.classList[e?"add":"remove"](n)}function ct(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function Bt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,e.push(r)):o===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}class ot{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=R(e.nodeName):this.e=G(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class D extends ot{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)it(this.t,this.n[e],n)}}function Pt(t,n){return new t(n)}let m;function h(t){m=t}function g(){if(!m)throw new Error("Function called outside component initialization");return m}function Ot(t){g().$$.on_mount.push(t)}function Gt(t){g().$$.after_update.push(t)}function Rt(){const t=g();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=ct(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function zt(t,n){return g().$$.context.set(t,n),n}function Ft(t){return g().$$.context.get(t)}function It(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],q=[],b=[],A=[],W=Promise.resolve();let S=!1;function J(){S||(S=!0,W.then(K))}function Wt(){return J(),W}function k(t){b.push(t)}function Jt(t){A.push(t)}const T=new Set;let $=0;function K(){const t=m;do{for(;$<d.length;){const n=d[$];$++,h(n),lt(n.$$)}for(h(null),d.length=0,$=0;q.length;)q.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];T.has(e)||(T.add(e),e())}b.length=0}while(d.length);for(;A.length;)A.pop()();S=!1,T.clear(),h(t)}function lt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const v=new Set;let _;function Kt(){_={r:0,c:[],p:_}}function Qt(){_.r||p(_.c),_=_.p}function ut(t,n){t&&t.i&&(v.delete(t),t.i(n))}function Ut(t,n,e,i){if(t&&t.o){if(v.has(t))return;v.add(t),_.c.push(()=>{v.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Vt(t,n){const e={},i={},r={$$scope:1};let o=t.length;for(;o--;){const s=t[o],l=n[o];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(e[c]=l[c],r[c]=1);t[o]=l}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function Xt(t){return typeof t=="object"&&t!==null?t:{}}function Yt(t,n,e,i){const r=t.$$.props[n];r!==void 0&&(t.$$.bound[r]=e,i===void 0&&e(t.$$.ctx[r]))}function Zt(t){t&&t.c()}function tn(t,n){t&&t.l(n)}function at(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||k(()=>{const s=t.$$.on_mount.map(B).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...s):p(s),t.$$.on_mount=[]}),o.forEach(k)}function ft(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(d.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function nn(t,n,e,i,r,o,s,l=[-1]){const c=m;h(t);const u=t.$$={fragment:null,ctx:[],props:o,update:E,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,y,...j)=>{const H=j.length?j[0]:y;return u.ctx&&r(u.ctx[a],u.ctx[a]=H)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](H),f&&_t(t,a)),y}):[],u.update(),f=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){X();const a=rt(n.target);u.fragment&&u.fragment.l(a),a.forEach(w)}else u.fragment&&u.fragment.c();n.intro&&ut(t.$$.fragment),at(t,n.target,n.anchor,n.customElement),Y(),K()}h(c)}class en{$destroy(){ft(this,1),this.$destroy=E}$on(n,e){if(!P(e))return E;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!U(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Xt as $,Wt as A,E as B,R as C,St as D,ht as E,nt as F,vt as G,mt as H,pt as I,yt as J,xt as K,gt as L,Bt as M,k as N,Lt as O,Nt as P,p as Q,It as R,en as S,Dt as T,qt as U,Ht as V,q as W,bt as X,Q as Y,$t as Z,Vt as _,Et as a,Ft as a0,D as a1,Ct as a2,Rt as a3,zt as a4,Yt as a5,Jt as a6,it as b,kt as c,Qt as d,wt as e,ut as f,Kt as g,w as h,nn as i,Gt as j,G as k,At as l,rt as m,Tt as n,Ot as o,Mt as p,C as q,st as r,dt as s,Ut as t,jt as u,Pt as v,Zt as w,tn as x,at as y,ft as z};
