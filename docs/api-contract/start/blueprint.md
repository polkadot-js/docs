---
title: Instantiate
---

A `BlueprintPromise` wraps an existing `codeHash` and an `Abi` and provides the opportunity to create contract instances from on-chain code hashes via the `instantiate` dispatchable in the contracts pallet. 
It also interprets the events retrieved.
If a non-existent `codeHash` is used, the instantiation will fail on-chain.


As per the `Code` examples previously, the `tx.<constructorName>` interface is a normal submittable extrinsic with the result containing an actual `ContractPromise` instance, created with the address of the new contract instance.

```javascript
import { BlueprintPromise } from '@polkadot/api-contract';

...
// Create a new blueprint from an existing hash. As per the code example
// the abi is an Abi object (created with the Abi interface in this package), 
// an unparsed JSON string (the metadata generated at build time) or the raw JSON data (after doing a JSON.parse). 
// The hash here is either a Hash, Uint8Array or hex string

const blueprint = new BlueprintPromise(api, abi, codeHash);

...

// Instantiate on-chain code through the Blueprint helper
...
// Store a reference to a constructor method name
const constructorName = abi.constructors[0].method;

// Create and object to pass as instantiation options
const options = { rn 
  // maximum gas to be consumed for the instantiation. 
  // if limit is too small the instantiation will fail. 
  // use the instantiate RPC to dry run the call and get back accurate gas predictions
  gasLimit,
  // a limit to how much Balance to be used to pay for the storage created by the instantiation
  // if null is passed, all available balance can be used
  storageDepositLimit = null,
  // used to create contract address, will fail with DuplicateContract error when not provided
  salt = null, 
  // Balance to send - use only for payable constructors.  
  value
  }

 let contract; 

const unsub = await blueprint.tx[constructorName](options, ...params).signAndSend(alicePair, (result) => {
    if (result.status.isInBlock || result.status.isFinalized) {
      // retrieve the ContractPromise from the sumbittable result
      contract = result.contract;
      unsub();
    }
}
```

## Interact with contracts

We have made it this far. At this point you should be familiar with code deployments as well as contract instantiation, next up [we will read a contract](contract.read.md).
