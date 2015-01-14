'use strict';

var assert = require('assert');
var cities = require('./')();
var allCities = require('./').cities();

it('Regions should work', function () {
	assert.equal(cities['Bratislavský'][0], 'Bratislava - Staré Mesto');
	assert.equal(cities['Bratislavský'][cities['Bratislavský'].length - 1], 'Zálesie');
});

it('All cities should work', function () {
	assert.equal(allCities[0], 'Bratislava - Staré Mesto');
	assert.equal(allCities[allCities.length - 1], 'Zemplínsky Branč');
});
