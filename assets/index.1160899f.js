import{n as x,r as v,o as m,c as g,z as B,A as O,v as u,a as e,B as M,p as y,e as C,_ as S,C as $,t as d,F as w,y as L,D as T,E as N,w as U,f as D,b as I}from"./entry.201ac653.js";import{_ as R}from"./nuxt-link.e1c45b6e.js";import{f as V,u as j}from"./formatNumber.e74eea1c.js";const z=l=>(y("data-v-dd1698f8"),l=l(),C(),l),q={class:"search-input-container"},P=z(()=>e("span",{class:"search-input-icon material-symbols-outlined"}," search ",-1)),G=x({__name:"SearchFilterInput",emits:["search"],setup(l,{emit:n}){const r=n,t=v(""),a=()=>{r("search",t.value)};return(f,c)=>(m(),g("div",q,[P,B(e("input",{"onUpdate:modelValue":c[0]||(c[0]=s=>M(t)?t.value=s:null),onInput:a,type:"search",placeholder:"Search for a country..."},null,544),[[O,u(t)]])]))}});const H=S(G,[["__scopeId","data-v-dd1698f8"]]),J=l=>(y("data-v-c7ce12dc"),l=l(),C(),l),K=["aria-expanded"],W=J(()=>e("span",{class:"arrow"},null,-1)),X={class:"select-dropdown",role:"listbox",id:"select-dropdown"},Y=["onClick"],Z=["checked","id"],Q=["for"],ee=x({__name:"SelectFilterInput",emits:["region-selected"],setup(l,{emit:n}){const r=n,t=v(!1),a=$({text:"All",value:"All"}),f=$([{text:"All",value:"All"},{text:"Africa",value:"Africa"},{text:"America",value:"Americas"},{text:"Asia",value:"Asia"},{text:"Europe",value:"Europe"},{text:"Oceania",value:"Oceania"}]),c=s=>{a.value=s.value,a.text=s.text,t.value=!1,r("region-selected",a)};return(s,_)=>(m(),g("div",{class:T(["custom-select",{active:u(t)}])},[e("button",{onClick:_[0]||(_[0]=i=>t.value=!u(t)),class:"select-button",role:"combobox","aria-labelledby":"select button","aria-haspopup":"listbox","aria-expanded":u(t),"aria-controls":"select-dropdown"},[e("span",{ref:"selected",class:"selected-value"},d(u(a).value=="All"?"Filter by Region":u(a).text),513),W],8,K),e("ul",X,[(m(!0),g(w,null,L(u(f),i=>(m(),g("li",{onClick:A=>c(i),role:"option"},[e("input",{type:"radio",checked:u(a).value==i.value,id:i.value},null,8,Z),e("label",{for:i.value},d(i.text),9,Q)],8,Y))),256))])],2))}});const ae=S(ee,[["__scopeId","data-v-c7ce12dc"]]),b=l=>(y("data-v-caa9f16b"),l=l(),C(),l),te={class:"country-card"},le=["src"],oe={class:"country-content-container"},ne={class:"country-description-container"},se=b(()=>e("h5",null,"Population: "+d(" "),-1)),ce=b(()=>e("h5",null,"Region: "+d(" "),-1)),ie=b(()=>e("h5",null,"Capital:"+d(" "),-1)),ue=x({__name:"CountryCard",props:{flag:String,name:String,population:Number,region:String,capital:Array},setup(l){const n=l;return(r,t)=>{const a=R;return m(),N(a,{to:{path:"/country",query:{name:n.name}}},{default:U(()=>[e("div",te,[e("img",{src:n.flag},null,8,le),e("div",oe,[e("h3",null,d(n.name),1),e("div",ne,[e("div",null,[se,e("span",null,d(n.population?("formatNumber"in r?r.formatNumber:u(V))(n.population):""),1)]),e("div",null,[ce,e("span",null,d(n.region),1)]),e("div",null,[ie,e("span",null,d(n.capital!==void 0?n.capital[0]:"No capital"),1)])])])])]),_:1},8,["to"])}}});const re=S(ue,[["__scopeId","data-v-caa9f16b"]]),_e={class:"container-main"},ve={class:"filters-container"},de={class:"countries-list-container"},pe=x({__name:"index",setup(l){const n=j(),r=v(),t=v(),a=v(),f=v(""),c=v(!1),s=v(!1),_=v([]);D(()=>{r.value=n.countriesData,t.value=r.value,a.value=t.value});const i=o=>{f.value=o,o&&!s.value?(a.value=t.value.filter(p=>p.name.common.toLowerCase().includes(o.toLowerCase())),c.value=!0,console.log("vyhladavam, select na ALL")):!o&&!s.value?(a.value=t.value,c.value=!1,console.log("NEvyhladavam, select na ALL")):o&&s.value?(a.value=_.value.filter(p=>p.name.common.toLowerCase().includes(o.toLowerCase())),c.value=!0,console.log("vyhladavam, select je CUSTOM")):!o&&s.value&&(a.value=_.value,c.value=!1,console.log("NEvyhladavam, select je CUSTOM"))},A=o=>{o.value==="All"&&!c.value?(a.value=t.value,_.value.splice(0),s.value=!1,console.log("Select na ALL, NEvyhladavam")):o.value!=="All"&&!c.value?(a.value=t.value.filter(p=>p.region==o.value),_.value=a.value,s.value=!0,console.log("Select na CUSTOM, NEvyhladavam")):o.value==="All"&&c.value?(a.value=t.value,_.value.splice(0),s.value=!1,i(f.value),console.log("Select na ALL, vyhladavam")):o.value!=="All"&&c.value&&(a.value=t.value.filter(p=>p.region==o.value),_.value=a.value,s.value=!0,i(f.value),console.log("Select na CUSTOM, vyhladavam"))};return(o,p)=>{const k=H,E=ae,F=re;return m(),g("main",null,[e("div",_e,[e("div",ve,[I(k,{onSearch:i}),I(E,{onRegionSelected:A})]),e("div",de,[(m(!0),g(w,null,L(u(a),h=>(m(),N(F,{key:h.name.common,flag:h.flags.svg,name:h.name.common,population:h.population,region:h.region,capital:h.capital},null,8,["flag","name","population","region","capital"]))),128))])])])}}});const ge=S(pe,[["__scopeId","data-v-2851d06b"]]);export{ge as default};
