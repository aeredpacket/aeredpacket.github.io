import{k as r,P as c,T as d,v as o}from"./index.4a3433df.js";const n=r(),l=c("redPacket",{state:()=>({uuid:null,isReceived:!1,contractAddress:"",contractChain:"",count:0,coverImage:"",creatorAddress:"",id:0,receivedCount:0,remark:"",singleAmount:0,status:0,symbol:"",title:"",totalAmount:null,type:null,sendTime:0,endTime:0,receiveList:[],luckyReceiveId:0}),actions:{addCount(){this.count++},async getRedPacketDetail(){let a=d.loading({message:"Loading...",forbidClick:!0,duration:0});try{const t=await o.redPacket.detail(this.uuid,n.walletAddress);if(t.status==1){const e=t.data;console.log(e),this.isReceived=e.isReceived,this.contractAddress=e.redpacket.contractAddress,this.contractChain=e.redpacket.contractChain,this.count=e.redpacket.count,this.coverImage=e.redpacket.coverImage,this.creatorAddress=e.redpacket.creatorAddress,this.id=e.redpacket.id,this.receivedCount=e.redpacket.receivedCount,this.remark=e.redpacket.remark,this.singleAmount=e.redpacket.singleAmount,this.status=e.status,this.symbol=e.redpacket.symbol,this.title=e.redpacket.title,this.totalAmount=e.redpacket.totalAmount,this.type=e.redpacket.type,this.uuid=e.redpacket.uuid,this.sendTime=e.redpacket.sendTime,this.endTime=e.redpacket.endTime,this.receiveList=e.receiveList;let i=0;for(let s of this.receiveList)s.amount>i&&(i=Number(s.amount),this.luckyReceiveId=s.id)}}catch(t){console.log(t)}finally{a.clear()}}}});export{l as u};
