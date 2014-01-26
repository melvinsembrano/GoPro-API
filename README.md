# [GoPro Hero 3 - API](http://g-w-g.co.uk) [![devDependency Status](https://david-dm.org/chrisgwgreen/GoPro-API.png)](https://david-dm.org/chrisgwgreen/GoPro-API)

Control you GoPro camera over wifi via this comprehensive Node.js API. With access to a wide array of settings; you can power your device on or off and alter settings dynamically and backup your videos/images remotely.

Currently only tested/implemented to control a singular GoPro hero3 silver edition, but further work is underway to control multiple and varied devices.

## Getting started

To get started, there are three quick start options available:

* [Download the latest release](https://github.com/chrisgwgreen/GoPro-API/archive/master.zip).
* Clone the repo: `git clone https://github.com/chrisgwgreen/GoPro-API.git`.
* Install with node package manager (npm): `npm install gopro_hero_api`.

Please see details below for details about how to use this API.

## Update GoPro

For best results, ensure your GoPro Hero 3 is running the latest firmware (implemented for 3.0.0). The update process is reasonably simple to follow and can be found on the [GoPro update page](http://gopro.com/support/product-updates-support).

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

To handle the asynchronous behaviour of accessing the GoPro remotely, this API is built using [when.js](https://github.com/cujojs/when); a lightweight implementation of [Promises/A+](http://promises-aplus.github.io/promises-spec/).

As such, the basic usage of this API is as follows:

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

This snippet turns your device then, once the device is ready, requests it's status which is finally console logged.

Note config.password represents the devices password (by default goprohero).

Please see [samples folder](https://github.com/chrisgwgreen/GoPro-API/tree/master/samples) for further examples.

## API

Here goes...

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
