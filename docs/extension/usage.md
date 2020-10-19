---
title: Usage
slug: /extension/usage
---

To install the component, do `yarn add @polkadot/extension-dapp`
Here is a brief walk through how to use the different utilities from @polkadot/extension-dapp.

```javascript
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
  web3ListRpcProviders,
  web3UseRpcProvider
} from '@polkadot/extension-dapp';

// returns an array of all the injected sources
// (this needs to be called first, before other requests)
const allInjected = await web3Enable('my cool dapp');

// returns an array of { address, meta: { name, source } }
// meta.source contains the name of the extension that provides this account
const allAccounts = await web3Accounts();

// finds an injector for an address
const injector = await web3FromAddress('5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE');

// sets the signer for the address on the @polkadot/api. The alternative approach it to
// pass the signer through options to signAndSend in the next step where we are sending
// (and skip this injection here):
// e.g `.signAndSend(<address>, { signer: injector.signer }, (status) => { ... })` 
api.setSigner(injector.signer);

// sign and send our transaction - notice here that the address of the account
// (as retrieved injected) is passed through as the param to the `signAndSend`,
// the API then calls the extension to present to the user and get it signed.
// Once complete, the api sends the tx + signature via the normal process
api.tx.balances
  .transfer('5C5555yEXUcmEJ5kkcCMvdZjUo7NGJiQJMS7vZXEeoMhj3VQ', 123456)
  .signAndSend('5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE', (status) => { ... });
```
