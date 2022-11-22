import{_ as re,r as k,o as r,c as b,w as d,a as n,t as l,b as y,d as N,F as Z,e as g,u as m,f as ye,g as s,h as _e,i as me,j as Ue,k as Ee,l as Ge,m as ze,n as v,p as qe,B as p,q as te,s as He,v as R,x as ae,T as D,y as Re,z as V,E as We,A as xe,C as je,D as ge,G as Me,H as Qe,I as Je,J as Ke}from"./index.2f7c2006.js";import{_ as S}from"./SvgIcon.c84426fa.js";const Oe={class:"title"},Xe={class:"body"},Ye={class:"status-text"},Ze={key:0},et={key:1},tt={key:2},at={key:3},nt={class:"status-icon"},ot={class:"tx"},lt={key:1,class:"trade-hash"},st={__name:"ChainTrade",props:{tradeVisable:{type:Boolean,default:!1},status:{type:Number,default:0},tradeHash:{type:String,default:""},message:{type:String,default:""}},emits:["update:tradeVisable"],setup(u,{emit:W}){return(o,i)=>{const P=k("van-loading"),L=k("van-icon"),U=k("van-popup");return r(),b(U,{class:"dialog",show:u.tradeVisable,"onUpdate:show":i[1]||(i[1]=C=>me(tradeVisable)?tradeVisable.value=C:null),round:"","close-on-click-overlay":!1},{default:d(()=>[n("div",Oe,l(o.$t("transactionDetails")),1),n("div",Xe,[n("div",Ye,[u.status!=0?(r(),y(Z,{key:0},[u.status==1?(r(),y("div",Ze,l(o.$t("sendingTransactionToBlockchain")),1)):u.status==2?(r(),y("div",et,l(o.$t("waitingForServiceSyncronizing")),1)):u.status==-1?(r(),y("div",tt,l(u.message?u.message:o.$t("sendTransactionToBlockchainFailed")),1)):u.status==-2?(r(),y("div",at,l(o.$t("servicesyncronizingTimeout")),1)):N("",!0)],64)):N("",!0)]),n("div",nt,[u.status==1||u.status==2?(r(),b(P,{key:0,type:"spinner",size:"48px"})):u.status==0?(r(),b(L,{key:1,color:"#07c160",size:"40px",name:"checked"})):u.status==-1||u.status==-2?(r(),b(L,{key:2,color:"#FA5151",size:"40px",name:"clear"})):N("",!0)]),u.tradeHash?(r(),y("div",{key:0,class:"trade-hash",onClick:i[0]||(i[0]=C=>m(_e)(u.tradeHash))},[g(l(o.$t("txHash"))+": ",1),n("span",ot,l(m(ye)(u.tradeHash)),1),s(S,{name:"copy"})])):(r(),y("div",lt,l(o.$t("txHash"))+": N/A",1))])]),_:1},8,["show"])}}},it=re(st,[["__scopeId","data-v-a044feca"]]);const ct={class:"confirm-main"},ut={class:"title"},dt={class:"content"},rt={class:"content-item"},mt={class:"item-title"},vt={class:"item-content"},ft={class:"content-item"},kt={class:"item-title"},pt={class:"item-content"},ht={class:"content-item"},gt={class:"item-title"},yt={class:"item-content"},_t={class:"content-item"},bt={class:"item-title"},wt={class:"item-content"},$t={class:"content-item"},Ct={class:"item-title"},At={class:"item-content"},St={__name:"CreateConfirm",props:{visable:{type:Boolean,default:!1},kind:{type:Number,default:0},gas:{type:String,default:""},baseFee:{type:String,default:""},quantity:{type:Number,default:0},totalAmount:{type:Number,default:0},symbol:{type:String,default:""},tokenIcon:{type:String,default:""}},emits:["update:visable","confirm"],setup(u,{emit:W}){function o(){W("confirm")}return(i,P)=>{const L=k("van-icon"),U=k("van-button"),C=k("van-popup");return r(),b(C,{show:u.visable,"onUpdate:show":P[0]||(P[0]=B=>me(visable)?visable.value=B:null),round:"","close-on-click-overlay":!1,closeable:""},{default:d(()=>[n("div",ct,[n("div",ut,l(i.$t("redPacketConfirm")),1),n("ul",dt,[n("li",rt,[n("div",mt,l(i.$t("redPacketKind")),1),n("div",vt,[u.kind==0?(r(),y(Z,{key:0},[s(S,{name:"pin"}),g(" "+l(i.$t("randomAmount")),1)],64)):(r(),y(Z,{key:1},[s(S,{name:"pu"}),g(" "+l(i.$t("identicalAmount")),1)],64))])]),n("li",ft,[n("div",kt,l(i.$t("redPacketQuantity")),1),n("div",pt,l(u.quantity),1)]),n("li",ht,[n("div",gt,l(i.$t("tokenQuantity")),1),n("div",yt,[u.tokenIcon?(r(),b(L,{key:0,class:"chain-icon",name:u.tokenIcon},null,8,["name"])):N("",!0),g(" "+l(u.totalAmount+" "+u.symbol),1)])]),n("li",_t,[n("div",bt,l(i.$t("estimateGas")),1),n("div",wt,l(u.gas)+" BNB",1)]),n("li",$t,[n("div",Ct,l(i.$t("serviceFee")),1),n("div",At,l(u.baseFee)+" BNB",1)])]),s(U,{class:"confirm",onClick:o},{default:d(()=>[g(l(i.$t("confirmAndSubmit")),1)]),_:1})])]),_:1},8,["show"])}}},Pt=re(St,[["__scopeId","data-v-d3e1b1af"]]);const Ft=u=>(Je("data-v-627f91bd"),u=u(),Ke(),u),It={class:"body"},Vt={class:"tools-bar"},Lt={key:0,class:"address"},Bt={class:"address-text"},Tt={style:{"margin-left":"4px"}},Dt={class:"tools"},Nt={class:"token-box"},Ut={key:2,class:"amount"},Et={style:{"margin-left":"4px"}},Gt=Ft(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-redPacket"})],-1)),zt={key:0,class:"image-box"},qt={key:0},Ht={class:"form-item total-amount"},Rt={class:"form-item create"},Wt={class:"content"},xt={class:"content"},jt={class:"success-icon"},Mt={class:"title"},Qt={class:"text"},Jt={class:"btn"},Kt={class:"content"},Ot={__name:"Index",setup(u){const W=Ue(),o=Ee(),{t:i}=Ge(),P=ze("global"),L=v(!1),U=v(!1),C=v(!1),B=v(0),x=v(""),j=v(""),E=v("");v("");const ne=v(""),M=v(""),oe=v(null),Q=v("");v(0),v(0);const t=qe({kind:0,totalAmount:0,quantity:0,deadline:0,profilePicture:null,title:"",remark:"",tokenChain:"",tokenAddress:"",tokenSymbol:"",tokenIcon:"",amount:p(0),minFee:p(0),baseFee:p(0),gasPrice:p(0),unlockGasAmount:p(0),lockGasLimit:p(0),showGas:"",lockGasAmount:p(0),allFee:p(0),walletAddress:"",redPacketContractAddress:"",redPacketContract:null}),J=v(!1);console.log(o.chainId);function le(){return B.value==0?x.value?p(Number(x.value)).toNumber():0:j.value&&E.value?p(Number(j.value)).multipliedBy(Number(E.value)).toNumber():0}const be=te(()=>{let e=le();return e||"0.00"}),A=v(!1),F=v(0),G=v(""),se=v(""),K=v(!1),ee=v(!1),ie=v(""),ce=v(!1),we=te(()=>[{name:i("languages.zh-cn"),value:"zh-cn",color:o.language==="zh-cn"?"#3F80F7":"#323233"},{name:i("languages.en"),value:"en",color:o.language==="en"?"#3F80F7":"#323233"}]);function $e(e){o.setLanguage(e.value)}const O=v(!1),Ce=te(()=>[{text:i("deadlineList.300"),value:300},{text:i("deadlineList.600"),value:600},{text:i("deadlineList.1800"),value:1800},{text:i("deadlineList.3600"),value:3600},{text:i("deadlineList.43200"),value:43200},{text:i("deadlineList.86400"),value:86400}]),ue=v(300),de=te(()=>i("deadlineList."+ue.value));function Ae(e){ue.value=e.value,O.value=!1}function Se(e,a){console.log(e),Pe(e)}function Pe(e,a){let f=new FileReader;f.readAsDataURL(e),f.onloadend=function(h){let z=h.target.result,_=new Image;_.src=z,_.onload=function(){let $=Qe(_,e.name,e.type);console.log($),M.value=$.base64Data,oe.value=$.fileData}}}function Fe(){console.log(111),M.value="",oe.value=null}async function ve(){await o.connectWallet()}function Ie(){return P.cfg.allowChainList.map(a=>a.chainId).includes(o.chainId)?!0:(ce.value=!0,!1)}async function Ve(){A.value=!1,G.value="",F.value=1,A.value=!0;try{let e=await R.wallet.approveMaxAmount(o.token.address,o.redPacketContractAddress);console.log(e),G.value=e.hash,await e.wait(),C.value=!1,F.value=0}catch(e){console.log(e),F.value=-1,await ae(2e3)}finally{A.value=!1}}async function fe(){await R.wallet.isAllowanceEnough(o.redPacketContractAddress,o.token.address,o.walletAddress)?C.value=!1:C.value=!0}async function Le(){K.value=!0,A.value=!1,G.value="",ee.value=!1,ie.value="",J.value=!1;try{if(!o.token){D.fail(i("pleaseSelectToken"));return}if(B.value==0){if(!x.value){D.fail(i("pleaseEnterTotalAmount"));return}}else if(!j.value){D.fail(i("pleaseEnterSingleAmount"));return}if(!E.value){D.fail(i("pleaseEnterQuantity"));return}let e=le();if(Q.value||(Q.value=i("bestWishes")),await o.connectWallet(),!Ie())return;let f=P.cfg.allowChainList.find(h=>h.chain==o.token.chain);if(!f){D.fail(i("tokenChainNotSupport"));return}if(o.chainId!=f.chainId){D.fail(i("switchTokenChain"));return}if(e>o.token.amount){D.fail(i("blanceSlow"));return}if(await fe(),C.value){D.fail(i("approveFirst"));return}await Be()}catch(e){console.dir(e)}finally{K.value=!1}}async function Be(){console.log("createRedPacket"),t.kind=B.value,t.totalAmount=le(),t.quantity=Number(E.value),t.deadline=ue.value,t.profilePicture=oe.value,t.title=ne.value,t.remark=Q.value,t.tokenChain=o.token.chain,t.tokenAddress=o.token.address,t.tokenSymbol=o.token.symbol,t.tokenIcon=o.token.icon,t.amount=p(0),t.minFee=p(0),t.baseFee=p(0),t.gasPrice=p(0),t.unlockGasAmount=p(0),t.showGas="",t.showBaseFee="",t.lockGasLimit=p(0),t.lockGasAmount=p(0),t.allFee=p(0),t.walletAddress=o.walletAddress,t.redPacketContractAddress=o.redPacketContractAddress,t.redPacketContract=null;const e=R.wallet.getEthersProvider(),a=R.wallet.contractByProvider(e,t.redPacketContractAddress,Re);t.redPacketContract=a;const f=await a.minFee();console.log("minFee"),console.log(V(f)),t.minFee=f;const h=await a.baseFee();console.log("baseFee"),console.log(V(h)),t.baseFee=h,t.showBaseFee=V(h).toString();const _=await R.wallet.contractByProvider(e,t.tokenAddress,We).decimals();console.log("decimals"),console.log(_),t.amount=xe(t.totalAmount.toString(),_),console.log(V(t.amount));let $=[],w=[],I=0;for(let H=0;H<t.quantity;H++)$.push("0x60f5D34F9D419fC274C84d477Ea2E6051bA7cd16"),t.kind==0&&w.push(t.amount.div(t.quantity).toString());t.kind==1&&(I=t.amount.div(t.quantity).toString());const X=await a.estimateGas.estimateUnlock(0,$,w,I,t.tokenAddress,t.amount.toString(),t.kind);console.log("estimateUnlockGas"),console.log(V(X));const q=await e.getGasPrice();console.log("gasPrice"),console.log(V(q));let Y=X.mul(q).mul(2).add(h).gt(f)?X.mul(q).mul(2).add(h):f;console.log("unlock"),console.log(V(Y)),t.unlockGasAmount=Y;const T=(await a.estimateGas.lock(t.walletAddress,t.tokenAddress,t.amount.toString(),t.deadline,t.quantity,t.kind,{value:Y.toString()})).mul(2);console.log("gasLimit"),console.log(V(T)),t.gasLimit=T,t.showGas=V(T.mul(q)).toString(),J.value=!0}async function Te(){J.value=!1,F.value=1,A.value=!0;let e;try{let a=await t.redPacketContract.lock(t.walletAddress,t.tokenAddress,t.amount.toString(),t.deadline,t.quantity,t.kind,{value:t.unlockGasAmount.toString(),gasLimit:t.gasLimit.toString()});console.dir(a),G.value=a.hash,e=await a.wait(),console.dir(e),G.value=e.transactionHash}catch(a){console.dir(a),a.code=="ACTION_REJECTED"&&(se.value=i("actionRejected")),F.value=-1,await ae(1e3),A.value=!1,se.value="",K.value=!1;return}F.value=2;try{let a=e==null?void 0:e.events,f={};for(let _=a.length-1;_>=0;_--){let $=a[_].topics.some(w=>w==="0x694af1cc8727cdd0afbdd53d9b87b69248bd490224e9dd090e788546506e076f");if(a[_].address==o.redPacketContractAddress&&$){f=a[_];break}}let h=await R.redPacket.send(t.tokenAddress,t.tokenChain,f.topics[1],e.transactionHash,t.deadline,t.profilePicture,t.remark,t.tokenSymbol,t.title);console.dir(h),F.value=0,await ae(500),A.value=!1;const z=h.data.uuid;ee.value=!0,ie.value=window.location.origin+"/#/redpacket/"+z}catch(a){console.dir(a),F.value=-1,await ae(1e3),A.value=!1,K.value=!1}}const ke=P.cfg.allowChainList.map(e=>e.chainShow);function pe(e){const a=P.cfg.allowChainList.find(h=>h.chainId==e);let f;return a?f=a.chain:f=null,f}function De(){W.push("/selectToken")}function he(e){return console.log(e),e&&e.replace("-","").replace(/^(.*\..{6}).*$/,"$1")}return He(()=>{console.log("onMounted"),o.isConnectWallet&&o.token&&fe()}),(e,a)=>{const f=k("van-icon"),h=k("van-radio"),z=k("van-radio-group"),_=k("van-image"),$=k("van-cell"),w=k("van-cell-group"),I=k("van-field"),X=k("van-picker"),q=k("van-popup"),Y=k("van-uploader"),T=k("van-button"),H=k("van-dialog"),Ne=k("van-action-sheet");return r(),y(Z,null,[n("div",It,[n("div",Vt,[m(o).isConnectWallet?(r(),y("div",Lt,[pe(m(o).chainId)?(r(),b(f,{key:0,class:"chain-icon",name:m(je)(pe(m(o).chainId))},null,8,["name"])):(r(),b(S,{key:1,class:"chain-icon",name:"wallet"})),n("div",Bt,l(m(ye)(m(o).walletAddress)),1)])):(r(),y("div",{key:1,class:"address",onClick:ve},[s(S,{name:"wallet"}),n("div",Tt,l(e.$t("pleaseConnectWallet")),1)])),n("div",Dt,[s(S,{name:"language",onClick:a[0]||(a[0]=c=>U.value=!0)}),s(S,{name:"help",onClick:a[1]||(a[1]=c=>L.value=!0)})])]),s(z,{modelValue:B.value,"onUpdate:modelValue":a[2]||(a[2]=c=>B.value=c),direction:"horizontal",class:"type form-item"},{default:d(()=>[s(h,{name:0,"checked-color":"#ED4A4A","icon-size":"16px"},{default:d(()=>[g(l(e.$t("randomAmount")),1)]),_:1}),s(h,{name:1,"checked-color":"#ED4A4A","icon-size":"16px"},{default:d(()=>[g(l(e.$t("identicalAmount")),1)]),_:1})]),_:1},8,["modelValue"]),s(w,{inset:"",class:"form-item form-normal"},{default:d(()=>[s($,{title:e.$t("token"),"is-link":"",onClick:De},ge({_:2},[m(o).token?{name:"value",fn:d(()=>[n("div",Nt,[m(o).token.icon?(r(),b(_,{key:0,class:"token-icon",round:"",src:m(o).token.icon,"error-icon":"/public/assets/images/default.png"},null,8,["src"])):N("",!0),g(" "+l(m(o).token.symbol),1)])]),key:"0"}:void 0]),1032,["title"])]),_:1}),B.value==0?(r(),b(w,{key:0,inset:"",class:"form-item form-normal"},{default:d(()=>[s(I,{label:e.$t("totalAmount"),"input-align":"right",formatter:he,maxlength:"10",placeholder:e.$t("enterAmount"),type:"number",modelValue:x.value,"onUpdate:modelValue":a[3]||(a[3]=c=>x.value=c)},{"left-icon":d(()=>[s(S,{name:"pin"})]),_:1},8,["label","placeholder","modelValue"])]),_:1})):(r(),b(w,{key:1,inset:"",class:"form-item form-normal"},{default:d(()=>[s(I,{label:e.$t("singleAmount"),"input-align":"right",formatter:he,maxlength:"10",placeholder:e.$t("enterAmount"),type:"number",modelValue:j.value,"onUpdate:modelValue":a[4]||(a[4]=c=>j.value=c)},{"left-icon":d(()=>[s(S,{name:"pu"})]),_:1},8,["label","placeholder","modelValue"])]),_:1})),m(o).token?(r(),y("div",Ut,[g(l(e.$t("availableBalance")),1),n("span",Et,l(m(o).token.amount+" "+m(o).token.symbol),1)])):N("",!0),s(w,{inset:"",class:"form-item form-normal"},{default:d(()=>[s(I,{label:e.$t("quantity"),"input-align":"right",placeholder:e.$t("enterNumber"),type:"digit",maxlength:"3",modelValue:E.value,"onUpdate:modelValue":a[5]||(a[5]=c=>E.value=c)},ge({"left-icon":d(()=>[Gt]),_:2},[m(o).language=="zh-cn"?{name:"right-icon",fn:d(()=>[g("\u4E2A")]),key:"0"}:void 0]),1032,["label","placeholder","modelValue"])]),_:1}),s(w,{inset:"",class:"form-item form-normal"},{default:d(()=>[s(I,{modelValue:m(de),"onUpdate:modelValue":a[6]||(a[6]=c=>me(de)?de.value=c:null),"is-link":"",readonly:"",name:"picker",label:e.$t("deadline"),onClick:a[7]||(a[7]=c=>O.value=!0),"input-align":"right"},null,8,["modelValue","label"]),s(q,{show:O.value,"onUpdate:show":a[9]||(a[9]=c=>O.value=c),position:"bottom"},{default:d(()=>[s(X,{columns:m(Ce),onCancel:a[8]||(a[8]=c=>O.value=!1),onConfirm:Ae,title:e.$t("settingDeadline"),"confirm-button-text":e.$t("confirm"),"cancel-button-text":e.$t("cancel")},null,8,["columns","title","confirm-button-text","cancel-button-text"])]),_:1},8,["show"])]),_:1}),s(w,{inset:"",class:"form-item form-normal form-uploader"},{default:d(()=>[M.value?(r(),y("div",zt,[s(_,{class:"image",fit:"contain",src:M.value},null,8,["src"]),s(f,{onClick:a[10]||(a[10]=Me(c=>Fe(),["stop"])),class:"close",name:"cross"})])):N("",!0),s(Y,{class:"uploader-box","before-read":Se,"max-size":1024*1024,"preview-image":!1,accept:"image/*"},{default:d(()=>[s($,{class:"uploader-content","is-link":"",title:e.$t("redPacketCover")},{value:d(()=>[M.value?N("",!0):(r(),y("div",qt,l(e.$t("selectPicture")),1))]),_:1},8,["title"])]),_:1})]),_:1}),s(w,{inset:"",class:"form-item"},{default:d(()=>[s(I,{modelValue:Q.value,"onUpdate:modelValue":a[11]||(a[11]=c=>Q.value=c),rows:"1",autosize:"",type:"textarea",maxlength:"20",placeholder:e.$t("bestWishes"),"show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1}),s(w,{inset:"",class:"form-item"},{default:d(()=>[s(I,{modelValue:ne.value,"onUpdate:modelValue":a[12]||(a[12]=c=>ne.value=c),rows:"2",autosize:"",type:"textarea",maxlength:"500",placeholder:e.$t("ActivityDescription")},null,8,["modelValue","placeholder"])]),_:1}),n("div",Ht,[g(l(e.$t("redPacketTotalAmount")),1),n("span",null,l(m(be)),1),g(l(m(o).token?m(o).token.symbol:""),1)]),n("div",Rt,[m(o).isConnectWallet?(r(),y(Z,{key:0},[C.value?(r(),b(T,{key:0,class:"create-btn",type:"danger",onClick:Ve},{default:d(()=>[g(l(e.$t("approve")),1)]),_:1})):(r(),b(T,{key:1,class:"create-btn",type:"danger",onClick:Le,loading:K.value},{default:d(()=>[g(l(e.$t("createRedPacketBtn")),1)]),_:1},8,["loading"]))],64)):(r(),b(T,{key:1,class:"create-btn",type:"primary",onClick:ve},{default:d(()=>[g(l(e.$t("connectWallet")),1)]),_:1}))]),n("div",{class:"form-item history",onClick:a[13]||(a[13]=c=>m(W).push("/history"))},l(e.$t("redPacketHistory")),1)]),s(H,{class:"help-dialog",show:L.value,"onUpdate:show":a[14]||(a[14]=c=>L.value=c),title:e.$t("rulesDescription"),"confirm-button-text":e.$t("understand"),"close-on-click-overlay":""},{default:d(()=>[n("div",Wt,[n("div",null,l(e.$t("rulesDescription1")),1),n("div",null,l(e.$t("rulesDescription2")),1),n("div",null,l(e.$t("rulesDescription3")),1),n("div",null,l(e.$t("rulesDescription4")),1),n("div",null,l(e.$t("rulesDescription5",{chains:m(ke).join("/")})),1),n("div",null,l(e.$t("rulesDescription6")),1)])]),_:1},8,["show","title","confirm-button-text"]),s(H,{class:"create-success-dialog",show:ee.value,"onUpdate:show":a[16]||(a[16]=c=>ee.value=c),"close-on-click-overlay":""},{footer:d(()=>[n("div",Jt,[s(T,{class:"copy-btn",type:"primary",onClick:a[15]||(a[15]=c=>m(_e)(ie.value))},{default:d(()=>[g(l(e.$t("copyLink")),1)]),_:1})])]),default:d(()=>[n("div",xt,[n("div",jt,[s(S,{name:"createSuccess"})]),n("div",Mt,l(e.$t("createRedPacketSuccess")),1),n("div",Qt,l(e.$t("shareLink")),1)])]),_:1},8,["show"]),s(Ne,{show:U.value,"onUpdate:show":a[17]||(a[17]=c=>U.value=c),title:e.$t("switchLang"),actions:m(we),closeable:!1,"cancel-text":e.$t("cancel"),"close-on-click-action":"",onSelect:$e},null,8,["show","title","actions","cancel-text"]),s(it,{tradeVisable:A.value,"onUpdate:tradeVisable":a[18]||(a[18]=c=>A.value=c),status:F.value,tradeHash:G.value,message:se.value},null,8,["tradeVisable","status","tradeHash","message"]),s(H,{class:"chain-err-dialog",confirmButtonText:e.$t("understand"),confirmButtonColor:"#3F80F7",show:ce.value,"onUpdate:show":a[19]||(a[19]=c=>ce.value=c)},{default:d(()=>[n("div",Kt,[n("div",null,l(e.$t("notSupportedChain")),1),n("div",null,l(e.$t("pleaseSwitchTo",{chains:m(ke).join("\u3001")})),1)])]),_:1},8,["confirmButtonText","show"]),s(Pt,{visable:J.value,"onUpdate:visable":a[20]||(a[20]=c=>J.value=c),kind:t.kind,quantity:t.quantity,totalAmount:t.totalAmount,symbol:t.tokenSymbol,tokenIcon:t.tokenIcon,gas:t.showGas,baseFee:t.showBaseFee,onConfirm:Te},null,8,["visable","kind","quantity","totalAmount","symbol","tokenIcon","gas","baseFee"])],64)}}},Zt=re(Ot,[["__scopeId","data-v-627f91bd"]]);export{Zt as default};
