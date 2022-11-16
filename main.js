function sub_to_mlsub() {
        document.getElementById("id4").value = sub();
        document.getElementById("id5").value = short();
        Copy();
    } //原始订阅转换

function sub() {
    var url = document.getElementById("url").value;
    var host = document.getElementById("host").value;
    var name = document.getElementById("name").value;
    var port = document.getElementById("port").value;
    var mytarget = document.getElementById("mytarget").value;
    var myconfig = document.getElementById("myconfig").value;
var mytarget = document.getElementById("myconfig").value;    
    if (url === "") {
        alert("必填不能为空！");
    }else{
    var mlurl = window.location.href + "subscribe/&&" + url + "&&" + host + "&&";
    if (!!document.getElementById("name").value) {
        mlurl += name;
    } //备注
    mlurl += "&&" + port;//多端口筛选
    return mlurl;
    if (!!document.getElementById("mytarget").value) {
        mlurl = https://sub-web.loveyou.eu.org/sub?target=mytarget&url=mlurl&config=myconfig;
    }
    return mlurl;
    }
}

function short() {
    var mlurl = document.getElementById("id4").value;
    return mlurl;
}

function Copy() {
    var Url2 = document.getElementById("id4");
    if (!Url2){
        Url2.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        alert("已复制好，可贴粘。");
    }
}
