---
title: Substrate Uri
---

Substrate has a standard derivation format that applies on any seeds and mnemonics. This means that for a given secret, you can apply hard derivations, soft derivations to generate a new pair. In all the examples we have used either `addFromUri` or `createFromUri` and have supplied all with an empty derivation path.

In general the derivation format is specified as `<mnemonic or mini-secret><//hard-derivation></soft-derivation><///password>` where

- `mnemonic or mini-secret` is either of the secret types. For mini-secrets we would supply 32 bytes in hex format (`0x`-prefixed with 64 additional `0`-`f` bytes)
- `hard-derivation` is a hard path, always prefixed by `//` to indicate the type. Multiple hard derivations can be applied, i.e. `//hard//again` would be valid.
- `soft-derivation` is a soft path, always prefixed by `/`. This derivation is only available and supported on `sr25519` pairs. While other crypto can do soft derivations, the Substrate implementation only supports this on Schnorrkel.
- `password`, always prefixed by `///` indicates a derivation password, not to be confused with a pair password as implemented on the keyring. Using these means that an initial kdf is applied upon derivation, which means that even if the seed would leak, accounts cannot be derived without the initial password.


## Putting it together

From the above, we can now derive multiple accounts from the same seed.

```javascript
// known mnemonic, well, now it is - don't use it for funds
const MNEMONIC = 'sample split bamboo west visual approve brain fox arch impact relief smile';

// type: ed25519, no soft derivation
const keyring = new Keyring();

// our ed25519 pairs
console.log(keyring.createFromUri(MNEMONIC).address);
console.log(keyring.createFromUri(`${MNEMONIC}//hardA//hardB`).address);
console.log(keyring.createFromUri(`${MNEMONIC}//hard///password`).address);

// some sr25519 pairs
console.log(keyring.createFromUri(MNEMONIC, {}, { type: 'sr25519' }).address);
console.log(keyring.createFromUri(`${MNEMONIC}//hard/soft`, {}, { type: 'sr25519' }).address);
```


## Working with non-mnemonics

Additionally, as indicated the `{add, create}FromUri` functions can also take a raw mini secret. Although mnemonic interactions are generally preferred (since it had checksums and users are generally bad at generating 32-bytes by themselves), raw secrets can be applied.

```javascript
// imports we are using here
import { u8aToHex } from '@polkadot/util';
import { mnemonicGenerate, mnemonicToMiniSecret, randomAsHex } from '@polkadot/util-crypto';

// generate a mnemonic & some mini-secrets
const mnemonic = mnemonicGenerate();
const mnemonicMini = mnemonicToMiniSecret(mnemonic);
const randomMini = randomAsHex(32);

// these will be equivalent
console.log(keyring.createFromUri(mnemonic).address);
console.log(keyring.createFromUri(u8aToHex(mnemonicMini)).address);

// a random seed with derivation applied
console.log(keyring.createFromUri(`${randomMini}//hard`).address);
```

## Overview... done.

At this point you should have a good grasp on the Keyring, the interactions with pairs and how this relates to Substrate usage and addresses. While the keyring has additional functionality we have covered the basic interactions in-depth. Check back in the future for expansions on the features contained here.
