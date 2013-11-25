var when = require('when');
var config = require('../config');
var GoPro = require('../libs/gopro');
var camera = new GoPro(config.password);
var CameraMode = GoPro.CameraMode;

camera.ready().then(function(){
	camera.setCameraMode(CameraMode.VIDEO).then(function(){
		camera.status().then(function(status){
			console.log('CameraMode.VIDEO Status');
			console.log(status);
			camera.setCameraMode(CameraMode.PHOTO).then(function(){
				camera.status().then(function(){
					console.log('CameraMode.PHOTO Status');
					console.log(status);
					camera.setCameraMode(CameraMode.BURST).then(function(){
						camera.status().then(function(){
							console.log('CameraMode.BURST Status');
							console.log(status);
							camera.setCameraMode(CameraMode.TIMELAPSE).then(function(){
								camera.status().then(function(){
									console.log('CameraMode.TIMELAPSE Status');
									console.log(status);
								});
							});
						});		
					});
				});		
			});
		});	
	});
})