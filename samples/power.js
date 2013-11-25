var when = require('when');
var config = require('../config');
var GoPro = require('../libs/gopro');
var camera = new GoPro(config.password);

camera.power(true).then(function(){
	camera.status().then(function(a){
		console.log(a)
	});
});