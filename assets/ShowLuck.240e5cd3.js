import{_ as l}from"./TokenIcon.vuevuetypestyleindex0scoped7bbb7138lang.c2af20bb.js";import{T as k,d as f}from"./dayjs.min.f1102490.js";import{k as D,l as T,q as H,r as u,o as c,b as a,a as e,g as i,u as s,t as o,c as d,e as r,d as _,w as m,C as b,f as g,F as B,z as M,h as N,p as R,j as V}from"./index.39920047.js";import{u as j}from"./redPacketStore.6e22063f.js";import{_ as P}from"./plugin-vueexport-helper.2444895f.js";const p=v=>(R("data-v-cdfcb85a"),v=v(),V(),v),$={class:"body"},F={class:"top"},q={class:"info"},z=p(()=>e("div",{class:"empty"},null,-1)),E={class:"background"},U={class:"coin-logo"},G={class:"coin"},J={class:"from"},K=p(()=>e("div",{class:"congratulation"},"\u606D\u559C\u53D1\u8D22\uFF0C\u5927\u5409\u5927\u5229",-1)),O={key:0,class:"amount"},Q={class:"center"},W={class:"info"},X=p(()=>e("div",{class:"text"},"\u6682\u65E0\u9886\u53D6\u8BB0\u5F55",-1)),Z={class:"item-left"},ss={class:"left-content"},ts={key:0,class:"mine",type:"primary"},es={class:"time"},os={class:"item-right"},cs={key:0,class:"best-luck"},ns={class:"bottom"},as={key:0,class:"tips"},is={class:"id"},ds={__name:"ShowLuck",setup(v){const C=D(),A=T(),t=j();H([]);function w(){const y="/RedPacket/"+t.uuid+"/activityDetail";C.push(y)}return(y,h)=>{const x=u("van-icon"),I=u("van-empty"),L=u("van-cell"),S=u("van-list"),Y=u("van-button");return c(),a("div",$,[e("div",F,[e("div",q,[z,e("div",E,[e("div",U,[i(k,{tokenIcon:s(b)(s(t).contractChain.toLowerCase(),s(t).contractAddress.toLowerCase())},null,8,["tokenIcon"])])]),e("div",G,o(s(t).symbol),1),e("div",J,[s(t).type==0?(c(),d(l,{key:0,name:"pin"})):(c(),d(l,{key:1,name:"pu"})),r(" "+o(s(g)(s(t).creatorAddress))+"\u53D1\u51FA\u7684\u7EA2\u5305 ",1)]),K,s(t).singleAmount!=0?(c(),a("div",O,"+"+o(s(t).singleAmount)+" "+o(s(t).symbol),1)):_("",!0)]),s(t).title?(c(),a("div",{key:0,class:"detail",onClick:w},[r("\u67E5\u770B\u6D3B\u52A8\u8BE6\u60C5 "),i(x,{name:"arrow"})])):_("",!0)]),e("div",Q,[e("div",W,o(s(t).count)+"\u4E2A\u7EA2\u5305\uFF0C\u5171"+o(s(t).totalAmount)+" "+o(s(t).symbol)+"($8999.22)\uFF0C\u5269\u4F59"+o(s(t).count-s(t).receivedCount)+"\u4E2A",1),s(t).receiveList.length==0?(c(),d(I,{key:0,class:"empty-box"},{image:m(()=>[i(l,{class:"icon",name:"emptyHistory"}),X]),_:1})):(c(),d(S,{key:1},{default:m(()=>[(c(!0),a(B,null,M(s(t).receiveList,n=>(c(),d(L,{class:"item",key:n},{title:m(()=>[e("div",Z,[i(k,{tokenIcon:s(b)(s(t).contractChain.toLowerCase(),s(t).contractAddress.toLowerCase())},null,8,["tokenIcon"]),e("div",ss,[e("div",null,[r(o(s(g)(n.userAddress)),1),n.userAddress==s(A).walletAddress?(c(),a("div",ts,"\u6211\u7684")):_("",!0)]),e("div",es,o(s(f).unix(n.transferTime).format("YYYY-MM-DD HH:mm")),1)])])]),value:m(()=>[e("div",os,[e("div",null,o(n.amount)+" "+o(s(t).symbol),1),n.userAddress==s(t).luckyUserAddress?(c(),a("div",cs,[i(l,{name:"good-fill"}),r("\u624B\u6C14\u6700\u4F73 ")])):_("",!0)])]),_:2},1024))),128))]),_:1}))]),e("div",ns,[s(t).status==5?(c(),a("div",as,"*\u5DF2\u9886\u53D6\u91D1\u989D\uFF0C\u5C06\u5728"+o(s(f).unix(s(t).sendTime).format("YYYY-MM-DD HH:mm:ss"))+"\u65F6\u5F00\u59CB\u5206\u53D1\uFF0C\u5177\u4F53\u4EE5\u94FE\u4E0A\u5230\u8D26\u4E3A\u51C6",1)):_("",!0),s(t).status==3&&!s(t).isReceived?(c(),d(Y,{key:1,type:"primary",class:"open"},{default:m(()=>[r("\u7ACB\u5373\u62A2(\u5269\u4F59"+o(s(t).count-s(t).receivedCount)+"\u4E2A)",1)]),_:1})):_("",!0),e("div",is,[r("\u7EA2\u5305\u8BA2\u5355\uFF1A"+o(s(t).id)+" ",1),i(l,{class:"copy-icon",name:"copy",onClick:h[0]||(h[0]=n=>s(N)(s(t).id))})])])])}}},vs=P(ds,[["__scopeId","data-v-cdfcb85a"]]);export{vs as default};
