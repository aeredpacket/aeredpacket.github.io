import{T as R}from"./TokenIcon.e2d2d7c6.js";import{_ as j,m as q,j as E,k as U,l as W,n as m,q as T,s as z,r as f,o as r,b as p,g as C,a as o,t as d,F as b,K as I,u as n,w as g,O as D,c as A,C as K,f as P,B as w,d as G,T as H,v as L,L as J}from"./index.743596a2.js";const Q={class:"content"},X={class:"p-16"},Y={class:"network"},Z={class:"network-list"},ee=["onClick"],te={class:"item-left"},se={class:"left-content"},oe={class:"token-name"},ne={class:"token-address"},ae={class:"item-right"},le={class:"item-right-left"},ce={class:"qty"},ie={class:"amount"},re={class:"item-right-right"},de={__name:"SelectToken",setup(ue){const $=q("global"),x=E(),l=U();W();const B=m([]),k=m([]),c=m(""),S=T(()=>c.value?c.value.startsWith("0x")?k.value.filter(e=>e.address.toLowerCase()==c.value.toLowerCase()):k.value.filter(e=>e.symbol.toLowerCase().indexOf(c.value.toLowerCase())>-1):k.value),h={text:"BSC",value:"bsc",isAllow:!0},u=m({text:h.text,value:h.value,isAllow:h.isAllow}),F=T(()=>{let e=[h];for(let a of B.value){let i=$.cfg.allowChainList.some(v=>v.chain==a.chain),_={text:a.chain.toUpperCase(),value:a.chain,isAllow:i};e.push(_)}return e});async function N(e){!e.isAllow||u.value.value!=e.value&&(u.value=e,y())}async function y(){let e=[];const a=H.loading({message:"Loading...",forbidClick:!0,duration:0});u.value.value=="all"?e=await L.debank.getAllTokenList(l.walletAddress):e=await L.debank.getTokenList(l.walletAddress,u.value.value);let i=e.data.filter(t=>new RegExp("^0x.*$","gi").test(t.id)).map(t=>({address:t.id.toLowerCase(),tokenId:`${t.id}-${t.chain}`.toLowerCase(),chain:t.chain.toLowerCase(),symbol:t.symbol,decimals:t.decimals,icon:J(t.chain.toLowerCase(),t.id.toLowerCase()),amount:t.amount,price:t.price})),_=i.map(t=>t.tokenId),v=await L.redPacket.tokenlistcheck(_);a.clear(),k.value=i.filter(t=>v.data[t.tokenId].riskScore<60)}function V(e){l.token=e,x.push("/")}async function O(){l.isConnectWallet&&await y()}return z(()=>{console.log("onMounted"),O()}),(e,a)=>{const i=f("van-search"),_=f("van-icon"),v=f("van-cell"),t=f("van-list");return r(),p("div",null,[C(i,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=s=>c.value=s),shape:"round","show-action":"",placeholder:e.$t("searchTokenContractOrName"),"action-text":e.$t("cancel")},null,8,["modelValue","placeholder","action-text"]),o("div",Q,[o("div",X,d(e.$t("myAssets")),1),o("div",Y,[o("ul",Z,[(r(!0),p(b,null,I(n(F),s=>(r(),p("li",{class:D(u.value.value==s.value?"network-selected":""),onClick:M=>N(s)},d(s.text),11,ee))),256))])]),o("div",null,[C(t,{"finished-text":e.$t("noMore"),class:"token-list"},{default:g(()=>[(r(!0),p(b,null,I(n(S),s=>(r(),A(v,{class:"item",key:s,onClick:M=>V(s)},{title:g(()=>[o("div",te,[C(R,{class:"token-icon",tokenIcon:s.icon,chainIcon:n(K)(s.chain)},null,8,["tokenIcon","chainIcon"]),o("div",se,[o("div",oe,d(s.symbol),1),o("div",ne,d(n(P)(s.address)),1)])])]),value:g(()=>[o("div",ae,[o("div",le,[o("div",ce,d(n(w)(s.amount).toString().indexOf(".")==-1?n(w)(s.amount):n(w)(s.amount).toFixed(6)),1),o("div",ie,"$"+d(n(w)(s.amount).multipliedBy(s.price).toFixed(2)),1)]),o("div",re,[n(l).token&&n(l).token.address==s.address?(r(),A(_,{key:0,name:"success",color:"#3F80F7"})):G("",!0)])])]),_:2},1032,["onClick"]))),128))]),_:1},8,["finished-text"])])])])}}},ke=j(de,[["__scopeId","data-v-6830d932"]]);export{ke as default};
