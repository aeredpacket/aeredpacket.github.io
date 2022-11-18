import{T as R}from"./TokenIcon.fd9fc353.js";import{m as j,j as q,k as E,l as U,n as m,p as y,q as W,r as p,o as r,b as f,g,a as o,t as d,F as T,G as I,u as n,w as C,K as z,c as A,H as D,x as G,f as H,B as w,d as K,T as P,s as L}from"./index.2009d65b.js";import{_ as J}from"./plugin-vueexport-helper.2444895f.js";const Q={class:"content"},X={class:"p-16"},Y={class:"network"},Z={class:"network-list"},ee=["onClick"],te={class:"item-left"},se={class:"left-content"},oe={class:"token-name"},ne={class:"token-address"},ae={class:"item-right"},le={class:"item-right-left"},ce={class:"qty"},ie={class:"amount"},re={class:"item-right-right"},de={__name:"SelectToken",setup(ue){const x=j("global"),$=q(),l=E();U();const B=m([]),v=m([]),c=m(""),S=y(()=>c.value?c.value.startsWith("0x")?v.value.filter(e=>e.address.toLowerCase()==c.toLowerCase()):v.value.filter(e=>e.symbol.toLowerCase().indexOf(c.value.toLowerCase())>-1):v.value),h={text:"BSC",value:"bsc",isAllow:!0},u=m({text:h.text,value:h.value,isAllow:h.isAllow}),F=y(()=>{let e=[h];for(let a of B.value){let i=x.cfg.allowChainList.some(k=>k.chain==a.chain),_={text:a.chain.toUpperCase(),value:a.chain,isAllow:i};e.push(_)}return e});async function N(e){!e.isAllow||u.value.value!=e.value&&(u.value=e,b())}async function b(){let e=[];const a=P.loading({message:"Loading...",forbidClick:!0,duration:0});u.value.value=="all"?e=await L.debank.getAllTokenList(l.walletAddress):e=await L.debank.getTokenList(l.walletAddress,u.value.value);let i=e.data.filter(s=>new RegExp("^0x.*$","gi").test(s.id)).map(s=>({address:s.id.toLowerCase(),tokenId:`${s.id}-${s.chain}`.toLowerCase(),chain:s.chain.toLowerCase(),symbol:s.symbol,decimals:s.decimals,icon:s.logo_url,amount:s.amount,price:s.price})),_=i.map(s=>s.tokenId),k=await L.redPacket.tokenlistcheck(_);a.clear(),v.value=i.filter(s=>k.data[s.tokenId].riskScore<60)}function V(e){l.token=e,$.push("/")}async function M(){l.isConnectWallet&&await b()}return W(()=>{console.log("onMounted"),M()}),(e,a)=>{const i=p("van-search"),_=p("van-icon"),k=p("van-cell"),s=p("van-list");return r(),f("div",null,[g(i,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=t=>c.value=t),shape:"round","show-action":"",placeholder:e.$t("searchTokenContractOrName"),"action-text":e.$t("cancel")},null,8,["modelValue","placeholder","action-text"]),o("div",Q,[o("div",X,d(e.$t("myAssets")),1),o("div",Y,[o("ul",Z,[(r(!0),f(T,null,I(n(F),t=>(r(),f("li",{class:z(u.value.value==t.value?"network-selected":""),onClick:O=>N(t)},d(t.text),11,ee))),256))])]),o("div",null,[g(s,{"finished-text":e.$t("noMore"),class:"token-list"},{default:C(()=>[(r(!0),f(T,null,I(n(S),t=>(r(),A(k,{class:"item",key:t,onClick:O=>V(t)},{title:C(()=>[o("div",te,[g(R,{class:"token-icon",tokenIcon:n(D)(t.chain,t.address),chainIcon:n(G)(t.chain)},null,8,["tokenIcon","chainIcon"]),o("div",se,[o("div",oe,d(t.symbol),1),o("div",ne,d(n(H)(t.address)),1)])])]),value:C(()=>[o("div",ae,[o("div",le,[o("div",ce,d(n(w)(t.amount).toString().indexOf(".")==-1?n(w)(t.amount):n(w)(t.amount).toFixed(6)),1),o("div",ie,"$"+d(n(w)(t.amount).multipliedBy(t.price).toFixed(2)),1)]),o("div",re,[n(l).token&&n(l).token.address==t.address?(r(),A(_,{key:0,name:"success",color:"#3F80F7"})):K("",!0)])])]),_:2},1032,["onClick"]))),128))]),_:1},8,["finished-text"])])])])}}},he=J(de,[["__scopeId","data-v-bc692ddb"]]);export{he as default};
