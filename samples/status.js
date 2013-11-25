var when = require('when');
var config = require('../config');
var GoPro = require('../libs/gopro');
var camera = new GoPro(config.password);

camera.ready().then(function(){
	//Status 
	camera.status().then(function(a){
		console.log(a)
	})
});