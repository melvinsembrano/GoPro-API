# [GoPro Hero 3 - API](http://g-w-g.co.uk) [![devDependency Status](https://david-dm.org/chrisgwgreen/GoPro-API.png)](https://david-dm.org/chrisgwgreen/GoPro-API)

Control you GoPro camera remotely with the Node.js GoPro API. Aiming to be the most comprehensive api possible; you can access a wide array of settings, power your device on or off and, most importantly, backup your videos/images remotely over wifi. Created and maintained by [Chris GW Green](http://g-w-g.co.uk).


## Getting started

Three quick start options are available:

* [Download the latest release](https://github.com/chrisgwgreen/GoPro-API/archive/master.zip).
* Clone the repo: `git clone https://github.com/chrisgwgreen/GoPro-API.git`.
* Install with node package manager (npm): `npm install gopro_hero_api`.

Please see details below for details about how to use this API.

Documentation coming soon.

## Update GoPro

For best results, ensure your GoPro Hero 3 is running the latest firmware (3.0.0 at time of writing). The update is simple to do and details can be found on the [GoPro update page](http://gopro.com/support/product-updates-support).


### What's in the box?

Within the download you'll find the following directories and files:

```
gopro/
├── libs/
│   ├── gopro.js
├── samples/
│   ├── autopower.js
│   ├── cameramode_status.js
│   ├── download-latest.js
│   ├── filesystem.js
│   ├── photoresolution_status.js
│   ├── power.js
│   ├── protune.js
│   ├── status.js
│   └── videoresolution_status.js
├── README.md
├── config.js
└── package.json
```


## Bugs and feature requests

If you've found a **new** bug or a want to suggest a **new** feature request, please feel free to [open a new issue](https://github.com/chrisgwgreen/GoPro-API/issues).

## Documentation

A more detailed and comprehensive API is in progress. Basic usage is as follows: 

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

Please see [samples folder](https://github.com/chrisgwgreen/GoPro-API/tree/master/samples) for further examples.

## Versioning

Following Semantic Versioning guidelines as follows:

`<major>.<minor>.<patch>`

For more information on SemVer, please visit <http://semver.org/>.


## Author

**Chris GW Green**

+ <http://g-w-g.co.uk/>

## Copyright and license

[The MIT License (MIT)](LICENSE)

Copyright (c) 2013 Chris GW Green
