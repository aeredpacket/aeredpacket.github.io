import{T as B}from"./TokenIcon.514e012b.js";import{_ as V}from"./SvgIcon.8ffca840.js";import{_ as q,k as G,j as J,l as K,n as u,q as W,R as X,s as Q,P as ee,S as te,r as C,o as i,b as l,a,u as s,O as I,t as o,d as c,c as D,g as h,e as P,F as se,J as ae,w as oe,U as ie,V as R,W as le,T as $,v as ne,K as N,X as de,f as ce,H as ve,I as re}from"./index.c6722388.js";import{u as ue}from"./redPacketStore.9f6b4aca.js";import{d as H}from"./dayjs.min.6cf145f0.js";const fe=k=>(ve("data-v-2670fb78"),k=k(),re(),k),ye={class:"body"},pe={class:"top"},_e=ie('<div class="background" data-v-2670fb78><div style="--i:1;" data-v-2670fb78></div><div style="--i:2;" data-v-2670fb78></div><div style="--i:3;" data-v-2670fb78></div><div style="--i:4;" data-v-2670fb78></div><div style="--i:5;" data-v-2670fb78></div><div style="--i:6;" data-v-2670fb78></div><div style="--i:7;" data-v-2670fb78></div><div style="--i:8;" data-v-2670fb78></div><div style="--i:9;" data-v-2670fb78></div><div style="--i:10;" data-v-2670fb78></div><div style="--i:11;" data-v-2670fb78></div><div style="--i:12;" data-v-2670fb78></div><div style="--i:13;" data-v-2670fb78></div><div style="--i:14;" data-v-2670fb78></div><div style="--i:15;" data-v-2670fb78></div><div style="--i:16;" data-v-2670fb78></div><div style="--i:17;" data-v-2670fb78></div><div style="--i:18;" data-v-2670fb78></div><div style="--i:19;" data-v-2670fb78></div><div style="--i:20;" data-v-2670fb78></div><div style="--i:21;" data-v-2670fb78></div><div style="--i:22;" data-v-2670fb78></div><div style="--i:23;" data-v-2670fb78></div><div style="--i:24;" data-v-2670fb78></div><div style="--i:25;" data-v-2670fb78></div><div style="--i:26;" data-v-2670fb78></div><div style="--i:27;" data-v-2670fb78></div><div style="--i:28;" data-v-2670fb78></div><div style="--i:29;" data-v-2670fb78></div><div style="--i:30;" data-v-2670fb78></div><div style="--i:31;" data-v-2670fb78></div><div style="--i:32;" data-v-2670fb78></div><div style="--i:33;" data-v-2670fb78></div><div style="--i:34;" data-v-2670fb78></div><div style="--i:35;" data-v-2670fb78></div><div style="--i:36;" data-v-2670fb78></div></div>',1),me={key:0,class:"info-box"},he={key:0,class:"fold-operate-fixed"},ke=fe(()=>a("span",{class:"dot"},"...",-1)),be={class:"fold-text"},ge={class:"red-packet"},we={class:"circle-big"},Ce={class:"circle-small"},Ie={key:0,class:"card"},Pe={class:"from"},Re={class:"amount"},$e={class:"congratulation"},He={class:"text"},Se={key:0,class:"logo"},Ae={key:1},Te={class:"text-top"},Le={class:"from"},xe={class:"congratulation"},Me={key:0,class:"front-cover"},Be={class:"packer-btn packer-btn-behind",style:{transform:"translateZ(-4px)"}},Ve={class:"packer-btn packer-btn-front"},We={class:"text-middle"},De={key:0},Ne={key:1},Oe={class:"text-bottom"},Ye={key:0,class:"award-time"},ze={key:1,class:"award-time"},Ee={class:"bottom"},Fe={class:"logo"},je={__name:"ReceiveRedPacket",setup(k){const e=ue(),r=G(),S=J(),{t:f}=K(),A=u(!1),y=u(!0),p=u(null),_=u(null),m=u(!1),n=u(0),b=u("--"),g=u(0),v=W(()=>g.value?e.sendTime+e.lockTime-g.value:0);X(()=>e.title,async(t,d)=>{T()});async function T(){if(!e.title)return;await R();let t=_.value.scrollHeight,d=_.value.offsetHeight;console.log(_.value.scrollHeight),console.log(_.value.offsetHeight),t>d&&(A.value=!0),document.body.style.setProperty("--top-height",p.value.scrollHeight-10+"px"),window.onresize=()=>(console.log("\u9AD8\u5EA6"),(()=>{document.body.style.setProperty("--top-height",p.value.scrollHeight-10+"px")})())}async function O(){y.value=!1,await R(),document.body.style.setProperty("--top-height",p.value.scrollHeight-10+"px")}async function Y(){y.value=!0,await R(),document.body.style.setProperty("--top-height",p.value.scrollHeight-10+"px")}async function z(){le([e.coverImage])}async function E(){console.log("openClick");let t;if(r.walletAddress?t=$.loading():t=$.fail(f("connectWalletWarn")),!m.value){m.value=!0;try{await F()}catch(d){console.log(d)}finally{t.clear(),m.value=!1}}}async function F(){if(!r.isConnectWallet){if(await r.connectWallet(),!r.isConnectWallet)return;await e.getRedPacketDetail(e.uuid,r.walletAddress)}if(e.isReceived){const t=e.receiveList.find(d=>d.userAddress==r.walletAddress);b.value=t.amount,n.value=1;return}if(console.log(e.status),e.status==3||e.status==2){if(e.status==2&&v.value>0){let t="";v.value<60?t=f("unlockSecondsPlease",{seconds:v.value}):t=f("unlockHoursPlease",{hours:Math.floor(v.value/3600),minutes:Math.floor((v.value-Math.floor(v.value/3600)*3600)/60)}),$({message:t,position:"top"});return}try{const t=await ne.redPacket.receive(r.walletAddress,e.uuid);console.log(t),t.status==1&&t.data.status==3&&(e.isReceived=!0,b.value=t.data.receiveResult.amount,n.value=1,e.receiveList.push({transferTime:H().unix(),amount:t.data.receiveResult.amount,userAddress:t.data.receiveResult.userAddress}))}catch(t){console.log(t),n.value=2}}else e.count==e.receiveList.length?n.value=2:n.value=3}const L=W(()=>e.creatorAddress?e.creatorAddress.substr(-4).toLowerCase():"--");let w=null;return Q(()=>{const d=ee().params.uuid;e.uuid=d,e.getRedPacketDetail(),w=setInterval(()=>{g.value=H().unix()},1e3),T()}),te(()=>{w&&clearInterval(w)}),(t,d)=>{const j=C("van-image"),U=C("van-icon"),Z=C("van-button");return i(),l("div",ye,[a("div",pe,[_e,a("div",{class:"content",ref_key:"content",ref:p},[s(e).title?(i(),l("div",me,[a("div",{class:I(["info",{fold:y.value}]),ref_key:"info",ref:_},[A.value&&y.value?(i(),l("div",he,[ke,a("span",{class:"fold-operate",onClick:O},o(t.$t("expand")),1)])):c("",!0),a("span",be,o(s(e).title),1),y.value?c("",!0):(i(),l("span",{key:1,class:"fold-operate",onClick:Y},o(t.$t("putAway")),1))],2)])):c("",!0),a("div",ge,[a("div",we,[a("div",Ce,[n.value==1?(i(),l("div",Ie,[a("div",Pe,[s(e).contractChain?(i(),D(B,{key:0,class:"token-icon",tokenIcon:s(N)(s(e).contractChain.toLowerCase(),s(e).contractAddress.toLowerCase())},null,8,["tokenIcon"])):c("",!0),a("span",null,o(t.$t("redPacketBelong",{user:s(L)})),1)]),a("div",Re,o(b.value+" "+s(e).symbol),1),a("div",$e,o(s(e).remark),1)])):c("",!0)])]),a("div",He,[n.value!=1?(i(),l("div",Se,[h(V,{class:"icon",name:"logo"})])):c("",!0),n.value!=1?(i(),l("div",Ae,[a("div",Te,[a("div",Le,[s(e).contractChain?(i(),D(B,{key:0,class:"token-icon",tokenIcon:s(N)(s(e).contractChain.toLowerCase(),s(e).contractAddress.toLowerCase())},null,8,["tokenIcon"])):c("",!0),P(o()+" ",1),a("span",null,"*"+o(t.$t("redPacketBelong",{user:s(L)})),1)]),a("div",xe,o(s(e).remark),1)]),n.value==0&&s(e).coverImage?(i(),l("div",Me,[h(j,{class:"img",fit:"contain",src:s(e).coverImage,onClick:z},null,8,["src"])])):c("",!0),n.value==0&&!m.value?(i(),l("div",{key:1,class:I(["open",s(r).language=="en"?"open-en":""]),onClick:E},o(t.$t("open")),3)):n.value==0&&m.value?(i(),l("div",{key:2,class:I(["anim-rotate packer-btn-pos",s(r).language=="en"?"open-en":""])},[a("div",Be,o(t.$t("open")),1),(i(),l(se,null,ae(7,(x,M)=>a("div",{class:"packer-btn-middle",key:M,style:de({transform:`translateZ(${M-3}px)`})},null,4)),64)),a("div",Ve,o(t.$t("open")),1)],2)):c("",!0),a("div",We,[n.value==2?(i(),l("div",De,[a("div",null,o(t.$t("handSlow")),1),a("div",null,o(t.$t("redPackIsGone")),1)])):c("",!0),n.value==3?(i(),l("div",Ne,[a("div",null,o(t.$t("handSlow")),1),a("div",null,o(t.$t("redPackIsExpired")),1)])):c("",!0)])])):c("",!0),a("div",Oe,[n.value==1?(i(),l("div",Ye,o(t.$t("distributeTime",{date:s(H).unix(s(e).sendTime+s(e).endTime).format("YYYY-MM-DD HH:mm"),address:s(ce)(s(r).walletAddress)})),1)):s(e).status==2&&s(v)>0?(i(),l("div",ze,o(s(v)<60?s(f)("unlockSeconds",{seconds:s(v)}):s(f)("unlockHours",{hours:Math.floor(s(v)/3600),minutes:Math.floor((s(v)-Math.floor(s(v)/3600)*3600)/60)})),1)):c("",!0),a("div",{class:"show-luck",onClick:d[0]||(d[0]=x=>s(S).push(`/redpacket/${s(e).uuid}/showLuck`))},[P(o(t.$t("seeLuckEveryone"))+" ",1),h(U,{name:"arrow"})])])])])],512)]),a("div",Ee,[h(Z,{class:"send-red-packet",onClick:d[1]||(d[1]=x=>s(S).push("/"))},{default:oe(()=>[P(o(t.$t("giveOutRedPacket")),1)]),_:1}),a("div",Fe,[h(V,{class:"icon",name:"logo"})])])])}}},Ke=q(je,[["__scopeId","data-v-2670fb78"]]);export{Ke as default};
