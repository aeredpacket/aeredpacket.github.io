import{r as f,o as d,c as $,w as o,a as l,t as s,b as k,d as ne,F as Q,e as y,u as h,f as ve,g as t,h as me,i as fe,j as De,k as Be,l as Ne,m as Ue,n as c,p as J,q as ze,s as W,v as M,T as b,B as le,x as re,y as Fe,z as He,A as Ee,C as Re}from"./index.14af51bd.js";import{_ as L}from"./TokenIcon.vuevuetypestyleindex0scoped7bbb7138lang.d5180bd6.js";import{_ as pe}from"./plugin-vueexport-helper.2444895f.js";const We={class:"title"},xe={class:"body"},je={class:"status-text"},qe={key:0},Je={key:1},Me={key:2},Qe={key:3},Ge={class:"status-icon"},Ke={class:"tx"},Oe={key:1,class:"trade-hash"},Xe={__name:"ChainTrade",props:{tradeVisable:{type:Boolean,default:!1},status:{type:Number,default:0},tradeHash:{type:String,default:""}},emits:["update:tradeVisable"],setup(v,{emit:se}){return(i,r)=>{const z=f("van-loading"),D=f("van-icon"),F=f("van-popup");return d(),$(F,{class:"dialog",show:v.tradeVisable,"onUpdate:show":r[1]||(r[1]=A=>fe(tradeVisable)?tradeVisable.value=A:null),round:"","close-on-click-overlay":!1},{default:o(()=>[l("div",We,s(i.$t("transactionDetails")),1),l("div",xe,[l("div",je,[v.status!=0?(d(),k(Q,{key:0},[v.status==1?(d(),k("div",qe,s(i.$t("sendingTransactionToBlockchain")),1)):v.status==2?(d(),k("div",Je,s(i.$t("waitingForServiceSyncronizing")),1)):v.status==-1?(d(),k("div",Me,s(i.$t("sendTransactionToBlockchainFailed")),1)):v.status==-2?(d(),k("div",Qe,s(i.$t("servicesyncronizingTimeout")),1)):ne("",!0)],64)):ne("",!0)]),l("div",Ge,[v.status==1||v.status==2?(d(),$(z,{key:0,type:"spinner",size:"48px"})):v.status==0?(d(),$(D,{key:1,color:"#07c160",size:"40px",name:"checked"})):v.status==-1||v.status==-2?(d(),$(D,{key:2,color:"#FA5151",size:"40px",name:"clear"})):ne("",!0)]),v.tradeHash?(d(),k("div",{key:0,class:"trade-hash",onClick:r[0]||(r[0]=A=>h(me)(v.tradeHash))},[y(s(i.$t("txHash"))+": ",1),l("span",Ke,s(h(ve)(v.tradeHash)),1),t(L,{name:"copy"})])):(d(),k("div",Oe,s(i.$t("txHash"))+": N/A",1))])]),_:1},8,["show"])}}},Ye=pe(Xe,[["__scopeId","data-v-1c06e15b"]]);const Ze=v=>(Ee("data-v-ebaf1db2"),v=v(),Re(),v),ea={class:"body"},aa={class:"tools-bar"},ta={key:0,class:"address"},na={class:"address-text"},la={class:"tools"},sa={class:"token"},oa={class:"token-symbol"},ia={class:"amount"},ua={style:{"margin-left":"4px"}},da=Ze(()=>l("svg",{class:"icon","aria-hidden":"true"},[l("use",{"xlink:href":"#icon-redPacket"})],-1)),ca={key:0},ra={key:1,class:"image-box"},va={class:"form-item total-amount"},ma={class:"form-item create"},fa={class:"content"},pa={class:"content"},ha={class:"success-icon"},ga={class:"title"},ba={class:"text"},ka={class:"btn"},ya={class:"content"},_a={__name:"Index",setup(v){const se=De(),i=Be(),{t:r}=Ne(),z=Ue("global"),D=c(!1),F=c(!1),A=c(!1),x=c(!1),I=c(0),B=c(""),N=c(""),P=c("");c("");const G=c(""),K=c(""),O=c(null),H=c("");console.log(z.cfg);const he=J(()=>I.value==0?B.value?B.value:"0.00":N.value&&P.value?le(Number(N.value)).multipliedBy(Number(P.value)).toNumber().toString():"0.00"),_=c(!1),C=c(0),U=c(""),X=c(!1),j=c(!1),Y=c(""),Z=c(!1),ge=J(()=>[{name:r("languages.zh-cn"),value:"zh-cn",color:i.language==="zh-cn"?"#9505F9":"#323233"},{name:r("languages.en"),value:"en",color:i.language==="en"?"#9505F9":"#323233"}]);function be(e){i.setLanguage(e.value)}const oe=c([]),u=ze({symbol:"",icon:"",amount:0,address:"",chain:"",chainId:-1}),E=c(!1),ke=J(()=>[{text:r("deadlineList.300"),value:300},{text:r("deadlineList.600"),value:600},{text:r("deadlineList.1800"),value:1800},{text:r("deadlineList.3600"),value:3600},{text:r("deadlineList.43200"),value:43200},{text:r("deadlineList.86400"),value:86400}]),R=c(300),ee=J(()=>r("deadlineList."+R.value));function ye(e){R.value=e.value,E.value=!1}function _e(e,a){console.log(e),we(e)}function we(e,a){let g=new FileReader;g.readAsDataURL(e),g.onloadend=function(m){let V=m.target.result,w=new Image;w.src=V,w.onload=function(){let p=He(w,e.name,e.type);console.log(p),K.value=p.base64Data,O.value=p.fileData}}}async function $e(){i.chainId;{oe.value=[{symbol:"JF",icon:"https://static.debank.com/image/bsc_token/logo_url/0x5fac926bf1e638944bb16fb5b787b5ba4bc85b0a/74d0d0f5a5fcf76ab35b89b29cb9c95e.png",amount:9999999,address:"0x227A05695F10B591731Fd925396b548a45067798",chain:"bsc",chainId:97}];return}}function Ce(e){u.symbol=e.symbol,u.icon=e.icon,u.amount=e.amount,u.address=e.address,u.chain=e.chain,u.chainId=e.chainId,x.value=!1}async function ie(){await i.connectWallet(),await de()}function ue(){return z.cfg.allowChainList.map(a=>a.chainId).includes(i.chainId)?!0:(Z.value=!0,!1)}async function Ae(){_.value=!1,U.value="",C.value=1,_.value=!0;try{let e=await W.wallet.approveMaxAmount(u.address,i.redPacketContractAddress);console.log(e),A.value=!1,U.value=e.hash,C.value=0}catch{C.value=-1,await M(2e3)}finally{_.value=!1}}async function de(){await W.wallet.isAllowanceEnough(i.redPacketContractAddress,u.address,i.walletAddress)?A.value=!1:A.value=!0}async function Ve(){X.value=!0,await Se(),X.value=!1}async function Se(){if(console.log("createRedPacket"),_.value=!1,U.value="",j.value=!1,Y.value="",!u.address){b.fail(r("pleaseSelectToken"));return}if(I.value==0){if(!B.value){b.fail(r("pleaseEnterTotalAmount"));return}}else if(!N.value){b.fail(r("pleaseEnterSingleAmount"));return}if(!P.value){b.fail(r("pleaseEnterQuantity"));return}let e;if(I.value==0?e=le(Number(B.value)).toNumber():e=le(Number(N.value)).multipliedBy(Number(P.value)).toNumber(),H.value||(H.value=r("bestWishes")),await i.connectWallet(),!ue())return;if(i.chainId!=u.chainId){b("\u7F51\u7EDC\u9519\u8BEF,\u8BF7\u5207\u6362\u81F3\u5E01\u79CD\u7684\u7F51\u7EDC");try{await W.wallet.switchNetwork(u.chainId)}catch(m){console.log(m);return}return}if(await de(),A.value){b.fail("\u8BF7\u5148Approve");return}C.value=1,_.value=!0;let g;try{let m=await W.wallet.sendRedPacket(i.redPacketContractAddress,u.address,I.value,e.toString(),P.value,R.value);console.dir(m),U.value=m.hash,g=await m.wait(),console.dir(g),U.value=g.transactionHash}catch(m){console.log(m),C.value=-1,await M(1e3),_.value=!1;return}C.value=2;try{let m=g==null?void 0:g.events,V={};for(let S=m.length-1;S>=0;S--){let T=m[S].topics.some(ae=>ae==="0x694af1cc8727cdd0afbdd53d9b87b69248bd490224e9dd090e788546506e076f");if(m[S].address==i.redPacketContractAddress&&T){V=m[S];break}}b(u.address),b(u.chain),b(V.topics[1]),b(g.transactionHash),b(R.value),b(O.value),b(u.symbol);let w=await W.redPacket.send(u.address,u.chain,V.topics[1],g.transactionHash,R.value,O.value,H.value,u.symbol,G.value);console.dir(w),C.value=0,await M(500),_.value=!1;const p=w.data.uuid;j.value=!0,Y.value=window.location.origin+"/redpacket/"+p}catch(m){console.log(m),C.value=-1,await M(1e3),_.value=!1}}async function Te(){i.isConnectWallet?ue()&&(await $e(),x.value=!0):b.fail(r("pleaseConnectWallet"))}const ce=z.cfg.allowChainList.map(e=>e.chainShow);return(e,a)=>{const g=f("van-radio"),m=f("van-radio-group"),V=f("van-icon"),w=f("van-cell"),p=f("van-cell-group"),S=f("van-action-sheet"),T=f("van-field"),ae=f("van-picker"),Le=f("van-popup"),Ie=f("van-image"),Pe=f("van-uploader"),q=f("van-button"),te=f("van-dialog");return d(),k(Q,null,[l("div",ea,[l("div",aa,[h(i).isConnectWallet?(d(),k("div",ta,[t(L,{name:"mbox"}),l("div",na,s(h(ve)(h(i).walletAddress)),1)])):(d(),k("div",{key:1,class:"address",onClick:ie},[t(L,{name:"wallet"}),l("div",null,s(e.$t("pleaseConnectWallet")),1)])),l("div",la,[t(L,{name:"language",onClick:a[0]||(a[0]=n=>F.value=!0)}),t(L,{name:"help",onClick:a[1]||(a[1]=n=>D.value=!0)})])]),t(m,{modelValue:I.value,"onUpdate:modelValue":a[2]||(a[2]=n=>I.value=n),direction:"horizontal",class:"type form-item"},{default:o(()=>[t(g,{name:0,"checked-color":"#ED4A4A","icon-size":"16px"},{default:o(()=>[y(s(e.$t("randomAmount")),1)]),_:1}),t(g,{name:1,"checked-color":"#ED4A4A","icon-size":"16px"},{default:o(()=>[y(s(e.$t("identicalAmount")),1)]),_:1})]),_:1},8,["modelValue"]),t(p,{inset:"",class:"form-item form-normal"},{default:o(()=>[t(w,{title:e.$t("token"),"is-link":"",onClick:Te},re({_:2},[u.address?{name:"value",fn:o(()=>[l("div",null,[t(V,{name:u.icon},null,8,["name"]),y(" "+s(u.symbol),1)])]),key:"0"}:void 0]),1032,["title"]),t(S,{show:x.value,"onUpdate:show":a[3]||(a[3]=n=>x.value=n),title:e.$t("settingToken")},{default:o(()=>[l("div",sa,[t(p,{inset:""},{default:o(()=>[(d(!0),k(Q,null,Fe(oe.value,n=>(d(),$(w,{key:n.address,clickable:"",onClick:wa=>Ce(n)},{title:o(()=>[l("div",oa,[t(V,{class:"symbol-icon",name:u.icon},null,8,["name"]),l("span",null,s(n.symbol),1)])]),value:o(()=>[l("div",null,[l("span",null,s(e.$t("balance"))+": "+s(n.amount),1),y("\xA0\xA0 ")])]),_:2},1032,["onClick"]))),128))]),_:1})])]),_:1},8,["show","title"])]),_:1}),I.value==0?(d(),$(p,{key:0,inset:"",class:"form-item form-normal"},{default:o(()=>[t(T,{label:e.$t("totalAmount"),"input-align":"right",placeholder:e.$t("enterAmount"),type:"number",modelValue:B.value,"onUpdate:modelValue":a[4]||(a[4]=n=>B.value=n)},{"left-icon":o(()=>[t(L,{name:"pin"})]),_:1},8,["label","placeholder","modelValue"])]),_:1})):(d(),$(p,{key:1,inset:"",class:"form-item form-normal"},{default:o(()=>[t(T,{label:e.$t("singleAmount"),"input-align":"right",placeholder:e.$t("enterAmount"),type:"number",modelValue:N.value,"onUpdate:modelValue":a[5]||(a[5]=n=>N.value=n)},{"left-icon":o(()=>[t(L,{name:"pu"})]),_:1},8,["label","placeholder","modelValue"])]),_:1})),l("div",ia,[y(s(e.$t("availableBalance")),1),l("span",ua,s(u.amount+" "+u.symbol),1)]),t(p,{inset:"",class:"form-item form-normal"},{default:o(()=>[t(T,{label:e.$t("quantity"),"input-align":"right",placeholder:e.$t("enterNumber"),type:"digit",modelValue:P.value,"onUpdate:modelValue":a[6]||(a[6]=n=>P.value=n)},re({"left-icon":o(()=>[da]),_:2},[h(i).language=="zh-cn"?{name:"right-icon",fn:o(()=>[y("\u4E2A")]),key:"0"}:void 0]),1032,["label","placeholder","modelValue"])]),_:1}),t(p,{inset:"",class:"form-item form-normal"},{default:o(()=>[t(T,{modelValue:h(ee),"onUpdate:modelValue":a[7]||(a[7]=n=>fe(ee)?ee.value=n:null),"is-link":"",readonly:"",name:"picker",label:e.$t("deadline"),onClick:a[8]||(a[8]=n=>E.value=!0),"input-align":"right"},null,8,["modelValue","label"]),t(Le,{show:E.value,"onUpdate:show":a[10]||(a[10]=n=>E.value=n),position:"bottom"},{default:o(()=>[t(ae,{columns:h(ke),onCancel:a[9]||(a[9]=n=>E.value=!1),onConfirm:ye,title:e.$t("settingDeadline"),"confirm-button-text":e.$t("confirm"),"cancel-button-text":e.$t("cancel")},null,8,["columns","title","confirm-button-text","cancel-button-text"])]),_:1},8,["show"])]),_:1}),t(p,{inset:"",class:"form-item form-normal"},{default:o(()=>[t(Pe,{class:"uploader-box","before-read":_e,"max-size":1024*1024,"preview-image":!1,accept:"image/*"},{default:o(()=>[t(w,{class:"uploader-content","is-link":"",title:e.$t("redPacketCover")},{value:o(()=>[K.value?(d(),k("div",ra,[t(Ie,{class:"image",fit:"contain",src:K.value},null,8,["src"])])):(d(),k("div",ca,s(e.$t("selectPicture")),1))]),_:1},8,["title"])]),_:1})]),_:1}),t(p,{inset:"",class:"form-item"},{default:o(()=>[t(T,{modelValue:H.value,"onUpdate:modelValue":a[11]||(a[11]=n=>H.value=n),rows:"1",autosize:"",type:"textarea",maxlength:"20",placeholder:e.$t("bestWishes"),"show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1}),t(p,{inset:"",class:"form-item"},{default:o(()=>[t(T,{modelValue:G.value,"onUpdate:modelValue":a[12]||(a[12]=n=>G.value=n),rows:"2",autosize:"",type:"textarea",maxlength:"500",placeholder:e.$t("ActivityDescription")},null,8,["modelValue","placeholder"])]),_:1}),l("div",va,[y(s(e.$t("redPacketTotalAmount")),1),l("span",null,s(h(he)),1),y(s(u.symbol),1)]),l("div",ma,[h(i).isConnectWallet?(d(),k(Q,{key:0},[A.value?(d(),$(q,{key:0,class:"create-btn",type:"danger",onClick:Ae},{default:o(()=>[y(s(e.$t("approve")),1)]),_:1})):(d(),$(q,{key:1,class:"create-btn",type:"danger",onClick:Ve,loading:X.value},{default:o(()=>[y(s(e.$t("createRedPacketBtn")),1)]),_:1},8,["loading"]))],64)):(d(),$(q,{key:1,class:"create-btn",type:"primary",onClick:ie},{default:o(()=>[y(s(e.$t("connectWallet")),1)]),_:1}))]),l("div",{class:"form-item history",onClick:a[13]||(a[13]=n=>h(se).push("/history"))},s(e.$t("redPacketHistory")),1)]),t(te,{class:"help-dialog",show:D.value,"onUpdate:show":a[14]||(a[14]=n=>D.value=n),title:e.$t("rulesDescription"),"confirm-button-text":e.$t("understand"),"close-on-click-overlay":""},{default:o(()=>[l("div",fa,[l("div",null,s(e.$t("rulesDescription1")),1),l("div",null,s(e.$t("rulesDescription2")),1),l("div",null,s(e.$t("rulesDescription3")),1),l("div",null,s(e.$t("rulesDescription4")),1),l("div",null,s(e.$t("rulesDescription5",{chains:h(ce).join("/")})),1)])]),_:1},8,["show","title","confirm-button-text"]),t(te,{class:"create-success-dialog",show:j.value,"onUpdate:show":a[16]||(a[16]=n=>j.value=n),"close-on-click-overlay":""},{footer:o(()=>[l("div",ka,[t(q,{class:"copy-btn",type:"primary",onClick:a[15]||(a[15]=n=>h(me)(Y.value))},{default:o(()=>[y(s(e.$t("copyLink")),1)]),_:1})])]),default:o(()=>[l("div",pa,[l("div",ha,[t(L,{name:"createSuccess"})]),l("div",ga,s(e.$t("createRedPacketSuccess")),1),l("div",ba,s(e.$t("shareLink")),1)])]),_:1},8,["show"]),t(S,{show:F.value,"onUpdate:show":a[17]||(a[17]=n=>F.value=n),title:e.$t("switchLang"),actions:h(ge),closeable:!1,"cancel-text":e.$t("cancel"),"close-on-click-action":"",onSelect:be},null,8,["show","title","actions","cancel-text"]),t(Ye,{tradeVisable:_.value,"onUpdate:tradeVisable":a[18]||(a[18]=n=>_.value=n),status:C.value,tradeHash:U.value},null,8,["tradeVisable","status","tradeHash"]),t(te,{class:"chain-err-dialog",confirmButtonText:e.$t("understand"),confirmButtonColor:"#3F80F7",show:Z.value,"onUpdate:show":a[19]||(a[19]=n=>Z.value=n)},{default:o(()=>[l("div",ya,[l("div",null,s(e.$t("notSupportedChain")),1),l("div",null,s(e.$t("pleaseSwitchTo",{chains:h(ce).join("\u3001")})),1)])]),_:1},8,["confirmButtonText","show"])],64)}}},Va=pe(_a,[["__scopeId","data-v-ebaf1db2"]]);export{Va as default};
