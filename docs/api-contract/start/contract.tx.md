---
title: Contract Tx
---

In addition to using the `.query.<messageName>` on a contract, the `.tx.<messageName>` method is provides to send an actual encoded transaction to the contract, allow for execution and have this applied in a block. Expanding on our previous examples, we can now execute and then retrieve the subsequent value -

```javascript
// We will use these values for the execution
const value = 0; // only useful on isPayable messages
const gasLimit = 3000n * 1000000n;
const incValue = 1;

// Send the transaction, like elsewhere this is a normal extrinsic
// with the same rules as applied in the API (As with the read example,
// additional params, if required can follow - here only one is needed)
await contract.tx
  .inc({ value, gasLimit }, incValue)
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
  .exec('inc', { value, gasLimit }, incValue)
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
// the gas consumed (the API aut-fill the max block tx weight when -1 is the gasLimit)
const { gasConsumed, result } = await contract.query.inc(slicePair, { value, gasLimit: -1 }, incValue)

console.log(`outcome: ${result.isOk ? 'Ok' : 'Error'}`);
console.log(`gasConsumed ${gasConsumed.toString()}`);
```

We can use the `gasConsumed` input (potentially with a buffer for various execution paths) in any calls to `contract.tx.inc(...)` with the same input parameters specified on the `query` where the estimation was done.


## Events

On current versions of the API, any events raised by the contract will be transparently decoded with the relevant ABI and will be made available on the `result` (from `.signAndSend(alicePair, (result) => {...}`) as `contractEvents`.

Where no events were emitted this value would be `undefined`, however should events be emitted, the array will contain all the decoded values.


## That is it... for now

This was a whirl-wind tour of what the API provides in terms of the `@polkadot/api-contract` interface. It is not perfect yet, we would like to expand it to allow for greater type-checking on the contracts (instead of read/exec wit messages), but hopefully in the current state it already enhances the way you can interact with contracts.
