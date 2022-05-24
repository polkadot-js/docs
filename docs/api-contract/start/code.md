---
title: Upload and instantiate
---

The `CodePromise` class allows the developer to manage calls to the `instantiate_with_code` dispatchable in the contracts pallet. 
Useful in cases where an existing `codeHash` is not available, meaning the code has never been deployed to the blockchain in its current form. This dispatchable uploads the wasm code the blockchain and creates a new instance in one go. Read more about how it works in the [Substrate Metadata](../../substrate/extrinsics.md#instantiatewithcodevalue-compactu128-gas_limit-compactu64-storage_deposit_limit-optioncompactu128-code-bytes-data-bytes-salt-bytes) section 

It is important to understand that the interfaces provided here are higher-level helpers, so some assumptions are made to make subsequent use easier. In the case of the `CodePromise` class this is quite visible. While `instantiate_with_code` is independent of any ABIs, for out helpers we always assume that the developer does have access to the ABI right at the start. This means that when the code is instantiated there will be an association between that contract instance and it's abi.

The helpers are there to help and make development easier by integrating the parts, nothing would stop a developer from making `instantiate_with_code` or `instantiate` calls themselves.

```javascript
import { ApiPromise } from '@polkadot/api';
import { CodePromise } from '@polkadot/api-contracts';

...
// Construct the API as per the API sections
// (as in all examples, this connects to a local chain)
const api = await ApiPromise.create();

// Construct our Code helper. As per the code example
// the abi is an Abi object (created with the Abi interface in this package), an unparsed JSON string (the metadata generated at build time)
// or the raw JSON data (after doing a JSON.parse).
//  The wasm is either a hex string (0x prefixed), an Uint8Array or a Node.js Buffer object
const code = new CodePromise(api, abi, wasm);

// Upload and instantiate the WASM through the Code helper
...
// Store a reference to a constructor method name
const constructorName = abi.constructors[0].method;

// Create and object to pass as instantiation options
const options = {
  // maximum gas to be consumed for the instantiation. if limit is too small the instantiation will fail.
  // use the instantiate RPC to dry run the call and get back gas predictions
  gasLimit,
  // a limit to how much Balance to be used to pay for the storage created by the instantiation
  // if null is passed, unlimited balance can be used
  storageDepositLimit,
  // used to create contract address, will fail with DuplicateContract error when not provided
  salt,
  // Balance to send - use only for payable constructors
  value,
};

let contract;

const unsub = await code.tx[constructorName](options, ...params).signAndSend(
  alicePair,
  (result) => {
    if (result.status.isInBlock || result.status.isFinalized) {
      // retrieve the ContractPromise from the sumbittable result
      contract = result.contract;
      unsub();
    }
  }
);
```


## Reinstantiate

After we have uploaded the WASM on-chain, next we'll use the [Blueprint to (re)instantiate on-chain code](blueprint.md).
