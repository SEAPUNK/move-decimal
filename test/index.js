import test from 'ava'
import moveDecimal from '../'

test('does not accept invalid values', t => {
  const firstError = 'number is invalid'
  const secondError = 'moveBy is invalid'

  t.is(
    t.throws(() => moveDecimal('a'), Error).message,
    firstError
  )

  t.is(
    t.throws(() => moveDecimal(''), Error).message,
    firstError
  )

  t.is(
    t.throws(() => moveDecimal(), Error).message,
    firstError
  )

  t.is(
    t.throws(() => moveDecimal(3), Error).message,
    firstError
  )

  t.is(
    t.throws(() => moveDecimal('3e4'), Error).message,
    firstError
  )

  t.is(
    t.throws(() => moveDecimal('3.4.4'), Error).message,
    firstError
  )

  t.is(
    t.throws(() => moveDecimal('3', null), Error).message,
    secondError
  )

  t.is(
    t.throws(() => moveDecimal('3', '3'), Error).message,
    secondError
  )

  t.is(
    t.throws(() => moveDecimal('5', 2.5), Error).message,
    secondError
  )
})

test('simple move to right', t => {
  t.is(moveDecimal('1.44', 1), '14.4')
})

test('simple move to left', t => {
  t.is(moveDecimal('14.4', -1), '1.44')
})

test('implied decimal (right move)', t => {
  t.is(moveDecimal('1', 1), '10')
})

test('implied decimal (left move)', t => {
  t.is(moveDecimal('10', -1), '1')
})

test('left move outside bounds returns valid number string', t => {
  t.is(moveDecimal('1.0', -2), '0.01')
})

test('right move outside bounds returns valid number string', t => {
  t.is(moveDecimal('1.1', 2), '110')
})

test('allows decimal as beginning of number', t => {
  t.is(moveDecimal('.1', 0), '0.1')
})

test('allows decimal at end of number', t => {
  t.is(moveDecimal('1.', 0), '1')
})

test('trailing zeroes 1', t => {
  t.is(moveDecimal('1.1000', 0), '1.1')
})

test('trailing zeroes 2', t => {
  t.is(moveDecimal('1.0000', 0), '1')
})

test('trailing zeroes 3', t => {
  t.is(moveDecimal('1.0', 0), '1')
})

test('trailing zeroes 4', t => {
  t.is(moveDecimal('1.10', 0), '1.1')
})

test('leading zeroes 1', t => {
  t.is(moveDecimal('0001.2', 0), '1.2')
})

test('leading zeroes 2', t => {
  t.is(moveDecimal('0000.2', 0), '0.2')
})

test('leading zeroes 3', t => {
  t.is(moveDecimal('01.2', 0), '1.2')
})

test('leading zeroes 4', t => {
  t.is(moveDecimal('0.2', 0), '0.2')
})

test('leading and trailing zeroes 1', t => {
  t.is(moveDecimal('0.0', 0), '0')
})

test('leading and trailing zeroes 2', t => {
  t.is(moveDecimal('00.00', 0), '0')
})

test('works for negative numbers (all previous tests, just with negative input number', t => {
  t.is(moveDecimal('-1.44', 1), '-14.4')
  t.is(moveDecimal('-14.4', -1), '-1.44')
  t.is(moveDecimal('-1', 1), '-10')
  t.is(moveDecimal('-10', -1), '-1')
  t.is(moveDecimal('-1.0', -2), '-0.01')
  t.is(moveDecimal('-1.1', 2), '-110')
  t.is(moveDecimal('-.1', 2), '-11')
  t.is(moveDecimal('-1.0000', 0), '-1')
  t.is(moveDecimal('-1.1000', 0), '-1.1')
  t.is(moveDecimal('-0001.2', 0), '-1.2')
  t.is(moveDecimal('-0000.2', 0), '-0.2')
  t.is(moveDecimal('-1.0', 0), '-1')
  t.is(moveDecimal('-1.10', 0), '-1.1')
  t.is(moveDecimal('-01.2', 0), '-1.2')
  t.is(moveDecimal('-0.2', 0), '-0.2')
})
