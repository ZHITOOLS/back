/*

微信打开链接
http://h5-test.gezs.cc/transfer.html?invitecode=0432848e-6f75-11ec-9810-525400b7812a

需要手动抓包 因为脚本还没完善
进入链接之后登陆好之后
打开抓包软件
然后去抓 成语闯关 直到打开小程序为止
然后返回抓包软件 搜索🔍

https://api.gzswin.cn/game/index
这个是Token链接 进去复制token的数据

https://api.gezs.cc/archery/index
这个是unionid链接 进去复制unionid的数据

然后打开Boxjs 点击我的 点击 数据查看器

数据健(key) 粘贴 ddtjunionid 
然后将你抓包的数据粘贴在 数据编辑器下方 点保存

数据健(key) 粘贴 ddtjtoken 
然后将你抓包的数据粘贴在 数据编辑器下方 点保存

ddtjunionid='ngjptgmgwgmgmgmpmgmgwgngmgwg'
ddtjtoken='jgmgmgmpmpxmpmgwg6797649494646'

本地重写
[rewrite_local]
#多点淘金
https://api.gzswin.cn/game/index url script-request-body ddtj.js
https://api.gezs.cc/archery/index url script-request-body ddtj.js

定时任务
25 3,18 * * * ddtj.js, tag=多点淘金, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/AmyTelecom.png, enabled=true

主机名
MitM
api.gzswin.cn,api.gezs.cc


青龙变量  ddtjunionid    ddtjtoken     多账号@隔开

*/
const $ = new Env('多点淘金');
let status;
status = (status = ($.getval("ddtjstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let ddtjunionidArr = [], ddtjtokenArr = [], ddtjcount = ''
let ddtjunionid = ($.isNode() ? process.env.ddtjunionid : $.getdata('ddtjunionid')) || '';
let ddtjtoken = ($.isNode() ? process.env.ddtjtoken : $.getdata('ddtjtoken')) || '';
let dydcode = '', dydid = '', wxurl = '', daan = '', openid = '',uid = '',cy = '',yue = ''
!(async () => {
  if (typeof $request !== "undefined") {
    await ddtjck()

  } else {
    ddtjunionidArr = ddtjunionid.split('@')
    ddtjtokenArr = ddtjtoken.split('@')
    console.log(`------------- 共${ddtjunionidArr.length}个账号-------------\n`)
    for (let i = 0; i < ddtjunionidArr.length; i++) {
      ddtjunionid = ddtjunionidArr[i]
      ddtjtoken = ddtjtokenArr[i]
      $.index = i + 1;
      console.log(`\n开始【多点淘金${$.index}】`)
      await ddtjhq()
      //console.log(`\n多点淘金【成语闯关】`)
      await ddtjye()

    }
  }

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//数据获取


function ddtjck() {
  if ($request.url.indexOf("game/index") > -1) {
    const ddtjtoken = JSON.stringify($request.body)
    if (ddtjtoken) $.setdata(ddtjtoken.token, `ddtjtoken${status}`)
    $.log(ddtjtoken.token)
    $.msg($.name, "", '多点淘金' + `${status}` + 'token获取成功！')
  }
  if ($request.url.indexOf("archery/index") > -1) {
    const ddtjunionid = JSON.stringify($request.body)
    if (ddtjunionid) $.setdata(ddtjunionid.unionid, `ddtjunionid${status}`)
    $.log(ddtjunionid.unionid)
    $.msg($.name, "", '多点淘金' + `${status}` + 'unionid获取成功！')
  }
}
//获取uid
function ddtjhq(timeout = 0) {
  return new Promise((resolve) => {

    let url = {
      url: 'https://api.gzswin.cn/index/index',
      headers: JSON.parse(`{"Host":"api.gzswin.cn","Accept":"*/*","User-Agent":"Mozilla/5.0 (iPad; CPU OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800103f) NetType/WIFI Language/zh_CN","Content-Type":"application/json","Content-Length":"62"}`),
      body: `{"token":"${ddtjtoken}"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          $.log(`\n多点淘金吊毛用户: ${result.data.user.id} 【${result.data.user.nickname}】 你还剩：${result.data.money.balance} 吊毛`)
          uid = result.data.user.id
          openid = result.data.user.openid
          await $.wait(200)
          $.log(`\n多点淘金:开始【成语闯关】`)
          for(let win =0;win<=2;win++){
            await $.wait(1000)
            await ddtjcy()
            await $.wait(3000)
            await ddtjcy1(0,win)
          }
          await $.wait(1000)
          await ddtjcy()
          await ddtjcy4()
          await $.wait(1000)
          await ddtjcy3()
          $.log(`\n多点淘金:开始【文章答题】`)
          await ddtjks()
        } else {
          $.log(`\n多点淘金uid获取:${data}`)

        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//成语刷新
function ddtjcy(timeout = 0) {
  return new Promise((resolve) => {

    let url = {
      url: 'https://api.gezs.cc/archery/index',
      headers: {"Host":"api.gezs.cc","Connection":"keep-alive","Content-Length":"111","Content-Type":"application/x-www-form-urlencoded","Accept-Encoding":"gzip,compress,br,deflate","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800103f) NetType/WIFI Language/zh_CN","Referer":"https://servicewechat.com/wx5e444063a1393bb9/9/page-frame.html"},
      body: `appid=wx5e444063a1393bb9&unionid=${ddtjunionid}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          $.log(`\n多点淘金成语刷新: ${result.msg}`)
          
        } else {
          $.log(`\n多点淘金成语刷新:${data}`)
          
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//成语1
function ddtjcy1(timeout = 0,win) {
  return new Promise((resolve) => {

    let url = {
      url: 'https://api.gezs.cc/archery/ad',
      headers: JSON.parse(`{"Host":"api.gezs.cc","Accept":"*/*","User-Agent":"Mozilla/5.0 (iPad; CPU OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800103f) NetType/WIFI Language/zh_CN","Content-Type":"application/json","Content-Length":"62"}`),
      body: `{"type":1,"win":${win},"appid":"wx5e444063a1393bb9","unionid":"${ddtjunionid}","user_id":"${uid}","channel":"ddian888"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          $.log(`\n多点淘金成语答题${win}: ${result.msg}`)
          await $.wait(3000)
          await ddtjcy2(0,win)
        } else {
          $.log(`\n多点淘金成语答题${win}:${data}`)
          
          await $.wait(3000)
          await ddtjcy2(0,win)
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//成语2
function ddtjcy2(timeout = 0,win) {
  return new Promise((resolve) => {

    let url = {
      url: 'https://api.gezs.cc/archery/arrow',
      headers: JSON.parse(`{"Host":"api.gezs.cc","Accept":"*/*","User-Agent":"Mozilla/5.0 (iPad; CPU OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800103f) NetType/WIFI Language/zh_CN","Content-Type":"application/json","Content-Length":"62"}`),
      body: `{"appid":"wx5e444063a1393bb9","unionid":"${ddtjunionid}","win":${win},"openid":"${openid}"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          $.log(`\n多点淘金成语验证${win}: ${result.msg}`)
        } else {
          $.log(`\n多点淘金成语验证${win}:${data}`) 
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//成语3
function ddtjcy3(timeout = 0) {
  return new Promise((resolve) => {

    let url = {
      url: 'https://api.gezs.cc/archery/red',
      headers:{"Host":"api.gezs.cc","Connection":"keep-alive","Content-Length":"111","Content-Type":"application/json","Accept-Encoding":"gzip,compress,br,deflate","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800103f) NetType/WIFI Language/zh_CN","Referer":"https://servicewechat.com/wx5e444063a1393bb9/9/page-frame.html"},
      body: `{"unionid":"${ddtjunionid}","appid":"wx5e444063a1393bb9","openid":"${openid}"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          $.log(`\n多点淘金成语提交: ${result.msg}`)

          // $done()
          await $.wait(200)
         
        } else {
          $.log(`\n多点淘金成语提交:${data}`)

        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
function ddtjcy4(timeout = 0,win) {
  return new Promise((resolve) => {

    let url = {
      url: 'https://api.gezs.cc/archery/ad',
      headers: {"Host":"api.gezs.cc","Connection":"keep-alive","Content-Length":"111","Content-Type":"application/json","Accept-Encoding":"gzip,compress,br,deflate","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800103f) NetType/WIFI Language/zh_CN","Referer":"https://servicewechat.com/wx5e444063a1393bb9/9/page-frame.html"},
      body: `{"type":3,"win":0,"appid":"wx5e444063a1393bb9","unionid":"${ddtjunionid}","user_id":"${uid}","channel":"ddian888"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          $.log(`\n多点淘金提交验证: ${result.msg}`)
         
        } else {
          $.log(`\n多点淘金提交验证:${data}`)
          
          
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//答一答code
function ddtjks(timeout = 0) {
  return new Promise((resolve) => {

    let url = {
      url: 'https://api.gzswin.cn/index/read_urlcode',
      headers: JSON.parse(`{"Host":"api.gzswin.cn","Accept":"*/*","User-Agent":"Mozilla/5.0 (iPad; CPU OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800103f) NetType/WIFI Language/zh_CN","Content-Type":"application/json","Content-Length":"62"}`),
      body: `{"token":"${ddtjtoken}"}`
    }

    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          $.log(`\n多点淘金获得答一答code:${result.data.url_code}`)
          await $.wait(300)
          dydcode = result.data.url_code
          await ddtjid()

        } else {
          $.log(`\n多点淘金:${data}`)
          await $.wait(200)

        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//题目id
function ddtjid(timeout = 0) {
  return new Promise((resolve) => {

    let url = {
      url: 'https://api.gzswin.cn/index/read_action',
      headers: JSON.parse(`{"Host":"api.gzswin.cn","Accept":"*/*","User-Agent":"Mozilla/5.0 (iPad; CPU OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800103f) NetType/WIFI Language/zh_CN","Content-Type":"application/json","Content-Length":"62"}`),
      body: `{"url_code":"${dydcode}","token":"${ddtjtoken}"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          $.log(`\n多点淘金题目id:${result.data.article.id} ${result.data.article.name}`)
          dydid = result.data.article.id
          //console.log(dydid);
          wxurl = result.data.article.url
          
          //$.log(wxurl)
          //$done()
          await dydurl()

        } else {
          $.log(`\n多点淘金题目id:${data}`)

        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}

//微信url
function dydurl(timeout = 0) {
  return new Promise((resolve) => {

    let url = {
      url: wxurl,
      //headers : JSON.parse(`{"Host":"api.gzswin.cn","Accept":"*/*","User-Agent":"Mozilla/5.0 (iPad; CPU OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800103f) NetType/WIFI Language/zh_CN","Content-Type":"application/json","Content-Length":"62"}`),

    }
    $.get(url, async (err, resp, data) => {
      try {

        //const result = JSON.parse(data)
        if (resp.statusCode == 200) {
          
          if(data.match(/profile_nickname">(.+?)<\/strong/) != null){
            daan = data.match(/profile_nickname">(.+?)<\/strong/)[1]
            $.log(`\n多点淘金答案:${data.match(/profile_nickname">(.+?)<\/strong/)[1]}`)
            await $.wait(300)
            await ddtjyz()
            await ddtjlq()
          }else{
            $.log(`\n多点淘金答案:没匹配到答案，随便答了~`)
            daan = "老子不知道啊"
            await $.wait(300)
            await ddtjyz()
            await ddtjlq()
        }
          
        } else {
          $.log(`\n多点淘金答案${data}`)

        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}

//验证
function ddtjyz(timeout = 0) {
  return new Promise((resolve) => {

    let url = {
      url: 'https://api.gzswin.cn/index/read_time_start',
      headers: {"Host":"api.gzswin.cn","Content-Type":"application/json","Origin":"https://h5.gzswin.cn","Accept-Encoding":"gzip, deflate, br","Connection":"keep-alive","Accept":"*/*","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800103f) NetType/WIFI Language/zh_CN","Referer":"https://h5.gzswin.cn/?a=612/","Accept-Language":"zh-cn"},
      body: `{"article_id":${dydid},"openid":"${openid}","unite_id":"","token":"${ddtjtoken}"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          $.log(`\n多点淘金验证:${result.msg}`)
          await $.wait(2000)
          await read_subject() 
        } else {
          $.log(`\n多点淘金验证${data}`)

        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}

function read_subject(timeout = 0) {
  return new Promise((resolve) => {

    let url = {
      url: 'https://api.gzswin.cn/index/read_subject',
      headers: {"Host":"api.gzswin.cn","Accept":"*/*","User-Agent":"Mozilla/5.0 (iPad; CPU OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800103f) NetType/WIFI Language/zh_CN","Content-Type":"application/json"},
      body: `{"article_id":${dydid},"token":"${ddtjtoken}"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          await $.wait(2000)
          await ddtjlq()
        } else {

        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}


//领取
function ddtjlq(timeout = 0) {
  return new Promise((resolve) => {

    let url = {
      url: 'https://api.gzswin.cn/index/read_subject_query',
      headers: JSON.parse(`{"Host":"api.gzswin.cn","Accept":"*/*","User-Agent":"Mozilla/5.0 (iPad; CPU OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800103f) NetType/WIFI Language/zh_CN","Content-Type":"application/json","Content-Length":"62"}`),
      body: `{"article_id":${dydid},"author":"${daan}","token":"${ddtjtoken}"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          $.log(`\n多点淘金答题:${result.msg}`)

          await $.wait(2000)
          await ddtjid()
        } else {
          $.log(`\n多点淘金答题${data}`)
          await $.wait(2000)
          await ddtjid()
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//提现判断
function ddtjye(timeout = 0) {
  return new Promise((resolve) => {

    let url = {
      url: 'https://api.gzswin.cn/index/index',
      headers: JSON.parse(`{"Host":"api.gzswin.cn","Accept":"*/*","User-Agent":"Mozilla/5.0 (iPad; CPU OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800103f) NetType/WIFI Language/zh_CN","Content-Type":"application/json","Content-Length":"62"}`),
      body: `{"token":"${ddtjtoken}"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          yue = result.data.money.balance
          if(yue >= 0.3){
            $.log(`\n吊毛~你现在有: 【${result.data.money.balance}】 根毛，去拔毛咯！`)
            await $.wait(200)
            await ddtjtx()
          }else {
          
          $.log(`\n多点淘金余额不足:【跳过提现】`)
          }
          
        } else {
          $.log(`\n多点淘金:${data}`)

        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}

//提现
function ddtjtx(timeout = 0) {
  return new Promise((resolve) => {

    let url = {
      url: 'https://api.gzswin.cn/wxpay/index',
      headers: JSON.parse(`{"Host":"api.gzswin.cn","Accept":"*/*","User-Agent":"Mozilla/5.0 (iPad; CPU OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x1800103f) NetType/WIFI Language/zh_CN","Content-Type":"application/json","Content-Length":"62"}`),
      body: `{"money":${yue},"allScore":1,"token":"${ddtjtoken}"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          $.log(`\n多点淘金提现:${result.msg}`)
          await $.wait(3000)
        } else {
          $.log(`\n多点淘金提现:${data}`)
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}


function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
