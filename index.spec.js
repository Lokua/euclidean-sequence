const assert = require('assert')
const fn = require('./index')

assert.deepEqual(fn(1, 1), [1])

assert.deepEqual(fn(0, 1), [0])

assert.deepEqual(
  fn(4, 16),
  // eslint-disable-next-line
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
)

assert.deepEqual(fn(1, 4), [1, 0, 0, 0])

assert.deepEqual([0, 1, 0, 0], fn(1, 4, 1))

assert.deepEqual(
  fn(5, 13),
  // eslint-disable-next-line
  [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
)

for (let i = 0; i < 100; i++) {
  try {
    const p = fn(
      Math.floor(Math.random() * 16),
      Math.floor(Math.random() * 15) + 1,
    )
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
