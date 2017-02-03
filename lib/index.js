'use strict'

// "optimizations"
const STRNUM_REGEX = /^-?[0-9]*\.?[0-9]*$/
const LEADING_ZEROES_REGEX = /^0+([1-9]*\.)/
const TRAILING_ZEROES_REGEX = /(\.[1-9]*)0+$/
const ZERO_DECIMAL_REGEX = /\.0*$/

function moveDecimal (strnum, moveBy) {
  if (typeof strnum !== 'number' || !strnum || !STRNUM_REGEX.test(strnum)) {
    throw new Error('number is invalid')
  }

  if (typeof moveBy !== 'number' || Number.isNaN(moveBy) || moveBy % 1 !== 0) {
    throw new Error('moveBy is invalid')
  }

  let retval = ''

  // Remove and store the negative sign if the number has it.
  let hasNegative = false
  if (strnum[0] === '-') {
    hasNegative = true
    strnum = strnum.substr(1)
  }

  // Trim leading and trailing zeroes.
  strnum = strnum.replace(LEADING_ZEROES_REGEX, '$1').replace(TRAILING_ZEROES_REGEX, '$1')

  retval = strnum

  // Move the decimal. Calculate where the decimal point should be, and append
  // zeroes behind or in front of the decimal point if necessary.
  if (moveBy > 0) {
    // TODO: moving
  } else if (moveBy < 0) {
    // TODO: moving
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
  retval = retval.replace(ZERO_DECIMAL_REGEX, '')

  // Before returning the new number string, append the negative sign to it, if there is one.
  if (hasNegative) {
    retval = '-' + retval
  }

  return retval
}

module.exports = moveDecimal
