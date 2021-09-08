/*
微信公众号 柠檬玩机交流
活动地址：
http://nm66.top/tfb.jpg

微信 支付宝提现秒到


注意 每天请手动阅读2次试读再运行脚本
注意 每天请手动阅读2次试读再运行脚本
注意 每天请手动阅读2次试读再运行脚本

-------------圈X运行-------------
[rewrite_local]

http://\S+sign/info\Stime=\S+ url script-request-header http://nm66.top/qltfb.js

hostname = api.ayonbnix.cn

-------------青龙或者其他容器运行-------------
-------------青龙拉取-------------
ql raw http://nm66.top/qltfb.js
放配置里 定时如下面
export tfbhd='{"Cookie":"tfb_msg=抓包的;gfsessionid=抓包的","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.8(0x18000825) NetType/WIFI Language/zh_CN"}'
手动抓包替换上面2个 放在配置里面 多账号用@隔开
-------------V2P运行-------------
直接订阅BOXJX 
http://nm66.top/nm.boxjs.json
下载脚本 设置变量tfbhd多账号@隔开或者tfbhd2...
定时如下面
*/

// [task_local]

// */5 9-23 * * * qltfb.js, tag=推粉宝阅读, img-url=http://nm66.top/1.jpg, enabled=true





const $ = new Env('柠檬推粉宝阅读');
let status;
status = (status = ($.getval("tfbstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
let tfbhdArr = [],tfbcount = ''
let tfbhd= $.isNode() ? (process.env.tfbhd ? process.env.tfbhd : "") : ($.getdata('tfbhd') ? $.getdata('tfbhd') : "")
let tfbhds = ""
const logs =0;
var timestamp = Math.round(new Date().getTime()/1000).toString();
!(async () => {
  if (typeof $request !== "undefined") {
        await tfbck()
  } else {
      if(!$.isNode()){
          tfbhdArr.push($.getdata('tfbhd'))
          let tfbcount = ($.getval('tfbcount') || '1');
          for (let i = 2; i <= tfbcount; i++) {
            tfbhdArr.push($.getdata(`tfbhd${i}`))
            }
    console.log(`------------- 共${tfbhdArr.length}个账号-------------\n`)
      for (let i = 0; i < tfbhdArr.length; i++) {
        if (tfbhdArr[i]) {
          tfbhd = tfbhdArr[i];
          $.index = i + 1;
        
          console.log(`\n开始【推粉宝阅读${$.index}】`)
     //$.log("注意 每天请手动阅读2次试读再运行脚本\n")
     //$.log("注意 每天请手动阅读2次试读再运行脚本\n")
     //$.log("注意 每天请手动阅读2次试读再运行脚本\n")
     //$.log("每日上限阅读看返回的提示\n") 
     //$.log("提现金额如果达标 将会自动提现") 
            $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
            $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
            $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
            $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
            $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
     await sign(timestamp)
     await myInfo(signdata)
     //if($.read > 2){
     //await sign(timestamp)
     //await task(signdata)
         //   }else {$.log("请手动前往阅读2次试读再来运行脚本")}

  }
}
      }else  {
          if (process.env.tfbhd && process.env.tfbhd.indexOf('@') > -1) {
            tfbhdArr = process.env.tfbhd.split('@');
            console.log(`您选择的是用"@"隔开\n`)
        } else {
            tfbhds = [process.env.tfbhd]
        };
        Object.keys(tfbhds).forEach((item) => {
        if (tfbhds[item]) {
            tfbhdArr.push(tfbhds[item])
        }
    })
          console.log(`共${tfbhdArr.length}个cookie`)
	        for (let k = 0; k < tfbhdArr.length; k++) {
                $.message = ""
                tfbhd = tfbhdArr[k]
                $.index = k + 1;
          console.log(`\n开始【推粉宝阅读${$.index}】`)
     //$.log("注意 每天请手动阅读2次试读再运行脚本\n")
     //$.log("注意 每天请手动阅读2次试读再运行脚本\n")
     //$.log("注意 每天请手动阅读2次试读再运行脚本\n")
    // $.log("每日上限阅读看返回的提示\n") 
     //$.log("提现金额如果达标 将会自动提现") 
     $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
            $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
            $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
            $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
            $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
     await sign(timestamp)
     await myInfo(signdata)
    // if($.read > 2){
    // await sign(timestamp)
     //await task(signdata)
         //   }else {$.log("请手动前往阅读2次试读再来运行脚本")}
	        }
      }
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


function tfbck() {
   if ($request.url.indexOf("sign/info") > -1) {
  const tfbhd = JSON.stringify($request.headers)
if(tfbhd)    $.setdata(tfbhd,`tfbhd${status}`)


$.log(tfbhd)


   $.msg($.name,"",'推粉宝阅读'+`${status}` +'数据获取成功！')
 
}
}

async function myInfo(getsign){
 return new Promise((resolve) => {


 let plant6_url = {
       url: `http://api.ayonbnix.cn/read/info?time=${timestamp}&sign=${getsign}`,
        headers: JSON.parse(tfbhd),
       
        
    }
   $.get(plant6_url,async(error, response, data) =>{
       
       //console.log(`${JSON.stringify(plant6_url)}`)
       //$.log(data)
       //console.log(`${JSON.stringify(response)}`)
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){
         $.goldNow = result.data.gold
         $.read = result.data.read
         $.remain = result.data.remain
         console.log(`\n余额：${$.remain}\n已阅读次数：${$.read}\n已阅读金币：${$.goldNow}`)
         
         num = $.remain*0.0001
         
             
             $.log("可提金额约："+num.toFixed(1))
            if($.remain>=3000){
            //$.log("\n=====因每天提现上限6次 提现请手动=====")
            $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
            $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
            $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
            $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
            $.log("\n=====和谐了 请自行手动阅读 \n感谢你的陪伴=====")
            // await sign(timestamp)
            // await withdraw(signdata)
             //t = timestamp
             //await txsign(txgold,t)
             //await tx(txgold,t,signdata2)
             
             
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

async function task(getsign){
 return new Promise((resolve) => {
tk = JSON.parse(tfbhd)
token = tk.Cookie
token=token.match(/uid%22%3A(\S+)%7D/)[1]

 let plant6_url = {
       url: `http://api.ayonbnix.cn/read/task?time=${timestamp}&sign=${getsign}`,
        headers: JSON.parse(tfbhd),
        
        
    }
   $.get(plant6_url,async(error, response, data) =>{
       //console.log(`${JSON.stringify(plant6_url)}`)
       //$.log(data)
       //console.log(`${JSON.stringify(response)}`)
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){
         $.time = result.data.time
         $.link = decodeURIComponent(result.data.link)
         console.log(`\n阅读时间：${$.time}\n阅读连接：${$.link}`)
         $.jumplink = $.link.match(/&url=(\S+)/)[1]
         $.log("\n=====即将阅读=====")
         $.log($.jumplink)
         $.log("\n=====开始阅读=====")
         $.log("\n=====等待10s=====")
         await tasksign($.time)
         await jump(signdata1)
         await getread($.jumplink+'&uu=zg'+token)
         await $.wait(10000)
         await sign(timestamp)
         await finsh(signdata)
     
} else {
    
   
       console.log(`\n=====${result.message}=====`)
       return 

       
}
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }

 async function jump(getsign){
 return new Promise((resolve) => {


 let plant6_url = {
       url: `http://api.ayonbnix.cn/read/jump?sign=${getsign}&time=${$.time}&url=http%3A%2F%2Fmm.uappqro.bar%2Ftask%2Fread%3Fch%3Dzg01%26_t%3D799888`,
        headers: JSON.parse(tfbhd),
       
        
    }
   $.get(plant6_url,async(error, response, data) =>{

    try{

          //console.log(`${JSON.stringify(response)}`)
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
  
  async function finsh(getsign){
 return new Promise((resolve) => {


 let plant6_url = {
       url: `http://api.ayonbnix.cn/read/finish`,
        headers: JSON.parse(tfbhd),
       body: `time=${timestamp}&sign=${getsign}`
        
    }
   $.post(plant6_url,async(error, response, data) =>{

    try{
const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){
         goldNow = result.data.gold
         read = result.data.read
         remain = result.data.remain
         $.log("\n=====阅读完成=====")
         console.log(`\n余额：${remain}\n已阅读次数：${read}\n已阅读金币：${goldNow}`)
          }else{console.log(`\n${result.message}`)}
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
 async function getread(body){
 return new Promise((resolve) => {


 let plant6_url = {
       url: `${body}`,
       
       headers:{
"Host": "mm.twmlopl.bar",
"Connection": "keep-alive",
"Upgrade-Insecure-Requests": "1",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36 QBCore/4.0.1301.400 QQBrowser/9.0.2524.400 Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat",
"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
"Referer": "http://api.eyzeoxox.cn/page",

       }
        
    }
   $.get(plant6_url,async(error, response, data) =>{
    try{
        
        
        //console.log(`${JSON.stringify(response)}`)
        //signdata = data

        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
      
    })
    
   })
 
  } 
async function sign(body){
 return new Promise((resolve) => {


 let plant6_url = {
       url: `http://47.242.106.199/tfb.php?time=${body}`,
       
       
        
    }
   $.get(plant6_url,async(error, response, data) =>{
    try{
        
        
        //$.log(data)
        signdata = data

        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
      
    })
    
   })
 
  }
  async function tasksign(body){
 return new Promise((resolve) => {


 let plant6_url = {
       url: `http://47.242.106.199/tfb1.php?time=${body}`,
       
       
        
    }
   $.get(plant6_url,async(error, response, data) =>{
    try{
        
        
        //$.log(data)
        signdata1 = data

        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
      
    })
    
   })
 
  }
  async function txsign(gold,body){
 return new Promise((resolve) => {


 let plant6_url = {
       url: `http://47.242.106.199/tfb2.php?gold=${gold}&time=${body}`,
      
       
        
    }
   $.get(plant6_url,async(error, response, data) =>{
    try{
        
        
        //$.log(data)
        signdata2 = data

        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
      
    })
    
   })
 
  }
 async function tx(gold,body,getsign){
 return new Promise((resolve) => {
tk = JSON.parse(tfbhd)
token = tk.Cookie

 let plant6_url = {
       url: `http://api.ayonbnix.cn/withdraw/wechat`,
       body:`gold=${gold}&time=${body}&sign=${getsign}`,
        headers: {
"Host": "api.ayonbnix.cn",
"Connection": "keep-alive",
"Accept": "application/json, text/plain, */*",
"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.8(0x18000825) NetType/WIFI Language/zh_CN",
"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
"Origin": "http://api.ayonbnix.cn",
"Referer": "http://api.ayonbnix.cn/page",
"Accept-Language": "zh-CN,zh;q=0.9",
"Cookie": token,
        }
        
        
       
        
    }
   $.post(plant6_url,async(error, response, data) =>{

    try{
const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){
          $.log("=====提现成功=====")
              
          }else {$.log("脚本提现失败，请手动提现")}
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
 async function withdraw(getsign){
 return new Promise((resolve) => {
     
tk = JSON.parse(tfbhd)
token = tk.Cookie

 let plant6_url = {

       url: `http://api.ayonbnix.cn/withdraw/info?time=${timestamp}&sign=${getsign}`,
  
        headers: {
"Host": "api.ayonbnix.cn",
"Connection": "keep-alive",
"Accept": "application/json, text/plain, */*",
"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.8(0x18000825) NetType/WIFI Language/zh_CN",
"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
"Origin": "http://api.ayonbnix.cn",
"Referer": "http://api.ayonbnix.cn/page",
"Accept-Language": "zh-CN,zh;q=0.9",
"Cookie": token,
        }
        
        
       
        
    }
   $.get(plant6_url,async(error, response, data) =>{

    try{
const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 0){
          txgold=result.data.gold
              
          }else {result.message}
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }   
  
  

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
