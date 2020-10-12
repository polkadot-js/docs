---
title: Code
---

The `CodePromise` class allows the developer to manage calls to code deployment. In itself, it is easy to use for code deployment and it generally the first step, especially in cases where an existing `codeHash` is not available -

```javascript
import { ApiPromise } from '@polkadot/api';
import { CodePromise } from '@polkadot/api-contracts';

...
// Construct the API as per the API sections
// (as in all examples, this connects to a local chain)
const api = await ApiPromise.create();

// Construct our Code helper. The ABI is an Abi object, a string or the raw
// data (after JSON.parse). Here the wasm is either a hex string (0x prefixed),
// an Uint8Array or a Node.js Buffer object
const code = new CodePromise(api, abi, wasm);

// Deploy the WASM, retrieve a Blueprint
...
```

It is important to understand that the interfaces provided here are higher-level helpers, so some assumptions are made to make subsequent use easier. In the case of the `CodePromise` class this is quite visible. While a `contracts.putCode` is independent of any ABIs, for out helpers we always assume that the developer does have access to the ABI right at the start. This means that when code is deployed a Blueprint can be created with the correct ABI (and subsequent deployments can, once again, create a Contract with an attached ABI).

The helpers are there to help and make development easier by integrating the parts, nothing would stop a developer from making `putCode` or `instantiate` calls themselves.


## Create a blueprint

After we have the initial structure above, the next step would be to actually deploy the code and retrieve a `BlueprintPromise` from the result. Building on the above example -

```javascript
// Deploy the WASM, retrieve a Blueprint
let blueprint;

// createBlueprint is a normal submittable, so use signAndSend
// with an known Alice keypair (as per the API samples)
const unsub = await code
  .createBlueprint()
  .signAndSend(alicePair, (result) => {
    if (result.status.isInBlock || result.status.isFinalized) {
      // here we have an additional field in the result, containing the blueprint
      blueprint = result.blueprint;
      unsub();
    }
  })
```

As noted above the `createBlueprint` helper on the `Code` interface is a normal submittable, although it is enhanced to return an actual `Blueprint` based on the `codeHash` retrieved. Internally it sends a `putCode` and will listen for the correct emitted events. Based on the results and events (and the input ABI) it will subsequently create a helper object that can be used to deploy contracts.


## Use the blueprint

After we have deployed the WASM on-chain, next we can use the [Blueprint result to deploy](blueprint.md) a contract on-chain.
