/**
* @author 北木
* @title 青年大学习
* @rule 大学习
*/
const s = sender;
function main() {
var {body} = request({
			url: "https://xiaobai.klizi.cn/API/other/youth.php",
            method:"get",
	});
	s.reply(body)   
}  
main()
