var when = require('when');
var config = require('../config');
var GoPro = require('../libs/gopro');
var camera = new GoPro(config.password);

camera.ready().then(function(){
	//AutoPowerOff = { NEVER: 0, SECONDS_60: 1, SECONDS_120: 2, SECONDS_300: 3 }
	camera.setAutoPowerOff(GoPro.AutoPowerOff.NEVER).then(function(){
		camera.status().then(function(a){
			console.log(a)
		})	
	})
});