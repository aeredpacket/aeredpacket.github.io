import{r as p,o as i,c as w,w as s,a as n,b as h,d as ee,F as M,e as b,t as o,u as _,f as re,g as l,h as ve,i as xe,p as me,j as pe,k as Te,l as De,m as Ne,n as Ue,q as c,s as te,v as ce,x as R,y as J,T as B,B as ae,z as Be,A as ze,C as He}from"./index.944eba06.js";import{_ as S}from"./TokenIcon.vuevuetypestyleindex0scoped7bbb7138lang.fec3cb16.js";import{_ as fe}from"./plugin-vueexport-helper.2444895f.js";const Fe=u=>(me("data-v-4d8c2315"),u=u(),pe(),u),Ee=Fe(()=>n("div",{class:"title"},"\u4EA4\u6613\u8BE6\u60C5",-1)),Re={class:"body"},We={class:"status-text"},je={key:0},qe={key:1},Je={key:2},Me={key:3},Qe={class:"status-icon"},Ge={class:"tx"},Ke={key:1,class:"trade-hash"},Oe={__name:"ChainTrade",props:{tradeVisable:{type:Boolean,default:!1},status:{type:Number,default:0},tradeHash:{type:String,default:""}},emits:["update:tradeVisable"],setup(u,{emit:le}){return(v,r)=>{const z=p("van-loading"),x=p("van-icon"),H=p("van-popup");return i(),w(H,{class:"dialog",show:u.tradeVisable,"onUpdate:show":r[1]||(r[1]=C=>xe(tradeVisable)?tradeVisable.value=C:null),round:"","close-on-click-overlay":!1},{default:s(()=>[Ee,n("div",Re,[n("div",We,[u.status!=0?(i(),h(M,{key:0},[u.status==1?(i(),h("div",je,"\u53D1\u9001\u4EA4\u6613\u5230\u533A\u5757\u94FE\u2026")):u.status==2?(i(),h("div",qe,"\u7B49\u5F85\u670D\u52A1\u5668\u540C\u6B65...")):u.status==-1?(i(),h("div",Je,"\u4E0A\u94FE\u4EA4\u6613\u53D1\u9001\u5931\u8D25")):u.status==-2?(i(),h("div",Me,"\u670D\u52A1\u5668\u540C\u6B65\u8D85\u65F6")):ee("",!0)],64)):ee("",!0)]),n("div",Qe,[u.status==1||u.status==2?(i(),w(z,{key:0,type:"spinner",size:"48px"})):u.status==0?(i(),w(x,{key:1,color:"#07c160",size:"40px",name:"checked"})):u.status==-1||u.status==-2?(i(),w(x,{key:2,color:"#FA5151",size:"40px",name:"clear"})):ee("",!0)]),u.tradeHash?(i(),h("div",{key:0,class:"trade-hash",onClick:r[0]||(r[0]=C=>_(ve)(u.tradeHash))},[b("\u4EA4\u6613Hash: "),n("span",Ge,o(_(re)(u.tradeHash)),1),l(S,{name:"copy"})])):(i(),h("div",Ke,"\u4EA4\u6613Hash: N/A"))])]),_:1},8,["show"])}}},Xe=fe(Oe,[["__scopeId","data-v-4d8c2315"]]);const Ye=u=>(me("data-v-9baa86a4"),u=u(),pe(),u),Ze={class:"body"},et={class:"tools-bar"},tt={key:0,class:"address"},at={class:"address-text"},lt={class:"tools"},nt={class:"token"},st={class:"token-symbol"},ot={class:"amount"},it={style:{"margin-left":"4px"}},ut=Ye(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-redPacket"})],-1)),dt={key:0},ct={key:1,class:"image-box"},rt={class:"form-item total-amount"},vt={class:"form-item create"},mt={class:"content"},pt={class:"content"},ft={class:"success-icon"},ht={class:"title"},gt={class:"text"},bt={class:"btn"},_t={class:"content"},kt={__name:"Index",setup(u){const le=Te(),v=De(),{t:r}=Ne(),z=Ue("global"),x=c(!1),H=c(!1),C=c(!1),W=c(!1),L=c(0),T=c(""),D=c(""),I=c("");c("");const Q=c(""),G=c(""),ne=c(null),F=c("");console.log(z.cfg);const he=te(()=>L.value==0?T.value?T.value:"0.00":D.value&&I.value?ae(Number(D.value)).multipliedBy(Number(I.value)).toNumber().toString():"0.00"),k=c(!1),$=c(0),N=c(""),K=c(!1),j=c(!1),O=c(""),X=c(!1),ge=te(()=>[{name:r("languages.zh-cn"),value:"zh-cn",color:v.language==="zh-cn"?"#9505F9":"#323233"},{name:r("languages.en"),value:"en",color:v.language==="en"?"#9505F9":"#323233"}]);function be(e){v.setLanguage(e.value)}const se=c([]),d=ce({symbol:"",icon:"",amount:0,address:"",chain:"",chainId:-1}),E=c(!1),_e=te(()=>[{text:r("deadlineList.300"),value:300},{text:r("deadlineList.600"),value:600},{text:r("deadlineList.1800"),value:1800},{text:r("deadlineList.3600"),value:3600},{text:r("deadlineList.43200"),value:43200},{text:r("deadlineList.86400"),value:86400}]),U=ce({text:r("deadlineList.300"),value:300});function ke(e,t){console.log(e),ye(e)}function ye(e,t){let g=new FileReader;g.readAsDataURL(e),g.onloadend=function(m){let P=m.target.result,y=new Image;y.src=P,y.onload=function(){let f=He(y,e.name,e.type);console.log(f),G.value=f.base64Data,ne.value=f.fileData}}}function we(e){U.text=e.text,U.value=e.value,E.value=!1}async function $e(){v.chainId;{se.value=[{symbol:"JF",icon:"https://static.debank.com/image/bsc_token/logo_url/0x5fac926bf1e638944bb16fb5b787b5ba4bc85b0a/74d0d0f5a5fcf76ab35b89b29cb9c95e.png",amount:9999999,address:"0x227A05695F10B591731Fd925396b548a45067798",chain:"bsc",chainId:97}];return}}function Ce(e){d.symbol=e.symbol,d.icon=e.icon,d.amount=e.amount,d.address=e.address,d.chain=e.chain,d.chainId=e.chainId,W.value=!1}async function oe(){await v.connectWallet(),await ue()}function ie(){return z.cfg.allowChainList.map(t=>t.chainId).includes(v.chainId)?!0:(X.value=!0,!1)}async function Ae(){k.value=!1,N.value="",$.value=1,k.value=!0;try{let e=await R.wallet.approveMaxAmount(d.address,v.redPacketContractAddress);console.log(e),C.value=!1,N.value=e.hash,$.value=0}catch{$.value=-1,await J(2e3)}finally{k.value=!1}}async function ue(){await R.wallet.isAllowanceEnough(v.redPacketContractAddress,d.address,v.walletAddress)?C.value=!1:C.value=!0}async function Ve(){K.value=!0,await Se(),K.value=!1}async function Se(){if(console.log("createRedPacket"),k.value=!1,N.value="",j.value=!1,O.value="",!d.address){B.fail(r("pleaseSelectToken"));return}if(L.value==0){if(!T.value){B.fail(r("pleaseEnterTotalAmount"));return}}else if(!D.value){B.fail(r("pleaseEnterSingleAmount"));return}if(!I.value){B.fail(r("pleaseEnterQuantity"));return}let e;if(L.value==0?e=ae(Number(T.value)).toNumber():e=ae(Number(D.value)).multipliedBy(Number(I.value)).toNumber(),F.value||(F.value=r("bestWishes")),await v.connectWallet(),!ie())return;if(v.chainId!=d.chainId){B("\u7F51\u7EDC\u9519\u8BEF,\u8BF7\u5207\u6362\u81F3\u5E01\u79CD\u7684\u7F51\u7EDC");try{await R.wallet.switchNetwork(d.chainId)}catch(m){console.log(m);return}return}if(await ue(),C.value){B.fail("\u8BF7\u5148Approve");return}$.value=1,k.value=!0;let g;try{let m=await R.wallet.sendRedPacket(v.redPacketContractAddress,d.address,L.value,e.toString(),I.value,U.value);console.dir(m),N.value=m.hash,g=await m.wait(),console.dir(g),N.value=g.transactionHash}catch(m){console.log(m),$.value=-1,await J(1e3),k.value=!1;return}$.value=2;try{let m=g==null?void 0:g.events,P={};for(let A=m.length-1;A>=0;A--){let V=m[A].topics.some(Y=>Y==="0x694af1cc8727cdd0afbdd53d9b87b69248bd490224e9dd090e788546506e076f");if(m[A].address==v.redPacketContractAddress&&V){P=m[A];break}}let y=await R.redPacket.send(d.address,d.chain,P.topics[1],g.transactionHash,U.value,ne.value,F.value,d.symbol,Q.value);console.dir(y),$.value=0,await J(500),k.value=!1;const f=y.data.uuid;j.value=!0,O.value=window.location.origin+"/redpacket/"+f}catch(m){console.log(m),$.value=-1,await J(1e3),k.value=!1}}v.isConnectWallet&&(ie(),$e());const de=z.cfg.allowChainList.map(e=>e.chainShow);return(e,t)=>{const g=p("van-radio"),m=p("van-radio-group"),P=p("van-icon"),y=p("van-cell"),f=p("van-cell-group"),A=p("van-action-sheet"),V=p("van-field"),Y=p("van-picker"),Le=p("van-popup"),Ie=p("van-image"),Pe=p("van-uploader"),q=p("van-button"),Z=p("van-dialog");return i(),h(M,null,[n("div",Ze,[n("div",et,[_(v).isConnectWallet?(i(),h("div",tt,[l(S,{name:"mbox"}),n("div",at,o(_(re)(_(v).walletAddress)),1)])):(i(),h("div",{key:1,class:"address",onClick:oe},[l(S,{name:"wallet"}),n("div",null,o(e.$t("pleaseConnectWallet")),1)])),n("div",lt,[l(S,{name:"language",onClick:t[0]||(t[0]=a=>H.value=!0)}),l(S,{name:"help",onClick:t[1]||(t[1]=a=>x.value=!0)})])]),l(m,{modelValue:L.value,"onUpdate:modelValue":t[2]||(t[2]=a=>L.value=a),direction:"horizontal",class:"type form-item"},{default:s(()=>[l(g,{name:0,"checked-color":"#ED4A4A","icon-size":"16px"},{default:s(()=>[b(o(e.$t("randomAmount")),1)]),_:1}),l(g,{name:1,"checked-color":"#ED4A4A","icon-size":"16px"},{default:s(()=>[b(o(e.$t("identicalAmount")),1)]),_:1})]),_:1},8,["modelValue"]),l(f,{inset:"",class:"form-item form-normal"},{default:s(()=>[l(y,{title:e.$t("token"),"is-link":"",onClick:t[3]||(t[3]=a=>W.value=!0)},Be({_:2},[d.address?{name:"value",fn:s(()=>[n("div",null,[l(P,{name:d.icon},null,8,["name"]),b(" "+o(d.symbol),1)])]),key:"0"}:void 0]),1032,["title"]),l(A,{show:W.value,"onUpdate:show":t[4]||(t[4]=a=>W.value=a),title:e.$t("settingToken")},{default:s(()=>[n("div",nt,[l(f,{inset:""},{default:s(()=>[(i(!0),h(M,null,ze(se.value,a=>(i(),w(y,{key:a.address,clickable:"",onClick:yt=>Ce(a)},{title:s(()=>[n("div",st,[l(P,{class:"symbol-icon",name:d.icon},null,8,["name"]),n("span",null,o(a.symbol),1)])]),value:s(()=>[n("div",null,[n("span",null,o(e.$t("balance"))+": "+o(a.amount),1),b("\xA0\xA0 ")])]),_:2},1032,["onClick"]))),128))]),_:1})])]),_:1},8,["show","title"])]),_:1}),L.value==0?(i(),w(f,{key:0,inset:"",class:"form-item form-normal"},{default:s(()=>[l(V,{label:e.$t("totalAmount"),"input-align":"right",placeholder:e.$t("enterAmount"),type:"number",modelValue:T.value,"onUpdate:modelValue":t[5]||(t[5]=a=>T.value=a)},{"left-icon":s(()=>[l(S,{name:"pin"})]),_:1},8,["label","placeholder","modelValue"])]),_:1})):(i(),w(f,{key:1,inset:"",class:"form-item form-normal"},{default:s(()=>[l(V,{label:e.$t("singleAmount"),"input-align":"right",placeholder:e.$t("enterAmount"),type:"number",modelValue:D.value,"onUpdate:modelValue":t[6]||(t[6]=a=>D.value=a)},{"left-icon":s(()=>[l(S,{name:"pu"})]),_:1},8,["label","placeholder","modelValue"])]),_:1})),n("div",ot,[b(o(e.$t("availableBalance")),1),n("span",it,o(d.amount+" "+d.symbol),1)]),l(f,{inset:"",class:"form-item form-normal"},{default:s(()=>[l(V,{label:e.$t("quantity"),"input-align":"right",placeholder:e.$t("enterNumber"),type:"digit",modelValue:I.value,"onUpdate:modelValue":t[7]||(t[7]=a=>I.value=a)},{"left-icon":s(()=>[ut]),"right-icon":s(()=>[b("\u4E2A")]),_:1},8,["label","placeholder","modelValue"])]),_:1}),l(f,{inset:"",class:"form-item form-normal"},{default:s(()=>[l(V,{modelValue:U.text,"onUpdate:modelValue":t[8]||(t[8]=a=>U.text=a),"is-link":"",readonly:"",name:"picker",label:e.$t("deadline"),onClick:t[9]||(t[9]=a=>E.value=!0),"input-align":"right"},null,8,["modelValue","label"]),l(Le,{show:E.value,"onUpdate:show":t[11]||(t[11]=a=>E.value=a),position:"bottom"},{default:s(()=>[l(Y,{columns:_(_e),onCancel:t[10]||(t[10]=a=>E.value=!1),onConfirm:we,title:e.$t("settingDeadline"),"confirm-button-text":e.$t("confirm"),"cancel-button-text":e.$t("cancel")},null,8,["columns","title","confirm-button-text","cancel-button-text"])]),_:1},8,["show"])]),_:1}),l(f,{inset:"",class:"form-item form-normal"},{default:s(()=>[l(Pe,{class:"uploader-box","before-read":ke,"max-size":1024*1024,"preview-image":!1,accept:"image/*"},{default:s(()=>[l(y,{class:"uploader-content","is-link":"",title:e.$t("redPacketCover")},{value:s(()=>[G.value?(i(),h("div",ct,[l(Ie,{class:"image",fit:"contain",src:G.value},null,8,["src"])])):(i(),h("div",dt,o(e.$t("selectPicture")),1))]),_:1},8,["title"])]),_:1})]),_:1}),l(f,{inset:"",class:"form-item"},{default:s(()=>[l(V,{modelValue:F.value,"onUpdate:modelValue":t[12]||(t[12]=a=>F.value=a),rows:"1",autosize:"",type:"textarea",maxlength:"20",placeholder:e.$t("bestWishes"),"show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1}),l(f,{inset:"",class:"form-item"},{default:s(()=>[l(V,{modelValue:Q.value,"onUpdate:modelValue":t[13]||(t[13]=a=>Q.value=a),rows:"2",autosize:"",type:"textarea",maxlength:"500",placeholder:e.$t("ActivityDescription")},null,8,["modelValue","placeholder"])]),_:1}),n("div",rt,[b(o(e.$t("redPacketTotalAmount")),1),n("span",null,o(_(he)),1),b(o(d.symbol),1)]),n("div",vt,[_(v).isConnectWallet?(i(),h(M,{key:0},[C.value?(i(),w(q,{key:0,class:"create-btn",type:"danger",onClick:Ae},{default:s(()=>[b(o(e.$t("approve")),1)]),_:1})):(i(),w(q,{key:1,class:"create-btn",type:"danger",onClick:Ve,loading:K.value},{default:s(()=>[b(o(e.$t("createRedPacketBtn")),1)]),_:1},8,["loading"]))],64)):(i(),w(q,{key:1,class:"create-btn",type:"primary",onClick:oe},{default:s(()=>[b(o(e.$t("connectWallet")),1)]),_:1}))]),n("div",{class:"form-item history",onClick:t[14]||(t[14]=a=>_(le).push("/history"))},o(e.$t("redPacketHistory")),1)]),l(Z,{class:"help-dialog",show:x.value,"onUpdate:show":t[15]||(t[15]=a=>x.value=a),title:e.$t("rulesDescription"),"confirm-button-text":e.$t("understand"),"close-on-click-overlay":""},{default:s(()=>[n("div",mt,[n("div",null,o(e.$t("rulesDescription1")),1),n("div",null,o(e.$t("rulesDescription2")),1),n("div",null,o(e.$t("rulesDescription3")),1),n("div",null,o(e.$t("rulesDescription4")),1),n("div",null,o(e.$t("rulesDescription5",{chains:_(de).join("/")})),1)])]),_:1},8,["show","title","confirm-button-text"]),l(Z,{class:"create-success-dialog",show:j.value,"onUpdate:show":t[17]||(t[17]=a=>j.value=a),"close-on-click-overlay":""},{footer:s(()=>[n("div",bt,[l(q,{class:"copy-btn",type:"primary",onClick:t[16]||(t[16]=a=>_(ve)(O.value))},{default:s(()=>[b(o(e.$t("copyLink")),1)]),_:1})])]),default:s(()=>[n("div",pt,[n("div",ft,[l(S,{name:"createSuccess"})]),n("div",ht,o(e.$t("createRedPacketSuccess")),1),n("div",gt,o(e.$t("shareLink")),1)])]),_:1},8,["show"]),l(A,{show:H.value,"onUpdate:show":t[18]||(t[18]=a=>H.value=a),title:e.$t("switchLang"),actions:_(ge),closeable:!1,"cancel-text":e.$t("cancel"),"close-on-click-action":"",onSelect:be},null,8,["show","title","actions","cancel-text"]),l(Xe,{tradeVisable:k.value,"onUpdate:tradeVisable":t[19]||(t[19]=a=>k.value=a),status:$.value,tradeHash:N.value},null,8,["tradeVisable","status","tradeHash"]),l(Z,{class:"chain-err-dialog",confirmButtonText:e.$t("understand"),confirmButtonColor:"#3F80F7",show:X.value,"onUpdate:show":t[20]||(t[20]=a=>X.value=a)},{default:s(()=>[n("div",_t,[n("div",null,o(e.$t("notSupportedChain")),1),n("div",null,o(e.$t("pleaseSwitchTo",{chains:_(de).join("\u3001")})),1)])]),_:1},8,["confirmButtonText","show"])],64)}}},At=fe(kt,[["__scopeId","data-v-9baa86a4"]]);export{At as default};
