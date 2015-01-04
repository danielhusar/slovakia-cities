'use strict';
var assert = require('assert');
var cities = require('./');


it('it should work', function () {
	assert.equal(cities['Bratislavský'][0], 'Bratislava - Staré Mesto');
});
