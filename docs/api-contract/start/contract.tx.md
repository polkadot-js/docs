---
title: Contract tx
---

## Interface

In addition to using the `.query.<messageName>` on a contract, the `.tx.<messageName>` method provides a way to send an actual encoded transaction to the contract, allow for execution and have this applied in a block. Expanding on our previous [ink! incrementer](https://github.com/paritytech/ink/blob/master/examples/incrementer/lib.rs) example, we can now execute and then retrieve the subsequent value.

```javascript
const value = 10000; // only for payable messages, call will fail otherwise
const gasLimit = 3000n * 1000000n;
const storageDepositLimit = null;
const incValue = 1;

// Send the transaction, like elsewhere this is a normal extrinsic
// with the same rules as applied in the API (As with the read example,
// additional params, if required can follow - here only one is needed)
await contract.tx
  .inc({ storageDepositLimit, gasLimit }, incValue)
  .signAndSend(alicePair, result => {
    if (result.status.isInBlock) {
      console.log('in a block');
    } else if (result.status.isFinalized) {
      console.log('finalized');
    }
  });
```

For the above interface we can specify the message as the string name, the index of the actual message as retrieved via the Abi.


## Cost estimation

To estimate values for `gasLimit` and `storageDepositLimit`, we can dry run the contract call using the `.query` (read) interfaces with a sufficiently large value to retrieve the actual gas and storage deposit consumed. The API makes this easy by passing `gasLimit: -1` and `storageDepositLimit: null` to the query. The query will use the maximum tx weight for `gasLimit` and available free balance for `storageDepositLimit`.

See this in practice for the `inc` message on the ink! incrementer contract

```js
const incValue = 1;
const options = { storageDepositLimit: null, gasLimit: -1 }

const { gasRequired, storageDeposit, result } = await contract.query.inc(
  alicePair,
  options,
  incValue
);

console.log(`outcome: ${result.isOk ? 'Ok' : 'Error'}`);
console.log(`gasRequired ${gasRequired.toString()}`);
```

We can use the `gasRequired` input (potentially with a buffer for various execution paths) in any calls to `contract.tx.inc(...)` with the same input parameters specified on the `query` where the estimation was done.


## Events

On current versions of the API, any events raised by the contract will be transparently decoded with the relevant ABI and will be made available on the `result` (from `.signAndSend(alicePair, (result) => {...}`) as `contractEvents`.

Where no events were emitted this value would be `undefined`, however should events be emitted, the array will contain all the decoded values.


## That is it... for now

This was a whirl-wind tour of what the API provides in terms of the `@polkadot/api-contract` interface. It is not perfect yet, we would like to expand it to allow for greater type-checking on the contracts (instead of read/exec wit messages), but hopefully in the current state it already enhances the way you can interact with contracts.
