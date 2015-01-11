'use strict';

var assert = require('assert');
var through2 = require('through2');
var cities = require('./')();
var allCities = require('./').cities();
var stream = require('./').stream();

it('Regions should work', function () {
	assert.equal(cities['Bratislavský'][0], 'Bratislava - Staré Mesto');
	assert.equal(cities['Bratislavský'][cities['Bratislavský'].length - 1], 'Zálesie');
});

it('All cities should work', function () {
	assert.equal(allCities[0], 'Bratislava - Staré Mesto');
	assert.equal(allCities[allCities.length - 1], 'Zemplínsky Branč');
});

it('All cities stream should work', function (cb) {
	stream.on('data', function (data) {
		var data = JSON.parse(data);
		assert.equal(data['Bratislavský'][0], 'Bratislava - Staré Mesto');
		cb();
	});
});
