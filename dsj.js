/*
微信公众号 柠檬玩机交流
柠檬电视家
下载地址：http://m1.liulianqi123.xyz/activity/f/transfer?yrwe=1&uid=ef3496b2251665b14564df0d71fad48e

-------------圈X运行-------------
[rewrite_local]
#柠檬电视家
http://user.gaoqingdianshi.com/api/v3/user/info url script-request-header http://nm66.top/dsj.js
[MITM]
hostname = bp-api.coohua.com
#loon
http://user.gaoqingdianshi.com/api/v3/user/info url script-request-header http://nm66.top/dsj.js, requires-header=true, timeout=10, tag=柠檬电视家
#surge
柠檬电视家 = type=http://user.gaoqingdianshi.com/api/v3/user/info,requires-header=1,max-size=0,script-path=http://nm66.top/dsj.js,script-update-interval=0

-------------青龙或者其他容器运行-------------
-------------青龙拉取-------------
ql raw http://nm66.top/dsj.js
放配置里 定时如下面 抓包查看请求头里 或者随便一条带有accesskey的
export dsj='{"Accept-Encoding":"gzip, deflate","AppVerCode":"236","userid":"抓包替换的","language":"zh_CN","Host":"user.gaoqingdianshi.com","AppVerName":"1.96","hwModel":"iPhone 7 Plus","hwBrand":"iPhone","countryCode":"CN","ssid":"","Connection":"keep-alive","uuid":"512dc360f78bc194","Cache-Control":"no-cache","ispId":"","Accept-Language":"zh-Hans;q=1","User-Agent":"Dsj/Client1.2","MarketChannelName":"Iphone","hwMac":"","Generation":"com.dianshijia.mobile.ios","Authorization":"抓包替换的","appId":"19227f89ea1a166451593601eb8a1b4f","cityCode":"421200","erid":"71698","routerMac":"1ca0d3b01e4","ethMac":"","areaCode":"420000","cuuid":"c0073ed2c7e2b94fa19603874b32a054","gpsCityCode":"421200"}'


手动抓包替换上面1个 放在配置里面 多账号用@隔开
-------------V2P运行-------------
同圈X方法一样
直接订阅BOXJX 
http://nm66.top/nm.boxjs.json
下载脚本 设置变量dsj多账号@隔开或者dsj2...
定时如下面
*/

// [task_local]
//#柠檬电视家
// * */1 * * * http://nm66.top/dsj.js, tag=柠檬电视家, enabled=true

const $ = new Env('柠檬电视家');
let status;
status = (status = ($.getval("dsjstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
let dsjArr = [],dsjcount = ''
let dsj= $.isNode() ? (process.env.dsj ? process.env.dsj : "") : ($.getdata('dsj') ? $.getdata('dsj') : "")
let dsjs = ""
const logs =0;
var timestamp = Math.round(new Date().getTime()/1000).toString();
!(async () => {
  if (typeof $request !== "undefined") {
        await dsjck()
  } else {
      if(!$.isNode()){
          dsjArr.push($.getdata('dsj'))
          let dsjcount = ($.getval('dsjcount') || '1');
          for (let i = 2; i <= dsjcount; i++) {
            dsjArr.push($.getdata(`dsj${i}`))
            }
    console.log(`------------- 共${dsjArr.length}个账号-------------\n`)
      for (let i = 0; i < dsjArr.length; i++) {
        if (dsjArr[i]) {
          dsj = dsjArr[i];
          $.index = i + 1;
        
          console.log(`\n开始【电视家${$.index}】`)
          //isQuanX

await star()

  }
}
      }else  {
          if (process.env.dsj && process.env.dsj.indexOf('@') > -1) {
            dsjArr = process.env.dsj.split('@');
            console.log(`您选择的是用"@"隔开\n`)
        } else {
            dsjs = [process.env.dsj]
        };
        Object.keys(dsjs).forEach((item) => {
        if (dsjs[item]) {
            dsjArr.push(dsjs[item])
        }
    })
          console.log(`共${dsjArr.length}个cookie`)
	        for (let k = 0; k < dsjArr.length; k++) {
                $.message = ""
                dsj = dsjArr[k]
                $.index = k + 1;
          console.log(`\n开始【电视家${$.index}】`)
//isNode
await star()

	        }
      }
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


function dsjck() {
   if ($request.url.indexOf("user/info") > -1) {
  const dsj = JSON.stringify($request.headers)
if(dsj)    $.setdata(dsj,`dsj${status}`)


console.log(dsj)


   $.msg($.name,"",'电视家'+`${status}` +'数据获取成功！')
 
}
}

async function star(){
    await info()
    await new_redpack()
    await cashinfo()
    await step()
    await signin()
    await chooseAdditionalReward()
    await SpWatchVideo()
   
    await coininfo()
    await task()
    await getCarveUp()
    await getSleep()
   await getWelfareTasks()
}


async function info(){
 return new Promise((resolve) => {

 let nm = {
       url: `http://user.gaoqingdianshi.com/api/v3/user/info`,
        headers: JSON.parse(dsj),
       
        
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

         console.log(`${result.data.userid}`)
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  async function new_redpack(){
 return new Promise((resolve) => {

 let nm = {
       url: `http://api.gaoqingdianshi.com/api/task/completeWelfareTask?code=new_redpack`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

         console.log(`${result.data.name}\n金币：${result.data.getCoin*0.01}`)
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
    async function coininfo(){
 return new Promise((resolve) => {

 let nm = {
       url: `http://api.gaoqingdianshi.com/api/coin/info`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

         console.log(`金币：${result.data.coin}\n总金币：${result.data.totalAcquiredCoin}`)
 if(result.data.tempCoin){
   qipao = result.data.tempCoin
   for(let i = 0;qipao.length;i++){
   qipaoid = qipao[i].id 
   $.log("气泡："+qipao[i].from+" 金币："+qipao[i].coin)
   await exchange(qipaoid)
   }
 }
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
      async function cashinfo(){
 return new Promise((resolve) => {

 let nm = {
       url: `http://api.gaoqingdianshi.com/api/cash/info`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

         console.log(`现金余额：${result.data.amount*0.01}\n提现额度：${result.data.totalWithdrawnCount}`)
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
      async function signin(){
 return new Promise((resolve) => {

 let nm = {
       url: `http://act.gaoqingdianshi.com/api/v7/sign/signin?accelerate=0&ext=0&ticket=`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

         console.log(`签到：${result.data.isSign}`)
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
        async function gainRewards(code){
 return new Promise((resolve) => {

 let nm = {
       url: `http://act.gaoqingdianshi.com/api/task/gainRewards?code=${code}`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

         console.log(`奖励领取成功`)
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
          async function dotask(code){
 return new Promise((resolve) => {

 let nm = {
       url: `http://act.gaoqingdianshi.com/api/v5/task/complete?code=${code}`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

         console.log(`${result.data.name}\n领取金币：${result.data.getCoin}`)
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
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

 let nm = {
       url: `http://act.gaoqingdianshi.com/api/v5/task/get`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

         tasklist = result.data
         for(let i = 0; tasklist.length; i++){
             taskcode = tasklist[i].code
             await dotask(taskcode)
             await $.wait(3000)
             await gainRewards(taskcode)
         }
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
              async function SpWatchVideo(){
 return new Promise((resolve) => {

 let nm = {
       url: `http://act.gaoqingdianshi.com/api/v5/task/complete?code=SpWatchVideo&comType=0`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

           console.log(`${result.data.name}\n领取金币：${result.data.getCoin}`)
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
   async function exchange(id){
 return new Promise((resolve) => {

 let nm = {
       url: `http://api.gaoqingdianshi.com/api/coin/temp/exchange?id=${id}`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

           console.log(`领取金币成功`)
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
   async function step(){
 return new Promise((resolve) => {

 let nm = {
       url: `http://act.gaoqingdianshi.com/api/taskext/getWalk?step=20000`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

           console.log(`领取金币成功`)
    await walkstep()
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  async function walkstep(){
 return new Promise((resolve) => {

 let nm = {
       url: `http://act.gaoqingdianshi.com/api/taskext/getCoin?code=walk&coin=2000&ext=1`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

           console.log(`领取金币成功${result.data}`)
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  async function getCarveUp(){
 return new Promise((resolve) => {

 let nm = {
       url: `http://api.gaoqingdianshi.com/api/v2/taskext/getCarveUp?ext=1`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

           console.log(`参加百万金币成功`)
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
    async function getWelfareTasks(){
 return new Promise((resolve) => {

 let nm = {
       url: `http://api.gaoqingdianshi.com/api/task/getWelfareTasks`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

           Tasks = result.data
           for(let i=0;Tasks.length;i++){
             wf = Tasks[i].code
             await WelfareTask(wf)
           }
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
    async function WelfareTask(code){
 return new Promise((resolve) => {

 let nm = {
       url: `http://api.gaoqingdianshi.com/api/task/completeWelfareTask?code=${code}`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

           console.log(`任务成功`)
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  
  async function chooseAdditionalReward(){
 return new Promise((resolve) => {

 let nm = {
       url: `http://api.gaoqingdianshi.com/api/sign/chooseAdditionalReward?rewardId=58`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

           console.log(`明日签到奖励已预订`)
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
   async function getSleep(){
 return new Promise((resolve) => {

 let nm = {
       url: `http://act.gaoqingdianshi.com/api/taskext/getSleep?ext=1`,
        headers: JSON.parse(dsj),

   
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.errCode == 0){

           console.log(`睡觉赚钱已报名`)
 
            

        
} else {
 console.log(`\n${result.msg}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
