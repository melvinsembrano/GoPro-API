var when = require('when');
var config = require('../config');
var GoPro = require('../libs/gopro');
var camera = new GoPro(config.password);

camera.ready().then(function(){
	// Get file system
	camera.requestFileSystem().then(function(l){
		console.log(l);
	});
});