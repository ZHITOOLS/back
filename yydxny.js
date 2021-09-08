/*
微信公众号 柠檬玩机交流
柠檬爷爷的小农院
下载地址：http://yydxny.catautoelevadores.com.ar/yydxny.html?os=ios&env=production&userId=335272335&pkgId=313

-------------圈X运行-------------
[rewrite_local]
#柠檬爷爷的小农院
https://bp-api.coohua.com/bubuduo-yydxny/sync/syncData url script-request-header http://nm66.top/yydxny.js
[MITM]
hostname = bp-api.coohua.com
#loon
https://bp-api.coohua.com/bubuduo-yydxny/sync/syncData url script-request-header http://nm66.top/yydxny.js, requires-header=true, timeout=10, tag=柠檬爷爷的小农院
#surge
柠檬爷爷的小农院 = type=https://bp-api.coohua.com/bubuduo-yydxny/sync/syncData,requires-header=1,max-size=0,script-path=http://nm66.top/yydxny.js,script-update-interval=0

-------------青龙或者其他容器运行-------------
-------------青龙拉取-------------
ql raw http://nm66.top/yydxny.js
放配置里 定时如下面 抓包查看请求头里 或者随便一条带有accesskey的
export yyxnyhd='{"bs":"CDMA","osVersion":"iOS 14.30","pkgId":"313","Host":"bp-api.coohua.com","Accept-Encoding":"gzip, deflate, br","deviceId":"0","gps":"default","brand":"Apple","channel":"AppStore","Connection":"keep-alive","Cache-Control":"no-cache","accessKey":"抓包替换的","hotVersion":"2.91","appVersion":"1.0.4","User-Agent":"ygzy-mobile/1 CFNetwork/1209 Darwin/20.2.0","os":"iOS","Accept-Language":"zh-cn","romVersion":"iOS 14.30","Content-Type":"application/json","oaid":"","currentChannel":"AppStore","blackBox":"","Content-Length":"487","wechatId":""}'

手动抓包替换上面1个 放在配置里面 多账号用@隔开
-------------V2P运行-------------
同圈X方法一样
直接订阅BOXJX 
http://nm66.top/nm.boxjs.json
下载脚本 设置变量yyxnyhd多账号@隔开或者yyxnyhd2...
定时如下面
*/

// [task_local]
//#柠檬爷爷的小农院
// */10 * * * * http://nm66.top/yydxny.js, tag=柠檬爷爷的小农院, enabled=true
const $ = new Env('柠檬爷爷的小农院');
let status;
status = (status = ($.getval("yyxnystatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
let yyxnyhdArr = [],yyxnycount = ''
let yyxnyhd= $.isNode() ? (process.env.yyxnyhd ? process.env.yyxnyhd : "") : ($.getdata('yyxnyhd') ? $.getdata('yyxnyhd') : "")
let yyxnyhds = ""
const logs =0;
var timestamp = Math.round(new Date().getTime()/1000).toString();
!(async () => {
  if (typeof $request !== "undefined") {
        await yyxnyck()
  } else {
      if(!$.isNode()){
          yyxnyhdArr.push($.getdata('yyxnyhd'))
          let yyxnycount = ($.getval('yyxnycount') || '1');
          for (let i = 2; i <= yyxnycount; i++) {
            yyxnyhdArr.push($.getdata(`yyxnyhd${i}`))
            }
    console.log(`------------- 共${yyxnyhdArr.length}个账号-------------\n`)
      for (let i = 0; i < yyxnyhdArr.length; i++) {
        if (yyxnyhdArr[i]) {
          yyxnyhd = yyxnyhdArr[i];
          $.index = i + 1;
        
          console.log(`\n开始【爷爷的小农院${$.index}】`)
await star()



  }
}
      }else  {
          if (process.env.yyxnyhd && process.env.yyxnyhd.indexOf('@') > -1) {
            yyxnyhdArr = process.env.yyxnyhd.split('@');
            console.log(`您选择的是用"@"隔开\n`)
        } else {
            yyxnyhds = [process.env.yyxnyhd]
        };
        Object.keys(yyxnyhds).forEach((item) => {
        if (yyxnyhds[item]) {
            yyxnyhdArr.push(yyxnyhds[item])
        }
    })
          console.log(`共${yyxnyhdArr.length}个cookie`)
	        for (let k = 0; k < yyxnyhdArr.length; k++) {
                $.message = ""
                yyxnyhd = yyxnyhdArr[k]
                $.index = k + 1;
          console.log(`\n开始【爷爷的小农院${$.index}】`)
await star()

	        }
      }
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


function yyxnyck() {
   if ($request.url.indexOf("sync") > -1) {
  const yyxnyhd = JSON.stringify($request.headers)
if(yyxnyhd)    $.setdata(yyxnyhd,`yyxnyhd${status}`)


$.log(yyxnyhd)


   $.msg($.name,"",'爷爷的小农院'+`${status}` +'数据获取成功！')
 
}
}

async function star(){
    await account()
await stallShopping()
await unlock(3)
await unlock(4)
await unlock(5)
await Order()

await used()
await harvest(0)
await harvest(1)
await harvest(2)
await harvest(3)
await harvest(4)
await harvest(5)
await exchangeOrder()
await bank()
await bank()
await bank()
await bank()
await bank()
await bank()
await bank()
await bank()
await bank()
await unLockPlant()
await Order()

await used()
await harvest(0)
await harvest(1)
await harvest(2)
await harvest(3)
await harvest(4)
await harvest(5)
await exchangeOrder()
await visitor()
await visitor()
await visitor()
await task()
for (let i = 0; i < 10; i++) {
await updateLevel("house")
await updateLevel("kitchen")
await updateLevel("road")
await updateLevel("stall")
await updateLevel("warehouse")
}
await unlockKitchen(4)
await unlockKitchen(5)
await oemHarvest(0)
await oemHarvest(1)
await oemHarvest(2)
await oemHarvest(3)
await oemHarvest(4)
await oemHarvest(5)
await makeKitchen(20102,0)
await makeKitchen(20103,1)
await makeKitchen(20104,2)
await makeKitchen(20105,3)
await makeKitchen(20106,4)
await makeKitchen(20107,5)
await allAcc()
await oemHarvest(0)
await oemHarvest(1)
await oemHarvest(2)
await oemHarvest(3)
await oemHarvest(4)
await oemHarvest(5)

}


async function account(){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game/account`,
        headers: JSON.parse(yyxnyhd),
       body: "null",
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){
         bankNoteCount = result.result.userMessage.bankNoteCount
         money = result.result.userMessage.money
         redBagTotal = result.result.userMessage.redBagTotal
         nickname = result.result.userMessage.nickName
         console.log(`欢迎你叼毛：${nickname}\n金钱：${bankNoteCount}\n存钱罐：${money}\n余额：${redBagTotal}`)
         
         num = redBagTotal*0.0001
         
             
             $.log("可提金额约："+num.toFixed(1))
            if(redBagTotal>=3000){
          

             
            }

        
} else {
    
   
      console.log(`\n${result.message}`)

       
}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
    async function plant(landIndex,seedIndex){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game/plant`,
        headers: JSON.parse(yyxnyhd),
       body: `[{"landIndex":${landIndex},"seedIndex":${seedIndex}},"isVideo":true]`,
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){

         console.log(`种地成功 成熟时间：${result.result.landMessages[0].countdown}秒`)
 
            

        
} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  async function plantAll(landIndex,seedIndex){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game/plantAll`,
        headers: JSON.parse(yyxnyhd),
       body: `[{"landIndex":${landIndex},"seedIndex":${seedIndex}}]`,
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){

         console.log(`种地成功 成熟时间：${result.result.landMessages[0].countdown}秒`)
 
            

        
} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function harvest(landIndex){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game/harvest`,
        headers: JSON.parse(yyxnyhd),
       body: `{"landIndex":${landIndex}}`,
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){

         console.log(`收割成功 红包：${result.result.redBagTotal}\n金币：${result.result.bankNoteTotal}`)
 
            

        
} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  
  async function exchangeOrder(){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game/exchangeOrder`,
        headers: JSON.parse(yyxnyhd),
       body: `{}`,
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){

         console.log(`订单成功 获得红包：${result.result.redBagIncrease}\n下一等级：${result.result.redBagOrderLevel}下一等级红包：${result.result.redBagOrderConf.amount}`)
 
            

        
} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  async function unlock(landIndex){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game/unlock`,
        headers: JSON.parse(yyxnyhd),
       body: `{"landIndex":${landIndex},"video":true}`,
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){
if(result.result.landMessage.unlock== true){
         console.log(`土地解锁成功`)}


        
} else {
 console.log(`\n${result.message}`)

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
       url: `https://bp-api.coohua.com/bubuduo-yydxny/task/getHomePageTask`,
        headers: JSON.parse(yyxnyhd),
       body: `{}`,
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){
tasklist = result.result.homePageTask.homePage
for (let i = 0; i < tasklist.length; i++) {
    tkid =tasklist[i].taskId
    await dotask(tkid)
}


        
} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
      async function dotask(taskId){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/task/finish/daily?taskId=${taskId}&video=true`,
        headers: JSON.parse(yyxnyhd),
       //body: `{}`,
        
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){

    
$.log("领取红包："+result.result.amount)



} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
        async function stallShopping(){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game/stallShopping`,
        headers: JSON.parse(yyxnyhd),
       //body: `{}`,
        
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){

    
$.log("领取红包："+result.result.redBagIncrease)

        
} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  
         async function visitor(){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game/visitor`,
        headers: JSON.parse(yyxnyhd),
       body: `{"video":true}`,
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){

    
$.log("领取存钱罐："+result.result.moneyIncrease)
    


        
} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  
           async function updateLevel(a){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/yard/updateLevel?name=${a}&isVideo=true`,
        headers: JSON.parse(yyxnyhd),
       
        
    }
   $.get(nm,async(error, response, data) =>{
//console.log(`${JSON.stringify(nm)}`)
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){
if(result.result.success==true){
    
$.log("红包增加："+result.result.redBagIncrease)}
    


        
} else {
 console.log(`\n${result.message}已满级`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  
  async function used(){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game/cloud/used`,
        headers: JSON.parse(yyxnyhd),
       body: `{"isVideo":true}`,
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){
if(result.result.moneyAdd==true){
    
$.log("存钱罐增加："+result.result.moneyIncrease)
    
}

        
} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  
  async function bank(){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/sync/guide/bank`,
        headers: JSON.parse(yyxnyhd),
       body: `9999`,
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){

    
$.log("金钱增加："+result.result.bankNoteIncrease)
    


        
} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
async function unLockPlant(){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game/unLockPlant`,
        headers: JSON.parse(yyxnyhd),
       body: `{"seedIndex":10115}`,
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){
if(result.result.unlockSeed==10115)
    
$.log("解锁最贵的薰衣草："+result.result.unlockSeed)
    


        
} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }  
  
  async function makeKitchen(oemId,kitchenId){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game/makeKitchen`,
        headers: JSON.parse(yyxnyhd),
       body: `{"oemId":${oemId},"kitchenId":${kitchenId}}`,
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){

    
$.log("厨房制作成功 成熟时间："+result.result.kitchenMessage.countdown)
    


        
} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }  
   async function unlockKitchen(kitchenId){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game//unlockKitchen`,
        headers: JSON.parse(yyxnyhd),
       body: `{"kitchenId":${kitchenId},"video":true}`,
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){
if(result.result.landMessage.unlock==true){
    
$.log("灶台解锁成功 红包增加："+result.result.redBagIncrease)}
    


        
} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  
     async function oemHarvest(kitchenId){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game/oemHarvest`,
        headers: JSON.parse(yyxnyhd),
       body: `{"kitchenId":${kitchenId}}`,
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){

    
$.log("收菜红包增加："+result.result.redBagIncrease)
    


        
} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  async function allAcc(){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game/allAcc`,
        headers: JSON.parse(yyxnyhd),
       body: `{"isVideo":true}`,
        
    }
   $.post(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){
if(result.result.moneyAdd==true){
    
$.log("存钱罐增加："+result.result.moneyIncrease)}
    


        
} else {
 console.log(`\n${result.message}`)

}
 
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  
   async function Order(){
 return new Promise((resolve) => {


 let nm = {
       url: `https://bp-api.coohua.com/bubuduo-yydxny/game/message?`,
        headers: JSON.parse(yyxnyhd),
       //body: `{"isVideo":true}`,
        
    }
   $.get(nm,async(error, response, data) =>{

    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){
if(result.result.redBagOrderFin==false){
    
$.log("当前正在完成订单等级："+result.result.redBagOrderLevel)
await plantAll(0,result.result.redBagOrderConf.list[0].index)
await plantAll(1,result.result.redBagOrderConf.list[0].index)
await plantAll(2,result.result.redBagOrderConf.list[0].index)
await plantAll(3,result.result.redBagOrderConf.list[1].index)
await plantAll(4,result.result.redBagOrderConf.list[2].index)
await plantAll(5,result.result.redBagOrderConf.list[3].index)    
}else {

}
    


        
} else {
 console.log(`\n${result.message}`)

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
