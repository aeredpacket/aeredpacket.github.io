import{r as m,o as s,c as w,w as o,a as n,b as h,d as te,F as M,e as b,t as c,u as g,f as ve,g as l,h as me,i as Ne,p as fe,j as pe,k as Ue,l as Be,m as Te,n as Fe,q as u,s as ae,v as re,x as W,y as G,T as E,B as le,z as De,A as ze}from"./index.6b92f77c.js";import{_ as x}from"./TokenIcon.vuevuetypestyleindex0scoped7bbb7138lang.cba22175.js";import{_ as he}from"./plugin-vueexport-helper.2444895f.js";const He=i=>(fe("data-v-4d8c2315"),i=i(),pe(),i),Re=He(()=>n("div",{class:"title"},"\u4EA4\u6613\u8BE6\u60C5",-1)),We={class:"body"},Ee={class:"status-text"},je={key:0},qe={key:1},Je={key:2},Ge={key:3},Me={class:"status-icon"},Ke={class:"tx"},Oe={key:1,class:"trade-hash"},Qe={__name:"ChainTrade",props:{tradeVisable:{type:Boolean,default:!1},status:{type:Number,default:0},tradeHash:{type:String,default:""}},emits:["update:tradeVisable"],setup(i,{emit:ne}){return(r,f)=>{const D=m("van-loading"),N=m("van-icon"),z=m("van-popup");return s(),w(z,{class:"dialog",show:i.tradeVisable,"onUpdate:show":f[1]||(f[1]=A=>Ne(tradeVisable)?tradeVisable.value=A:null),round:"","close-on-click-overlay":!1},{default:o(()=>[Re,n("div",We,[n("div",Ee,[i.status!=0?(s(),h(M,{key:0},[i.status==1?(s(),h("div",je,"\u53D1\u9001\u4EA4\u6613\u5230\u533A\u5757\u94FE\u2026")):i.status==2?(s(),h("div",qe,"\u7B49\u5F85\u670D\u52A1\u5668\u540C\u6B65...")):i.status==-1?(s(),h("div",Je,"\u4E0A\u94FE\u4EA4\u6613\u53D1\u9001\u5931\u8D25")):i.status==-2?(s(),h("div",Ge,"\u670D\u52A1\u5668\u540C\u6B65\u8D85\u65F6")):te("",!0)],64)):te("",!0)]),n("div",Me,[i.status==1||i.status==2?(s(),w(D,{key:0,type:"spinner",size:"48px"})):i.status==0?(s(),w(N,{key:1,color:"#07c160",size:"40px",name:"checked"})):i.status==-1||i.status==-2?(s(),w(N,{key:2,color:"#FA5151",size:"40px",name:"clear"})):te("",!0)]),i.tradeHash?(s(),h("div",{key:0,class:"trade-hash",onClick:f[0]||(f[0]=A=>g(me)(i.tradeHash))},[b("\u4EA4\u6613Hash: "),n("span",Ke,c(g(ve)(i.tradeHash)),1),l(x,{name:"copy"})])):(s(),h("div",Oe,"\u4EA4\u6613Hash: N/A"))])]),_:1},8,["show"])}}},Xe=he(Qe,[["__scopeId","data-v-4d8c2315"]]);const I=i=>(fe("data-v-0748c8d8"),i=i(),pe(),i),Ye={class:"body"},Ze={class:"tools-bar"},et={key:0,class:"address"},tt={class:"address-text"},at={class:"tools"},lt={class:"token"},nt={class:"token-symbol"},ot={class:"amount"},st={style:{"margin-left":"4px"}},it=I(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-redPacket"})],-1)),ut={key:0},dt={key:1,class:"image-box"},ct={class:"form-item total-amount"},rt={class:"form-item create"},vt={class:"content"},mt=I(()=>n("div",null,"1: \u62FC\u624B\u6C14\u7EA2\u5305, \u9886\u53D6\u91D1\u989D\u968F\u673A, \u666E\u901A\u7EA2\u5305\u5219\u6BCF\u4E2A\u7EA2\u5305\u7684\u91D1\u989D\u5747\u76F8\u7B49\u3002",-1)),ft=I(()=>n("div",null,"2: \u7EA2\u5305\u5230\u671F\u540E, \u5C06\u65E0\u6CD5\u88AB\u9886\u53D6, \u5269\u4F59\u91D1\u989D\u5C06\u539F\u8DEF\u9000\u8FD8\u3002",-1)),pt=I(()=>n("div",null,"3: \u7EA2\u5305\u5230\u671F\u540E, \u667A\u80FD\u5408\u7EA6\u5C06\u81EA\u52A8\u4E3A\u5DF2\u9886\u53D6\u7528\u6237\u53D1\u653E\u4EE3\u5E01, \u5230\u8D26\u65F6\u95F4\u4EE5\u94FE\u4E0A\u5B8C\u6210\u65F6\u95F4\u4E3A\u51C6\u3002",-1)),ht=I(()=>n("div",null,"4: \u56E0\u94FE\u4E0AGAS\u8D39\u7528, \u652F\u4ED8\u91D1\u989D\u4E00\u822C\u4F1A\u5927\u4E8E\u7EA2\u5305\u603B\u91D1\u989D\u3002",-1)),_t={class:"content"},bt={class:"success-icon"},gt=I(()=>n("div",{class:"title"},"\u606D\u559C\uFF0C\u7EA2\u5305\u521B\u5EFA\u6210\u529F~",-1)),kt=I(()=>n("div",{class:"text"},"\u8F6C\u53D1\u9886\u53D6\u94FE\u63A5\uFF0C\u7528\u6237\u53EF\u4F7F\u7528AveAPP\u6216\u5176\u4ED6\u94B1\u5305\u7C7BAPP\u6253\u5F00\u94FE\u63A5\u75C5\u9886\u53D6\u7EA2\u5305",-1)),yt={class:"btn"},wt={class:"content"},$t=I(()=>n("div",null,"\u6682\u4E0D\u652F\u6301\u6B64\u94FE",-1)),At={__name:"Index",setup(i){const ne=Ue(),r=Be(),{t:f}=Te(),D=Fe("global"),N=u(!1),z=u(!1),A=u(!1),j=u(!1),P=u(0),U=u(""),B=u(""),L=u("");u("");const K=u(""),O=u(""),oe=u(null),H=u("");console.log(D.cfg);const _e=ae(()=>P.value==0?U.value?U.value:"0.00":B.value&&L.value?le(Number(B.value)).multipliedBy(Number(L.value)).toNumber().toString():"0.00"),k=u(!1),$=u(0),T=u(""),Q=u(!1),q=u(!1),X=u(""),Y=u(!1),be=ae(()=>[{name:f("languages.zh-cn"),value:"zh-cn",color:r.language==="zh-cn"?"#9505F9":"#323233"},{name:f("languages.en"),value:"en",color:r.language==="en"?"#9505F9":"#323233"}]);function ge(e){r.setLanguage(e.value)}const se=u([]),d=re({symbol:"JF",icon:"https://static.debank.com/image/bsc_token/logo_url/0x5fac926bf1e638944bb16fb5b787b5ba4bc85b0a/74d0d0f5a5fcf76ab35b89b29cb9c95e.png",amount:9999999,address:"0x227A05695F10B591731Fd925396b548a45067798",chain:"bsc",chainId:97}),R=u(!1),ke=ae(()=>[{text:f("deadlineList.300"),value:300},{text:f("deadlineList.600"),value:600},{text:f("deadlineList.1800"),value:1800},{text:f("deadlineList.3600"),value:3600},{text:f("deadlineList.43200"),value:43200},{text:f("deadlineList.86400"),value:86400}]),F=re({text:f("deadlineList.300"),value:300});function ye(e,t){console.log(e),we(e)}function we(e,t){let _=new FileReader;_.readAsDataURL(e),_.onloadend=function(v){let S=v.target.result,y=new Image;y.src=S,y.onload=function(){let p=ze(y,e.name,e.type);console.log(p),O.value=p.base64Data,oe.value=p.fileData}}}function $e(e){F.text=e.text,F.value=e.value,R.value=!1}async function Ae(){r.chainId;{se.value=[{symbol:"JF",icon:"https://static.debank.com/image/bsc_token/logo_url/0x5fac926bf1e638944bb16fb5b787b5ba4bc85b0a/74d0d0f5a5fcf76ab35b89b29cb9c95e.png",amount:9999999,address:"0x227A05695F10B591731Fd925396b548a45067798",chain:"bsc",chainId:97}];return}}function Ce(e){d.symbol=e.symbol,d.icon=e.icon,d.amount=e.amount,d.address=e.address,d.chain=e.chain,d.chainId=e.chainId,j.value=!1}async function ie(){await r.connectWallet(),await de()}function ue(){return D.cfg.allowChainList.map(t=>t.chainId).includes(r.chainId)?!0:(Y.value=!0,!1)}async function Ve(){k.value=!1,T.value="",$.value=1,k.value=!0;try{let e=await W.wallet.approveMaxAmount(d.address,r.redPacketContractAddress);console.log(e),A.value=!1,T.value=e.hash,$.value=0}catch{$.value=-1,await G(2e3)}finally{k.value=!1}}async function de(){await W.wallet.isAllowanceEnough(r.redPacketContractAddress,d.address,r.walletAddress)?A.value=!1:A.value=!0}async function xe(){Q.value=!0,await Ie(),Q.value=!1}async function Ie(){if(console.log("createRedPacket"),k.value=!1,T.value="",q.value=!1,X.value="",P.value==0){if(!U.value){E.fail("\u8BF7\u8F93\u5165\u603B\u91D1\u989D");return}}else if(!B.value){E.fail("\u8BF7\u8F93\u5165\u5355\u4E2A\u91D1\u989D");return}if(!L.value){E.fail("\u8BF7\u8F93\u5165\u6570\u91CF");return}let e;if(P.value==0?e=le(Number(U.value)).toNumber():e=le(Number(B.value)).multipliedBy(Number(L.value)).toNumber(),H.value||(H.value=f("bestWishes")),await r.connectWallet(),!ue())return;if(r.chainId!=d.chainId){E("\u7F51\u7EDC\u9519\u8BEF,\u8BF7\u5207\u6362\u81F3\u5E01\u79CD\u7684\u7F51\u7EDC");try{await W.wallet.switchNetwork(d.chainId)}catch(v){console.log(v);return}return}if(await de(),A.value){E.fail("\u8BF7\u5148Approve");return}$.value=1,k.value=!0;let _;try{let v=await W.wallet.sendRedPacket(r.redPacketContractAddress,d.address,P.value,e.toString(),L.value,F.value);console.dir(v),T.value=v.hash,_=await v.wait(),console.dir(_),T.value=_.transactionHash}catch(v){console.log(v),$.value=-1,await G(1e3),k.value=!1;return}$.value=2;try{let v=_==null?void 0:_.events,S={};for(let C=v.length-1;C>=0;C--){let V=v[C].topics.some(Z=>Z==="0x694af1cc8727cdd0afbdd53d9b87b69248bd490224e9dd090e788546506e076f");if(v[C].address==r.redPacketContractAddress&&V){S=v[C];break}}let y=await W.redPacket.send(d.address,d.chain,S.topics[1],_.transactionHash,F.value,oe.value,H.value,d.symbol,K.value);console.dir(y),$.value=0,await G(500),k.value=!1;const p=y.data.uuid;q.value=!0,X.value=window.location.origin+"/redpacket/"+p}catch(v){console.log(v),$.value=-1,await G(1e3),k.value=!1}}r.isConnectWallet&&(ue(),Ae());const ce=D.cfg.allowChainList.map(e=>e.chainShow);return(e,t)=>{const _=m("van-radio"),v=m("van-radio-group"),S=m("van-icon"),y=m("van-cell"),p=m("van-cell-group"),C=m("van-action-sheet"),V=m("van-field"),Z=m("van-picker"),Pe=m("van-popup"),Le=m("van-image"),Se=m("van-uploader"),J=m("van-button"),ee=m("van-dialog");return s(),h(M,null,[n("div",Ye,[n("div",Ze,[g(r).isConnectWallet?(s(),h("div",et,[l(x,{name:"mbox"}),n("div",tt,c(g(ve)(g(r).walletAddress)),1)])):(s(),h("div",{key:1,class:"address",onClick:ie},[l(x,{name:"wallet"}),n("div",null,c(e.$t("pleaseConnectWallet")),1)])),n("div",at,[l(x,{name:"language",onClick:t[0]||(t[0]=a=>z.value=!0)}),l(x,{name:"help",onClick:t[1]||(t[1]=a=>N.value=!0)})])]),l(v,{modelValue:P.value,"onUpdate:modelValue":t[2]||(t[2]=a=>P.value=a),direction:"horizontal",class:"type form-item"},{default:o(()=>[l(_,{name:0,"checked-color":"#ED4A4A","icon-size":"16px"},{default:o(()=>[b(c(e.$t("randomAmount")),1)]),_:1}),l(_,{name:1,"checked-color":"#ED4A4A","icon-size":"16px"},{default:o(()=>[b(c(e.$t("identicalAmount")),1)]),_:1})]),_:1},8,["modelValue"]),l(p,{inset:"",class:"form-item form-normal"},{default:o(()=>[l(y,{title:e.$t("token"),"is-link":"",onClick:t[3]||(t[3]=a=>j.value=!0)},{value:o(()=>[n("div",null,[l(S,{name:d.icon},null,8,["name"]),b(" "+c(d.symbol),1)])]),_:1},8,["title"]),l(C,{show:j.value,"onUpdate:show":t[4]||(t[4]=a=>j.value=a),title:e.$t("settingToken")},{default:o(()=>[n("div",lt,[l(p,{inset:""},{default:o(()=>[(s(!0),h(M,null,De(se.value,a=>(s(),w(y,{key:a.address,clickable:"",onClick:Ct=>Ce(a)},{title:o(()=>[n("div",nt,[l(S,{class:"symbol-icon",name:d.icon},null,8,["name"]),n("span",null,c(a.symbol),1)])]),value:o(()=>[n("div",null,[n("span",null,c(e.$t("balance"))+": "+c(a.amount),1),b("\xA0\xA0 ")])]),_:2},1032,["onClick"]))),128))]),_:1})])]),_:1},8,["show","title"])]),_:1}),P.value==0?(s(),w(p,{key:0,inset:"",class:"form-item form-normal"},{default:o(()=>[l(V,{label:e.$t("totalAmount"),"input-align":"right",placeholder:e.$t("enterAmount"),type:"number",modelValue:U.value,"onUpdate:modelValue":t[5]||(t[5]=a=>U.value=a)},{"left-icon":o(()=>[l(x,{name:"pin"})]),_:1},8,["label","placeholder","modelValue"])]),_:1})):(s(),w(p,{key:1,inset:"",class:"form-item form-normal"},{default:o(()=>[l(V,{label:e.$t("singleAmount"),"input-align":"right",placeholder:e.$t("enterAmount"),type:"number",modelValue:B.value,"onUpdate:modelValue":t[6]||(t[6]=a=>B.value=a)},{"left-icon":o(()=>[l(x,{name:"pu"})]),_:1},8,["label","placeholder","modelValue"])]),_:1})),n("div",ot,[b(c(e.$t("availableBalance")),1),n("span",st,c(d.amount+" "+d.symbol),1)]),l(p,{inset:"",class:"form-item form-normal"},{default:o(()=>[l(V,{label:e.$t("quantity"),"input-align":"right",placeholder:e.$t("enterNumber"),type:"digit",modelValue:L.value,"onUpdate:modelValue":t[7]||(t[7]=a=>L.value=a)},{"left-icon":o(()=>[it]),"right-icon":o(()=>[b("\u4E2A")]),_:1},8,["label","placeholder","modelValue"])]),_:1}),l(p,{inset:"",class:"form-item form-normal"},{default:o(()=>[l(V,{modelValue:F.text,"onUpdate:modelValue":t[8]||(t[8]=a=>F.text=a),"is-link":"",readonly:"",name:"picker",label:e.$t("deadline"),onClick:t[9]||(t[9]=a=>R.value=!0),"input-align":"right"},null,8,["modelValue","label"]),l(Pe,{show:R.value,"onUpdate:show":t[11]||(t[11]=a=>R.value=a),position:"bottom"},{default:o(()=>[l(Z,{columns:g(ke),onCancel:t[10]||(t[10]=a=>R.value=!1),onConfirm:$e,title:e.$t("settingDeadline"),"confirm-button-text":e.$t("confirm"),"cancel-button-text":e.$t("cancel")},null,8,["columns","title","confirm-button-text","cancel-button-text"])]),_:1},8,["show"])]),_:1}),l(p,{inset:"",class:"form-item form-normal"},{default:o(()=>[l(Se,{class:"uploader-box","before-read":ye,"max-size":1024*1024,"preview-image":!1,accept:"image/*"},{default:o(()=>[l(y,{class:"uploader-content","is-link":"",title:e.$t("redPacketCover")},{value:o(()=>[O.value?(s(),h("div",dt,[l(Le,{class:"image",fit:"contain",src:O.value},null,8,["src"])])):(s(),h("div",ut,c(e.$t("selectPicture")),1))]),_:1},8,["title"])]),_:1})]),_:1}),l(p,{inset:"",class:"form-item"},{default:o(()=>[l(V,{modelValue:H.value,"onUpdate:modelValue":t[12]||(t[12]=a=>H.value=a),rows:"1",autosize:"",type:"textarea",maxlength:"20",placeholder:e.$t("bestWishes"),"show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1}),l(p,{inset:"",class:"form-item"},{default:o(()=>[l(V,{modelValue:K.value,"onUpdate:modelValue":t[13]||(t[13]=a=>K.value=a),rows:"2",autosize:"",type:"textarea",maxlength:"500",placeholder:e.$t("ActivityDescription")},null,8,["modelValue","placeholder"])]),_:1}),n("div",ct,[b(c(e.$t("redPacketTotalAmount")),1),n("span",null,c(g(_e)),1),b(c(d.symbol),1)]),n("div",rt,[g(r).isConnectWallet?(s(),h(M,{key:0},[A.value?(s(),w(J,{key:0,class:"create-btn",type:"danger",onClick:Ve},{default:o(()=>[b("Approve")]),_:1})):(s(),w(J,{key:1,class:"create-btn",type:"danger",onClick:xe,loading:Q.value},{default:o(()=>[b(c(e.$t("createRedPacketBtn")),1)]),_:1},8,["loading"]))],64)):(s(),w(J,{key:1,class:"create-btn",type:"primary",onClick:ie},{default:o(()=>[b(c(e.$t("connectWallet")),1)]),_:1}))]),n("div",{class:"form-item history",onClick:t[14]||(t[14]=a=>g(ne).push("/history"))},c(e.$t("redPacketHistory")),1)]),l(ee,{class:"help-dialog",show:N.value,"onUpdate:show":t[15]||(t[15]=a=>N.value=a),title:e.$t("rulesDescription"),"confirm-button-text":e.$t("understand"),"close-on-click-overlay":""},{default:o(()=>[n("div",vt,[mt,ft,pt,ht,n("div",null,"5: \u7EA2\u5305\u521B\u5EFA\u529F\u80FD, \u76EE\u524D\u652F\u6301"+c(g(ce).join("/"))+"\u94FE\u3002",1)])]),_:1},8,["show","title","confirm-button-text"]),l(ee,{class:"create-success-dialog",show:q.value,"onUpdate:show":t[17]||(t[17]=a=>q.value=a),"close-on-click-overlay":""},{footer:o(()=>[n("div",yt,[l(J,{class:"copy-btn",type:"primary",onClick:t[16]||(t[16]=a=>g(me)(X.value))},{default:o(()=>[b("\u590D\u5236\u7EA2\u5305\u94FE\u63A5")]),_:1})])]),default:o(()=>[n("div",_t,[n("div",bt,[l(x,{name:"createSuccess"})]),gt,kt])]),_:1},8,["show"]),l(C,{show:z.value,"onUpdate:show":t[18]||(t[18]=a=>z.value=a),title:e.$t("switchLang"),actions:g(be),closeable:!1,"cancel-text":"\u53D6\u6D88","close-on-click-action":"",onSelect:ge},null,8,["show","title","actions"]),l(Xe,{tradeVisable:k.value,"onUpdate:tradeVisable":t[19]||(t[19]=a=>k.value=a),status:$.value,tradeHash:T.value},null,8,["tradeVisable","status","tradeHash"]),l(ee,{class:"chain-err-dialog",confirmButtonText:"\u6211\u77E5\u9053\u4E86",confirmButtonColor:"#3F80F7",show:Y.value,"onUpdate:show":t[20]||(t[20]=a=>Y.value=a)},{default:o(()=>[n("div",wt,[$t,n("div",null,"\u8BF7\u5207\u6362\u81F3"+c(g(ce).join("\u3001")),1)])]),_:1},8,["show"])],64)}}},Pt=he(At,[["__scopeId","data-v-0748c8d8"]]);export{Pt as default};
