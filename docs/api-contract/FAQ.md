---
title: FAQ
---

The list will be updated/expanded as questions come up, dealing with some common issues that API users find.


## My ABI cannot be parsed

When passing an older pre ink! 3.0-rc1 version of the ABI, you will have an "Invalid JSON ABI structure supplied, expected a recent metadata version" error being returned. As explained in the [getting started guide](start/install.md) as of `@polkadot/api-contract` 2.2 (and later) the older ink! 2.1 versions are not supported.

If you are using an older version you would need to use an older version of the API or upgrade your contracts to ink! 3.0.


## After upgrading I don't have isSuccess/isError

In earlier versions of Substrate the call results via read had a slightly different interface to what it available now. Specifically on the `result` structure retrieved via read calls `isOk` was named `isSuccess` (and `isErr` was named `isError`). Since the `Contract` interface follows the Substrate convention these changes has been applied alongside the Substrate update to the `ContractExecResult` structure.

In addition `asErr` (unlike the older `asError`) now also has a full error enum (mapping to `DispatchError`) containing failures, unlike the older interface where this was not available. On older chains due to lack of information this will always be `Other`, while on newer chains the result will be fully populated.

The `Contract` interface, despite these underlying naming changes, transparently maps older responses (on older, not yet upgraded chains) to the newer structure, so while there is an change to the JS code use required to cater for this new structure, it can be used against both old and new chains with a transparent mapping between.


## Why is there a snake_case vs camelCase difference

The API always tries to use `camelCase` naming where available. This aligns with the de-facto standards that are generally (not always!) used in JS interfaces. This means that when decorating the ABIs into `contract.<query|tx>.methodName` the `methodName` part would be in camelCase format.

An example of this would be in the erc20 ink! ABI - the method in the above would be `balance_of` however the API (for consistency with the full quite of libraries), decorate this as `contract.query.balanceOf`. When calling the `.read` or `.exec` directly on the contract, you should still specify the original ABI identifier, e.g. `contract.read('balance_of', ...)` (In the next release this will also allow for camelCase lookups in addition to the original Rust/Solidity naming)


## How do I subscribe to a contract query?

Subscriptions, and queries to the raw storage are on their way! Unfortunately until then there isn't a proper way to subscribe to a contract query. A temporary workaround is to subscribe to `api.query.contracts.contractInfoOf`.

```javascript
const unsub = await api.query.contracts.contractInfoOf(contractAddress, async () => {
    // Perform a read of the contract's `get` message
    const callValue = await contract.query.get(alicePair.address, value, gasLimit);

    // Do something with callValue
  });
```

But this workaround is not without drawbacks. Since the callback will be executed every time the contract's storage is affected you will ultimately end up calling your contract query more often than necessary.
