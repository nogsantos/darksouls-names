var uniqueRandomArray = require('unique-random-array');
var dsNames = require('./darksouls-names.json');

module.exports = {
    all: dsNames,
    random: uniqueRandomArray(dsNames.II.Bosses)
};