GoPro - Control your GoPro Hero via Nodejs.
========

Control you GoPro camera remotely with the Node.js GoPro API. Aiming to be the most comprehensive api possible; you can access a wide array of settings, power your device on or off and, most importantly, backup your videos/images remotely over wifi.


### Usage

```javascript
	var when = require('when');
	var config = require('./config');
	var GoPro = require('./libs/gopro');
	var camera = new GoPro(config.password);

	camera.power(true).then(function(){
		camera.status().then(function(a){
			console.log(a)
		});
	});
```

See also the samples folder for useage.

