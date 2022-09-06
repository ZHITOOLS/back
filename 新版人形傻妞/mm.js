/**
*@author onz3v
* @title 来个妹妹
*@platform  tg pgm web
*@rule 来个妹妹
*@rule mm
*/

const $ = sender

const result = request({
	url: 'https://api.uomg.com/api/rand.img4?format=json',
	dataType: 'json'
})
let imgs = result.body.imgurl;
imgs.forEach(item => {
	$.reply(image(item))
})
