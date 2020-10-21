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

// NOTE the apps UI specified these in mega units
const gasLimit = 3000n * 1000000n;

// Perform the actual read (no params at the end, for the `get` message)
// (We perform the send from an account, here using Alice's address)
const callValue = await contract.query.get(alicePair.address, value, gasLimit);

// The actual result from RPC as `ContractExecResult`
console.log(callValue.result.toHuman());

// check if the call was successful
if (callValue.result.isSuccess) {
  // data from the enum
  const success = callValue.result.asSuccess;

  // should output 123 as per our initial set (output here is an i32)
  console.log(callValue.output.toHuman());

  // the amount of gas consumed (naturally a u64 value()
  console.log(success.gasConsumed.toHuman());
} else {
  console.error('Call failed');
}
```

Underlying the above `.query.<messageName>` is using the `api.rpc.contracts.call` API on the contracts palette to retrieve the value. When executing it encodes the message using the selector and the input values to allow execution in the contract environment. This can be executed on any contract message, unlike the execution below it will only read state, not actually execute.

An alternative for reading would be via the lower-level `.read` method, in this case

```javascript
// Perform the actual read (no params at the end, for the `get` message)
// (We perform the send from an account address, it doesn't get executed)
const value = await contract
  .read('get', value, gasLimit)
  .send(alicePair.address);

// The actual result from RPC as `ContractExecResult`
...
```

In cases where the ABI messages have conflicting names, instead of the `'get'` string the actual message index (or message from the Abi itself) can be passed-through.

## Sending a transaction

In addition to using the `.query.<messageName>` on a contract, the `.tx.<messageName>` method is provides to send an actual encoded transaction to the contract. Expanding on our above example, we can now execute and then retrieve the subsequent value -

```javascript
// We will use these values for the execution
const value = 0; // only useful on isPayable messages
const gasLimit = 3000n * 1000000n;
const incValue = 1;

// Send the transaction, like elsewhere this is a normal submittable
// extrinsic with the same rules as applied in the API
await contract.tx
  .inc(value, gasLimit, incValue)
  .signAndSend(alicePair, (result) => {
    if (result.status.isInBlock) {
      console.log('in a block');
    } else if (result.status.isFinalized) {
      console.log('finalized');
    }
  });
```

If we perform the same `query.get` read on the value now, it would be `124`. For lower-level access, like we have in the `Blueprint` via `.createContract` you can also perform the execution via the `.exec` function, which would yield equivalent results -

```javascript
// Send the transaction, like elsewhere this is a normal submittable
// extrinsic with the same rules as applied in the API
await contract
  .exec('inc', value, gasLimit, incValue)
  .signAndSend(alicePair, (result) => {
    ...
  });
```

For the above interface we can specify the message as the string name, the index of the actual message as retrieved via the Abi.


## Weight estimation

To estimate the gasLimit (which in the Substrate context refers to the weight used), we can use the `.query` (read) interfaces with a sufficiently large value to retrieve the actual gas consumed. The API makes this easy - with a `gasLimit` or `-1` passed to the query it will use the maximum gas limit available to transactions and the return value will have the actual gas used.

To see this in practice -

```js
// We will use these values for the execution
const value = 0;
const incValue = 1;

// Instead of sending we use the `call` interface via `.query` that will return
// the gas consoumed (the API aut-fill the max block tx weight when -1 is the gasLimit)
const { result } = await contract.query.inc(value, -1, incValue)

if (result.isSuccess) {
  // extract the value from the Success portion of the enum
  const gasConsumed = result.asSuccess.gasConsumed;

  console.log(`Call execution will consume ${gasConsumed.toString()}`);
}
```

We can use the `gasConsumed` input (potentially with a buffer for various execution paths) in any calls to `contract.tx.inc(...)` with the same input parameters specified on the `query` where the estimation was done.


## That is it... for now

This was a whirl-wind tour of what the API provides in terms of the `@polkadot/api-contract` interface. It is not perfect yet, we would like to expand it to allow for greater type-checking on the contracts (instead of read/exec wit messages), but hopefully in the current state it already enhances the way you can interact with contracts.
