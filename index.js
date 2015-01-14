'use strict';

function merge (cities) {
	var allCities = [];

	Object.keys(cities).forEach(function (key) {
		allCities = allCities.concat(cities[key]);
	});

	return allCities;
}

module.exports = function () {
	return require('./cities.json');
};

module.exports.cities = function () {
	return merge(require('./cities.json'));
};
