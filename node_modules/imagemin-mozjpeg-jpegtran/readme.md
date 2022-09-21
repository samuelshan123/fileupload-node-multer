# imagemin-mozjpeg-jpegtran ![GitHub Actions Status](https://github.com/pekeq/imagemin-mozjpeg-jpegtran/actions/workflows/test.yml/badge.svg?branch=master)

> [Imagemin](https://github.com/imagemin/imagemin) plugin for jpegtran ([mozjpeg](https://github.com/mozilla/mozjpeg) version) command


## Install

```
$ npm install imagemin-mozjpeg-jpegtran
```


## Usage

```js
const imagemin = require('imagemin');
const imageminMozjpegJpegtran = require('imagemin-mozjpeg-jpegtran');

(async () => {
	await imagemin(['images/*.jpg'], {
		destination: 'build/images',
		plugins: [
			imageminMozjpegJpegtran()
		]
	});

	console.log('Images optimized');
})();
```


## API

### imageminMozjpegJpegtran([options])(buffer)

Returns a `Promise<Buffer>`.

#### options

##### copy

Type: `string`<br>
Default: `none`

Set copy mode.

- `none` Copy no extra markers from source file
- `comments` Copy only comment markers
- `all` Copy all extra markers

##### optimize

Type: `boolean`<br>
Default: `true`

Optimize Huffman table (smaller file, but slow compression)

##### progressive

Type: `boolean`<br>
Default: `true`

`false` creates baseline JPEG file.

##### revert

Type: `boolean`<br>
Default: `false`

Revert to standard defaults instead of mozjpeg defaults.

##### fastCrush

Type: `boolean`<br>
Default: `false`

Disable progressive scan optimization.

##### maxMemory

Type: `number`

Set the maximum memory to use in kilobytes.

#### buffer

Type: `buffer`

Buffer to optimize.


## License

MIT © [Imagemin](https://github.com/imagemin), Hideo Matsumoto
