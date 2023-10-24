import{_ as T}from"./nuxt-link.c3020267.js";import{_ as q}from"./Skeleton.78cf67ea.js";import{A as P,n as F,r as c,q as G,c as r,a,B as w,C as K,s as l,D as M,E as $,F as m,v as h,x as Y,y as A,z as L,o as n,t as g,b as S,w as V}from"./entry.bd0554d7.js";import{u as k}from"./fetch.6ec313c9.js";const Q=a("p",{class:"category-title"},"looking for something specific?",-1),R={class:"grid grid-cols-2 gap-4 mb-6 md:grid-cols-4"},z=a("label",{class:"search-label",for:"name"},"Name",-1),I=["onKeyup"],O=a("label",{class:"search-label",for:"genre"},"Genre",-1),W=a("option",{disabled:"",value:""},"Please Select",-1),X=["value"],J=a("label",{class:"search-label",for:"year"},"Year",-1),Z=a("option",{disabled:"",value:""},"Please Select",-1),ee=["value"],ae=a("label",{class:"search-label",for:"season"},"Type",-1),se=a("option",{disabled:"",value:""},"Please Select",-1),te=["value"],le={key:0,class:"flex flex-wrap mb-5"},ne={class:"aspect-w-9 aspect-h-13"},oe=["src","alt"],re={class:"line-clamp-2"},ie={key:1},ue=a("p",{class:"category-title"},"Popular This Season",-1),ce={class:"flex flex-wrap mb-5"},de={class:"aspect-w-9 aspect-h-13"},pe=["src","alt"],ve={class:"line-clamp-2"},ye={__name:"index",async setup(_e){let u,f;const{data:v}=([u,f]=P(()=>k("https://api.jikan.moe/v4/genres/anime","$QCHnECHkUX")),u=await u,f(),u),N=F(()=>{if(!v.value||!v.value.data)return null;const o=[];for(let s=0;s<v.value.data.length;s++)o.push({name:v.value.data[s].name,id:v.value.data[s].mal_id});return o.sort((s,p)=>s.name.localeCompare(p.name)),o}),t=c({name:"",genre:"",year:"",type:""}),{data:D}=([u,f]=P(()=>k("https://api.jikan.moe/v4/seasons","$c3DgwjW6b6")),u=await u,f(),u),U=c(["tv","movie","ova","special","ona","music"]),C=c(!1),b=c([]),d=c(0),y=c(1e3),j=async()=>{if(i.value)return;if(C.value=!0,i.value=!0,d.value<y.value)d.value++;else{i.value=!1;return}let o=`https://api.jikan.moe/v4/anime?page=${d.value}&limit=24`,s="";t.value.name&&(s+=`&q=${t.value.name}`),t.value.genre&&(s+=`&genres=${t.value.genre}`),t.value.year&&(s+=`&start_date=${t.value.year}-01-01`),t.value.type&&(s+=`&type=${t.value.type}`),o+=s;const{data:p}=await k(o,"$d2wBiGsoD9");y.value=p.value.pagination.last_visible_page,p.value.data.forEach(x=>{b.value.push(x)}),i.value=!1},_=()=>{b.value=[],d.value=0,j()},i=c(!1),B=c([]),E=async()=>{if(i.value)return;if(i.value=!0,d.value<y.value)d.value++;else{i.value=!1;return}await L();const{data:o}=await k(`https://api.jikan.moe/v4/seasons/now?limit=24&page=${d.value}`,"$cp6GRpfYue");y.value=o.value.pagination.last_visible_page,o.value.data.forEach(s=>{B.value.push(s)}),i.value=!1},H=()=>{const o=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight;o&&(t.value.genre||t.value.year||t.value.name||t.value.type)?j():o&&E()};return G(()=>{window.addEventListener("scroll",H),E()}),(o,s)=>{const p=T,x=q;return n(),r("div",null,[Q,a("div",R,[a("div",null,[z,w(a("input",{class:"search-input","onUpdate:modelValue":s[0]||(s[0]=e=>l(t).name=e),onBlur:_,onKeyup:M(_,["enter"]),placeholder:"Please Enter",id:"name",type:"text"},null,40,I),[[K,l(t).name]])]),a("div",null,[O,w(a("select",{class:"search-input",id:"genre","onUpdate:modelValue":s[1]||(s[1]=e=>l(t).genre=e),onChange:_},[W,(n(!0),r(m,null,h(l(N),e=>(n(),r("option",{key:e.id,value:e.id},g(e.name),9,X))),128))],544),[[$,l(t).genre]])]),a("div",null,[J,w(a("select",{class:"search-input",id:"year","onUpdate:modelValue":s[2]||(s[2]=e=>l(t).year=e),onChange:_},[Z,(n(!0),r(m,null,h(l(D).data,e=>(n(),r("option",{key:e.year,value:e.year},g(e.year),9,ee))),128))],544),[[$,l(t).year]])]),a("div",null,[ae,w(a("select",{class:"search-input",id:"season","onUpdate:modelValue":s[3]||(s[3]=e=>l(t).type=e),onChange:_},[se,(n(!0),r(m,null,h(l(U),e=>(n(),r("option",{key:e,value:e},g(e),9,te))),128))],544),[[$,l(t).type]])])]),l(C)?(n(),r("div",le,[(n(!0),r(m,null,h(l(b),e=>(n(),r("div",{key:e.mal_id,class:"shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"},[a("div",ne,[S(p,{to:`/search/${e.mal_id}`},{default:V(()=>[a("img",{class:"object-cover w-full h-full rounded-md",src:e.images.jpg.image_url,alt:e.title},null,8,oe)]),_:2},1032,["to"])]),a("p",re,g(e.title),1)]))),128))])):(n(),r("div",ie,[ue,a("div",ce,[(n(!0),r(m,null,h(l(B),e=>(n(),r("div",{key:e.mal_id,class:"shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"},[a("div",de,[S(p,{to:`/search/${e.mal_id}`},{default:V(()=>[a("img",{class:"object-cover w-full h-full rounded-md",src:e.images.jpg.image_url,alt:e.title},null,8,pe)]),_:2},1032,["to"])]),a("p",ve,g(e.title),1)]))),128))])])),l(i)?(n(),Y(x,{key:2})):A("",!0)])}}};export{ye as default};
