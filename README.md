# @lokua/eucidean-sequence

See:

http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf

Other implementations:

- https://github.com/pingdynasty/EuclideanSequencer
- https://github.com/brianhouse/bjorklund/blob/master/__init__.py

## Install

```sh
npm i @lokua/euclidean-sequence
```

## Usage

**eucideanSequence(fill, length[, offset = 0])**

```js
const eucideanSequence = require('@lokua/eucidean-sequence')

eucideanSequence(3, 8) // => [1, 0, 0, 1, 0, 0, 1, 0]
```
