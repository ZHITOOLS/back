//频道:https://t.me/sillyGirl_Plugin，欢迎反馈

//使用本插件自动解析请不要使用其他自动解析插件（主动解析无影响），可能会冲突
//部分活动不同仓库监控变量不同，可能会有错漏，欢迎反馈
//接口来自nolan,感谢诺兰大佬的公益接口

// [rule:^jx\s[\s\S]+]
// [rule:[\s\S]*[(|)|#|@|$|%|¥|￥|!|！]([0-9a-zA-Z]{10,14})[(|)|#|@|$|%|¥|￥|!|！][\s\S]*]

main()

//口令解析
function JDCodeDecode(code){
	let resp=request({
			url:"https://api.nolanstore.top/JComExchange",
			method:"post",
			headers:{
				accept: "application/json",
				contentType:"application/json"
			},
			dataType:"json",
			body:{"code": code}
	})
	try{
//		sendText(resp)
		let data=JSON.parse(resp)
		if(data.code==0)
			return data.data
		else
			return 	null	
	}
	catch(err){
		return null
	}
	return null
}
//提取活动id
function GetActivityId(url){
	let params=url.split("?")[1].split("&")
	for(let i=0;i<params.length;i++){
		if(params[i].indexOf("activityId")!=-1)
			return params[i].split("=")[1]
		else if(params[i].indexOf("actId")!=-1)
			return params[i].split("=")[1]
		else if(params[i].indexOf("venderId")!=-1)
			return params[i].split("=")[1]	
		else if(params[i].indexOf("code")!=-1)
			return params[i].split("=")[1]		
	}
	return null
}

function main(){
	let msg=GetContent(),JDCODE=""
	let notify=""
	
	if(msg.indexOf("jx")!=-1)
		JDCODE=msg.slice(3,msg.length-1)
	else
		JDCODE=msg
	
//	sendText("解析："+JDCODE)
	let info=JDCodeDecode(JDCODE)
	if(info==null){
		sendText("解析失败")
		return
	}
	
	let img=info.img
	let title=info.title
	let sharefrom=info.userName
	let url=info.jumpUrl
	let activityId=GetActivityId(url)
	notify+="\n--------口令解析--------\n【"+title+"】\n解析链接:"+url+"\n分享者:"+sharefrom+"\n活动ID:"+activityId

	if(activityId!=null){
		notify+="\n\n--------变量解析与监控--------"
		if(url.indexOf("https://cjhydz-isv.isvjcloud.com/wxTeam/activity")!=-1)
			notify+="\n【CJ组队瓜分】\nexport jd_cjhy_activityId=\"" + activityId+"\""
		
		else if(url.indexOf("https://lzkjdz-isv.isvjcloud.com/wxTeam/activity")!=-1)
			notify+="\n【LZ组队瓜分】\nexport jd_zdjr_activityId=\"" + activityId+"\""
		
		else if(url.indexOf("https://jinggengjcq-isv.isvjcloud.com")!=-1)
			notify+="\n【大牌联合开卡】\nexport DPLHTY=\"" + activityId+"\""						
		else if(url.indexOf("https://cjhy-isv.isvjcloud.com/wxInviteActivity/openCard/invitee")!=-1)
			notify+="\n【CJ入会有礼】\nexport VENDER_ID=\"" + activityId+"\""
		
		else if(url.indexOf("https://cjhydz-isv.isvjcloud.com/microDz/invite/activity")!=-1)
			notify+="\n【CJ微定制】\nexport jd_wdz_activityId=\"" + activityId+"\""
		
		else if(url.indexOf("https://lzkjdz-isv.isvjcloud.com/wxShareActivity/activity")!=-1)
			notify+="\n【LZ分享有礼】\nexport jd_fxyl_activityId=\"" + activityId+"\""
		
		else if(url.indexOf("https://lzkj-isv.isvjd.com/wxCollectionActivity/activity2")!=-1){
			notify+="\n【LZ加购有礼】\nexport M_WX_ADD_CART_URL=\"" + url+"\""//wall库
			notify+="\nexport jd_lzaddCart_activityId=\""+ activityId+"\""//kr库
		}
		
		else if(url.indexOf("https://lzkjdz-isv.isvjcloud.com/wxCollectCard")!=-1){
			notify+="\n【LZ集卡抽奖】\nexport M_WX_COLLECT_CARD_URL=\"" + url+"\""//wall库
			notify+="\nexport jd_wxCollectCard_activityId=\""+ activityId+"\""//kr库
			notify+="\nexport jd_lzkj_wxCollectionActivityId=\""+ activityId+"\""//环境保护库
			
		}
		
		else if(url.indexOf("https://cjhy-isv.isvjcloud.com/wxCollectionActivity/activity")!=-1)
			notify+="\n【CJ集卡抽奖】\nexport jd_cjhy_wxCollectionActivityId=\"" + activityId+"\""
		
		else if(url.indexOf("https://lzkj-isv.isvjcloud.com/wxgame/activity")!=-1)
			notify+="\n【LZ店铺通用游戏】\nexport WXGAME_ACT_ID=\"" + activityId+"\""
		
		else if(url.indexOf("https://lzkjdz-isv.isvjcloud.com/wxSecond")!=-1)
			notify+="\n【LZ读秒拼手速】\nexport jd_wxSecond_activityId=\"" + activityId+"\""
		
		else if(url.indexOf("https://lzkjdz-isv.isvjcloud.com/wxCartKoi/cartkoi")!=-1)
			notify+="\n【LZ购物车锦鲤】\nexport jd_wxCartKoi_activityId=\"" + activityId+"\""	
			
		else if(url.indexOf("https://lzkj-isv.isvjd.com/drawCenter")!=-1)
			notify+="\n【LZ刮刮乐抽奖】\nexport jd_drawCenter_activityId=\"" + activityId+"\""
				
		else if(url.indexOf("https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity")!=-1)
			notify+="\n【LZ粉丝互动】\nexport jd_wxFansInterActionActivity_activityId=\"" + activityId+"\""
					
		else if(url.indexOf("https://prodev.m.jd.com/mall/active/dVF7gQUVKyUcuSsVhuya5d2XD4F")!=-1)
			notify+="\n【邀好友赢大礼】\nexport yhyauthorCode=\"" + activityId+"\""
			
		else if(url.indexOf("https://lzkj-isv.isvjcloud.com/wxShopFollowActivity")!=-1)
			notify+="\n【LZ关注抽奖】\nexport jd_wxShopFollowActivity_activityId=\"" + activityId+"\""
			
		else
			notify+="\n未收录该活动，可联系作者 https://t.me/sillyGirl_Plugin"
	}	
	sendText(image(img)+notify)
	breakIn(notify)
	return
}