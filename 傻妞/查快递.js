// [rule:^(查快递)$]
function main() {
    sendText("请输入快递单号：")
    var nu = input(10000)
    if (nu == "") {
        return "操作超时，已退出会话。"
    }
    if (nu == "q") {
        return "已取消会话。"
    }
    sendText("请输入目标快递公司包含的关键字：")
    var com = input("")
    if (com == "") {
        return "操作超时，已退出会话。"
    }
    if (com == "q") {
        return "已取消会话。"
    }
    var keys = Object.keys(coms)
    var fs = []
    var is = []
    for (var i = 0; i < keys.length; i++) {
        if (coms[keys[i]].indexOf(com) != -1) {
            fs.push(coms[keys[i]])
            is.push(i)
        }
    }
    if (fs.length == 0) {
        return "找不到相关的快递公司。"
    }
    var key = ""
    if (fs.length != 1) {
        var query = "为你找到以下快递公司，请在10秒内从1~" + (fs.length) + "中选择一个："
        for (var i = 0; i < fs.length; i++) {
            fs[i] = (i + 1) + ". " + fs[i]
        }
        sendText(query + "\n" + fs.join("\n"))
        var com = +input(10000)
        if (!com || com < 1 || com > fs.length) {
            return "已取消快递查询。"
        }
        key = keys[is[com - 1]]
    } else {
        key = keys[is[0]]
    }
    var name = coms[key]

    sendText(name + "(" + key + "),确认请在5秒内任意回复：")
    if (!input(5000)) {
        return "已取消快递查询。"
    }
    var data = request({
        url: "http://api.kuaidi.com/openapi.html?id=" + get("kuaidi_key") + "&com=" + key + "&nu=" + nu,
        "dataType": "json"
    })
    if (!data) {
        return "请求失败，稍后再试。"
    }
    if (!data.success) {
        return data.reason + "。"
    }
    var his = []
    for (var i = 0; i < data.data.length; i++) {
        his.push(data.data[i]["context"] + "\n" + data.data[i]["time"])
    }

    var rt = "快递状态：" + statuss[data.status]
    if (his.length != 0) {
        rt += "\n\n" + his.join("\n\n")
    }
    return rt
}

var statuss = {
    0: "物流单号暂无结果",
    3: "在途",
    4: "揽件",
    5: "疑难",
    6: "签收",
    7: "退签",
    8: "派件",
    9: "退回",
}

var coms = {
    aae: "AAE快递",
    aramex: "Aramex快递",
    auspost: "澳大利亚邮政",
    annengwuliu: "安能物流快递",
    bht: "BHT快递",
    baifudongfang: "百福东方物流",
    bangsongwuliu: "邦送物流",
    huitongkuaidi: "百世汇通快递",
    idada: "百成大达物流",
    coe: "COE(东方快递)",
    city100: "城市100",
    chuanxiwuliu: "传喜物流",
    depx: "DPEX",
    disifang: "递四方",
    dsukuaidi: "D速物流",
    debangwuliu: "德邦物流",
    datianwuliu: "大田物流",
    dhl: "DHL国际快递",
    dhlen: "DHL(国际件)",
    dhlde: "DHL(德国件)",
    dhlpoland: "DHL(波兰件)",
    ems: "EMS快递",
    emsguoji: "EMS国际",
    fedex: "FedEx(国际)",
    fedexus: "FedEx(美国)",
    rufengda: "凡客如风达",
    feikangda: "飞康达物流",
    feibaokuaidi: "飞豹快递",
    fardarww: "Fardar Worldwide",
    fandaguoji: "颿达国际",
    lianbangkuaidi: "FedEx(中国件)",
    fedexuk: "FedEx(英国件)",
    gangzhongnengda: "港中能达物流",
    youzhengguonei: "挂号信",
    gongsuda: "共速达",
    guotongkuaidi: "国通快递",
    gls: "GLS",
    tiandihuayu: "华宇物流",
    hengluwuliu: "恒路物流",
    huaxialongwuliu: "华夏龙物流",
    tiantian: "海航天天",
    hebeijianhua: "河北建华",
    jiajiwuliu: "佳吉物流",
    jiayiwuliu: "佳怡物流",
    jiayunmeiwuliu: "加运美快递",
    jixianda: "急先达物流",
    jinguangsudikuaijian: "京广速递快件",
    jinyuekuaidi: "晋越快递",
    jialidatong: "嘉里大通",
    jietekuaidi: "捷特快递",
    jd: "京东快递",
    jindawuliu: "金大物流",
    kuaijiesudi: "快捷快递",
    kangliwuliu: "康力物流",
    kuayue: "跨越物流",
    lianhaowuliu: "联昊通物流",
    longbangwuliu: "龙邦速递",
    lianbangkuaidi: "联邦快递",
    lejiedi: "乐捷递",
    lijisong: "立即送",
    minghangkuaidi: "民航快递",
    meiguokuaidi: "美国快递",
    menduimen: "门对门",
    mingliangwuliu: "明亮物流",
    ganzhongnengda: "能达速递",
    ocs: "OCS",
    ontrac: "OnTrac",
    pingandatengfei: "平安达腾飞",
    peixingwuliu: "陪行物流",
    quanfengkuaidi: "全峰快递",
    quanyikuaidi: "全一快递",
    quanritongkuaidi: "全日通快递",
    quanchenkuaidi: "全晨快递",
    sevendays: "7天连锁物流",
    rufengda: "如风达快递",
    shentong: "申通快递",
    shunfeng: "顺丰速运",
    suer: "速尔快递",
    haihongwangsong: "山东海红",
    shenghuiwuliu: "盛辉物流",
    shengfengwuliu: "盛丰物流",
    shangda: "上大物流",
    santaisudi: "三态速递",
    saiaodi: "赛澳递",
    shenganwuliu: "圣安物流",
    sxhongmajia: "山西红马甲",
    suijiawuliu: "穗佳物流",
    syjiahuier: "沈阳佳惠尔",
    tnt: "TNT快递",
    tiantian: "天天快递",
    tiandihuayu: "天地华宇",
    tonghetianxia: "通和天下",
    tianzong: "天纵物流",
    tntuk: "TNT(英国件)",
    ups: "UPS国际快递",
    youshuwuliu: "UC优速快递",
    wanxiangwuliu: "万象物流",
    weitepai: "微特派",
    wanjiawuliu: "万家物流",
    xinbangwuliu: "新邦物流",
    xinfengwuliu: "信丰物流",
    neweggozzo: "新蛋物流",
    hkpost: "香港邮政",
    xianglongyuntong: "祥龙运通物流",
    xianchengliansudi: "西安城联速递",
    yuantong: "圆通速递",
    yunda: "韵达快运",
    yuntongkuaidi: "运通快递",
    youzhengguonei: "邮政国内",
    youzhengguoji: "邮政国际",
    yuanchengwuliu: "远成物流",
    yafengsudi: "亚风速递",
    youshuwuliu: "优速快递",
    yuananda: "源安达快递",
    yuanfeihangwuliu: "原飞航物流",
    yuefengwuliu: "越丰物流",
    zhongtong: "中通快递",
    zhaijisong: "宅急送",
    zhongtiewuliu: "中铁快运",
    ztky: "中铁物流",
    zhongyouwuliu: "中邮物流",
    zhongtianwanyun: "中天万运",
    zhengzhoujianhua: "郑州建华",
    zhimakaimen: "芝麻开门",
}
var rt = main()
if (rt) {
    sendText(rt)
}