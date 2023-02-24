import{T as M}from"./TokenIcon.514e012b.js";import{_ as j,m as q,j as E,k as R,l as U,n as _,q as W,s as z,r as h,o as i,b as k,g as p,a as t,t as r,F as y,J as L,u as s,w as C,O as D,c as b,C as J,f as K,B as v,d as G,v as I,T as H,K as P}from"./index.c6722388.js";const Q={class:"content"},X={class:"p-16"},Y={class:"network"},Z={class:"network-list"},x=["onClick"],ee={class:"item-left"},ne={class:"left-content"},oe={class:"token-name"},te={class:"token-address"},se={class:"item-right"},ae={class:"item-right-left"},ce={class:"qty"},le={class:"amount"},ie={class:"item-right-right"},re={__name:"SelectToken",setup(de){const T=q("global"),g=E(),a=R();U(),_([]);const d=_([]),c=_(""),$=W(()=>c.value?c.value.startsWith("0x")?d.value.filter(n=>n.address.toLowerCase()==c.value.toLowerCase()):d.value.filter(n=>n.symbol.toLowerCase().indexOf(c.value.toLowerCase())>-1):d.value),u=T.cfg.allowChainList,l=_(u.find(n=>n.chainId==a.chainId)?u.find(n=>n.chainId==a.chainId):u[0]);async function S(n){l.value.chain!=n.chain&&(l.value=n,w(),I.wallet.switchNetwork(l.value.chainId))}async function w(){const n=H.loading({message:"Loading...",forbidClick:!0,duration:0});let f=(await I.debank.getTokenList(a.walletAddress,l.value.chain)).data.data.filter(e=>new RegExp("^0x.*$","gi").test(e.token)&&e.value>0&&e.risk_score<60&&e.risk_level>=0&&e.flag!=="blacklist"&&e.symbol!==""&&e.flag!=="lp"&&e.token!="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee").map(e=>({address:e.token.toLowerCase(),tokenId:`${e.token}-${e.chain}`.toLowerCase(),chain:e.chain.toLowerCase(),symbol:e.symbol,decimals:e.decimals,icon:P(e.chain.toLowerCase(),e.token.toLowerCase()),amount:e.value,price:e.current_price_usd,chainCoinSymbol:l.value.chainCoinSymbol}));d.value=f,n.clear()}function B(n){a.token=n,g.push("/")}function F(){g.push("/")}async function N(){a.isConnectWallet&&await w()}return z(()=>{console.log("onMounted"),N()}),(n,m)=>{const f=h("van-search"),e=h("van-icon"),V=h("van-cell"),O=h("van-list");return i(),k("div",null,[p(f,{modelValue:c.value,"onUpdate:modelValue":m[0]||(m[0]=o=>c.value=o),shape:"round","show-action":"",placeholder:n.$t("searchTokenContractOrName"),"action-text":n.$t("cancel"),onCancel:F},null,8,["modelValue","placeholder","action-text"]),t("div",Q,[t("div",X,r(n.$t("myAssets")),1),t("div",Y,[t("ul",Z,[(i(!0),k(y,null,L(s(u),o=>(i(),k("li",{class:D(l.value.chain==o.chain?"network-selected":""),onClick:A=>S(o)},r(o.chain.toUpperCase()),11,x))),256))])]),t("div",null,[p(O,{"finished-text":n.$t("noMore"),class:"token-list"},{default:C(()=>[(i(!0),k(y,null,L(s($),o=>(i(),b(V,{class:"item",key:o,onClick:A=>B(o)},{title:C(()=>[t("div",ee,[p(M,{class:"token-icon",tokenIcon:o.icon,chainIcon:s(J)(o.chain)},null,8,["tokenIcon","chainIcon"]),t("div",ne,[t("div",oe,r(o.symbol),1),t("div",te,r(s(K)(o.address)),1)])])]),value:C(()=>[t("div",se,[t("div",ae,[t("div",ce,r(s(v)(o.amount).toString().indexOf(".")==-1?s(v)(o.amount):s(v)(o.amount).toFixed(6)),1),t("div",le,"$"+r(s(v)(o.amount).multipliedBy(o.price).toFixed(2)),1)]),t("div",ie,[s(a).token&&s(a).token.address==o.address?(i(),b(e,{key:0,name:"success",color:"#3F80F7"})):G("",!0)])])]),_:2},1032,["onClick"]))),128))]),_:1},8,["finished-text"])])])])}}},he=j(re,[["__scopeId","data-v-18986318"]]);export{he as default};
