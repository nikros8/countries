import{_ as g}from"./nuxt-link.22886770.js";import{n as m,r as v,H as k,c as _,_ as d,I as x,o as i,E as $,w as p,J as h,K as b,s as C,b as l,a as s,t as S,v as y,p as M,e as N,d as B}from"./entry.683558e5.js";const I=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(o,{slots:e,attrs:t}){const a=v(!1);return k(()=>{a.value=!0}),n=>{var f;if(a.value)return(f=e.default)==null?void 0:f.call(e);const c=e.fallback||e.placeholder;if(c)return c();const r=n.fallback||n.placeholder||"",u=n.fallbackTag||n.placeholderTag||"span";return _(u,t,r)}}}),T={name:x,props:{placeholder:String,tag:{type:String,default:"span"}}};function w(o,e,t,a,n,c){const r=I;return i(),$(r,{placeholder:t.placeholder,"placeholder-tag":t.tag},{default:p(()=>[h(o.$slots,"default")]),_:3},8,["placeholder","placeholder-tag"])}const L=d(T,[["render",w]]),P=()=>b("color-mode").value,V=o=>(M("data-v-1f6e62d5"),o=o(),N(),o),D=V(()=>s("span",{class:"color-mode-icon material-symbols-outlined"}," brightness_2 ",-1)),E={class:"color-mode-text"},O=m({__name:"ColorModePicker",setup(o){const e=P(),t=C(()=>e.value=="dark"?"Light":e.value=="light"?"Dark":""),a=()=>{e.value=="dark"?e.preference="light":e.preference="dark"};return(n,c)=>{const r=L;return i(),_("div",null,[l(r,{tag:"span"},{default:p(()=>[s("a",{onClick:c[0]||(c[0]=u=>a()),class:"color-mode-container"},[D,s("span",E,S(y(t))+" Mode",1)])]),_:1})])}}});const A=d(O,[["__scopeId","data-v-1f6e62d5"]]);const H={},J={class:"navigation-bar-wrapper"},K={class:"navigation-bar container-main"};function W(o,e){const t=g,a=A;return i(),_("div",J,[s("div",K,[l(t,{to:"/",class:"home-link"},{default:p(()=>[B("Where in the world?")]),_:1}),l(a)])])}const j=d(H,[["render",W],["__scopeId","data-v-189a572d"]]),q={};function z(o,e){const t=j;return i(),_("div",null,[l(t),h(o.$slots,"default")])}const Q=d(q,[["render",z]]);export{Q as default};