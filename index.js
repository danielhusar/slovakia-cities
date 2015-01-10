'use strict';

module.exports = function () {
	return require('./cities.json');
};

module.exports.cities = function () {
	var cities = require('./cities.json');
	var allCities = [];

	Object.keys(cities).forEach(function (key) {
	  allCities = allCities.concat(cities[key]);
	});

	return allCities;
};
