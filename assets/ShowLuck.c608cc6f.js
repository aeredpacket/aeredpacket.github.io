import{_ as y,d as R}from"./dayjs.min.20ff614a.js";import{T as j}from"./TokenIcon.e7029ecf.js";import{_ as I,r as v,o as n,b as c,c as u,Y as M,a,t as s,p as V,k as F,q as z,j as O,l as P,R as q,u as t,d,e as m,g as h,w as g,y as E,T as S,B as K,O as U,f as w,F as G,m as J,h as Q,K as W,L as X}from"./index.27a63e40.js";import{u as Z}from"./redPacketStore.2028d1c3.js";const ee={class:"avatar"},te={__name:"Avatar",props:{image:{type:String,default:""},address:{type:String,default:""}},setup(r){return(f,T)=>{const e=v("van-image");return n(),c("div",ee,[r.image?(n(),u(e,{key:0,class:"img",round:"","lazy-load":"","show-loading":"",width:"100%",height:"100%",src:r.image,"error-icon":"/assets/images/groupAvatar.png"},null,8,["src"])):(n(),c("div",{key:1,class:"avatar-text",style:M({backgroundColor:"#"+r.address.slice(-6)})},[a("div",null,s(r.address.slice(-2).toUpperCase()),1)],4))])}}},se=I(te,[["__scopeId","data-v-75952dc2"]]);const oe=r=>(W("data-v-2e4d5bc5"),r=r(),X(),r),ae={class:"body"},ne={class:"top"},ce={class:"info"},ie=oe(()=>a("div",{class:"empty"},null,-1)),de={class:"background"},re={class:"coin-logo"},le={class:"coin"},ue={class:"from"},_e={class:"congratulation"},me={key:0,class:"amount"},ve={class:"center"},pe={class:"info"},ke={class:"text"},ye={class:"item-left"},he={class:"left-content"},ge={key:0,class:"mine",type:"primary"},fe={class:"time"},be={class:"item-right"},Ce={key:0,class:"best-luck"},we={class:"bottom"},Te={key:0,class:"tips"},Ae={key:1,class:"tips"},$e={key:0},Re={class:"id"},Pe={__name:"ShowLuck",setup(r){const f=V(),T=F(),e=Z(),L=z("global"),{t:b}=O();P([]);const A=P(0);function x(){const o="/RedPacket/"+e.uuid+"/activityDetail";f.push(o)}function N(){const o="/RedPacket/"+e.uuid;f.push(o)}async function D(){await e.getRedPacketDetail(),await B(e.creatorAddress,e.contractChain,e.symbol,e.totalAmount)}const Y=q().params.uuid;e.uuid=Y,D();async function B(o,l,_,p){let k=(await E.debank.getTokenList(o,l)).data.data.find(i=>i.symbol==_);if(!k){S(b("unsupportedToken"));return}console.log(k);let C=k.current_price_usd;A.value=K(Number(p)).multipliedBy(Number(C)).toFixed(2)}function H(o,l){let _=L.cfg.allowChainList.find(p=>p.chain==o);_?window.open(_.txNetwork+l,"_blank"):S(b("unsupportedNetwork"))}return(o,l)=>{const _=v("van-icon"),p=v("van-empty"),$=v("van-cell"),k=v("van-list"),C=v("van-button");return n(),c("div",ae,[a("div",ne,[a("div",ce,[ie,a("div",de,[a("div",re,[t(e).contractChain?(n(),u(j,{key:0,tokenIcon:t(U)(t(e).contractChain.toLowerCase(),t(e).contractAddress.toLowerCase())},null,8,["tokenIcon"])):d("",!0)])]),a("div",le,s(t(e).symbol),1),a("div",ue,[t(e).type==0?(n(),u(y,{key:0,name:"pin"})):(n(),u(y,{key:1,name:"pu"})),m(" "+s(o.$t("redPacketSend",{user:t(w)(t(e).creatorAddress)})),1)]),a("div",_e,s(t(e).remark),1),t(e).singleAmount!=0?(n(),c("div",me,"+"+s(t(e).singleAmount)+" "+s(t(e).symbol),1)):d("",!0)]),t(e).title?(n(),c("div",{key:0,class:"detail",onClick:x},[m(s(o.$t("seeActivityDetail"))+" ",1),h(_,{name:"arrow"})])):d("",!0)]),a("div",ve,[a("div",pe,s(o.$t("redPacketInfo",{totalCount:t(e).count,totalAmount:t(e).totalAmount,symbol:t(e).symbol,totalPrice:A.value,leftCount:t(e).count-t(e).receivedCount})),1),t(e).receiveList.length==0?(n(),u(p,{key:0,class:"empty-box"},{image:g(()=>[h(y,{class:"icon",name:"emptyHistory"}),a("div",ke,s(o.$t("noReceiveRecord")),1)]),_:1})):(n(),u(k,{key:1},{default:g(()=>[(n(!0),c(G,null,J(t(e).receiveList,i=>(n(),u($,{class:"item",key:i},{title:g(()=>[a("div",ye,[h(se,{class:"avatar",address:i.userAddress},null,8,["address"]),a("div",he,[a("div",null,[m(s(t(w)(i.userAddress)),1),i.userAddress==t(T).walletAddress?(n(),c("div",ge,s(o.$t("mine")),1)):d("",!0)]),a("div",fe,s(t(R).unix(i.time).format("YYYY-MM-DD HH:mm")),1)])])]),value:g(()=>[a("div",be,[a("div",null,s(i.amount)+" "+s(t(e).symbol),1),i.id==t(e).luckyReceiveId?(n(),c("div",Ce,[h(y,{name:"good-fill"}),m(s(o.$t("bestLuck")),1)])):d("",!0)])]),_:2},1024))),128))]),_:1}))]),a("div",we,[t(e).status!=3&&t(e).status!=-2?(n(),c("div",Te,s(t(e).status==1?o.$t("receivedRedPacketText2"):o.$t("receivedRedPacketText",{date:t(R).unix(t(e).sendTime+t(e).endTime).format("YYYY-MM-DD HH:mm:ss")})),1)):d("",!0),t(e).status==-2?(n(),c("div",Ae,s(o.$t("receivedRedPacketTextStatus2")),1)):d("",!0),t(e).status==3&&!t(e).isReceived?(n(),u(C,{key:2,type:"primary",class:"open",onClick:N},{default:g(()=>[m(s(o.$t("grabNow")),1),t(e).receivedCount>0?(n(),c("span",$e,"("+s(o.$t("over",{count:t(e).count-t(e).receivedCount}))+")",1)):d("",!0)]),_:1})):d("",!0),t(e).unlockTx?(n(),c("div",{key:3,class:"unlock-tx",onClick:l[0]||(l[0]=i=>H(t(e).contractChain,t(e).unlockTx))},s(t(b)("txHash")+": "+t(w)(t(e).unlockTx)+" "),1)):d("",!0),a("div",Re,[m(s(o.$t("redPacketOrder"))+": "+s(t(e).id)+" ",1),h(y,{class:"copy-icon",name:"copy",onClick:l[1]||(l[1]=i=>t(Q)(t(e).id))})])])])}}},De=I(Pe,[["__scopeId","data-v-2e4d5bc5"]]);export{De as default};
