import{_ as k}from"./nuxt-link.c3020267.js";import{_ as x}from"./Skeleton.78cf67ea.js";import{u as b,n as y,r as l,q as B,c,a as o,t as v,s as r,F as $,v as j,x as E,y as F,z as L,o as i,b as V,w as D}from"./entry.bd0554d7.js";import{u}from"./fetch.6ec313c9.js";const N={class:"category-title"},P={v:"",class:"flex flex-wrap mb-5"},S={class:"aspect-w-9 aspect-h-13"},q=["src","alt"],C={class:"line-clamp-2"},K={__name:"[category]",setup(H){const{category:n}=b().params,g=y(()=>{if(n==="now")return"popular this season";if(n==="upcoming")return"upcoming";if(n==="popular")return"all time popular"}),p=l([]),a=l(0),m=l(1e3),t=l(!1),_=async()=>{if(t.value)return;if(t.value=!0,a.value<m.value)a.value++;else{t.value=!1;return}await L();let e;switch(n){case"now":e=await u(`https://api.jikan.moe/v4/seasons/now?page=${a.value}&limit=24`,"$ShhsArDPOn");break;case"upcoming":e=await u(`https://api.jikan.moe/v4/seasons/upcoming?page=${a.value}&limit=24`,"$9FKl1rsqJ0");break;case"popular":e=await u(`https://api.jikan.moe/v4/top/anime?page=${a.value}&limit=24`,"$jDusWL8BMJ");break}m.value=e.data.value.pagination.last_visible_page,e.data.value.data.forEach(d=>{p.value.push(d)}),t.value=!1},h=()=>{window.innerHeight+window.scrollY>=document.documentElement.scrollHeight&&_()};return B(()=>{window.addEventListener("scroll",h),_()}),(e,d)=>{const f=k,w=x;return i(),c("div",null,[o("p",N,v(r(g)),1),o("div",P,[(i(!0),c($,null,j(r(p),s=>(i(),c("div",{key:s.mal_id,class:"shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"},[o("div",S,[V(f,{to:`/search/${s.mal_id}`},{default:D(()=>[o("img",{class:"object-cover w-full h-full rounded-md",src:s.images.jpg.image_url,alt:s.title},null,8,q)]),_:2},1032,["to"])]),o("p",C,v(s.title),1)]))),128))]),r(t)?(i(),E(w,{key:0})):F("",!0)])}}};export{K as default};
