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
    if (url === "") {
        alert("必填不能为空！");
    }else{
    var mlurl = window.location.href + "subscribe/&&" + url + "&&" + host + "&&";
    if (!!document.getElementById("name").value) {
        mlurl += name;
    } //备注
    mlurl += "&&" + port;//多端口筛选
    return mlurl;
    }
}

function short() {
    var mlurl = document.getElementById("id4").value;
    var target = document.getElementById("mytarget").value;
    var name = document.getElementById("myrules").value;
    if (!!document.getElementById("myrules").value) {
        mlurl = https://sub-web.loveyou.eu.org/sub?target= + mytarget + &url=mlurl&config=myrules
    return mlurl;
    }    
    
    const repo = 'https://github.com/CareyWang/MyUrls'
    const backend = 'https://myurls.loveyou.eu.org'

    let app = new Vue({
      el: "#app",
      data() {
        return {
          isPc: true,

          loading: false,
          longUrl: '',
          shortUrl: ''
        }
      },
      created() {
        const os = this.getOS()
        if (os.isPc !== true) {
          this.isPc = false
        }
      },
      mounted() {
        this.$refs.long.focus()
      },
      methods: {
        enterToDoShort(ev) {
          ev.keyCode === 13 && this.doShort()
        },
        doShort() {
          var mlurl = longUrl
          this.loading = true

          let data = new FormData();
          data.append("longUrl", btoa(this.longUrl));
          data.append("shortKey", this.shortUrl.indexOf('http') < 0 ? this.shortUrl : '');
          axios.post(backend + '/short', data, {
            header: {
              "Content-Type": "application/form-data; charset=utf-8"
            }
          })
            .then(res => {
              if (res.data.Code === 1 && res.data.ShortUrl !== "") {
                this.shortUrl = res.data.ShortUrl;
                this.$copyText(this.shortUrl)
                this.$refs.shortUrl.disabled = true
                this.$message.success("短链接已复制到剪贴板");
              } else {
                this.$message.error("短链接获取失败：" + res.data.Message);
              }
            })
            .catch(() => {
              this.$message.error("短链接获取失败");
            })
            .finally(() => {
              this.loading = false;
            });
        },
        goToGayHub() {
          window.open(repo)
        },
        getOS() {
          let ua = navigator.userAgent,
            isWindowsPhone = /(?:Windows Phone)/.test(ua),
            isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
            isAndroid = /(?:Android)/.test(ua),
            isFireFox = /(?:Firefox)/.test(ua),
            isChrome = /(?:Chrome|CriOS)/.test(ua),
            isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
            isPhone = /(?:iPhone)/.test(ua) && !isTablet,
            isPc = !isPhone && !isAndroid && !isSymbian;

          return {
            isTablet: isTablet,
            isPhone: isPhone,
            isAndroid: isAndroid,
            isPc: isPc
          };
        },
        getBodyClass() {
          return this.isPc ? 'body-center body-width-pc' : 'body-center'
        },
        onCopy() {
          this.$message.success("Copied!");
        },
        changeDisableStatus(event) {
          this.$refs.shortUrl.disabled = false
        }
      },
    })
}

function Copy() {
    var Url2 = document.getElementById("id4");
    if (!Url2){
        Url2.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        alert("已复制好，可贴粘。");
    }
}
