'use strict'

// "optimizations"
const STRNUM_REGEX = /^-?[0-9]*\.?[0-9]*$/
const STRNUM_ERROR = 'number is invalid'
const MOVEBY_ERROR = 'moveBy is invalid'
const STR_TYPE = 'string'
const NUM_TYPE = 'number'

function moveDecimal (strnum, moveBy) {
  if (typeof strnum !== STR_TYPE || !strnum || !STRNUM_REGEX.test(strnum)) {
    throw new Error(STRNUM_ERROR)
  }

  if (typeof moveBy !== NUM_TYPE || Number.isNaN(moveBy) || moveBy % 1 !== 0) {
    throw new Error(MOVEBY_ERROR)
  }

  let retval = ''

  // Remove and store the negative sign if the number has it.
  let hasNegative = false
  if (strnum[0] === '-') {
    hasNegative = true
    strnum = strnum.substr(1)
  }

  // Trim leading and trailing zeroes.
  strnum = strnum.replace(/^0+([1-9]*\.)/g, '$1').replace(/(\.[1-9]*)0+$/, '$1')

  retval = strnum

  // Move the decimal. Calculate where the decimal point should be, and append
  // zeroes behind or in front of the decimal point if necessary.
  if (moveBy > 0) {

  } else if (moveBy < 0) {

  } // else don't do anything

  // If there is a decimal at the beginning of the string, prepend a zero.
  if (retval[0] === '.') {
    retval = '0' + retval
  }

  // Also, if there is a decimal at the end of the string, append a zero.
  if (retval[retval.length - 1] === '.') {
    retval = retval + '0'
  }

  // If the number is a x.0(whatever) number, then remove the trailing decimal
  // and zeroes.
  retval = retval.replace(/\.0*$/, '')

  // Before returning the new number string, append the negative sign to it, if there is one.
  if (hasNegative) {
    retval = '-' + retval
  }

  return retval
}

module.exports = moveDecimal

