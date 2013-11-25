var when = require('when');
var config = require('../config');
var GoPro = require('../libs/gopro');
var camera = new GoPro(config.password);

camera.ready().then(function(){
	//Download latest file
	camera.requestFileSystem().then(function(l){
		var p = l[l.length-1];
		camera.getFile(p.absolutePath +  p.name , 'copy').then(function(f){
			console.log(f)
		});
	});
});