import{_}from"./TokenIcon.vuevuetypestyleindex0scoped7bbb7138lang.b952a208.js";import{T as k}from"./TokenIcon.80d11dae.js";import{k as Y,l as D,m as T,r as u,o as n,b as a,a as t,g as i,u as s,t as o,c as d,e as r,d as l,w as m,A as f,f as g,F as H,x as $,h as j,p as B,j as M}from"./index.4485fd99.js";import{u as N}from"./redPacketStore.c5868f1b.js";import{_ as R}from"./plugin-vueexport-helper.2444895f.js";const y=v=>(B("data-v-d87968e7"),v=v(),M(),v),V={class:"body"},P={class:"top"},F={class:"info"},E=y(()=>t("div",{class:"empty"},null,-1)),U={class:"background"},q={class:"coin-logo"},z={class:"coin"},G={class:"from"},J=y(()=>t("div",{class:"congratulation"},"\u606D\u559C\u53D1\u8D22\uFF0C\u5927\u5409\u5927\u5229",-1)),K={key:0,class:"amount"},O={class:"center"},Q={class:"info"},W=y(()=>t("div",{class:"text"},"\u6682\u65E0\u9886\u53D6\u8BB0\u5F55",-1)),X={class:"item-left"},Z={class:"left-content"},ss={key:0,class:"mine",type:"primary"},es={class:"time"},ts={class:"item-right"},os={key:0,class:"best-luck"},ns={class:"bottom"},cs={key:0,class:"tips"},as={class:"id"},is={__name:"ShowLuck",setup(v){const A=Y(),C=D(),e=N();T([]);function b(){const p="/RedPacket/"+e.uuid+"/activityDetail";A.push(p)}return(p,h)=>{const w=u("van-icon"),I=u("van-empty"),L=u("van-cell"),S=u("van-list"),x=u("van-button");return n(),a("div",V,[t("div",P,[t("div",F,[E,t("div",U,[t("div",q,[i(k,{tokenIcon:s(f)(s(e).contractChain.toLowerCase(),s(e).contractAddress.toLowerCase())},null,8,["tokenIcon"])])]),t("div",z,o(s(e).symbol),1),t("div",G,[s(e).type==0?(n(),d(_,{key:0,name:"pin"})):(n(),d(_,{key:1,name:"pu"})),r(" "+o(s(g)(s(e).creatorAddress))+"\u53D1\u51FA\u7684\u7EA2\u5305 ",1)]),J,s(e).singleAmount!=0?(n(),a("div",K,"+"+o(s(e).singleAmount)+" "+o(s(e).symbol),1)):l("",!0)]),s(e).title?(n(),a("div",{key:0,class:"detail",onClick:b},[r("\u67E5\u770B\u6D3B\u52A8\u8BE6\u60C5 "),i(w,{name:"arrow"})])):l("",!0)]),t("div",O,[t("div",Q,o(s(e).count)+"\u4E2A\u7EA2\u5305\uFF0C\u5171"+o(s(e).totalAmount)+" "+o(s(e).symbol)+"($8999.22)\uFF0C\u5269\u4F59"+o(s(e).count-s(e).receivedCount)+"\u4E2A",1),s(e).receiveList.length==0?(n(),d(I,{key:0,class:"empty-box"},{image:m(()=>[i(_,{class:"icon",name:"emptyHistory"}),W]),_:1})):(n(),d(S,{key:1},{default:m(()=>[(n(!0),a(H,null,$(s(e).receiveList,c=>(n(),d(L,{class:"item",key:c},{title:m(()=>[t("div",X,[i(k,{tokenIcon:s(f)(s(e).contractChain.toLowerCase(),s(e).contractAddress.toLowerCase())},null,8,["tokenIcon"]),t("div",Z,[t("div",null,[r(o(s(g)(c.userAddress)),1),c.userAddress==s(C).walletAddress?(n(),a("div",ss,"\u6211\u7684")):l("",!0)]),t("div",es,o(p.$dayjs.unix(c.transferTime).format("YYYY-MM-DD HH:mm")),1)])])]),value:m(()=>[t("div",ts,[t("div",null,o(c.amount)+" "+o(s(e).symbol),1),c.userAddress==s(e).luckyUserAddress?(n(),a("div",os,[i(_,{name:"good-fill"}),r("\u624B\u6C14\u6700\u4F73 ")])):l("",!0)])]),_:2},1024))),128))]),_:1}))]),t("div",ns,[s(e).status==5?(n(),a("div",cs,"*\u5DF2\u9886\u53D6\u91D1\u989D\uFF0C\u5C06\u5728"+o(p.$dayjs.unix(s(e).sendTime).format("YYYY-MM-DD HH:mm:ss"))+"\u65F6\u5F00\u59CB\u5206\u53D1\uFF0C\u5177\u4F53\u4EE5\u94FE\u4E0A\u5230\u8D26\u4E3A\u51C6",1)):l("",!0),s(e).status==3&&!s(e).isReceived?(n(),d(x,{key:1,type:"primary",class:"open"},{default:m(()=>[r("\u7ACB\u5373\u62A2(\u5269\u4F59"+o(s(e).count-s(e).receivedCount)+"\u4E2A)",1)]),_:1})):l("",!0),t("div",as,[r("\u7EA2\u5305\u8BA2\u5355\uFF1A"+o(s(e).id)+" ",1),i(_,{class:"copy-icon",name:"copy",onClick:h[0]||(h[0]=c=>s(j)(s(e).id))})])])])}}},ms=R(is,[["__scopeId","data-v-d87968e7"]]);export{ms as default};
