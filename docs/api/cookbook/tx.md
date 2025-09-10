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
  .transferKeepAlive(recipient, 123)
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
  .transferKeepAlive(recipient, 123)
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
  .transferKeepAlive(recipient, 123)
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
const unsubscribe = await api.tx.sudo
  .sudo(
    api.tx.balances.forceTransfer(user1, user2, amount)
  )
  .signAndSend(sudoPair, ({ status, events }) => {
    if (status.isInBlock || status.isFinalized) {
      events
        .forEach(({ event }) => {
          // We know this tx should result in `Sudid` event, ignore all others.
          if(!api.events.sudo.Sudid.is(event)) continue;

          // `event` is now typed as Sudid, which has a payload called `sudoResult`
          const result = event.data.sudoResult
                // ^? `Result<Null, SpRuntimeDispatchError>`

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
  api.tx.balances.transferKeepAlive(addrBob, 12345),
  api.tx.balances.transferKeepAlive(addrEve, 12345),
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
    .transferKeepAlive(recipient, 123)
    .signAndSend(sender, { nonce });
}
```

As a convenience function, the `accountNextIndex` can be omitted by specifying a nonce of `-1`, allow the API to do the lookup. In this case the above can be simplified even further,

```js
for (let i = 0; i < 10; i++) {
  const txhash = await api.tx.balances
    .transferKeepAlive(recipient, 123)
    .signAndSend(sender, { nonce: -1 });
}
```

The latter form is preferred since it dispatches the RPC calls for nonce and blockHash (used for mortality) in parallel and therefore will yield a better throughput, especially with the above bulk example.

## How do I send a priority transaction?

Polkadot/Substrate allows you to increase the **priority** of your transaction in the transaction pool by attaching a **tip**. The higher the tip, the more attractive it becomes for block producers to include it early. This is the recommended way for regular users and dApps to prioritize their transactions.  

```js
// construct a transfer transaction
const tx = api.tx.balances.transferKeepAlive(recipient, 12345);

// sign and send with a tip to increase priority
tx.signAndSend(sender, { tip: 1_000_000_000 }, ({ status }) => {
  if (status.isInBlock) {
    console.log(`included in ${status.asInBlock}`);
  }
});
```

The `tip` is specified in the smallest unit of the token. By offering a higher tip, you effectively “bribe” the block producer to include your transaction before others.

You can also use `.paymentInfo` to simulate and estimate the total fee including the tip:

```js
const info = await tx.paymentInfo(sender, { tip: 1_000_000_000 });
console.log(`Estimated fee: ${info.partialFee.toHuman()}`);
```

⚠️ Some extrinsics in the runtime may be marked as **operational**. These transactions already receive a higher priority internally via the `operationalFeeMultiplier`. However, this classification is determined by the runtime and cannot be set from the API. For normal users, attaching a tip is the practical way to prioritize transactions.


## How do proxy accounts work in Polkadot?

In Polkadot, a **proxy** account allows one account (the *delegate*) to perform actions on behalf of another account (the *delegator*).  
This is useful when you want to separate responsibilities, delegate actions securely, or manage accounts with reduced risk of exposing main private keys.  

### Add Proxy

The following example demonstrates how to add a proxy using the Polkadot.js API.  
Here, `//Alice` is the main account, and `//Bob` is added as its proxy with the `Any` proxy type:

- `Any` means Bob can perform any type of transaction on behalf of Alice.  
- The `0` is the *delay* parameter, representing how many blocks to wait before the proxy action is effective (set to `0` for immediate effect).  

```js
import { ApiPromise, Keyring, WsProvider } from "@polkadot/api";
import { cryptoWaitReady } from "@polkadot/util-crypto";

const keyring = new Keyring({ type: "sr25519", ss58Format: 2 });

const MAIN_MNEMONIC = "//Alice";
const PROXY_MNEMONIC = "//Bob";

const main = async () => {
  await cryptoWaitReady();

  const api = await ApiPromise.create({
    provider: new WsProvider("ws://127.0.0.1:8000"),
  });

  await api.isReadyOrError;

  const mainKeyring = keyring.addFromMnemonic(MAIN_MNEMONIC);
  const proxyKeyring = keyring.addFromMnemonic(PROXY_MNEMONIC);

  // Add proxy for main account
  const tx = api.tx.proxy.addProxy(proxyKeyring.address, "Any", 0);

  await tx.signAndSend(mainKeyring);

  await api.disconnect();
};

main()
  .catch((e) => console.log("Something went wrong!", e))
  .finally(() => process.exit(0));
```

### Remove Proxy

To remove a proxy from an account, you need to call the `proxy.removeProxy` method with the same parameters used when it was added:  

- **proxy account address** → the delegate you want to remove (in this case, `//Bob`)  
- **proxy type** → the type of permissions the proxy had (e.g., `"Any"`)  
- **delay** → must match the delay specified when adding the proxy (here `0`)  

The following code removes Bob as a proxy for Alice:

```js
import { ApiPromise, Keyring, WsProvider } from "@polkadot/api";
import { cryptoWaitReady } from "@polkadot/util-crypto";

const keyring = new Keyring({ type: "sr25519", ss58Format: 2 });

const MAIN_MNEMONIC = "//Alice";
const PROXY_MNEMONIC = "//Bob";

const main = async () => {
  await cryptoWaitReady();

  const api = await ApiPromise.create({
    provider: new WsProvider("ws://127.0.0.1:8000"),
  });

  await api.isReadyOrError;

  const mainKeyring = keyring.addFromMnemonic(MAIN_MNEMONIC);
  const proxyKeyring = keyring.addFromMnemonic(PROXY_MNEMONIC);

  // Remove proxy for main account
  const tx = api.tx.proxy.removeProxy(proxyKeyring.address, "Any", 0);

  await tx.signAndSend(mainKeyring);

  await api.disconnect();
};

main()
  .catch((e) => console.log("Something went wrong!", e))
  .finally(() => process.exit(0));
```

### Submit a transaction through a proxy account

Once a proxy relationship is established, the proxy account can submit transactions on behalf of the main account.  
This is done using the `proxy.proxy` method, where:  

- **real (main account address)** → the account on whose behalf the action is performed (e.g., Alice).  
- **proxy type** → the type of proxy to use (set `null` to automatically pick the correct one).  
- **call/extrinsic** → the actual transaction to execute (e.g., a balance transfer).  

In the example below, Bob (proxy) submits a **balance transfer** transaction on behalf of Alice (main):

```js
import { ApiPromise, Keyring, WsProvider } from "@polkadot/api";
import { cryptoWaitReady } from "@polkadot/util-crypto";

const keyring = new Keyring({ type: "sr25519", ss58Format: 2 });

const MAIN_MNEMONIC = "//Alice";
const PROXY_MNEMONIC = "//Bob";

const main = async () => {
  await cryptoWaitReady();

  const api = await ApiPromise.create({
    provider: new WsProvider("ws://127.0.0.1:8000"),
  });

  await api.isReadyOrError;

  const mainKeyring = keyring.addFromMnemonic(MAIN_MNEMONIC);
  const proxyKeyring = keyring.addFromMnemonic(PROXY_MNEMONIC);

  // Transfer balance extrinsic
  const extrinsic = api.tx.balances.transferKeepAlive(
    "JKoqczssDdwKAhKhxEcZarY268RrfwhFxe1tRFxkwscWPhM",
    10_000_000_000_000
  );

  // Sign extrinsic on behalf on main account
  const tx = api.tx.proxy.proxy(mainKeyring.address, null, extrinsic);

  // Sign with proxy account
  await tx.signAndSend(proxyKeyring);

  await api.disconnect();
};

main()
  .catch((e) => console.log("Something went wrong!", e))
  .finally(() => process.exit(0));
```