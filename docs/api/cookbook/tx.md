---
title: Transactions
---

A blockchain is no fun if you are not submitting transactions. Or at least if somebody is not submitting any. Here you will find some snippets for dealing with some common issues.


## How do I estimate the transaction fees?

In addition to the `signAndSend` helper on transactions, `.paymentInfo` (with the exact same parameters) are also exposed. Using the same sender, it applies a dummy signature to the transaction and then gets the fee estimation via RPC.

```js
// estimate the fees as RuntimeDispatchInfo, using the signer (either
// address or locked/unlocked keypair) (When overrides are applied, e.g
//  nonce, the format would be `paymentInfo(sender, { nonce })`)
const info = await api.tx.balances
  .transfer(recipient, 123)
  .paymentInfo(sender);

// log relevant info, partialFee is Balance, estimated for current
console.log(`
  class=${info.class.toString()},
  weight=${info.weight.toString()},
  partialFee=${info.partialFee.toHuman()}
`);
```


## How do I get the decoded enum for an ExtrinsicFailed event?

Assuming you are sending a tx via `.signAndSend`, the callback yields information around the tx pool status as well as any events when `isInBlock` or `isFinalized`. If an extrinsic fails via `system.ExtrinsicFailed` event, you can retrieve the error, if defined as an enum on a module.

```js
api.tx.balances
  .transfer(recipient, 123)
  .signAndSend(sender, ({ status, events }) => {
    if (status.isInBlock || status.isFinalized) {
      events
        // find/filter for failed events
        .filter(({ event }) =>
          api.events.system.ExtrinsicFailed.is(event)
        )
        // we know that data for system.ExtrinsicFailed is
        // (DispatchError, DispatchInfo)
        .forEach(({ event: { data: [error, info] } }) => {
          if (error.isModule) {
            // for module errors, we have the section indexed, lookup
            const decoded = api.registry.findMetaError(error.asModule);
            const { docs, method, section } = decoded;

            console.log(`${section}.${method}: ${docs.join(' ')}`);
          } else {
            // Other, CannotLookup, BadOrigin, no extra info
            console.log(error.toString());
          }
        });
    }
  });
```

As of the `@polkadot/api` 2.3.1 additional result fields are exposed. Firstly there is `dispatchInfo: DispatchInfo` which occurs in both `ExtrinsicSuccess` & `ExtrinsicFailed` events. Additionally, on failures the `dispatchError: DispatchError` is exposed. With this in mind, the above can be simplified to be -

```js
api.tx.balances
  .transfer(recipient, 123)
  .signAndSend(sender, ({ status, events, dispatchError }) => {
    // status would still be set, but in the case of error we can shortcut
    // to just check it (so an error would indicate InBlock or Finalized)
    if (dispatchError) {
      if (dispatchError.isModule) {
        // for module errors, we have the section indexed, lookup
        const decoded = api.registry.findMetaError(dispatchError.asModule);
        const { docs, name, section } = decoded;

        console.log(`${section}.${name}: ${docs.join(' ')}`);
      } else {
        // Other, CannotLookup, BadOrigin, no extra info
        console.log(dispatchError.toString());
      }
    }
  });
```

## How do I get the Result of a Sudo event?

The section above shows you how to listen for the result of a regular extrinsic. However, Sudo extrinsics do not directly report the success or failure of the underlying call. Instead, a Sudo transaction will return `Sudid(result)`, where `result` will be the information you are looking for.

To properly parse this information, we will follow the steps above, but then specifically peek into the event data to find the final result:

```js
const unsub = await api.tx.sudo
  .sudo(
    api.tx.balances.forceTransfer(user1, user2, amount)
  )
  .signAndSend(sudoPair, ({ status, events }) => {
    if (status.isInBlock || status.isFinalized) {
      events
        // We know this tx should result in `Sudid` event.
        .filter(({ event }) =>
          api.events.sudo.Sudid.is(event)
        )
        // We know that `Sudid` returns just a `Result`
        .forEach(({ event : { data: [result] } }) => {
          // Now we look to see if the extrinsic was actually successful or not...
          if (result.isError) {
            let error = result.asError;
            if (error.isModule) {
              // for module errors, we have the section indexed, lookup
              const decoded = api.registry.findMetaError(error.asModule);
              const { docs, name, section } = decoded;

              console.log(`${section}.${name}: ${docs.join(' ')}`);
            } else {
              // Other, CannotLookup, BadOrigin, no extra info
              console.log(error.toString());
            }
          }
        });
      unsub();
    }
  });
```

## How do I send an unsigned extrinsic?

For most runtime modules, transactions need to be signed and validation for this happens node-side. There are however modules that accepts unsigned extrinsics, an example would be the Polkadot/Kusama token claims (which is here used as an example).

```js
// construct the transaction, exactly as per normal
const utx = api.tx.claims.claim(beneficiary, ethSignature);

// send it without calling sign, pass callback with status/events
tx.send(({ status }) => {
  if (status.isInBlock) {
    console.log(`included in ${status.asInBlock}`);
  }
});
```

The signing is indicated by the first byte in the transaction, so in this case we have called `.send` on it (no `.sign` or `.signAndSend`), so it will be sent using the unsigned state, without signature attached.

NOTE: The status event is only available on providers that support subscriptions such as `WSProvider` or `ScProvider`. On `HttpProvider`, which does not have bi-directional capabilities, there are no subscriptions, so it cannot listen to the events that are emitted by the transaction pool. In the case of `HttpProvider` the result object returned will always be the non-unique transaction hash.


## How can I batch transactions?

Polkadot/Substrate provides a `utility.batch` method that can be used to send a number of transactions at once. These are then executed from a single sender (single nonce specified) in sequence. This is very useful in a number of cases, for instance if you wish to create a payout for a validator for multiple eras, you can use this method. Likewise, you can send a number of transfers at once. Or even batch different types of transactions.

```js
// construct a list of transactions we want to batch
const txs = [
  api.tx.balances.transfer(addrBob, 12345),
  api.tx.balances.transfer(addrEve, 12345),
  api.tx.staking.unbond(12345)
];

// construct the batch and send the transactions
api.tx.utility
  .batch(txs)
  .signAndSend(sender, ({ status }) => {
    if (status.isInBlock) {
      console.log(`included in ${status.asInBlock}`);
    }
  });
```

The fee for a batch transaction can be estimated similar to the fee for a single transaction using the exposed `.paymentInfo` helper method that was described earlier, and it is usually less than the sum of the fees for each individual transaction.

## How do I take the pending tx pool into account in my nonce?

The `system.account` query will always contain the current state, i.e. it will reflect the nonce for the last known block. As such when sending multiple transactions in quick succession (see batching above), there may be transactions in the pool that has the same nonce that `signAndSend` would apply - this call doesn't do any magic, it simply reads the state for the nonce. Since we can specify options to the `signAndSend` operation, we can override the nonce, either by manually incrementing it or querying it via `rpc.system.accountNextIndex`.

```js
for (let i = 0; i < 10; i++) {
  // retrieve sender's next index/nonce, taking txs in the pool into account
  const nonce = await api.rpc.system.accountNextIndex(sender);

  // send, just retrieving the hash, not waiting on status
  const txhash = await api.tx.balances
    .transfer(recipient, 123)
    .signAndSend(sender, { nonce });
}
```

As a convenience function, the `accountNextIndex` can be omitted by specifying a nonce of `-1`, allow the API to do the lookup. In this case the above can be simplified even further,

```js
for (let i = 0; i < 10; i++) {
  const txhash = await api.tx.balances
    .transfer(recipient, 123)
    .signAndSend(sender, { nonce: -1 });
}
```

The latter form is preferred since it dispatches the RPC calls for nonce and blockHash (used for mortality) in parallel and therefore will yield a better throughput, especially with the above bulk example.
