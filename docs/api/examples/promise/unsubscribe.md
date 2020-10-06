---
title: Unsubscribe from listening to updates
---

This example shows how to subscribe to and later unsubscribe from listening to block updates.

In this example we're calling the built-in unsubscribe() function after a timeOut of 20s to cleanup and unsubscribe from listening to updates.

```javascript
// Import the API
const { ApiPromise } = require('@polkadot/api');

async function main () {
  // Create a new instance of the api
  const api = await ApiPromise.create();

  // Subscribe to chain updates and log the current block number on update.
  const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {
    console.log(`Chain is at block: #${header.number}`);
  });

  // In this example we're calling the unsubscribe() function that is being
  // returned by the api call function after 20s.
  setTimeout(() => {
    unsubscribe();
    console.log('Unsubscribed');
  }, 20000);
}

main().catch(console.error);
```
