var when = require('when');
var config = require('../config');
var GoPro = require('../libs/gopro');
var camera = new GoPro(config.password);
var CameraMode = GoPro.CameraMode;
var LED = GoPro.LED;
var PhotoResolution = GoPro.PhotoResolution;
var Volume = GoPro.Volume;

camera.ready().then(function(){


	

	//Status 
	camera.status().then(function(a){
		console.log(a)
	})
	/**/


	/*
	//Protune
	camera.protune(true).then(function(){
		camera.status().then(function(a){
			console.log(a)
		})	
	});
	*/

	/*
	//AutoPowerOff = { NEVER: 0, SECONDS_60: 1, SECONDS_120: 2, SECONDS_300: 3 }
	camera.setAutoPowerOff(GoPro.AutoPowerOff.NEVER).then(function(){
		camera.status().then(function(a){
			console.log(a)
		})	
	})
	*/

	/*
	// Get Specific file
	camera.getFileSystem('/videos/DCIM/100GOPRO/').then(function(l){
		console.log(l)
	});
	*/

	/*
	// Get file system
	camera.getFileSystem().then(function(l){
		console.log(l);
	});
	*/

	/*
	//Download latest file
	camera.getFileSystem().then(function(l){
		var p = l[l.length-1];
		camera.getFile(p.absolutePath +  p.name , 'copy').then(function(f){
			console.log(f)
		});
	});
	*/

	/*
	//FieldOfVision = { WIDE: 0, MEDIUM: 1, NARROW: 2 };
	camera.setFieldOfVision(GoPro.FieldOfVision.MEDIUM).then(function(){
		camera.status().then(function(a){
			console.log(a)
		})	
	})
	*/

	/*
	//Timer = { HALF_SECOND: 0, ONE_SECOND: 1, TWO_SECOND: 2};
	camera.setPhotoTimer(GoPro.Timer.FIVE_SECOND).then(function(){
		camera.status().then(function(a){
			console.log(a)
		})	
	})
	*/

	
/*
	//LoopVideo = { OFF: 0, MIN_5: 1, MIN_20: 2, MIN_60: 3, MAX: 5 };
	camera.setLoopVideo(GoPro.LoopVideo.OFF).then(function(){
		camera.status().then(function(a){
			console.log(a)
		})	
	})
*/


/*
// WhiteBlack = { AUTO: 0, WB_3000K: 1, WB_5500K: 2, WB_6500K: 3, CAMRAW: 4 };
	camera.setWhiteBlack(GoPro.WhiteBlack.WB_5500K).then(function(){
		camera.status().then(function(a){
			console.log(a)
		})	
	})

*/


/*
//GoPro.ContinuousShot = { SINGLE: 0, THREE_SPS: 1, FIVE_SPS: 2, TEN_SPS: 3 };
// ContinuousShot = { SINGLE: 0, THREE_SPS: 3, FIVE_SPS: 5, TEN_SPS: 'a' };
camera.setContinuousShot(GoPro.ContinuousShot.FIVE_SPS).then(function(){
	camera.status().then(function(a){
		console.log(a)
	})	
})

*/

/*
// GoPro.BurstRate = { RATE3_1s: 0, RATE5_1s: 1, RATE10_1s: 2, RATE10_2s: 3};
camera.setBurstRate(GoPro.BurstRate.RATE3_1s).then(function(){
	camera.status().then(function(a){
		console.log(a)
	})	
})
*/



});



//camera.power()
// try{
// 	camera.ready()
// } catch(e) {
// 	console.log('e')
// }

// camera.ready().then(function(){

// camera.setLED(LED.FOUR)
// camera.deleteAll();
// camera.setCameraMode(CameraMode.PHOTO)
// camera.setVolume(Volume.MUTE)
// camera.ls().then(function(paths) {
// 			console.log('here')
// 			console.log(paths);
// 			camera.status().then(function(status){
// 				console.log('PhotoResolution.MEDIUM_5MP Status');
// 				console.log(status);
// 			});	
// 		});


// })