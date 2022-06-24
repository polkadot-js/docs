---
title: Blueprint
---

A `BlueprintPromise` works similarly to a `CodePromise`. It manages calls to the `instantiate` dispatchable in the contracts pallet and uses a code hash to retrieve previously uploaded contract code from chain storage.
If a non-existent `codeHash` is used, the instantiation will fail on-chain. 


Let's take for example an [ink! flipper contract](https://github.com/paritytech/ink/tree/master/examples/flipper/lib.rs), the `tx.<constructorName>` interface is a normal submittable extrinsic with the result containing an actual `ContractPromise` instance, containing the address of the new contract.

```javascript
import { BlueprintPromise } from '@polkadot/api-contract';

const blueprint = new BlueprintPromise(api, metadata, codeHash);

const tx = blueprint.tx.default({ gasLimit, storageDepositLimit, salt });

let address;

const unsub = await tx.signAndSend(alicePair, ({ contract, status }) => {
  if (status.isInBlock || status.isFinalized) {
    address = contract.address.toString();
    unsub();
  }
});
```

We have made it this far. At this point you should be familiar with code deployments as well as contract instantiation, next up [we will read a contract value](contract.read.md).
