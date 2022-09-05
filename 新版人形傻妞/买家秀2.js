/**
* @author cdle
* @title 买家秀2
* @rule 买家秀
* @rule mjx
*/
const s = sender

var {headers} = request({
    url:"https://api.dzzui.com/api/imgtaobao",
    method:"get",
    allowredirects: false, //禁止重定向
    headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
    }
})
s.reply(image(headers.Location))