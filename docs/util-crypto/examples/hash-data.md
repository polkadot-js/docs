---
title: Hash Data
---

There are many different hashing algorithms exposed in the util-crypto package.

 * Blake2
 * Keccak
 * sha512
 * for all of them see [here](https://github.com/polkadot-js/common/tree/master/packages/util-crypto/src)

 Example of Blake2 hashing

 ```javascript
const { blake2AsHex } = require('@polkadot/util-crypto');
const hash = blake2AsHex("data goes here")
console.log(hash)
//result: { hash: '0xce73267ed8316b4350672f32ba49af86a7ae7af1267beb868a27f3fda03c044a' }
 ```