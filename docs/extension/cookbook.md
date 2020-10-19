---
title: Cookbook
slug: /extension/cookbook
---

A set of code snippets ready to be used.

## Get all extensions accounts

A dapp will not be aware whether or not the user has the extension installed on their browser until the `web3Enable` function is called.
Calling this function returns the amount of extensions installed and for which the user has accepted to share their accounts.

```javascript
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';

// this call fires up the authorization popup
const extensions = await web3Enable('my cool dapp');

if (extensions.length === 0) {
    // no extension installed, or the user did not accept the authorization
    // in this case we should inform the use and give a link to the extension
    return;
}

// we are now informed that the user has at least one extension and that we
// will be able to show and use accounts
const allAccounts = await web3Accounts();
```

## Sign a message

Here is an example on how to sign a message with an account that was injected by the extension.

```javascript
// We arbitraily select the first account returned from the above snippet
// `account` is of type InjectedAccountWithMeta 
const account = allAccount[0];

// to be able to retrieve the signer interface from this account
// we can use web3FromSource which will return an InjectedExtension type
const injector = await web3FromSource(account.meta.source);


// this injector object has a signer and a signRaw method
// to be able to sign raw bytes
const signRaw = injector?.signer?.signRaw;

if (!!signRaw) {
    // after making sure that signRaw is defined
    // we can use it to sign our message
    const { signature } = await signRaw({
        account.address,
        data: stringToHex('message to sign'),
        type: 'bytes'
    });
}
```

Head to the relevant [util-crypto](/util-crypto/examples/verify-signature) example to see how to verify a signature.

## Sign and send a transaction

The api is able to retrieve the signer when `signAndSend` is called with the address from an account retrieved from the extension.

```javascript
// We arbitraily select the first account returned from the above snippet
// `account` is of type InjectedAccountWithMeta 
const account = allAccount[0];

// here we use the api to create a balance transfer to some account of a value of 12344
const transferExtrinsic = api.tx.balances.transfer('5C5555yEXUcmEJ5kkcCMvdZjUo7NGJiQJMS7vZXEeoMhj3VQ', 123456)

// to be able to retrieve the signer interface from this account
// we can use web3FromSource which will return an InjectedExtension type
const injector = await web3FromSource(account.meta.source);

// passing the injected account address as the first argument of signAndSend
// will allow the api to retrieve the signer and the user will see the extension
// popup asking to sign the balance transfer transaction
transferExtrinsic.signAndSend(account.address, { signer: injector.signer }, ({ status }) => {
    if (status.isInBlock) {
        console.log(`Completed at block hash #${status.asInBlock.toString()}`);
    } else {
        console.log(`Current status: ${status.type}`);
    }
}).catch((error: any) => {
    console.log(':( transaction failed', error);
});
```
