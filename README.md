# darksouls-names

[![Travis](https://img.shields.io/travis/nogsantos/darksouls-names.svg?style=flat-square)](https://travis-ci.org/nogsantos/darksouls-names)
[![Code coverage](https://img.shields.io/codecov/c/github/nogsantos/darksouls-names.svg?style=flat-square)](https://codecov.io/gh/nogsantos/darksouls-names)
[![version](https://img.shields.io/npm/v/darksouls-names.svg?style=flat-square)](https://www.npmjs.com/package/darksouls-names)
[![downloads](https://img.shields.io/npm/dm/darksouls-names.svg?style=flat-square)](https://www.npmjs.com/package/darksouls-names)
[![MIT License](https://img.shields.io/npm/l/darksouls-names.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Get random names from Dark souls I, II and III characters.

## Installation

```shell
npm install darksouls-names
```

## Usage

```shell
var names = require('darksouls-names');

console.log(names.all());
console.log(names.random('I','Bosses'));
console.log(names.random('II','NPCs'));
console.log(names.random('III','Enemies'));
console.log(names.random('III','Enemies', 3));

```

## Available Resources

Bosses, NPCs and Enemies from DS I, II and III.
