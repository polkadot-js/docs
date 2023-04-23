---
title: Get chain information
---

This example shows how to connect to the api and retrieve the chain information such as the token name, the ss58 format for address encoding and the token decimals.

```javascript
// Import the API
import { ApiPromise, WsProvider } from '@polkadot/api';

async function main () {
  // Create connection to websocket
  const wsProvider = new WsProvider('wss://rpc.polkadot.io');
  // Create a new instance of the api
  const api = await ApiPromise.create({ provider: wsProvider });
  // get the chain information
  const chainInfo = await api.registry.getChainProperties()

  console.log(chainInfo);
  // for Polkadot this would print
  // {ss58Format: 0, tokenDecimals: [10], tokenSymbol: [DOT]}
}

main().catch(console.error).finally(() => process.exit());
```
