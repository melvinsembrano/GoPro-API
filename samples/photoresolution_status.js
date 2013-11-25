var when = require('when');
var config = require('../config');
var GoPro = require('../libs/gopro');
var camera = new GoPro(config.password);
var PhotoResolution = GoPro.PhotoResolution;
var CameraMode = GoPro.CameraMode;

//GoPro.PhotoResolution = { WIDE_11MP: 0, MEDIUM_8MP: 1, WIDE_5MP: 2, MEDIUM_5MP: 3 };

camera.ready().then(function(){
	camera.setCameraMode(CameraMode.PHOTO).then(function(){
				
		camera.setPhotoResolution(PhotoResolution.WIDE_11MP).then(function(){
			camera.status().then(function(status){
				console.log('PhotoResolution.WIDE_11MP Status');
				console.log(status);
				
				camera.setPhotoResolution(PhotoResolution.MEDIUM_8MP).then(function(){
					camera.status().then(function(status){
						console.log('PhotoResolution.MEDIUM_8MP Status');
						console.log(status);

						camera.setPhotoResolution(PhotoResolution.WIDE_5MP).then(function(){
							camera.status().then(function(status){
								console.log('PhotoResolution.WIDE_5MP Status');
								console.log(status);

								camera.setPhotoResolution(PhotoResolution.MEDIUM_5MP).then(function(){
									camera.status().then(function(status){
										console.log('PhotoResolution.MEDIUM_5MP Status');
										console.log(status);
									});	
								});
							});	
						});
					});	
				});
			});	
		});
	});	
})