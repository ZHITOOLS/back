/*
微信阅读：番茄看看
阅读入口 -> http://m.earthmembery.club/r?upuid=6675563
备用链接 -> http://m.ppapp.fun/r?upuid=6675563

每轮阅读前需要重新捉包，CK很快失效
需要电脑设置V2P代理，用电脑微信捉包
电脑设置代理方法：http://www.win7zhijia.cn/win10jc/win10_26643.html

没有定时，建议禁用定时任务，捉完包之后手动开始跑
V2P报错依赖问题的话，自己去安装依赖
跑不同微信阅读脚本时，关闭其他阅读类的https://open.weixin.qq.com/connect/oauth2/authorize重写，否则会冲突

重写：
fast_reada/do_read   fqkk.js
https://open.weixin.qq.com/connect/oauth2/authorize  fqkk.js

MITM:
open.weixin.qq.com

如果之后番茄看看的域名换了，把域名写到变量fqkkHost里
*/
// @grant require
const jsname = '番茄看看'
const $ = new Env(jsname);
const logDebug = 0

const notifyFlag = 1; //0为关闭通知，1为打开通知,默认为1
let notifyStr = ''

let httpResult //global buffer

let user

let userIdx = 0
let userCount = 0

let fqkkHost = ($.isNode() ? process.env.fqkkHost : $.getdata('fqkkHost')) || 'm.sgzfwd.bar';
let fqkkWxParam = ($.isNode() ? process.env.fqkkWxParam : $.getdata('fqkkWxParam')) || '';
let fqkkCookie = ($.isNode() ? process.env.fqkkCookie : $.getdata('fqkkCookie')) || '';

///////////////////////////////////////////////////////////////////
class UserInfo {
    constructor(wxParam,cookie) {
        this.index = ++userIdx
        this.flag = true
        this.gold = 0
        this.jkey = ''
        this.helpee = ''
        
        this.cookie = cookie
        
        let wxParamJSON = req2json(wxParam)
        this.uin = wxParamJSON.uin
        this.key = wxParamJSON.key
        this.version = wxParamJSON.version
        this.pass_ticket = wxParamJSON.pass_ticket
        
        this.wxAuthLink = ''
        this.wxReplyLink = ''
    }
    
    async finishTask() {
        let url = `http://${fqkkHost}/reada/finishTask`
        let body = `readLastKey=`
        let host = url.replace('//','/').split('/')[1]
        let urlObject = {
            url: url,
            headers: {
                'Host': host,
                'Connection' : 'keep-alive',
                'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6305002e)',
                'X-Requested-With' : 'XMLHttpRequest',
                'Accept' : '*/*',
                'Cookie' : this.cookie,
                'Accept-Encoding' : 'gzip, deflate',
                'Accept-Language' : 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Content-Length' : body.length,
            },
            body: body,
        }
        await httpRequest('post',urlObject)
        if(!httpResult || httpResult.statusCode != 200) {this.flag=false;return;}
        let result = JSON.parse(httpResult.body);
        if(!result) return
        //console.log(result)
        if(result.data) {
            console.log(`本轮剩余${result.data.infoView.rest}可读，今日已读${result.data.infoView.num}，今日收益${result.data.infoView.score}币`)
            if(result.data.infoView.msg) {
                let str1 = result.data.infoView.msg.replace(/<.*?>/g,'')
                console.log(str1);
            }
            if(result.data.infoView.rest==0) this.flag=false;
        } else {
            console.log(`查询今日阅读情况失败`)
            console.log(result)
        }
    }
    
    async do_read() {
        let url = `http://${fqkkHost}/fast_reada/do_read?for=${this.helpee}&zs=&pageshow&r=0.${randomString(17)}`
        if(this.jkey) url += `&jkey=${this.jkey}`
        let host = url.replace('//','/').split('/')[1]
        let urlObject = {
            url: url,
            headers: {
                'Host': host,
                'Connection' : 'keep-alive',
                'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6305002e)',
                'X-Requested-With' : 'XMLHttpRequest',
                'Accept' : '*/*',
                'Cookie' : this.cookie,
                'Accept-Encoding' : 'gzip, deflate',
                'Accept-Language' : 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
            },
        }
        await httpRequest('get',urlObject)
        //console.log(httpResult)
        if(!httpResult || httpResult.statusCode != 200) {this.flag=false;return;}
        let result = JSON.parse(httpResult.body);
        if(!result) return
        //console.log(result)
        if(result.jkey) {
            this.jkey = result.jkey
            this.wxAuthLink = result.url
            if(result.success_msg) console.log(result.success_msg)
            await $.wait(200);
            await this.wxAuth(); 
        } else {
            console.log(`开始阅读失败`)
            console.log(result)
            this.flag = false
        }
    }
    
    async wxAuth() {
        if(!this.wxAuthLink) return;
        let url = this.wxAuthLink.replace('#wechat_redirect','') + `&uin=${this.uin}&key=${this.key}&version=${this.version}&pass_ticket=${this.pass_ticket}`
        let host = url.replace('//','/').split('/')[1]
        let urlObject = {
            url: url,
            headers: {
                'Host': host,
                'Connection' : 'keep-alive',
                'Upgrade-Insecure-Requests' : '1',
                'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6305002e)',
                'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Sec-Fetch-Site' : 'none',
                'Sec-Fetch-Mode' : 'navigate',
                'Sec-Fetch-User' : '?1',
                'Sec-Fetch-Dest' : 'document',
                'Accept-Encoding' : 'gzip, deflate, br',
                'Accept-Language' : 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
            },
        }
        await httpRequest('get',urlObject)
        //console.log(httpResult)
        if(!httpResult || httpResult.statusCode != 200) {this.flag=false;return;}
        let result = httpResult.body;
        if(!result) return
        //console.log(result)
        for(let lines of result.split('\n')) {
            if(lines.indexOf('var authUrl =') > -1) {
                let replyLink = ''
                let cmds = lines + '\nreplyLink = authUrl;'
                eval(cmds)
                this.wxReplyLink = 'https://open.weixin.qq.com' + replyLink
            }
        }
        await $.wait(200);
        await this.wxReply(); 
    }
    
    async wxReply() {
        if(!this.wxReplyLink) return;
        let url = this.wxReplyLink
        let host = url.replace('//','/').split('/')[1]
        let urlObject = {
            url: url,
            headers: {
                'Host': host,
                'Connection' : 'keep-alive',
                'Upgrade-Insecure-Requests' : '1',
                'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6305002e)',
                'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Sec-Fetch-Site' : 'same-origin',
                'Sec-Fetch-Mode' : 'navigate',
                'Sec-Fetch-Dest' : 'document',
                'Accept-Encoding' : 'gzip, deflate, br',
                'Accept-Language' : 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
            },
        }
        await httpRequest('get',urlObject)
        //console.log(httpResult)
        if(!httpResult || httpResult.statusCode != 301) {this.flag=false;return;}
        await $.wait(10)
        await this.wxRedirect1(httpResult.headers.location)
    }
    
    async wxRedirect1(redirectUrl) {
        let url = redirectUrl
        let host = url.replace('//','/').split('/')[1]
        let urlObject = {
            url: url,
            headers: {
                'Host': host,
                'Connection' : 'keep-alive',
                'Upgrade-Insecure-Requests' : '1',
                'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6305002e)',
                'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Sec-Fetch-Site' : 'same-origin',
                'Sec-Fetch-Mode' : 'navigate',
                'Sec-Fetch-Dest' : 'document',
                'Accept-Encoding' : 'gzip, deflate, br',
                'Cookie' : this.cookie,
                'Accept-Language' : 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
            },
        }
        await httpRequest('get',urlObject)
        //console.log(httpResult)
        if(!httpResult || httpResult.statusCode != 302) {this.flag=false;return;}
        await $.wait(10)
        await this.wxRedirect2(httpResult.headers.location)
    }
    
    async wxRedirect2(redirectUrl) {
        let url = redirectUrl
        let host = url.replace('//','/').split('/')[1]
        let urlObject = {
            url: url,
            headers: {
                'Host': host,
                'Connection' : 'keep-alive',
                'Upgrade-Insecure-Requests' : '1',
                'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6305002e)',
                'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Sec-Fetch-Site' : 'same-origin',
                'Sec-Fetch-Mode' : 'navigate',
                'Sec-Fetch-Dest' : 'document',
                'Accept-Encoding' : 'gzip, deflate, br',
                'Cookie' : this.cookie,
                'Accept-Language' : 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
            },
        }
        await httpRequest('get',urlObject)
        //console.log(httpResult)
        if(!httpResult || httpResult.statusCode != 302) {this.flag=false;return;}
        let url_wx = httpResult.headers.location
        if(url_wx.indexOf('#wechat_redirect') == -1) {this.flag=false;return;}
        let url_0 = url_wx.replace('#wechat_redirect','') + `&key=${this.key}&ascene=1&uin=${this.uin}&devicetype=Windows+11+x64&version=${this.version}&lang=zh_CN&exportkey=A1dUeR%2F7MZ6AWOjf558r11s%3D&acctmode=0&pass_ticket=${this.pass_ticket}&wx_header=0&fontgear=2`
        //await $.wait(10)
        //await this.wxRedirect2(url_0)
        
        let rndTime = Math.floor(Math.random()*5) + 8
        console.log(`等待${rndTime}秒完成阅读...`)
        await $.wait(rndTime*1000);
    }
    
    async getGold() {
        let url = `http://${fqkkHost}/fast_reada`
        let host = url.replace('//','/').split('/')[1]
        let urlObject = {
            url: url,
            headers: {
                'Host': host,
                'Connection' : 'keep-alive',
                'Upgrade-Insecure-Requests' : 1,
                'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6305002e)',
                'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Cookie' : this.cookie,
                'Accept-Encoding' : 'gzip, deflate',
                'Accept-Language' : 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
            },
        }
        await httpRequest('get',urlObject)
        //console.log(httpResult)
        if(!httpResult || httpResult.statusCode != 200) {this.flag=false;return;}
        console.log('\n================================')
        for(let lines of httpResult.body.split('\n')) {
            if(lines.indexOf('div class="userinfo-score"') > -1) {
                this.gold = parseFloat(lines.match(/积分:(.*?)</)[1])
                this.money = Math.floor(this.gold)/100
                console.log(`账户余额：${this.gold} ≈ ${this.money}元`)
                if(this.gold >= 40) {
                    console.log('准备提现...')
                    await $.wait(300)
                    await this.withdraw()
                } else {
                    console.log('余额不足，不提现')
                }
                break;
            } else if(lines.indexOf('div class="userinfo-name"') > -1) {
                this.nickname = lines.match(/<div class="userinfo-name">(.*)<\/div>/)[1]
                console.log(`账号昵称：${this.nickname}`)
            }
        }
    }
    
    async withdraw() {
        let url = `http://${fqkkHost}/withdrawal/doWithdraw`
        let body = `amount=${Math.floor(this.gold)}`
        let host = url.replace('//','/').split('/')[1]
        let urlObject = {
            url: url,
            headers: {
                'Host': host,
                'Connection' : 'keep-alive',
                'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6305002e)',
                'X-Requested-With' : 'XMLHttpRequest',
                'Accept' : '*/*',
                'Cookie' : this.cookie,
                'Accept-Encoding' : 'gzip, deflate',
                'Accept-Language' : 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Content-Length' : body.length,
            },
            body: body,
        }
        await httpRequest('post',urlObject)
        if(!httpResult || httpResult.statusCode != 200) {this.flag=false;return;}
        let result = JSON.parse(httpResult.body);
        if(!result) return
        //console.log(result)
        if(result.code == 0) {
            console.log(`成功提现${this.money}元`)
        } else {
            console.log(`提现失败：${result.msg}`)
        }
    }
}

!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite()
    }else {
        if(!(await checkEnv())) return;
        
        await user.finishTask(); 
        await $.wait(300);
        while(user.flag) {
            await user.do_read(); 
            await $.wait(200);
        }
        await user.getGold();
    }
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

///////////////////////////////////////////////////////////////////
async function GetRewrite() {
    if($request.url.indexOf(`connect/oauth2/authorize`) > -1) {
        let ck = $request.url.split('authorize?')[1]
        $.setdata(ck, 'fqkkWxParam');
        $.msg(jsname+` 获取到微信授权参数`)
    } else if($request.url.indexOf(`fast_reada/do_read`) > -1) {
        let ck = $request.headers.Cookie
        $.setdata(ck, 'fqkkCookie');
        $.msg(jsname+` 获取到fqkkCookie`)
    }
}

async function checkEnv() {
    if(fqkkWxParam && fqkkCookie) {
        user = new UserInfo(fqkkWxParam,fqkkCookie)
    } else {
        let errorStr = ''
        if(!fqkkWxParam) errorStr += 'fqkkWxParam '
        if(!fqkkCookie) errorStr += 'fqkkCookie '
        console.log(`未找到${errorStr}`)
        return false;
    }
    
    return true;
}

//通知
async function showmsg() {
    if(!notifyStr) return;
    const notify = $.isNode() ? require('./sendNotify') : '';
    if(!notify) return;
    notifyBody = jsname + "运行通知\n\n" + notifyStr
    if (notifyFlag == 1) {
        $.msg(notifyBody);
        if($.isNode()){await notify.sendNotify($.name, notifyBody );}
    } else {
        console.log(notifyBody);
    }
}

//pushDear
async function pushDear(str) {
    if(!PushDearKey) return;
    if(!str) return;
    
    console.log('\n============= PushDear 通知 =============\n')
    console.log(str)
    let urlObject = {
        url: `https://api2.pushdeer.com/message/push?pushkey=${PushDearKey}&text=${encodeURIComponent(str)}`,
        headers: {},
    };
    await httpRequest('get',urlObject)
    let result = httpResult;
    let retStr = result.content.result==false ? '失败' : '成功'
    console.log(`\n========== PushDear 通知发送${retStr} ==========\n`)
}
////////////////////////////////////////////////////////////////////
function populateUrlObject(url,did,body=''){
    let host = url.replace('//','/').split('/')[1]
    let urlObject = {
        url: url,
        headers: {
            "newer": "0",
            "lid": "0",
            "wtu": "0",
            "qid": "0",
            "pkg": "com.yangmao.shequ",
            "brand": "vivo",
            "did": `${did}`,
            "modal": "2",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; V1962A Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.96 Mobile Safari/537.36 hap/1.9/vivo com.vivo.hybrid/1.9.5.204 com.yangmao.shequ/2.5.12 ({\"packageName\":\"com.quickapp.center\",\"type\":\"center_special_result\",\"extra\":{\"third_st_param\":\"{\\\"source_version\\\":53}\"}})",
            "Accept-Language": "zh-CN,zh;q\u003d0.9,en;q\u003d0.8",
            "Host": host,
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip"
        },
    }
    if(body) urlObject.body = body
    return urlObject;
}

async function httpRequest(method,url) {
    httpResult = null
    return new Promise((resolve) => {
        $[method](url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${method}请求失败`);
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    httpResult = resp;
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

function safeGet(data) {
    try {
        if (typeof JSON.parse(data) == "object") {
            return true;
        } else {
            console.log(data)
        }
    } catch (e) {
        console.log(e);
        console.log(`服务器访问数据为空，请检查自身设备网络情况`);
        return false;
    }
}

function getMin(a,b){
    return ((a<b) ? a : b)
}

function getMax(a,b){
    return ((a<b) ? b : a)
}

function padStr(num,length,padding='0') {
    let numStr = String(num)
    let numPad = (length>numStr.length) ? (length-numStr.length) : 0
    let retStr = ''
    for(let i=0; i<numPad; i++) {
        retStr += padding
    }
    retStr += numStr
    return retStr;
}

function randomString(len=32) {
    let chars = 'abcdef0123456789';
    let maxLen = chars.length;
    let str = '';
    for (i = 0; i < len; i++) {
        str += chars.charAt(Math.floor(Math.random()*maxLen));
    }
    return str;
}

function req2json(str) {
    let ret = {}
    for(let items of str.split('&')) {
        let kv = items.split('=')
        ret[kv[0]] = kv[1]
    }
    return ret
}

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

function MD5Encrypt(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var o,p,q,r,s,t,u,v,w,x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()}

function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
             : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
            "PUT" === e && (s = this.put),
            new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
        put(t) {
            return this.send.call(this.env, t, "PUT")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
            this.http = new s(this),
            this.data = null,
            this.dataFile = "box.dat",
            this.logs = [],
            this.isMute = !1,
            this.isNeedRewrite = !1,
            this.logSeparator = "\n",
            this.startTime = (new Date).getTime(),
            Object.assign(this, e),
            this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                r = e && e.timeout ? e.timeout : r;
                const[o, h] = i.split("@"),
                a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e),
                r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
            this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
            t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.instance = this.got.extend({followRedirect: false});
                this.instance.get(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        put(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.put(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "PUT", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.put(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n")),
            this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
            console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),
            this.log(),
            (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
    (t, e)
}

