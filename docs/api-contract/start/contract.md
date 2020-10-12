---
title: Contract
---

The `ContractPromise` interface allows you to interact with a deployed contract. In the previous [Blueprint example](blueprint.md) this instance was created via `createContract`. In general use, you can also create an instance via `new`, i.e. when you are attaching to an existing contract on-chain -

```javascript
import { ContractPromise } from '@polkadot/api-contract';

// Attach to an existing contract with a known ABI and address
const contract = new ContractPromise(api, abi, address);

// Read from the contract
...
```

Either via a create above or via a call to `createContract` both instances are the same. The `Contract` provides a wrapper around the `Abi` and allows you to call either `read` or `exec` on a contract to interact with it.


## Reading contract values

In the `Blueprint` example we have instantiated an incrementer contract. In the following examples we will continue using it to read from and execute transactions into, since it is a well-known entity. To read a value from the contract, we can do the following -

```javascript
// Read from the contract via an RPC call
const value = 0; // only useful on isPayable messages
const gasLimit = 1000000n;

// Perform the actual read (no params at the end, for the get message)
// (We perform the send from an account address, it doesn't get executed)
const value = await contract
  .read('get', value, gasLimit)
  .send(alicePait.address);

// should output 123 as per our initial set (output here is an i32)
console.log(value.output.toHuman());

// the actual result from RPC as `ContractExecResult`
console.log(value.result.toHuman());
```

Underlying the above `.read` using the `.call` RPC on the contracts palette to retrieve the value. When executing it encodes the message using the selector and the input values to allow execution in the contract environment. This can be executed on any contract message, unlike the execution below it will only read state, not actually execute.


## Sending a transaction

In addition to using the `.read` on a contract, the `.exec` method is provides to send an actual encoded transaction to the contract. Expanding on our above example, we can now execute and then retrieve the subsequent value -

```javascript
// We will use these values for the execution
const value = 0; // only useful on isPayable messages
const gasLimit = 1000000n;
const incValue = 1;

// Send the transaction, like elsewhere this is a normal submittable
// extrinsic with the same rules as applied in the API
await contract
  .exec('inc', value, gasLimit, incValue)
  .signAndSend(alicePair, (result) => {
    if (result.status.isInBlock) {
      console.log('in a block');
    } else if (result.status.isFinalized) {
      console.log('finalized');
    }
  });
```

If we perform the same `.get` read on the value now, it would be `124`.


## That is it... for now

This was a whirl-wind tour of what the API provides in terms of the `@polkadot/api-contract` interface. It is not perfect yet, we would like to expand it to allow for greater type-checking on the contracts (instead of read/exec wit messages), but hopefully in the current state it already enhances the way you can interact with contracts.
