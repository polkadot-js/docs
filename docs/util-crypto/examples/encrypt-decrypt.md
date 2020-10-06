---
title: Encrypt & Decrypt Messages
---

The following example shows how to encrypt and decrypt a message with NaCl (pronouced "salt"), which is a Networking and Cryptography library used in util-crypto.

```javascript
const {
  naclDecrypt,
  naclEncrypt,
  randomAsU8a
} = require('@polkadot/util-crypto');
const {
  stringToU8a,
  u8aToString
} = require('@polkadot/util');

async function main () {
  const secret = randomAsU8a();
  const messagePreEncryption = stringToU8a('super secret message');

  // Encrypt the message
  const { encrypted, nonce } = naclEncrypt(messagePreEncryption, secret);

  // Show contents of the encrypted message
  console.log(`Encrypted message: ${JSON.stringify(encrypted, null, 2)}`);

  // Decrypt the message
  const messageDecrypted = naclDecrypt(encrypted, nonce, secret);

  // Convert each Uint8Array to a string for comparison
  const isMatch = u8aToString(messagePreEncryption) === u8aToString(messageDecrypted);

  // Verify that the decrypted message matches the original message
  console.log(`Does the decrypted message match the original message? ${isMatch}`);
}

main().catch(console.error).finally(() => process.exit());
```

