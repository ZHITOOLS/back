/*
微信公众号：柠檬玩机交流
下载地址：商店开心大丰收 邀请码204995675
非专业人士制作/此游戏红包不是问题 问题是提现等级 
此脚本可以挂着刷等级提现
TG电报群: https://t.me/ningmeng666
#圈X
[rewrite_local]
#柠檬开心大丰收
https://bp-api.coohua.com/shua-happyharvest/main/page url script-request-header http://nm66.top/kxdfs.js
[MITM]
hostname = bp-api.coohua.com
#loon
https://bp-api.coohua.com/shua-happyharvest/main/page url script-request-header http://nm66.top/kxdfs.js, requires-body=true, timeout=10, tag=柠檬开心大丰收
#surge
柠檬开心大丰收 = type=https://bp-api.coohua.com/shua-happyharvest/main/page,requires-header=1,max-size=0,script-path=http://nm66.top/kxdfs.js,script-update-interval=0
*/

// [task_local]

// */10 * * * * http://nm66.top/kxdfs.js, tag=开心大丰收, img-url=circles.hexagongrid.fill.system, enabled=true


const kxdfs = '开心大丰收'
const $ = Env('开心大丰收')
const notify = $.isNode() ?require('./sendNotify') : '';

let status;
status = (status = ($.getval("kxdfsstatus") || "1") ) > 1 ? `${status}` : ""; 
kxdfsheaderArr = []
let kxdfsheader = $.getdata('kxdfsheader')

const logs =0;


let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
   GetCookie();
   $.done()
} 

kxdfsheaderArr.push($.getdata('kxdfsheader'))
    let kxdfscount = ($.getval('kxdfscount') || '1');
  for (let i = 2; i <= kxdfscount; i++) {
    kxdfsheaderArr.push($.getdata(`kxdfsheader${i}`))
  }
!(async () => {
if (!kxdfsheaderArr[0]) {
    $.msg($.name, '【提示】请先获取开心大丰收数据')
    return;
  }
   console.log(`------------- 共${kxdfsheaderArr.length}账号----------------\n`)
  for (let i = 0; i < kxdfsheaderArr.length; i++) {
    if (kxdfsheaderArr[i]) {
      message = ''
      kxdfsheader = kxdfsheaderArr[i];
      $.index = i + 1;
      console.log(`\n开始【开心大丰收${$.index}】`)
     
       await havesyz()
       await haves()
  }
 }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
    
    
function GetCookie() {
if($request&&$request.url.indexOf("main/page")>=0) {
   
   const kxdfsheader = JSON.stringify($request.headers)
    if(kxdfsheader)    $.setdata(kxdfsheader,`kxdfsheader${status}`)
    $.log(`[${kxdfs}] 获取kxdfsheader请求: 成功,kxdfsheader: ${kxdfsheader}`)
    $.msg(`kxdfsheader${status}: 成功🎉`, ``)
}
}


async function havesyz(){
for(let i = 0; i < 30; i ++){
no1 = i;

await yz()
await yy()
await yn()
await sqz()
await sqzfb()
$.log("动物系已循环"+no1)
}
} 
 
  
  
async function haves(){
for(let i = 0; i < 18; i ++){
no = i;
await xmhb()
await qshb()
await zd()
await zd2()
await zd3()
await zd4()
await zd5()
await zd6()
await zd7()
await zd8()
await zd9()
await zd10()
await havest()
await havest1()
await havestjs()
await lqjsq()
await tdhb()
await ktd()
await qtjs()
await cj()
await $.wait(1000)
await cj1()
await sphb()
await sjhb()
await rw()
await fh()
$.log("植物系已循环"+no)
}
}
async function sqz(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/receive/harvest?position=${no1}`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("🐖🐂🐏收取成功")
        if(result.code == -1)
          $.log(result.message)
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
    async function sqzfb(){
 return new Promise((resolve) => {
    let havest_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/harvest/reward?video=2`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(havest_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("🐖🐂🐏翻倍收获成功 红包"+result.result.gold+"经验："+result.result.experience)
        if(result.code == -1)
          $.log(result.message)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  
async function xmhb(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/receive/source/reward`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("🐻红包领取成功")
        if(result.code == -1)
          $.log(result.message)
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
async function qshb(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/receive/box`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("⛲红包领取成功")
        if(result.code == -1)
          $.log(result.message)
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
async function yz(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/common/produce?position=${no1}&seedId=17`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("养🐖成功")
        if(result.code == -1)
          $.log(result.message)
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 

async function yy(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/common/produce?position=${no1}&seedId=16`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("养🐏成功")
        if(result.code == -1)
          $.log(result.message)
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function yn(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/common/produce?position=${no1}&seedId=18`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("养🐂成功")
        if(result.code == -1)
          $.log(result.message)
          
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
   		url: `https://bp-api.coohua.com/shua-happyharvest/common/produce?position=${no}&seedId=1`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("种植成功\n")
        if(result.code == -1)
          $.log(result.message+"\n")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 

async function zd2(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/common/produce?position=${no}&seedId=2`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("种植成功\n")
        if(result.code == -1)
          $.log(result.message+"\n")
         
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 

async function zd3(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/common/produce?position=${no}&seedId=3`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("种植成功\n")
        if(result.code == -1)
          $.log(result.message+"\n")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
async function zd4(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/common/produce?position=${no}&seedId=4`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("种植成功\n")
        if(result.code == -1)
          $.log(result.message+"\n")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 

async function zd5(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/common/produce?position=${no}&seedId=5`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("种植成功\n")
        if(result.code == -1)
          $.log(result.message+"\n")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
async function zd6(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/common/produce?position=${no}&seedId=6`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("种植成功\n")
        if(result.code == -1)
          $.log(result.message+"\n")
         
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
async function zd7(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/common/produce?position=${no}&seedId=7`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("种植成功\n")
        if(result.code == -1)
          $.log(result.message+"\n")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
async function zd8(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/common/produce?position=${no}&seedId=8`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("种植成功\n")
        if(result.code == -1)
          $.log(result.message+"\n")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
async function zd9(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/common/produce?position=${no}&seedId=9`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("种植成功\n")
        if(result.code == -1)
          $.log(result.message+"\n")
         
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
async function zd10(){
 return new Promise((resolve) => {
    let plant6_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/common/produce?position=${no}&seedId=10`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("种植成功\n")
        if(result.code == -1)
          $.log(result.message+"\n")
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 

async function fh(){
 return new Promise((resolve) => {
    let havest_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/daily/reward/video`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(havest_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("分红广告观看成功"+result.result)
        if(result.code == -1)
          $.log(result.message)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function rw(){
 return new Promise((resolve) => {
    let havest_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/task/receive/common?taskId=${no}`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(havest_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("任务奖励"+result.result)
        if(result.code == -1)
          $.log(result.message)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function sjhb(){
 return new Promise((resolve) => {
    let havest_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/upgrade/bag/reward?position=${no}`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(havest_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("升级红包"+result.result)
        if(result.code == -1)
          $.log(result.message)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
async function sphb(){
 return new Promise((resolve) => {
    let havest_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/receive/limit/reward`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(havest_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("视频红包"+result.result)
        if(result.code == -1)
          $.log(result.message)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 


async function cj(){
 return new Promise((resolve) => {
    let havest_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/turn/get/reward`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(havest_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("抽奖成功 剩余次数"+result.leftTimes)
        if(result.code == -1)
          $.log(result.message)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
async function cj1(){
 return new Promise((resolve) => {
    let havest_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/turn/add/reward?type=1`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(havest_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("抽奖增加 红包"+result.result.reward)
        if(result.code == -1)
          $.log(result.message)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 




async function tdhb(){
 return new Promise((resolve) => {
    let havest_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/fix/trouble?position=${no}`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(havest_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("土地红包收获成功")
        if(result.code == -1)
          $.log(result.message)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }  

async function ktd(){
 return new Promise((resolve) => {
    let havest_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/unlock/land?position=${no}`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(havest_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("开土地成功")
        if(result.code == -1)
          $.log(result.message)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }  
async function havest(){
 return new Promise((resolve) => {
    let havest_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/receive/harvest?position=${no}`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(havest_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("收获成功")
        if(result.code == -1)
          $.log(result.message)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }  
  
  async function havest1(){
 return new Promise((resolve) => {
    let havest_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/harvest/reward?video=2`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(havest_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("翻倍收获成功 红包"+result.result.gold+"经验："+result.result.experience)
        if(result.code == -1)
          $.log(result.message)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  
   async function havestjs(){
 return new Promise((resolve) => {
    let havest_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/speed/produce?position=${no}`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(havest_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("加速成功")
        if(result.code == -1)
          $.log(result.message)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  
     async function qtjs(){
 return new Promise((resolve) => {
    let havest_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/speed/fast/produce?video=2`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(havest_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("全体加速成功 ")
        if(result.code == -1)
          $.log(result.message)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  
  
     async function lqjsq(){
 return new Promise((resolve) => {
    let havest_url = {
   		url: `https://bp-api.coohua.com/shua-happyharvest/video/speed`,
        headers: JSON.parse(kxdfsheader),
        
   	}
   $.post(havest_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.code == 0)
          $.log("加速器领取成功 剩余次数"+result.result.leftCount)
          
        if(result.code == -1)
          $.log(result.message)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
