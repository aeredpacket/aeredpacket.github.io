import{T as H}from"./TokenIcon.185f4fc5.js";import{_ as S}from"./SvgIcon.eb032c3b.js";import{_ as M,k as j,j as G,l as Z,n as r,s as q,O as J,Q,R as k,q as U,r as b,o as i,b as d,a as s,u as a,N as g,t as o,d as l,c as L,g as _,e as w,F as K,I as X,w as ee,S as te,U as se,T,v as ae,J as x,V as oe,f as ie,G as ce,H as de}from"./index.091edbb1.js";import{u as ne}from"./redPacketStore.a2335276.js";import{d as V}from"./dayjs.min.f81567ef.js";const le=m=>(ce("data-v-1f7cc86b"),m=m(),de(),m),ve={class:"body"},re={class:"top"},ue=te('<div class="background" data-v-1f7cc86b><div style="--i:1;" data-v-1f7cc86b></div><div style="--i:2;" data-v-1f7cc86b></div><div style="--i:3;" data-v-1f7cc86b></div><div style="--i:4;" data-v-1f7cc86b></div><div style="--i:5;" data-v-1f7cc86b></div><div style="--i:6;" data-v-1f7cc86b></div><div style="--i:7;" data-v-1f7cc86b></div><div style="--i:8;" data-v-1f7cc86b></div><div style="--i:9;" data-v-1f7cc86b></div><div style="--i:10;" data-v-1f7cc86b></div><div style="--i:11;" data-v-1f7cc86b></div><div style="--i:12;" data-v-1f7cc86b></div><div style="--i:13;" data-v-1f7cc86b></div><div style="--i:14;" data-v-1f7cc86b></div><div style="--i:15;" data-v-1f7cc86b></div><div style="--i:16;" data-v-1f7cc86b></div><div style="--i:17;" data-v-1f7cc86b></div><div style="--i:18;" data-v-1f7cc86b></div><div style="--i:19;" data-v-1f7cc86b></div><div style="--i:20;" data-v-1f7cc86b></div><div style="--i:21;" data-v-1f7cc86b></div><div style="--i:22;" data-v-1f7cc86b></div><div style="--i:23;" data-v-1f7cc86b></div><div style="--i:24;" data-v-1f7cc86b></div><div style="--i:25;" data-v-1f7cc86b></div><div style="--i:26;" data-v-1f7cc86b></div><div style="--i:27;" data-v-1f7cc86b></div><div style="--i:28;" data-v-1f7cc86b></div><div style="--i:29;" data-v-1f7cc86b></div><div style="--i:30;" data-v-1f7cc86b></div><div style="--i:31;" data-v-1f7cc86b></div><div style="--i:32;" data-v-1f7cc86b></div><div style="--i:33;" data-v-1f7cc86b></div><div style="--i:34;" data-v-1f7cc86b></div><div style="--i:35;" data-v-1f7cc86b></div><div style="--i:36;" data-v-1f7cc86b></div></div>',1),fe={key:0,class:"info-box"},ye={key:0,class:"fold-operate-fixed"},pe=le(()=>s("span",{class:"dot"},"...",-1)),_e={class:"fold-text"},me={class:"red-packet"},he={class:"circle-big"},ke={class:"circle-small"},be={key:0,class:"card"},ge={class:"from"},we={class:"amount"},Ce={class:"congratulation"},Ie={class:"text"},Re={key:0,class:"logo"},$e={key:1},Pe={class:"text-top"},Ae={class:"from"},He={class:"congratulation"},Se={key:0,class:"front-cover"},Le={class:"packer-btn packer-btn-behind",style:{transform:"translateZ(-4px)"}},Te={class:"packer-btn packer-btn-front"},xe={class:"text-middle"},Ve={key:0},Be={key:1},Ne={class:"text-bottom"},De={key:0,class:"award-time"},We={class:"bottom"},Oe={class:"logo"},Ye={__name:"ReceiveRedPacket",setup(m){const e=ne(),v=j(),C=G(),{t:B}=Z(),I=r(!1),u=r(!0),f=r(null),y=r(null),p=r(!1),c=r(0),h=r("--");q(()=>{const n=J().params.uuid;e.uuid=n,e.getRedPacketDetail(),R()}),Q(()=>e.title,async(t,n)=>{R()});async function R(){if(!e.title)return;await k();let t=y.value.scrollHeight,n=y.value.offsetHeight;console.log(y.value.scrollHeight),console.log(y.value.offsetHeight),t>n&&(I.value=!0),document.body.style.setProperty("--top-height",f.value.scrollHeight-10+"px"),window.onresize=()=>(console.log("\u9AD8\u5EA6"),(()=>{document.body.style.setProperty("--top-height",f.value.scrollHeight-10+"px")})())}async function N(){u.value=!1,await k(),document.body.style.setProperty("--top-height",f.value.scrollHeight-10+"px")}async function D(){u.value=!0,await k(),document.body.style.setProperty("--top-height",f.value.scrollHeight-10+"px")}async function W(){se([e.coverImage])}async function O(){console.log("openClick");let t;if(v.walletAddress?t=T.loading():t=T.fail(B("connectWalletWarn")),!p.value){p.value=!0;try{await Y()}catch(n){console.log(n)}finally{t.clear(),p.value=!1}}}async function Y(){if(!v.isConnectWallet){if(await v.connectWallet(),!v.isConnectWallet)return;await e.getRedPacketDetail(e.uuid,v.walletAddress)}if(e.isReceived){const t=e.receiveList.find(n=>n.userAddress==v.walletAddress);h.value=t.amount,c.value=1;return}if(console.log(e.status),e.status==3)try{const t=await ae.redPacket.receive(v.walletAddress,e.uuid);console.log(t),t.status==1&&t.data.status==3&&(e.isReceived=!0,h.value=t.data.receiveResult.amount,c.value=1,e.receiveList.push({transferTime:V().unix(),amount:t.data.receiveResult.amount,userAddress:t.data.receiveResult.userAddress}))}catch(t){console.log(t),c.value=2}else e.count==e.receiveList.length?c.value=2:c.value=3}const $=U(()=>e.creatorAddress?e.creatorAddress.substr(-4).toLowerCase():"--");return(t,n)=>{const z=b("van-image"),E=b("van-icon"),F=b("van-button");return i(),d("div",ve,[s("div",re,[ue,s("div",{class:"content",ref_key:"content",ref:f},[a(e).title?(i(),d("div",fe,[s("div",{class:g(["info",{fold:u.value}]),ref_key:"info",ref:y},[I.value&&u.value?(i(),d("div",ye,[pe,s("span",{class:"fold-operate",onClick:N},o(t.$t("expand")),1)])):l("",!0),s("span",_e,o(a(e).title),1),u.value?l("",!0):(i(),d("span",{key:1,class:"fold-operate",onClick:D},o(t.$t("putAway")),1))],2)])):l("",!0),s("div",me,[s("div",he,[s("div",ke,[c.value==1?(i(),d("div",be,[s("div",ge,[a(e).contractChain?(i(),L(H,{key:0,class:"token-icon",tokenIcon:a(x)(a(e).contractChain.toLowerCase(),a(e).contractAddress.toLowerCase())},null,8,["tokenIcon"])):l("",!0),s("span",null,o(t.$t("redPacketBelong",{user:a($)})),1)]),s("div",we,o(h.value+" "+a(e).symbol),1),s("div",Ce,o(a(e).remark),1)])):l("",!0)])]),s("div",Ie,[c.value!=1?(i(),d("div",Re,[_(S,{class:"icon",name:"logo"})])):l("",!0),c.value!=1?(i(),d("div",$e,[s("div",Pe,[s("div",Ae,[a(e).contractChain?(i(),L(H,{key:0,class:"token-icon",tokenIcon:a(x)(a(e).contractChain.toLowerCase(),a(e).contractAddress.toLowerCase())},null,8,["tokenIcon"])):l("",!0),w(o()+" ",1),s("span",null,"*"+o(t.$t("redPacketBelong",{user:a($)})),1)]),s("div",He,o(a(e).remark),1)]),c.value==0&&a(e).coverImage?(i(),d("div",Se,[_(z,{class:"img",fit:"contain",src:a(e).coverImage,onClick:W},null,8,["src"])])):l("",!0),c.value==0&&!p.value?(i(),d("div",{key:1,class:g(["open",a(v).language=="en"?"open-en":""]),onClick:O},o(t.$t("open")),3)):c.value==0&&p.value?(i(),d("div",{key:2,class:g(["anim-rotate packer-btn-pos",a(v).language=="en"?"open-en":""])},[s("div",Le,o(t.$t("open")),1),(i(),d(K,null,X(7,(P,A)=>s("div",{class:"packer-btn-middle",key:A,style:oe({transform:`translateZ(${A-3}px)`})},null,4)),64)),s("div",Te,o(t.$t("open")),1)],2)):l("",!0),s("div",xe,[c.value==2?(i(),d("div",Ve,[s("div",null,o(t.$t("handSlow")),1),s("div",null,o(t.$t("redPackIsGone")),1)])):l("",!0),c.value==3?(i(),d("div",Be,[s("div",null,o(t.$t("handSlow")),1),s("div",null,o(t.$t("redPackIsExpired")),1)])):l("",!0)])])):l("",!0),s("div",Ne,[c.value==1?(i(),d("div",De,o(t.$t("distributeTime",{date:a(V).unix(a(e).sendTime+a(e).endTime).format("YYYY-MM-DD HH:mm"),address:a(ie)(a(v).walletAddress)})),1)):l("",!0),s("div",{class:"show-luck",onClick:n[0]||(n[0]=P=>a(C).push(`/redpacket/${a(e).uuid}/showLuck`))},[w(o(t.$t("seeLuckEveryone"))+" ",1),_(E,{name:"arrow"})])])])])],512)]),s("div",We,[_(F,{class:"send-red-packet",onClick:n[1]||(n[1]=P=>a(C).push("/"))},{default:ee(()=>[w(o(t.$t("giveOutRedPacket")),1)]),_:1}),s("div",Oe,[_(S,{class:"icon",name:"logo"})])])])}}},Ge=M(Ye,[["__scopeId","data-v-1f7cc86b"]]);export{Ge as default};
