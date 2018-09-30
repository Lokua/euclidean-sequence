const assert = require('assert')
const bjorklund = require('./index')

// assert.deepEqual(bjorklund(1, 1), [1])

// assert.deepEqual(bjorklund(0, 1), [0])

// assert.deepEqual(
//   bjorklund(4, 16),
//   // eslint-disable-next-line
//   [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
// )

// assert.deepEqual(bjorklund(1, 4), [1, 0, 0, 0])

// assert.deepEqual([0, 1, 0, 0], bjorklund(1, 4, 1))

// assert.deepEqual(
//   bjorklund(5, 13),
//   // eslint-disable-next-line
//   [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
// )

assert.deepEqual(
  bjorklund(3, 8),
  // eslint-disable-next-line
  [1, 0, 0, 1, 0, 0, 1, 0],
)
