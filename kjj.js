/*
微信公众号柠檬玩机交流
活动地址：
http://bb.ymjoke.net/qicks/promo/red?sence=uc&state=521139
打不开就扫码
http://nm66.top/kkj.jpg
Tg群 t.me/ningmengwj

使用方法
打开活动地址 即可获取数据 
稳定每天1块多 
第一次请绑定手机
请手动点一下界面的看看任务 不然不加积分
建议每天阅读不要超过100篇文章 
数据会2小时左右失效
脚本出错就重新获取跑


[rewrite_local]

http://\S+/t555/index.html\St=\S+ url script-request-header http://nm66.top/kjj.js

hostname = *.kxlock.com,*.kytelnet.com，*.shop

*/

// [task_local]
 // 
// 0 */60 12-23 * * http://nm66.top/kjj.js, tag=柠檬看看集自动阅读, img-url=http://nm66.top/1.jpg, enabled=true




const $ = new Env('柠檬看看集自动阅读');
let status;
status = (status = ($.getval("kjjstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const kjjhdArr = [],kjjcount = ''
const kjjurlArr = []
let kjjhd = $.getdata('kjjhd')
let kjjurl = $.getdata('kjjurl')
const logs =0;
var timestamp = (new Date()).valueOf();

!(async () => {
  if (typeof $request !== "undefined") {
    await kjjck()
   
  } else {
    kjjhdArr.push($.getdata('kjjhd'))
    kjjurlArr.push($.getdata('kjjurl'))
    let kjjcount = ($.getval('kjjcount') || '1');
  for (let i = 2; i <= kjjcount; i++) {
    kjjhdArr.push($.getdata(`kjjhd${i}`))
    kjjurlArr.push($.getdata(`kjjurl${i}`))
  }
    console.log(`------------- 共${kjjhdArr.length}个账号-------------\n`)
      for (let i = 0; i < kjjhdArr.length; i++) {
        if (kjjhdArr[i]) {
          kjjhd = kjjhdArr[i];
          kjjurl = kjjurlArr[i];
          $.index = i + 1;
          console.log(`\n开始【柠檬看看集自动阅读${$.index}】`)

         
     await havesyz()
     //await tx()
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


function kjjck() {
   if ($request.url.indexOf("index.html") > -1) {
  const kjjhd = JSON.stringify($request.headers)
if(kjjhd)    $.setdata(kjjhd,`kjjhd${status}`)
  const kjjurl = JSON.stringify($request.url)
if(kjjurl)    $.setdata(kjjurl,`kjjurl${status}`)
$.log(kjjhd)
$.log(kjjurl)
   $.msg($.name,"",'柠檬看看集'+`${status}` +'数据获取成功！')
 
}
}





//阅读
async function zdyd(){
 return new Promise((resolve) => {
     ticket = kjjurl.match(/t=(\S+)"/)[1]
 let plant6_url = {
   		url: 'http://ydt.kxlock.com:10080/code008/ydt/reqgouc?ticket='+ticket,
        //headers: JSON.parse(kjjhd),

        
   	}
   $.post(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        
          if(result.code == 1){
         
        $.log(`\n阅读失败:`+result.msg)
        $.log('\n==本时段已阅读完成==')
        
        
} else {
    
   
       $.log(`\n阅读成功`+`\n本时段阅读次数：`+result.data.fnum+`\n正在提交阅读`)
       $.log('提交阅读完成 等待执行新一轮阅读')
       

}
          
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
   		url: 'http://kkj.kytelnet.com:10080/kkjapi/user/wealth?ticket='+ticket,
        //headers: JSON.parse(kjjhd),

        
   	}
   $.get(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)

          if(result.code == 0){
          console.log(`\n==信誉积分==`+'\n'+result.data.creditPoint+`\n==当前余额==`+'\n'+result.data.balance*0.0001+`\n==已经提现==`+'\n'+result.data.minOut*0.1+`\n==当前邀请==`+'\n'+result.data.inviteBalance*0.0001)

} else {
       console.log(`\n个人信息获取失败`+result.msg)
}
          
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }



async function havesyz(){
for(let i = 0; i < 6; i ++){
no1 = i;
await $.wait(10000)
await zdyd()
//$.log(no1)
if(no1 == 5){
    await info()
    //await tx()

}

}
} 







async function tx(){
 return new Promise((resolve) => {
     
 let plant6_url = {
   		url: 'http://kjj.kytelnet.com:10080/kjjapi/getTxUrl?ticket='+ticket,
        //headers: JSON.parse(kjjhd),

        
   	}
   $.get(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)

          if(result.code == 0){
          console.log(`\n提现成功`+result.msg)
          //txurl = result.data

} else {
       console.log(`\n提现失败`+result.msg)
}
          
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
   		url: txurl,
        headers: JSON.parse(kjjhd),

        
   	}
   $.get(plant6_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)

          if(result.code == 0){
          console.log(`\n提现成功`+result.msg)
          txurl = result.data

} else {
       console.log(`\n提现失败`+result.msg)
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
