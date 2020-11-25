---
title: Verify Signature
---

This function will return true if a message passed as parameter has been signed by the passed address 

```javascript
const { decodeAddress, signatureVerify } = require('@polkadot/util-crypto');
const { u8aToHex } = require('@polkadot/util');

const isValidSignature = (signedMessage, signature, address) => {
  const publicKey = decodeAddress(address);
  const hexPublicKey = u8aToHex(publicKey);

  return signatureVerify(message, signature, hexPublicKey).isValid;
};

const isValid = isValidSignature(
  'This is a text message',
  '0x2aeaa98e26062cf65161c68c5cb7aa31ca050cb5bdd07abc80a475d2a2eebc7b7a9c9546fbdff971b29419ddd9982bf4148c81a49df550154e1674a6b58bac84',
  '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty'
);

console.log(isValid)
// true
```
