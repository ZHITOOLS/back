
/*
微信公众号柠檬玩机交流
下载地址：
商店 运动福极速版
Tg群 t.me/ningmengwj
使用方法
获取数据重新打开APP即可获取
测试1块秒到其他好像不到
脚本已自动提现0.3和1块 
第一天0.3第二天1块 提现完就卸载吧
号多的可以多撸 一定要先绑定微信和手机号脚本好提现
请先绑定好微信和手机号
[rewrite_local]
https://api.yundongfu.mobi/v1/user/dailyData url script-request-header http://nm66.top/ydf.js

hostname = *.yundongfu.mobi
*/

// [task_local]
// 只需要一天运行一次就行了 分两天 已定时每天晚上12点运行 第一次可以自己手动运行先领取0.3
// 0 0 * * * http://nm66.top/ydf.js, tag=柠檬运动福极速版, img-url=circles.hexagongrid.fill.system, enabled=true

const ydf = '运动福极速版'
const $ = Env('运动福极速版')


let status;
status = (status = ($.getval("ydfstatus") || "1") ) > 1 ? `${status}` : ""; 
ydfheaderArr = []
ydfurlArr = []
let ydfheader = $.getdata('ydfheader')
let ydfurl = $.getdata('ydfurl')
const logs =0;


let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
   GetCookie();
   $.done()
} 

ydfheaderArr.push($.getdata('ydfheader'))
    let ydfcount = ($.getval('ydfcount') || '1');
  for (let i = 2; i <= ydfcount; i++) {
    ydfheaderArr.push($.getdata(`ydfheader${i}`))
ydfurlArr.push($.getdata(`ydfurl${i}`))
  }
!(async () => {
if (!ydfheaderArr[0]) {
    $.msg($.name, '【提示】请先获取数据')
    return;
  }
   console.log(`------------- 共${ydfheaderArr.length}账号----------------\n`)
  for (let i = 0; i < ydfheaderArr.length; i++) {
    if (ydfheaderArr[i]) {
      message = ''
      ydfheader = ydfheaderArr[i];
      $.index = i + 1;
      console.log(`\n开始【运动福极速版${$.index}】`)
$.log("☆.。.:*・°开̥̊始̥̊每̥̊日̥̊任̥̊务̥̊。.:*・°☆ \n")
       await bushu()
       await qdz()
       await spfb()
       await fxjl()
$.log("☆.。.:*・°每̥̊日̥̊任̥̊务̥̊运̥̊行̥̊完̥̊成̥̊。.:*・°☆\n")
$.log("☆.。.:*・°开̥̊始̥̊种地任务。.:*・°☆ ")
await zt()
$.log("☆.。.:*・°种地任务完成 5分钟后成熟。.:*・°☆ \n")
$.log("☆.。.:*・°开̥̊始̥̊收取任务。.:*・°☆ \n")
await sqd()
$.log("☆.。.:*・°收取任务完成。.:*・°☆ \n")
$.log("☆.。.:*・°开̥̊始̥̊养锦鲤/喂食任务。.:*・°☆ \n")
await yjl()
await wjl()
$.log("☆.。.:*・°养锦鲤/喂食任务完成。.:*・°☆ \n")
$.log("☆.。.:*・°开̥̊始̥̊福袋树任务。.:*・°☆ \n")
await fds()
await fdssq()
$.log("☆.。.:*・°福袋树任务完成。.:*・°☆ \n")
$.log("☆.。.:*・°开̥̊始̥̊步数阶级奖励任务。.:*・°☆ \n")
await bsjjlq()
await task()
await stepjl()
$.log("☆.。.:*・°步数阶级任务完成。.:*・°☆ \n")
$.log("☆.。.:*・°开̥̊始̥̊超级大西瓜超级奖励任务。.:*・°☆ \n")
await cjdxg()
await cjdxg2()
await tx()

$.log("☆.。.:*・°超级大西瓜超级奖励任务完成。.:*・°☆ \n")
await info()
  }
 }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
    
    
function GetCookie() {
if($request&&$request.url.indexOf("v1/user/dailyData")>=0) {
   const ydfurl = JSON.stringify($request.url)
   const ydfheader = JSON.stringify($request.headers)
if(ydfurl)    $.setdata(ydfurl,`ydfurl${status}`)
    if(ydfheader)    $.setdata(ydfheader,`ydfheader${status}`)
    $.log(`[${ydf}] 获取请求: 成功,ydfheader: ${ydfheader}`)
$.log(`[${ydf}] 获取: 成功: ${ydfurl}`)
    $.msg(`运动福极速版${status}: 成功🎉`, ``)
}
}

async function qdz(){
for(let i = 1; i < 8; i ++){
no1 = i;

await qd()


//$.log("已循环"+no1)
}
} 

//步数

async function bushu(){
 return new Promise((resolve) => {

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/user/step?duration=0&stepNum=100000`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("步数设置:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("步数设置失败"+result.resp.msg)
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
//签到
    async function qd(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/sign?goldSignSettingId=${no1}&hasDouble=${no1}`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("签到:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("签到失败"+result.resp.msg)
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }

//视频宝箱翻倍
    async function spfb(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/daily?goldDailyTaskSettingId=2`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("视频宝箱签到翻倍:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("视频宝箱签到翻倍失败"+result.resp.msg)
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
//分享奖励
    async function fxjl(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/daily?goldDailyTaskSettingId=8`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("分享奖励领取:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("分享奖励领取"+result.resp.msg)
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }

//开始种田
async function zt(){
for(let i = 0; i < 10; i ++){
zt = i;

await kd()
await zd()

//$.log("已循环"+no1)
}
} 

async function kd(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/farm/assart?landId=5357${zt}`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log(zt+"号田开地:"+result.resp.msg)
         
        if(result.code != 0)
          $.log(zt+"号田开地失败或已经开了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function zd(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/farm/sow?landId=5357${zt}`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log(zt+"号田种植:"+result.resp.msg)
         
        if(result.code != 0)
          $.log(zt+"号田种植失败或已经种了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }

//开始收取
async function sqd(){
for(let i = 0; i < 10; i ++){
sqtd = i;

await sq()


//$.log("已循环"+no1)
}
} 
async function sq(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/farm/harvest?landId=5357${sqtd}`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log(sqtd+"号田收取:"+result.resp.msg)
         
        if(result.code != 0)
          $.log(sqtd+"号田收取失败或还没熟啊")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
//养锦鲤
async function yjl(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/chick/init`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("养锦鲤:"+result.resp.msg+"锦鲤蛋"+result.data.hasEgg)
         
        if(result.code != 0)
          $.log("养个毛啊 你已经养了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function wjl(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/chick/feed`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("喂锦鲤:"+result.resp.msg+"下次喂食时间"+result.data.nextFeedMinTime+"-"+result.data.nextFeedMinTime)
         
        if(result.code != 0)
          $.log("喂个毛啊 你已经喂了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
//福袋🌲
async function fds(){
for(let i = 80; i < 90; i ++){
s = i;
await sbfl()
await fl()
await js()

//$.log("已循环"+no1)
}
} 
async function sbfl(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/kettle/set/double`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log(s+"双倍肥料一小时:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("双倍一小时肥料失败或已经开始了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function fl(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/kettle/random?waterNum=${s}`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log(s+"刷肥料:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("刷肥料失败或已经满了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function js(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/tree/watering`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("浇树:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("浇树失败或你没有水了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function fdssq(){
for(let i = 10; i < 35; i ++){
sfd1 = i;

await sqfd1()


//$.log("已循环"+no1)
}
} 

async function sqfd1(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/tree/picking?treeGoldDetailId=105${sfd1}`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("福袋树收福袋:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("收个毛啊 你已经收了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function bsjjlq(){
for(let i = 0; i < 10; i ++){
bjj = i;

await bsjj()
//await bsjjfb()


//$.log("已循环"+no1)
}
} 
async function bsjj(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/stepLevel?doubleType=2&goldStepLevelId=${bjj}&hasDouble=2`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("步数阶级奖励:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("领个毛啊 你已经领了")
         //if(result.data != 0)
         //bsid = result.data.id
         //await bsjjfb()
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function bsjjfb(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/stepLevel?doubleOperateId=`+bsid+`&doubleType=2&goldStepLevelId=${bjj}&hasDouble=1`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("步数阶级翻倍奖励:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("领个毛啊 你已经领了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }



async function task(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/mainTask`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.get(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("步数奖励数据获取"+result.resp.msg)
        step = result.data.step.goldNum
        random = result.data.random.goldNum
        onLine = result.data.online.goldOnlineTaskDb.goldNum
        active = result.data.active.goldNum
        duration = result.data.duration.goldNum
        if(result.code != 0)
          $.log("步数奖励数据获取失败")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }





async function stepjl(){
for(let i = 0; i < 3; i ++){
step1 = i;

await step2()
await active1()
await onlinjl()
await sjjl()
//$.log("已循环"+no1)
}
} 

async function step2(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/step?doubleType=${step1}&goldNum=`+step+`&hasDouble=${step1}`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log(step1+"步数奖励领取:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("领个毛啊 你已经领了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function active1(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/active?doubleType=${step1}&goldNum=`+active+`&hasDouble=${step1}`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log(step1+"步数奖励领取:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("领个毛啊 你已经领了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function onlinjl(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/onlineTask?doubleType=${step1}&goldOnlineTaskId=${step1}&hasDouble=${step1}`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log(step1+"在线翻倍奖励领取:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("领个毛啊 你已经领了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function sjjl(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/random?doubleType=${step1}&goldNum=`+random+`&hasDouble=${step1}`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log(step1+"随机奖励领取:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("领个毛啊 你已经领了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
//合成大西瓜
async function cjdxg(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/watermelon/score?score=1000000`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("合成大西瓜奖励领取:"+result.resp.msg+"金币"+result.data.gold)
         dxgid = result.data.watermelonId
        if(result.code != 0)
          $.log("领个毛啊 你已经领了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function cjdxg2(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/watermelon/gold?doubleType=2&hasDouble=2&watermelonId=`+dxgid,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("超级大西瓜奖励领取:"+result.resp.msg)
         
        if(result.code != 0)
          $.log("领个毛啊 你已经领了")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function info(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/gold/account/view`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.get(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.resp.code == 0)
          $.log("💰当前金币:"+result.data.goldAccount.goldNum+"\n💰今日收入金币:"+result.data.goldAccountCount.numToday)
        if(result.resp.code != 0)
          $.log("叼毛 先去获取数据")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function tx(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/cash/product?cashProductId=7`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.resp.code == 0)
          $.log("提现0.3块:"+result.resp.msg)
         
        if(result.resp.code == 402)
          $.log("0.3"+result.resp.msg)
          await tx1()
          if(result.resp.code == 403)
          $.log("0.3"+result.resp.msg)
          await tx1()
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function tx1(){
 return new Promise((resolve) => {
    

    let plant6_url = {
   		url: `https://api.yundongfu.mobi/v1/cash/product?cashProductId=1`,
        headers: JSON.parse(ydfheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.resp.code == 0)
          $.log("提现1块:"+result.resp.msg)
         
        if(result.resp.code == 402)
          $.log("1块"+result.resp.msg)
          if(result.resp.code == 403)
          $.log("1块"+result.resp.msg)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
