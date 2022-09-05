/**
* @author Jxell
* @title 买家秀
* @rule 买家秀
* @platform qq wx tg pgm web cron
*/
const s = sender;
s.reply('💕稍后...');
var {body} = request({
    url:`https://api.vvhan.com/api/tao?type=JSON`,
    method:"get",
});
var strJson = JSON.parse(body);
title = strJson.title;
imgUrl = strJson.pic;
s.reply(`${title}\n${image(`${imgUrl}`)}`);

