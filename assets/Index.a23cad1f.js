import{r as f,o as u,c as w,w as o,a as l,t as s,b as g,d as te,F as Q,e as k,u as h,f as ve,g as t,h as me,i as fe,j as De,k as Be,l as Ne,m as Ue,n as d,p as J,q as ze,s as R,v as M,T as S,B as ne,x as re,y as Fe,z as He,A as Ee,C as Re}from"./index.ef469d29.js";import{_ as T}from"./TokenIcon.vuevuetypestyleindex0scoped7bbb7138lang.4f4db223.js";import{_ as pe}from"./plugin-vueexport-helper.2444895f.js";const We={class:"title"},xe={class:"body"},je={class:"status-text"},qe={key:0},Je={key:1},Me={key:2},Qe={key:3},Ge={class:"status-icon"},Ke={class:"tx"},Oe={key:1,class:"trade-hash"},Xe={__name:"ChainTrade",props:{tradeVisable:{type:Boolean,default:!1},status:{type:Number,default:0},tradeHash:{type:String,default:""}},emits:["update:tradeVisable"],setup(v,{emit:le}){return(i,r)=>{const z=f("van-loading"),D=f("van-icon"),F=f("van-popup");return u(),w(F,{class:"dialog",show:v.tradeVisable,"onUpdate:show":r[1]||(r[1]=C=>fe(tradeVisable)?tradeVisable.value=C:null),round:"","close-on-click-overlay":!1},{default:o(()=>[l("div",We,s(i.$t("transactionDetails")),1),l("div",xe,[l("div",je,[v.status!=0?(u(),g(Q,{key:0},[v.status==1?(u(),g("div",qe,s(i.$t("sendingTransactionToBlockchain")),1)):v.status==2?(u(),g("div",Je,s(i.$t("waitingForServiceSyncronizing")),1)):v.status==-1?(u(),g("div",Me,s(i.$t("sendTransactionToBlockchainFailed")),1)):v.status==-2?(u(),g("div",Qe,s(i.$t("servicesyncronizingTimeout")),1)):te("",!0)],64)):te("",!0)]),l("div",Ge,[v.status==1||v.status==2?(u(),w(z,{key:0,type:"spinner",size:"48px"})):v.status==0?(u(),w(D,{key:1,color:"#07c160",size:"40px",name:"checked"})):v.status==-1||v.status==-2?(u(),w(D,{key:2,color:"#FA5151",size:"40px",name:"clear"})):te("",!0)]),v.tradeHash?(u(),g("div",{key:0,class:"trade-hash",onClick:r[0]||(r[0]=C=>h(me)(v.tradeHash))},[k(s(i.$t("txHash"))+": ",1),l("span",Ke,s(h(ve)(v.tradeHash)),1),t(T,{name:"copy"})])):(u(),g("div",Oe,s(i.$t("txHash"))+": N/A",1))])]),_:1},8,["show"])}}},Ye=pe(Xe,[["__scopeId","data-v-1c06e15b"]]);const Ze=v=>(Ee("data-v-a7d0dc90"),v=v(),Re(),v),ea={class:"body"},aa={class:"tools-bar"},ta={key:0,class:"address"},na={class:"address-text"},la={class:"tools"},sa={class:"token"},oa={class:"token-symbol"},ia={class:"amount"},ua={style:{"margin-left":"4px"}},da=Ze(()=>l("svg",{class:"icon","aria-hidden":"true"},[l("use",{"xlink:href":"#icon-redPacket"})],-1)),ca={key:0},ra={key:1,class:"image-box"},va={class:"form-item total-amount"},ma={class:"form-item create"},fa={class:"content"},pa={class:"content"},ha={class:"success-icon"},ga={class:"title"},ba={class:"text"},ka={class:"btn"},ya={class:"content"},_a={__name:"Index",setup(v){const le=De(),i=Be(),{t:r}=Ne(),z=Ue("global"),D=d(!1),F=d(!1),C=d(!1),W=d(!1),L=d(0),B=d(""),N=d(""),I=d("");d("");const G=d(""),K=d(""),se=d(null),H=d("");console.log(z.cfg);const he=J(()=>L.value==0?B.value?B.value:"0.00":N.value&&I.value?ne(Number(N.value)).multipliedBy(Number(I.value)).toNumber().toString():"0.00"),y=d(!1),$=d(0),U=d(""),O=d(!1),x=d(!1),X=d(""),Y=d(!1),ge=J(()=>[{name:r("languages.zh-cn"),value:"zh-cn",color:i.language==="zh-cn"?"#9505F9":"#323233"},{name:r("languages.en"),value:"en",color:i.language==="en"?"#9505F9":"#323233"}]);function be(e){i.setLanguage(e.value)}const oe=d([]),c=ze({symbol:"",icon:"",amount:0,address:"",chain:"",chainId:-1}),E=d(!1),ke=J(()=>[{text:r("deadlineList.300"),value:300},{text:r("deadlineList.600"),value:600},{text:r("deadlineList.1800"),value:1800},{text:r("deadlineList.3600"),value:3600},{text:r("deadlineList.43200"),value:43200},{text:r("deadlineList.86400"),value:86400}]),j=d(300),Z=J(()=>r("deadlineList."+j.value));function ye(e){j.value=e.value,E.value=!1}function _e(e,a){console.log(e),we(e)}function we(e,a){let b=new FileReader;b.readAsDataURL(e),b.onloadend=function(m){let P=m.target.result,_=new Image;_.src=P,_.onload=function(){let p=He(_,e.name,e.type);console.log(p),K.value=p.base64Data,se.value=p.fileData}}}async function $e(){i.chainId;{oe.value=[{symbol:"JF",icon:"https://static.debank.com/image/bsc_token/logo_url/0x5fac926bf1e638944bb16fb5b787b5ba4bc85b0a/74d0d0f5a5fcf76ab35b89b29cb9c95e.png",amount:9999999,address:"0x227A05695F10B591731Fd925396b548a45067798",chain:"bsc",chainId:97}];return}}function Ce(e){c.symbol=e.symbol,c.icon=e.icon,c.amount=e.amount,c.address=e.address,c.chain=e.chain,c.chainId=e.chainId,W.value=!1}async function ie(){await i.connectWallet(),await de()}function ue(){return z.cfg.allowChainList.map(a=>a.chainId).includes(i.chainId)?!0:(Y.value=!0,!1)}async function Ae(){y.value=!1,U.value="",$.value=1,y.value=!0;try{let e=await R.wallet.approveMaxAmount(c.address,i.redPacketContractAddress);console.log(e),C.value=!1,U.value=e.hash,$.value=0}catch{$.value=-1,await M(2e3)}finally{y.value=!1}}async function de(){await R.wallet.isAllowanceEnough(i.redPacketContractAddress,c.address,i.walletAddress)?C.value=!1:C.value=!0}async function Ve(){O.value=!0,await Se(),O.value=!1}async function Se(){if(console.log("createRedPacket"),y.value=!1,U.value="",x.value=!1,X.value="",!c.address){S.fail(r("pleaseSelectToken"));return}if(L.value==0){if(!B.value){S.fail(r("pleaseEnterTotalAmount"));return}}else if(!N.value){S.fail(r("pleaseEnterSingleAmount"));return}if(!I.value){S.fail(r("pleaseEnterQuantity"));return}let e;if(L.value==0?e=ne(Number(B.value)).toNumber():e=ne(Number(N.value)).multipliedBy(Number(I.value)).toNumber(),H.value||(H.value=r("bestWishes")),await i.connectWallet(),!ue())return;if(i.chainId!=c.chainId){S("\u7F51\u7EDC\u9519\u8BEF,\u8BF7\u5207\u6362\u81F3\u5E01\u79CD\u7684\u7F51\u7EDC");try{await R.wallet.switchNetwork(c.chainId)}catch(m){console.log(m);return}return}if(await de(),C.value){S.fail("\u8BF7\u5148Approve");return}$.value=1,y.value=!0;let b;try{let m=await R.wallet.sendRedPacket(i.redPacketContractAddress,c.address,L.value,e.toString(),I.value,j.value);console.dir(m),U.value=m.hash,b=await m.wait(),console.dir(b),U.value=b.transactionHash}catch(m){console.log(m),$.value=-1,await M(1e3),y.value=!1;return}$.value=2;try{let m=b==null?void 0:b.events,P={};for(let A=m.length-1;A>=0;A--){let V=m[A].topics.some(ee=>ee==="0x694af1cc8727cdd0afbdd53d9b87b69248bd490224e9dd090e788546506e076f");if(m[A].address==i.redPacketContractAddress&&V){P=m[A];break}}let _=await R.redPacket.send(c.address,c.chain,P.topics[1],b.transactionHash,j.value,se.value,H.value,c.symbol,G.value);console.dir(_),$.value=0,await M(500),y.value=!1;const p=_.data.uuid;x.value=!0,X.value=window.location.origin+"/redpacket/"+p}catch(m){S(m),console.log(m),$.value=-1,await M(1e3),y.value=!1}}async function Te(){i.isConnectWallet?ue()&&(await $e(),W.value=!0):S.fail(r("pleaseConnectWallet"))}const ce=z.cfg.allowChainList.map(e=>e.chainShow);return(e,a)=>{const b=f("van-radio"),m=f("van-radio-group"),P=f("van-icon"),_=f("van-cell"),p=f("van-cell-group"),A=f("van-action-sheet"),V=f("van-field"),ee=f("van-picker"),Le=f("van-popup"),Ie=f("van-image"),Pe=f("van-uploader"),q=f("van-button"),ae=f("van-dialog");return u(),g(Q,null,[l("div",ea,[l("div",aa,[h(i).isConnectWallet?(u(),g("div",ta,[t(T,{name:"mbox"}),l("div",na,s(h(ve)(h(i).walletAddress)),1)])):(u(),g("div",{key:1,class:"address",onClick:ie},[t(T,{name:"wallet"}),l("div",null,s(e.$t("pleaseConnectWallet")),1)])),l("div",la,[t(T,{name:"language",onClick:a[0]||(a[0]=n=>F.value=!0)}),t(T,{name:"help",onClick:a[1]||(a[1]=n=>D.value=!0)})])]),t(m,{modelValue:L.value,"onUpdate:modelValue":a[2]||(a[2]=n=>L.value=n),direction:"horizontal",class:"type form-item"},{default:o(()=>[t(b,{name:0,"checked-color":"#ED4A4A","icon-size":"16px"},{default:o(()=>[k(s(e.$t("randomAmount")),1)]),_:1}),t(b,{name:1,"checked-color":"#ED4A4A","icon-size":"16px"},{default:o(()=>[k(s(e.$t("identicalAmount")),1)]),_:1})]),_:1},8,["modelValue"]),t(p,{inset:"",class:"form-item form-normal"},{default:o(()=>[t(_,{title:e.$t("token"),"is-link":"",onClick:Te},re({_:2},[c.address?{name:"value",fn:o(()=>[l("div",null,[t(P,{name:c.icon},null,8,["name"]),k(" "+s(c.symbol),1)])]),key:"0"}:void 0]),1032,["title"]),t(A,{show:W.value,"onUpdate:show":a[3]||(a[3]=n=>W.value=n),title:e.$t("settingToken")},{default:o(()=>[l("div",sa,[t(p,{inset:""},{default:o(()=>[(u(!0),g(Q,null,Fe(oe.value,n=>(u(),w(_,{key:n.address,clickable:"",onClick:wa=>Ce(n)},{title:o(()=>[l("div",oa,[t(P,{class:"symbol-icon",name:c.icon},null,8,["name"]),l("span",null,s(n.symbol),1)])]),value:o(()=>[l("div",null,[l("span",null,s(e.$t("balance"))+": "+s(n.amount),1),k("\xA0\xA0 ")])]),_:2},1032,["onClick"]))),128))]),_:1})])]),_:1},8,["show","title"])]),_:1}),L.value==0?(u(),w(p,{key:0,inset:"",class:"form-item form-normal"},{default:o(()=>[t(V,{label:e.$t("totalAmount"),"input-align":"right",placeholder:e.$t("enterAmount"),type:"number",modelValue:B.value,"onUpdate:modelValue":a[4]||(a[4]=n=>B.value=n)},{"left-icon":o(()=>[t(T,{name:"pin"})]),_:1},8,["label","placeholder","modelValue"])]),_:1})):(u(),w(p,{key:1,inset:"",class:"form-item form-normal"},{default:o(()=>[t(V,{label:e.$t("singleAmount"),"input-align":"right",placeholder:e.$t("enterAmount"),type:"number",modelValue:N.value,"onUpdate:modelValue":a[5]||(a[5]=n=>N.value=n)},{"left-icon":o(()=>[t(T,{name:"pu"})]),_:1},8,["label","placeholder","modelValue"])]),_:1})),l("div",ia,[k(s(e.$t("availableBalance")),1),l("span",ua,s(c.amount+" "+c.symbol),1)]),t(p,{inset:"",class:"form-item form-normal"},{default:o(()=>[t(V,{label:e.$t("quantity"),"input-align":"right",placeholder:e.$t("enterNumber"),type:"digit",modelValue:I.value,"onUpdate:modelValue":a[6]||(a[6]=n=>I.value=n)},re({"left-icon":o(()=>[da]),_:2},[h(i).language=="zh-cn"?{name:"right-icon",fn:o(()=>[k("\u4E2A")]),key:"0"}:void 0]),1032,["label","placeholder","modelValue"])]),_:1}),t(p,{inset:"",class:"form-item form-normal"},{default:o(()=>[t(V,{modelValue:h(Z),"onUpdate:modelValue":a[7]||(a[7]=n=>fe(Z)?Z.value=n:null),"is-link":"",readonly:"",name:"picker",label:e.$t("deadline"),onClick:a[8]||(a[8]=n=>E.value=!0),"input-align":"right"},null,8,["modelValue","label"]),t(Le,{show:E.value,"onUpdate:show":a[10]||(a[10]=n=>E.value=n),position:"bottom"},{default:o(()=>[t(ee,{columns:h(ke),onCancel:a[9]||(a[9]=n=>E.value=!1),onConfirm:ye,title:e.$t("settingDeadline"),"confirm-button-text":e.$t("confirm"),"cancel-button-text":e.$t("cancel")},null,8,["columns","title","confirm-button-text","cancel-button-text"])]),_:1},8,["show"])]),_:1}),t(p,{inset:"",class:"form-item form-normal"},{default:o(()=>[t(Pe,{class:"uploader-box","before-read":_e,"max-size":1024*1024,"preview-image":!1,accept:"image/*"},{default:o(()=>[t(_,{class:"uploader-content","is-link":"",title:e.$t("redPacketCover")},{value:o(()=>[K.value?(u(),g("div",ra,[t(Ie,{class:"image",fit:"contain",src:K.value},null,8,["src"])])):(u(),g("div",ca,s(e.$t("selectPicture")),1))]),_:1},8,["title"])]),_:1})]),_:1}),t(p,{inset:"",class:"form-item"},{default:o(()=>[t(V,{modelValue:H.value,"onUpdate:modelValue":a[11]||(a[11]=n=>H.value=n),rows:"1",autosize:"",type:"textarea",maxlength:"20",placeholder:e.$t("bestWishes"),"show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1}),t(p,{inset:"",class:"form-item"},{default:o(()=>[t(V,{modelValue:G.value,"onUpdate:modelValue":a[12]||(a[12]=n=>G.value=n),rows:"2",autosize:"",type:"textarea",maxlength:"500",placeholder:e.$t("ActivityDescription")},null,8,["modelValue","placeholder"])]),_:1}),l("div",va,[k(s(e.$t("redPacketTotalAmount")),1),l("span",null,s(h(he)),1),k(s(c.symbol),1)]),l("div",ma,[h(i).isConnectWallet?(u(),g(Q,{key:0},[C.value?(u(),w(q,{key:0,class:"create-btn",type:"danger",onClick:Ae},{default:o(()=>[k(s(e.$t("approve")),1)]),_:1})):(u(),w(q,{key:1,class:"create-btn",type:"danger",onClick:Ve,loading:O.value},{default:o(()=>[k(s(e.$t("createRedPacketBtn")),1)]),_:1},8,["loading"]))],64)):(u(),w(q,{key:1,class:"create-btn",type:"primary",onClick:ie},{default:o(()=>[k(s(e.$t("connectWallet")),1)]),_:1}))]),l("div",{class:"form-item history",onClick:a[13]||(a[13]=n=>h(le).push("/history"))},s(e.$t("redPacketHistory")),1)]),t(ae,{class:"help-dialog",show:D.value,"onUpdate:show":a[14]||(a[14]=n=>D.value=n),title:e.$t("rulesDescription"),"confirm-button-text":e.$t("understand"),"close-on-click-overlay":""},{default:o(()=>[l("div",fa,[l("div",null,s(e.$t("rulesDescription1")),1),l("div",null,s(e.$t("rulesDescription2")),1),l("div",null,s(e.$t("rulesDescription3")),1),l("div",null,s(e.$t("rulesDescription4")),1),l("div",null,s(e.$t("rulesDescription5",{chains:h(ce).join("/")})),1)])]),_:1},8,["show","title","confirm-button-text"]),t(ae,{class:"create-success-dialog",show:x.value,"onUpdate:show":a[16]||(a[16]=n=>x.value=n),"close-on-click-overlay":""},{footer:o(()=>[l("div",ka,[t(q,{class:"copy-btn",type:"primary",onClick:a[15]||(a[15]=n=>h(me)(X.value))},{default:o(()=>[k(s(e.$t("copyLink")),1)]),_:1})])]),default:o(()=>[l("div",pa,[l("div",ha,[t(T,{name:"createSuccess"})]),l("div",ga,s(e.$t("createRedPacketSuccess")),1),l("div",ba,s(e.$t("shareLink")),1)])]),_:1},8,["show"]),t(A,{show:F.value,"onUpdate:show":a[17]||(a[17]=n=>F.value=n),title:e.$t("switchLang"),actions:h(ge),closeable:!1,"cancel-text":e.$t("cancel"),"close-on-click-action":"",onSelect:be},null,8,["show","title","actions","cancel-text"]),t(Ye,{tradeVisable:y.value,"onUpdate:tradeVisable":a[18]||(a[18]=n=>y.value=n),status:$.value,tradeHash:U.value},null,8,["tradeVisable","status","tradeHash"]),t(ae,{class:"chain-err-dialog",confirmButtonText:e.$t("understand"),confirmButtonColor:"#3F80F7",show:Y.value,"onUpdate:show":a[19]||(a[19]=n=>Y.value=n)},{default:o(()=>[l("div",ya,[l("div",null,s(e.$t("notSupportedChain")),1),l("div",null,s(e.$t("pleaseSwitchTo",{chains:h(ce).join("\u3001")})),1)])]),_:1},8,["confirmButtonText","show"])],64)}}},Va=pe(_a,[["__scopeId","data-v-a7d0dc90"]]);export{Va as default};
