---
title: Create
---

To create your first keyring, it is as simple as importing it and constructing it.

```javascript
import { Keyring } from '@polkadot/keyring';

...
// create a keyring with some non-default values specified
const keyring = new Keyring({ type: 'sr25519', ss58Format: 2 });
```

In the above we do an import and then subsequently create a keyring with a standard crypto type. As detailed earlier, in standard Polkadot/Substrate chains `ed25519`/`sr25519`/`ecdsa` types are supported. The `ss58Format` will be used to format addresses, more on this in a later section.


## Crypto types

When creating a keyring the options are, well, optional. This means that when not specifying a default type of crypto `ed25519` will be used. It is important to note that the type specified is just the default for the keyring. You can always override the type of pair you are adding. Effectively that means that you can create and add a `sr25519` pair to a `ed25519` keyring and vice-versa. The specified type is only used when a pair is added without an explicit type.


## Adding a pair

From the empty keyring above, we can now add a new pair to our keyring.

```javascript
import { mnemonicGenerate } from '@polkadot/util-crypto';

...
// generate a mnemonic with default params (we can pass the number
// of words required 12, 15, 18, 21 or 24, less than 12 words, while
// valid, is not supported since it is more-easily crackable)
const mnemonic = mnemonicGenerate();

// create & add the pair to the keyring with the type and some additional
// metadata specified
const pair = keyring.addFromUri(mnemonic, { name: 'first pair' }, 'ed25519');

// the pair has been added to our keyring
console.log(keyring.pairs.length, 'pairs available');

// log the name & address (the latter encoded with the ss58Format)
console.log(pair.meta.name, 'has address', pair.address);
```

Since we detailed overrides of types, here we added a `ed25519` keypair to our default `sr25519` keyring. Additionally here we also added metadata to the pair, which is just an object holding any values such as `name`, `genesisHash` or whatever the developer applies.


## Revisiting crypto

There is one caveat with the different crypto types. The underlying `@polkadot/util-crypto` libraries makes use of WASM with JS fallbacks. However `sr25519` there is only a WASM interface. This means that before adding any keypair with `sr25519`, we first need to ensure the [WASM is initialized](../../util-crypto/FAQ.md#i-am-having-trouble-initializing-the-wasm-interface).

```javascript
import { cryptoWaitReady, mnemonicGenerate } from '@polkadot/util-crypto';

...
// we only need to do this once per app, somewhere in our init code
// (when using the API and waiting on `isReady` this is done automatically)
await cryptoWaitReady();

// create an ed25519 pair from the mnemonic
const ep = keyring.createFromUri(mnemonic, { name: 'ed25519' }, 'ed25519');

// create an sr25519 pair from the mnemonic (keyring defaults)
const ep = keyring.createFromUri(mnemonic, { name: 'sr25519' });

// log the addresses, different cryptos, different results
console.log(ep.meta.name, ep.address);
console.log(sp.meta.name, sp.address);
```

In the above example, we just wanted to create the pair without adding it to the keyring. (In some cases where we don't need management this is useful.) To do this we changed the `addFromUri` in the first example to `createFromUri`. Like in the first example the pair is created, but unlike the first example it is not available as a pair on the keyring `.pairs` interface.


## Address formatting

With first pair(s) in-hand, we will take a brief look at [ss58 formatting](ss58.md) and the impact it has on address display.
