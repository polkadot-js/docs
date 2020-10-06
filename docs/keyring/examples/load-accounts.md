---
title: Load Accounts
---

The following example shows how to load all accounts from the keyring as pairs and convert them into JSON format.

```javascript
// Import Keyring class and utility function
const { Keyring } = require('@polkadot/keyring');
const { stringToU8a } = require('@polkadot/util');

async function main () {
  // Create account seed for Alice and Bob
  const ALICE_SEED = 'Alice'.padEnd(32, ' ');
  const BOB_SEED = 'Bob'.padEnd(32, ' ');

  // Create an instance of the Keyring
  const keyring = new Keyring();

  // Create their pairs with account seeds. Add to keyring pair dictionary
  keyring.addFromSeed(stringToU8a(ALICE_SEED));
  keyring.addFromSeed(stringToU8a(BOB_SEED));

  // Note that we did not use `addFromAddress` since it does not add the
  // secret key to memory so we cannot later retrieve it with `getPairs`

  // Retrieve all keyring pairs from the keyring pair dictionary
  keyring
    .getPairs()
    .forEach((pair, index) => {
      const { address } = pair;

      console.log(`\nAccount with index #${index} has json: `, JSON.stringify(keyring.toJson(address), null, 2));
    });
}

main().catch(console.error).finally(() => process.exit());
```

