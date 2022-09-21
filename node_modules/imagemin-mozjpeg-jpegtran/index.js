'use strict';
const execa = require('execa');
const isJpg = require('is-jpg');
const mozjpeg = require('mozjpeg-jpegtran-bin');

module.exports = options => async buffer => {
	options = {
		copy: 'none',
		...options
	};

	if (!Buffer.isBuffer(buffer)) {
		return Promise.reject(new TypeError('Expected a buffer'));
	}

	if (!isJpg(buffer)) {
		return Promise.resolve(buffer);
	}

	// TODO: Remove these sometime far in the future
	if (options.fastcrush) {
		return Promise.reject(new Error('Option `fastcrush` was renamed to `fastCrush`'));
	}

	if (options.maxmemory) {
		return Promise.reject(new Error('Option `maxmemory` was renamed to `maxMemory`'));
	}

	const args = [];

	if (typeof options.copy !== 'undefined') {
		args.push('-copy', options.copy);
	}

	if (options.optimize) {
		args.push('-optimize');
	}

	if (options.progressive) {
		args.push('-progressive');
	}

	if (options.revert) {
		args.push('-revert');
	}

	if (options.fastCrush) {
		args.push('-fastcrush');
	}

	if (options.maxMemory) {
		args.push('-maxmemory', options.maxMemory);
	}

	const {stdout} = await execa(mozjpeg, args, {
		encoding: null,
		input: buffer,
		maxBuffer: Infinity
	});

	return stdout;
};
