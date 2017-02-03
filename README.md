move-decimal
===

[![npm version](https://img.shields.io/npm/v/move-decimal.svg?style=flat-square)](https://npmjs.com/package/move-decimal)
[![javascript standard style](https://img.shields.io/badge/code%20style-standard-blue.svg?style=flat-square)](http://standardjs.com/)
[![travis build](https://img.shields.io/travis/SEAPUNK/move-decimal/master.svg?style=flat-square)](https://travis-ci.org/SEAPUNK/move-decimal)
[![coveralls coverage](https://img.shields.io/coveralls/SEAPUNK/move-decimal.svg?style=flat-square)](https://coveralls.io/github/SEAPUNK/move-decimal)
[![david dependencies](https://david-dm.org/SEAPUNK/move-decimal.svg?style=flat-square)](https://david-dm.org/SEAPUNK/move-decimal)
[![david dev dependencies](https://david-dm.org/SEAPUNK/move-decimal/dev-status.svg?style=flat-square)](https://david-dm.org/SEAPUNK/move-decimal)

Safely move the decimal point of Javascript numbers

`npm install move-decimal`

```js
import moveDecimal from 'move-decimal'

// requires a number in string form
// returns a number in string form
moveDecimal('4.33', 2) // '433'
moveDecimal('-2.1', -1) // '-0.21'
```
