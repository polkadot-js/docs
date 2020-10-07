---
title: Sign & Verify
---

In the previous sections we explored creating and adding a pair to the Keyring. However, let's actually use the pairs in something that is not just extracting local information.

When using the API, pairs are critical since it gets used in [signing transactions](../../api/start/api.tx.subs.md#transaction-inclusion). The same signing and verification structure can be used on any kind of message. Here we will take you through the steps of signing and verifying messages.


## Using known pairs

Assuming a known pair `Alice` we can exchange signatures and perform verification.

```javascript
import { stringToU8a, u8aToHex } from '@polkadot/util';

// create Alice based on the development seed
const alice = keyring.addFromUri('//Alice');

// create the message, actual signature and verify
const message = stringToU8a('this is our message');
const signature = alice.sign(message);
const isValid = alice.verify(message, signature);

// output the result
console.log(`${u8aToHex(signature)} is ${isValid ? 'valid' : 'invalid'}`);
```

Here we created an `Alice` pair with a [derivation path](suri.md). In the next section we will delve into derivation, but for now just know that we have used the Substrate development mnemonic (default when no mnemonic supplied, but a derivation is) and created an address from it. Next we signed the message and then verified it.

On the line logging, you will notice a difference between `sr25519` pairs compared to other crypto types such as `ed25519`. In `sr25519` signatures are non-deterministic. This means that each time a signature is generated, like above, even if the data does match, the signature will be different. In the case of `ed25519` or `ecdsa` each signature, for the same input data, will be the same.


## Verify using address or publicKey

In the previous example it is assumed that you have access to the pair to verify. In real-world examples this is rarely the case since the pair owner won't share his secrets with the person verifying the signature. So while the person generating the signature needs access to the pair (since the signature is generated via the wrapped `secretKey`), the process verifying the signature would only have access to the address.

```javascript
import { stringToU8a, u8aToHex } from '@polkadot/util';
import { signatureVerify } from '@polkadot/util-crypto';

// create Alice based on the development seed
const alice = keyring.addFromUri('//Alice');

// create the message and sign it
const message = stringToU8a('this is our message');
const signature = alice.sign(message);

// verify the message using Alice's address
const { isValid } = signatureVerify(message, signature, alice.address);

// output the result
console.log(`${u8aToHex(signature)} is ${isValid ? 'valid' : 'invalid'}`);
```

## Substrate Uri

We understand how to use the keyring to perform basic operations, next up we will dive into the [Substrate derivation](suri.md) as briefly introduced with the `Alice` keypair above.
