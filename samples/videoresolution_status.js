var when = require('when');
var config = require('../config');
var GoPro = require('../libs/gopro');
var camera = new GoPro(config.password);
var VideoResolution = GoPro.VideoResolution;
var CameraMode = GoPro.CameraMode;

//GoPro.VideoResolution = { WVGA_120: 1, HD_720_30: 2, HD_720_60: 3, HD_960_30: 4, HD_960_60: 5, FHD_1080_30: 6 };

camera.ready().then(function(){
	camera.setCameraMode(CameraMode.VIDEO).then(function(){
				
		camera.setVideoResolution(VideoResolution.WVGA_120).then(function(){
			camera.status().then(function(status){
				console.log('VideoResolution.WVGA_120 Status');
				console.log(status);
				
				camera.setVideoResolution(VideoResolution.HD_720_30).then(function(){
					camera.status().then(function(status){
						console.log('VideoResolution.HD_720_30 Status');
						console.log(status);

						camera.setVideoResolution(VideoResolution.HD_720_60).then(function(){
							camera.status().then(function(status){
								console.log('VideoResolution.HD_720_60 Status');
								console.log(status);

								camera.setVideoResolution(VideoResolution.HD_960_30).then(function(){
									camera.status().then(function(status){
										console.log('VideoResolution.HD_960_30 Status');
										console.log(status);

										camera.setVideoResolution(VideoResolution.HD_960_60).then(function(){
											camera.status().then(function(status){
												console.log('VideoResolution.HD_960_60 Status');
												console.log(status);

												camera.setVideoResolution(VideoResolution.FHD_1080_30).then(function(){
													camera.status().then(function(status){
														console.log('VideoResolution.FHD_1080_30 Status');
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
				});
			});	
		});
	});	

	// camera.setVideoResolution(VideoResolution.WVGA_60).then(function(){
	// 		camera.status().then(function(status){
	// 			console.log('VideoResolution.WVGA_60 Status');
	// 			console.log(status);

				
	// 		});	
	// 	});
})