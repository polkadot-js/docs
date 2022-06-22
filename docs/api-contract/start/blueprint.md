---
title: Instantiate
---

A `BlueprintPromise` is very similar to a `CodePromise`. It wraps the `codeHash` of a previously deployed contract and an `Abi` and provides the ability to create contract instances via the `instantiate` dispatchable in the contracts pallet. 
If a non-existent `codeHash` is used, the instantiation will fail on-chain.


Let's take for example an ink! flipper contract, the `tx.<constructorName>` interface is a normal submittable extrinsic with the result containing an actual `ContractPromise` instance, created with the address of the new contract instance.

```javascript
import { BlueprintPromise } from '@polkadot/api-contract';

const blueprint = new BlueprintPromise(api, abi, codeHash);

const tx = blueprint.tx["default"]({ gasLimit, storageDepositLimit, salt });

let address;

const unsub = await tx.signAndSend(
  alicePair,
  ({ contract, status }) => {
    if (status.isInBlock || status.isFinalized) {
      address = contract.address.toString()
      unsub();
    }
  }
);
```

## Interact with contracts

We have made it this far. At this point you should be familiar with code deployments as well as contract instantiation, next up [we will read a contract](contract.read.md).
