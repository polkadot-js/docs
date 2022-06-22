---
title: FAQ
---

The list will be updated/expanded as questions come up, dealing with some common issues that API users find.


## My ABI cannot be parsed

When passing an older pre ink! 3.0-rc1 version of the ABI, you will have an "Invalid JSON ABI structure supplied, expected a recent metadata version" error being returned. As explained in the [getting started guide](start/install.md) as of `@polkadot/api-contract` 2.2+ the older ink! 2.1 versions are not supported.

If you are using an older version you would need to use an older version of the API or upgrade your contracts to ink! 3.0.


## Why is there a snake_case vs camelCase difference

The API always tries to use `camelCase` naming where available. This aligns with the de-facto standards that are generally (not always!) used in JS interfaces. This means that when decorating the ABIs into `contract.<query|tx>.methodName` the `methodName` part would be in camelCase format.

An example of this would be in the erc20 ink! ABI - the method in the above would be `balance_of` however the API (for consistency with the full suite of libraries), decorate this as `contract.query.balanceOf`.


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
