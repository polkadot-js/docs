---
title: Blueprint
---

A `BlueprintPromise` wraps an existing `codeHash` and an `Abi` and provides the opportunity to create contracts on-chain. It is either created via `new BlueprintPromise` from an existing `codeHash`, or as seen in the [code example](code.md) from deploying a WASM code bundle on-chain.

Assuming that we did not deploy code, we can start by creating one (if following from the previous section, this is for information only, since you already have access to the created Blueprint from `CodePromise`) -

```javascript
import { BlueprintPromise } from '@polkadot/api-contract';

...
// Create a new blueprint from an existing hash. As per the code example
// the abi is an Abi object, an unparsed JSON string or the raw JSON data
// (after doing a JSON.parse). The hash here is either a Hash, Uint8Array
// or hex string
const blueprint = new BlueprintPromise(api, abi, codeHash);

// Deploy a contract using the Blueprint
...
```

As with the `CodePromise` sample, we require an `ApiPromise`, `Abi` and the actual `codeHash`, as found on-chain. If a non-existent `codeHash` is used, it will fail on actual contract creation, which is the next step.


## Create a contract

We either have a `Blueprint` from a code deploy of a manual create. From here we can create an actual contract instance. For this example, we are assuming a normal [incrementer contract](https://github.com/paritytech/ink/tree/master/examples/incrementer) to allow us have a known example to show the actual use -

```javascript
// Deploy a contract using the Blueprint
const endowment = 1230000000000n;

// NOTE The apps UI specifies these in Mgas
const gasLimit = 100000n * 1000000n;
const initValue = 123;

let contract;

// We pass the constructor (named `new` in the actual Abi),
// the endowment, gasLimit (weight) as well as any constructor params
// (in this case `new (initValue: i32)` is the constructor)
const unsub = await blueprint.tx
  .new(endowment, gasLimit, initValue)
  .signAndSend(alicePair, (result) => {
    if (result.status.isInBlock || result.status.isFinalized) {
      // here we have an additional field in the result, containing the contract
      contract = result.contract;
      unsub();
    }
  });
```

As per the `Code` examples previously, the `tx.<constructorName>` interface is a normal submittable extrinsic with the result containing an actual `ContractPromise` instance as created with the address from the events from deployment. Internally it will use the `instantiate` extrinsic and interpret the events retrieved.

For cases where we want to refer to the message via index (or actual Abi message), we can use the `.createContract` helper on the `Blueprint`, in this case the lower-level code would yield -

```javascript
// We pass the constructor (name, index or actual constructor from Abi),
// the endowment, gasLimit (weight) as well as any constructor params
// (in this case `new (initValue: i32)` is the constructor)
const unsub = await blueprint
  .createContract('new', endowment, gasLimit, initValue)
  .signAndSend(alicePair, (result) => {
    ...
  });
```

## Interact with contracts

We have made it this far. At this point you should be familiar with code deployments as well as contract instantiation, next up [we will read a contract](contract.read.md).
